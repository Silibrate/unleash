import customize from './customize.module.scss';
import Slider from "react-slick";
import "./slick-slider/slick.css";
import "./slick-slider/slick-theme.css";
import customizeImage from '../../images/customize.svg';
import fire from '../../images/fire.svg'
import img1 from '../../images/karusel1.svg';
import img2 from '../../images/karusel2.svg';
import img3 from '../../images/karusel3.svg';

const Customize = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1392,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1212,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div className={customize.customize}>
      <img className={customize.image} src={customizeImage} alt="CustomizeImage" />
      <div className={customize.container}>
        <p className={customize.future}><img className={customize.fire} src={fire} alt="Fire" />FUTURE OF eSPORTS</p>
        <h2 className={customize.title}>Customize your Own Character</h2>
        <p className={customize.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
        <Slider {...settings}>
          <div className={customize.slick__container}>
            <img className={customize.slid__img} src={img1} alt="img1" />
          </div>

          <div className={customize.slick__container}>
            <img className={customize.slid__img} src={img2} alt="img2" />
          </div>

          <div className={customize.slick__container}>
            <img className={customize.slid__img} src={img3} alt="img3" />
          </div>

          <div className={customize.slick__container}>
            <img className={customize.slid__img} src={img1} alt="img1" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Customize;