import styles from './App.module.css';
import Logos from '@components/logos/Logos';
import Card from '@components/card/Card';

function App() {
  return (
    <>
      <Logos />
      <h1>Vite + React</h1>
      <Card />
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
