import React from "react"
import Nav from "./componnents/Nav"
import Header from "./componnents/Header"
import Content from "./componnents/Content"
import Footer from "./componnents/Footer"
import Contact from "./componnents/Contact"
import { Box } from "@chakra-ui/react"




function App() {
  
  return (
    <Box >
      <Nav/>
      <Header/>
      <Content/>
      <Footer/>
      <Contact/>
    </Box>
  )
}

export default App
