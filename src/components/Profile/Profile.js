import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rockets from './Rockets';
import Missions from './Missions';

const Profile = () => (
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
          <Rockets />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Profile;
