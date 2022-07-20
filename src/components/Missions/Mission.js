import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = ({
  name, description, id, reserved,
}) => {
  const dispatch = useDispatch();
  const updateMission = () => {
    dispatch(joinMission(id));
  };

  const cancelMission = () => {
    dispatch(leaveMission(id));
  };
  return (
    <tbody key={id}>
      <tr>
        <td>1</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{reserved ? <Badge bg="primary">Active Member</Badge> : <Badge bg="secondary">NOT A MEMBER</Badge>}</td>
        <td>{reserved ? <Button variant="danger" onClick={cancelMission}>Leave Mission</Button> : <Button variant="secondary" onClick={updateMission}>Join Mission</Button>}</td>
      </tr>
    </tbody>
  );
};

Mission.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};

Mission.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};

export default Mission;
