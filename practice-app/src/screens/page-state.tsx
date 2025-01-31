import {useState, useEffect} from 'react';
import {SampleState} from '@/screens'

export const PageState = () =>{
    const [expanded, setExpanded] = useState(false);
    const [btnTxt, setBtnTxt] = useState('');

    useEffect(()=>{
        if(expanded){
            setBtnTxt('개념 접기')
        }else{
            setBtnTxt('개념 열기')
        }
    }, [expanded])

    return(
        <div className="contents">
            <h3 className="cont-title">useState</h3>
            <div className="flex">
                <button type="button" className="btn" onClick={()=>{setExpanded(!expanded)}}>{btnTxt}</button>
            </div>
            {expanded ? (
            <div className="expanded-wrap">
                <div className="list-wrap">
                    <h5 className="list-tit">상태란?</h5>
                    <ol>
                        <li>상태는 컴포넌트의 동적인 데이터를 저장하고 관리하는 객체입니다.</li>
                        <li className='cRed'>상태가 변경되면 React는 해당 컴포넌트를 다시 렌더링하여 UI를 업데이트합니다.</li>
                    </ol>
                </div>

                <div className="list-wrap">
                    <h5 className="list-tit">useState의 기본 사용법</h5>
                    <ol>
                        <li>useState는 현재 상태 값과 상태를 업데이트하는 함수를 반환합니다.
                            <div className="example">
                                const [state, setState] = useState(initialValue);
                            </div>
                            <ol>
                                <li>state: 현재 상태 값.</li>
                                <li>setState: 상태를 변경하는 함수.</li>
                                <li>initialValue: 상태의 초기값.</li>
                            </ol>
                        </li>
                    </ol>
                </div>

                <div className="list-wrap">
                    <h5 className="list-tit high">주의사항</h5>
                    <ol>
                        <li>직접 상태를 변경하지 말 것.
                            <div className="example">
                                <span className="cGray">잘못된 예</span><br/>
                                count = count + 1; // 직접 변경 금지<br/><br/><br/>
                                <span className="cGray">올바른 예</span><br/>
                                setCount(count + 1);
                            </div>
                        </li>
                        <li>
                            useState는 <strong className="high">컴포넌트 내부에서만 호출</strong><br />
                            - React 훅은 조건문이나 반복문에서 호출하면 안 됩니다.
                            <div className="example">
                                <span className="cGray">잘못된 예</span><br/>
                                <span className="high">const [wrongPosition, setWrongPosition] = useState('');<br/></span>
                                export const Sample = () =&gt; &#123; <br /><br />
                                    return(<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;&#123;wrongPosition&#125; &lt;/div&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;)<br />
                                &#125;
                                <br /><br/><br/>
                                <span className="cGray">잘못된 예</span><br/>
                                export const Sample = () =&gt; &#123; <br /><br />
                                    if(someTxt) &#123;<br />
                                    &nbsp;&nbsp;<span className="high">const [wrongPosition, setWrongPosition] = useState('');<br/></span>
                                    &#125;<br/>
                                    return(<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;&#123;wrongPosition&#125; &lt;/div&gt;<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;)<br />
                                &#125;
                                <br /><br /><br />
                                <span className="cGray">올바른 예</span><br/>
                                    export const Sample = () =&gt; &#123; <br />
                                    &nbsp;<span className="cBlue">const [goodPosition, setGoodPosition] = useState('');<br/><br/></span>
                                    &nbsp;return(<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;&#123;goodPosition&#125; &lt;/div&gt;<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
                                    &#125;
                            </div>
                        </li>   
                    </ol>
                </div>  
            </div>
            ) : null}
            <SampleState />                
        </div>
    )
}
