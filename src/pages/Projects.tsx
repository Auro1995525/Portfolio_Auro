import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import {
  Bot,
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart,
  Coins,
  Section,
  Stethoscope,
  Lock
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "PayStream — Scalable FinTech Payment",
      description: "Led the full development lifecycle of a high-availability payment platform processing over 1 million transactions monthly. Architected secure, PCI-DSS and PSD2-compliant systems integrating multiple payment gateways including Stripe, PayPal, and SEPA Direct Debit. Enhanced performance through optimized database queries and implemented fraud detection mechanisms to reduce financial risks. Ensured GDPR compliance across all user data handling.",
      image: "https://media.gettyimages.com/id/2087154330/photo/online-payment-process-using-smartphone-and-credit-card.jpg?s=612x612&w=0&k=20&c=YLIRsl5-mAecm5MMHlUqq8mxH4OK-Oomfe877WQ4z2g=",
      tags: ['React.js', 'Laravel', 'Node.js', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GitLab'],
      code: "https://github.com/Auro1995525",
      category: "Marketing"
    },
    {
      id: 2,
      title: "MediConnect — Secure Telemedicine",
      description: "Designed and implemented a telehealth platform enabling real-time video consultations with end-to-end encryption using WebRTC. Integrated role-based access controls and multi-factor authentication to secure sensitive patient data, adhering to GDPR and HIPAA standards. Developed a user-friendly interface to connect patients with healthcare providers, resulting in a 35% increase in telemedicine adoption.",
      image: "https://cdn.pixabay.com/photo/2021/04/08/15/06/doctor-6161898_960_720.jpg",
      tags: ['React.js', 'Laravel', 'WebRTC', 'PostgreSQL', 'OAuth2', 'JWT', ' AWS ECS', 'Docker', 'PHPUnit', 'Jest'],
      code: "https://github.com/Auro1995525",
      category: "Healthcare"
    },
    {
      id: 3,
      title: " ShopMaster — Multi-Store E-commerce",
      description: "Managed the creation and maintenance of 25+ e-commerce sites catering to diverse retail clients, focusing on seamless user experience and fast checkout processes. Integrated payment gateways (Stripe, PayPal) and shipping providers (DHL, GLS), optimized page load speeds with caching (Redis) and CDN (Cloudflare). Migrated legacy systems to modern Laravel architecture, improving site stability and scalability.",
      image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?ga=GA1.1.978980123.1754659168&semt=ais_hybrid&w=740&q=80",
      tags: ['Shopify', 'WooCommerce', 'Laravel', 'PHP', 'MySQL', 'Redis', 'CDN', 'Bootstrap', 'jQuery', 'Vue.js'],
      code: "https://github.com/Auro1995525",
      category: "Marketing"
    },
    {
      id: 4,
      title: "FraudShield — Financial Fraud Detection",
      description: "Developed and integrated machine learning-powered fraud detection tools into financial transaction workflows. Utilized Python ML libraries for anomaly detection, real-time transaction monitoring, and alerting systems. Collaborated with compliance teams to ensure the system met regulatory requirements and reduced chargebacks by 20%.",
      image: "https://financialcrimeacademy.org/wp-content/uploads/2022/05/1-46-1024x576.jpg",
      tags: ['Python', 'Node.js', 'Stripe API', 'MongoDB', 'Docker'],
      code: "https://github.com/Auro1995525",
      category: "Security"
    },
    {
      id: 5,
      title: "HealthSync API — Healthcare Data Integration",
      description: "Engineered RESTful APIs facilitating standardized data exchange between laboratories and healthcare providers using HL7 and FHIR protocols. Ensured data integrity and security by implementing encryption and rigorous access controls. Streamlined lab result delivery processes, improving turnaround time by 40%.",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?ga=GA1.1.978980123.1754659168&semt=ais_hybrid&w=740&q=80",
      tags: ['Laravel', 'PHP', 'PostgreSQL', 'HL7', 'FHIR', 'OAuth2', 'AWS RDS', 'Postman'],
      code: "https://github.com/Auro1995525",
      category: "Healthcare"
    },
    {
      id: 6,
      title: "DeployFlow — Automated CI/CD Pipeline",
      description: "Architected and maintained automated CI/CD pipelines that enabled continuous integration, testing, and zero-downtime deployment of containerized microservices. Leveraged GitLab CI/CD, Docker containers, and Kubernetes orchestration to accelerate release cycles and improve deployment reliability across multiple environments.",
      image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?ga=GA1.1.978980123.1754659168&semt=ais_hybrid&w=740&q=80",
      tags: ['GitLab', 'Docker', 'Kubernetes', 'AWS', 'Helm charts', 'Terraform'],
      code: "https://github.com/Auro1995525",
      category: "CI/CD"
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case "Marketing":
        return Coins;
      case "Healthcare":
        return Stethoscope;
      case "Security":
        return Lock;
      case "CI/CD":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "Marketing", name: "Marketing" },
    { id: "Healthcare", name: "Healthcare" },
    { id: "Security", name: "Security" },
    { id: "CI/CD", name: "CI/CD" }
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${filter === category.id
                        ? "bg-brand-purple text-white"
                        : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                        }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  code={project.code}
                  category={project.category}
                  icon={getIcon(project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
