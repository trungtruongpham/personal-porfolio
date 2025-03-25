"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Code2, LucideIcon, Server, Users, Zap } from "lucide-react";
import Link from "next/link";

interface StrengthItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function StrengthItem({ icon: Icon, title, description }: StrengthItemProps) {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="p-2 rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// Marketing-focused strengths that show what makes you valuable
const STRENGTHS = [
  {
    icon: Users,
    title: "User-Centered Development",
    description:
      "I build applications with real users in mind, ensuring intuitive interfaces and seamless experiences.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "I create lightning-fast applications by implementing best practices for speed and efficiency.",
  },
  {
    icon: Code2,
    title: "Clean, Maintainable Code",
    description:
      "I write well-structured code that's easy to maintain and extend, saving time and resources.",
  },
  {
    icon: Server,
    title: "Full-Stack Solutions",
    description:
      "From database design to polished UI, I deliver complete solutions that work flawlessly.",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 relative" id="about">
      {/* Subtle background pattern */}
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
              Why Work With Me
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Solving <span className="text-primary">Complex Problems</span>{" "}
              With Elegant Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I combine technical expertise with a business mindset to deliver
              web applications that not only work flawlessly but also drive
              results.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {STRENGTHS.map((strength) => (
              <StrengthItem
                key={strength.title}
                icon={strength.icon}
                title={strength.title}
                description={strength.description}
              />
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 space-y-6"
            >
              <h3 className="text-2xl font-bold">Professional Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Full Stack Developer with 3+ years of experience, I&apos;ve
                consistently delivered solutions that exceed client
                expectations. My approach combines technical expertise with a
                deep understanding of business needs, enabling me to build
                applications that not only function seamlessly but also drive
                meaningful results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I pride myself on writing clean, maintainable code and staying
                on the cutting edge of web development technologies. Every
                project I undertake is an opportunity to create something
                exceptional that propels businesses forward.
              </p>
              <div className="flex pt-4">
                <Button asChild>
                  <Link href="#contact">Discuss Your Project</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Qualifications</h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-medium">Professional Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      3+ years building enterprise web applications for major
                      companies
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      B.S. in Computer Science - University of Technology and
                      Information, Ho Chi Minh City
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-medium">Technical Proficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      .NET, React, Next.js, TypeScript, SQL, and modern web
                      technologies
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
