import {create} from 'zustand';
import {draftPatient, patient} from './types';
import {v4 as uuidv4} from 'uuid';

type patientState = {
    patients: patient[]
    addPatient: (data: draftPatient) => void;

};

const createPatient = (data: draftPatient): patient => {
    return {
       ...data,
         id: uuidv4()

    }
}


export const usePatientStore =  create<patientState>((set) => ({
    patients: [],
    addPatient: (data) => {
        set((state) => ({
            patients: [...state.patients, createPatient(data)]
        
            
        }))


    }
}));


