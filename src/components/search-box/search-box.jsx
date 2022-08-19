import './search-box.css'

import React from 'react'

export const SearchBox = props => {
    return (
        <input
            className='search-box'
            type='search'
            placeholder='search monsters'
            onChange={props.onSearchChange}
        />
    )
};


