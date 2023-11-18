import React, { useEffect, useState } from 'react'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { MdLocalShipping } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import dateValidator from '../../services/dateValidator'
import AddtiveDetails from '../AdditiveDetails';

interface RowData {
    company_name: string;
    process_number: string;
    supervisor: string;
    validity : Date;
    serial_contract: string;
    object: string;
    notes: string;
    addtive:[];
    // adicione outras propriedades conforme necessário
  }

export default function DetailsComponent(){
    const [contrato, setContrato] = useState<RowData | null>(null);

  
    async function loadContratos(){
      const res = await api.get(`/contract/${id}`)
      setContrato(res.data.contrato)
      console.log(contrato)
    }
  
    useEffect(()=>{
      loadContratos()
    },[])
  
    let { id } = useParams();

    

    return (


        <>
        
      

         <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 2, lg: 3 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {contrato?.company_name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {contrato?.serial_contract}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '24px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Fiscal | Gestor do contrato
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>{contrato?.supervisor}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '18px', lg: '24px' }}
                color={useColorModeValue('blue.500', 'blue.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Detalhes
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Processo SEI
                  </Text>{' '}
                  {contrato?.process_number}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Vigencia  
                  </Text>{' '}
                  {String(contrato?.validity)}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Objeto da contratação
                  </Text>{' '}
                  {contrato?.object}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Anotações
                  </Text>{' '}
                  {contrato?.notes}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Termos
                  </Text>{' '}
                  {contrato?.addtive.length}
                </ListItem>

                
                
                
              </List>
            </Box>
            <Box>
              
            </Box>
            
          </Stack>
        




        </Stack>
        <Box> 
          {contrato?.addtive.map((data:any,i:number)=>(
            <AddtiveDetails 
            id={data.id} 
            notes={data.notes} 
            process_number={data.process_number}
            validity={data.validity}
            updated_at={data.updated_at}
            key={i}
            />
          ))}
          
        </Box>
      </SimpleGrid>
    </Container>
        </>
    )
}