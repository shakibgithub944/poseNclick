import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' ></ToastContainer>
    </div>
  );
}

export default App;
