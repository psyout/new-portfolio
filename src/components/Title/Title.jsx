import './Title.scss';

function Title({ head, body }) {
	return (
		<div className='title'>
			<h1 className='title__head'>{head}</h1>
			<p className='title__body'>{body}</p>
		</div>
	);
}

export default Title;
