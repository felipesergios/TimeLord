'use client'
import React , {useState,useEffect} from 'react'
import api from '../../services/api'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Select,
  useColorModeValue,
} from '@chakra-ui/react'

export default function AditivesForm() {
  const [processMaster,setProcessMaster]=useState('')
  const [process,setProcess]=useState('')
  const [validade,setValidade]=useState('')
  const [notes,setNotes]=useState('')

  const handleClick = async () => {

    //const newValidate = dayjs(validade).format("YYYY-MM-DD");
    
    const response:any = await api.post("/additives/register", 
        { id_contract:processMaster, 
          process_number:process,
          validity:validade,
          notes:notes
        });
        console.log(response.data)
      
        setProcessMaster('')
        setProcess('')
        setValidade('')
        setNotes('')
        
  
  }

  const [contratos,setContratos]=useState<any[]>([])
  async function loadContratos(){
    const res = await api.get("/contract")
    setContratos(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    loadContratos()
  },[])

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      borderRadius={8}
      bg={useColorModeValue('gray.400', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Cadastro de aditivos</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Processo PAI</FormLabel>
            <Select placeholder='Select option' onChange={e => setProcessMaster(e.target.value)}>
            {contratos.map((contrato,i)=>(
              <option value={contrato.id}>{contrato.process_number}</option>
            ))}
            </Select>
            </FormControl>


            <FormControl id="process_number">
              <FormLabel>Número do processo</FormLabel>
              <Input type="text" onChange={e => setProcess(e.target.value)} />
            </FormControl>

            <FormControl id="validity">
              <FormLabel>Validade do Aditivo</FormLabel>
              <Input type='date' onChange={e => setValidade(e.target.value)} />
            </FormControl>

            <FormControl id="notes">
              <FormLabel>Observações</FormLabel>
              <Input type="text" onChange={e => setNotes(e.target.value)} />
            </FormControl>

            <Button onClick={handleClick} colorScheme='facebook'>Enviar dados</Button>
            
          </Stack>
        </Box>
      </Stack>
      
    </Flex>
  )
}
