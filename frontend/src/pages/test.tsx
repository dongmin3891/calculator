import { counting, ICounting, TCount, todoListState } from '@/stores/atom'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

function Test() {

  const [test2, setTest2] = useRecoilState<TCount>(counting);
  const todoList = useRecoilValue(todoListState);
  const test2Counting = () => {
    // setTest2((prevState) => ({
    //   ...prevState,
    //   count: prevState.count - 1,
    // }))
    setTest2((prevState) => prevState + 1);
  }

  console.log("todoList useRecoilValue", todoList);

  return (
    <div onClick={test2Counting}>
      <div>test{test2}</div>
      <button>감소</button>
    </div>
  )
}

export default Test;