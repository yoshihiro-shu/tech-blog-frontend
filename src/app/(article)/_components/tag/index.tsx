import Link from 'next/link';
import { Button } from "@nextui-org/react";

type Props = {
    name: string,
    link: string
}

const Tag = ({ name, link }: Props) => {
    return (
        <Link href={link} className='ml-2'>
            <Button color="primary" variant={'bordered'}>
                {name}
            </Button>
        </Link>
    )
};

export default Tag;