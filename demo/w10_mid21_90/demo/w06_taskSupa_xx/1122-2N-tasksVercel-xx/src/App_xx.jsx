import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form_xx from './Form_xx';
import Items_xx from './Items_xx';
import { useState } from 'react';
const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
const App_xx = () => {
  const [items, setItems] = useState(defaultItems);
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' autoClose={2000} />
      <Form_xx />
      <Items_xx items={items} />
    </section>
  );
};
export default App_xx;
