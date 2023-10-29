import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import api from '../../services/api';
import dayjs from "dayjs";

  export default function RegisterForm() {
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
    console.log(validade)

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

    }catch(err){
        //alert('Nao foi possivel efetuar o login')
        toast({
          title: 'Operacao Falhou',
          description: "Verifique os dados e tente novamente ",
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
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={1} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Preecha os dados do servico</Heading>

            <FormControl id="company_name">
              <FormLabel>Nome da empresa</FormLabel>
              <Input type="text" onChange={e => setName(e.target.value)} />
            </FormControl>

            <FormControl id="process_number">
              <FormLabel>Numero do processo</FormLabel>
              <Input type="number" onChange={e => setProcess(e.target.value)} />
            </FormControl>


            <FormControl id="supervisor">
              <FormLabel>Supervisor</FormLabel>
              <Input type="text" onChange={e => setSupervisor(e.target.value)} />
            </FormControl>


            <FormControl id="validity">
              <FormLabel>Vigencia</FormLabel>
              <Input type='date' onChange={e => setValidade(e.target.value)} />
            </FormControl>


            <FormControl id="serial_contract">
              <FormLabel>Serial</FormLabel>
              <Input type="text" onChange={e => setSerial(e.target.value)} />
            </FormControl>

            <FormControl id="object">
              <FormLabel>object</FormLabel>
              <Input type="text" onChange={e => setObject(e.target.value)} />
            </FormControl>

            <FormControl id="notes">
              <FormLabel>Notes</FormLabel>
              <Input type="text" onChange={e => setNotes(e.target.value)} />
            </FormControl>


            <Stack spacing={6}>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleClick}>
                Cadastrar
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }

