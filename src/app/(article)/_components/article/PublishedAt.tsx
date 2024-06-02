import { displayTime } from '@/lib/datetime';

type Props = {date: Date}
const PublishedAt = ({date}: Props) => {
    return (
        <p className="text-small text-default-500">最終更新日  <>{ displayTime(date) }</></p>
    )
}
export default PublishedAt