import APIProvider from '@/server/api/v1';
import apiClient from '@/server/client';

import { StaticPage } from '@/app/(static)/_components/StaticPage';

type ResGetResume = {
  htmlContent: string
}

const ProfilePage = async () => {
  let htmlContent = '';
  try {
    const res = await apiClient.Get<ResGetResume>(APIProvider.getResumeApi());
    htmlContent = res.data.htmlContent;
  } catch (e) {
    console.error(e);
  }
  return (
    <StaticPage content={htmlContent}/>
  );
};

export const dynamic = 'force-dynamic';

export default ProfilePage;