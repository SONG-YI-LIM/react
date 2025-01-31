import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

interface Props{
    $color:string;
}

const ColorBox = styled.div<Props>`
    width:100px;
    height:100px;
    background-color: ${(props) => (props.$color)};
`;

export const CompAnswer02 = () =>{
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <button className="btn" onClick={()=>{setToggle(!toggle)}}>답변 보기</button>
            {toggle ? (
                <div className="answer-wrap">
                    <ColorBox $color={'blue'} />
                    <div className="example">
                        <p className="cGray">// 스타일 컴포넌트 연결</p>
                        <p>import styled from 'styled-components';</p>
                        <br/>
                        <p className="cGray">// prop에 대한 타입 설정</p>
                        <p>interface Props{'{'}</p>
                        <p className="indent-1">$color:string;</p>
                        <p>{'}'}</p>
                        <br/>
                        <p className="cGray">// div 스타일 컴포넌트 생성</p>
                        <p>const ColorBox = styled.div{'<Props>'}`<span className="cGray">// 타입 연결</span></p>
                        <p className="indent-1">width: 100px;</p>
                        <p className="indent-1">height: 100px;</p>
                        <p className="indent-1">{'background-color: ${(props) => (props.$color)};'} <span className="cGray">// 배경색을 prop값으로 출력</span></p>
                        <p>`;</p>
                        <br/>
                        <p>export const CompAnswer02 = () =&gt; &#123;</p>
                        <br/>
                        <p className="cGray">// 출력</p>
                        <p className="indent-1">return (</p>
                        <p className="cGray">// prop으로 배경색 전달</p>
                        <p className="indent-5">&lt;ColorBox $color={'{"blue"}'} /&gt;</p>

                        <p className="indent-1">);</p>
                        <p>&#125;;</p>

                    </div>
                </div>
            ) : null}
        </>
    )
}
