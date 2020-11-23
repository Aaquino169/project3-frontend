import React from 'react'
import UserLogin from '../UserLogin'
import {Link} from 'react-router-dom'

export default function NavBar(props){



    return(
        <div class='header-container'>

            <div class ='logo'>
                <h1>
                    logo
                </h1>
            </div>

            <div class ='search-bar'>

                <input type='text' id='searchbar' name='searchbar' placeholder='Search...' />
                <button type='submit' id='search-btn'> Search</button>
            </div>
            <div class='nav-container'>
                <nav>

                    <ul class='nav'>
                        <Link to='/login'>
                            <td>
                                Welcome, {props.username}
                            </td>
                        </Link>
                        <Link>
                        <td>
                            Orders & Returns
                        </td>
                        </Link>
                        <Link>
                        <td>
                            Cart
                        </td>
                        </Link>
                    </ul>

                </nav>
            </div>
        </div>
    )
}
