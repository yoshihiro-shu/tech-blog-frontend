import Link from 'next/link'
import Image from 'next/image';

import configs from '@/config/index';

import githubIcon from '@/public/icon/github-mark.svg';
import facebookIcon from '@/public/icon/facebook-icon.svg';
import twitterIcon from '@/public/icon/twitter-icon.svg';
import gmailIcon from '@/public/icon/gmail-icon.svg';
import linkedinIcon from '@/public/icon/linkedin-icon.svg';
import threadsIcon from '@/public/icon/threads-icon.svg';
import instagramIcon from '@/public/icon/instagram-icon.svg';
import dockerIcon from '@/public/icon/docker-icon.svg';
import qiitaIcon from '@/public/icon/qiita-icon.svg';

// import LoginForm from "./Login";

export const SideBar = () => {
    return (
        <aside className="w-full md:w-1/4 flex flex-col items-center px-3">
          {/* <div className="w-full bg-white shadow flex flex-col my-4 p-6"> */}
            {/* <p className="text-xl font-semibold pb-5">
              About Us
            </p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.
            </p>
            <Link href="/login" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
              Login
            </Link> */}
            {/* <LoginForm /> */}
          {/* </div> */}

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">
              Contacts
            </p>
            <div className="grid grid-cols-3 gap-3">
              {configs.InstagramLink &&
                <Link href={configs.InstagramLink}>
                  <Image className="hover:opacity-75" src={instagramIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.FacebookLink &&
                <Link href={configs.FacebookLink}>
                  <Image className="hover:opacity-75" src={facebookIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.XLink &&
                <Link href={configs.XLink}>
                  <Image className="hover:opacity-75" src={twitterIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.LinkedinLink &&
                <Link href={configs.LinkedinLink}>
                  <Image className="hover:opacity-75" src={linkedinIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.GmailLink &&
                <Link href={`mailto:${configs.GmailLink}`}>
                  <Image className="hover:opacity-75" src={gmailIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.ThereadsLink &&
                <Link href={configs.ThereadsLink}>
                  <Image className="hover:opacity-75" src={threadsIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.GithubLink &&
                <Link href={configs.GithubLink}>
                  <Image className="hover:opacity-75" src={githubIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.DockerhubLink &&
                <Link href={configs.DockerhubLink}>
                  <Image className="hover:opacity-75" src={dockerIcon} alt="" width={500} height={500}/>
                </Link>
              }
              {configs.QiitaLink &&
                <Link href={configs.QiitaLink}>
                  <Image className="hover:opacity-75" src={qiitaIcon} alt="" width={500} height={500}/>
                </Link>
              }
            </div>
            <Link href="/" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6">
              <i className="fab fa-instagram mr-2" /> 連絡する
            </Link>
          </div>
        </aside>
    )
}

export default SideBar;
