import { Footer } from 'flowbite-react';
import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin, BsMedium, BsTwitter} from "react-icons/bs";

const Foot = () => {

    const social =[
        {
            id:1,
            icon:<BsFacebook/>,
            link:"https://www.facebook.com/rakibul.rupom2001",
        },
        {
            id:2,
            icon:<BsLinkedin/>,
            link:"https://www.linkedin.com/in/rakibul-98/",
        },
        {
            id:3,
            icon:<BsTwitter/>,
            link:"https://www.facebook.com/rakibul.rupom2001",
        },
        {
            id:4,
            icon:<BsGithub/>,
            link:"https://github.com/Rakibul-98",
        },
        {
            id:5,
            icon:<BsMedium/>,
            link:"https://rakibul-98.medium.com/",
        }
    ]

    return (
        <Footer container={true}>
            <div className="w-11/12 mx-auto">
                <Footer.Divider></Footer.Divider>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="https://portfolio-rakibul.netlify.app/"
                        by="Rakibul Hasan™"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        {
                            social.map(s=><a className='text-xl' key={s.id} href={s.link}>{s.icon}</a>)
                        }
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Foot;