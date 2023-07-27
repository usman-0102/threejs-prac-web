import React from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import CustomButton from '../components/CustomButton'


const Home = () => {
    const snap = useSnapshot(state);
  return (
     <AnimatePresence>
        {snap.intro &&(
           <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
                <img src="./threejs.png" alt="Logo" className='w-8 h-8 object-contain'/>
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                 <h1 className='head-text'>
                    LET'S <br className='md:block hidden'/> DO IT.
                 </h1>
                </motion.div >
                <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                    <p className='max-w-md font-normal text-gray-900 text-base'>
                      Create your Unique and exclusive shirt with our brand-new 3D customization tool, <strong>Unleash your imagination</strong> {"  "}
                      and define your own style. 
                    </p>
                   <CustomButton 
                   type={"filled"} 
                   title={"Customize it"} 
                  customStyles={"w-fit px-4 py-2 font-bold text-sm"} 
                  handleClick={() =>state.intro=false} />
                
                </motion.div>
            </motion.div>
           </motion.section>

        )}
    </AnimatePresence>

    )
}
export default Home