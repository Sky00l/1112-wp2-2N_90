import customFetch_90 from './utils_90'

import { useQuery } from '@tanstack/react-query'

import SingleItem_xx from './SingleItem_xx'



const Items_xx = () => {
  const {data, isLoading, isError,error} = useQuery({
    querykey: ['task'],
    queryFn: async() => {
      const{data} = await customFetch_90.get('/');
      return data;
    }
  });
  console.log('data', data);
  if(isLoading) {
    return <p style={{marginTop:'1rem'}}>Loading...</p>
  }

  if(error) {
    return <p style={{marginTop:'1rem'}}>{error.response.data}</p>
  }
  return (
    <div className='items'>
      {data.taskList.map(item => {
        return <SingleItem_xx key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items_xx
