import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Mission from './Mission';
import { getMissions } from '../../redux/missions/missions';
import styles from './missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.missions);
  const { pending } = result;
  useEffect(() => {
    if (pending) {
      dispatch(getMissions());
    }
  }, []);
  return (
    <Container>
      <Table striped bordered hover size="sm" className={styles.table}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        {result.missions.map((mission) => (
          <Mission
            key={mission.mission_id}
            id={mission.mission_id}
            name={mission.name}
            description={mission.description}
            reserved={mission.reserved}
          />
        ))}
      </Table>
    </Container>
  );
};

export default Missions;
