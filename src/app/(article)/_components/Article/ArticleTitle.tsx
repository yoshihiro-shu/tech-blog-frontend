type Props = { title: string}
export const ArticleTitle = ({title}: Props) => {
    return (
        <div className="text-4xl font-bold hover:text-gray-700 pb-4">
            { title }
        </div>
    )
};
