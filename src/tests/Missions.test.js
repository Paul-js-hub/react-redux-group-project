import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions/Missions';
import store from '../redux/configureStore';

test('it returns a missions component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
