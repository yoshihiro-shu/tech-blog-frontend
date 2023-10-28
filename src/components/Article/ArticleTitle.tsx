type Props = { title: string}
const ArticleTitleComponent = ({title}: Props) => {
    return (
        <div className="text-4xl font-bold hover:text-gray-700 pb-4">
            { title }
        </div>
    )
}

export default ArticleTitleComponent