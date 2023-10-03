import Button from "./Button";
import Input from "./Input";
import styles from "./App.css";

function App() {
  return (
    <div>
      <h1 className={styles.h1}>Helllo, my react app !</h1>
      <Button text="start" />
      <Button text="medium" />
      <Button text="final" />
      <Input />
    </div>
  );
}

export default App;
