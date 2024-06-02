import Link from 'next/link';

import Article from '@/interface/types/article'
import { articleDetailURL } from '@/lib/siteMap';
import ArticleTag from '@/app/(article)/_components/article/Tag';
import ArticleCategory from '@/app/(article)/_components/article/Category';
import PublishedAtComponent from '@/app/(article)/_components/article/PublishedAt';

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

type Props = { article: Article }
const ArticleBox = ({ article }: Props) => {
    return (
        <Card fullWidth shadow='sm'>
            <Link href={articleDetailURL(article.id.toString())}>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md">{article?.title}</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <ArticleCategory category={article.category}/>
                    <PublishedAtComponent date={article.updatedAt} />
                </CardBody>
                <CardFooter>
                    <ArticleTag tags={article.tags} />
                </CardFooter>
            </Link>
        </Card>
    )
};

export default ArticleBox;