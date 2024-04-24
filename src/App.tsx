import FormPacientes from "./components/FormPacientes"
import ListPacientes from "./components/ListPacientes"
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

function App() {


  return (
    <>
      

      <div className="container  mx-auto mt-20 " >
        <h1 className="text-4xl font-black text-purple-800 uppercase md:w-2/3 md:mx-auto outline-dashed py-2 text-center outline-purple-400">  
          Seguimiento {''}
          <span className="">de</span> {''}
          <span className="text-indigo-500">Pacientes</span>
        </h1>



        <div className="md:flex mt-12">
          <FormPacientes />

          <ListPacientes />
        </div>
      </div>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    theme="dark"
    />

     
    </>
  )
}

export default App
