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
import { ExternalLink, Code, GanttChart, Layers } from "lucide-react";
import { Badge } from "../ui/badge";
import snaplockImage from "../../../public/snapslock.png";
import { GitHubIcon } from "../ui/icons";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Snapslock",
    description:
      "A modern platform for sharing high-quality AI-generated wallpapers. Features user collections, robust search, and seamless downloads.",
    image: snaplockImage,
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Shadcn"],
    github: "https://github.com/trungtruongpham/snaplock",
    demo: "https://snapslock.com",
    icon: <Layers className="h-5 w-5" />,
    highlight: "Modern, responsive design with exceptional user experience",
  },
  // Placeholder for additional projects
  {
    title: "Portfolio Website",
    description:
      "The website you're viewing right now. Built with modern web technologies for lightning-fast performance and responsive design across all devices.",
    image: snaplockImage, // Using same image as placeholder
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    github: "https://github.com/trungtruongpham/portfolio",
    demo: "#",
    icon: <Code className="h-5 w-5" />,
    highlight: "Optimized for performance with a perfect Lighthouse score",
  },
  {
    title: "Project Management App",
    description:
      "A comprehensive project management solution enabling teams to track tasks, manage deadlines, and collaborate effectively in real-time.",
    image: snaplockImage, // Using same image as placeholder
    tech: [".NET Core", "React", "Entity Framework", "SQL Server", "Azure"],
    github: "https://github.com/trungtruongpham/project-management",
    demo: "#",
    icon: <GanttChart className="h-5 w-5" />,
    highlight: "Enterprise-level security with intuitive interface",
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
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="flex flex-col h-full overflow-hidden group bg-background/60 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          {project.icon}
                        </div>
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-4">
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {project.highlight}
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-4 mt-auto pt-4 border-t border-border/40">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
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
                    <Button size="sm" asChild className="flex-1">
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
