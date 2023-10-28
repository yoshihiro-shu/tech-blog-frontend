import Link from 'next/link';

import { Tag } from "@/server/types/tag"
import { tagArticlesURL } from "@/src/lib/siteMap"

type Props = {tags: Tag[]}
const ArticleTagComponent = ({tags}: Props) => {
    return (
        <p className='flex justify-end'>
            {tags.map((tag) =>
                <Link
                className='ml-2'
                href={tagArticlesURL(tag.slug)}
                key={tag.id} >
                    #{tag.name}
                </Link>
            )}
        </p>
    )
}

export default ArticleTagComponent