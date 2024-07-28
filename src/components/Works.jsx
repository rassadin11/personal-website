import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import {github} from '../assets'
import {SectionWrapper} from '../hoc'
import {projects} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
      className='rounded-[20px] shadow-card w-100'
    >
      <article className='p-5 w-full h-full flex flex-col justify-evenly'>
        <Tilt
          className='bg-tertiary rounded-[20px] p-5 w-full'
          options={{max: 45, scale: 1, speed: 450}}
        >
          <div className='h-auto relative w-full'>
            <img src={image} alt={name} className='w-100 object-contain rounded-[20px]' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt={github} classname='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
        </Tilt>
        <h3 className='text-white text-[24px] font-bold mt-5'>{name}</h3>
        <p className='text-secondary mt-3'>{description}</p>

        <div className='flex justify-left w-100'>
          {tags.map(({name, color}) => (
            <span key={name} className={`${color} p-3`}>
              {name}
            </span>
          ))}
        </div>
      </article>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My previous projects</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through real-world examples of my
        work. Each project is briefly described with links to code repositories and live demos in
        it. It reflects my ability to solve complex problems, work with different technologies, and
        manage projects effectively.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {projects.map((item, idx) => (
          <ProjectCard key={item.name} index={idx} {...item} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '#works')
