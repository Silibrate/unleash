import React, { useState, useEffect } from "react";
import shop from './shop.module.scss';
import fire from '../../images/fire.svg';
import rombImage from '../../images/romb.svg';

const Shop = () => {

  const [cards, setCards] = useState([]);
  const allCards = Object.values(cards);

  useEffect(() => {
    fetch('https://unleash-16eb3-default-rtdb.firebaseio.com/Shop.json')
      .then((data) => data.json())
      .then((res) => setCards(res))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className={shop.shop}>
      <p className={shop.future}> <img className={shop.fire} src={fire} alt="fire" /> FUTURE OF ESPORTS</p>
      <h2 className={shop.title}>Your one stop shop gaming needs!</h2>
      <p className={shop.text}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
      <div className={shop.cards}>
        {allCards.map((item, id) => (
          <div key={id} className={shop.card}>
            <h3 className={shop.card__title}>{item.title}</h3>
            <p className={shop.card__text}>{item.text}</p>
            <img className={shop.card__img} src={rombImage} alt="Romb" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;