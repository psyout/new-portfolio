import './Button.scss';

function Button({ title, url }) {
	return (
		<a href={url} target='_blank' rel='noreferrer' className='button-prop'>
			{title}
		</a>
	);
}

export default Button;
