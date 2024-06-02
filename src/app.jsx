// pages/_app.js
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false; // Prevents Font Awesome from adding its own CSS automatically

import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      
    </>
  )
}

export default MyApp
