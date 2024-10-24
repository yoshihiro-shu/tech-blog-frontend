import APIProvider from '@/interface/api/v1';
import apiClient from '@/interface/client';

import { StaticPage } from '@/app/(contents)/_components/StaticPage';

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