export const displayTime = (ISO8601FormattedDate : Date): string => {
    const date = new Date(ISO8601FormattedDate);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}