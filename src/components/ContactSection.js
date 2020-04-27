import React from "react";

class ContactSection extends React.Component{
    render(){
        return (
            <div className="container" style={{textAlign:"center"}}>
                <h1 className="mt-5">Contact us</h1>
                <div>
                <h4>[DayLight Coffee Roasters Wholesale]</h4>
                <h6>Special Coffee</h6>
                <ul>
                    <li>좋은 질의 커피</li>
                    <li>꼼꼼한 커피 선별 작업</li>
                    <li>48시간 안에 로스팅</li>
                </ul>
                <h6>Wholesale</h6>

                <p>카페에 질 좋고, 신선한 커피를 원하시나요?</p>
                <p>소량 판매 뿐만 아니라, 많은 업주님들과 도매로도 판매합니다.</p>
                <p>혹시, 맛있고, 신선한 커피를 원하신다면?</p>
                <p>주말을 제외한 9시부터 6시까지 상담을 진행합니다.</p>
                <p>꼭 결정한 후에 상담할 필요는 없어요.</p>
                <p>편한 마음으로 저희에게 연락주세요!</p>
                도매커피에 대해 알고싶다면 저희에게 연락주세요! <br/> 
               연락하기 : <a href="mailto:mimitn@hanmail.net.com">데이라이트 연락하기(담당자)</a><br/> 
                </div>
            </div>
        );
    }
}

export default ContactSection;