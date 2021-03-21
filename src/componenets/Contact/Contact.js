import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Menu from '../menu/menu';

const Contact = () => {
  
    return (
        <div>
            <Menu></Menu>
            <br/><br/><br/><br/>
            <Container>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Phone</th>
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
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Container>
    </div>
        
    );
};

export default Contact;