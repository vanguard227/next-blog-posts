import renderer from "react-test-renderer";
import PostCard from "../components/post-card";
import { shallow } from "enzyme";

describe("<PostCard />", () => {
  const title = "Title1";
  const createdAt = "2020-10-07T21:01:51.705Z";
  const description = "Post description";
  const authors = [
    {
      id: "1",
      name: "John Smith",
      avatar: "https://cdn.fakercloud.com/avatars/iamsteffen_128.jpg",
    },
  ];
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
      <PostCard
        title={title}
        createdAt={createdAt}
        description={description}
        authors={authors}
        comments={comments}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders PostCard", () => {
    const wrapper = shallow(
      <PostCard
        title={title}
        createdAt={createdAt}
        description={description}
        authors={authors}
        comments={comments}
      />
    );

    let actual = wrapper.find("h3").text();
    expect(actual).toBe(title);

    actual = wrapper.find("span").text();
    const createdTime = new Date(createdAt).toLocaleDateString();
    expect(actual).toBe(createdTime);

    actual = wrapper.find("p").text();
    expect(actual).toBe(description);

    actual = wrapper.find("button").text();
    expect(actual).toBe(`Comments (${comments.length})`);
  });

  it("click comments button", () => {
    const wrapper = shallow(
      <PostCard
        title={title}
        createdAt={createdAt}
        description={description}
        authors={authors}
        comments={comments}
      />
    );

    let actual = wrapper.find("Comments").length;
    expect(actual).toBe(0);

    const commentBtn = wrapper.find('button');
    commentBtn.simulate('click');

    actual = wrapper.find("Comments").length;
    expect(actual).toBe(1);
  });
});
