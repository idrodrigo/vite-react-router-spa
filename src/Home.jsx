import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const list = ['atanagildo', 'ervigio', 'sisebuto', 'ataulfo', 'leovogildo', 'recesvinto'];

  return (
    <div className='reyes'>
        {
            list.map(rey => 
                <Link to={`/reyes/${rey}`}> <img src={`https://html6.es/img/rey_${rey}.png`} /> </Link>)
        }
    </div>
  )
}
