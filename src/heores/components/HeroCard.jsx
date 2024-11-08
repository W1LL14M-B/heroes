import { Link } from "react-router-dom";

const CharactesByHero = ( { alter_ego, characters}) => {
 if ( alter_ego === characters ) return (<></>)
  return <p>{characters}</p>
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  // const charactesByHero = <p>{characters}</p> 

  return (
    <div className="col animate__animated animate__fadeIn"> 
      <div className="row">
        <div className="row no-gutter">
          <div className="col-4">
            <img src={heroImageUrl} className="Card-img" alt={superhero} />
          </div>
          <div className="col.8">
            <div className="card-body">
              <h5 className="card-title"> {superhero}</h5>

             {/*  {
              (alter_ego !== characters ) && charactesByHero
              } */}
              <CharactesByHero characters={characters}  alter_ego={alter_ego} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${ id }`}>
              Mas..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
