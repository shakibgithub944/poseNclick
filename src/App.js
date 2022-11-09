import './App.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route';
import { ToastContainer } from 'react-toastify';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider} from 'react-photo-view';

function App() {
  return (
    <PhotoProvider>
      <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center'autoClose={3000} ></ToastContainer>
    </div>
    </PhotoProvider>
  );
}

export default App;
