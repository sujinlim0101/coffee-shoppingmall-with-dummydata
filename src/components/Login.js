import React, {Component} from "react";
import './css/LoginSignup.css';
import { Link } from "react-router-dom";

export default class Login extends Component {
    render() {
        return (
            <div className="pb-5 backColor" style={{height:"800px"}}>
                <div style={{height:"70px"}}></div>
                <form className="formInner container pt-5 pb-5">
                    
                    <h3  className="mb-4">로그인</h3>

                    <div className="form-group ">
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
                        <button type="submit" className="btn-block btn btn-success">확인</button>
                    </div>
                
                    <p className="mt-4" style={{fontSize:"small"}}>아직 회원이 아니시라면? <Link to="./signup" style={{fontSize:"small"}}> 회원가입</Link></p>
                    
                </form>
            </div>
        );
    }
}
