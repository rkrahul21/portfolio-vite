

import SkillSection from "./SkillSection"

const About = () => {
  

  return (
    <section className='w-full flex flex-col px-10 items-center justify-center text-justify  ' id='about'  >
       <div id="about" className="w-full py-4 md:w-[80%] " >
      <h1 className=" text-3xl font-semibold underline text-[#b56e17] text-center mb-4">Abouts</h1>
      <p>
        I&apos;m an enthusiastic &nbsp; 
        <span className="font-medium">undergraduate engineering</span> student
        with a passion for&nbsp;
       <span className="font-medium">Coding </span>& a strong&nbsp;
        <span className="font-medium">problem-solving </span>
        mindset. My coding journey began in 2023, and since then, I have been
        continuously diving deeper into&nbsp;
        <span className="font-medium">full-stack development</span> , acquiring
        a diverse set of skills along the way. I am dedicated to continuous learning, a commitment that propels me into <span className="font-medium">real-world projects</span> where I transform theoretical knowledge into practical, tangible solutions.
      </p><br />
      <p>
        But it&apos;s not just about the code for me. I believe in the holistic
        development of skills. Effective
        <span className="font-medium">
          communication, collaboration, and adaptability
        </span>&nbsp;
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
