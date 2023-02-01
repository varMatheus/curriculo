import Main from "components/Main";
import Barra from "./components/Barra";
import styles from './App.module.scss';
import Contato from "components/Contato";
import Projetos from "components/Projetos";

function App() {
  return (
    <>
      <div className={styles.main}>
        <Main />
        <Contato />
        <Barra />
      </div>
      <Projetos />
    </>
  );
}

export default App;
