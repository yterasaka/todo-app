import React, { useState } from "react";

type Todo = {
  value: string;
};

export const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // 新しいTodoを作成
  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      value: text,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // <form> タグの中でいったん e.preventDefault() しているのは Enter キー打鍵でページそのものがリロードされてしまうのを防ぐため
          handleOnSubmit();
        }}
      >
        <input type="text" value={text} onChange={(e) => handleOnChange(e)} />
        <input type="submit" value="Add" onSubmit={handleOnSubmit} />
      </form>
    </div>
  );
};
