
import star from '../images/star.png'

function Card(props) {
    return(
        <div className="card container">
            <img
                src={props.img}
                alt={props.img_alt}
                className="card--image"
            />

            <div className="card--stats">
                <img 
                    src={star}
                    alt="Star"
                    className="card--star_img"
                />
                <span>{props.rating}</span>
                <span className="gray bullet-space">({props.rating_count}) &bull;</span>
                <span className="gray">{props.country}</span>
            </div>

            <div className="card--description">
                <p>{props.description}</p>
            </div>

            <div>
                <span className="bold">From ${props.pricing} </span>
                <span>/ person</span>
            </div>
        </div>
    )
}

export default Card;