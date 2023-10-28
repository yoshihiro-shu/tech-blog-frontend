import Link from 'next/link';

import { Category } from "@/server/types/category"
import { cagtegoryArticlesURL } from "@/src/lib/siteMap"

type Props = {category: Category}
const ArticleCategoryComponent = ({category}: Props) => {
    return (
        <Link
        href={cagtegoryArticlesURL(category.slug)}
        className="text-blue-700 text-sm font-bold pb-4">
            { category.name }
        </Link>
    )
}

export default ArticleCategoryComponent