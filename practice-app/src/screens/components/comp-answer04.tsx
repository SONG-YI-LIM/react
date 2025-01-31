import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

interface RadiusStyleProps {
    $color : string;
    $radius : string;
}

const RadiusWrap = styled.div<RadiusStyleProps>`
    width:100px;
    height:100px;
    background:${(props) => (props.$color)};
    border-radius:${(props) => (props.$radius)};
`

const FlexBox = styled.div `
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:20px;
`

// 이해를 위해 한 파일 안에서 컴포넌트를 생성하는 방법을 사용하였으나
// 해당 방법은 실제 컴포넌트 작성 시 지양되는 방법입니다.

export const CompAnswer04 = () =>{
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <button className="btn" onClick={()=>{setToggle(!toggle)}}>답변 보기</button>
            {toggle ? (
                <div className="answer-wrap">
                    <FlexBox>
                        <RadiusWrap $color='yellow' $radius='0px' />
                        <RadiusWrap $color='green' $radius='24px' />
                        <RadiusWrap $color='orange' $radius='100%' />
                    </FlexBox>
                    <div className="example">
                        <p className="cGray">// 스타일 컴포넌트 연결</p>
                        <p>{'import styled from "styled-components";'}</p>
                        <br/>
                        <p className="cGray">// Transient props 선언 방식(컨벤션)</p>
                        <p className="cGray"> // prop 앞에 $를 사용하면 html element에 불필요한 속성을 생성하지 않게 됩니다.</p>
                        <p>{'interface RadiusStyleProps {'}</p>
                        <p className="indent-1">{'    $color : string;'}</p>    
                        <p className="indent-1">{'    $radius : string;'}</p>
                        <p>{'}'}</p>
                        <br/>
                        <p className="cGray">// 스타일 컴포넌트 생성</p>
                        <p>{'const RadiusWrap = styled.div<RadiusStyleProps>`'}</p>
                        <p className="indent-1">{'    width:100px;'}</p>    
                        <p className="indent-1">{'    height:100px;'}</p>
                        <p className="indent-1 cGray">// prop으로 값을 받는 css 선언</p>
                        <p className="indent-1">{'    background:${(props) => (props.$color)};'}</p>
                        <p className="indent-1">{'    border-radius:${(props) => (props.$radius)};'}</p>
                        <p>{'`'}</p>
                        <br/>
                        <p>{'const FlexBox = styled.div `'}</p>
                        <p className='indent-1'>{'    display:flex;'}</p>
                        <p className='indent-1'>{'    align-items:center;'}</p>
                        <p className='indent-1'>{'    justify-content:flex-start;'}</p>
                        <p className='indent-1'>{'    gap:20px;'}</p>    
                        <p>{'`'}</p>
                        <br />
                        <p>{'export const CompAnswer04 = () =>{'}</p>
                        <br/>
                        <p className="indent-1">{'    return('}</p>
                        <p className='indent-2'>{'        <>'}</p>    
                        <p className='indent-3'>{'                <div className="answer-wrap">'}</p>
                        <p className='indent-4'>{'                    <FlexBox>'}</p>
                        <p className='indent-5'>{'                        <RadiusWrap $color="yellow" $radius="0px" />'}</p>    
                        <p className='indent-6'>{'                        <RadiusWrap $color="green" $radius="24px" />'}</p>
                        <p className='indent-6'>{'                        <RadiusWrap $color="orange" $radius="100%" />'}</p>
                        <p className='indent-5'>{'                    </FlexBox>'}</p>
                        <p className='indent-4'>{'                </div>'}</p>
                        <p className='indent-3'>{'        </>'}</p>
                        <p className='indent-2'>{'    )'}</p>
                        <p>{'}'}</p>
                    </div>
                </div>
            ) : null}
        </>
    )
}
