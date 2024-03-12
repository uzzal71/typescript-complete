import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
  const todo = response.data;
  const ID = todo.ID;
  const title = todo.title;
  const completed = todo.completed;
  console.log(`${title}`);
});
