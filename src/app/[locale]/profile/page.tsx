import fs from 'fs';
import path from 'path';

import { markdownToHtml } from '@/src/lib/markdown';

const ProfilePage = async () => {
  // TODO Get From Backend
  const content = await fs.readFileSync(path.join('public', 'resume.md')).toString();
  const contentHtml = await markdownToHtml(content);
  return (
    <>
      <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}

export default ProfilePage;