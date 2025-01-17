import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';


const ColorRed = styled.div`
    width:100px;
    height:100px;
    background:red;
`;

export const CompAnswer03 = () =>{
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <button className="btn" onClick={()=>{setToggle(!toggle)}}>답변 보기</button>
            {toggle ? (
                <div className="answer-wrap">
                    <ColorRed />
                    <div className="example">
                        <p className="cGray">// 스타일 컴포넌트 연결</p>
                        <p>import styled from 'styled-components';</p>
                        <br/>
                        <p className="cGray">// div 스타일 컴포넌트 생성</p>
                        <p className="indent-1">const ColorRed = styled.div`</p>
                        <p className="indent-2">width: 100px;</p>
                        <p className="indent-2">height: 100px;</p>
                        <p className="indent-2">background: red;</p>
                        <p className="indent-1">`;</p>
                        <br/>
                        <p>export const CompAnswer01 = () =&gt; &#123;</p>
                        <br/>
                        <p className="cGray">// 출력</p>
                        <p className="indent-1">return (</p>

                        <p className="indent-5">&lt;ColorRed /&gt;</p>

                        <p className="indent-1">);</p>
                        <p>&#125;;</p>

                    </div>
                </div>
            ) : null}
        </>
    )
}
