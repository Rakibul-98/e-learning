import React from 'react';

const Category = () => {

    const categories =[
        {
            id:1,
            img:"https://i.ibb.co/Kzbk9j6/wd.jpg",
            title:"Web Development",
            text:"Web development refers to the process of creating websites and web applications. It involves several different aspects such as web design, web content development, client-side scripting, server-side scripting, network security configuration, and database management.",
            course:"120",
        },
        {
            id:2,
            img:"https://i.ibb.co/6vMZv0g/ps.jpg",
            title:"Photo shop",
            text:"Photoshop has a user-friendly interface that allows users to easily access and use its many features. It can be used by both beginners and professionals, and offers a range of tutorials and online resources to help users improve their skills and learn new techniques.",
            course:"210",
        },
        {
            id:3,
            img:"https://i.ibb.co/f2z2Qcw/smm.jpg",
            title:"Social Media Marketing",
            text:"Social media marketing can be a powerful tool for businesses of all sizes, as it allows them to connect with their audience in a more personal way and build brand awareness.",
            course:"150",
        },
        {
            id:4,
            img:"https://i.ibb.co/yytfv6M/drawing.jpg",
            title:"Drawing and Illustration",
            text:"Drawing is the act of creating images with lines and shading, while illustration refers to the creation of images for use in books, magazines, advertising, or other media. ",
            course:"200",
        },
        {
            id:5,
            img:"https://i.ibb.co/FqWhf40/web-design.jpg",
            title:"Web Design",
            text:"Web design has become increasingly important as more businesses and individuals rely on the internet for communication, commerce, and entertainment. A well-designed website can help to build brand awareness, drive traffic and conversions, and enhance the user experience.",
            course:"130",
        },
        {
            id:6,
            img:"https://i.ibb.co/3R542wq/it.jpg",
            title:"IT and Support",
            text:"IT support is essential in today's technology-driven world, as businesses and individuals rely on computers and other digital devices for communication, productivity, and entertainment. IT support can be provided in a variety of settings, including in-house IT departments",
            course:"50",
        }
    ]

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl'>Our Course Categories</h1>
                <p className=' my-10'>These are services that are provided by individuals with specialized skills or knowledge. <br />Some common service categories include:</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto'>
                {
                    categories.map(c=>
                        <div className='md:w-10/12 mx-auto my-5 group'>
                            <img className='h-72 w-full' src={c.img} alt={c.title} />
                            <div className='bg-slate-100 p-2 group-hover:bg-red-600 group-hover:text-white'>
                                <h3 className='text-2xl my-2'>{c.title}</h3>
                                <p className='text-sm'>{c.text.length<150 ? c.text :c.text.slice(0,150)+" . . ."}</p>
                                <p className='text-fuchsia-500 font-semibold text-lg my-2'>{c.course} Courses</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Category;