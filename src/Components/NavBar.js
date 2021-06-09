import React from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import AddMovie from './AddMovie.js'
function NavBar({ setTitleSearch, setMovies, movies }) {
  return (
    <div>
      <Navbar
        className="NavBar"
        bg="light"
        variant="dark"
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <Form inline>
          <AddMovie setMovies={setMovies} movies={movies} />
        </Form>
        <Form inline>
          <Navbar.Brand href="#home">
            <i style={{ color: 'orange' }} class="fas fa-film fa-2x"></i>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#home"
              style={{ color: 'orange', fontSize: '200%', fontWeight: '1000' }}
            >
              C-MOVIES
            </Nav.Link>
          </Nav>
        </Form>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => setTitleSearch(e.target.value)}
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default NavBar
