// import CountUp from 'react-countup'
// import {useInView} from 'react-intersection-observer'
// import {motion} from 'framer-motion'
// import { fadeIn } from '../variants'
import SkillSection from "./SkillSection"

const About = () => {
  

  return (
    <section className='section flex flex-col' id='about'  >
       <div
      id="about"
      className={` font-extralight flex flex-col gap-3 md:px-0 md:py-0 sm:px-6 sm:py-6 px-2`}
      style={{
        fontSize: "1.1rem",
      }}
    >
      <h1 className="lg:hidden block text-3xl font-semibold">Abouts</h1>
      <p>
        I&apos;m an enthusiastic
        <span className="font-medium">undergraduate engineering</span> student
        with a passion for coding and a
        <span className="font-medium">problem-solving </span>
        mindset. My coding journey began in 2022, and since then, I have been
        continuously diving deeper into
        <span className="font-medium">full-stack development</span> , acquiring
        a diverse set of skills along the way. I am dedicated to continuous learning, a commitment that propels me into <span className="font-medium">real-world projects</span> where I transform theoretical knowledge into practical, tangible solutions.
      </p>
      <p>
        But it&apos;s not just about the code for me. I believe in the holistic
        development of skills. Effective{" "}
        <span className="font-medium">
          communication, collaboration, and adaptability
        </span>
        are as crucial to my toolkit as the programming languages I command. I
        understand that success in the tech industry is not just about what you
        code but also how you collaborate and innovate.
      </p>
    </div>
      <SkillSection />
    </section>
  )
}

export default About
