
import React, { useState } from "react";



function Card(props) {

    const [reaadmore, setReadmore] = useState(false);

    const description = reaadmore? props.tour.info: `${props.tour.info.substring(0, 200)}....`;

    function readmorehandler() {
        setReadmore(!reaadmore);
    }

    function getTourId() {
        props.getRemoveId(props.tour.id);
    }


    return(
        <div className="card">
           <img src={props.tour.image} className="image" alt="city-attraction-img"></img>

           <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {props.tour.price}</h4>
                    <h4 className="tour-name">{props.tour.name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmorehandler}>
                        {reaadmore? `Show Less`: `Read More`}
                    </span>
                </div>
           </div>

           <button className="btn-red" onClick={getTourId}>
                Not Interested
           </button>

        </div>
    );
}

export default Card;