import React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import RoutesApp from "./routes"

export const App = () => (
  <ChakraProvider theme={theme}>
   
     <RoutesApp/>
  </ChakraProvider>
)
