import React,{useState} from 'react';
import { fakeimage } from '../utility/Fakemovie';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    const[login,setLogin] = useState('Login')

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems,"cart");
    return (
        <div className='header'>

            <div className='logo'>
              <img src={fakeimage} className='logo-img' />
            </div>

            <div className='nav-items'>
                <ul>
                  <Link to="/" ><li>Home</li></Link>   
                  <Link to="/Tvshow"><li>Tv Shows</li></Link>   
                  <Link to="/Movies"><li>Movies</li></Link>   
                  <Link to="/cart"><li>Cart - ({cartItems.length} items)</li></Link>
                     <li>Documentary</li>
                     <button onClick={()=> login === 'Login' ? setLogin('Logout') : setLogin('Login')}>{login}</button>
                </ul>
                
            </div>

             
            

        </div>
    )
}

export default Header;