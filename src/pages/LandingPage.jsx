import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Links } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3 className='textstyle mt-5 mb-5 d-flex align-items-center justify-content-evenly'>Welcome To  <span className='text-warning'>Media Player</span></h3>
            <p className='textstyle mt-5' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque culpa dolor harum minima totam earum cupiditate molestiae quaerat, quia enim similique ipsam maiores optio asperiores labore animi dolorum praesentium et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis voluptate voluptatem consequatur architecto repellendus esse reiciendis sint id consectetur assumenda, veritatis ab vel sit nesciunt, quae cupiditate quis pariatur.</p>
            <Link to={'/home'}>
            <button className='btn btn-warning mt-4'>Get started <i className="fa-solid fa-arrow-right ms-2"></i> </button> 
            </Link>
            
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>
      <div className="container">
        <h3 className='textstyle'>Features</h3>
        <div className='d-flex align-items-center justify-content-evenly'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Add Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
              <Button variant="primary">Add Video</Button>
              </Link>
              
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>View Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
              <Button variant="primary">View Video</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Watch history</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'watchhistory'}>
              <Button variant="primary">Watch history</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col >
          <h3 className='textstyle' >Simple And Powerful</h3>
          <p className='textstyle mt-5 '><span className='fs-5 fw-bolder'>Play EveryThing :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, vel expedita praesentium magni molestias eum est architecto vero ex ullam sit dolores totam molestiae nobis aliquam vitae itaque deleniti. Inventore?</p>
          <p className='textstyle mt-5'><span className='fs-5 fw-bolder'>Play EveryThing :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, vel expedita praesentium magni molestias eum est architecto vero ex ullam sit dolores totam molestiae nobis aliquam vitae itaque deleniti. Inventore?</p>
          <p className='textstyle mt-5'><span className='fs-5 fw-bolder'>Play EveryThing :</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, vel expedita praesentium magni molestias eum est architecto vero ex ullam sit dolores totam molestiae nobis aliquam vitae itaque deleniti. Inventore?</p>
          </Col>
          <Col>
          <div>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/QW6_vYFqQvY?list=RDQW6_vYFqQvY" title="Neon Ride | Officer On Duty | Kunchacko Boban | Jakes Bejoy | Baby Jean, Ramya RamC, Zeba Tommy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LandingPage