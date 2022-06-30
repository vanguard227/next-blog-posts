import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Comments from "../components/comments";

describe("<Comments />", () => {
  const comments = [
    {
      id: "1",
      title: "Comment1",
      description: "Comment description",
      createdAt: "2020-10-07T21:01:51.705Z",
    },
  ];

  it("matches snapshot", () => {
    const component = renderer.create(
      <Comments
        comments={comments}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders comments", () => {
    const wrapper = shallow(<Comments comments={comments} />);
    let actual = wrapper.find("h6").text();
    expect(actual).toBe(comments[0].title);

    actual = wrapper.find("span").text();
    const expected = new Date(comments[0].createdAt).toLocaleDateString();
    expect(actual).toBe(expected);

    actual = wrapper.find("p").text();
    expect(actual).toBe(comments[0].description);

    actual = wrapper.find("div").length;
    expect(actual).toBe(comments.length);
  });
});
