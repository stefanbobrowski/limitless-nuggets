import { useContext } from 'react';
import { Context } from '../../store';
import { Cart } from '../../components/Cart/Cart';
import { Checkout } from '../../components/Checkout/Checkout';
import { Link } from 'react-router-dom';

import flowerImage from '../../assets/categories/flower.png';
import prerollsImage from '../../assets/categories/pre-rolls.png';
import concentratesImage from '../../assets/categories/concentrates.png';
import vaporizersImage from '../../assets/categories/vaporizers.png';
import ediblesImage from '../../assets/categories/edibles.png';
import accessoriesImage from '../../assets/categories/accessories.png';
import './Home.scss';

export const Home = () => {
	const [state, dispatch] = useContext(Context);

	const { openCheckout } = state;

	return (
		<div className='page home-page'>
			<div className='container'>
				<h2>CanniCure is the best there ever was period.</h2>
				<p>
					Come smoke our time-tested formulas for the best highs ever.
					Everything has 100% THC. Come smoke our time-tested formulas for the
					best highs ever. Everything has 100% THC. Come smoke our time-tested
					formulas for the best highs ever. Everything has 100% THC. Come smoke
					our time-tested formulas for the best highs ever. Everything has 100%
					THC. Come smoke our time-tested formulas for the best highs ever.
					Everything has 100% THC. Come smoke our time-tested formulas for the
					best highs ever. Everything has 100% THC. Come smoke our time-tested
					formulas for the best highs ever. Everything has 100% THC.
				</p>

				<h3>Categories</h3>

				<div className='categories'>
					<Link to='/flower' className='category'>
						<h3 className='category-name'>Flower</h3>
						<div className='category-image'>
							<img src={flowerImage} alt='Flower' />
						</div>
					</Link>
					<Link to='/pre-rolls' className='category'>
						<h3 className='category-name'>Pre-Rolls</h3>
						<div className='category-image'>
							<img src={prerollsImage} alt='Pre-Rolls' />
						</div>
					</Link>
					<Link to='/concentrates' className='category'>
						<h3 className='category-name'>Concentrates</h3>
						<div className='category-image'>
							<img src={concentratesImage} alt='Concentrates' />
						</div>
					</Link>
					<Link to='/vaporizers' className='category'>
						<h3 className='category-name'>Vaporizers</h3>
						<div className='category-image'>
							<img src={vaporizersImage} alt='Vaporizers' />
						</div>
					</Link>
					<Link to='/edibles' className='category'>
						<h3 className='category-name'>Edibles</h3>
						<div className='category-image'>
							<img src={ediblesImage} alt='Edibles' />
						</div>
					</Link>
					<Link to='/accessories' className='category'>
						<h3 className='category-name'>Accessories</h3>
						<div className='category-image'>
							<img src={accessoriesImage} alt='Accessories' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
