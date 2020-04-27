import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './css/MyCarousel.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
const Mycarousel = () => {
  return(
<Carousel className="mycaro mb-5" style={{position: "relative"}}>
  <Carousel.Item>
    <Link to="/beans">
      <img width={1920} 
        height={500}
        className="d-block"
        src= {require("../images/whitecoffee.png")} 
        alt="First slide"
      /> 
     </Link>
      <Carousel.Caption>
        <h2 style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}} >48h</h2>
        <h4 className="mt-4" style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}}>48시간 안의 원두만 보냅니다.</h4>
        <h5 className="mt-3" style={{fontWeight: "bold", color:"black", textShadow:"#ffffff 0 0 5px"}}>갓 볶은 좋은 커피를 맛보세요!</h5>
      
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Link to="/about">
      <img
        className="d-block "
        src="https://picsum.photos/id/425/1920/500"
        alt="Third slide"
      />
    </Link>
    <Carousel.Caption>
      <h2 style={{fontWeight: "bold"}} >우리는 커피를 볶고</h2>
      <h4 className="mt-4" style={{fontWeight: "bold"}}>맛있는 콩을 카페에도 "제공"합니다. </h4>
      <h5 className="mt-3">우리에 대해 더 알아봐요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Link to="/tools">
      <img
          className="d-block "
          width={1920} 
          height={500}
          src={require("../images/brewing.jpg")} 
          alt="Third slide"
        />
    </Link>
    <Carousel.Caption>
      <h2 style={{fontWeight: "bold"}}>커피도 [도구]가 중요한가요?</h2>
      <h4 className="mt-4" style={{fontWeight: "bold"}}>그렇죠! 좋은 기구로 맛있는 </h4>
      <h5 className="mt-3"> 커피를 경험하세요.</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Mycarousel;