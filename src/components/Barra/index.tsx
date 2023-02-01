import classNames from 'classnames';
import { useState } from 'react';
import styles from './Barra.module.scss';
import lista from './lista.json'

export default function Barra() {
  const [troca, setTroca] = useState(false);

  return (
    <div className={styles.links}>
      <div onClick={() => { setTroca(!troca) }}
        className={classNames({
          [styles.barra]: true,
          [styles.barra__ativa]: troca ? true : false,
        })}>
      </div>
      <nav className={classNames({
        [styles.nav]:true,
        [styles.nav__ativa]: troca ? true : false,
      })}>
        {lista.map((item, index) => (
          <a href={item.url} className={styles.nav__item} key={index}>
            {item.nome}
          </a>
        ))}
      </nav>
    </ div>
  )
}