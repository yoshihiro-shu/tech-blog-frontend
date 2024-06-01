import Link from 'next/link';

import { Tag } from "@/server/types/tag"
import { tagArticlesURL } from "@/lib/siteMap"

type Props = {tags: Tag[]}
const ArticleTag = ({tags}: Props) => {
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
};

export default ArticleTag;