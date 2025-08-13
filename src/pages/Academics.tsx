
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Bachelor’s Degree in Information Technology",
      degree: "University of Zagreb",
      field: "Software Development, Algorithms, Databases, Web Technologies",
      duration: "2013 – 2017",
      location: "Zagreb, Croatia",
      gpa: "4.13",
      details: [
        "Completed comprehensive coursework in software development, algorithms, data structures, databases, and modern web technologies.",
        "Gained hands-on experience through multiple practical projects and internships, applying theoretical knowledge to real-world challenges.",
      ]
    },
    {
      id: 2,
      institution: "Science Stream",
      degree: "Pre-University College",
      field: "Natural Sciences and Mathematics",
      duration: "2011 – 2013",
      location: "Zagreb, Croatia",
      gpa: "4.29",
      details: [
        "Focused on rigorous studies in natural sciences and advanced mathematics to prepare for higher education in technology and engineering.",
        "Developed analytical and problem-solving skills foundational for a career in IT."
      ]
    },
    {
      id: 3,
      institution: "XV. gimnazija (MIOC)",
      degree: "Secondary High School",
      field: "Physics, Chemistry, Computer Science, Advanced Mathematics",
      duration: "2006 – 2011",
      location: "Zagreb, Croatia",
      gpa: "4.57",
      details: [
        "Undertook an intensive program emphasizing physics, chemistry, computer science, and advanced mathematics.",
        "Participated in competitions and projects that nurtured critical thinking and scientific inquiry."
      ]
    }
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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Completed rigorous science-focused secondary education; earned Bachelor’s degree in Information Technology from University of Zagreb with strong practical experience.
              </p>
            </div>
          </motion.div>

          {/* Education Cards */}
          <div className="mb-24">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  degree={edu.degree}
                  field={edu.field}
                  duration={edu.duration}
                  location={edu.location}
                  gpa={edu.gpa}
                  details={edu.details}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Academics;
