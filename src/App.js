import React from "react";
import { Container } from '@material-ui/core'
import AppLayout from "./components/Layout/AppLayout";
import ContextWrapper from "./context/ContextWrapper";





export default function App() {
  
  return (
    <Container maxWidth="lg">
      <ContextWrapper>
        <AppLayout/>
      </ContextWrapper>      
    </Container>
  );
}
