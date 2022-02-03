import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title }) => 
{
    const [showMenu, setShowMenu] = useState(false)

    return (
      <nav className='mb-12 shadow-lg bg-neutral text-neutral-content sm:py-0'>
        <div className="flex container px-2 py-5 mx-auto flex-wrap sm:px-1">
          <div className="flex-none px-1 sm:ml-2">
            <FaGithub className="inline pr-2 text-3xl" />
            <Link
              to={{ pathname: "/" }}
              className="text-lg font-bold align-middle"
            >
              {title}
            </Link>
          </div>
          <div className="flex-1 sm:hidden">
            <div className="flex justify-end" onClick={() => setShowMenu(!showMenu)}>
                <BiMenuAltRight className='cursor-pointer' size='2em' />
            </div>
          </div>
          <div className={`w-full sm:ml-2 sm:flex sm:flex-1 sm:justify-end ${showMenu ? '': 'hidden'}`}>
            <ul className="flex flex-col sm:flex-row items-center mt-2 sm:mt-0">
                <li>
                    <Link
                      to={{ pathname: "/" }}
                      className="btn btn-ghost btn-sm rounded-btn sm:mr-1 mb-1 sm:mb-0"
                    >
                      Home
                    </Link>
                </li>
                <li>
                    <Link
                      to={{ pathname: "/about" }}
                      className="btn btn-ghost btn-sm rounded-btn"
                    >
                      About
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string
}
 
export default Navbar