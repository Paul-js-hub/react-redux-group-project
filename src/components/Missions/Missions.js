import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Mission from './Mission';
import { getMissions } from '../../redux/missions/missions';

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
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
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
  );
};

export default Missions;
