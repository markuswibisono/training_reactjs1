import logo from './logo.svg';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
//import  NavigationBar from './navigation/NavigationBar';

import React, { useState } from 'react';


import { Card, Table, Button } from 'react-bootstrap';


function DaftarUser() {
  const [stylemargin, setstylemargin] = useState({ marginLeft : 220, marginTop: 40, width: 900});
  return (
    <>
      <Card style={stylemargin}>
        <Card.Body>
          <Card.Text>
              <h3>Table Data User Management</h3>
              <Button variant="primary">Tambah Data</Button>
              <br />
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
        </tbody>
        </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default DaftarUser;
