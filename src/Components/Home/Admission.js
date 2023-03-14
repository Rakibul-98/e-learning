import { Button } from 'flowbite-react';
import React from 'react';

const Admission = () => {
    return (
        <div className='h-52'>
            <div className='h-full md:flex justify-around md:w-10/12 mx-auto items-center'>
                <div className='text-center md:text-left md:w-6/12'>
                    <h3 className='text-xl font-bold'>Admission are now open</h3>
                    <p>Online learning provides flexibility and convenience, allowing students to learn at their own pace and on their own schedule.  </p>
                </div>
                <div className='flex justify-center mt-5'>
                    <Button className='w-48 rounded-3xl py-1' gradientDuoTone="pinkToOrange">Enroll Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Admission;