import { atom } from "recoil";

export interface IUser {
  id: string;
  pwd: string;
  name: string;
}

export interface ICounting {
  count: number;
}

export type TCount = number;

export interface ITodoList {
  todoList: [];
}

export const user = atom<IUser>({
  key: "user",
  default: {
    id: "admin",
    pwd: "admin",
    name: "관리자"
  }
})

// 타입스크립트를 사용시에는 무조건 객체형태로 저장을 하는 듯
export const counting = atom<TCount>({
  key: "counting", 
  default: 0
})

export const todoListState = atom<ITodoList[]>({
  key: 'todoListState',
  default: [],
})