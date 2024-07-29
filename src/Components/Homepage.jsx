import React from 'react'
import img from '../Images/ss.png'
import me from '../Images/c (1).png'
import me1 from '../Images/c (2).png'
import me2 from '../Images/c (3).png'
import me3 from '../Images/c4.png'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
  <div>
    <div className='lg:px-[10rem] px-5 bg-neutral-100'>
      
      <div className='flex justify-center m-auto items-center lg:pt-[10rem] pt-[6rem]'>
        <div className='text-center'>

          <div className='flex w-fit items-center m-auto mb-4 justify-center border border-green-800 lg:py-3 py-2 lg:px-5 px-5 rounded-full lg:gap-4 gap-2 '>
            <button className='bg-accent text-white lg:text-sm text-xs py-2 px-4 rounded-full'>New</button>
            <p className='lg:text-base text-xs'>Join to get notified when we launch.</p>
          </div>


          <div className='py-10 pb-5'>

            <h2 className='lg:text-7xl text-4xl font-medium'>Find all forms <br className='lg:block hidden'/> of <span className='font-bold text-accent'>talent</span>  near you</h2>
            <p className='pt-5 lg:text-lg text-sm'>
              Creve is a revolutionary platform designed for everyone, <br className='lg:block hidden'/>
              bridging the gap between clients and talents seamlessly.
            </p>
          </div>

          <div>
            <button className='bg-black text-white w-fit py-3 px-10 rounded-full text-sm'>Join Waitlist</button>
          </div>

          <div className='w-full rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:my-20 my-5'>
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </div>
 
    </div>


    <div className='2xl:px-[15rem] xl:px-[1rem] lg:px-[1rem] px-5 lg:pt-20 pt-10' id='about'>
            <p className='border-b border-green-500 pb-2 mb-3 w-fit text-2xl'>About Us</p>
            <h2 className='text-justify 2xl:text-xk xl:text-lg lg:text-lg text-sm'>
                Creve was born out of a simple idea: to create a 
                space where talents of all kinds could thrive. Our founders 
                envisioned a platform that would break down barriers and provide 
                equal opportunities for individuals to showcase their skills and 
                for clients to discover exceptional talent.
    
                <br />
                <br />
                Our mission is to empower talent by providing the tools and resources they 
                need to succeed. Whether you are an artist, a developer, a writer, or any 
                other type of professional, Creve is here to support you on your journey. 
                We believe that by connecting talented individuals with the right opportunities, 
                we can drive innovation and creativity across industries.
                <br />
                <br />
                At Creve, we are constantly evolving to meet the needs of our community. 
                We listen to feedback and continuously improve our platform to ensure it 
                remains the best place for talent and clients to connect. Join us and be 
                a part of a community where your skills and potential are truly valued.
            </h2>

            <div className='lg:py-20 py-10'>
                <h2 className='border-b border-green-500 pb-2 mb-3 w-fit text-2xl'>Meet Our Team</h2>
                <div className='pt-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-5'>

                    <div>
                        <div className='rounded-lg h-[20rem] w-full overflow-hidden'>
                            <img src={me} alt="" className='rounded-lg w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center pt-4'>
                            <div>
                                <h2 className='text-base'>Bright Philip</h2>
                                <p className='text-sm'>Co-Founder & CEO</p>
                            </div>
                            <ul className='flex gap-2 ml-auto '>
                                <Link to={'https://x.com/chibuzorphilip7'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaXTwitter className='text-lg'/></li>
                                </Link>
                                
                                <Link to={'https://www.linkedin.com/in/chibuzor-philip12/'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaLinkedin className='text-lg'/></li>
                                </Link>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <div className='rounded-lg h-[20rem] w-full overflow-hidden'>
                            <img src={me1} alt="" className='rounded-lg w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center pt-4'>
                            <div>
                                <h2 className='text-base'>Emeka Awa</h2>
                                <p className='text-sm'>Co-Founder & CTO</p>
                            </div>
                            <ul className='flex gap-2 ml-auto '>
                                <Link to={'https://x.com/Mictovic'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaXTwitter className='text-lg'/></li>
                                </Link>
                                
                                <Link to={'https://www.linkedin.com/in/awa-michael-2059a3230'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaLinkedin className='text-lg'/></li>
                                </Link>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <div className='rounded-lg h-[20rem] w-full overflow-hidden'>
                            <img src={me2} alt="" className='rounded-lg w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center pt-4'>
                            <div>
                                <h2 className='text-base'>Richard Kenneth</h2>
                                <p className='text-sm'>Co-Founder & COO</p>
                            </div>
                            <ul className='flex gap-2 ml-auto '>
                                <Link to={''}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaXTwitter className='text-lg'/></li>
                                </Link>
                                
                                <Link to={'https://www.linkedin.com/in/richard-kenneth-17b058302/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaLinkedin className='text-lg'/></li>
                                </Link>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <div className='rounded-lg h-[20rem] w-full overflow-hidden'>
                            <img src={me3} alt="" className='rounded-lg w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center pt-4'>
                            <div>
                                <h2 className='text-base'>Iyowuna Jaja</h2>
                                <p className='text-sm'>Graphic/Content Designer</p>
                            </div>
                            <ul className='flex gap-2 ml-auto '>
                                <Link to={''}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaXTwitter className='text-lg'/></li>
                                </Link>
                                
                                <Link to={'https://www.linkedin.com/in/richard-kenneth-17b058302/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
                                    <li className='border border-neutral-200 p-2 cursor-pointer flex justify-center items-center rounded-full'><FaLinkedin className='text-lg'/></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <p className='border-b border-green-500 pb-2 mb-3 w-fit text-2xl pt-10' id='why'>Why Choose Us?</p>
            <div className='flex lg:flex-row flex-col gap-5 pt-5'>
                <h2 className='bg-neutral-100 2xl:text-lg xl:text-lg lg:text-lg p-5 rounded-lg text-sm'>
                    Diverse Opportunities: Whether you're 
                    working with code or with your hands, 
                    find projects that match your skills and interests.
                </h2>

                <h2 className='bg-neutral-100 2xl:text-lg xl:text-lg lg:text-lg p-5 rounded-lg text-sm'>
                    Trusted Community: Join a network 
                    of professionals and clients who 
                    are committed to quality and integrity.
                </h2>

                
                <h2 className='bg-neutral-100 2xl:text-lg xl:text-lg lg:text-lg p-5 rounded-lg text-sm'>
                    User-Friendly Platform: Our intuitive platform 
                    makes it easy to showcase your portfolio, #
                    communicate with clients, and manage your projects.
                </h2>

            </div>



            
            <p className='border-b border-green-500 lg:pt-5 pt-5 pb-2 mb-3 w-fit text-2xl'>For Digital Talents:</p>
            <h2 className='2xl:text-lg xl:text-lg lg:text-lg text-sm'>
            
                Harness the potential of your digital skills and connect 
                with clients who value your expertise. Whether you are a web developer, 
                graphic designer, digital marketer, content creator, or any other digital 
                professional, our platform offers you the chance to showcase your work, 
                find exciting projects, and grow your career.
            </h2>


            <p className='border-b border-green-500 lg:pt-10 py-10  pb-2 mb-3 w-fit text-2xl'>For Non-Digital Talents:</p>
            <h2 className='2xl:text-lg xl:text-lg lg:text-lg text-sm pb-20'>
                We celebrate the art of traditional skills and craftsmanship. 
                From artisans and musicians to personal trainers and event planners, 
                our platform provides a space for non-digital professionals to shine. 
                Connect with clients looking for your unique talents and take your 
                craft to new heights.
            </h2>


        </div>
  </div>
  )
}

export default Homepage
