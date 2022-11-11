import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: Array<TodolistType>, action: mainTodolistsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case "ADD-TODOLIST":{
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title:action.payload.title, filter: 'all'};
            return [newTodolist,...state]
        }
        default:
            return state
    }
}

type mainTodolistsType = removeTodolistACType | addTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id: todolistId1}
    } as const
}

type addTodolistACType=ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => {
  return{
      type:'ADD-TODOLIST',
      payload:{title: newTodolistTitle}
  } as const
}

// type changeFilterACType = ReturnType<typeof changeFilterAC>
// export const changeFilterAC = (todolistId: string,value: FilterValuesType ) => {
//     return {
//         type: 'CHANGE-FILTER',
//         payload: {
//             value: value,
//             todolistID: todolistId
//         }
//     } as const
// }

