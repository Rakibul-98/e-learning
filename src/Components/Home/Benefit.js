import React from 'react';
import { FcBusinessman, FcGraduationCap } from "react-icons/fc";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Benefit = () => {

    const benefits =[
        {
            id:1,
            icon:<FcGraduationCap/>,
            title:"Certificate",
            text:"Completing a certificate course can provide a valuable credential that can help advance career or pursue new opportunities. It can also be a way to acquire new knowledge and skills and enhance your professional dev.",
        },
        {
            id:2,
            icon:<FcBusinessman/>,
            title:"Expert Instructors",
            text:"The benefits of expert instruction are numerous, including increased knowledge and skills, improved performance and productivity, and a deeper appreciation and understanding of the subject matter."
        },
        {
            id:3,
            icon:<BsRocketTakeoffFill/>,
            title:"Learn from anywhere",
            text:"Learning from anywhere refers to the ability to access educational resources and courses from any location with an internet connection. That allow students to learn and study remotely, at their own pace, and on their own schedule."
        }
    ]

    return (
        <div className='grid md:grid-cols-3 gap-5 md:w-11/12 lg:w-9/12 mx-auto my-5 md:-mt-28 md:bg-white mb-20 md:shadow-xl'>
            {
                benefits.map(benefit=>
                <div className="max-w-sm mx-auto py-10 px-5 border rounded-lg md:border-none">
                    <span className='text-7xl flex justify-center'>{benefit.icon}</span>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-2">{benefit.title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                    {benefit.text}</p>
                </div>)
            }
        </div>
    );
};

export default Benefit;