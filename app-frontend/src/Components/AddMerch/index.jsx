import React, {useState, useEffect} from 'react'



export default function AddMerch(props){


    // handleChange = (e) =>{
    //     onSubmit={handleChange()}
    // }

    return(
        <div class='add-merch'>

            <form>

                <fieldset>
                    <label>Image Link</label>
                    <input type='text' />
                </fieldset>

                <fieldset>
                    <label>Name</label>
                    <input type='text' />
                </fieldset>


                <fieldset>
                    <label>Description</label>
                    <input type='text' />
                </fieldset>


                <fieldset>
                    <label>Type</label>
                    <input type='text' />
                </fieldset>

                <button type='submit'>Submit </button>
            </form>

        </div>
    )
}
