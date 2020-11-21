import React from 'react'


export default function NavBar(props){
    return(
        <div class='header-container'>

            <div class ='logo'>
                <h1>
                    logo
                </h1>
            </div>

            <div class ='search-bar'>
                <select id='search' name='search'>

                    <option value='all'> All</option>
                    <option value='keyboards'> Keyboards</option>
                    <option value='keycaps'> Keycaps</option>
                    <option value='cases'> Cases</option>
                    <option value='pcb-boards'> Pcb Boards</option>
                    <option value='switches'> Switches</option>
                    <option value='accessories'> Accessories</option>

                </select>
                <input type='text' id='searchbar' name='searchbar' placeholder='Search...' />
                <button type='submit'> Search</button>
            </div> 
            <nav>

                <ul>
                    <td>
                        Log In/Sign Up
                    </td>
                    <td>
                        Orders & Returns
                    </td>
                    <td>
                        Cart
                    </td>
                    <td>
                        Log in/Sign Up
                    </td>
                </ul>

            </nav>
        </div>
    )
}
