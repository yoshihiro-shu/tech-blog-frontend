import Script from "next/script"

export const GoogleTagManager = () => {
    const gtmID = 'G-0EGNB55Y3V';
    return (
        <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${gtmID});
          `}
        </Script>
        </>
    )
}