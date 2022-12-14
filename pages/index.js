import { useEffect, useState } from 'react'
import {useWindowScroll} from 'react-use';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  const {y: pageYOffset} = useWindowScroll();
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [transparent, setTransparent] = useState(false);

  
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if(pageYOffset < 200){
      setTransparent(true);
  }else{
    setTransparent(false);
  }
  },[pageYOffset]);




  return (
    <div className="">
      <Head>
        <title>Simamkele Ngcasane | Sovtech Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/* NAVBAR */}
       <div className={`navbar sticky ${transparent ? "bg-transparent": "bg-[#333]"}`} id='navbar'>
          <ul>
            <li><Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link to="sovtech" spy={true} smooth={true} offset={-100} duration={500}>Why SovTech</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link></li>
          </ul>
       </div>


      
        {/* HOME SECTION */}
      <div id="home">
        <div className="content">
          <h1>

                Hi, My Name is Simamkele Ngcasane
            </h1>


          <p className='text-xl'>I'm a recent BSc Computer Science graduate
            and current Bsc Hons(Computer Science &
            Information systems)
            student from Nelson
            Mandela University.
          </p>
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="btn p-4 flex flex-col justify-center items-center curson-pointer">
          
            More about me
          </Link>
        </div>
     </div>

        {/* ABOUT ME SECTION */}
        <div id="about">
          <h1>More About me</h1>
          <hr />
          <br />
          <p>
            My name is Simamkele Ngcasane. I'm a recent BSc Computer Science graduate and current BSc Hons
             (Computer Science & Information systems) student from Nelson Mandela University.

          </p>
          <br/>
          
          <p>
           I got introduced to coding when I took IT as one of my subjects in high school. 
            We first started by using a block-based visual programming language called Scratch and later got introduced to 
            a programming language called Delphi which is what spiked my passion for coding. During my high school journey, 
            we had to build IT projects each year and I enjoyed building these from just a simple idea and turning them 
            into solid products. I also enjoyed the research and learning that came with it. 
            This made me curious and want to continue learning and see what I can do with just some lines of code.
            I then decided to enrol for a Computer Science degree after my matric year and my passion for building solutions and 
            solving problems has been growing ever since.
          </p>
          <br/>
          <p>
            With my inquisitive nature, I'm always looking to enhance the knowledge I've acquired by taking extra educational material
            so I can upskill myself. I have a strong work ethic, I am always willing to learn and I can easily pick up on new technologies.
            With no doubt, I would be an asset in any team or environment I am in.
          </p>
          <br/>
          <p>
            During my free time, I love trying out new adventures, spending time with my family and friends,
             watching tech review channels on YouTube such as MKBHD and listening to tech podcasts like The ZaTechRadio,
              Tech Unstack podcasts and The Mash Startup podcast.
          </p>
        </div>

        {/* WHY SOVTECH SECTION */}
        <div id="sovtech" className='flex flex-col gap-2'>
          <h1>Why SovTech</h1>
          <hr />
          <br />
          <p>
            I have researched SovTech in detail and have been following their social media pages. 
            Not only do they have an impressing track record of achievement which tells me they are ambitious and innovative, 
            I was also attracted to their workplace culture and I believe the company values align with mine. 
            I am new to the industry and I would like to be part of an organisation that has a positive work environment and 
            where everyone has the opportunity to contribute to the company???s goals. 
            I also believe that working for sovtech will mean I am constantly growing and improving, and
             I feel excited about the prospect of working on challenging projects with other passionate people. 
             I am looking to join to a company like SovTech that is a market leader, and
              I plan to build a long-term career with them.
          </p>
         
        </div>

        {/* CONTACT ME SECTION */}
        <div id="contact">
          <h1>Get in touch with me</h1>
          <hr />
          <br />
          <div className="socials">
            <a  href="mailto:simamkelengcasane28@gmail.com">
              <FontAwesomeIcon icon={ faEnvelope } className="fa-2x" />
            </a>
            <a
              
              href="https://www.linkedin.com/in/simamkele-ngcasane-182b66160"
            >
              <FontAwesomeIcon icon={ faLinkedinIn } className="fa-2x" />
            </a>
            <a  href="https://github.com/shmurds28">
              <FontAwesomeIcon icon={ faGithub } className="fa-2x" />
            </a>
            <a  href="https://instagram.com/shmurds_">
              <FontAwesomeIcon icon={ faInstagram } className="fa-2x" />
            </a>
            <a  href="https://twitter.com/_Shmurds">
             <FontAwesomeIcon icon={ faTwitter } className="fa-2x" />
            </a>
           
            
          </div>
    </div>



    </div>
  )
}
