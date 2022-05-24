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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="무엇을 할까?"
        onChange={onChange}
        value={inputValue}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
