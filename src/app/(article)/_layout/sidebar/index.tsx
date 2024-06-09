import {Card, CardHeader, CardBody} from "@nextui-org/react";

import { SnsLinks } from '@/app/(article)/_components/sns_links';

export const SideBar = () => {
    return (
      <>
        <Card className="w-full flex-auto">
          <CardHeader className="pt-2 px-4 flex-col items-start pb-0">
            <p className="text-xl font-semibold pt-2">
              Contacts
            </p>
          </CardHeader>
          <CardBody className="overflow-visible pt-2 pb-8">
            <SnsLinks />
          </CardBody>
        </Card>
      </>
    )
}

export default SideBar;
