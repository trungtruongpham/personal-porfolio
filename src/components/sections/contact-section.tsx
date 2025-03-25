"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MailCheck, MessageSquare, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const CONTACT_BENEFITS = [
  {
    title: "Custom Solutions",
    description: "Tailored specifically to your business needs and goals.",
  },
  {
    title: "Rapid Response",
    description: "Quick feedback and availability to discuss your project.",
  },
  {
    title: "Technical Excellence",
    description: "Expertise in modern web technologies and best practices.",
  },
];

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
    // You would typically send this data to your API or email service
  }

  return (
    <section className="py-16 sm:py-20 relative" id="contact">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/10 to-background/0"></div>

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
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let&apos;s Build Something{" "}
              <span className="text-primary">Exceptional</span> Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or need a skilled developer for your team?
              I&apos;d love to hear about it.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Why Work With Me</h3>
                <div className="space-y-6">
                  {CONTACT_BENEFITS.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="mt-1 flex-shrink-0 p-1 rounded-full bg-primary/10 text-primary">
                        <MailCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground text-sm">
                  For inquiries or to discuss potential collaboration, you can
                  reach me directly at:
                </p>
                <p className="text-sm font-medium">
                  Email:{" "}
                  <a
                    href="mailto:truong@example.com"
                    className="text-primary hover:underline"
                  >
                    truong@example.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24-48 hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-3"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="How should I address you?"
                            className="bg-transparent focus-visible:ring-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MailCheck className="h-4 w-4 text-muted-foreground" />
                          Your Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Where can I reach you?"
                            className="bg-transparent focus-visible:ring-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            className="min-h-[180px] bg-transparent focus-visible:ring-primary/50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full transition-all"
                  >
                    Send Message
                  </Button>
                  <p className="text-xs text-center text-muted-foreground pt-2">
                    I&apos;ll only use your information to respond to your
                    message and never share it with anyone else.
                  </p>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
