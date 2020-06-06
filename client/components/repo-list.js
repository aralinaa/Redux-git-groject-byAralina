import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import PropagateLoader from 'react-spinners/PropagateLoader'
import { searchRepos, setRepositories } from '../redux/reducers/repositories'
import Head from './head'

const RepoList = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const repoList = useSelector((store) => store.repositories.list)
  const Search = useSelector((store) => store.repositories.search)

  useEffect(() => {
    dispatch(setRepositories(userName, repositoryName))
  }, [dispatch, repositoryName, userName])

  const filteredList = repoList.filter((el) => el.name.toLowerCase().includes(Search))
  return (
    <div>
      <Head title="RepositoryList" />
      <div className="max-w-xl mx-auto mb-20 border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none text-yellow-400 bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(searchRepos(e.target.value))}
        />
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-teal-400 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-teal-400 uppercase tracking-wider">
              DEPLOYMENT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-teal-400 uppercase tracking-wider">
              LAST COMMIT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-teal-400 uppercase tracking-wider">
              README
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((el) => (
            <tr key={el.id}>
              <td className="px-6 py-4 text-white whitespace-no-wrap border-b border-gray-200">
                {el.name}
              </td>
              <td className="px-6 py-4 text-white whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-green-500 ' : 'text-red-500 '} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 text-white whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleString()}
              </td>
              <td className="px-6 py-4 text-white whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${userName}/${el.name}`}>View readme</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!repoList.length && (
        <div className="flex justify-center items-center mt-40">
          <PropagateLoader size={20} color="#abc123" clasName="center" />
        </div>
      )}
    </div>
  )
}
RepoList.propTypes = {}
export default RepoList
