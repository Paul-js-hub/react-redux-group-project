import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    id, image, name, desc, handleClick,
  } = props;

  return (
    <>
      <div key={id} className="rocketContainer">
        <div className="rocketImage">
          <img src={image} alt={name} width="100px" />
        </div>
        <div className="content">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
        <button type="button" onClick={() => handleClick(id)}>Reserve</button>
      </div>

    </>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Rocket;
