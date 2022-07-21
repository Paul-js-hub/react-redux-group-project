import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Test of navbar', () => {
  it('test if the navbar is rendered', () => {
    const navbar = renderer
      .create(<Router><Navbar /></Router>)
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
