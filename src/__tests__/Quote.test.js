import renderer from 'react-test-renderer';
import Quote from '../components/pages/Quote';

it('renders on screen', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
