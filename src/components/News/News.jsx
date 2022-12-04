import news from './news.module.scss';
import React, { useState, useEffect } from 'react';
import fire from '../../images/fire.svg';

const News = () => {
  const [cards, setCards] = useState([]);
  const [bigNew, setBigNew] = useState([]);
  const allNews = Object.values(cards);
  const mainNews = Object.values(bigNew);

  useEffect(() => {
    fetch("https://unleash-16eb3-default-rtdb.firebaseio.com/News.json")
      .then(data => data.json())
      .then(res => setCards(res))
      .catch((err) => { console.log(err) });

    fetch("https://unleash-16eb3-default-rtdb.firebaseio.com/bigNews.json")
      .then(data => data.json())
      .then(res => setBigNew(res))
      .catch((err) => { console.log(err) });
  }, [])

  return (
    <div className={news.news}>
      <p className={news.future}><img className={news.fire} src={fire} alt="fire" /> FUTURE OF ESPORTS</p>
      <div className={news.main}>
        <h2 className={news.title}>Latest News & Articles</h2>
        <button className={news.button}>Read More</button>
      </div>
      <div className={news.container}>
        <div className={news.big__news}>
          {mainNews.map((item, id) => (
            <div key={id} className={news.card__big}>
              <img className={news.card__img_big} src={item.link} alt="New" />
              <p className={news.card__data_dig}>{item.data}</p>
              <h2 className={news.card__title_big}>{item.title}</h2>
            </div>
          ))}
        </div>
        <div className={news.cards}>
          {allNews.map((item, id) => (
            <div key={id} className={news.card}>
              <img className={news.card__img} src={item.link} alt="New" />
              <p className={news.card__data}>{item.data}</p>
              <h2 className={news.card__title}>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default News;