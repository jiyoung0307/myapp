// React.Component를 상속받아서 App1클래스가 생성되었으므로 import(필수!)
import React from 'react';

// 클래스 컴포넌트
class App1 extends React.Component {
    // state객체 사용
    state = {
        counter: 0,
    }

    onClick = () => {
        // this.state.counter = this.state.counter + 1;    // Do not mutate state directly. Use setState() error 발생
        this.setState(cur => ({ counter: cur.counter + 1 }));
    }

    render() {      // 함수가 아닌 클래스이므로 return이 불가능 => render() 함수 사용(JSX 반환하기 위해)
        return (
            <div>
                <h1>Class Component</h1>
                {/* state객체를 사용 */}
                <p>{this.state.counter} Clicked</p>
                {/* class이므로 this작성해주어야 함 */}
                <button onClick={this.onClick}>Click!</button>
            </div>
        );
    }
}

// 바깥에서도 사용할 수 있도록 export
export default App1;