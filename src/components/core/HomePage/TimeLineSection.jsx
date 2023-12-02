import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    }
] 

const TimeLineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-15 items-center'>
           
            <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeline.map( (element, index) =>{
                        return (
                            <div className='flex flex-row gap-5' key={index}>
                               
                                <div className='w-[50px] h-[50px] bg-white flex items-center '>
                                    <img src={element.Logo} alt="logo" />
                                </div>

                                <div>
                                    <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                    <p className='text-base'>{element.Description}</p>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>

            <div className='relative shadow-blue-200'>
                <img src={TimeLineImage}
                 alt = "timelineimage"
                 className='shadow-white object-cover h-fit'
                  />
            </div>

        </div>
    </div>
  )
}

export default TimeLineSection