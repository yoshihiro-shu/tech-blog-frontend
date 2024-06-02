import { Spacer } from "@nextui-org/react";

import { Tag as TagType } from "@/interface/types/tag"
import { tagArticlesURL } from "@/lib/siteMap"
import Tag from "@/app/(article)/_components/tag"

type Props = {tags: TagType[]}
const ArticleTag = ({tags}: Props) => {
    return (
        <p className='flex justify-end'>
            {tags.map((tag) =>
                <>
                    <Tag
                    key={tag.id}
                    name={tag.name}
                    link={tagArticlesURL(tag.slug)}
                    />
                    <Spacer x={1} key={tag.id} />
                </>
            )}
        </p>
    )
};

export default ArticleTag;