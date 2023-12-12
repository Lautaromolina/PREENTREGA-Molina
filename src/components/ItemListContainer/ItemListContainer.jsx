import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import { Center } from '@chakra-ui/react'

//Consumir Conexiones -> Eleccion por Categoria
const ItemListContainer = () => {
const { category } = useParams()

  const mostrarProductos = new Promise ((resolve, reject) => {
    if (productos.length > 0){
      setTimeout(()=>{
        resolve(productos)
      }, 5000)
    } else {
      reject("No se encontraron productos")
    }
  })

  mostrarProductos
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((error)=>{
    console.log(error)
  })

  const filteredProducts = productos.filter((productos) => productos.categoria === category)
  return (
    <div>
      <Center p="1rem">
        <ItemList productos={filteredProducts}>
      </ItemList>
      </Center>
        {/* <ItemCount /> */}
    </div>
  )
}

export default ItemListContainer