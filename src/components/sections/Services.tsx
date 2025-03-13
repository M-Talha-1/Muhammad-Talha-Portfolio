import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";

const serviceDetails = {
  "Data Management": {
    problems: [
      "Complex data integration from multiple sources",
      "Inefficient data pipelines and workflows",
      "Data quality and consistency issues"
    ],
    expertise: [
      "10+ successful data pipeline implementations",
      "Expertise in ETL processes and data warehousing",
      "Advanced data cleaning and validation techniques"
    ]
  },
  "Data Analysis": {
    problems: [
      "Unclear business insights from raw data",
      "Time-consuming manual analysis processes",
      "Difficulty in identifying trends and patterns"
    ],
    expertise: [
      "Statistical analysis and hypothesis testing",
      "Automated reporting and analytics workflows",
      "Advanced Excel and SQL expertise"
    ]
  },
  "Data Visualization": {
    problems: [
      "Complex data presentations that confuse stakeholders",
      "Difficulty in communicating insights effectively",
      "Static reports that lack interactivity"
    ],
    expertise: [
      "Interactive dashboard development",
      "Custom visualization design",
      "Storytelling through data"
    ]
  },
  "Predictive Analytics": {
    problems: [
      "Inability to forecast future trends",
      "Missed business opportunities",
      "Risk assessment challenges"
    ],
    expertise: [
      "Machine learning model development",
      "Time series forecasting",
      "Risk modeling and analysis"
    ]
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground">
            Comprehensive data analytics solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={fadeIn}>
              <Card 
                className="group hover:shadow-lg transition-all cursor-pointer"
                onClick={() => setSelectedService(service.title)}
              >
                <CardContent className="pt-6">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{selectedService}</DialogTitle>
              <DialogDescription>
                {selectedService && (
                  <div className="py-4">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Problems I Solve:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {serviceDetails[selectedService as keyof typeof serviceDetails].problems.map((problem, index) => (
                          <li key={index} className="text-sm">{problem}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Why Choose Me:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {serviceDetails[selectedService as keyof typeof serviceDetails].expertise.map((point, index) => (
                          <li key={index} className="text-sm">{point}</li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="#contact">Get Started</Link>
                    </Button>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}