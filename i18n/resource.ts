import { Locale } from "./config";

// ロケールごとのメッセージの型を定義
export interface Messages {
    [key: string]: any ;
}

// ロケールごとのメッセージを格納するオブジェクトの型を定義
type Resources  = {
    [key in Locale]: Messages
}

export const resources: Resources = {
    'ja': require('../messages/ja.json'),
    'en': require('../messages/en.json'),
}