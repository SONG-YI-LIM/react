import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {CompAnswer01, CompAnswer02, CompAnswer03, CompAnswer04, CompAnswer01Lsy} from '@/screens';

export const PagePractice = () =>{

    return(
        <div className="contents">
            <div className="practice-wrap">
                <h5 className="tit">문제 1</h5>
                <p className="txt">배경색 red값을 가진 스타일 컴포넌트를 만드세요</p>
                <p className="txt">답변 : </p>
                <CompAnswer01Lsy />
                {/* 이 위치에 컴포넌트를 마운트 */}
                <CompAnswer01 />
            </div>

            <div className="practice-wrap">
                <h5 className="tit">문제 2</h5>
                <p className="txt">배경색 blue를 prop으로 받는 스타일 컴포넌트를 만드세요</p>
                <p className="txt">답변 : </p>
                {/* 이 위치에 컴포넌트를 마운트 */}
                <CompAnswer02 />
            </div>

            <div className="practice-wrap">
                <h5 className="tit">문제 3</h5>
                <p className="txt">
                    1. Card라는 컴포넌트를 생성하세요.<br/>
                    2. title(제목)과 description(설명)을 props로 받아 화면에 표시하세요.<br/>
                    3. 배경색은 lightgray, 패딩은 20px으로 스타일링하세요.
                </p>
                <p className="txt">답변 : </p>
                {/* 이 위치에 컴포넌트를 마운트 */}
                <CompAnswer03 />
            </div>

            <div className="practice-wrap">
                <h5 className="tit">문제 4</h5>
                <p className="txt">
                    1. 가로 100px, 세로 100px의 컴포넌트를 생성하세요.<br/>
                    2. 배경색과 테두리 둥글기(radius)를 prop으로 받는 컴포넌트를 생성하세요.<br/>
                    3. 각각 yellow / 0, green / 24px, orange / 100%값을 가지는 컴포넌트를 출력하세요.
                </p>
                <p className="txt">답변 : </p>
                {/* 이 위치에 컴포넌트를 마운트 */}
                <CompAnswer04 />
            </div>
        </div>
    )
}
