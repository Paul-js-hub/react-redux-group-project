import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
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
        <td className={styles.reserved}>{reserved ? <Badge className={styles.btnbadge} bg="danger" type="button" onClick={cancelMission}>Leave Mission</Badge> : <Badge className={styles.btnbadge} bg="secondary" type="button" onClick={updateMission}>Join Mission</Badge>}</td>
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
