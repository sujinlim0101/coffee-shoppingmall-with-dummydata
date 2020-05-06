import React, {Component} from "react";
import './css/LoginSignup.css';
import {Link, Route} from "react-router-dom";
import axios from 'axios';
import jQuery from "jquery";
import HomeSection from "./HomeSection";

window.$ = window.jQuery = jQuery;
axios.defaults.withCredentials = true;
const headers = {withCredentials: true};

export default class Login extends Component {
    login = () => {
        const loginEmail = this.loginEmail.value;
        const loginPassword = this.loginPassword.value;

        if (loginEmail === '' || loginEmail === undefined) {
            alert("이메일 주소를 입력해 주세요.");
            this.loginEmail.focus();
            return;
        } else if (loginPassword === '' || loginPassword === undefined) {
            alert("비밀번호를 입력해 주세요.")
            this.loginPassword.focus();
            return;
        }

        const send_param = {
            // 서버에서 받아올 것에 새로운 email, password 더해서 전달
            email: this.loginEmail.value,
            password: this.loginPassword.value
        }
        /* 서버와 통해서 로그인 성공 or 실패
        axios
            .post("컨트롤러와 통신할 url 경로", send_param)
            .then(returnData => {
                    localStorage.setItem("login_email", returnData.data.email);
                    alert("로그인 성공");
                    window.location.reload();
                } else {
                    alert("로그인 실패");
                }
            })
            //에러
            .catch(err => {
                console.log(err);
            });            
         */
        // 우선 무조건 성공.
        localStorage.setItem("login_email", loginEmail);
        window.location.href="http://localhost:3000/";
        this.props.history.push("/");
        window.location.reload();
    }

    render() {
        return (
            <div className="pb-5 backColor" style={{height: "800px"}}>
                <div style={{height: "70px"}}></div>
                <form className="formInner container pt-5 pb-5" action="http:localhost:8080/SpringBootMybatisDemo/login" method="POST">

                    <h3 className="mb-4">로그인</h3>

                    <div className="form-group ">
                        <label>이메일</label>
                        <input name="email" type="email" className="form-control" placeholder="Enter email"
                               ref={ref => this.loginEmail = ref}/>
                    </div>

                    <div className="form-group">
                        <label>비밀번호</label>
                        <input name="passwd" type="password" className="form-control" placeholder="Enter password"
                               ref={ref => this.loginPassword = ref}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        </div>
                        <button type="submit" className="btn-block btn btn-success" onClick={this.login}>확인</button>
                    </div>

                    <p className="mt-4" style={{fontSize: "small"}}>아직 회원이 아니시라면? <Link to="./signup"
                                                                                        style={{fontSize: "small"}}> 회원가입</Link>
                    </p>

                </form>
            </div>
        );
    }
}