import projetos from './projetos.json';
import styles from './Card.module.scss';

export default function Card() {
  const listaDeProjetos = [...projetos];
  
  return (
    <section className={styles.container}>
      {listaDeProjetos.map((item, index) =>
        <div key={index} className={styles.card}>
          <img src={item.img + '.png'} alt="" className={styles.card__imagem}/>
          <div className={styles.card__box}>
            <div className={styles.card__textos}>
              <h3>{item.titulo}</h3>
              <p>{item.tecs}</p>
            </div>
            <a href={item.url}>Vercel</a>
          </div>
          <span className={styles.card__descricao}>{item.descricao}</span>
        </div>
      )}
    </ section>
  )
}
