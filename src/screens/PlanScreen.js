import React, { useEffect } from 'react';
import './Planscreen.css';

function PlanScreen() {
	// const [products, setProducts] = useState([]);

	useEffect(() => {
		// here to check if the user is active or not.
	});

	return (
		<div className="planScreen">
			<p>Renewal Date: 11-04-2022</p>
			<div className="planScreen__plan">
				<div className="planScreen__info">
					<h5>Premium</h5>
					<h6>4K + HDR</h6>
				</div>
				<button id="planScreen__currenPackage" className="">
					Current Package
				</button>
			</div>
			<div className="planScreen__plan">
				<div className="planScreen__info">
					<h5>Standard</h5>
					<h6>1080P</h6>
				</div>
				<button>Subscribe</button>
			</div>
			<div className="planScreen__plan">
				<div className="planScreen__info">
					<h5>Basic</h5>
					<h6>720P</h6>
				</div>
				<button>Subscribe</button>
			</div>
		</div>
	);
}

export default PlanScreen;
