import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './rockets.module.css';

const Rocket = (props) => {
  const {
    id, image, name, desc, handleClick, reserved,
  } = props;

  return (
    <Row className="align-items-center my-5">
      <Col xl={3} md={5}>
        <div className="rocketImage">
          <img src={image} alt={name} width="100%" />
        </div>
      </Col>
      <Col>
        <div className={style.content}>
          <h2>{name}</h2>
          <p className={style.description}>
            {reserved && (<Badge className={style.badge} bg="success">Reserved</Badge>)}
            {desc}
          </p>
        </div>
        {/* {reserveBtn(reserved)} */}
        <Button
          type="button"
          onClick={() => handleClick(id)}
          variant={reserved ? ('secondary') : ('primary')}
          className={style.btn}
        >
          {reserved ? ('Cancel Reservation') : ('Reserve Rocket')}
        </Button>
      </Col>
      {/* {reserved ? ('hello')} */}
    </Row>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Rocket;
