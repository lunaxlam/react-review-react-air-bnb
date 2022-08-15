
import star from '../images/star.png'
import swimmer from '../images/swimmer.png'
import wedding from '../images/wedding.png'
import mtnbike from '../images/mtnbike.png'

function Card(props) {

    let badgeText;
    let cardImg;

    // Set badge
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    // Set card image
    if (props.card.coverImg === "swimmer") {
        cardImg = swimmer
    } else if (props.card.coverImg === "wedding") {
        cardImg = wedding
    } else if (props.card.coverImg === "mtnbike") {
        cardImg = mtnbike
    }

    return(
        <div className="card container">

            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img
                // src={props.img}
                src={cardImg}
                className="card--image"
            />

            <div className="card--stats">
                <img 
                    src={star}
                    alt="Star"
                    className="card--star_img"
                />
                <span>{props.card.stats.rating}</span>
                <span className="gray bullet-space">({props.card.stats.reviewCount}) &bull;</span>
                <span className="gray">{props.card.location}</span>
            </div>

            <div className="card--description">
                <p>{props.card.title}</p>
            </div>

            <div>
                <span className="bold">From ${props.card.price} </span>
                <span>/ person</span>
            </div>
        </div>
    )
}

// function Card(props) {

//     let badgeText;
//     let cardImg;

//     // Set badge
//     if (props.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.location === "Online") {
//         badgeText = "ONLINE"
//     }

//     // Set card image
//     if (props.img === "swimmer") {
//         cardImg = swimmer
//     } else if (props.img === "wedding") {
//         cardImg = wedding
//     } else if (props.img === "mtnbike") {
//         cardImg = mtnbike
//     }

//     return(
//         <div className="card container">

//             {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img
//                 // src={props.img}
//                 src={cardImg}
//                 alt={props.img_alt}
//                 className="card--image"
//             />

//             <div className="card--stats">
//                 <img 
//                     src={star}
//                     alt="Star"
//                     className="card--star_img"
//                 />
//                 <span>{props.rating}</span>
//                 <span className="gray bullet-space">({props.rating_count}) &bull;</span>
//                 <span className="gray">{props.location}</span>
//             </div>

//             <div className="card--description">
//                 <p>{props.description}</p>
//             </div>

//             <div>
//                 <span className="bold">From ${props.pricing} </span>
//                 <span>/ person</span>
//             </div>
//         </div>
//     )
// }

export default Card;