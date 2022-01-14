import React from 'react';
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
  Button

} from '@chakra-ui/react';
import { faCopy, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Image } from '@chakra-ui/react'
import Nav from './Components/Nav';
import Middle from './Components/Middle';
import Sections from './Components/Sections';
import {  Routes, Route } from 'react-router-dom' /* saufalar arası gezmeye yarar */
import Python from './Components/Python';
function App() {
  return (

    <ChakraProvider theme={theme}>
    

 
        <FormControl>
        {/*   <Nav/> */}
          <Middle  />
          <Sections  />
          <Routes>
 
 <Route path={"/"} element={'Anasayfa'} />
 <Route path={"/iletisim"} element={"iletisim"} />
 <Route path={"/python"} element={<Python> </Python>}  />
 
 
 
  </Routes>
        </FormControl>
      
      
    </ChakraProvider>
  );
}

export default App;
