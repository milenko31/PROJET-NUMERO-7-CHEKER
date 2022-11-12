//import LogementData from '../../data/logement_data.json'
import styles from './Title.module.scss'

function Title() {
  return (
    <>
      <div>
        <h1 className={`${styles.title}`}></h1>
        <h3 className={`${styles.location}`}></h3>
      </div>
    </>
  )
}
