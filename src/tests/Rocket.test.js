import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rockets/Rockets';

describe('One rocket test', () => {
  it('Rocket render correctly', () => {
    const RocketPage = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    ).toJSON();
    expect(RocketPage).toMatchSnapshot();
  });

  test('Render rocket component', () => {
    render(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
  });
});
