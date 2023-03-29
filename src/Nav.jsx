import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    const list = ['atanagildo', 'ervigio', 'sisebuto', 'ataulfo', 'leovogildo', 'recesvinto'];
  return (
    <nav>
        <NavLink to='/' 
        className={({isActive}) => isActive? "activo" : null}>
            Home
        </NavLink>

        {
            list.map(rey =>      
            <NavLink to={`/reyes/${rey}`} 
            className={({isActive}) => isActive? "activo" : null}>
                {rey}
            </NavLink>)
        }
    </nav>
  )
}

export default Nav