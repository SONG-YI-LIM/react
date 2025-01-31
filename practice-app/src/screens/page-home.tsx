import React from 'react';
import {useState, useEffect, useRef} from 'react';

const sampleData = [
    {fruit : "apple"},
    {fruit : "banana"},
    {fruit : "lemon"},
    {fruit : "grape"},
]

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
                </ol>
            </div>

            <div className="list-wrap">
                <ol>
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
                </ol>
            </div>

            <div className="list-wrap">
                <ol>
                    <li>
                        유지보수와 활용 측면이 독립적인 컴포넌트보다 떨어지므로<br/>
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
                </ol>
            </div>

            <div className="list-wrap">
                <ol>
                    <li>return 안에서 텍스트용 등호 또는 중괄호 사용 시 컴포넌트가 오류를 발생시킬 수 있으므로 주의해야 한다.<br/>
                        부득이하게 사용해야 할 경우, 아스키 코드를 사용하거나<br/>
                        <span className="cBlue">{'{" 피자 < 치킨 "}'}</span> 처럼 변수 내 등호, 중괄호를 string 타입으로 만들어 사용한다.
                    </li>     
                </ol>
            </div>
            
            <div className="list-wrap">
                <ol>
                    <li>이미지는 public 폴더에 image 폴더를 생성해서 사용할 경우 별도의 작업 없이 연결해 사용할 수 있다.
                        <div className="example">
                            <p className="cGray">// react에서 사용하는 환경변수</p>
                            <p>const <span className="cBlue">URL_KEY</span> = process.env.PUBLIC_URL;</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p><span>{"<img src={ "}<span className="cBlue bold">{'URL_KEY'}</span></span><span>{"+ '/img/happy-mooljjange-removebg-preview.png'} alt=''/>"}</span></p>
                            </div>
                    </li>
                </ol>
            </div>
            <div className="list-wrap">
                <ol>  
                    <li>
                        대부분의 데이터는 prop으로 값을 받아와 가공/출력한다.<br/>
                        컴포넌트 작성 시 데이터를 받아와 출력하는 양식을 고려하여 마크업하는 편이 좋다.
                        <div className="example">
                            <p>{"export const FruitComponent = (fruit : string) => {"}</p>
                            <p className="indent-1">return (</p>
                            <p className="indent-2">{'<div>'}</p>
                            <p className="indent-3 cBlue">{'<p key={idx}>{fruit.fruit}</p>'}</p>
                            <p className="indent-2">{'</div>'}</p>
                            <p className="indent-1">)</p>
                            <br/>
                            <p className="cCompEx">{"<FruitComponent fruit={'apple'}/>"}</p>
                            <p className="cCompEx">{"<FruitComponent fruit={'banana'}/>"}</p>
                            <p className="cCompEx">{"<FruitComponent fruit={'lemon'}/>"}</p>
                            <p className="cCompEx">{"<FruitComponent fruit={'grape'}/>"}</p>
                            <br/>
                            <p className="cGray">// 결과</p>
                            {sampleData.map((txt, idx)=>(
                                <p key={idx}>{txt.fruit}</p>
                            ))}
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}
