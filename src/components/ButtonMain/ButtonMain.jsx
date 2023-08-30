import './ButtonMain.scss';
import { Link } from 'react-router-dom';

function ButtonMain({ title, url }) {
	return (
		<Link target='blank' to={url} className='button'>
			{title}
		</Link>
	);
}

export default ButtonMain;
