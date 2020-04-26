import React, { Component } from "react";
import './css/LoginSignup.css';

export default class SignUp extends Component {

    join = () => {
        const joinName = this.joinName.value;
        const joinEmail = this.joinEmail.value;
        const joinPassword = this.joinPassword.value;
        const joinZipcode = this.joinZipcode.value;
        const joinAddress = this.joinAddress.value;
        const joinAddressDetail = this.joinAddressDetail.value;

        const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        const regExp2 = /^[A-Za-z0-9]{8,64}$/;

        if (joinName === "" || joinName === undefined) {
            alert("이름을 입력해주세요.");
            this.joinName.focus();
            return;
        } else if (joinEmail === "" || joinEmail === undefined) {
            alert("이메일 주소를 입력해주세요.");
            this.joinEmail.focus();
            return;
        } else if (
            joinEmail.match(regExp) === null ||
            joinEmail.match(regExp) === undefined
        ) {
            alert("이메일 형식에 맞게 입력해주세요.");
            this.joinEmail.value = "";
            this.joinEmail.focus();
            return;
        } else if (joinPassword === "" || joinPassword === undefined) {
            alert("비밀번호를 입력해주세요.");
            this.joinPw.focus();
            return;
        } else if (
            joinPassword.match(regExp2) === null ||
            joinPassword.match(regExp2) === undefined
        ) {
            alert("비밀번호를 숫자와 문자 포함 8~64자리로 입력해주세요.");
            this.joinPw.value = "";
            this.joinPw.focus();
            return;
        }   // 우편번호, 주소, 상세주소, 전화번호는 차후 구현

        const send_param = {
            // headers,
            email: this.joinEmail.value,
            name: this.joinName.value,
            password: this.joinPw.value
        };
        /* 서버쪽 컨트롤러와 url 맞춰서 연결해서 보내기
        axios
            .post("http://localhost:8080/member/join", send_param)
            //정상 수행
            .then(returnData => {
                if (returnData.data.message) {
                    alert(returnData.data.message);
                    //이메일 중복 체크
                    if (returnData.data.dupYn === "1") {
                        this.joinEmail.value = "";
                        this.joinEmail.focus();
                    } else {
                        this.joinEmail.value = "";
                        this.joinName.value = "";
                        this.joinPw.value = "";
                    }
                } else {
                    alert("회원가입 실패");
                }
            })
            //에러
            .catch(err => {
                console.log(err);
            });
          
         */
    };

    render() {
        return (
            <div className="signup pb-5 pt-5">
                <form className="signupForm">
                    <h3>회원가입</h3>

                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>이름</label>
                        <input type="text" className="form-control" placeholder="name" ref={ref => (this.joinName = ref)}/>
                    </div>

                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>이메일</label>
                        <input type="email" className="form-control" placeholder="Enter email" ref={ref => (this.joinEmail = ref)}/>
                    </div>

                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>비밀번호</label>
                        <input type="password" className="form-control" placeholder="Enter password" ref={ref => (this.joinPassword = ref)}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>우편번호</label>
                        <input type="text" className="form-control" placeholder="Enter Address" ref={ref => (this.joinZipcode = ref)}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>주소</label>
                        <input type="text" className="form-control" placeholder="Enter Address" ref={ref => (this.joinAddress = ref)}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>상세주소</label>
                        <input type="text" className="form-control" placeholder="Enter Address" ref={ref => (this.joinAddressDetail = ref)}/>
                    </div>
                    <div className="form-group">
                        <label style={{fontSize:"15px"}}>전화번호</label>
                        <input type="text" className="form-control" placeholder="Enter Phone number" ref={ref => (this.joinPhone = ref)}/>
                    </div>

                    <button type="submit" className="btn-block btn btn-success">가입하기</button>
                </form>
            </div>
        );
    }
}