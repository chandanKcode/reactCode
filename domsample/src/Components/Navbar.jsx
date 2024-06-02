import {Link} from 'react-router-dom';
function Navbar()
{
    return(
        <div>
            <ul className='liMenu'>
                <li className='liMenuItem'><Link to='/Home'>Home </Link></li>
                <li className='liMenuItem'><Link to='/About'>About us </Link></liclassName>
                <li className='liMenuItem'><Link to='/Contact'>Contact us</Link></li>
                <li className='liMenuItem'><Link to='/Product'>Product </Link></li>
        </ul>
        </div>
    )
}

export default Navbar