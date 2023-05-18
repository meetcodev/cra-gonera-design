import * as React from 'react';
import './ItemMenuButton.css';






export const ItemMenuButton = ({name, idx, onClick, children   }) =>( 
<>

        <div class="button__line"></div>
        <div class="button__line"></div>
        {/* <button style={{  border: 'none', background: 'transparent', outline: 0 }} type="button" class="button__text" id={idx} name={idx} value={idx} 
            /> */}
        {/* <label class="button__text" for={idx}  id={idx} > <span className='name-text'>{name ? name : '' } </span>
        <input onClick={onClick}
            style={{   border: 'none', background: 'transparent', outline: 0 }} 
            type="button" class="button__text" id={idx} name={idx}  
        />  </label> */}
        {children ? children : '' }
        <div class="button__drow1"></div>
        <div class="button__drow2"></div>
</>
        );