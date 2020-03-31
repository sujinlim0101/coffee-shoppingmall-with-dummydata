import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const Mycarousel = () => {
  return(
<Carousel style={{position: "relative"}}>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://i.picsum.photos/id/231/2560/401.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://picsum.photos/id/232/2560/401"
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