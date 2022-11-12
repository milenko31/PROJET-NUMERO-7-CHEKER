import LogementData from '../../data/logement_data.json'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <div className={`${styles.galleryImage}`}>
        {LogementData.map((l) => (
          <Link key={l.id} to={`/FicheLogement/${l.id}`}>
            <div
              className={`${styles.boxKey}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${l.cover})`,
              }}
            >
              <p className={`${styles.boxTitre}`}>{l.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
export default Cart
