import { Spacer } from "@nextui-org/react";

import { Tag as TagType } from "@/interface/types/tag"
import { tagArticlesURL } from "@/lib/siteMap"
import Tag from "@/app/(article)/_components/tag"

type Props = {tags: TagType[]}
const ArticleTag = ({tags}: Props) => {
    return (
        <div className='flex justify-end pb-3'>
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
        </div>
    )
};

export default ArticleTag;