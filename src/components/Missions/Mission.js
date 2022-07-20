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
    console.log('ID', id);
    console.log('Reserved', reserved);
    dispatch(joinMission({ id }));
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
        <td><Badge bg="secondary">{reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}</Badge></td>
        <td>{reserved ? <Button variant="secondary" onClick={() => cancelMission(id)}>Leave Mission</Button> : <Button variant="secondary" onClick={() => updateMission(id)}>Join Mission</Button>}</td>
      </tr>
    </tbody>
  );
};

Mission.defaultProps = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};

Mission.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  reserved: PropTypes.bool,
};

export default Mission;
