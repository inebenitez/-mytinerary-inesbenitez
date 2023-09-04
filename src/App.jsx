import { RouterProvider } from 'react-router-dom'
import router from "./router"
import { Provider } from 'react-redux';
import store from '../src/store/store'; // Asegúrate de importar tu store aquí

function App() {

  return (
    <>
        <Provider store={store} >
            <RouterProvider router = {router} />
        </Provider>
    </>
  )
}

export default App;
