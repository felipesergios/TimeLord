import React from "react";
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
export default function ErroComponent(){
  return(<>
  
  <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
      Oh não  Página Não Encontrada <br/>você caiu em uma Bruxaria digital
      </Heading>
      <Text fontSize={"2xl"} color={'white.500'}>
     

Oh não! Parece que você se aventurou 
por terras desconhecidas ou tentou acessar
algo que não deveria. A página que você 
procura está desaparecida, como se tivesse se
escondido em um labirinto digital.<br/>

Não se preocupe, 
essas coisas acontecem até 
mesmo aos melhores navegantes da web. 
Pode ter sido um link quebrado, uma 
digitação equivocada na URL ou talvez a 
página tenha decidido tirar um dia de folga.

      </Text>
    </Box>
  
  </>)
}