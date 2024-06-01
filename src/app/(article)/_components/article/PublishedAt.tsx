import { displayTime } from '@/lib/datetime';

type Props = {date: Date}
const PublishedAt = ({date}: Props) => {
    return (
        <p className="text-sm flex justify-end">
            最終更新日  <>{ displayTime(date) }</>
        </p>
    )
}
export default PublishedAt