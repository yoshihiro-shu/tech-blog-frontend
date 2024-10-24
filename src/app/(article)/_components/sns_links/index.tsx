import Link from 'next/link'
import Image from 'next/image';

import SNS_LINK from '@/constants/snsLink';
import githubIcon from '@/../public/icon/github-mark.svg';
import facebookIcon from '@/../public/icon/facebook-icon.svg';
import twitterIcon from '@/../public/icon/twitter-icon.svg';
import gmailIcon from '@/../public/icon/gmail-icon.svg';
import linkedinIcon from '@/../public/icon/linkedin-icon.svg';
import threadsIcon from '@/../public/icon/threads-icon.svg';
import instagramIcon from '@/../public/icon/instagram-icon.svg';
import dockerIcon from '@/../public/icon/docker-icon.svg';
import qiitaIcon from '@/../public/icon/qiita-icon.svg';

export const SnsLinks = () => {
    return (
        <div className="grid grid-cols-3 gap-3">
            {SNS_LINK.INSTAGRAM_LINK &&
                <Link href={SNS_LINK.INSTAGRAM_LINK}>
                    <Image className="hover:opacity-75" src={instagramIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.FACEBOOK_LINK &&
                <Link href={SNS_LINK.FACEBOOK_LINK}>
                <Image className="hover:opacity-75" src={facebookIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.X_LINK &&
                <Link href={SNS_LINK.X_LINK}>
                <Image className="hover:opacity-75" src={twitterIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.LINKEDIN_LINK &&
                <Link href={SNS_LINK.LINKEDIN_LINK}>
                <Image className="hover:opacity-75" src={linkedinIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.GMAIL_LINK &&
                <Link href={`mailto:${SNS_LINK.GMAIL_LINK}`}>
                <Image className="hover:opacity-75" src={gmailIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.THEREADS_LINK &&
                <Link href={SNS_LINK.THEREADS_LINK}>
                <Image className="hover:opacity-75" src={threadsIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.GITHUB_LINK &&
                <Link href={SNS_LINK.GITHUB_LINK}>
                <Image className="hover:opacity-75" src={githubIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.DOCKERHUB_LINK &&
                <Link href={SNS_LINK.DOCKERHUB_LINK}>
                <Image className="hover:opacity-75" src={dockerIcon} alt="" width={500} height={500}/>
                </Link>
            }
            {SNS_LINK.QIITA_LINK &&
                <Link href={SNS_LINK.QIITA_LINK}>
                <Image className="hover:opacity-75" src={qiitaIcon} alt="" width={500} height={500}/>
                </Link>
            }
        </div>
    )
  }