import React from 'react'

function Header({ data = [] }) {
    // console.log('Header',data);

    return (
        <div className='add-to-cart'>
            <span className='card-count'>{data.length}</span>
            <img src="https://th.bing.com/th/id/OIP.pcXcZIkEzJ3TIf-MMNSUGgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3" />
        </div>
    )
}

export default Header
