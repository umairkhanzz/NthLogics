"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Code,
  Users,
  CheckCircle,
  Star,
  Menu,
  X,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Rocket,
  Award,
  Clock,
  Target,
  Lightbulb,
  Play,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Layers,
  Cpu,
  Server,
  GitBranch,
  Terminal,
  Palette,
  Monitor,
  TrendingUpIcon,
  Handshake,
  FileText,
  UserCheck,
  RefreshCcw,
  Network,
  Lock,
  Code2,
  Workflow,
  // Package,
  ZapIcon,
} from "lucide-react"


export default function NthLogicsPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: Code,
      image: "/images/img.png",
      title: "Custom Software Development",
      description: "End-to-end software solutions tailored to your business needs",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Smartphone,
      image: "/images/img.png",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Cloud,
      image: "/images/img.png",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["AWS Solutions", "Azure Services", "Cloud Migration", "DevOps"],
      color: "from-green-500 to-green-700",
    },
    {
      icon: Database,
      image: "/images/img.png",
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      features: ["Business Intelligence", "Data Visualization", "Machine Learning", "Big Data"],
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Shield,
      image: "/images/img.png",
      title: "Cybersecurity",
      description: "Comprehensive security solutions for your digital assets",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      color: "from-red-500 to-red-700",
    },
    {
      icon: Rocket,
      image: "/images/img.png",
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack",
      features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
      color: "from-indigo-500 to-indigo-700",
    },
  ]

  const stats = [
    { number: "250+", label: "Projects Completed", icon: Target, color: "text-blue-600" },
    { number: "98%", label: "Client Satisfaction", icon: Award, color: "text-green-600" },
    { number: "50+", label: "Team Members", icon: Users, color: "text-purple-600" },
    { number: "24/7", label: "Support Available", icon: Clock, color: "text-orange-600" },
  ]

  // const technologies = [
  //   { name: "React", level: 95, color: "bg-blue-500", icon: Code2 },
  //   { name: "Node.js", level: 90, color: "bg-green-500", icon: Server },
  //   { name: "Python", level: 88, color: "bg-yellow-500", icon: Terminal },
  //   { name: "AWS", level: 85, color: "bg-orange-500", icon: Cloud },
  //   { name: "Docker", level: 82, color: "bg-blue-400", icon: Package },
  //   { name: "MongoDB", level: 80, color: "bg-green-400", icon: Database },
  // ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      text: "NthLogics transformed our entire digital infrastructure. Their expertise in cloud migration saved us 40% in operational costs while improving performance by 300%.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder & CEO",
      text: "From concept to deployment, NthLogics delivered beyond expectations. Their agile approach and technical excellence helped us launch 2 months ahead of schedule.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Davis",
      company: "Enterprise Solutions",
      role: "VP of Technology",
      text: "The team's attention to detail and commitment to quality is unmatched. They've become our trusted technology partner for all critical projects.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Rodriguez",
      company: "FinTech Innovations",
      role: "Head of Engineering",
      text: "NthLogics helped us build a secure, scalable platform that handles millions of transactions daily. Their security expertise is world-class.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce solution with advanced analytics",
      image: "/images/img.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      metrics: { users: "50K+", revenue: "$2M+", performance: "99.9%" },
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "HIPAA-compliant telemedicine application",
      image: "/images/img.png",
      technologies: ["React Native", "Firebase", "WebRTC", "AWS"],
      metrics: { downloads: "100K+", rating: "4.8★", uptime: "99.95%" },
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Analytics",
      description: "Machine learning powered business intelligence platform",
     image: "/images/img.png",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      metrics: { accuracy: "94%", speed: "10x faster", insights: "1000+" },
    },
  ]

  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      expertise: "Strategic Leadership",
      image: "/images/img.png",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Maria Garcia",
      role: "CTO",
      expertise: "Technical Architecture",
      image: "/images/img.png",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      image: "/images/img.png",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Lisa Chen",
      role: "UX/UI Designer",
      expertise: "User Experience Design",
      image: "/images/img.png",
      social: { linkedin: "#", twitter: "#", github: "#" },
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap",
      icon: Lightbulb,
      duration: "1-2 weeks",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
      icon: Layers,
      duration: "2-3 weeks",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      icon: Code,
      duration: "4-12 weeks",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support",
      icon: Rocket,
      duration: "Ongoing",
    },
  ]

  const clientJourneySteps = [
    {
      icon: Handshake,
      title: "Initial Consultation",
      description: "Discuss your vision, goals, and project requirements with our experts.",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      title: "Proposal & Agreement",
      description: "Receive a detailed proposal, scope of work, and project timeline.",
      color: "bg-purple-500",
    },
    {
      icon: Workflow,
      title: "Project Kick-off",
      description: "Meet your dedicated team and begin the agile development sprints.",
      color: "bg-green-500",
    },
    {
      icon: Monitor,
      title: "Development & Iteration",
      description: "Regular updates, feedback sessions, and continuous integration.",
      color: "bg-orange-500",
    },
    {
      icon: UserCheck,
      title: "Testing & QA",
      description: "Rigorous testing to ensure a flawless and high-performing solution.",
      color: "bg-red-500",
    },
    {
      icon: Rocket,
      title: "Deployment & Launch",
      description: "Seamless deployment to your chosen environment and go-live.",
      color: "bg-indigo-500",
    },
    {
      icon: RefreshCcw,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and performance monitoring.",
      color: "bg-teal-500",
    },
  ]

  const techDeepDiveCategories = [
    {
      name: "Frontend Development",
      icon: Palette,
      description: "Crafting intuitive and engaging user interfaces.",
      technologies: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Figma"],
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Backend Development",
      icon: Server,
      description: "Building robust, scalable, and secure server-side applications.",
      technologies: ["Node.js", "Python (Django/Flask)", "Go", "Ruby on Rails", "GraphQL", "REST APIs"],
      color: "from-green-500 to-green-700",
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      description: "Leveraging cloud infrastructure for scalability and efficiency.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "Databases & Data",
      icon: Database,
      description: "Designing efficient data storage and powerful analytics solutions.",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "BigQuery", "Data Warehousing"],
      color: "from-orange-500 to-orange-700",
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      description: "Developing native and cross-platform mobile experiences.",
      technologies: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Xamarin"],
      color: "from-red-500 to-red-700",
    },
    {
      name: "AI & Machine Learning",
      icon: Cpu,
      description: "Integrating intelligent solutions to automate and optimize.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"],
      color: "from-indigo-500 to-indigo-700",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 z-40"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            NthLogics
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Portfolio", "Tech Stack", "Team", "Process", "Client Journey", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ),
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-blue-100"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {["Home", "Services", "Portfolio", "Tech Stack", "Team", "Process", "Client Journey", "Contact"].map(
                  (item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ),
                )}
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white"
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 100, 0],
                y: [0, Math.random() * 100, 0],
                scale: [1, Math.random() * 2, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-blue-100 text-blue-600 hover:bg-blue-200">
                  🚀 Transforming Ideas into Reality
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  Innovative
                </motion.span>
                <span className="block text-gray-900">Solutions</span>
                <span className="text-blue-600 block">for Tomorrow</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                We craft cutting-edge software solutions that drive business growth and digital transformation. Partner
                with NthLogics to turn your vision into reality with our expert team of developers, designers, and
                strategists.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 group">
                    Start Your Project
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 group">
                    <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                </motion.div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { label: "Projects", value: "250+" },
                  { label: "Clients", value: "100+" },
                  { label: "Success Rate", value: "98%" },
                ].map((stat, index) => (
                  <motion.div key={index} className="text-center" whileHover={{ scale: 1.05 }}>
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Main Card */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
                  animate={{
                    rotateY: [0, 5, 0, -5, 0],
                    rotateX: [0, 2, 0, -2, 0],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent" />

                  {/* Central Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      }}
                      className="text-white text-6xl font-bold"
                    >
                      NL
                    </motion.div>
                  </div>

                  {/* Floating Tech Icons */}
                  {[
                    { icon: Code2, x: "10%", y: "15%", size: "w-16 h-16", delay: 0.5, rotate: 10 },
                    { icon: Server, x: "70%", y: "5%", size: "w-12 h-12", delay: 0.8, rotate: -15 },
                    { icon: Database, x: "20%", y: "80%", size: "w-14 h-14", delay: 1.0, rotate: 20 },
                    { icon: Cloud, x: "85%", y: "70%", size: "w-10 h-10", delay: 0.7, rotate: -5 },
                    { icon: Smartphone, x: "5%", y: "50%", size: "w-12 h-12", delay: 0.9, rotate: 25 },
                    { icon: Cpu, x: "50%", y: "90%", size: "w-16 h-16", delay: 0.6, rotate: -10 },
                    { icon: GitBranch, x: "30%", y: "5%", size: "w-10 h-10", delay: 1.1, rotate: 0 },
                    { icon: Terminal, x: "90%", y: "30%", size: "w-14 h-14", delay: 0.4, rotate: 15 },
                    { icon: Lock, x: "5%", y: "5%", size: "w-10 h-10", delay: 1.2, rotate: -20 },
                    { icon: Network, x: "75%", y: "90%", size: "w-12 h-12", delay: 0.9, rotate: 5 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white/90 rounded-full flex items-center justify-center shadow-md"
                      style={{ left: item.x, top: item.y, width: item.size, height: item.size }}
                      animate={{
                        y: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
                        rotate: [0, item.rotate, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: item.delay,
                      }}
                    >
                      <item.icon className="h-1/2 w-1/2 text-blue-600" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Tech Icons */}
                {[
                  { icon: Code2, x: "10%", y: "15%", size: "w-16 h-16", delay: 0.5, rotate: 10 },
                  { icon: Server, x: "70%", y: "5%", size: "w-12 h-12", delay: 0.8, rotate: -15 },
                  { icon: Database, x: "20%", y: "80%", size: "w-14 h-14", delay: 1.0, rotate: 20 },
                  { icon: Cloud, x: "85%", y: "70%", size: "w-10 h-10", delay: 0.7, rotate: -5 },
                  { icon: Smartphone, x: "5%", y: "50%", size: "w-12 h-12", delay: 0.9, rotate: 25 },
                  { icon: Cpu, x: "50%", y: "90%", size: "w-16 h-16", delay: 0.6, rotate: -10 },
                  { icon: GitBranch, x: "30%", y: "5%", size: "w-10 h-10", delay: 1.1, rotate: 0 },
                  { icon: Terminal, x: "90%", y: "30%", size: "w-14 h-14", delay: 0.4, rotate: 15 },
                  { icon: Lock, x: "5%", y: "5%", size: "w-10 h-10", delay: 1.2, rotate: -20 },
                  { icon: Network, x: "75%", y: "90%", size: "w-12 h-12", delay: 0.9, rotate: 5 },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/90 rounded-full flex items-center justify-center shadow-md"
                    style={{ left: item.x, top: item.y, width: item.size, height: item.size }}
                    animate={{
                      y: [0, 10 * (i % 2 === 0 ? 1 : -1), 0],
                      rotate: [0, item.rotate, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    <item.icon className="h-1/2 w-1/2 text-blue-600" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center text-white group cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color.replace("text-", "text-white")}`} />
                </motion.div>
                <motion.div
                  className="text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-blue-100 text-blue-600 hover:bg-blue-200">
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we offer end-to-end services that transform your business and drive growth in
              the digital age.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 bg-white overflow-hidden relative">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Optional: subtle overlay on image hover */}
                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 border-t border-gray-100">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-purple-100 text-purple-600">
              Our Work
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Featured
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have transformed businesses and delighted users
              worldwide.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="rounded-xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="h-4 w-4 text-gray-700" />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-3 bg-blue-100 text-blue-600">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          whileHover={{ scale: 1.05, backgroundColor: "#dbeafe", color: "#2563eb" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <motion.div
                          key={key}
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + metricIndex * 0.05 }}
                        >
                          <div className="text-sm font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive Section */}
      <section id="tech-stack" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-green-100 text-green-600">
              Our Technologies
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cutting-Edge
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build scalable, secure, and high-performance
              solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
              {techDeepDiveCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "#dbeafe", color: "#2563eb" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border-4 border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <div className="text-white text-5xl font-bold">NthLogics</div>

                {/* Floating tech icons around the sphere */}
                {[
                  { icon: Code2, angle: 0, size: "w-16 h-16", color: "text-blue-300" },
                  { icon: Server, angle: 60, size: "w-14 h-14", color: "text-green-300" },
                  { icon: Database, angle: 120, size: "w-12 h-12", color: "text-orange-300" },
                  { icon: Smartphone, angle: 180, size: "w-16 h-16", color: "text-red-300" },
                  { icon: Cloud, angle: 240, size: "w-14 h-14", color: "text-purple-300" },
                  { icon: Cpu, angle: 300, size: "w-12 h-12", color: "text-indigo-300" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-white/20 rounded-full flex items-center justify-center"
                    style={{
                      width: item.size,
                      height: item.size,
                      transform: `rotate(${item.angle}deg) translate(150px) rotate(-${item.angle}deg)`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 15 + i * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <item.icon className={`h-1/2 w-1/2 ${item.color}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-blue-100 text-blue-600">
                About NthLogics
              </span>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NthLogics?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with creative innovation to deliver solutions that exceed expectations.
                Our team is passionate about turning complex challenges into elegant, scalable solutions that drive real
                business value.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Expert Team",
                    desc: "5+ years of combined experience across all major technologies",
                    color: "text-blue-600",
                  },
                  {
                    icon: ZapIcon,
                    title: "Agile Methodology",
                    desc: "Fast, iterative development with continuous client feedback",
                    color: "text-green-600",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    desc: "Round-the-clock maintenance and technical support",
                    color: "text-purple-600",
                  },
                  {
                    icon: Rocket,
                    title: "Cutting-Edge Tech",
                    desc: "Latest frameworks and tools for optimal performance",
                    color: "text-orange-600",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      className={`w-12 h-12 ${item.color.replace("text-", "bg-")}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Innovation",
                    desc: "Cutting-edge solutions",
                    color: "from-blue-500 to-blue-700",
                    icon: Lightbulb,
                  },
                  {
                    title: "Quality",
                    desc: "Rigorous testing",
                    color: "from-green-500 to-green-700",
                    icon: CheckCircle,
                  },
                  {
                    title: "Support",
                    desc: "Dedicated assistance",
                    color: "from-purple-500 to-purple-700",
                    icon: Users,
                  },
                  {
                    title: "Results",
                    desc: "Measurable impact",
                    color: "from-orange-500 to-orange-700",
                    icon: TrendingUpIcon,
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl text-white relative overflow-hidden group cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    style={{
                      marginTop: index % 2 === 0 ? "0" : "2rem",
                      marginBottom: index % 2 === 0 ? "2rem" : "0",
                    }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <card.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-white/80 text-sm">{card.desc}</p>

                    {/* Animated background pattern */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-blue-200 rounded-full opacity-20"
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-purple-300 rounded-full opacity-30"
                animate={{
                  y: [20, -20, 20],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-purple-100 text-purple-600">
              Our Team
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet the
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together years of experience and passion for innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="rounded-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Social Links */}
                      <motion.div
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {Object.entries(member.social).map(([platform, link], socialIndex) => (
                          <motion.a
                            key={platform}
                            href={link}
                            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: socialIndex * 0.1 }}
                          >
                            {platform === "linkedin" && <Linkedin className="h-4 w-4 text-blue-600" />}
                            {platform === "twitter" && <Twitter className="h-4 w-4 text-blue-400" />}
                            {platform === "github" && <Github className="h-4 w-4 text-gray-800" />}
                          </motion.a>
                        ))}
                      </motion.div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.expertise}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-green-100 text-green-600">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How We
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from initial concept to final deployment and
              beyond.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block" />

            <div className="space-y-12 lg:space-y-24">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-12 gap-6`}
                >
                  {/* Content */}
                  <motion.div className="flex-1 max-w-md" whileHover={{ scale: 1.02 }}>
                    <div className="rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl font-bold text-blue-600 mr-4">{step.step}</div>
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-blue-100 text-blue-600">
                            {step.duration}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 max-w-md hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Journey Section */}
      <section id="client-journey" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-blue-100 text-blue-600">
              Your Path to Success
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Client
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide you through every step of the development process, ensuring transparency and collaboration.
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 hidden lg:block" />

            <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-8 relative z-10">
              {clientJourneySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <motion.div
                    className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-yellow-100 text-yellow-600">
              Testimonials
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Our
              <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients who have transformed their businesses
              with our solutions.
            </p>
          </motion.div>

          {/* Featured Testimonial */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            key={currentTestimonial}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border-0 shadow-2xl bg-white">
              <div className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <Star className="h-8 w-8 text-yellow-400 fill-current mx-1" />
                    </motion.div>
                  ))}
                </div>

                <motion.blockquote
                  className="text-2xl lg:text-3xl text-gray-700 font-medium mb-8 leading-relaxed italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.blockquote>

                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="h-full rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic text-sm leading-relaxed">
                      "{testimonial.text.substring(0, 100)}..."
                    </p>
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
                        <div className="text-blue-600 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                x: [0, Math.random() * 200, 0],
                y: [0, Math.random() * 200, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-4 bg-white/20 text-white border-white/30">
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with us today and let's discuss how we can help
              your business thrive.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="rounded-xl border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500 h-10">
                        <option>Select budget range</option>
                        <option>$10K - $25K</option>
                        <option>$25K - $50K</option>
                        <option>$50K - $100K</option>
                        <option>$100K+</option>
                      </select>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                      <textarea
                        placeholder="Tell us about your project, goals, and requirements..."
                        className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                        Send Message
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      info: "hello@nthlogics.com",
                      subInfo: "We'll respond within 24 hours",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      info: "+1 (555) 123-4567",
                      subInfo: "Mon-Fri 9AM-6PM EST",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      info: "123 Tech Street, Digital City",
                      subInfo: "Visit us for in-person meetings",
                    },
                    {
                      icon: Calendar,
                      title: "Schedule",
                      info: "Book a consultation",
                      subInfo: "Free 30-minute strategy session",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <div className="font-bold text-white mb-1">{contact.title}</div>
                        <div className="text-blue-100 mb-1">{contact.info}</div>
                        <div className="text-blue-200 text-sm">{contact.subInfo}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <motion.div
                className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-4">Ready to start your project?</h4>
                <p className="text-blue-100 mb-6">
                  Join 250+ satisfied clients who have transformed their businesses with our innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-blue-600 hover:bg-gray-100 flex-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Call
                    </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-white text-white hover:bg-white/10 flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <p className="text-blue-100 mb-4">Trusted by companies worldwide</p>
                <div className="flex justify-center space-x-6 opacity-60">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-12 h-8 bg-white/20 rounded"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
              >
                NthLogics
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Innovative software solutions for tomorrow's challenges. We transform ideas into powerful digital
                experiences that drive business growth and success.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, color: "hover:text-blue-400" },
                  { icon: Twitter, color: "hover:text-blue-300" },
                  { icon: Github, color: "hover:text-gray-300" },
                  { icon: Mail, color: "hover:text-green-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "Data Analytics",
                  "Cybersecurity",
                  "Consulting",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                {["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white focus:border-blue-500"
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                    Subscribe
                  </button>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              &copy; 2024 NthLogics. All rights reserved. Built with ❤️ and cutting-edge technology.
            </motion.p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
