"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const HIGHLIGHTED_SKILLS = ["React", "Next.js", ".NET", "TypeScript", "SQL"];

const VALUE_PROPS = [
  "3+ Years Professional Experience",
  "Full-Stack Development",
  "Clean, Maintainable Code",
];

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-background/0 opacity-80"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Badge
            variant="outline"
            className="px-4 py-1 text-sm border-primary/50"
          >
            Available for New Projects
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Turning <span className="text-primary">Ideas</span> Into{" "}
            <span className="text-primary">Digital Reality</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer helping businesses deliver exceptional user
            experiences with modern, scalable, and secure web applications.
          </p>

          {/* Value propositions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 py-2"
          >
            {VALUE_PROPS.map((prop) => (
              <div key={prop} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{prop}</span>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {HIGHLIGHTED_SKILLS.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Let&apos;s Work Together</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </Button>
    </section>
  );
}
