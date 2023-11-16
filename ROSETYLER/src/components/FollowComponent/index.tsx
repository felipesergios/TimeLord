import React, { useEffect, useState } from 'react'
import { Box,Heading, Text ,
  } from '@chakra-ui/react';



import {MdBook} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import DataComponent from '../DataTableComponent'






export default function FollowComponent() {
  

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
      Acompanhamento
      </Heading>
      <Text color={'gray.500'}>
      Tabela de processos listagem completa
      </Text>
     
          

<DataComponent data={contratos}/>
    </Box>
  );
}