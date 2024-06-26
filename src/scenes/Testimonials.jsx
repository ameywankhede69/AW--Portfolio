import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <style jsx>{`
        .before\\:content-person1::before,
        .before\\:content-person2::before,
        .before\\:content-person3::before {
          content: '';
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px; /* Adjusted width for person1 */
          height: 200px; /* Adjusted height for person1 */
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        .before\\:content-person1::before {
          background-image: url('./assets/person-1.png');
        }
        .before\\:content-person2::before {
          background-image: url('./assets/person-2.png');
        }
        .before\\:content-person3::before {
          background-image: url('./assets/person-3.png');
        }
      `}</style>

      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Explore my testimonials showcasing my certificates in communication skills, technical expertise, and diverse non-course subjects.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            <a
              href="https://cert.efset.org/Lbmmsw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              1. EF Standard English Test: C2 Level PROFICIENT
            </a>
            <br />
            <a
              href="https://www.linkedin.com/learning/certificates/ce8c51d4b7307179cb0133243771ec63a3b0d3ac27596518d9b12a3a40b992d4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              2. Linked In Certified Interpersonal Communication Champ
            </a>
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/RT8YJ7WTWUDX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              1. HTML CSS in depth
            </a>
            <br />
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/KMP8XEQ8ELB4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              2. Frontend Development
            </a>
            <br />
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/UWQR5E72QAN2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              3. Programming with Javascript
            </a>
            <br />
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/EGSEDS7QB4E8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              4. Version Control
            </a>
            <br />
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/RK653XARURLR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              1. Introduction to Psychology: A 6 week course by the prestigious Yale University
            </a>
            <br />
            <a
              href="https://www.linkedin.com/learning/certificates/ce8c51d4b7307179cb0133243771ec63a3b0d3ac27596518d9b12a3a40b992d4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              2. Internet of Things: A workshop conducted by the faculties of IIT Bombay
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
