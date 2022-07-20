import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import fetchRockets from '../../redux/rockets/RocketsService';
import { reserveRocket } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loaded, data } = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchRockets());
    }
  }, []);

  const reserve = (id) => {
    dispatch(reserveRocket(id));
  };
  return (
    <Container fluid>
      {data.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          image={rocket.flickr_images[0]}
          name={rocket.name}
          desc={rocket.description}
          reserved={rocket.reserved}
          handleClick={reserve}
        />
      ))}
    </Container>
  );
};

export default Rockets;
