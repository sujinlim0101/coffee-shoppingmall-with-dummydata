import React, {useState} from "react";
import DaumPostcode from "react-daum-postcode";
import {Button, Modal} from "react-bootstrap";
import './css/LoginSignup.css';
import history from "./helpers/history";
import axios from "axios";


function SignUp() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [address, setAddress] = useState('');
    const [zonecode, setZonecode] = useState('');

    function signup(e) {
        e.preventDefault();
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordCheck = document.getElementById('passwordCheck').value;
        const zipCode = document.getElementById('zonecode').value;
        const baseAddress = document.getElementById('address1').value;
        const detailAddress = document.getElementById('address2').value;
        const phone = document.getElementById('phone').value;

        if (name === '') {
            alert('이름이 입력되지 않았습니다.');
            return false;
        } else if (email === '') {
            alert('이메일이 입력되지 않았습니다.');
            return false;
        } else if (email.match(regExp) === null || email.match(regExp) === undefined) {
            alert("이메일 형식에 맞게 입력해주세요.");
            return false;
        } else if (password === '') {
            alert('비밀번호가 입력되지 않았습니다.');
            return false;
        } else if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.');
            return false;
        } else if (zipCode === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (baseAddress === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (detailAddress === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (phone === '') {
            alert('핸드폰이 입력되지 않았습니다.');
            return false;
        }
        const infos = {
            name,
            email,
            password,
            zipCode,
            baseAddress,
            detailAddress,
            phone
        }
        axios({
            method: 'post',
            url: 'http://211.63.89.156:8080/daylight/member/signup',
            data: JSON.stringify(infos),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if (res.data.success) {
                history.push("/login");
                window.location.reload();
            } else {
                alert('회원가입이 실패하였습니다. 확인 부탁드립니다.');
                return false;
            }
        });
    }

    // 주소 받기
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        handleClose();

        setAddress(fullAddress);
        setZonecode(data.zonecode);
        history.push("/login");

    }

    const myOnBlur = (e) => {
        if(e.target.id === 'name'){
            const name = document.getElementById('name').value;
            const warnNameDOM = document.getElementById('warnName');
            if(name === ''){
                warnNameDOM.innerText = '필수 값입니다.';
            } else{
                warnNameDOM.innerText = '';
            }
        } else if(e.target.id === 'email'){
            const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const email = document.getElementById('email').value;
            const warnEmailDOM = document.getElementById('warnEmail');
            if(email === ''){
                warnEmailDOM.innerText = '필수 값입니다.';
            } else if(email.match(regExp) === null || email.match(regExp) === undefined){
                warnEmailDOM.innerText = '이메일의 형식이 다릅니다.';
            } else{
                warnEmailDOM.innerText = '';
            }
        } else if(e.target.id === 'password'){
            const password = document.getElementById('password').value;
            const warnPasswordDOM = document.getElementById('warnPassword');
            if(password === ''){
                warnPasswordDOM.innerText = '필수 값입니다.';
            } else{
                warnPasswordDOM.innerText = '';
            }
        } else if(e.target.id === 'passwordCheck'){
            const password = document.getElementById('password').value;
            const passwordCheck = document.getElementById('passwordCheck').value;
            const warnPasswordCheckDOM = document.getElementById('warnPasswordCheck');
            if(passwordCheck === ''){
                warnPasswordCheckDOM.innerText = '필수 값입니다.';
            } else if(password !== passwordCheck){
                warnPasswordCheckDOM.innerText = '비밀번호가 일치하지 않습니다.';
            } else{
                warnPasswordCheckDOM.innerText = '';
            }
        } else if(e.target.id === 'address2'){
            const address = document.getElementById('address2').value;
            const warnAddressDOM = document.getElementById('warnAddress');
            if(address === ''){
                warnAddressDOM.innerText = '필수 값입니다.';
            } else{
                warnAddressDOM.innerText = '';
            }
        } else if(e.target.id === 'phone'){
            const phone = document.getElementById('phone').value;
            const warnPhoneDOM = document.getElementById('warnPhone');
            if(phone === ''){
                warnPhoneDOM.innerText = '필수 값입니다.';
            } else{
                warnPhoneDOM.innerText = '';
            }
        }
    }

    return (
        <div className="signup pb-5 pt-5">
            <form className="signupForm">
                <h3>회원가입</h3>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이름</label>
                    <input type="text" className="form-control" placeholder="이름" id={'name'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnName'}></div>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이메일</label>
                    <input type="email" className="form-control" placeholder="이메일" id={'email'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnEmail'}></div>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>비밀번호</label>
                    <input type="password" className="form-control" placeholder="비밀번호" id={'password'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnPassword'}></div>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>비밀번호 재확인</label>
                    <input type="password" className="form-control" placeholder="비밀번호 재확인" id={'passwordCheck'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnPasswordCheck'}></div>
                </div>
                <div className="form-group">
                    <label className="" style={{fontSize: "15px"}}>주소</label> <Button variant="outline-dark"
                                                                                      className="btn btn-outline-success mx-1 px-3"
                                                                                      onClick={handleShow}
                                                                                      style={{fontSize: "x-small"}}>검색</Button>
                    <input type="text mb-1" placeholder="우편번호" className="form-control" disabled={true} value={zonecode}
                           style={{width: "150px"}} id={'zonecode'}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="주소" disabled={true} value={address}
                           id={'address1'}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="상세주소" id={'address2'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnAddress'}></div>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>핸드폰</label>
                    <input type="text" className="form-control" placeholder="핸드폰 번호" id={'phone'} onBlur={myOnBlur}/>
                    <div className={'warn'} id={'warnPhone'}></div>
                </div>
                <button type="submit" className="btn-block btn btn-success" onClick={signup}>가입하기</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>주소 조회</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DaumPostcode
                            onComplete={handleComplete}/>
                    </Modal.Body>
                </Modal>
            </form>
        </div>
    );
}

export default SignUp;