import React from 'react';
import {useState, useEffect, useRef} from 'react';

export const PageHome = () =>{

    return(
        <div className="contents">
            <h3 className="cont-title">기본 컴포넌트 작성법</h3>
            <div className="list-wrap">
                <ol>
                    <li>React에서 class는 className="..."으로 작성한다. <br />
                        <span className="cGray">대소문자에 유의하자</span>
                        <div className="example">
                            &lt;div <span className="high">class</span>="sample"&gt; <br/>
                            &lt;div <span className="cBlue">className</span>="sample"&gt;
                        </div>
                    </li>
                    <li>
                        마크업은 return() 안에서만 작성해야 한다.
                        <div className="example">
                            <p className="cGray">잘못된 예</p>
                            <p className="high">                                
                                &lt;div className="sample"&gt;<br/>
                                return(<br/>                                
                                    &nbsp;&nbsp;&nbsp;&lt;div className="sample2"&gt;<br/>
                                )
                            </p><br/><br/>
                            <p className="cGray">올바른 예</p>
                            <p className="cBlue">                                
                                return(<br/>
                                &nbsp;&nbsp;&nbsp;&lt;div className="sample"&gt;<br/>
                                )
                            </p>
                        </div>
                    </li>
                    <li>
                        컴포넌트 내부에서 새로운 컴포넌트를 작성하는 것은 지양한다.
                        <div className="example">
                            <p>comp-sample.tsx</p><br/>
                            <p>const InnerComp = () =&gt; &#123;</p>
                            <p> &nbsp;return ( &#123;div&#125;components&#123;/div&#125;)</p>
                            <p>&#125;</p>
                            <br/>
                            <p>export const Sample = () =&gt; &#123;</p>
                            <p>&nbsp;const [state, setState] = useState('');</p><br/>
                            <p>&nbsp;return(</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;&#123;state&#125; &lt;/div&gt;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;InnerComp /&gt;</p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;)</p>
                            &#125;
                        </div>
                    </li>
                    <li>return 안에서 텍스트용 등호 또는 중괄호 사용 시 컴포넌트가 오류를 발생시킬 수 있으므로 주의해야 한다.<br/>
                        부득이하게 사용해야 할 경우, 아스키 코드를 사용하거나<br/>
                        <span className="cBlue">{'{" 피자 < 치킨 "}'}</span> 처럼 변수 내 등호, 중괄호를 string 타입으로 만들어 사용한다.
                    </li>                 
                    <li>이미지는 public 폴더에 image 폴더를 생성해서 사용할 경우 별도의 작업 없이 연결해 사용할 수 있다.
                        <div className="example">
                            <p className="cGray">// react에서 사용하는 환경변수</p>
                            <p>const <span className="cBlue">URL_KEY</span> = process.env.PUBLIC_URL;</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>{"<img src={URL_KEY + '/img/happy-mooljjange-removebg-preview.png'} alt=''/>"}</p>
                            </div>
                    </li>
                    <li>
                        대부분의 데이터는 prop으로 값을 받아와 가공/출력한다.<br/>
                        컴포넌트 작성 시 데이터를 받아와 출력하는 양식을 고려하여 마크업하는 편이 좋다.
                    </li>
                    <li>map을 사용하여 데이터값 만큼 컴포넌트를 랜더링 할 시, 각 요소를 고유하게 식별하는 역할을 하는 속성(key)가 필요하다.
                        <div className="example">
                            <p>interface SampleDataType {'{'}</p>
                            <p className="indent-1">fruit : string;</p>
                            <p className="indent-1">id : string;</p>
                            <p>{'}'}</p>
                            <br/>
                            <p>const sampleData = {'['}</p>
                            <p className="indent-1">{'{fruit : "apple", id : "id-01"},'}</p>
                            <p className="indent-1">{'{fruit : "banana", id : "id-02"},'}</p>
                            <p className="indent-1">{'{fruit : "lemon", id : "id-03"},'}</p>
                            <p className="indent-1">{'{fruit : "grape", id : "id-04"},'}</p>
                            <p>{']'}</p>
                            <br />
                            <br />
                            <p>export const FruitComponent = ({'{data} : SampleDataType'}) = &gt; &#123;</p>
                            <p className="indent-1">return (</p>
                            <p className="indent-2">{'<div>'}</p>
                            <p className="indent-3">{'data.map((fruit)=> ('}</p>
                            <p className="indent-4 cBlue">{'<p key={data.id}>{data.fruit}</p>'}</p>
                            <p className="indent-3">{'))'}</p>
                            <p className="indent-2">{'</div>'}</p>
                            <p className="indent-1">)</p>
                            <br/>
                            <br/>
                            <br/>
                            <p className="cGray">// 결과</p>
                            <p>apple</p>
                            <p>banana</p>
                            <p>lemon</p>
                            <p>grape</p>
                        </div>
                    </li>
                    <li>StyleComponent
                        <ol>
                            <li>패키지 설치
                                <div className="example">npm install styled-components</div>
                            </li>
                            <li>TypeScript를 사용하는 경우, 타입을 추가로 설치해야 합니다:
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
