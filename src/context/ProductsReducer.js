import {AGREGAR_HELADO, ACTUALIZAR_TOTAL} from "./../types"

export default (state,action )=>{
    switch(action.type){
        case AGREGAR_HELADO:
            return{
                ...state,
                checkout:action.payload
            }
        case ACTUALIZAR_TOTAL:
            return{
                ...state,
                total: action.payload
            }
        default: 
        return state
    }
}

