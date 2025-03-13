import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Talha Asif</h3>
              <p className="text-sm opacity-80">
                Transforming data into actionable insights
              </p>
            </div>
            <div className="flex justify-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:opacity-80 transition-opacity"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">
                © {new Date().getFullYear()} Talha Asif
                <br />
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}