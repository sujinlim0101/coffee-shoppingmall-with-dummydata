import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Mycarousel = () => {
  return(
<Carousel className="mycaro" style={{position: "relative"}}>
  <Carousel.Item>
    <img width={2560} 
      height={450}
      className="d-block"
      src= {require("../images/manycups.jpg")} 
      alt="First slide" 
      style={{filter:"blur(1px)"}}
    /> 
    <Carousel.Caption>
      <h3> 우린 직접 커피를 볶습니다. </h3>
      <h5> 3일 안에 볶은 신선한 원두로</h5>
      <h5>하루를 시작해보세요!</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://picsum.photos/id/425/2560/450"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>우리는 커피도 볶지만</h3>
      <h5>맛있는 콩을 카페에도 제공합니다. </h5>
      <h5>우리에 대해 더 알아봐요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block "
      width={2560} 
      height={450}
      src={require("../images/brewing.jpg")} 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>커피도 도구가 중요한가요?</h3>
      <h5>그렇죠! 좋은 기구로 맛있는 </h5>
      <h5> 커피를 경험하세요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Mycarousel;