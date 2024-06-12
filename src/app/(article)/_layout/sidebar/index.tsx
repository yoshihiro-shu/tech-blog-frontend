import {Card, CardHeader, CardBody, Spacer} from "@nextui-org/react";

import CategoryBox from "../../_components/category_box";
import { SnsLinks } from '@/app/(article)/_components/sns_links';

export const SideBar = () => {
    return (
      <>
        <CategoryBox />
        <Spacer y={4}/>
        <Card className="w-full flex-auto">
          <CardHeader className="pt-2 px-4 flex-col items-start pb-0">
            <div className="text-xl font-semibold pt-2">
              Contacts
            </div>
          </CardHeader>
          <CardBody className="overflow-visible pt-2 pb-8">
            <SnsLinks />
          </CardBody>
        </Card>
      </>
    )
}

export default SideBar;
