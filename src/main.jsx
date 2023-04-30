import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import AurtProvider from './Provider/AurtProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AurtProvider>
      <RouterProvider router={router} />
    </AurtProvider>
  </React.StrictMode>,
)
