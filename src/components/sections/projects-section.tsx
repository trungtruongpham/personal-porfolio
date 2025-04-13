"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Code, Layers } from "lucide-react";
import { Badge } from "../ui/badge";
import snaplockImage from "../../../public/snapslock.png";
import pomoClockImage from "../../../public/pomoclock.png";
import { GitHubIcon } from "../ui/icons";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Snapslock",
    description:
      "A modern platform for sharing high-quality AI-generated wallpapers. Features user collections, robust search, and seamless downloads.",
    image: snaplockImage,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn UI"],
    github: "https://github.com/trungtruongpham/snaplock",
    demo: "https://www.snapslock.com",
    icon: <Layers className="h-5 w-5" />,
    highlight: "Modern, responsive design with exceptional user experience",
  },
  {
    title: "PomoClock",
    description:
      "A Pomodoro timer app that helps you stay focused and productive.",
    image: pomoClockImage, // Using same image as placeholder
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase"],
    github: "https://github.com/trungtruongpham/pomo-clock",
    demo: "https://pomoclock.com",
    icon: <Code className="h-5 w-5" />,
    highlight: "Optimized for performance with a perfect Lighthouse score",
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ProjectsSection() {
  return (
    <section className="py-16 sm:py-20 relative" id="projects">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium mb-2">
              Recent Work
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Solutions That <span className="text-primary">Demonstrate</span>{" "}
              My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each project represents a unique challenge solved with technical
              excellence and attention to detail.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden group bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300 border border-border/40">
                  <CardHeader className="pb-2 md:pb-4 pt-3 md:pt-6 px-4 sm:px-5 md:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 rounded-full bg-primary/10 text-primary">
                          {project.icon}
                        </div>
                        <CardTitle className="text-base md:text-lg lg:text-xl">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-3 md:space-y-4 px-4 sm:px-5 md:px-6 py-0 md:py-2">
                    <div className="relative aspect-video mb-2 md:mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {project.highlight}
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-medium text-xs md:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-col gap-3 mt-auto pt-4 border-t border-border/40 px-4 sm:px-5 md:px-6 pb-4 md:pb-6">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full h-10 text-sm font-medium"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <GitHubIcon className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild className="w-full h-10 text-sm font-medium">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center pt-8"
          >
            <p className="text-muted-foreground mb-6">
              These are just a few examples of my work. Each project
              demonstrates my commitment to creating effective solutions.
            </p>
            <Button asChild size="lg">
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
