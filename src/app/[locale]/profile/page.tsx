import fs from 'fs';
import path from 'path';

import StaticPage from '@/src/components/Static/StaticPage';

const ProfilePage = async () => {
  // TODO Get From Backend
  const content = await fs.readFileSync(path.join('public', 'resume.md')).toString();
  return (
    <StaticPage content={content}/>
  );
}

export default ProfilePage;