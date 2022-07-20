import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rockets from './Rockets/Rockets';
import Missions from './Missions';
import { getReserved as getReservedRockets } from '../../redux/rockets/rockets';
import fetchRockets from '../../redux/rockets/RocketsService';

const Profile = () => {
  const dispatch = useDispatch();
  const { loaded, reserved } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchRockets());
    }
    dispatch(getReservedRockets());
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>My Missions</h3>
          <div className="profile-content">
            <Missions />
          </div>
        </Col>
        <Col>
          <h3>My Rockets</h3>
          <div className="profile-content">
            <Rockets
              reserved={reserved}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
