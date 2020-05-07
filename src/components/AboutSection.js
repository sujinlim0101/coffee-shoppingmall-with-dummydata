import React from "react";

class AboutSection extends React.Component{

    /*componentDidMount() {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    }*/

    render(){
        window.scrollTo(0, 0);
        return (
            <div className="container mb-5" style={{textAlign:"center"}}>
                <h1 className="mt-5" style={{color:'#17a2b8'}}>About us</h1>
                <div>

                    <h4>[DayLight Coffee Roasters Wholesale]</h4>
                    <br/>

                    <img className="img-fluid"src={require('./../images/coffeeinhand.jpg')} style={{marginLeft:'auto', marginRight:"auto", display:"block"}}/>
                    <h3 style={{ textDecoration: "underline"}} className="mt-4 mb-4">Since 2003</h3>
                    {/*<div id={'map'}/>*/}
                    <p>양평에 있는 작은 커피숍에서 시작하였습니다.</p>
                    <p>지금은 20명의 사원의</p>
                   <p>로스팅 업체로 성장했습니다.</p>
                </div>
                <h3 className="mt-4 mb-4" style={{ textDecoration: "underline"}}>Wholesale</h3>
                <div>
                    <p>혹시, 맛있고, 신선한 커피를 원하신다면?</p>
                    <p>저희는 커피를 핸드 pick하여</p>
                    <p>품질 좋은 원두만을 선별합니다.</p>
                    <p>매년 바리스타 대회에서</p>
                    <p>상을 받고 있습니다.</p>
                    <p>신선하고 인정받는 원두를 데이라이트에서 즐기세요!</p>


                </div>
            </div>
        );
    }
}

export default AboutSection;