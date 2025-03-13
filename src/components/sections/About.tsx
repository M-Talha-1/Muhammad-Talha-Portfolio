import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/animations";

const timeline = [
  {
    year: "2024",
    title: "Senior Data Analytics Expert",
    description: "Machine learning and advanced analytics",
  },
  {
    year: "2023",
    title: "Lead Data Analyst",
    description: "Team leadership and project management",
  },
  {
    year: "2022",
    title: "Data Analyst",
    description: "Statistical analysis and visualization",
  },
  {
    year: "2021",
    title: "Junior Analyst",
    description: "Data processing and reporting",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-muted/30 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose prose-lg">
            <p className="text-muted-foreground">
              As a dedicated Data Analytics Expert with 4 years of experience,
              I specialize in transforming complex data into actionable insights.
              My journey in data analytics has equipped me with expertise in
              statistical analysis, machine learning, and data visualization.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about helping organizations make data-driven
              decisions that drive growth and innovation. My approach combines
              technical expertise with clear communication to deliver results
              that matter.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.5 
                  }
                }
              }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <motion.span 
                    className="text-primary font-bold text-xl mb-2 block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  >
                    {item.year}
                  </motion.span>
                  <motion.h3 
                    className="font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}