import { Tag as TagType } from "@/interface/types/tag"
import { tagArticlesURL } from "@/lib/siteMap"

import Tag from "@/app/(article)/_components/tag"

type Props = {tags: TagType[]}
const ArticleTag = ({tags}: Props) => {
    return (
        <p className='flex justify-end'>
            {tags.map((tag) =>
                <Tag
                    key={tag.id}
                    name={tag.name}
                    link={tagArticlesURL(tag.slug)}
                />
            )}
        </p>
    )
};

export default ArticleTag;