import React, { useEffect, useState } from 'react';
import sponsors from './sponsors.module.scss';
import sponsorsLine from '../../images/sponsorsImage.svg';

const Sponsors = () => {

  const [sponsorsImage, setSponsorsImage] = useState([]);
  const image = Object.values(sponsorsImage);

  useEffect(() => {
    fetch('https://unleash-16eb3-default-rtdb.firebaseio.com/Sponsors.json')
      .then((data) => data.json())
      .then(cre => setSponsorsImage(cre))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className={sponsors.sponsors}>
      <h2 className={sponsors.title}>Our Sponsors <img className={sponsors.line} src={sponsorsLine} alt="line" /></h2>
      <p className={sponsors.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
      <div className={sponsors.cards}>
        {image.map((item) => (
          <img className={sponsors.card} key={item} src={`${item}`} alt="sponsor" />
        ))}
      </div>
    </div>
  );
}

export default Sponsors;