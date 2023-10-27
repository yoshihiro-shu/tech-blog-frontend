type Props = {
    statusCode: number,
    errorMsg: string
}

const ErrorPage = ({ statusCode, errorMsg }: Props) => {
    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
            <div className="bg-white p-6 w-full">
                <div>Error Code: {statusCode}</div>
                <div>Error Message: {errorMsg}</div>
            </div>
        </article>
    )
}

export default ErrorPage;