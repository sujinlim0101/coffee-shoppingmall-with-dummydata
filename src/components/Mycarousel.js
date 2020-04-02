import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Mycarousel = () => {
  return(
<Carousel style={{position: "relative"}}>
  <Carousel.Item>
    <img width={1600} 
      height={401}
      className="d-block"
      src= {require("../images/manycups.jpg")} 
      alt="First slide" 
    /> 
    <Carousel.Caption>
      <h2> 3일 안에 볶은 커피만 보냅니다. <br/>신선한 원두를 만나보세요.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://picsum.photos/id/253/2560/401"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://picsum.photos/id/233/2560/401"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Mycarousel;