import * as React from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'
import { Link } from '@reach/router'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className="classes">
    <table className='miniHero'>
        <tbody>
          <tr>
            <td>
                <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                     About
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                      Available Homes
                    </Link>
                  </div>
                  </td>
                  <td>
                  <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                    Amenities
                    </Link>
                  </div>
                  </td>
                <td>
                  <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                     Homesites
                    </Link>
                  </div>
                </td>
                <td><div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                      Testimonials
                    </Link>
                  </div>
                </td>
                <td>
                <div className="card-footer">
                    <Link className="btn btn-primary" to={'/'}>
                      Area Information
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="card-footer">
                    <Link className="btn btn-primary" to={'/pages/Contact'}>
                      Contact Us
                    </Link>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )}

export default Hero
