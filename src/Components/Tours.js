
import React from 'react';
import Card from './Card'

function Tours(props) {

    function getId(id)
    {
        props.removeTour(id);
    }

    // console.log(props.tour);

    return(
        <div className='container'>
            <div>
                <h2 className='title'>
                    Plan With Love
                </h2>
            </div>
            <div className='cards'>
                {
                    props.tour.map((tours) => {
                        // console.log(tours);
                        return <Card key={tours.id} tour={tours} getRemoveId = {getId}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;