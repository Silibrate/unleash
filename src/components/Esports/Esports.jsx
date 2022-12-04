import esports from './esports.module.scss';
import image from '../../images/esports.svg';
import fire from '../../images/fire.svg';
import madeImage from '../../images/madeImage.svg';
import titleImage from '../../images/titleImage.svg';

const Esports = () => {
  return (
    <div className={esports.esports}>
      <div className={esports.container}>
        <div className={esports.content}>
          <p className={esports.future}><img className={esports.fire} src={fire} alt="fire" /> FUTURE OF ESPORTS</p>
          <h1 className={esports.title}>Unleash the Next Generation of Gaming <img className={esports.title_img} src={titleImage} alt="line" /></h1>
          <p className={esports.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
          <div className={esports.buttons}>
            <button className={esports.button} type='button'>Explore More</button>
            <button className={esports.button} type='button'>View our team</button>
          </div>
          <div className={esports.socials}>
            <p className={esports.social}>FACEBOOK</p>
            <p className={esports.social}>INSTAGRAM</p>
            <p className={esports.social}>TWITCH</p>
          </div>
        </div>
        <img className={esports.image} src={image} alt="fighter" />
        <img className={esports.madeImage} src={madeImage} alt="made in webflow" />
      </div>
    </div>
  );
}

export default Esports;