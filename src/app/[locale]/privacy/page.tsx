import fs from 'fs';
import path from 'path';

import StaticPage from '@/src/components/Static/StaticPage';
import { markdownToHtml } from '@/src/lib/markdown';

const PrivacyPolicyPage = async () => {
  const content = await fs.readFileSync(path.join('public', 'privacy-policy.md')).toString();
  const contentHtml = await markdownToHtml(content);
  return (
    <StaticPage content={contentHtml}/>
  );
}

export default PrivacyPolicyPage;