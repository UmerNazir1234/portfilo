import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { data } from 'react-router-dom'
import { div } from 'framer-motion/m'

const Aboutme = () => {
  return (
    <motion.div initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'>
        <div className='container mx-0 px-6'>
         <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple-500'>Me</span></h2>
         <p className='text-gray-400 text-center max-w-2xl mx-auto md:16'>Get to know more about my background and passion</p>
         <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            
            <motion.img
            initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
            transition={{duration:0.9,ease:'easeOut'}}
             viewport={{once:false,amount:0.2}}
             className='w-full h-full object-cover'
            src={assets.profileImg} alt="#profile" />
            </div>
            <motion.div
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.9,ease:'easeOut'}}
             viewport={{once:false,amount:0.2}}
             className='md:w1/2'>
                <div className='rounded-2xl p-8'>
                    <h3 className='text-2xl font-semibold mb-6'>My Journery</h3>
                    <p className='text-gray-300 mb-6'>I'm a passionate mern stack developer with over 1 year of experience creating digital solution for 
                        business arround the world. My journey started with basic HTML/CSS websites 
                        and has evolved into building complex web application with modern frameworks.
                    </p>
                    <p className='text-gray-300 mb-12'>I am a passionate MERN Stack Developer with a strong interest in building dynamic and user-friendly web applications. I have hands-on experience with MongoDB, Express.js, React, and Node.js, allowing me to handle both front-end and back-end development efficiently.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {aboutInfo.map((data,index)=>(
                        <div key={index} className='bg-gray-600 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                          <div className='text-purple-600 text-4xl'>
                            <data.icon />
                          </div>
                          <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                          <p className='text-gray-400'>{data.description}</p>

                        </div>
                      ))}
                    </div>
                </div>

            </motion.div>

         </div>
        </div>

    </motion.div>
  )
}

export default Aboutme