import { Chip, Link } from "@nextui-org/react";

type Props = {
    name: string,
    link: string
}

const Tag = ({ name, link }: Props) => {
    return (
        // <Link href={link} className='ml-2'>
        <Link href={link}>
            <Chip color="primary" variant="bordered">
               #{name}
            </Chip>
        </Link>
    )
};

export default Tag;