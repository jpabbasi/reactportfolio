import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import testimonials from './data'
import './testimonials.css'
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Recommendations</h2>
      <div className="testimonials__container">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },}}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id} testimonial={testimonial}>
            <Testimonial testimonial={testimonial}/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </section>
  )
}

export default Testimonials