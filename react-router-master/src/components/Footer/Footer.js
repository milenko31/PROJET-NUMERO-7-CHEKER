import React from 'react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={`${styles.footer}`}>
        <div className={`${styles.icone_and_text}`}>
          <img
            className={`${styles.kasa_footer}`}
            src={process.env.PUBLIC_URL + '/LOGO_footer.png'}
            alt="logo de KASA footer"
          />
          <p className={`${styles.text_footer}`}>
            © 2020 Kasa. All rights reserved
          </p>
          FOOTER
        </div>
      </div>
    </footer>
  )
}

export default Footer
