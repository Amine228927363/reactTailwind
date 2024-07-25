import { EXPERIENCES } from "../constants/constant";
import { motion } from "framer-motion";
function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1 
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1,delay:0.5}}
      className="my-20 text-center text-4xl">Experience</motion.h1>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="mb-8 flex flex-wrap  lg:justify-center">
          <div className="w-full lg:w-1/4">
            <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:1,delay:1}}
            className="mb-2 text-sm text-neutral-400">{experience.year}</motion.p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4 ">
          <motion.h6 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1,delay:1.5}}
          className="mb-2 font-semibold">{experience.role}
            -<span className="text-sm text-purple-100">{experience.company}</span>
          </motion.h6>
          <motion.p 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0,x:-100}}
           transition={{duration:1,delay:2}}
          className="mb-4 text-neutral-400">{experience.description}</motion.p>
          {experience.technologies.map((tech,index)=>
          (
            <motion.span 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1,delay:2}}
            className="text-purple-700 mr-2 mt-4 rounded bg-neutral-900 px-2 py-1"
             key={index}>{tech}</motion.span>
          )
          )}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;