import React from 'react';

const Square = ({value, onclick, index}) => {
    return (
        <>
            <button onClick={()=>{onclick(index)}}>{value}</button>
        </> 
    )
}

export default Square;