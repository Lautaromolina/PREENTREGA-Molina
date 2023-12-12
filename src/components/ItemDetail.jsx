import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Stack, Divider, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount/ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({title, price, image, category}) => {
  const { id } = useParams()
  // filter || find
  productos.find((p) => p.id === id)
  //Producto con determinado ID
  return (
    <div>
  
  <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt=''
      boxSize='200px'
    />
    <Stack mt='6' spacing='2'>
      <CardHeader size='md'>{title}</CardHeader>
      <Text>
        {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $ {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount />
  </CardFooter>
</Card>
    </div>
  )
}

export default ItemDetail