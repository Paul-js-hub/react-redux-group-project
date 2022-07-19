import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../../redux/rockets/RocketsService';

const Rockets = () => {
  const dispatch = useDispatch();
  const [{ loaded }, ...rockets] = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchRockets());
    }
  }, []);

  const reserve = (id) => {
    console.log(id);
  };

  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocketContainer">
          <div className="rocketImage">
            <img src={rocket.flickr_images[0]} alt={rocket.name} width="100px" />
          </div>
          <div className="content">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
          </div>
          <button type="button" onClick={() => reserve(rocket.id)}>Reserve</button>
        </div>
      ))}
    </>
  );
};

export default Rockets;
