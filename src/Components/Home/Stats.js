import React from 'react';
import CountUp from 'react-countup';
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import { MdVideoLibrary } from "react-icons/md";

const Stats = () => {

    const stats =[
        {
            id:1,
            end:"50000",
            icon:<FaUserGraduate/>,
            title:"Students"
        },
        {
            id:2,
            end:"50",
            icon:<FaUserTie/>,
            title:"Instructor"
        },
        {
            id:3,
            end:"2000",
            icon:<MdVideoLibrary/>,
            title:"Videos"
        },
        {
            id:4,
            end:"20000",
            icon:<ImUserCheck/>,
            title:"Employed Students"
        },
    ]


    return (
        <div className='grid md:grid-cols-4 mb-20 w-10/12 mx-auto lg:w-8/12'>
            {
                stats.map(s=>
                <div className='text-center group mt-20'>
                    <span className='text-6xl flex justify-center border w-fit mx-auto group-hover:bg-amber-400 group-hover:text-white p-5'>{s.icon}</span>
                    <div  className='text-4xl my-5 font-semibold'>
                        <CountUp
                            delay={1}
                            end={s.end}
                            duration={5}
                            enableScrollSpy
                        ></CountUp>
                        <span>+</span>
                    </div>
                    <h3 className='text-xl'>{s.title}</h3>
                </div>)
            }
        </div>
    );
};

export default Stats;