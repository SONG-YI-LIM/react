import React from 'react';
import {useState, useEffect, useRef} from 'react';

export const Sample = () =>{
    const _btn = useRef<HTMLButtonElement | null>(null);
    const [sample, setSample] = useState(0);

    return(
        <div>
            <p>Sample</p>
            <button type="button" ref={_btn} onClick={()=>{setSample(sample + 1)}}>Click me : <span>{sample}</span></button>
        </div>
    )
}
