import {useState} from 'react';

export const SampleState = () =>{
    const [count, setCount] = useState(0); // 초기값을 0으로 설정

    const increaseCount = () => {
      setCount(count + 1); // 상태 업데이트
    };

    return(
        <div className="list-wrap">
            <p>현재 카운트: {count}</p><br/> {/* count의 값을 출력 */}            
            <button className="btn" onClick={increaseCount}>카운트 증가</button>{/* 함수를 실행시켜서 state값 업데이트 */}            
        </div>
    )
}
