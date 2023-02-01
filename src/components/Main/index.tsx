import styles from './Main.module.scss'
import Typical from "react-typical";

export default function Main() {
  return (
    <section id="sobre" className={styles.container}>
      <h1 className={styles.container__titulo}>
      <Typical 
        steps={[1500, 'Olá, eu sou Matheus Severo',]}
      />
      </h1>
      <p className={styles.container__sobre}>E sou um Desenvolvedor Front-end Júnior</p>
      <span className={styles.container__texto}>Iniciei meus estudo no ano de 2022, apesar de não ter experiência profissional
        na área, possuo o conhecimento de desafios e projetos de desenvolvimento. Estou a
        procura da minha primeira oportunidade na área de tecnologia.
      </span>
    </section>
  )
}