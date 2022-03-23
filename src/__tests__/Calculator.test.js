import Calculator from "../components/Calculator";
import renderer from "reacr-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
