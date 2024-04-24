import {create} from 'zustand';
import {draftPatient, patient} from './types';
import {v4 as uuidv4} from 'uuid';

type patientState = {
    patients: patient[]
    addPatient: (data: draftPatient) => void,
    deletePatient: (id: patient['id']) => void,
    activeId: patient['id'],
    getPatientByid: (id: patient['id']) => void,
  


};

const createPatient = (data: draftPatient): patient => {
    return {
       ...data,
         id: uuidv4()

    }
}



export const usePatientStore =  create<patientState>((set) => ({
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




}));



