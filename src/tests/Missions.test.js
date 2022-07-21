import renderer from 'react-test-renderer';
import Missions from '../components/Missions/Missions';
import store from '../redux/configureStore'
import { Provider } from 'react-redux';

test('it returns a missions component', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <Missions />
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});