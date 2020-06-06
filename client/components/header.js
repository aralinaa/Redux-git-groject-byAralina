import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/reducers/repositories'

const Header = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const repoList = useSelector((store) => store.repositories.list)
  const user = useSelector((store) => store.repositories.user)

  useEffect(() => {
    dispatch(setUser(userName))
  }, [dispatch, userName])

  return (
    <nav className="flex items-center justify-between flex-wrap header-bg-cl p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {repoList && <img className="w-16 mx-2" src={user.avatar_url} alt="" />}
        {repoList && <span className="text-3xl uppercase font-serif mx-2">{user.login}</span>}
      </div>
      <div id="menu" className="flex space-x-4">
        <div>
          {repoList && (
            <Link to="/">
              <button
                type="button"
                className="btnClass mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... bg-blue-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Main
              </button>
            </Link>
          )}
        </div>
        <div>
          {repositoryName && (
            <Link to={`/${userName}`}>
              <button
                type="button"
                className="btnClass mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... bg-blue-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Repositories
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
export default React.memo(Header)
