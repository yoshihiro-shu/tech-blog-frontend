'use client';

import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('');

  return (
    <p>{t('title')}</p>
  );
}