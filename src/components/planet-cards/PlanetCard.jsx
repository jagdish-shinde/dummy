import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "../header/card/Card";
import Pagination from "../Pagination";
import PlanetContext from "../../data/PlanetData";
import { ThreeDots } from "react-loader-spinner";
import styles from './planet-cards.module.css'

function PlanetCard() {
  const {
    planets,
    residents,
    totalPages,
    currentPage,
    loading,
    setCurrentPage,
  } = useContext(PlanetContext);

  const planetImages = [
    "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg",
    "https://img2.cgtrader.com/items/3564600/92038246cb/large/star-wars-planet-pack-2-alderaan-a-new-hope-3d-model-low-poly-rigged-blend.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXW7OzoOETPw-TF95JpKhFvwDSdYjw4LgtlMxjOZPBbW2YvPse43jnh0G0aZL4HgSy1Yk&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Dagobah.jpg/220px-Dagobah.jpg",
    "https://i.pinimg.com/564x/4b/ba/2d/4bba2dd4f662b23cfc6fdcacc0286528.jpg",

    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/wasp-18b_-one_one.jpeg?VersionId=FAJAof33SjOwfN8_C5zZEmfRrzJ36AAF",

    "https://p7.hiclipart.com/preview/463/507/611/5bbce5c184cc9.jpg",
    "https://p1.hiclipart.com/preview/549/398/352/png-planets-of-star-wars-naboo-icon-png-icon-thumbnail.jpg",

    "https://www.nicepng.com/png/full/374-3747261_kamino-australia-in-the-global-economy.png",
    "https://i.pinimg.com/originals/d4/69/6e/d4696e19ee90aa3fbbafe624317ee208.png",
    "https://static.wikia.nocookie.net/starwars/images/5/52/Kamino-DB.png/revision/latest?cb=20150920190527",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f4c4b7d-a2ad-49a4-ad0d-2327cab52046/de6c8ft-163f01c9-61c9-4790-a531-6e509ada0b53.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmNGM0YjdkLWEyYWQtNDlhNC1hZDBkLTIzMjdjYWI1MjA0NlwvZGU2YzhmdC0xNjNmMDFjOS02MWM5LTQ3OTAtYTUzMS02ZTUwOWFkYTBiNTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jsbKumuLzOaLZRTXFQEUlyaZOcd8MsyRsFHo8hlnf_U",
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if(loading) {
    return (
      <div className={styles.loaders}>
        <ThreeDots  color="  #002661" />
      </div>
      
    )
  }

  return (
    <Fragment>
      <div className={`${styles.wrapper}`}>
          {/* <Fragment> */}
            {
                planets.map((planet, index) => (
                  <Card
                    key={index}
                    title={planet.name}
                    description={`Climate: ${planet.climate}\nPopulation: ${planet.population}\nTerrain: ${planet.terrain}`}
                    imageUrl={planetImages[index % planetImages.length]}
                    planetData={planet}
                  />
            ))}

          
          {/* </Fragment> */}
        
      </div>
      <Pagination
        currentPage={currentPage}
        hasNextPage={currentPage < totalPages}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
   </Fragment>
  );
}

export default PlanetCard;
