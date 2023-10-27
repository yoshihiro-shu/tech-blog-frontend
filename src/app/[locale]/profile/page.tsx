import fs from 'fs';
import path from 'path';

import { markdownToHtml } from '@/src/lib/markdown';

const ProfilePage = async () => {
  // TODO Get From Backend
  const content = await fs.readFileSync(path.join('public', 'resume.md')).toString();
  const contentHtml = await markdownToHtml(content);
  return (
    <article className="flex flex-2 shadow my-4 md:w-3/4">
    <div className="bg-white p-6 w-full">
      <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  </article>
  );
}

export default ProfilePage;