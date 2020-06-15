import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Markdown from 'markdown-to-jsx'
import Loader from 'react-loader-spinner'
import { updateReadme } from '../redux/reducers/repositories'

const RepoView = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const readme = useSelector((s) => s.repositories.readme)

  useEffect(() => {
    dispatch(updateReadme(userName, repositoryName))
  }, [dispatch, userName, repositoryName])

  return (
    <div className="markdown-body text-white relative">
      <Markdown>{readme}</Markdown>
      {!readme && (
        <div className="flex items-center justify-center mt-20">
          <Loader type="Puff" color="#00BFFF" height={70} width={70} timeout={3000} />
        </div>
      )}
    </div>
  )
}

RepoView.propTypes = {}
export default RepoView
