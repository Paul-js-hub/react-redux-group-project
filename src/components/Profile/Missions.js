import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div>

      {joinedMissions.map((mission) => (
        <div key={mission.mission_id}>
          <Card body>{mission.name}</Card>
        </div>
      ))}
    </div>
  );
};

export default Missions;
