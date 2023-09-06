import './Button.scss';

function Button({ title, url }) {
	return (
		<a href={url} target='_blank' className='button-prop'>
			{title}
		</a>
	);
}

export default Button;
