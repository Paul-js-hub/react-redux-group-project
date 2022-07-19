import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../../redux/rockets/RocketsService';
// import { reserveRocket } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

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
    // dispatch(reserveRocket(id));
  };
  return (
    <div>
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.flickr_images[0]}
          name={rocket.name}
          desc={rocket.description}
          handleClick={reserve}
        />
      ))}
    </div>
  );
};

export default Rockets;
