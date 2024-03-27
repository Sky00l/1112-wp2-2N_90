import { useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from './db/clientSupabase'
import { toast } from 'react-toastify'

const SingleItem_90 = ({ item }) => {
  const queryClient = useQueryClient()
  const { mutate: editTask } = useMutation({
    mutationFn: async ({ taskId, isDone }) => {
      try {
        const { data, error } = await supabase
          .from('task_90')
          .update({ is_done: isDone })
          .eq('id', taskId)
          .select()
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks']
      })
      toast.sussess('task updated')
    }
  })

  const { mutate: deleteTask } = useMutation({
    mutationFn: async taskId => {
      try {
        const { error } = await supabase
          .from('task_90')
          .delete()
          .eq('id', taskId)
      } catch (error) {
        console.log(error)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks']
      })
      toast.sussess('task deleted')
    }
  })
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.is_Done}
        onChange={() => editTask({ taskId: item.id, isDone: !item.is_done })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through'
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  )
}
export default SingleItem_90
