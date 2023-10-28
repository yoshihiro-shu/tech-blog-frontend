import { markdownToHtml } from '@/src/lib/markdown';

type Props = {content: string}

const MarkdownComponent = async({content}: Props) => {
    const contentHtml = await markdownToHtml(content);
    return (
        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    )
}

export default MarkdownComponent