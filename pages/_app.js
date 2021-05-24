
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap'

import Cashbar from './../features/Cashbar'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Navbar bg="light" expand="lg" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: "0.75rem 1rem" }}>
        <Navbar.Brand color="white" href="/">World Domination</Navbar.Brand>
        <Navbar.Text style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Cashbar money={3457}/>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{display: "inline-block", width: "max-content", justifySelf: "flex-end"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/exchange">Exchange</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/exchange">Exchange</NavDropdown.Item>
              <NavDropdown.Item href="/company">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
