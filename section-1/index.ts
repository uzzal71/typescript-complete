import axios from "axios";

interface Todo {
  ID: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it completed? ${completed}
  `);
});
