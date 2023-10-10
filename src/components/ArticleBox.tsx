import Link from 'next/link'
import Image from 'next/image'

// import { generatePath } from "react-router-dom";

import Article from '../../server/types/article'

type Props = { article: Article }

const displayArticleContent: number = 50

export const  ArticleBox = ({ article }: Props) => {
    // const articleDetailPath: string = generatePath("/articles/:id", {id: article.id.toString() })
    const articleDetailPath: string = "/article/" + article.id

    return (
      <article className="flex flex-col shadow my-4">
        <Link href={articleDetailPath} className="hover:opacity-75">
          <Image src={ article.thumbnailUrl } alt={article?.title} width={500} height={500}/>
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="/" className="text-blue-700 text-sm font-bold uppercase pb-4">{ article.category.name }</Link>
          <Link href={articleDetailPath} className="text-3xl font-bold hover:text-gray-700 pb-4">{ article.title }</Link>
          <p className="text-sm pb-3">
            By <Link href="/" className="font-semibold hover:text-gray-800">{ article.user.name }</Link>
            , Published on <>{ article.createdAt }</>
          </p>
          <p className="pb-6">{ article.content.slice(0, displayArticleContent) }</p>
          <p className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></p>
        </div>
      </article>
    )
}
