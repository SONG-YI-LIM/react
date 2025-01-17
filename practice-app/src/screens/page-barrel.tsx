import React from 'react';
import {useState, useEffect, useRef} from 'react';

export const PageBarrel = () =>{

    return(
        <div className="contents">
            <h3 className="cont-title">Barrel 문법</h3>
            <div className="list-wrap">
                <ol>  
                    <li>
                        Barrel 문법은 여러 모듈을 하나의 파일(index.ts 등)로 모아서 중앙 집중식으로 내보내기(export) 하는 방식입니다. <br/>
                        이를 통해 import 경로를 간결하게 만들고 관리하기 쉽게 해줍니다
                        <div className="example">
                            <p>파일 구조 예시</p>
                            <br/>
                            <p>src/</p>
                            <p className="indent-1">├── components/</p>
                            <p className="indent-1">│   ├── Button.tsx <span className="cGray">// 컴포넌트가 될 파일을 생성</span></p>
                            <p className="indent-1">│   ├── Header.tsx</p>
                            <p className="indent-1">│   ├── index.ts <span className="cGray">// 동일 경로에 내보내기(export)를 해줄 index파일 생성(jsx 설정이 되어있으면 js로 생성 가능)</span></p>
                            <p className="indent-1">├── utils/</p>
                            <p className="indent-1">│   ├── helper.ts</p>
                            <p className="indent-1">│   ├── constants.ts</p>
                            <p className="indent-1">│   ├── index.ts</p>
                            <p className="indent-1">├── pages/</p>
                            <p className="indent-1">│   ├── Home.tsx</p>
                            <p className="indent-1">│   ├── About.tsx</p>
                            <p className="indent-1">│   ├── index.ts</p>
                            <p className="indent-1">├── App.tsx</p>
                            <p className="indent-1">└── main.tsx</p>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="list-wrap">
                <ol>  
                    <li>
                        index파일에 내보낼 파일의 이름을 작성합니다
                        <br/>
                        <br/>
                        <div className="example">
                            <p>export {'{default as Button}'} from './Button' <span className="cGray">default설정을 함께 써준다.</span></p>
                            <p>export {'{default as Header}'} from './Header'</p>
                            <br/>
                            <p>또는</p>
                            <br/>
                            <p>export * from './Button</p>
                            <p>export * from './Header</p>
                        </div>
                    </li>
                    <li>
                        사용 시
                        <div className="example">
                            <p>import { '{Button, Header}' } from '@/components';</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}
