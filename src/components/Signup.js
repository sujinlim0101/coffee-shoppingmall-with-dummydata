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

    const [success, setSuccess] = useState(false);

    function signup(e) {
        e.preventDefault();
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const passwd = document.getElementById('passwd').value;
        const zonecode = document.getElementById('zonecode').value;
        const address1 = document.getElementById('address1').value;
        const address2 = document.getElementById('address2').value;
        const phone = document.getElementById('phone').value;

        if (name === ' ') {
            alert('이름이 입력되지 않았습니다.');
            return false;
        } else if (email === '') {
            alert('이메일이 입력되지 않았습니다.');
            return false;
        } else if (email.match(regExp) === null || email.match(regExp) === undefined) {
            alert("이메일 형식에 맞게 입력해주세요.");
            this.loginEmail.focus();
            return false;
        } else if (passwd === '') {
            alert('비밀번호가 입력되지 않았습니다.');
            return false;
        } else if (zonecode === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (address1 === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (address2 === '') {
            alert('주소가 입력되지 않았습니다.');
            return false;
        } else if (phone === '') {
            alert('핸드폰이 입력되지 않았습니다.');
            return false;
        }
        const infos = {
            name,
            email,
            passwd,
            zonecode,
            address1,
            address2,
            phone
        }
        axios({
            method: 'post',
            url: 'http://localhost:8080/member/auth',
            data: JSON.stringify(infos),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            console.log(res.data.success);
            this.setState({success: res.data.success});
            if (this.state.success) {
                this.props.history.push("/login");
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
        console.log(address);
        console.log(data.zonecode);
        console.log(fullAddress);
        history.push("/login");

    }

    return (
        <div className="signup pb-5 pt-5">
            <form className="signupForm">
                <h3>회원가입</h3>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이름</label>
                    <input type="text" className="form-control" placeholder="이름" id={'name'}/>
                </div>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이메일</label>
                    <input type="email" className="form-control" placeholder="이메일" id={'email'}/>
                </div>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>비밀번호</label>
                    <input type="password" className="form-control" placeholder="비밀번호" id={'passwd'}/>
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
                    <input type="text" className="form-control" placeholder="상세주소" id={'address2'}/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>핸드폰</label>
                    <input type="text" className="form-control" placeholder="핸드폰 번호" id={'phone'}/>
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