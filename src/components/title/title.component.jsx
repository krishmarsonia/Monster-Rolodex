import React from 'react';

export const Titles = (props) => {
    let taken;
    if(props.title){
      taken = props.title
    } else{
      taken = 'Monster Rolodex'
    }
    return(
        <div>
            <h1>{taken}</h1>
        </div>
        
    )
}