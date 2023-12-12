import React from 'react'
import { Badge, Image, Box, Text, Flex, Center } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>

      <Box>
      <Text fontWeight='bold'>
        <Center>
        Tus Compras
        </Center> 
      </Text>
      <Flex>
        <Image ml='1' src='https://previews.123rf.com/images/supertrooper/supertrooper2001/supertrooper200100150/138090485-grocery-supermarket-trolley-cart-vector-icon-empty.jpg' boxSize='30px'/>
        <Badge ml='2' colorScheme='green'>
        New Item
      </Badge>
      <Badge ml='3' colorScheme='purple'>1</Badge>
      </Flex>
      </Box>
    </div>
  )
}

export default CartWidget