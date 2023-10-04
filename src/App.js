import { useState } from 'react';
import Button from './Button';
// import Input from "./Input";
import styles from './App.css';   //styles객체로 가져오기

// App1 클래스 컴포넌트를 App함수형 컴포넌트로 수정하기
// Button 컴포넌트 별도로 만들어서 import
function App() {
  let [counter, setCounter] = useState(0);
  const onClick = () =>
    setCounter(counter + 1);
    console.log("rendered~~");
  // const callOnce = () => {
  //   console.log("call once only!!!");
  // }

  // useEffect(callOnce, []);  // 생성시에 한번만 호출
  // useEffect(() => console.log("state가 변경됨"), [counter]);  // state 변경될때마다 호출
  // useEffect(() => console.log("페이지가 렌더링됨"));  // UI가 render될때마다 호출

  return (
    // <div>
    //   <h1 className={styles.h1}>Helllo, my react app !</h1>
    //   <Button text="start" />
    //   <Button text="medium" />
    //   <Button text="final" />
    //   <Input />
    // </div>
    <div>
      <h1>functional Component</h1>
      <p>{counter} Clicked</p>
      <Button onClick = {onClick} />
    </div>
  );
}

export default App;
