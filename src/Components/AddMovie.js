import React, { useState } from 'react'
import { Button, Modal, Form, FormControl, InputGroup } from 'react-bootstrap'

const AddMovie = ({ setMovies, movies }) => {
  const [title, setTitle] = useState('')
  const [rate, setRate] = useState('')
  const [imgLnk, setImgLnk] = useState('')
  const [description, setDescription] = useState('')

  const handleAdd = () => {
    let newMovie = {
      title,
      rate: Number(rate),
      imgLnk,
      description,
    }
    setMovies([...movies, newMovie])
    handleClose()
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        className="add-btn"
        variant="outline-secondary"
        onClick={handleShow}
      >
        Add Movie +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmov">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Movie title"
                aria-describedby="basic-addon2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Image url"
                aria-describedby="basic-addon2"
                onChange={(e) => setImgLnk(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Rating "
                aria-describedby="basic-addon2"
                onChange={(e) => setRate(e.target.value)}
              />
            </InputGroup>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="Description"
                as="textarea"
                rows={7}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovie
