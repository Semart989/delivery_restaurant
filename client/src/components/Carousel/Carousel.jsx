import React from 'react';
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://img.the-village.me/the-village.me/post-cover/-k0NDtajdfoONfacIAqvoA-default.jpg"
            alt="First slide" width="200" height="500"
          />
          <Carousel.Caption>
            <p>Всегда свежие блюда</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://kidpassage.com/images/publications/eda-kemere-chto-poprobovat-skolko-stoit/eda-kemere-chto-poprobovat-skolko-stoit-photo1_899275124.jpg"
            alt="Second slide" width="200" height="500"
          />
          <Carousel.Caption>
            <p>Быстрая доставка</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.the-village.me/the-village.me/post-cover/-k0NDtajdfoONfacIAqvoA-default.jpg"
            alt="Third slide" width="200" height="500"
          />
          <Carousel.Caption>
            <p>Высокое качество</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ControlledCarousel;
