import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
//import  NavigationBar from './navigation/NavigationBar';

import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';


function Home() {
  const [stylemargin, setstylemargin] = useState({ marginLeft : 220, marginTop: 40, width: 900});
  return (
    <>
      <Card style={stylemargin}>
        <Card.Body>
          <Card.Text>
              <h3>Selamat Data di Aplikasi User Management </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
