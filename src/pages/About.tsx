import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, GraduationCap, BookOpen, Coffee, User, Heart } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "Laravel", level: "Advanced" },
    { name: "React.js", level: "Advanced" },
    { name: "Vue.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Kubernetes", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "OAuth2", level: "Intermediate" },
    { name: "Stripe", level: "Intermediate" },
    { name: "Agile", level: "Intermediate" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Know Who I Am" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Experienced Full Stack Developer skilled in React, Laravel, Node.js, AWS; <br /> passionate about secure, scalable web solutions and team collaboration.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(155, 135, 245, 0.15)" }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-blue-500/20"></div>
                  <img
                    src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1755002186~exp=1755005786~hmac=c1837f013f10600f399eed2638ebc1468e014fa38788509a64ccc6dc75dc6de7&w=1480"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                <AnimatedText text="Who am I?" once />
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm <motion.span
                    className="text-brand-purple font-semibold"
                    whileHover={{ color: "#8B5CF6" }}
                  >Ivan Medved</motion.span>,  a Senior Full Stack Developer with over 8 years of experience specializing in building scalable, secure, and high-performance web applications.
                </p>
                <p>
                  You have a strong background working across industries like Finance, E-commerce, Healthcare, and Information Technology.
                </p>
                <p>
                  Skilled with technologies such as React.js, Laravel, Node.js, and AWS, you’re passionate about creating user-centric solutions that comply with industry standards like GDPR and PSD2.
                </p>
                <p>
                  You collaborate effectively with teams to drive innovation and operational efficiency, currently aiming to contribute your expertise to exciting tech projects within Europe.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                These are the technologies and programming languages I've worked with and continue to develop expertise in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3
                    className="font-semibold mb-2"
                    whileHover={{ color: "#9b87f5" }}
                  >{skill.name}</motion.h3>
                  <span className={`text-xs py-1 px-3 rounded-full ${skill.level === 'Advanced' ? 'bg-brand-purple/20 text-brand-purple' :
                    skill.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">More About Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={User} title="Personal Interests">
                <ul className="space-y-2 text-muted-foreground">
                  {["Coding challenges", "Nature hiking",
                    "Creative photography", "Science fiction reading"].map((interest, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <Heart className="h-4 w-4 text-brand-purple mr-2" />
                        {interest}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={GraduationCap} title="Education Journey">
                <ul className="space-y-2 text-muted-foreground">
                  {["Strong foundation in science and technology", "Graduated in Information Technology from University of Zagreb",
                    "Combining theory with practical projects"].map((journey, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <BookOpen className="h-4 w-4 text-brand-purple mr-2" />
                        {journey}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={Code} title="Coding Philosophy">
                <ul className="space-y-2 text-muted-foreground">
                  {["Write clean, maintainable code", "Prioritize user experience", "Embrace collaboration",
                    "Continuously learn", "Balance innovation with reliability and security"].map((philosophy, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <Coffee className="h-4 w-4 text-brand-purple mr-2" />
                        {philosophy}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>

              <InfoCard icon={BookOpen} title="Future Goals">
                <ul className="space-y-2 text-muted-foreground">
                  {["Lead innovative web projects", "Master emerging technologies",
                    "Contribute to impactful solutions", "Grow as a team leader", "Expand global collaboration"].map((goal, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        whileHover={{ x: 5, color: "#9b87f5" }}
                      >
                        <GraduationCap className="h-4 w-4 text-brand-purple mr-2" />
                        {goal}
                      </motion.li>
                    ))}
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
