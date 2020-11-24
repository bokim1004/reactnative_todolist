import {ADD_TODO, DELETE_TODO} from "../actionTypes";
//초기값 설정
const initialState = {
  todo_list: [],
};

//리듀서 함수는 state와 action을 파라미터로 가져온다.
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {id, task} = action.payload;
      return {
        ...state,
        todo_list: [...state.todo_list, {id, task}],
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id),
      };
    }
    default:
      return state;
  }
}
