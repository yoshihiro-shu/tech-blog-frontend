type Props = { text: string}
export const Text =  ({ text }: Props) => {
    return (
        <p className="text-sm flex justify-end">
            { text }
        </p>
    )
}