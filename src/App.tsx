/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Truck, 
  HardHat, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Menu, 
  X,
  Hammer,
  Layers,
  Home,
  Wrench,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Productos', href: '#productos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-lg">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              CORRALÓN <span className="text-orange-600">SAN JOSÉ</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-orange-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md"
            >
              Presupuesto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-600 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-orange-600 text-white px-6 py-3 rounded-lg font-bold"
                >
                  Pedir Presupuesto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-slate-800 hover:text-orange-600 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      <Navbar />

      {/* 1. HERO SECTION - REDESIGNED */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block z-0"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl z-0"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', size: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-orange-600"></div>
                  <span className="text-sm font-bold tracking-[0.3em] text-orange-600 uppercase">Desde 1998</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                  CONSTRUYE <br />
                  <span className="text-orange-600">SIN LÍMITES.</span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                  Proveemos los cimientos de tus sueños. Materiales certificados, logística de precisión y el respaldo de las mejores marcas del país.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a 
                    href="#productos" 
                    className="group relative px-8 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:pr-12"
                  >
                    <span className="relative z-10">Explorar Catálogo</span>
                    <div className="absolute inset-0 bg-orange-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all -rotate-90" size={20} />
                  </a>
                  <a 
                    href="#contacto" 
                    className="px-8 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-all flex items-center justify-center gap-2"
                  >
                    Cotización Rápida
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                  <div>
                    <p className="text-3xl font-black text-slate-900 mb-1">5k+</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Obras Entregadas</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 mb-1">24h</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Envío Promedio</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 mb-1">100%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Stock Real</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src="imagen_portada.png" 
                  alt="Materiales de construcción" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Truck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Logística Propia</p>
                    <p className="text-slate-900 font-black">ENTREGA HOY</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-orange-600/10 rounded-full z-0"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-slate-900 rounded-[3rem] -rotate-12 z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE EL CORRALÓN */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Nuestro Corralón" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">25+</p>
                <p className="text-sm font-medium uppercase tracking-wider">Años de Experiencia</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Más que un corralón, somos su socio en la construcción</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Fundado hace más de dos décadas, Corralón San José ha crecido junto a nuestra comunidad, proveyendo materiales de la más alta calidad para proyectos de todas las escalas.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Trabajamos codo a codo con particulares que sueñan con su casa propia, constructoras de gran envergadura y profesionales independientes que buscan confiabilidad y precisión en cada entrega. Nuestro enfoque no es solo vender materiales, sino brindar el asesoramiento técnico necesario para que cada obra sea un éxito duradero.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Calidad Certificada</p>
                    <p className="text-sm text-slate-500">Solo primeras marcas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">Atención Ágil</p>
                    <p className="text-sm text-slate-500">Respuesta inmediata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORÍAS DE PRODUCTOS */}
      <section id="productos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Todo lo que su obra necesita</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Contamos con un stock masivo organizado por categorías para facilitar su búsqueda y planificación.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Materiales Gruesos",
                desc: "Cemento, arena, piedra partida, ladrillos huecos y comunes. La base sólida de su construcción.",
                icon: <Layers className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Materiales de Obra",
                desc: "Cal, hierros de todas las medidas, mallas electrosoldadas y aditivos para concreto.",
                icon: <Hammer className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Techos y Estructuras",
                desc: "Chapas cincalum, tirantes de madera seleccionada, aislantes térmicos y perfiles estructurales.",
                icon: <Home className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Terminaciones",
                desc: "Cerámicos, porcelanatos, adhesivos Klaukol, pastinas y revestimientos plásticos.",
                icon: <ShieldCheck className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Herramientas",
                desc: "Hormigoneras, carretillas, herramientas de mano profesionales y equipos de seguridad.",
                icon: <Wrench className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Plomería y Electricidad",
                desc: "Cañerías termofusión, cables normalizados y todo para las instalaciones básicas.",
                icon: <HardHat className="w-8 h-8" />,
                img: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?auto=format&fit=crop&q=80&w=600"
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white flex items-center gap-3">
                    <div className="p-2 bg-orange-600 rounded-lg">
                      {React.cloneElement(cat.icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
                    </div>
                    <h3 className="text-xl font-bold">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">{cat.desc}</p>
                  <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Ver catálogo <ChevronDown className="-rotate-90 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARCAS QUE TRABAJAMOS */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Respaldo de Gigantes</p>
            <h3 className="text-2xl font-bold text-slate-800">Trabajamos con las marcas líderes del mercado</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
            {['Loma Negra', 'Holcim', 'Klaukol', 'Weber', 'Acindar', 'Ternium'].map((brand) => (
              <span key={brand} className="text-2xl font-black text-slate-400 tracking-tighter hover:text-orange-600 cursor-default transition-colors">
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICIOS */}
      <section id="servicios" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6">Servicios pensados para su comodidad</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                No solo vendemos materiales, ofrecemos soluciones logísticas y técnicas para que su obra no se detenga nunca.
              </p>
              <div className="bg-orange-600/10 border border-orange-600/20 p-6 rounded-2xl">
                <p className="text-orange-500 font-bold mb-2">¿Necesita un presupuesto urgente?</p>
                <p className="text-sm text-slate-300 mb-4">Envíenos su lista de materiales por WhatsApp y reciba su cotización en minutos.</p>
                <button className="flex items-center gap-2 text-white font-bold bg-orange-600 px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  <MessageCircle size={18} /> WhatsApp
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Entrega a Domicilio",
                  desc: "Contamos con flota propia de camiones con hidrogrúa para descargas precisas en su obra.",
                  icon: <Truck className="w-10 h-10 text-orange-500" />
                },
                {
                  title: "Venta Mayorista",
                  desc: "Precios especiales para constructoras y desarrolladores inmobiliarios con planes de acopio.",
                  icon: <Layers className="w-10 h-10 text-orange-500" />
                },
                {
                  title: "Asesoramiento Técnico",
                  desc: "Nuestro equipo de profesionales le ayudará a calcular las cantidades exactas para evitar desperdicios.",
                  icon: <HardHat className="w-10 h-10 text-orange-500" />
                },
                {
                  title: "Acopio de Materiales",
                  desc: "Congele precios hoy y retire los materiales a medida que su obra los necesite.",
                  icon: <Clock className="w-10 h-10 text-orange-500" />
                }
              ].map((service, i) => (
                <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-800 hover:border-orange-600/50 transition-colors">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. POR QUÉ ELEGIRNOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-8">La confianza se construye con hechos</h2>
                <div className="space-y-8">
                  {[
                    { title: "Stock Permanente", desc: "Nunca detendrá su obra por falta de materiales básicos." },
                    { title: "Logística Inteligente", desc: "Entregas programadas que respetan sus tiempos." },
                    { title: "Atención Personalizada", desc: "Trato directo con dueños y expertos en el rubro." },
                    { title: "Garantía de Calidad", desc: "Solo comercializamos productos bajo normas IRAM." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-600 font-bold">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-3">
                  <img src="obra.png" alt="Obra" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl -rotate-3 hidden md:block">
                  <p className="text-orange-600 font-black text-5xl mb-1">100%</p>
                  <p className="text-slate-800 font-bold">Compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OBRAS Y PROYECTOS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros materiales en acción</h2>
              <p className="text-lg text-slate-600">
                Hemos sido proveedores clave en el desarrollo urbano de la zona, trabajando con las constructoras más importantes y miles de familias.
              </p>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shrink-0">
              Ver Galería Completa
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Edificio 'Las Acacias'", type: "Residencial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
              { title: "Complejo Industrial Norte", type: "Logística", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
              { title: "Barrio Cerrado 'El Pinar'", type: "Urbanización", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" }
            ].map((project, i) => (
              <div key={i} className="group relative h-96 rounded-3xl overflow-hidden shadow-lg">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-1">{project.type}</p>
                  <h4 className="text-white text-2xl font-bold">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arq. Roberto Méndez",
                role: "Estudio Méndez & Asoc.",
                text: "Llevo 10 años trabajando con Corralón San José. La puntualidad en las entregas es lo que más valoro; en una obra, el tiempo es dinero y ellos lo entienden perfectamente.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Lucía Fernández",
                role: "Particular",
                text: "Construí mi casa desde cero y no sabía nada de materiales. El asesoramiento que me dieron fue fundamental para no gastar de más y elegir lo mejor para mi presupuesto.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Ing. Carlos Rossi",
                role: "Constructora del Sur",
                text: "Tienen el mejor stock de hierros y mallas de la zona. Los precios son competitivos y la logística con hidrogrúa nos facilita enormemente la descarga en pisos altos.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] relative">
                <Quote className="text-orange-200 w-12 h-12 absolute top-8 right-8" />
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PREGUNTAS FRECUENTES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-slate-600">Resolvemos sus dudas más comunes para agilizar su compra.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <FAQItem 
              question="¿Realizan entregas a domicilio?" 
              answer="Sí, contamos con flota propia de camiones de diversos tamaños para entregar en obra o domicilio particular. El costo del flete depende de la zona y el volumen de la carga." 
            />
            <FAQItem 
              question="¿Venden materiales por mayor?" 
              answer="Absolutamente. Tenemos una división especializada en atención a empresas constructoras y grandes proyectos con listas de precios mayoristas y planes de acopio." 
            />
            <FAQItem 
              question="¿Se puede pedir presupuesto online?" 
              answer="Sí, puede enviarnos su lista a través de nuestro formulario de contacto o directamente por WhatsApp. Respondemos en un plazo máximo de 2 horas hábiles." 
            />
            <FAQItem 
              question="¿Qué formas de pago aceptan?" 
              answer="Aceptamos efectivo, transferencias bancarias, tarjetas de débito y crédito. También contamos con planes de financiación propios para clientes con cuenta corriente." 
            />
            <FAQItem 
              question="¿Tienen stock permanente de todos los productos?" 
              answer="Mantenemos un stock crítico de materiales gruesos (cemento, arena, ladrillos) para asegurar entrega inmediata. Para terminaciones específicas, recomendamos consultar disponibilidad." 
            />
          </div>
        </div>
      </section>

      {/* 10. CONTACTO & 11. MAPA */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Póngase en contacto con nosotros</h2>
              <p className="text-lg text-slate-600 mb-10">
                Estamos listos para asesorarlo en su próximo proyecto. Complete el formulario o use nuestros canales directos.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Ubicación</h4>
                    <p className="text-slate-600">Av. Principal 1234, Parque Industrial, Buenos Aires</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Teléfono / WhatsApp</h4>
                    <p className="text-slate-600">+54 11 4567-8900 / +54 9 11 2345-6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Horarios</h4>
                    <p className="text-slate-600">Lun a Vie: 08:00 - 18:00 | Sáb: 08:00 - 13:00</p>
                  </div>
                </div>
              </div>

              {/* Simulated Map */}
              <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                  <MapPin size={48} className="mb-2 opacity-20" />
                  <p className="font-medium">Mapa de Ubicación Interactivo</p>
                  <p className="text-xs">Cargando Google Maps...</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md text-xs font-bold text-orange-600">
                  VER EN GOOGLE MAPS
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-8">Solicitar Presupuesto</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nombre Completo</label>
                    <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Ej: Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Teléfono</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Ej: 11 2345 6789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="juan@ejemplo.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Lista de Materiales / Mensaje</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none" placeholder="Describa los materiales que necesita..."></textarea>
                </div>
                <button className="w-full bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-100">
                  Enviar Solicitud
                </button>
                <p className="text-center text-xs text-slate-400">
                  Le responderemos en menos de 2 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <HardHat className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  CORRALÓN <span className="text-orange-600">SAN JOSÉ</span>
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Líderes en provisión de materiales para la construcción. Calidad, confianza y rapidez en cada entrega desde hace más de 25 años.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Inicio</a></li>
                <li><a href="#productos" className="hover:text-orange-600 transition-colors">Productos</a></li>
                <li><a href="#servicios" className="hover:text-orange-600 transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="hover:text-orange-600 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Categorías</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Obra Gruesa</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Hierros y Mallas</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Techos</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Terminaciones</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Herramientas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contacto Directo</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-600" />
                  <span>+54 11 4567-8900</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-orange-600" />
                  <span>info@corralonsanjose.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-orange-600" />
                  <span>Av. Principal 1234, Parque Industrial</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Corralón San José. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Política de Privacidad</a>
              <a href="#" className="hover:text-white">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
