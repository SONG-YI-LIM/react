import React from 'react';
import {useState, useEffect, useRef} from 'react';

export const PageEffect = () =>{
    const _btn = useRef<HTMLButtonElement | null>(null);
    const [sample, setSample] = useState(0);
    const [sample01, setSample01] = useState(0);

    return(
        <div>
            <p>Sample</p>
            <button type="button" ref={_btn} onClick={()=>{setSample(sample + 1)}}>Click me : <span>{sample}</span></button>
            <button type="button" ref={_btn} onClick={()=>{setSample01(sample01 + 2)}}>Click me : <span>{sample01}</span></button>
        </div>
    )
}
