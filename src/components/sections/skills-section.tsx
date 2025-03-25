"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

// Extend skills with descriptions that emphasize client benefits
const TECH_STACKS = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    description:
      "Creating intuitive and engaging user interfaces that deliver exceptional experiences.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    description:
      "Building powerful, scalable systems that handle complex business logic with ease.",
    skills: [
      ".NET",
      "SQL Server",
      "LINQ",
      "EntityFramework",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "DevOps & Tools",
    icon: <Rocket className="h-5 w-5" />,
    description:
      "Streamlining development and deployment for faster time-to-market and reliability.",
    skills: ["Git", "Docker", "Azure", "Vercel", "Supabase", "Postman"],
  },
];

// Years of experience data for the skill level bars
const EXPERIENCE_CATEGORIES = [
  {
    name: "Frontend Development",
    percentage: 90,
  },
  {
    name: "Backend Development",
    percentage: 85,
  },
  {
    name: "Database Design",
    percentage: 80,
  },
  {
    name: "DevOps & Deployment",
    percentage: 75,
  },
];

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-16 sm:py-20 bg-muted/10 relative" id="skills">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/20 to-background/0"></div>

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
              Technical Expertise
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Technologies That Drive{" "}
              <span className="text-primary">Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I leverage cutting-edge technologies to build solutions that are
              fast, secure, and scalable to your business needs.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mt-8"
          >
            {/* Left column: Tech stacks */}
            <div className="space-y-8">
              {TECH_STACKS.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-background/60 backdrop-blur-sm shadow-sm rounded-lg p-6 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{stack.category}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {stack.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {stack.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={cn(
                          "font-medium",
                          index === 0 &&
                            "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
                          index === 1 &&
                            "bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20",
                          index === 2 &&
                            "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
                        )}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right column: Experience level */}
            <div className="bg-background/60 backdrop-blur-sm shadow-sm rounded-lg p-6">
              <div className="space-y-2 mb-8">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Expertise Levels
                </h3>
                <p className="text-muted-foreground text-sm">
                  Areas where I&apos;ve developed deep technical proficiency to
                  help you achieve your goals.
                </p>
              </div>

              <div className="space-y-6">
                {EXPERIENCE_CATEGORIES.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <SkillBar
                      name={category.name}
                      percentage={category.percentage}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t">
                <h4 className="font-medium mb-3">
                  Why These Technologies Matter
                </h4>
                <p className="text-sm text-muted-foreground">
                  These technologies aren&apos;t just tools—they&apos;re
                  solutions to business challenges. I select the right
                  technology stack for each project based on specific
                  requirements, ensuring optimal performance, maintainability,
                  and scalability.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
