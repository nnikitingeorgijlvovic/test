import { create } from "react-test-renderer";
import LandingPage from "../pages/LandingPage";

test("LandingPage", () => {
  const tree = create(<LandingPage />);
  expect(tree).toMatchSnapshot();
});
