import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

import Authors from "../components/authors";

describe("<Authors />", () => {
  const authors = [
    {
      id: "1",
      name: "John Smith",
      avatar: "https://cdn.fakercloud.com/avatars/iamsteffen_128.jpg",
    },
  ];

  it("matches snapshot", () => {
    const component = renderer.create(<Authors authors={authors} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders authors", () => {
    const wrapper = shallow(<Authors authors={authors} />);
    let actual = wrapper.find("img").props().src;
    //expect(actual).toBe(authors[0].avatar);

    actual = wrapper.find("p").text();
    expect(actual).toBe(authors[0].name);

    actual = wrapper.find("div").length;
    expect(actual).toBe(authors.length);
  });
});
