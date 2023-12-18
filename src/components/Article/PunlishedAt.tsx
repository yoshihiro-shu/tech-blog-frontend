import { useTranslations } from '@/i18n/useTranslation'
import { displayTime } from '@/src/lib/datetime';

type Props = {date: Date}
const PublishedAtComponent = ({date}: Props) => {
    const { t } =  useTranslations("Article");
    return (
        <p className="text-sm flex justify-end">
            {t('LastModifiedAt')}  <>{ displayTime(date) }</>
        </p>
    )
}
export default PublishedAtComponent