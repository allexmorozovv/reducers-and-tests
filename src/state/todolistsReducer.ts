import {FilterValuesType, TodolistType} from "../App";

export const todolistsReducer = (state: Array<TodolistType>, action: mainTodolistsType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        default:
            return state
    }
}

type mainTodolistsType = removeTodolistACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id: todolistId1}
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

