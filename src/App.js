import './App.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		gsap.from('.letter', {
			duration: 0.8,
			y: -20,
			opacity: 0,
			ease: 'power3.inOut',
			stagger: 0.1
		});
		gsap.to('.top-left', {
			duration: 2,
			top: '0',
			ease: 'power3.inOut',
			delay: 2,
			opacity: 1
    });
    gsap.to('.top-right', {
			duration: 2,
			top: '0',
			ease: 'power3.inOut',
			delay: 2,
			opacity: 1
		});

		gsap.to('.bottom-right', {
			duration: 2,
			bottom: '0',
			ease: 'power3.inOut',
			delay: 2,
			opacity: 1
		});
		gsap.to('.top-left', {
			duration: 2,
			left: '0',
			ease: 'power3.inOut',
			delay: 4,
			opacity: 1
    });
    gsap.to('.top-right', {
			duration: 2,
			right: '0',
			ease: 'power3.inOut',
			delay: 4,
			opacity: 1
    });
    gsap.to('.bottom-right', {
			duration: 2,
			left: '0',
			ease: 'power3.inOut',
			delay: 4,
			opacity: 1
		});
    gsap.to('.block-left', {
			duration: 2,
			left: '-50%',
			ease: 'power3.inOut',
			delay: 4,
			opacity: 1
    });
    gsap.to('.block-right', {
			duration: 2,
			right: '-50%',
			ease: 'power3.inOut',
			delay: 4,
			opacity: 1
		});
	}, []);

	return (
		<div className='container'>
			<video autoPlay playsInline muted loop>
				<source src={require('./assets/placeholder.mp4')} type='video/mp4' />
			</video>
			<div className='wrapper'>
				<div className='copy'>
					<p>
						LA 3435, <br /> TYO 98234
					</p>
					<p>thinking about the future</p>
					<p>
						enter <br /> terminal&reg;
					</p>
					<p></p>
				</div>
			</div>
			<div className='blocks'>
				<div className='block block-left'></div>
				<div className='block block-right'></div>
			</div>
			<div className='letters'>
				<div className='row'>
					<div className='letter top-left'>T</div>
					<div className='letter top-right'>2</div>
				</div>
				<div className='row'>
					<div className='letter bottom-right'>7</div>
				</div>
			</div>
		</div>
	);
}

export default App;
