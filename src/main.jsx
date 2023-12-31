import axios from 'axios'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import './index.css'
import AppRoutes from './router/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

axios.defaults.baseURL = 'https://countries-back-yqvz.onrender.com'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
)
