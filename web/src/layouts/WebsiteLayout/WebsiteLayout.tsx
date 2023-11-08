import { Link, routes } from "@redwoodjs/router"

import { useAuth } from 'src/auth'

type WebsiteLayoutProps = {
  children?: React.ReactNode
}

const WebsiteLayout = ({ children }: WebsiteLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return <>
    <header>
      <div className="flex-between">

        <h1><Link to={routes.home()}>Intellee</Link></h1>
        {isAuthenticated ? (
          <div>
            <span>Logged in as {currentUser.email}</span>{' '}
            <button type="button" onClick={logOut}>Logout</button>
          </div>
        )
          : (
            <div>
              <Link to={routes.login()}>Login</Link>
            </div>
          )
        }
      </div>
      <nav>
        <ul>
          <li><Link to={routes.home()}>Home</Link></li>
          <li><Link to={routes.about()}>About</Link></li>
          <li><Link to={routes.contact()}>Contact</Link></li>
          <li><Link to={routes.contact()}>Logout</Link></li>
        </ul>
      </nav>
    </header>

    <main>
      {children}
    </main>
  </>
}

export default WebsiteLayout
