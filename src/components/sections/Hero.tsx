import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import { fadeIn, slideIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideIn}
            initial="initial"
            animate="animate"
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data Analytics Expert
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transforming raw data into actionable insights that drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#portfolio">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="relative aspect-square max-w-md mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
