export type UsersType = {
    id: string
    name: string
    age: number
}
export type usersStateType = {
    users: Array<UsersType>
    filter: number
}




export const hwReducer = (state: usersStateType, action: { type: string, payload: any }) => {
    const testState = {...state,}
    switch (action.type) {
        case 'SORT_UP':
            testState.users.sort(function (a, b) {
                let nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
            return testState;
        case 'SORT_DOWN':
            testState.users.sort(function (a, b) {
                let nameA = a.name.toLowerCase(),
                    nameB = b.name.toLowerCase()
                if (nameA > nameB)
                    return -1
                if (nameA < nameB)
                    return 1
                return 0
            })
            return testState;

/*        case 'CHECK':
          let newSortState = state.users.filter( s => s.age > action.payload )

            return newSortState*/
        default:
            return state
    }
};

