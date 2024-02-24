import React, { useContext } from 'react';
import { json, useNavigate } from 'react-router-dom';
import PlanetContext from '../../../data/PlanetData';
import styles from './card.module.css';



function Card({ title, description, imageUrl, planetData }) {

  const { setknowMorePlanet, knowMorePlanet } = useContext(PlanetContext)

  const navigate = useNavigate();


  const handleClick = () => {
    // localStorage.setItem("planetData",JSON.stringify(planetData))
    navigate('/resident-info')
    setknowMorePlanet(planetData)
    // console.log("this is from card", knowMorePlanet.residents)

  };

  return (
    <div className={styles.card} onClick={handleClick}>

      <picture className={styles.picture}>
        <img
          src={imageUrl}
          className={styles.image}
          alt="Card Image"
          height='100%'
          width='100%'

        />

      </picture>

      <div className={styles.info}>
        <h5 className="card-title text-xl font-semibold">{title}</h5>

        <div className={styles.infoDesc}>
          {
            description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
          ))}
        </div>

        <button
          type="button"
          onClick={handleClick}
          className = {styles.btnStyle}
        >
            Know More
        </button>       
      </div>

    </div>

  );
}

export default Card;
