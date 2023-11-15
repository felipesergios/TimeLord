import {
    Button,
    Box,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import api from '../../services/api';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';

  export default function RegisterForm() {
    const navigate = useNavigate();
    const toast = useToast()
    const [name,setName]=useState('')
    const [process,setProcess]=useState('')
    const [supervior,setSupervisor]=useState('')
    const [validade,setValidade]=useState('')
    const [serial,setSerial]=useState('')
    const [object,setObject]=useState('')
    const [notes,setNotes]=useState('')



// Funcao para enviar os dados a API 

const handleClick = async () => {

    //const newValidate = dayjs(validade).format("YYYY-MM-DD");

    try{
        const response:any = await api.post("/contract", 
        { company_name:name, 
          process_number:process,
          supervisor:supervior,
          validity:validade,
          serial_contract:serial,
          object:object,
          notes:notes
        });
        if(response.data.newCT){
          console.log('Deu certo')
          toast({
            title: 'Contrato Incluido',
            description: "Todos os dados foram salvos",
            status: 'success',
            duration: 8000,
            isClosable: true,
          })
  
          setName('')
          setObject('')
          setProcess('')
          setSupervisor('')
          setValidade('')
          setSerial('')
        }
        if(!response.data.newCT){
          console.log(response.data)
          toast({
            title: 'Operacao Falhou',
            description: "Falha na validação dos dados",
            status: 'warning',
            duration: 9000,
            isClosable: true,
          })
        }
       
       
        
       // navigate('/Home')

    }catch(err){
        //alert('Nao foi possivel efetuar o login')
        toast({
          title: 'Operacao Falhou',
          description: "Falha ao comunicar com o servidor",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

        setName('')
        setObject('')
        setProcess('')
        setSupervisor('')
        setValidade('')
        setSerial('')
    }
    
}



    return (
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      borderRadius={8}
      bg={useColorModeValue('gray.400', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Cadastro De Processo</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>Empresa</FormLabel>
              <Input type="text" onChange={e => setName(e.target.value)} />
            </FormControl>

            <FormControl id="process_number">
              <FormLabel>Número do processo</FormLabel>
              <Input type="text" onChange={e => setProcess(e.target.value)} />
            </FormControl>

            <FormControl id="serial">
              <FormLabel>Serial</FormLabel>
              <Input type="text" onChange={e => setSerial(e.target.value)} />
            </FormControl>

            <FormControl id="supervior">
              <FormLabel>Fiscal | responsável</FormLabel>
              <Input type="text" onChange={e => setSupervisor(e.target.value)} />
            </FormControl>

            <FormControl id="validity">
              <FormLabel>Validade do contrato</FormLabel>
              <Input type='date' onChange={e => setValidade(e.target.value)} />
            </FormControl>

            <FormControl id="object">
              <FormLabel>Objeto</FormLabel>
              <Input type="text" onChange={e => setObject(e.target.value)} />
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
    );
  }

