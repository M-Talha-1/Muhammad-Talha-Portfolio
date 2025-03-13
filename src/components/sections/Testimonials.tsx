import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn } from "@/lib/animations";

const testimonials = [
  {
    name: "Normand Cyr",
    role: "VP Operations & Managing Partner at Ginger Telecom",
    content: "Muhammed was very helpful and professional to deliver a 5 stars project. It was easy working with him and the final result was way above our expectation.",
    image: "/clients/Normand-Cyr.jpg"
  },
  {
    name: "Alistair Ridely",
    role: "CEO at Love The Journey LTD",
    content: "Muhammad Talha's expertise as a data visualiser has been truly exemplary. His ability to translate intricate data into clear, concise, and visually engaging representations has greatly enhanced our decision-making process.",
    image: "/clients/Alistair Ridely.jpg"
  },
  {
    name: "Oreilo Lopes",
    role: "Strategic Talent Acquisition Leader at Lopes Recruitment",
    content: "Muhammad goes that extra mile, very competent and ask questions if something isn't clear or would like to know more in detail. Very exceptional!",
    image: "/clients/Oreilo Lopes.jpg"
  }
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 min-h-screen flex items-center bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-muted-foreground">
            Hear what my clients say about working together
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-background/50 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg mb-4 italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="font-semibold">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}