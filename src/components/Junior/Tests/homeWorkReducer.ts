import {v1} from "uuid";

export type UsersType = {
    id: string
    name: string
    age: number
}

export let initialState: Array<UsersType> = [
    {id: v1(), name: "Bob", age: 12},
    {id: v1(), name: "Anya", age: 25},
    {id: v1(), name: "dima", age: 17},
    {id: v1(), name: "Masha", age: 26},
]


export const hwReducer = (state = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case 'SORT_UP':
            state.sort(function (a, b) {
                let nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0 // Никакой сортировки
            })
            return {...state};
        case 'SORT_DOWN':
            state.sort(function (a, b) {
                let nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase()
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0 // Никакой сортировки
            })
            return {...state};

        case 'CHECK':
            debugger
            return state.filter(s => s.age > action.payload)
        default:
            return "Error"
    }
};





export const sortUp = () => {
    return {
        type: "SORT_UP"
    } as const
}
export const checkAge = (payload: number) => {
    debugger
    return {
        type: "CHECK",
        payload
    }
}
