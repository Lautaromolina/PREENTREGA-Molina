import React from "react"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { Center } from "@chakra-ui/react"
const App = () => {
  return (
    <div>
      <NavBar />
      <Center bg='gray.300' h='200px'>
        <ItemListContainer greeting={"Bienvenido a la pagina"}/>
      </Center>
      
      </div>
  )
}

export default App