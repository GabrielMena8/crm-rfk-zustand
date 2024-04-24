import {create} from 'zustand';
import {draftPatient, patient} from './types';
import { devtools } from 'zustand/middleware';
import {v4 as uuidv4} from 'uuid';

type patientState = {
    patients: patient[]
    addPatient: (data: draftPatient) => void,
    deletePatient: (id: patient['id']) => void,
    activeId: patient['id'],
    getPatientByid: (id: patient['id']) => void,
    updatePatient: (data: draftPatient) => void
  


};

const createPatient = (data: draftPatient): patient => {
    return {
       ...data,
         id: uuidv4()

    }
}



export const usePatientStore =  create<patientState>()(devtools((set) => ({
    patients: [],
    activeId: "",
    addPatient: (data) => {
        set((state) => ({
            patients: [...state.patients, createPatient(data)]
        
            
        }))
    },

    deletePatient: (id) => {
        set((state) => ({
            patients: state.patients.filter((patient) => patient.id !== id)
        }))
    },

    getPatientByid: (id) => {
        set(() => ({
            activeId: id
        }))
    },

    updatePatient: (data) => {
        set((state) => ({
            patients:  state.patients.map((patient) => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
            activeId: ""
        }
    ))
}



})));



