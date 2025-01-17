import React from 'react';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

interface Props {
    boxColor: string;
}

const BoxEach = styled.div<Props>`
    width: 50px;
    height: 50px;
    background: ${(props) => (props.boxColor)};
`
export const CompAnswer02Lsy = () => {
    // 출력
    return (
        <BoxEach  boxColor={'blue'} />
    );
};