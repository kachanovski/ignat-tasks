import {hwReducer, UsersType} from "./homeWorkReducer";
import { v1 } from "uuid";

test('array sort up', () => {

    const startState: Array<UsersType> = [
        {id: v1(), name: "Bob", age: 12},
        {id: v1(), name: "Anya", age: 25},
        {id: v1(), name: "dima", age: 17},
        {id: v1(), name: "Masha", age: 26},
    ]

    const action = {
        type: 'SORT_UP', payload: 'up'
    };


    const endState = hwReducer(startState, action)

    expect(endState[0].name).toBe("Anya");
    expect(endState[3].name).toBe("Masha");
});


test('array sort down', () => {

    const startState: Array<UsersType> = [
        {id: v1(), name: "Bob", age: 12},
        {id: v1(), name: "Anya", age: 25},
        {id: v1(), name: "dima", age: 17},
        {id: v1(), name: "Masha", age: 26},
    ]

    const action = {
        type: 'SORT_DOWN', payload: 'down'
    };


    const endState = hwReducer(startState, action)

    expect(endState[3].name).toBe("Anya");
    expect(endState[0].name).toBe("Masha");
});

test('array sort age 18+', () => {

    const startState: Array<UsersType> = [
        {id: v1(), name: "Bob", age: 12},
        {id: v1(), name: "Anya", age: 25},
        {id: v1(), name: "dima", age: 17},
        {id: v1(), name: "Masha", age: 26},
    ]

    const action = {
    type: 'CHECK', payload: 18
    };


    const endState = hwReducer(startState, action)

    expect(endState.length).toBe(2);
    expect(endState[1].name).toBe("Masha");
});
