import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore';
import Rockets from '../Rockets';

describe('Rockets test', () => {
  it('Rockets render correctly', () => {
    const RocketsPage = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(RocketsPage).toMatchSnapshot();
  });

  test('Render Rockets component', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });
});
