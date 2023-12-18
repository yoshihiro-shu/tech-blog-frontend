export type Json = { [key: string]: any };

// ロケールごとのメッセージの型を定義
export interface Messages {
    [key: string]: Json ;
}

export const getMessageJSON = async (locale: string): Promise<Messages> => {
    return (await import(`../messages/${locale}.json`)).default
};