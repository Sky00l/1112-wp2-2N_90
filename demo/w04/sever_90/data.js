import { nanoid } from 'nanoid'

export let taskList = [
    { id: nanoid(), title: 'Do W1 assignment', isDone: false },
    { id: nanoid(), title: 'Do W2 assignment', isDone: false },
    { id: nanoid(), title: 'Do W3 assignment', isDone: true },
    { id: nanoid(), title: 'Do W4 assignment', isDone: false },
];