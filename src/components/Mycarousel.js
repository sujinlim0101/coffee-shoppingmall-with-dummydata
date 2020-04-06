import React from 'react';
import Carousel from 'react-bootstrap/Carousel'



const Mycarousel = () => {
  return(
<Carousel style={{position: "relative"}}>
  <Carousel.Item>
    <img
      className="d-block " 
      width={2560}
      height={401}
      src= {require("../images/manycups.jpg")} 
      alt="First slide" 
    /> 
    <Carousel.Caption>
      <p> 3일 안에 볶은 커피만 보내요. <br/>신선한 원두를 만나보세요.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
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
      width={2560}
      height={401}
      src={require("../images/coffebrew.jpg")} 
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