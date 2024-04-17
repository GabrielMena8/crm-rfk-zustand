import { usePatientStore } from "../Store"
import Patients from "./Patients"
export default function ListPaciente() {

  const { patients } = usePatientStore()
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
        { patients.length > 0 ? (
         <>
              <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
              <p className="text-xl mt-5 mb-3  lg:mb-10 text-center"
              >A continuación se muestra la lista de pacientes</p>
              
                {patients.map((patient) => (
                 <Patients key={patient.id} patient={patient} />
                ))}
             
          
         </>
        ) :  
          <>
              <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
              </p>
          </>
        }
  
    </div>  
   
  )
}
