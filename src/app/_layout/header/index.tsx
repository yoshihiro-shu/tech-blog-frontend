import { SITE_NAME } from '@/constants/siteName';

export function Header() {
    return (
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <p className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl">
            {SITE_NAME}
          </p>
          <br/>
          <div className="text-lg text-gray-600">
            〜 学んだことを随時更新しています。 〜
          </div>
        </div>
      </header>
    )
};
