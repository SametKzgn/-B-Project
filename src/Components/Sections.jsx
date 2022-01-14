import React from 'react'
import {
    ChakraProvider,
    Box,
    theme,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
    Flex,
    Spacer,
    Menu,
    MenuButton,
    IconButton,
    MenuList,
    MenuItem,
    Heading,
    Stack,
    Center,
    Button,
    Image,
  
  
  } from '@chakra-ui/react';

  import { Link } from "react-router-dom";

  import { faCopy, faBars } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Sections() {
    return (
        <Menu>
       <Center>
        <Button
        as={Link} 
        to="/"
        size='md'
        height='48px'
        width='180px'
        border='2px'
        borderColor='purple.500'
      > Anasayfa
      </Button>
       
      <Button
        size='md'
        to="/iletisim"
        as={Link}
        height='48px'
        width='180px'
        border='2px'
        borderColor='purple.500'
      >
           
        İletişim
      </Button> 
    
      <Button
        size='md'
        to="/python"
        as={Link}
        height='48px'
        width='100px'
        border='2px'
        borderColor='purple.500'
      >
        Python
      </Button>

      <Button
        size='md'
        height='48px'
        width='100px'
        border='2px'
        borderColor='purple.500'
      >
        JavaScript
      </Button>
      <Button
        size='md'
        height='48px'
        width='60px'
        border='2px'
        borderColor='purple.500'
      >
        PHP
      </Button>
      <Button
        size='md'
        height='48px'
        width='100px'
        border='2px'
        borderColor='purple.500'
      >
        HTML
      </Button>
      <Button
        size='md'
        height='48px'
        width='60px'
        border='2px'
        borderColor='purple.500'
      >
        CSS
      </Button>
    </Center>
      </Menu>
    )
}

export default Sections
