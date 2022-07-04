import star from './star.png';
import './card.css'

function Card(props) {
    return (
        <div className='card'>
            <div className='status'>{props.status}</div>
            <img src={props.image} alt='a famous swimmer'/>
            <div className='info'>
                <img src={star} alt='rating' className='star'/>
                <span>{props.rating} <span className='gray'>({props.votes}) &#183; {props.location}</span> </span>
            </div>
            <div>{props.title}</div>
            <div>
                <b>From {props.price}</b> / {props.quantity}
            </div>
        </div>
    )
}

export default Card;