import fs from 'fs';
import path from 'path';

import StaticPage from '@/src/components/Static/StaticPage';
import { markdownToHtml } from '@/src/lib/markdown';

const ProfilePage = async () => {
  // TODO Get From Backend
  const content = await fs.readFileSync(path.join('public', 'resume.md')).toString();
  const contentHtml = await markdownToHtml(content);
  return (
    <StaticPage content={contentHtml}/>
  );
}

export default ProfilePage;