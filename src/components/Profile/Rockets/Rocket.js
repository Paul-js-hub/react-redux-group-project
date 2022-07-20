import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Rockets = (props) => {
  const { name } = props;

  return (
    <Card body>
      <h4>{name}</h4>
    </Card>
  );
};

Rockets.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Rockets;
