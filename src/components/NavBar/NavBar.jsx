import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuList, Flex, Box, Spacer, Image } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          <Image
            borderRadius='full'
            boxSize='100px'
            src='https://img.freepik.com/vector-gratis/estilo-hoja-coloful-simbolo-elemento-logo_1017-4345.jpg?w=740&t=st=1698001270~exp=1698001870~hmac=ce767e7119098ee2ced09db85f95a4c113656fc26adabb67fd8e3065787edb50'
            alt='Brand'
          />
        </Box>
        <Spacer />
        <Menu>
          <MenuButton>Categorias</MenuButton>
          <MenuList>
            <MenuItem>A</MenuItem>
            <MenuItem>B</MenuItem>
            <MenuItem>C</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
}

export default NavBar;
