import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import  TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";


const Home = () => {
  return (
    <div>
    {/* Section1 */}
    <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center
     text-white justify-between'>
     
        <Link to={"/signup"}>
        <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 
            font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200
            group-hover:bg-richblack-900'>
                <p>Become an Instructor</p>
                <FaArrowRight />
            </div>
        </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"} /> 
        </div>

        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
         With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className='mx-3 my-12 shadow-blue-200 '>
          <video
          muted
          loop
          autoPlay
          >
          <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1 */}
        <div>
          <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className='text-4xl font-semibold'>
              Unlock Your
              <HighlightText text={"coding potential"} />
              with our online courses
            </div>
          }
          subheading = {
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1 = {
            {
              btnText: "Try it Yourself",
              active: true,
              linkto: "/signup"
            }
          }

          ctabtn2 = {
            {
              btnText: "Learn More",
              active: false,
              linkto: "/login"
            }
          }
          codeblock={`<!DOCTYPE html>
           <html>
           head><title>Example</title><linkrel="stylesheet"href="styles.css">
           /head>
           body>
           h1><ahref="/">Header</a>
           /h1>
           nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
           /nav>
           `}

           codecolor={"text-yellow-25"}

         />
        </div>

      {/* Code Section 2 */}
        <div>
          <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={
            <div className='text-4xl font-semibold w-[40%]'>
              Start
              <HighlightText text={"coding in seconds"} />
            </div>
          }
          subheading = {
            "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
          }
          ctabtn1 = {
            {
              btnText: "Continue Lesson",
              active: true,
              linkto: "/signup"
            }
          }

          ctabtn2 = {
            {
              btnText: "Learn More",
              active: false,
              linkto: "/login"
            }
          }
          codeblock={`<!DOCTYPE html>
           <html>
           head><title>Example</title><linkrel="stylesheet"href="styles.css">
           /head>
           body>
           h1><ahref="/">Header</a>
           /h1>
           nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
           /nav>
           `}

           codecolor={"text-yellow-25"}

         />
        </div>
    </div>

    {/* Section2 */}
    <div className='bg-pure-greys-5 text-richblack-700'>
        {/* First */}
        <div className='homepage_bg h-[310px]'>
          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-5 mx-auto'>

          <div className='h-[150px]'></div>
            <div className='flex flex-row gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                  <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight/>
                  </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                  <div>
                  Learn More
                  </div>
              </CTAButton>
            </div>

          </div>
        </div>

        {/* Second */}
        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
         
          <div className='flex flex-row gap-10 mb-10 mt-[95px]'>
              <div className='text-4xl font-semibold w-[45%] '>
                Get the skills you need for a 
                <HighlightText text={"job that is in demand"} />
              </div>

              <div className='flex flex-col w-[40%] items-start'>
                <div className='text-[16px] mb-8'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive 
                specialist requires more than professional skills.
                </div>
                
                <CTAButton active={true} linkto={"/signup"}>
                    <div>Learn more</div>
                </CTAButton>
               
              </div>
          </div>

          <TimeLineSection />  

          <LearningLanguageSection />

        </div>


    </div>

    {/* Section3 */}

    {/* Footer */}
    
    </div>
  )
}

export default Home;
