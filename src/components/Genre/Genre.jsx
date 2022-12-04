import genre from './genre.module.scss';
import genreImg1 from '../../images/genreImg1.svg';
import genreImg2 from '../../images/genreImg2.svg';
import genreImg3 from '../../images/genreImg3.svg';

const Genre = () => {
  return (
    <div className={genre.genre}>
      <div className={genre.fps}><img src={genreImg1} alt="aim" />
        <p className={genre.text}>Smooth FPS</p></div>
      <div className={genre.multiplayer}><img src={genreImg2} alt="gamepad" />
        <p className={genre.text}>Multiplayer</p></div>
      <div className={genre.world}><img src={genreImg3} alt="compass" />
        <p className={genre.text}>Open World</p></div>
    </div>
  );
}

export default Genre;