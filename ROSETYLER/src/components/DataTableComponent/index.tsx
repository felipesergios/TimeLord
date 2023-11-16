import React from "react";
import $ from 'jquery';
import 'datatables.net';
import { format,utcToZonedTime} from 'date-fns-tz';
import DataTable, { createTheme } from 'react-data-table-component';
import { useColorMode } from "@chakra-ui/color-mode";
import { Table } from "@chakra-ui/table";

interface RowData {
    company_name: string;
    process_number: string;
    supervisor: string;
    validity : Date
    serial_contract: string;
    object: string;
    // adicione outras propriedades conforme necessário
  }

  interface ContractsProps {
    data: RowData[]; // ou o tipo apropriado para seus dados
  }
  
  interface TableColumn<T> {
    name: string;
    selector: (row: T) => string;
  }
  
   // Função para formatar a data e hora para GMT-3 (Fortaleza)
   const formatDateTime = (dateString:any) => {
    var date = new Date(dateString);; // Ajuste o formato conforme necessário
    const gmtMinus3Date = utcToZonedTime(date, 'America/Fortaleza');
    const formattedDate = format(gmtMinus3Date, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate;
  };

  const columns: TableColumn<RowData>[] = [
    { name: 'Nome', selector: (row) => row.company_name },
    { name: 'Número do Processo', selector: (row) => row.process_number },
    { name: 'Objeto do contrato', selector: (row) => row.object },
    { name: 'Serial do contrato', selector: (row) => row.serial_contract },
    { name: 'Fiscal | Gestor', selector: (row) => row.supervisor },
    { name: 'Validade', selector: (row) => String(formatDateTime(row.validity))  },
  ];
  createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });

export default function DataComponent({data}:ContractsProps){
    const { colorMode } = useColorMode();
    const tableClass = colorMode === 'dark' ? 'dark' : 'light';
    return(<>
        <Table>

        
         <DataTable
         theme={tableClass}
         title={'Processos encontrados'}
         fixedHeaderScrollHeight="300px"
         pagination
         columns={columns}
         data={data}
        />

</Table>
    
    </>)
}