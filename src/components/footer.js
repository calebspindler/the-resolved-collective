/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>© 2021 THE RESOLVED COLLECTIVE | SITE DESIGN BY <Link to="/">SPINDLER CREATIVE</Link></p>
    </div>
  </footer>
)

export default Footer