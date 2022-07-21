import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../components/Missions/Mission';
import store from '../redux/configureStore';

test('it returns a mission component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Mission
        id="1"
        name="name"
        description="description"
        reserved={false}
      />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
