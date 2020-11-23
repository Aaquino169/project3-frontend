import React, {useState, useEffect} from 'react'
import AddMerch from '../AddMerch'


export default function CardComponent(props){
    const url = 'http://localhost:8000/';
    const [merch, setMerch] = useState([])
    const [addedMerch, insertMerch] = useState([])

    useEffect(() =>{
        fetchData()
    },[]);

    // gets merch data
    const fetchData = async () =>{
        try{
            const data = await fetch(url);
            const allMerch = await data.json();
            console.log(allMerch)
            setMerch(allMerch)
        } catch(err){
            console.log('Error getting Merch data', err)
        }

    }

    const addMerch = async (createMerch) => {
        try{
            const createMerchResponse = await fetch(url,{
                method: 'POST',
                header: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(createMerch)
            })
            const createMerchJson = await createMerchResponse.json()
            if (createMerchResponse.status === 201 || createMerchResponse.status === 200 ){
                insertMerch(createMerchJson.data)
            }
        } catch(err){
            console.log('Error adding Merch', err)
        }
    }




    return(
        <div>
            <h1>Merch</h1>
            {merch.map(item =>(
                <ul>
                    <td class='card'>
                        <img src={item.img}/>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p><small>{item.type}</small></p>
                        <button type='button'>Add to Cart</button>
                        <button type='button'>Save For Later</button>
                    </td>
                </ul>

            ))}
            < AddMerch />
        </div>
    )

}
