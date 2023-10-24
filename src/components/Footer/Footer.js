import { Link } from 'react-router-dom';
import './footer.scss';

export const Footer = () => {
	return (
		<footer className='app-footer'>
			<div>
				<h3>CanniCure Logo</h3>
			</div>
			<div className='footer-mid'>
				<div className='footer-mid-left'>
					<div>
						<h4>Contact Us</h4>
						<p>(203)333-1234</p>
						<p>jimmy@gmail.com</p>
					</div>
					<div>
						<h4>Address</h4>
						<p>1234 Jimmy Avenue</p>
						<p>Shelton, CT 06484</p>
					</div>
				</div>
				<div className='footer-mid-right'>
					<div>
						<h4>SOCIAL</h4>
						<p>Instagram</p>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>CanniCure Logo</p>
				<span>Copyright &copy; 2022 </span>
				<Link to='/'>CanniCure</Link>
				<span>. All Rights Reserved.</span>
			</div>
		</footer>
	);
};
