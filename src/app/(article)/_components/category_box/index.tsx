import Link from 'next/link'
import { Button, Card, CardHeader, CardBody} from "@nextui-org/react";

const categories = [
    {
      "name": "アジャイル",
      "href": "/category/agile"
    },
    {
      "name": "要件定義",
      "href": "/category/requirement-definition"
    },
    {
      "name": "ビジネス",
      "href": "/category/bussiness"
    },
    {
        "name": "フロントエンド",
        "href": "/category/frontend"
      },
      {
        "name": "インフラ",
        "href": "/category/infrastructure"
      },
      {
        "name": "マーケティング",
        "href": "/category/marketing"
      }
  ]

export const CategoryBox = () => {
    return (
        <Card className="w-full flex-auto">
            <CardHeader className="pt-2 px-4 flex-col items-start pb-0">
                <div className="text-xl font-semibold pt-2">
                    Categories
                </div>
            </CardHeader>
            <CardBody className="overflow-visible pt-2 pb-8">
                <div className="grid grid-cols-3 gap-3">
                    {
                        categories.map((item, i) => (
                            <Button key={i} color="primary" variant="bordered">
                                <Link key={i} href={item.href}>
                                    {item.name}
                                </Link>
                            </Button>
                        ))
                    }
                </div>
            </CardBody>
    </Card>
    )
  }

export default CategoryBox;