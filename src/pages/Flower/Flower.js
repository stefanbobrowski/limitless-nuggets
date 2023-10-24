import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import './Flower.scss';

export const Flower = () => {
	const [state, dispatch] = useContext(Context);
	const [flowers, setFlowers] = useState([]);

	const handleAddToCart = (e, flower) => {
		e.preventDefault();
		const flowerPriceIndex = e.target.children[0].value;
		const flowerAmount = Object.keys(flower.prices)[flowerPriceIndex];
		const flowerPrice = Object.values(flower.prices)[flowerPriceIndex];
		const payload = {
			image: flower.imgSrc,
			strain: flower.strain,
			amount: flowerAmount,
			price: flowerPrice,
		};
		dispatch({ type: 'ADD_TO_CART', payload: payload });
	};

	useEffect(() => {
		console.log('hi?');

		const fetchFlower = async () => {
			try {
				const response = await fetch('/data/Flower.json', {
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
				});
				console.log('what?', response);
				const data = await response.json();
				setFlowers(data.Flower);
			} catch (error) {
				console.error(error);
			}
		};
		fetchFlower();
	}, []);

	// useEffect(() => {
	// 	if (!flowers) {
	// 		fetch('data/Flower.json')
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				console.log('data: ', data);
	// 				setFlowers(data.Flower);
	// 			});
	// 	}
	// }, [flowers]);

	// if (!flowers) return <div>loading...</div>;

	return (
		<div className='flower-page page'>
			<div className='container'>
				<h2>Flower</h2>
				<p>Flowers are lit</p>

				<div className='flower-list'>
					{flowers?.length > 0 ? (
						flowers.map((flower, i) => (
							<div className='flower' key={i}>
								<div className='flower-image'>
									<img src={flower?.imgSrc} alt={flower?.name} />
								</div>
								<h3 className='flower-name'>{flower?.strain} </h3>

								<span className='flower-type'>Sativa</span>
								<span className='flower-thc-level'>THC: 18.89%</span>
								<form onSubmit={(e) => handleAddToCart(e, flower)}>
									<select name='sizeSelection'>
										<option value={0}>1/8: ${flower?.prices['1/8oz']}</option>
										<option value={1}>1/4: ${flower?.prices['1/4oz']}</option>
										<option value={2}>1/2: ${flower?.prices['1/2oz']}</option>
										<option value={3}>Full: ${flower?.prices['oz']}</option>
									</select>
									<button type='submit'>Add to Cart</button>
								</form>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		</div>
	);
};
