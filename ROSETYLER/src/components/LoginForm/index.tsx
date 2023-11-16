
import React,{useState,useEffect} from 'react'
import api from '../../services/api';
import { login } from "../../services/auth";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

   

export default function LoginForm() {
  const toast = useToast()
    const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')

  interface UserAuth{
    name:string,
    email:string
  }

  const handleClick = async () => {
    setError('')
    try{
        const response:any = await api.post("/login", { email, password });
        login(response.data[0].access_token,{name:String(response.data[0].user.name),email:String(response.data[0].user.email)});
        toast({
          title: 'Acesso Permitido',
          description: "Bem vindo aproveite o sistema",
          status: 'success',
          duration: 8000,
          isClosable: true,
        })
        navigate("/home");
        navigate(0)
    }catch(err){
        //alert('Nao foi possivel efetuar o login')
        setError('Nao foi possivel logar no sistema')
        toast({
          title: 'Acesso negado',
          description: "Verifique suas credenciais e tente novamente ",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    }
    
}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      
      bg={useColorModeValue('gray.50', 'gray.800')}
     >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Heading fontSize={'4xl'}>Sistema gestor de prazos  CRONOS</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Tenha acesso a todas as ferramentas de gestao processual
            
           {error && <p><strong>{error}</strong></p>}
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={e => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleClick}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

// bg={useColorModeValue('gray.50', 'gray.800')}