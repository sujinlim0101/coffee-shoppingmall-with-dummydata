import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const Mycarousel = () => {
  return(
<Carousel className="mycaro mb-5" style={{position: "relative"}}>
  <Carousel.Item>

    <img width={2560} 
      height={450}
      className="d-block"

      src= {require("../images/manycups.jpg")} 
      alt="First slide" 
      style={{filter:"blur(1px)"}}
    /> 
    <Carousel.Caption>
      <h3> 데이라이트는 48시간 이내</h3>
      <h5>볶은 원두를 보냅니다.</h5>
      <h5>좋은 커피를 맛보세요!</h5>
     
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