import fs from 'fs';
import path from 'path';

import { StaticPage } from '@/src/app/(static)/_components/static_page';

const PrivacyPolicyPage = async () => {
  const content = await fs.readFileSync(path.join('public', 'privacy-policy.md')).toString();
  return (
    <StaticPage content={content}/>
  );
};

export default PrivacyPolicyPage;