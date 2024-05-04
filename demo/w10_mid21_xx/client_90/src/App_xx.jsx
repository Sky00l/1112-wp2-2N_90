import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {HomePage_xx, HomeLayout_90} from './pages';
import {Mid1SupaBlog_xx, Mid2NodeBlog_xx} from './pages/mid1_xx';
import SupaGetBlog_xx from './pages/demo_xx/SupaGetBlog_xx';
// import Mid1SupaBlog_xx from './pages/mid1_xx/Mid1SupaBlog_xx';
// import Mid2NodeBlog_xx from './pages/mid1_xx/Mid2NodeBlog_xx';


const queryClient = new QueryClient({
  defaultOptions: {
    queries : {
      staleTime: 1000 * 60 * 5, //5mins
    }
  }
});

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout_90/>,
    children: [
      {
        index : true,
        element:<HomePage_xx/>
      },
      {
        path: 'midBlog_xx',
        element:<Mid1SupaBlog_xx/>
      },
      {
        path: 'mid2Blog_xx',
        element:<Mid2NodeBlog_xx/>
      },
      {
        path: 'demoGetBlog_xx',
        element:<SupaGetBlog_xx/>
      },
    ]
  }
  

])

const App_xx = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
    
  
  );
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/' element={<HomePage_xx />} />
    //     <Route path='/mid2Blog_xx' element={<Mid2NodeBlog_xx />} />
    //     <Route path='/mid1Blog_xx' element={<Mid1SupaBlog_xx />} />
    //     <Route path='/demoGetBlog_xx' element={<SupaGetBlog_xx />} />
    //   </Routes>
    // </BrowserRouter>
  
};

export default App_xx;
