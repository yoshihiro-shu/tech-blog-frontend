import MarkdownComponent from "../Markdown";

type Props = { content: string }
const StaticPage = ({ content }: Props) => {
    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
            <div className="bg-white p-6 w-full">
                <MarkdownComponent content={content} />
            </div>
        </article>
    );
}

export default StaticPage;