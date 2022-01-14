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
import {  Routes, Route } from 'react-router-dom' /* saufalar arası gezmeye yarar */
import { faCopy, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sections from './Sections';

function Middle() {
    return (
        <Menu>


            <Center> <Heading  >WEB SİTESİ OLUŞTURMA PROJESİ</Heading></Center>
            <Box height={10} />
            <Center>   
            <Routes>
 
 <Route path={"/"} element={<Image borderRadius={'10px'} src='https://media.bitdegree.org/storage/media/images/2018/11/How-to-Create-A-Website-From-Scratch-The-Beginner’s-Guide.jpg' />} />
 <Route path={"/iletisim"} element={<Image borderRadius={'10px'} src='https://www.hostgator.com/blog/wp-content/uploads/2018/12/Creating-a-Website-How-To-Create-a-Beautiful-Site-1024x537.png' />} />
 <Route path={"/python"} element={  <Image borderRadius={'10px'} src='https://i.pinimg.com/736x/4d/13/d5/4d13d55d6d0b38b7a4e85fcf97ff6279.jpg' />}/>
 
 
 
  </Routes>
                
                
                </Center>

            <Box height={10} />




            -
        </Menu>
    )
}

export default Middle
