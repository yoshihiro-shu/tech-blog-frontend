export default {
    // BackendAPI: process.env.BASE_URL || " http://localhost:8000/",
    backendAPI: process.env.BANCKED_API,
    SNS: {
        xLink: process.env.X_LINK || "",
        instagramLink: process.env.INSTAGRAM_LINK || "",
        facebookLink: process.env.FACEBOOK_LINK || "",
        linkedinLink: process.env.LINKEDIN_LINK || "",
        gmailLink: process.env.GMAIL_LINK || "",
        thereadsLink: process.env.THEREADS_LINK || "",
        githubLink: process.env.GITHUB_LINK || "",
        dockerhubLink: process.env.DOCKERHUB_LINK || "",
        qiitaLink: process.env.QIITA_LINK || "",
    }
}
