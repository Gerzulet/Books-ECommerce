
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";







   

function ItemDetailContainer() {
    const {libroID} = useParams();
    const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(true)

  //SIMULACION API
  const getItem = () => {
    let items = require("../Backend/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(false)
        }, 1000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await getItem(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

// Implementar mock invocando a getItem() y utilizando el resolver then
 return(

    
        <div className="md:flex justify-center h-[100vh] ">   
        {loading ? cartas : cartas
          .filter((libro) => libro.id.includes(libroID))
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            autor={el.autor}
            img = {el.img}
            categoria = {el.categoria}
            reseña = {el.reseña}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          ))}
        
      


        
        </div>

    );
     

  /* JSX que devuelva un ItemDetail (punto 2) */
}

export default ItemDetailContainer;