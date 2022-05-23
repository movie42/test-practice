import List from "./List";

function App() {
  const tasks = [
    { id: 1, title: "아무일도 하기 싫다." },
    { id: 2, title: "집에서 놀기" }
  ];
  return (
    <div>
      <h1>Todo</h1>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
