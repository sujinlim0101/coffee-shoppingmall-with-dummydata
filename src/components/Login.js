import React, {Component} from "react";
import './css/LoginSignup.css';
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false
        }
    }

    login = () => {
        const loginEmail = this.loginEmail.value;
        const loginPassword = this.loginPassword.value;
        const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (loginEmail === '' || loginEmail === undefined) {
            alert("이메일 주소를 입력해 주세요.");
            this.loginEmail.focus();
            return false;
        } else if (loginEmail.match(regExp) === null || loginEmail.match(regExp) === undefined) {
            alert("이메일 형식에 맞게 입력해주세요.");
            this.loginEmail.focus();
            return false;
        } else if (loginPassword === '' || loginPassword === undefined) {
            alert("비밀번호를 입력해 주세요.");
            this.loginPassword.focus();
            return false;
        }

        // 서버에서 받아올 것에 새로운 email, passwd 더해서 전달
        const send_param = {
            email: this.loginEmail.value,
            passwd: this.loginPassword.value
        }
        axios({
            method: 'post',
            url: 'http://211.63.89.156/daylight/member/auth',
            data: JSON.stringify(send_param),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            console.log(res.data.success);
            this.setState({success: res.data.success});
            if (this.state.success) {
                localStorage.setItem("login_email", loginEmail);
                const id = localStorage.getItem("login_email");
                if (id === "admin@admin.com") {
                    window.location.href = "/admin/main.html"
                } else {
                    this.props.history.push("/");
                    window.location.reload();
                }
            } else {
                alert('로그인이 실패하였습니다.');
                return false;
            }
        });
    }

    render() {
        return (
            <div className="pb-5 backColor" style={{height: "800px"}}>
                <div style={{height: "70px"}}></div>
                <div className="formInner container pt-5 pb-5">

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

                </div>
            </div>
        );
    }
}