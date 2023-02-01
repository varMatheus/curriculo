import Card from './Card';
import styles from './Projetos.module.scss';

export default function Projetos() {
  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Aqui tem alguns projetos que desenvolvi durante meus estudos</h2>
      <div className={styles.display}>
       <Card />
      </div>
    </section>
  )
} 