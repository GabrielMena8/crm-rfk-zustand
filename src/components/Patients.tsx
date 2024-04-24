
import type { patient } from "../types"
import { usePatientStore } from "../Store"


type PatientsProps = {
    patient: patient
}

export default function Patients({patient}  : PatientsProps) {
       const deletePatients = usePatientStore((state) => state.deletePatient);
       const getPatientById = usePatientStore((state) => state.getPatientByid);

  return (
    <div className="grid grid-cols-1 gap-6">

        <div className="bg-white shadow-md mt-5 p-4 rounded-md space-y-1.5">
            <h3 className=" font-bold text-2xl capitalize">{patient.name}</h3>
            <p className=" text-xl text-gray-600">
                    {patient.caretaker}
            </p>
            <p className="text-sm text-gray-600">
                    {patient.email}
            </p>
            
            <p className="text-sm text-gray-600">
                    {patient.date.toString()}
            </p>

            <p className="text-sm text-gray-600">
                    {patient.symptoms}
            </p>

            
         <div className="flex justify-between gap-3 mt-3">
                <button 
              

                onClick={() => {getPatientById(patient.id)}}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Editar

                </button>
                <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deletePatients(patient.id)}>
                        Eliminar
                </button>
         </div>

        </div>
    </div>
  )
}
