import renderer from "react-test-renderer";
import Pagination from "../components/pagination";
import { shallow } from "enzyme";

describe("<Pagination />", () => {
  it("matches snapshot", () => {
    const component = renderer.create(
      <Pagination page={1} setPage={() => {}} total={10} limit={5} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Pagination", () => {
    const wrapper = shallow(<Pagination page={1} setPage={() => {}} total={10} limit={5} />);
    let actual = wrapper.find("label").text();
    expect(actual).toBe("1");

    actual = wrapper.find("button").length;
    expect(actual).toBe(4);
  });

  it("disble first, previous button", () => {
    const wrapper = shallow(<Pagination page={1} setPage={() => {}} total={13} limit={5} />);
    const prevBtn = wrapper.findWhere(
      node => node.props().disabled === true
    )
    let actual = prevBtn.length;
    expect(actual).toBe(2);
  });

  it("disble last, next button", () => {
    const wrapper = shallow(<Pagination page={3} setPage={() => {}} total={13} limit={5} />);
    const prevBtn = wrapper.findWhere(
      node => node.props().disabled === true
    )
    let actual = prevBtn.length;
    expect(actual).toBe(2);
  });
});
