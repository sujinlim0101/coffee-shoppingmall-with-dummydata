import React, {Component} from "react";
import '../App.css';

export default class Login extends Component {
    render() {
        return (
            <form className="formInner container">
                <h3>로그인</h3>

                <div className="form-group">
                    <label>이메일</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" className="form-control" placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    </div>
                </div>
                <button type="submit" className="btn-block btn btn-success">확인</button>
            </form>
        );
    }
}
