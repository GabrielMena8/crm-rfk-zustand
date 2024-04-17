
import type { patient } from "../types"


type PatientsProps = {
    patient: patient
}

export default function Patients({patient}  : PatientsProps) {

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


        </div>
    </div>
  )
}
