import React, {useState, useEffect} from 'react'
// import MerchList from '../MerchList'


export default function CardComponent(props){
    const url = 'http://localhost:8000/';
    const [merch, setMerch] = useState([])

    useEffect(() =>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        const data = await fetch(url);
        const allMerch = await data.json();
        console.log(allMerch)
        setMerch(allMerch)
    }


    return(
        <div>
            <h1>Merch</h1>
            {merch.map(item =>(
                <ul>
                    <td>
                        <img src={item.img}/>
                        
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p><small>{item.type}</small></p>
                        <button type='button'>Add to Cart</button>
                        <button type='button'>Save For Later</button>
                    </td>
                </ul>

            ))}

        </div>
    )

}
