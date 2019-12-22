import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
	const [index, setIndex] = React.useState(0);
	const [direction, setDirection] = React.useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel
			activeIndex={index}
			direction={direction}
			onSelect={handleSelect}
			pauseOnHover={false}
			className="eventcar"
		>
			<Carousel.Item className="eventitem">
				<img
					className="d-block"
					src="src/shared/img/lit.png"
					alt="First slide"
					style={{ overflow: 'hidden' }}
				/>
				<Carousel.Caption>
					<h2>Literary</h2>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/dra.png" alt="Second slide" />

				<Carousel.Caption>
					<h2>Dramatics</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/fin.png" alt="Third slide" />

				<Carousel.Caption>
					<h2>Fine-Arts</h2>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/cul.png" alt="Second slide" />

				<Carousel.Caption>
					<h2>Cultural</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/gam.png" alt="Second slide" />

				<Carousel.Caption>
					<h2>Lan Gaming</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/mus.png" alt="Second slide" />

				<Carousel.Caption>
					<h2>Music</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="eventitem">
				<img className="d-block w-100" src="src/shared/img/pho.png" alt="Second slide" />

				<Carousel.Caption>
					<h2>Film & Photography</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Link to="events/category">
						<Button color="success">Explore</Button>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
export default ControlledCarousel;
//   render(<ControlledCarousel />);
