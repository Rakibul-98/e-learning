import { Button } from 'flowbite-react';
import React from 'react';

const Contact = () => {

    const input = [
        {
            id:1,
            name:"name",
            place:"Enter your name",
        },
        {
            id:2,
            name:"email",
            place:"Enter your email",
        }
    ]

    return (
        <div className='grid md:grid-cols-2 my-20 w-11/12 mx-auto'>
            <div>
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7301.412811376525!2d90.37583169999999!3d23.793467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1678665945440!5m2!1sen!2sbd" height={450} style={{width:"100%"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='md:px-10 my-auto'>
                <h2 className='text-3xl md:mt-0 mt-10 mb-5 font-semibold'>Contact Us</h2>
                <form >
                    {
                        input.map(ip=>
                            <input key={ip.id} className='w-full md:w-6/12 h-16 mb-5' type="text" name={ip.name} placeholder={ip.place}/>
                            )
                    }
                    <input className='w-full h-16 mb-5' type="text" name="subject" placeholder="Subject"/>
                    <textarea className="h-32 w-full" placeholder='Write your message here' />
                    <Button className='mt-2' gradientDuoTone="cyanToBlue">
                        SUBMIT
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;