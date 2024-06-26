import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img className="object-cover w-full h-full" src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          This is the hall of fame, a glimpse of all the projects, which I have made, both in software and core electronics domain.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row 1 */}
          <div className="relative">
            <div className="absolute h-full w-full bg-red flex justify-center items-center text-center p-10 text-2xl font-playfair font-semibold">
              BEAUTIFUL ENGAGING INTERFACES
            </div>
            <img className="object-cover w-full h-full" src="../assets/beautiful-smooth-interfaces.jpeg" alt="Beautiful Smooth Interfaces" />
          </div>
          <Project title="Project 1" description="BiblioPhile, a full stack book reading website" />
          <Project title="Project 2" description="AW, my very own portfolio website" />

          {/* Row 2 */}
          <Project title="Project 3" description="Little-Lemon, a frontend restaurant website" />
          <Project title="Project 4" description="Wireless audio transmitter and receiver" />
          <div className="relative">
            <div className="absolute h-full w-full bg-blue flex justify-center items-center text-center p-10 text-2xl font-playfair font-semibold">
              SEAMLESS USER EXPERIENCE
            </div>
            <img className="object-cover w-full h-full" src="../assets/smooth-user-experience.jpeg" alt="Smooth User Experience" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
