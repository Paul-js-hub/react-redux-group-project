import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Rockets = (props) => {
  const { name } = props;

  return (
    <Card body>
      {name}
    </Card>
  );
};

Rockets.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Rockets;
