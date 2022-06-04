const mock = {
  todolist: [
    {
      _id: "629b5c610cd5c0ff8dc6efac",
      title: "커피 마시기",
      desc: "오후에 커피를 마셔야 잠이 깬다. 꼭 카페를 가자",
      state: "todo",
      createdAt: "2022-06-04T13:21:37.000Z",
      __v: 0
    }
  ]
};

export default {
  get: jest.fn().mockResolvedValue(mock)
};
