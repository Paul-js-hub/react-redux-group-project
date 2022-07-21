import PropTypes from 'prop-types';
import Rocket from './Rocket';

const Rockets = (props) => {
  const { reserved } = props;
  return (
    <>
      {reserved.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
        />
      ))}
    </>
  );
};

Rockets.propTypes = {
  reserved: PropTypes.instanceOf(Array).isRequired,
};

export default Rockets;
