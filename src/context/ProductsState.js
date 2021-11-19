import React, {useReducer} from 'react';
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer"
import {AGREGAR_HELADO, ACTUALIZAR_TOTAL} from "../types"
const ProductsState=props=>{
    const initialState={
        helados: [
            {
                id: 1,
                nombre:"Helado sencillo",
                precio: 2,
                img: "/anna-ribes-alEZLDPPRBU-unsplash.jpg"
            },
            {
                id: 2,
                nombre:"Helado doble",
                precio: 3.50,
                img: "/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg"
            },
            {
                id: 3,
                nombre:"Helado triple",
                precio: 4.50,
                img: "/sarah-gualtieri-tr9GO9WXNRI-unsplash.jpg"
            },
            {
                id: 4,
                nombre:"Malteada",
                precio: 2,
                img: "/natalie-toombs-KwCaIGKdlps-unsplash.jpg"
            },
        ],
        checkout:[],
        total:0
    }
    const [state,dispatch]=useReducer(ProductsReducer, initialState)
    const actualizarTotal=()=>{
        const total=state.checkout.reduce((acc,cv)=>{
            return acc + (cv.precio*cv.cantidad)
        },0)
        dispatch({
            type:ACTUALIZAR_TOTAL,
            payload:total
        })
    }
    const agregarHeladoAlCarrito =(datos)=>{
        //establecer el valor inicial, con una cantidad 1
        let nuevosDatos={
            ...datos,
            cantidad: 1
        }
        //verifcamos si ya existe un helado con ese id 
        const coincidenciaID=state.checkout.find((e)=>{
            return e.id=== datos.id
        })
//si existe la cantidad previa adicionamos uno mas
        if (coincidenciaID!==undefined){
            nuevosDatos={
                ...datos,
                cantidad: coincidenciaID.cantidad+=1
            }
        }
        //quitar coincidencias en caso de que hayan existido
        const eliminarCoincidencias=state.checkout.filter((e)=>{
            return e.id!==datos.id
        })

        //agregamos este nuevo arreglo lmpio , sin coincidencias y le agregamos nuevos datos, con las cantidades 
        //actualizadas 
        const arrModificado=[nuevosDatos,...
        eliminarCoincidencias]
        dispatch({
            type: AGREGAR_HELADO,
            payload: arrModificado
        })
    }
    return(
        
            <ProductsContext.Provider value={{
                helados: state.helados,
                total:state.total,
                checkout:state.checkout,
                agregarHeladoAlCarrito,
                actualizarTotal
            }}>
                {props.children}
            </ProductsContext.Provider>
        
    ) 
}

export default ProductsState