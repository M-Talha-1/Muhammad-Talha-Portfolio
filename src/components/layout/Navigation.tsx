import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">
            <Link href="/">Talha Asif</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('#') ? (
                <span
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`nav-link ${
                    location === link.href ? "text-primary after:w-full" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </span>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span className="nav-link text-muted-foreground">
                    {link.label}
                  </span>
                </Link>
              )
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('#') ? (
                <span
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer
                    ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                >
                  {link.label}
                </span>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span className="block py-2 text-sm font-medium transition-colors hover:text-primary cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}