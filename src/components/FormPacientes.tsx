import {  useForm } from "react-hook-form";
import Errors from "./Errors";
import type { draftPatient } from "../types";
import { usePatientStore } from "../Store";
import { useEffect } from "react";
import { toast } from 'react-toastify';






export default function PatientForm() {
    const { register, setValue, handleSubmit,formState:{errors}, reset } = useForm<draftPatient>();
  
    const patients = usePatientStore(state => state.patients);
    const activeId = usePatientStore(state => state.activeId);
    const addPatient = usePatientStore(state => state.addPatient);


    const update = usePatientStore(state => state.updatePatient);



  useEffect(() => {
    if(activeId){
      const active = patients.filter((patient) => patient.id === activeId)[0]
      setValue("name", active.name);
      setValue("caretaker", active.caretaker);
      setValue("email", active.email);
      setValue("date", active.date);
      setValue("symptoms", active.symptoms);

      
      

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId])


    const registerPatient = (data: draftPatient) => {

      if (!activeId) {
        addPatient(data);
        toast.success("Paciente añadido correctamente")
      }
      else {
        update(data);
        toast.success("Paciente actualizado correctamente")
      }

        reset();

    }   

    
    
  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", { required: "El nombre es requerido",
                                    maxLength: {value: 20, message: "El nombre es muy largo" },
             })}
          />
          { errors.name &&
            <Errors> 
                {errors.name?.message}
            </Errors> }


        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El propietario es requerido",
                maxLength: {value: 20, message: "El nombre es muy largo" },

            })}
          />

            { errors.caretaker &&
                <Errors> 
                    {errors.caretaker?.message}
                </Errors> }
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", { required: "El email es requerido",
                                    pattern: {value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: "Email no válido" }
             })}

          />

            { errors.email &&
                <Errors> 
                    {errors.email?.message}
                </Errors> }
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", { required: "La fecha es requerida"
                                
             })}
          />

            { errors.date &&
                <Errors> 
                    {errors.date?.message}
                </Errors> }
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son requeridos",
                maxLength: {value: 100, message: "Los síntomas son muy largos"

                 }
            })}
          ></textarea>

            { errors.symptoms &&
                <Errors> 
                    {errors.symptoms?.message}
                </Errors> }
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"


        />
      </form>
    </div>
  );
}
