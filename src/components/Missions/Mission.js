import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Mission = ({ name, description }) => (
  <tbody>
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{description}</td>
      <td><Button variant="secondary">NOT A MEMBER</Button></td>
      <td><Button variant="secondary">Join Mission</Button></td>
    </tr>
  </tbody>
);

Mission.defaultProps = {
  name: PropTypes.string,
  description: PropTypes.string,
};

Mission.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default Mission;
