import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../recoil/atoms/TodoState";
import { ToDo } from "../lib/interface/todoInterface";

interface IInjectTestingRecoilStateProps {
  todos: ToDo[];
}

const InjectTestingRecoilState = ({
  todos
}: IInjectTestingRecoilStateProps) => {
  const setTodos = useSetRecoilState(todoState);
  useEffect(() => {
    setTodos(todos);
  }, []);
  return null;
};

export default InjectTestingRecoilState;
