import React from 'react';


export default function MerchList(props){

    const merchs = props.merchs.map(merch =>{
        return(
            <div>
            <ul>
                <td>
                    <h6>merch.id</h6>
                    <h2>merch.name</h2>
                    <p><small> merch.type </small>></p>
                    <p>merch.img</p>
                    <p><b> merch.price </b></p>
                    <p>merch.description</p>
                    <button type='button'>Add to Cart</button>
                    <button type='button'>Save For Later</button>
                </td>
            </ul>
            </div>

        )
    })

    return(
        {merchs}
    )

}
