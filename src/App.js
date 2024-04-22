import { useDispatch, useSelector } from "react-redux";
import { add, remove, removeAll } from "./redux/slices/bucketSlice";

function App() {
  const todoList = useSelector((state) => state.todo.todoList);

  const dispatch = useDispatch();

  console.log("todoList >> ", todoList);

  /*
              Q1. 컴포넌트는 어디까지 쪼개야 하는가? 너무 많이 쪼개면 가독성이나 관리측면에서 더 많은 시간이 소요될 것 같고 너무 덜 쪼개도 관리하기 힘들것 같다.
              A1.
          
              
                               */

  return (
    <div>
      {todoList &&
        todoList.map((todo) => (
          <>
            <h3>{todo.title}</h3>
            <h4>{todo.desc}</h4>
            <h5>{todo._id}</h5>
            <button
              onClick={() => {
                console.log(todo._id);
                dispatch(remove(todo._id));
              }}
            >
              완료
            </button>
          </>
        ))}

      <br />
      <br />

      <button
        onClick={() => {
          dispatch(removeAll());
        }}
      >
        전체 완료
      </button>

      <br />

      <button
        onClick={() => {
          dispatch(
            add({
              title: "누리 다이어트 시키기",
              desc: "산책 30분, 사료 10알",
            }),
          );
        }}
      >
        추가하기
      </button>
    </div>
  );
}

export default App;
