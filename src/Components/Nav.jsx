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
    Button
  
  
  
  
  
  } from '@chakra-ui/react';
  
import { faCopy, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Nav() {
    return (
        <Menu >
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<FontAwesomeIcon icon={faBars} />}
          variant='outline'



        />

        <MenuList >

          <MenuItem icon={<FontAwesomeIcon icon={faCopy} />}  >
            Ana Sayfa
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faCopy} />} >
            İletişim
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faCopy} />} >
            Programlama Dilleri
          </MenuItem>
        </MenuList>
      </Menu>
    )
}

export default Nav
