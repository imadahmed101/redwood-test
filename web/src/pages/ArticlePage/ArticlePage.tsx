import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

interface Props {
  id: number
}

const ArticlePage = ({id} : Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <ArticleCell id={id}/>
    </>
  )
}

export default ArticlePage
