import React from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import { Center } from "@chakra-ui/react";
import ItemDetailContainer from './ItemDetailContainer.jsx';


const Home = () => {
  return (
    <>
    <Center bg='gray.300' h='200px'>
        <ItemListContainer greeting={"Bienvenido a la pagina"} />
      </Center>
      <ItemDetailContainer />
    </>
  )
}

export default Home