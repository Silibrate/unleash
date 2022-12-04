import newEra from './newEra.module.scss';
import newEraImage from '../../images/newEraIMAGE.svg';
import fire from '../../images/fire.svg';
const NewEra = () => {
  return (
    <div className={newEra.newEra}>
      <div className={newEra.container}>
        <p className={newEra.future}><img className={newEra.fire} src={fire} alt="Fire" /> FUTURE OF ESPORTS</p>
        <h2 className={newEra.title}>The new era of cloud gaming here</h2>
        <p className={newEra.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>
        <button className={newEra.button} type='button'>Explore More</button>
      </div>
      <img className={newEra.image} src={newEraImage} alt="Gamer" />
    </div>
  );
}

export default NewEra;