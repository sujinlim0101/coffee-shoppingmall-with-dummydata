import React, {useState} from "react";
import DaumPostcode from "react-daum-postcode";
import {Button, Modal} from "react-bootstrap";
import './css/LoginSignup.css';

function SignUp() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [address, setAddress] = useState('');
    const [zonecode, setZonecode] = useState('');


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
    }

    return (
        <div className="signup pb-5 pt-5">
            <form className="signupForm">
                <h3>회원가입</h3>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이름</label>
                    <input type="text" className="form-control" placeholder="이름"/>
                </div>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>이메일</label>
                    <input type="email" className="form-control" placeholder="이메일"/>
                </div>

                <div className="form-group">
                    <label style={{fontSize: "15px"}}>비밀번호</label>
                    <input type="password" className="form-control" placeholder="비밀번호"/>
                </div>
                <div className="form-group" >
                    <label className=""style={{fontSize: "15px"}}>주소</label> <button className="btn btn-outline-success mx-1 px-3" onClick={handleShow} style={{fontSize:"x-small"}}>검색</button>
                    <input type="text mb-1" placeholder="우편번호" className="form-control" disabled={true} value={zonecode}
                        style={{width:"150px"}}/>
                </div>
                <div className="form-group" >
                    <input type="text" className="form-control" placeholder="주소" disabled={true} value={address}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="상세주소"/>
                </div>
                <div className="form-group">
                    <label style={{fontSize: "15px"}}>핸드폰</label>
                    <input type="text" className="form-control" placeholder="핸드폰 번호"/>
                </div>

                <button type="submit" className="btn-block btn btn-success">가입하기</button>

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