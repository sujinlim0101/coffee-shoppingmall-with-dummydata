import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const Mycarousel = () => {
  return(
<Carousel className="mycaro mb-5" style={{position: "relative"}}>
  <Carousel.Item>

    <img width={2560} 
      height={500}
      className="d-block"

      src= {require("../images/whitecoffee.png")} 
      alt="First slide" 
      style={{filter:"blur(1px)"}}
    /> 
    <Carousel.Caption>
      <h2 style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}} >48H</h2>
      <h4 style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}}>48시간 안의 원두만 보냅니다.</h4>
      <h5 className="mt-3" style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}}>갓 볶은 좋은 커피를 맛보세요!</h5>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://picsum.photos/id/425/2560/500"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{fontWeight: "bold"}} >우리는 커피를 [볶고]</h3>
      <h5 className="mt-3"style={{fontWeight: "bold"}}>맛있는 콩을 카페에도 "제공"합니다. </h5>
      <h5 className="mt-3">우리에 대해 더 알아봐요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block "
      width={2560} 
      height={500}
      src={require("../images/brewing.jpg")} 
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{fontWeight: "bold"}}>커피도 [도구]가 중요한가요?</h3>
      <h5 className="mt-3"style={{fontWeight: "bold"}}>그렇죠! 좋은 기구로 맛있는 </h5>
      <h5 className="mt-3"> 커피를 경험하세요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Mycarousel;