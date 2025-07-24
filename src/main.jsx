import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';

import Header from './components/Header'
import './styles/css/app.css'
import CreateEmployee from './pages/Create-Employee/'
import EmployeeList from './pages/Employee-List/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <Routes> 
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/Employee-List" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
