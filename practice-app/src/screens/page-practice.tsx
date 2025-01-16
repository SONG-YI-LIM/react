import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {CompAnswer01} from '@/screens'

export const PagePractice = () =>{

    return(
        <div className="contents">
            <div className="practice-wrap">
                <h5 className="tit">문제 1</h5>
                <p className="txt">배경색 red값을 가진 스타일 컴포넌트를 만드세요</p>
                <p className="txt">답변 : </p>
                {/* 이 위치에 컴포넌트를 마운트 */}
                <CompAnswer01 />
            </div>
        </div>
    )
}
