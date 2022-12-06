import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="icone_and_text">
          <img
            className="kasa_footer"
            src={process.env.PUBLIC_URL + '/LOGO_footer.png'}
            alt="logo de KASA footer"
          />
          <p className="text_footer">© 2020 Kasa. All rights reserved</p>
          FOOTER
        </div>
      </div>
    </footer>
  )
}

export default Footer
