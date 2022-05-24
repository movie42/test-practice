import React, { useCallback, useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(inputValue);
      setInputValue("");
      e.preventDefault();
    },
    [onInsert, inputValue],
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={inputValue}
          placeholder="무엇을 해야하나?"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;
