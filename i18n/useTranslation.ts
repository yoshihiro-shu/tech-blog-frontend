import "server-only";

import { i18n, Locale } from "@/i18n/config";
import { resources } from "./resource";

const isSupportLocale = (locale: string | undefined): locale is Locale => {
  if (!locale) return false;
  return i18n.locales.includes(locale as Locale);
}

interface UseTranslation {
  t: (key: string) => any;
}

export const useTranslations = (key: string): UseTranslation => {
  let locale = i18n.defaultLocale
  const messages = resources[locale as Locale][key];
  const t = (key: string): string => {
      return key in messages ? messages[key] : key; // キーに対応するメッセージがない場合、キー自体を返す
    };
  return { t };
}