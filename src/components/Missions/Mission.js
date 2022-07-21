import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import styles from './missions.module.css';

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
        <td>{name}</td>
        <td>{description}</td>
        <td className={styles.reserved}>{reserved ? <Badge bg="primary">Active Member</Badge> : <Badge bg="secondary">NOT A MEMBER</Badge>}</td>
        <td className={styles.reserved}>{reserved ? <Button className={styles.btn} variant="danger" type="button" onClick={cancelMission}>Leave Mission</Button> : <Button className={styles.btn} variant="secondary" type="button" onClick={updateMission}>Join Mission</Button>}</td>
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
