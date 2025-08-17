"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Enterprise Solutions",
      description: "Scalable enterprise software solutions tailored to your business needs."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Advanced data analytics and business intelligence solutions."
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and infrastructure management services."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Audit",
      description: "Comprehensive security audits and vulnerability assessments."
    }
  ];

  const stats = [
    { value: "99%", label: "Client Satisfaction Rate" },
    { value: "350+", label: "Projects Completed" },
    { value: "19", label: "Years of Experience" },
    { value: "1400+", label: "Happy Clients" }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Our team consists of highly skilled developers with years of industry experience."
    },
    {
      title: "Quality Assurance",
      description: "We follow rigorous testing processes to ensure the highest quality deliverables."
    },
    {
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technologies to build innovative software solutions."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your applications run smoothly."
    }
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Creating intuitive designs and interactive prototypes for validation."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Building robust solutions with comprehensive testing at every stage."
    },
    {
      step: "4",
      title: "Deployment & Maintenance",
      description: "Seamless deployment and ongoing support for your applications."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">App Plex</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">Process</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
              <nav className="px-4 py-4 space-y-4">
                <a href="#services" className="block text-gray-700 hover:text-purple-600">Services</a>
                <a href="#about" className="block text-gray-700 hover:text-purple-600">About</a>
                <a href="#process" className="block text-gray-700 hover:text-purple-600">Process</a>
                <a href="#contact" className="block text-gray-700 hover:text-purple-600">Contact</a>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Trusted by 1400+ Companies
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  We Care to Deliver
                  <span className="text-purple-600"> Useful Software</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your business with custom software solutions designed to drive growth, 
                  improve efficiency, and deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">19+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">350+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Developer working on laptop"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-purple-200 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Custom Software Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end software development services to help businesses achieve their goals 
              through innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-purple-100 rounded-2xl -z-10"></div>
            </div>

            <div className="space-y-6">
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                About Us
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Best Place to 
                <span className="text-purple-600"> Start Your Project</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 19 years of experience in software development, we've helped over 1400 companies 
                transform their ideas into successful digital products. Our team of expert developers 
                and designers work closely with clients to deliver exceptional results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Experienced development team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">Agile development methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl lg:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Work with Top Web & Mobile Development Teams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver software solutions 
              that drive real business value and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Product Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven development process ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Ready to Talk About Your
                  <span className="block">Project Development?</span>
                </h2>
                <p className="text-lg text-purple-100">
                  Let's discuss how we can help you build amazing software solutions 
                  that drive your business forward.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>hello@App Plex.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started Today</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" type="tel" />
                  <Input placeholder="Company Name" />
                  <textarea 
                    className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">App Plex</span>
              </div>
              <p className="text-gray-400">
                Delivering innovative software solutions for businesses worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Web Development</div>
                <div>Mobile Development</div>
                <div>Cloud Services</div>
                <div>Security Audit</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Blog</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Get the latest news from our blog.</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700" />
                <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 App Plex. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}