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
  } from '@chakra-ui/react';



import {MdBook} from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom';

import api from '../../services/api';
import DataComponent from '../DataTableComponent'






export default function Success() {
  

  const [contratos,setContratos]=useState<any[]>([])
  const [campos,setCampos]=useState<any[]>([])
  const navigate = useNavigate();

  async function loadContratos(){
    const res = await api.get("/contract")
    setContratos(res.data)
    console.log(res.data)
    setCampos(Object.keys(res.data))
  }

  useEffect(()=>{
    loadContratos()
  },[])


  return (
    
    <Box textAlign="left" mb={5} py={10} px={6}>
      <MdBook size={50} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Seus contratos
      </Heading>
      <Text color={'gray.500'}>
      Listagem com dados que estão abaixo de 60 dias
      </Text>
      <Table size={'md'} variant='striped'>
        
      
        </Table>


<TableContainer w={'-webkit-max-content'} h={'-webkit-fit-content'}>
  <Table borderRadius={'full'} size={'md'} variant='striped'>
    <TableCaption>Preste atencao aos contratos com status em alerta</TableCaption>
    <Thead>
      <Tr>
        <Th>Objeto</Th>
        <Th >Status</Th>
        <Th >Dias ate o Termino</Th>
        <Th >Termos</Th>
      </Tr>
    </Thead>
    <Tbody >
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
          <Td><Button colorScheme='messenger' variant='outline' ><Link to={`/acompanhamento/${contrato.id}`}>{contrato.object}</Link></Button></Td>
          <Td> {Status ? <Progress hasStripe max={90} isAnimated={true} value={Difference_In_Days} />:<Progress  colorScheme={'red'} hasStripe max={90} isAnimated={true} value={Difference_In_Days} />} </Td>
         
          <Td>{Difference_In_Days}</Td>
          <Td>{contrato.addtive.length}</Td>
         </Tr>
            </>
          )
        }
       // console.log(Difference_In_Days)
        
        
      })}
      
    
    </Tbody>
   
  </Table>
</TableContainer>

    </Box>
  );
}