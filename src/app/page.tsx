'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Cpu, Zap, Shield, TrendingUp, 
  ArrowRight, ChevronDown, Menu, X,
  Layers, BarChart3, Rocket, Eye,
  Sparkles, Clock, Database, GitBranch
} from 'lucide-react'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false })

const features = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Iterate',
    description: 'Sketch, test and refine your prompts in a powerful visual editor',
    color: '#667eea'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Evaluate',
    description: 'Reflect and measure performance with comprehensive analytics',
    color: '#764ba2'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Deploy',
    description: 'From draft to live with seamless environment management',
    color: '#f093fb'
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Monitor',
    description: 'Insights in real-time with full traces and spans',
    color: '#667eea'
  }
]

const stats = [
  { value: '200M+', label: 'API calls per day', sublabel: 'Handles massive scale effortlessly' },
  { value: '5B+', label: 'Tokens per day', sublabel: 'Built for limitless processing power' },
  { value: '300+', label: 'AI Models', sublabel: 'Flexibility for every application' },
  { value: '99.998%', label: 'Historical uptime', sublabel: 'Always on, always reliable' }
]

const testimonials = [
  {
    quote: "Adaline has become a crucial part of our tech stack... brought our insufficient answer rate down to practically 0%.",
    author: "Eshan A.",
    role: "CEO @ Epsilon"
  },
  {
    quote: "Adaline has become an invaluable tool for my team to develop GenAI products...",
    author: "Tan S.",
    role: "Product Manager for Lilli @ McKinsey & Company"
  },
  {
    quote: "Before Adaline, iterating and evaluating prompts was a nightmare... Adaline totally changes the game here.",
    author: "Josh P.",
    role: "CEO @ Coframe"
  }
]

const productFeatures = [
  { icon: <Database className="w-5 h-5" />, title: 'Prompt Management', desc: 'Centralize prompts for all LLM providers in one workspace' },
  { icon: <Sparkles className="w-5 h-5" />, title: 'Multi-modal Variables', desc: 'Test prompts with different inputs and dynamic RAG context' },
  { icon: <Clock className="w-5 h-5" />, title: 'Version History', desc: 'Comprehensive tracking with instant revert capability' },
  { icon: <GitBranch className="w-5 h-5" />, title: 'Smart Diffing', desc: 'Understand exactly what changed between deployments' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Performance Trends', desc: 'Track AI performance with intuitive visualizations' },
  { icon: <Shield className="w-5 h-5" />, title: 'Rollback', desc: 'Recover from issues with one-click rollbacks' }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="min-h-screen">
      <Scene3D />
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Adaline</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors">Products</a>
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                Start Free
              </button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-4">
                <a href="#products" className="block text-sm text-gray-400">Products</a>
                <a href="#features" className="block text-sm text-gray-400">Features</a>
                <a href="#pricing" className="block text-sm text-gray-400">Pricing</a>
                <a href="#blog" className="block text-sm text-gray-400">Blog</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The single platform to{' '}
              <span className="gradient-text">iterate</span>,{' '}
              <span className="gradient-text">evaluate</span>,{' '}
              <span className="gradient-text">deploy</span>, and{' '}
              <span className="gradient-text">monitor</span>
              <br />AI agents
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Trusted by world-class product and engineering teams building AI-powered applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                Start for free <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-xl text-lg font-medium hover:bg-white/5 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
              <div className="bg-[#0a0a0a] rounded-xl p-4">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Cpu className="w-16 h-16 mx-auto mb-4 text-purple-400 opacity-50" />
                    <p className="text-gray-500">Product Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section id="products" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Across your journey</h2>
            <p className="text-xl text-gray-400">Everything you need to build, deploy, and scale AI applications</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl gradient-border hover:scale-105 transition-transform duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <div style={{ color: feature.color }}>{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Precisely engineered for<br />
                <span className="gradient-text">unparalleled reliability</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Adaline powers the workflows of world-class product and engineering teams with unmatched performance and reliability.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Speed</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Security</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Scale</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful features</h2>
            <p className="text-xl text-gray-400">Everything you need to build exceptional AI applications</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by the best</h2>
            <p className="text-xl text-gray-400">From ambitious startups to global enterprises</p>
          </motion.div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl" />
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div className="text-center">
                    <div className="font-bold">{testimonials[activeTestimonial].author}</div>
                    <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeTestimonial ? 'bg-purple-500 w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start your journey with Adaline</h2>
            <p className="text-xl text-gray-400 mb-8">Join thousands of teams building AI-powered applications</p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity">
              Start for free
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Adaline</span>
              </div>
              <p className="text-gray-400 text-sm">
                The end-to-end platform for world-class teams building AI-powered applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Iterate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Evaluate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deploy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Monitor</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 Adaline. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
