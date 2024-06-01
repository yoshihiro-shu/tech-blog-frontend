import { Markdown } from "@/app/_components/markdown";

type Props = { content: string }

export const StaticPage = ({ content }: Props) => {
    return (
        <article className="flex flex-2 shadow my-4">
            <div className="bg-white p-6 w-full">
                <Markdown content={content} />
            </div>
        </article>
    );
};
