import { Container, Navbar } from 'react-bootstrap'
function Sidebar () {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Sidebar;
