import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Typography } from '@material-ui/core';
import Header from '../components/header';
import '../styles/works.css'

const WorksPage = () => {
    return (
      <Container maxWidth="lg" style={{backgroundColor:"#F7F3E9"}}>
        <h2 className="heading">All of <br></br>My works</h2>
      </Container>

    )
  }
export default WorksPage