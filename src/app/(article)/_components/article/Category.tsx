import Link from 'next/link';

import { Category } from "@/server/types/category"
import { cagtegoryArticlesURL } from "@/lib/siteMap"

type Props = {category: Category}
const ArticleCategory = ({category}: Props) => {
    return (
        <Link
        href={cagtegoryArticlesURL(category.slug)}
        className="text-blue-700 text-sm font-bold pb-4">
            { category.name }
        </Link>
    )
};

export default ArticleCategory;