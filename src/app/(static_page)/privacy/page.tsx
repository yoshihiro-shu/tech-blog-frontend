import fs from 'fs';
import path from 'path';

import { StaticPage } from '@/app/(static_page)/_components/StaticPage';

const PrivacyPolicyPage = async () => {
  const content = await fs.readFileSync(path.join('public', 'privacy-policy.md')).toString();
  return (
    <StaticPage content={content}/>
  );
};

export const dynamic = 'force-dynamic';

export default PrivacyPolicyPage;