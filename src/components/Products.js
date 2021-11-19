import React, { useContext } from "react";
import ProductsContext from "./../context/ProductsContext";
const Products = () => {
  const ctx = useContext(ProductsContext);
  const { helados , agregarHeladoAlCarrito} = ctx;
  const manejarClick=(elemento)=>{
    agregarHeladoAlCarrito(elemento)
  }

  return (
    <>
      <ul className="max-w-5xl px-12 grid grid-cols-2 gap-6 grid-cols-2">
        {/* INICIO DEL ELEMENTO */}
        {helados.map((helado, i) => {
          return (
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                {/* IMAGEN DEL ELEMENTO */}
                <img
                  className="w-auto h-32 flex-shrink-0 mx-auto bg-black"
                  src={helado.img}
                  alt=""
                />
                {/* NOMBRE DEL ELEMENTO */}
                <h3 className="mt-6 text-gray-900 text-sm font-medium">
                  {helado.nombre}
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dd className="text-gray-500 text-sm">{`$${helado.precio} USD`}</dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="w-0 flex-1 flex">
                    {/* BOTÓN DE AGREGAR AL CARRITO */}
                    <button
                      href="#"
                      onClick={()=>manejarClick(helado)}
                      className="relative bg-blue-700 -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent hover:bg-blue-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span className="ml-3">Agregar al carrito</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
