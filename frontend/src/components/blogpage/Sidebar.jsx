// import React from 'react'
import { Home, BarChart, Copy, Bookmark, Users, Settings } from 'lucide-react'
import { Nav, Image, Col } from 'react-bootstrap';
// import { BarChart, Copy, Bookmark, Users, Settings } from 'react-feather'


const Sidebar = () => {
  return (
    <>
     <Col xs={2} className="d-flex flex-column align-items-center bg-white border-end py-4 vh-100">
      <Nav className="flex-column w-100 text-center mb-auto">
        <Nav.Link href="#" className="mb-3">
          <svg width="40" height="46" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="..." fill="black" />
          </svg>
        </Nav.Link>
        <Nav.Link href="#" className="rounded p-2 text-muted hover-bg-light">
          <Home size={24} />
        </Nav.Link>
        <Nav.Link href="#" className="rounded p-2 text-muted hover-bg-light">
          <BarChart size={24} />
        </Nav.Link>
        <Nav.Link href="#" className="rounded p-2 text-muted hover-bg-light">
          <Copy size={24} />
        </Nav.Link>
        <Nav.Link href="#" className="rounded p-2 text-muted hover-bg-light">
          <Bookmark size={24} />
        </Nav.Link>
        <Nav.Link href="#" className="rounded p-2 text-muted hover-bg-light">
          <Users size={24} />
        </Nav.Link>
      </Nav>
      <Nav className="flex-column align-items-center w-100 text-center mt-3">
        <Nav.Link href="#" className="rounded p-2 bg-light text-muted">
          <Settings size={24} />
        </Nav.Link>
        <Nav.Link href="#">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            roundedCircle
            className="mt-3"
            style={{ height: '32px', width: '32px', objectFit: 'cover' }}
          />
        </Nav.Link>
      </Nav>
    </Col>
    </>
  )
}

export default Sidebar