import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'

  interface AdditiveContract{
    id:Number,
    process_number:string,
    validity:Date,
    notes:string,
    updated_at:Date
  }

export default function AddtiveDetails({id,notes,process_number,validity,updated_at}:AdditiveContract){
    var date1 = new Date(validity);
    var date2 = new Date();
    var date3 = new Date(updated_at)
    var Difference_In_Time = date1.getTime() - date2.getTime();
    var Difference_In_Days = parseInt(`${Difference_In_Time / (1000 * 3600 * 24)}`);

    return (
<Box bg='whiteAlpha.400' alignItems={'center'} rounded={4}>
<Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <strong>Aditivo</strong> {process_number}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {notes}
      <Box>
        <Text>
           Validade : {String(Difference_In_Days)}
        </Text>
        Atualizado em : {date3.toDateString()}
      </Box>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
</Box>
    )
}