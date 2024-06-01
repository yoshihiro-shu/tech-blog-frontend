import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';

import { StaticPage } from '@/app/(static_page)/_components/StaticPage';

type ResGetResume = {
  htmlContent: string
}

const ProfilePage = async () => {
  const res = await apiClient.Get<ResGetResume>(APIProvider.getResumeApi());
  return (
    <StaticPage content={res.data.htmlContent}/>
  );
};

export const dynamic = 'force-dynamic';

export default ProfilePage;