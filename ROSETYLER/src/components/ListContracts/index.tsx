import React, { useEffect, useState } from 'react'
import { Box, Button, Heading, Text ,Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Progress,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure, } from '@chakra-ui/react';
import { CheckCircleIcon ,AddIcon } from '@chakra-ui/icons';

import {MdBook} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import {logout} from '../../services/auth'
import api from '../../services/api';
import RegisterForm from '../RegisterForm';

interface ContratoInterface{
  processo:string,
  supervisor:string,
}

export default function Success() {
  const [contratos,setContratos]=useState<any[]>([])
  const navigate = useNavigate();

  const handleClick = () => {
   // logout()
   // navigate("/login");
   onOpen()
}
  async function loadContratos(){
    const res = await api.get("/contract")
    setContratos(res.data)
    console.log(res.data)
  }

  useEffect(()=>{
    loadContratos()
  },[])

  const { isOpen, onOpen, onClose } = useDisclosure()
  var size = 'xl'

  return (
    
    <Box textAlign="left" mb={5} py={10} px={6}>
      <MdBook size={50} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Veja seus contratos
      </Heading>
      <Text color={'gray.500'}>
       Aqui estao seus trabalhos ativos
      </Text>
      <AddIcon />
        <Button onClick={handleClick}>
          Criar novo trabalho
        </Button>


        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cadastro de novo contrato</DrawerHeader>
          <DrawerBody>
           <RegisterForm/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


        <TableContainer>
  <Table variant='striped'>
    <TableCaption>Preste atencao aos contratos com status em alerta</TableCaption>
    <Thead>
      <Tr>
        <Th>Empresa</Th>
        <Th>Processo</Th>
        <Th>Supervisor</Th>
        <Th>Serial</Th>
        <Th >Vigencia</Th>
        <Th >Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      {contratos.map(contrato => {

        var date1 = new Date(contrato.validity);
        var date2 = new Date();
        var Difference_In_Time = date1.getTime() - date2.getTime();
        var Difference_In_Days = parseInt(`${Difference_In_Time / (1000 * 3600 * 24)}`);

        
        
        var Status = false
        if(Difference_In_Days > 30){
          Status = true
        }
        
        if(Difference_In_Days >= 0){
          return (
            <>
            <Tr>
          <Td>{contrato.company_name}</Td>
          <Td>{contrato.process_number}</Td>
          <Td>{contrato.supervisor}</Td>
          <Td>{contrato.serial_contract}</Td>
          <Td>{date1.toLocaleString()}</Td>
          <Td> {Status ? <Progress hasStripe max={90} isAnimated={true} value={Difference_In_Days} />:<Progress  colorScheme={'red'} hasStripe max={90} isAnimated={true} value={Difference_In_Days} />} </Td>
         </Tr>
            </>
          )
        }
        console.log(Difference_In_Days)
        
        
      })}
      
    
    </Tbody>
   
  </Table>
</TableContainer>
    </Box>
  );
}