import React from 'react'
import img from '../Images/ss.png'
import me from '../Images/c (1).png'
import me1 from '../Images/c (2).png'
import me2 from '../Images/c (3).png'
import me3 from '../Images/c4.png'
import logo from '../Images/Creve1.png'
import imageThree from '../Images/image3.png'
import { FaArrowRight, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import successImg from '../Images/gif1.gif'

const Homepage = () => {
  return (
  <div>

    <div className='lg:w-full flex z-50 fixed w-full border border-slate-200 bg-white left-0 right-0 gap-5 items-center m-auto py-3 lg:px-10 px-3 backdrop-filter backdrop-blur-3xl bg-opacity-80'>
        <div className='lg:w-10 lg:h-10 w-8 h-8'>
            <img src={logo} alt="" />
        </div>
        <ul className='flex ml-auto gap-3 items-center'>
            <a href="#why"><li className='text-sm'>Why Creve</li></a>
            <a href="#about"><li className='text-sm'>About</li></a>
            <button className='text-sm bg-white border border-neutral-400 text-black px-5 py-2 rounded-full' >Join</button>
        </ul>
    </div>



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
            <button className='bg-black text-white w-fit py-3 px-10 rounded-full text-sm' onClick={()=>document.getElementById('my_modal_3').showModal()}>Join Waitlist</button>
          </div>

          <div className='w-full rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:my-20 my-5'>
            <img src={img} alt="" className='w-full'/>
          </div>
        </div>
      </div>
 
    </div>


    <div className='2xl:px-[15rem] xl:px-[10rem] lg:px-[10rem] px-5 lg:pt-20 pt-10' id='about'>
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
                <div className='pt-5 grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-5'>

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

    <div className='flex 2xl:px-[15rem] bg-black text-white p-10'>
      <div className='w-14 h-14'>
        <img src={logo} alt="" />
      </div>

      <div className='ml-auto'>
        <h2 className='text-lg'>Contact Us</h2>
        <p className='text-sm'>
            For any questions or inquiries, please reach out to our team at:
            <br/>
            <a href='mailto:africacreve@gmail.com'>africacreve@gmail.com</a>
        </p>
      </div>
    </div>


      <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-10 pt-5 rounded-lg bg-white lg:max-w-[35rem]">
                <form method="dialog">
                    
                    <div className='flex items-center mb-5'>
                        <img src={logo} alt='' className='w-10 h-10'/>
                        <button className="btn btn-sm btn-circle btn-ghost right-2 top-2 ml-auto text-lg">✕</button>
                    </div>


                    <div>
                        <h2 className='lg:text-3xl text-xl'>Use <span className='text-green-800'>Creve</span> before others.</h2>
                        <p className='lg:text-sm text-xs pt-2'>
                            Be the first to experience the future of un-bia gig ecosystem. 
                            <br className='lg:block hidden'/> Sign up for our waitlist and get exclusive access when we launch.
                        </p>
                    </div>


                    <div className='pt-10'>
                        <p className='lg:text-sm text-xs pb-1'>Full Name: </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow"  placeholder="Enter fullname" />
                        </label>
                    </div>

                    <div className='pt-5'>
                        <p className='lg:text-sm text-xs pb-1'>Email: </p>
                        <label className="input input-bordered flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>

                    <p onClick={() => { document.getElementById('my_modal_1').showModal() }} className='bg-green-950 cursor-pointer flex m-auto justify-center  text-white mt-5 lg:p-3 lg:px-10 lg:w-full w-full lg:text-lg p-3 px-16 text-sm rounded-full'>Join the waitlist</p>
                    

                    <div>
                        <p className='text-center text-xs pt-5'>
                            We will never share or sell your emails with anyone. <br className='lg:block hidden'/>
                            We’ll only send you product updates that you can unsubscribe from anytime.
                        </p>
                    </div>
                </form>
            </div>
      </dialog>


        <dialog id="my_modal_1" className="modal">
                <div className="modal-box  p-0 rounded-md flex justify-center items-center h-[25rem]">
                    <button onClick={() => { document.getElementById('my_modal_1').close() }}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white text-black hover:text-white">✕
                    </button>

                    <div className=''>
                        <div className='flex m-auto justify-center'>
                            <img src={successImg} alt="" />
                        </div>
                        <h2 className='text-center'>Request Sent</h2>
                        <p className='text-center text-xs'>Your details has been recieved join our community</p>

                        <Link to={'https://t.me/+nflgbLBXe5xlMjI8'}>
                            <button className="btn btn-active text-xs btn-neutral w-9/12 justify-center m-auto mt-8 flex items-center gap-4">Join Community <FaArrowRight /></button>
                        </Link>
                    </div>
                </div>
        </dialog>
  </div>
  )
}

export default Homepage
