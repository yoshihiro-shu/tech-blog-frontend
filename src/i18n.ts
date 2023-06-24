import { GetStaticPropsContext } from "next";
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async (context: GetStaticPropsContext) => ({
    messages: (await import(`../messages/${context.locale}.json`)).default
}));
