import projetos from './projetos.json';
import styles from './Card.module.scss';
import { ReactComponent as Aluri } from '../../../assets/aluri.svg';

export default function Card() {
  const listaDeProjetos = [...projetos];
  return (
    <section className={styles.container}>
      {listaDeProjetos.map((item) => (
        <div key={item.id} className={styles.card}>
          <Aluri className={styles.card__imagem} />
          <div className={styles.card__box}>
            <div className={styles.card__textos}>
              <h3>{item.titulo}</h3>
              <p>{item.tecs}</p>
            </div>
            <a href={item.url}>Vercel</a>
          </div>
        </div>
      ))}
    </ section>
  )
}