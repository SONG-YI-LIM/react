import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

interface CardProps {
    title:string;
    description : string;
}

const CardWrap = styled.div`
    background:lightgray;
    padding:20px;
`

// 이해를 위해 한 파일 안에서 컴포넌트를 생성하는 방법을 사용하였으나
// 해당 방법은 실제 컴포넌트 작성 시 지양되는 방법입니다.
const Card = ({title, description} : CardProps) =>{
    return(
        <CardWrap>
            <p>{title}</p>
            <p>{description}</p>
        </CardWrap>
    )
}

export const CompAnswer03 = () =>{
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <button className="btn" onClick={()=>{setToggle(!toggle)}}>답변 보기</button>
            {toggle ? (
                <div className="answer-wrap">
                    <Card title={'타이틀'} description={'입력한 텍스트가 출력되는 곳입니다.'} />
                    <div className="example">
                        <p className="cGray">// 스타일 컴포넌트 연결</p>
                        <p>import styled from 'styled-components';</p>
                        <br/>
                        <p className="cGray">// prop(인자)의 타입 선언</p>
                        <p>{'interface CardProps {'}</p>
                        <p className="indent-1">title:string;</p>
                        <p className="indent-1">description : string;</p>
                        <p>{'}'}</p>
                        <br />
                        <p className="cGray">// 배경, 패딩을 위한 스타일 컴포넌트 생성</p>
                        <p>const CardWrap = styled.div`</p>
                        <p className="indent-1">background:lightgray;</p>
                        <p className="indent-1">padding:20px;</p>
                        <p>`</p>
                        <br/>
                        <p className="cGray">// 컴포넌트 생성</p>
                        <p>{'export const Card = ({title, description} : CardProps) =>{'}</p>
                        <br />
                        <p className="indent-1">{'return('}</p>
                        <p className="indent-2">{'<CardWrap>'}</p>
                        <p className="indent-3">{'<p>{title}</p>'}</p>
                        <p className="indent-3">{'<p>{description}</p>'}</p>
                        <p className="indent-2">{'</CardWrap>'}</p>
                        <p className="indent-1">{')'}</p>
                        <p>{'}'}</p>
                    </div>
                </div>
            ) : null}
        </>
    )
}
