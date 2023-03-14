import { Accordion } from 'flowbite-react';
import React from 'react';

const FAQ = () => {

    const questions =[
        {
            id:1,
            title:"What is HTML5 ?",
            ans:"HTML5 (Hypertext Markup Language version 5) is the latest version of the markup language used to structure and present content on the web. HTML5 was released in 2014 and introduced a number of new features and improvements over its predecessor, HTML4."
        },
        {
            id:2,
            title:"What is CSS3?",
            ans:"CSS3 (Cascading Style Sheets version 3) is the latest version of the CSS language, which is used to style and format the content of web pages. CSS3 was first introduced in 1999 and has been updated with new features and improvements over time."
        },
        {
            id:3,
            title:"What is react js?",
            ans:"ReactJS is a JavaScript library for building user interfaces. It was developed by Facebook and is used by many large companies including Netflix, Instagram, and Airbnb."
        },
        {
            id:4,
            title:"What is ES6?",
            ans:"ES6, also known as ECMAScript 2015, is the sixth version of the ECMAScript language specification. ECMAScript is a standardized scripting language that is used to create dynamic web pages and applications. ES6 was officially released in 2015 and introduced many new features and improvements over the previous version, ES5."
        },
        {
            id:5,
            title:"What is node?",
            ans:"Node.js, commonly referred to as Node, is an open-source, cross-platform, server-side JavaScript runtime environment. It allows developers to use JavaScript on the server-side to build fast, scalable, and highly efficient applications."
        },
    ]
    return (
        <div className='w-10/12 mx-auto my-20'>
            <h1 className='text-4xl font-semibold my-5'>Frequently Asked Questions</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='h-96 md:mr-10'>
                    <img className='h-full w-full rounded-lg' src="https://i.ibb.co/VDGzgnt/pexels-leeloo-thefirst-5428833.jpg" alt="" />
                </div>
                <div className=''>
                    <Accordion alwaysOpen={true}>
                        {
                            questions.map(q=>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        {q.title}
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            {q.ans}
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                )
                        }
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;