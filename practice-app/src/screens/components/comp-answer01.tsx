import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

export const CompAnswer01 = () =>{
    const [toggle, setToggle] = useState(false);

    const ColorRed = styled.div`
        width:100px;
        height:100px;
        background:red;
    `;

    return(
        <>
            <button className="btn" onClick={()=>{setToggle(!toggle)}}>답변 보기</button>
            {toggle ? (
                <div className="answer-wrap">
                    <ColorRed />
                    <div className="example">
                    <p>import React, {'{ useState }'} from 'react';</p>
                    <p>import styled from 'styled-components';</p>

                    <p>export const CompAnswer01 = () =&gt; &#123;</p>

                    <p className="indent-1">const [toggle, setToggle] = useState(false);</p>

                    <p className="indent-1">const ColorRed = styled.div`</p>
                    <p className="indent-2">width: 100px;</p>
                    <p className="indent-2">height: 100px;</p>
                    <p className="indent-2">background: red;</p>
                    <p className="indent-1">`;</p>

                    <p className="indent-1">return (</p>
                    <p className="indent-2">&lt;&gt;</p>
                    <p className="indent-3">&lt;button class="btn" onClick=&#123;() =&gt; setToggle(!toggle)&#125;&gt;답변 보기&lt;/button&gt;</p>

                    <p className="indent-3">&#123;toggle ? (</p>
                    <p className="indent-4">&lt;div class="answer-wrap"&gt;</p>
                    <p className="indent-5">&lt;ColorRed /&gt;</p>
                    <p className="indent-5">&lt;div class="example"&gt;&lt;/div&gt;</p>
                    <p className="indent-4">&lt;/div&gt;</p>
                    <p className="indent-3">) : null&#125;</p>

                    <p className="indent-2">&lt;/&gt;</p>
                    <p className="indent-1">);</p>
                    <p>&#125;;</p>

                    </div>
                </div>
            ) : null}
        </>
    )
}
