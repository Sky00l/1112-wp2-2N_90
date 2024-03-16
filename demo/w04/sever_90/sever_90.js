import express from 'express';
// import { taskList } from './data.js'
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

let taskList = [
    { id: nanoid(), title: 'Do W1 assignment', isDone: false },
    { id: nanoid(), title: 'Do W2 assignment', isDone: false },
    { id: nanoid(), title: 'Do W3 assignment', isDone: true },
    { id: nanoid(), title: 'Do W4 assignment', isDone: false },
];

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello from Server ...');
});

app.get('/api/tasks', (req, res) => {
    res.json({ taskList });
});

app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    if (!title) {
        res.status(400).json({ msg: 'Please provide title' });
    }

    const newTask = { id: nanoid(), title, isDone: false };
    taskList = [...taskList, newTask];
    res.json({ task: newTask });
});

app.patch('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { isDone } = req.body;
    taskList = taskList.map((item) => {
        if (item.id === id) {
            return {...item, isDone }
        }
        return item;
    });
    res.json({ msg: 'task updated' })
})

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    taskList = taskList.filter((item) => item.id !== id);
    res.json({ msg: 'task removed' })
});

const port = process.env.PORT || 5000;

const startApp = () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        });

    } catch (error) {

    }
};

startApp();