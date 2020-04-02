import React, { Component } from "react";
import './css/LoginSignup.css';

export default class SignUp extends Component {
    render() {
        return (
            <div className="backColor pb-5 pt-5">
                <form className="formInner">
                    <h3>회원가입</h3>

                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" className="form-control" placeholder="name" />
                    </div>

                    <div className="form-group">
                        <label>이메일</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>비밀번호</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label>주소</label>
                        <input type="text" className="form-control" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <label>전화번호</label>
                        <input type="text" className="form-control" placeholder="Enter Phone number" />
                    </div>

                    <button type="submit" className="btn-block btn btn-success">가입하기</button>
                </form>
            </div>
        );
    }
}