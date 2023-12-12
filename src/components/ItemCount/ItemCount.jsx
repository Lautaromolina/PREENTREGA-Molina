import {useState } from 'react'
import { Badge, Button, useToast } from '@chakra-ui/react'
const ItemCount = () => {
  const [count, setCount] = useState(0)
  const toast = useToast()
  const addtoCart = () => {
    if (count > 0) {
      toast({
          title: 'Felicitaciones',
          description: `Has agregado ${count} productos a tu carrito`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
    }   
    
  }
  
  
  return (
  <div>  
    <Button colorScheme='teal' variant='outline' onClick={()=>setCount(count + 1)}>
    +
  </Button>
  <Badge colorScheme='purple'>{count}</Badge>
  <Button colorScheme='teal' variant='outline' onClick={()=>setCount(count - 1)}>
    - 
  </Button>
  <Button colorScheme='linkedin' onClick={addtoCart}>Agregar al Carrito</Button>
  </div> 
  )
}

export default ItemCount