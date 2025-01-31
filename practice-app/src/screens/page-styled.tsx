import React from 'react';
import {useState, useEffect, useRef} from 'react';

export const PageStyled = () =>{

    return(
        <div className="contents">
            <h3 className="cont-title">Style Component</h3>
            <div className="list-wrap">
                <ol>  
                <li>StyleComponent
                        <ol>
                            <li>패키지 설치
                                <div className="example">npm install styled-components</div>
                            </li>
                            <li><span className="cRed">TypeScript를 사용하는 경우</span>, 타입을 추가로 설치해야 합니다:
                                <div className="example">npm install --save-dev @types/styled-components</div>
                            </li>
                            <li>기본 사용법
                                <div className="example">
                                    <p>import styled from 'styled-components';</p>

                                    <p>const Button = styled.button`</p>
                                    <p className="indent-1">background-color: blue;</p>
                                    <p className="indent-1">color: white;</p>
                                    <p className="indent-1">padding: 10px 15px;</p>
                                    <p className="indent-1">border: none;</p>
                                    <p className="indent-1">border-radius: 5px;</p>
                                    <p className="indent-1">cursor: pointer;</p>
                                    <p className="indent-1">&amp;:hover {'{'}</p>
                                    <p className="indent-2">background-color: darkblue;</p>
                                    <p className="indent-1">{'}'}</p>
                                    <p>`;</p>
                                    <br/>
                                    <p>export const StyledButton = ({ '{label, onClick}' }) =&gt; &#123;</p>
                                    <p className="indent-1">return (</p>
                                    <p className="indent-2">&lt;Button onClick=&#123;onClick&#125;&gt;&#123;label&#125;&lt;/Button&gt;</p>
                                    <p className="indent-1">);</p>
                                    <p>&#125;;</p>
                                    <br/>
                                    <p>export default function App() &#123;</p>
                                    <p className="indent-1">return (</p>
                                    <p className="indent-2">&lt;div&gt;</p>
                                    <p className="indent-3">&lt;StyledButton label="클릭하세요" onClick=&#123;() =&gt; console.log('버튼 클릭됨!')&#125; /&gt;</p>
                                    <p className="indent-2">&lt;/div&gt;</p>
                                    <p className="indent-1">);</p>
                                    <p>&#125;</p>
                                </div>
                                <ol>
                                    <li>styled.button → button 요소에 스타일을 적용.</li>
                                    <li>백틱(```)을 사용하여 스타일을 작성 (CSS 문법 그대로 사용 가능).</li>
                                    <li>컴포넌트처럼 사용 가능 ({'<Button />'}).</li>
                                    <li>CSS 선택자(&:hover)를 그대로 사용 가능.<br/></li>
                                </ol>
                            </li>
                            <li>동적 요소 적용법
                                <div className="example">
                                    <p>import styled from 'styled-components';</p>
                                    <br />

                                    <p>const Button = styled.button`</p>
                                    <p className="indent-1">background-color: &#36;&#123;(props) =&gt; (props.primary ? 'blue' : 'gray')&#125;;</p>
                                    <p className="indent-1">color: white;</p>
                                    <p className="indent-1">padding: 10px 15px;</p>
                                    <p className="indent-1">border: none;</p>
                                    <p className="indent-1">border-radius: 5px;</p>
                                    <p className="indent-1">cursor: pointer;</p>
                                    <br />

                                    <p className="indent-1">&amp;:hover &#123;</p>
                                    <p className="indent-2">background-color: &#36;&#123;(props) =&gt; (props.primary ? 'darkblue' : 'darkgray')&#125;;</p>
                                    <p className="indent-1">&#125;</p>
                                    <p>`;</p>
                                    <br />

                                    <p>export const StyledButton = ({ '{primary, label, onClick}' }) =&gt; &#123;</p>
                                    <p className="indent-1">return (</p>
                                    <p className="indent-2">&lt;Button primary=&#123;primary&#125; onClick=&#123;onClick&#125;&gt;&#123;label&#125;&lt;/Button&gt;</p>
                                    <p className="indent-1">);</p>
                                    <p>&#125;;</p>
                                    <br />

                                    <p>export default function App() &#123;</p>
                                    <p className="indent-1">return (</p>
                                    <p className="indent-2">&lt;div&gt;</p>
                                    <p className="indent-3">&lt;StyledButton primary label="Primary 버튼" onClick=&#123;() =&gt; console.log('Primary 클릭!')&#125; /&gt;</p>
                                    <p className="indent-3">&lt;StyledButton label="일반 버튼" onClick=&#123;() =&gt; console.log('일반 버튼 클릭!')&#125; /&gt;</p>
                                    <p className="indent-2">&lt;/div&gt;</p>
                                    <p className="indent-1">);</p>
                                    <p>&#125;</p>

                                </div>
                                <ol>
                                    <li>props.primary 값에 따라 배경색이 다르게 적용됨 (blue 또는 gray).</li>
                                    <li>&:hover에서도 props를 활용하여 스타일 변경 가능.</li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    )
}
