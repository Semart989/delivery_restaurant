import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../Carousel/Carousel.module.css'

function ControlledCarousel() {
  return (
    <>
      <Carousel className={styles.carousel}>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/img/carousel/soup-cat.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h6>Всегда свежие блюда</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/img/carousel/garnish-cat.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h6>Быстрая доставка</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="d-block w-100"
            src="/img/carousel/garnish-cat.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h6>Высокое качество</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ControlledCarousel;
