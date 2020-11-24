import React, {useState, useEffect} from 'react'
import AddMerch from '../AddMerch'

export default function CardComponent(props){
    const url = 'http://localhost:8000/';
    const [merch, setMerch] = useState([])
    const [addedMerch, insertMerch] = useState([])
    const [id , setId] = useState('')

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
                method: 'DELETE'
            })
            const createMerchJson = await createMerchResponse.json()
            if (createMerchResponse.status === 201 || createMerchResponse.status === 200 ){
                insertMerch(createMerchJson.data)
            }
        } catch(err){
            console.log('Error adding Merch', err)
        }
    }

    const buyMerch = async (id) =>{
        const url = `http://localhost:8000/${id}/buy`
        console.log(id)
        try{
            const reduceMerchResponse = await fetch(url,{
                method: 'PUT',
                header:{
                    'Content-Type': 'application/json'
                },
            })

            const createMerchJson = await reduceMerchResponse.json()
            console.log(createMerchJson)

            }catch(err){
                console.log('Error with buy merch: ',err)
        }
    }

    const hi = (e) =>{
        console.log('This is e: ', e)
    }

    return(
        <div class='container'>
            <h1>Merch</h1>
            <ul class='card-container'>
                {merch.map(item =>(

                        <td key={item._id} class='card'>
                            <img src={item.img}/>
                            <h1 >{item.name}</h1>
                            <p><small>{item.type}</small></p>
                            <h3>Quantity: {item.quantity}</h3>
                            <h3>${item.price}</h3>
                            <div class='btn-div'>
                                <button type='submit' class='add-to-cart' onClick={()=> {setId(item._id); buyMerch(id)}}>Buy</button>
                            </div>
                        </td>
                ))}
            </ul>
            < AddMerch />
        </div>
    )

}
