import {FETCH_ALL, CREATE, UPDATE, DELETE} from "../constants/actionsConstants";

import * as api from '../axios'

export const fetchMemories = () => async (dispatch) => {
    try {
        const {data} = await api.fetchMemories()
        dispatch({type: FETCH_ALL, payload: data}) //reducer'a gönderiyoruz
    } catch (e) {
        console.log(e)
    }
}

export const createMemory = (memory) => async (dispatch) => {
    try {
        const {data} = await api.createMemory(memory)
        dispatch({type: CREATE, payload: data}) //reducer'a gönderiyoruz
    } catch (e) {
        console.log(e)
    }
}

export const deleteMemory = (id) => async (dispatch) => {
    try {
        await api.deleteMemory(id)
        dispatch({type: DELETE, payload: id})
    } catch (e) {
        console.log(e)
    }
}

export const updateMemory = (id, updatedMemory) => async (dispatch) => {
    try {
        const {data} = await api.updateMemory(id, updatedMemory)
        dispatch({type: UPDATE, payload: data})
    } catch (e) {
        console.log(e)
    }
}