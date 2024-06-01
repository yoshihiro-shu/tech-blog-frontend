import { markdownToHtml } from '@/src/lib/markdown';

type Props = {content: string}

export const Markdown = async({content}: Props) => {
    const contentHtml = await markdownToHtml(content);
    return (
        <div
        className="prose prose-a:text-blue-600  prose-headings:underline max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    )
};
