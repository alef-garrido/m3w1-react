import renderer from 'react-test-renderer';
import Home from '../components/pages/Home';

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});