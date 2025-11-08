import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Sun, Moon, Menu } from "lucide-react";

const TEXT = {
  en: {
    heroTitle: "Turning strategies into measurable results",
    heroSubtitle: "Delivery Manager with over 15 years in software consulting for banking and insurance. In the past 5 years I have led teams of 100+ professionals in strategic initiatives including application development, migrations, and data & AI projects, delivering on time, with quality and within budget under Agile frameworks.",
    downloadCV: "Download Resume",
    viewLinkedIn: "View LinkedIn",
    projectsTitle: "Featured Projects",
    approachTitle: "Delivery Approach",
    resultsTitle: "Results",
    testimonialsTitle: "Testimonials",
    skillsTitle: "Key Skills",
    contactTitle: "Contact",
    projects: [
      {
        title: "PCI Compliance Implementation",
        desc: "Led a strategic initiative to ensure PCI DSS compliance for a critical financial web application. Coordinated a 9-member multi-disciplinary team over 34 weeks, achieving compliance 5 weeks ahead of schedule with final project profit of 25.05% and high client satisfaction."
      },
      {
        title: "EUC Applications Modernization",
        desc: "Oversaw the modernization of 20+ EUCs into web applications (Angular + Java microservices). Managed a 30+ professionals team across multiple phases, implemented DevOps per application, delivered on time and achieved a 30.79% project profit."
      },
      {
        title: "Master Data Integration for Account Statements",
        desc: "Directed a data engineering initiative to optimize ETLs feeding account statements, adding new calculations and improving data quality and timeliness. The effort increased project profitability by ~10 percentage points and met all regulatory requirements."
      },
      {
        title: "MDM Implementation",
        desc: "Delivered a Master Data Management solution within the client's data warehouse, designing an AWS-based architecture (Glue, Glue Catalog, IAM, CloudWatch) and integrating TIBCO catalogs. The project was delivered in phases per roadmap with sustained profitability."
      }
    ],
    approach: "As a Delivery Manager, my day begins with a clear purpose: ensuring that every project under my responsibility advances toward successful completion — on time, within budget, and aligned with strategic objectives. Weekly, I review delivery plans, confirm project scopes, milestones, and timelines, and coordinate with cross-functional teams to allocate resources effectively. Throughout the day, I manage risks, and adjust plans to stay on track. My approach to project execution is based on agile frameworks such as SAFe, Scrum, and Kanban, while applying the principles of Design Thinking and the Software Development Life Cycle (SDLC) when designing and implementing solutions. These methodologies allow me to ensure alignment, adaptability, and continuous value delivery. To manage delivery operations efficiently, I rely on tools such as Jira, Confluence, and Microsoft Project for planning, tracking, and documentation, ensuring full transparency for both clients and internal teams. I also leverage collaboration platforms and performance indicators — like SPI, CPI, and productivity metrics — to maintain visibility and control across all delivery phases. Communication plays a central role in my work — keeping team members, executives, and clients aligned and engaged. Beyond processes, I act as a mentor and facilitator, providing guidance and creating an environment where teams can perform at their best. My focus is always on balance: performance, quality, and client satisfaction. At the end of each day, I review KPIs, evaluate progress, and plan next steps to ensure consistent, predictable, and measurable delivery success.
          ",
    results: [
      "100% growth in operations from 2020 to 2024.",
      "Consistent fulfillment of gross margin targets across projects.",
      "Average client NPS score of 8.",
      "Reduced accounts receivable days from 120 to 90 across portfolio.",
      "Maintained employee satisfaction score above 9/10 for five consecutive years."
    ],
    testimonial: {
      text: "In the role of Delivery Manager, Luis Antonio is fully committed to project success, providing excellent attention from pre-sales through post-implementation. He is attentive to both client and team needs, consistently seeking win-win solutions.",
      author: "Víctor Barrón - Project Manager @Banamex"
    },
    skills: [
      "Project Management",
      "Agile & Scaled Frameworks",
      "Business Intelligence & Data Strategy",
      "Strategic Planning & Execution",
      "Leadership & Team Growth",
      "Effective Communication",
      "Decision-Making & Problem-Solving",
      "Executive Storytelling & Presentations",
      "Design Thinking & Innovation",
      "Change Management & Consultative Selling"
    ],
    contact: {
      email: "hernandez.a.luis@gmail.com",
      phone: "+52 55 2673 2058",
      linkedin: "https://www.linkedin.com/in/luis-antonio-hern%C3%A1ndez-acosta-420531100"
    }
  },
  es: {
    heroTitle: "Transformo estrategias en resultados medibles",
    heroSubtitle: "Delivery Manager con más de 15 años en consultoría de software para banca y seguros. En los últimos 5 años he liderado equipos de más de 100 profesionales en iniciativas estratégicas que incluyen desarrollo de aplicaciones, migraciones y proyectos de datos e IA, entregando a tiempo, con calidad y dentro del presupuesto bajo marcos ágiles.",
    downloadCV: "Descargar CV",
    viewLinkedIn: "Ver LinkedIn",
    projectsTitle: "Proyectos Destacados",
    approachTitle: "Enfoque de Entrega",
    resultsTitle: "Resultados",
    testimonialsTitle: "Testimonios",
    skillsTitle: "Habilidades Clave",
    contactTitle: "Contacto",
    projects: [
      {
        title: "Implementación de Cumplimiento PCI",
        desc: "Lideré una iniciativa estratégica para asegurar el cumplimiento PCI DSS de una aplicación financiera crítica. Coordiné un equipo multidisciplinario de 9 personas durante 34 semanas, logrando la conformidad 5 semanas antes del plazo con una rentabilidad final del 25.05% y alta satisfacción del cliente."
      },
      {
        title: "Modernización de Aplicaciones EUC",
        desc: "Responsable de la modernización de más de 20 EUCs a aplicaciones web (Angular + microservicios Java). Dirigí un equipo de más de 30 profesionales, implementando DevOps por aplicación y entregando con una rentabilidad del 30.79%."
      },
      {
        title: "Integración de Datos Maestros para Estados de Cuenta",
        desc: "Dirigí un proyecto de ingeniería de datos para optimizar los ETLs que alimentan los estados de cuenta, agregando nuevos cálculos y mejorando la calidad y oportunidad de la información. Se incrementó la rentabilidad del proyecto en ~10 puntos porcentuales y se cumplió con los requerimientos regulatorios."
      },
      {
        title: "Implementación de MDM",
        desc: "Entregué una solución de Master Data Management dentro del Data Warehouse del cliente, diseñando una arquitectura en AWS (Glue, Glue Catalog, IAM, CloudWatch) e integrando catálogos en TIBCO. El proyecto se entregó por fases y mantuvo rentabilidad sostenida."
      }
    ],
    approach: "Como Delivery Manager, comienzo el día con un objetivo claro: asegurar que cada proyecto bajo mi responsabilidad avance de manera ordenada hacia su entrega exitosa, cumpliendo los tiempos, el presupuesto y los estándares de calidad establecidos. Cada semana reviso los planes de entrega, confirmando que el alcance, los hitos y los cronogramas estén alineados con las expectativas del cliente. Coordino con los equipos multidisciplinarios la asignación de recursos y responsabilidades, y durante el día doy seguimiento al progreso, adminisstro y gestiono riesgos y realizo los ajustes necesarios para mantener el rumbo. Mi enfoque de ejecución se basa en marcos ágiles como SAFe, Scrum y Kanban, así como en los principios de Design Thinking y del Ciclo de Vida del Desarrollo de Software (SDLC). Estos enfoques me permiten mantener la alineación, la adaptabilidad y la entrega continua de valor a lo largo de cada proyecto. Para administrar las operaciones de entrega con eficiencia, utilizo herramientas como Jira, Confluence y Microsoft Project para la planeación, el seguimiento y la documentación, garantizando visibilidad y transparencia tanto para los equipos como para los clientes. Asimismo, me apoyo en indicadores de desempeño como el SPI, CPI y métricas de productividad, lo que me permite mantener un control integral sobre las diferentes fases de entrega. La comunicación es esencial: mantengo contacto constante con los equipos, ejecutivos y clientes para asegurar que todos estén informados, alineados y comprometidos. Más allá de la gestión operativa, actúo como mentor y facilitador, guiando al equipo y creando un entorno colaborativo de alto desempeño. Mi enfoque siempre busca el equilibrio entre desempeño, calidad y satisfacción del cliente. Al final del día, reviso los indicadores, evalúo avances y planifico los siguientes pasos para garantizar entregas consistentes, predecibles y con valor tangible.
    results: [
      "Crecimiento del 100% en la operación entre 2020 y 2024.",
      "Cumplimiento constante de los objetivos de margen bruto en los proyectos.",
      "Promedio NPS de clientes de 8.",
      "Reducción de días de cartera de 120 a 90 en el portafolio.",
      "Clima laboral superior a 9/10 durante cinco años consecutivos."
    ],
    testimonial: {
      text: "En el rol de Delivery Manager, Luis Antonio está comprometido con el éxito de los proyectos, brindando excelente atención desde preventa hasta post-implementación. Está atento a las necesidades del cliente y del equipo, buscando soluciones ganar-ganar.",
      author: "Víctor Barrón - Project Manager en Banamex"
    },
    skills: [
      "Gestión de Proyectos",
      "Metodologías Ágiles y Marcos Escalados",
      "Inteligencia de Negocio y Estrategia de Datos",
      "Planeación Estratégica y Ejecución",
      "Liderazgo y Desarrollo de Equipos",
      "Comunicación Efectiva",
      "Toma de Decisiones y Resolución de Problemas",
      "Presentaciones Ejecutivas y Storytelling",
      "Design Thinking e Innovación",
      "Gestión del Cambio y Venta Consultiva"
    ],
    contact: {
      email: "hernandez.a.luis@gmail.com",
      phone: "+52 55 2673 2058",
      linkedin: "https://www.linkedin.com/in/luis-antonio-hern%C3%A1ndez-acosta-420531100"
    }
  }
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en'); // default English

  const toggleTheme = () => setDarkMode(!darkMode);
  const switchLang = (l) => setLang(l);

  const t = TEXT[lang];

  const theme = darkMode
    ? {
        bg: 'from-gray-900 to-gray-800',
        text: 'text-gray-100',
        card: 'bg-gray-800 text-gray-200',
        accent: 'border-blue-500',
        button: 'bg-blue-600 hover:bg-blue-700',
      }
    : {
        bg: 'from-white to-gray-100',
        text: 'text-gray-900',
        card: 'bg-white text-gray-800',
        accent: 'border-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
      };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bg} ${theme.text} font-sans scroll-smooth`}>
      {/* Header */}
      <header className={`fixed w-full top-0 left-0 backdrop-blur-md z-50 shadow-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Luis Antonio Hernández Acosta | Delivery Manager</h1>
          <div className="hidden md:flex items-center space-x-4">
            {['home','projects','approach','results','testimonials','skills','contact'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-blue-500 transition capitalize">
                {item}
              </a>
            ))}
            {/* Contact icons */}
            <a
              href="mailto:hernandez.a.luis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="Email"
            >
              <Mail size={18} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/luis-antonio-hernandez-acosta-420531100/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            {/* Language toggle with flags */}
            <div className="flex items-center space-x-2 ml-3">
              <button onClick={() => switchLang('en')} aria-label="English" className={`px-2 py-1 rounded ${lang==='en' ? 'ring-2 ring-blue-400' : ''}`}>🇺🇸</button>
              <button onClick={() => switchLang('es')} aria-label="Spanish" className={`px-2 py-1 rounded ${lang==='es' ? 'ring-2 ring-blue-400' : ''}`}>🇲🇽</button>
            </div>

            {/* Theme toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition" aria-label="toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <div className="flex md:hidden items-center space-x-2">
            {/* Contact icons mobile */}
            <a
              href="mailto:hernandez.a.luis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="Email"
            >
              <Mail size={18} />
            </a>
          
            <a
              href="https://www.linkedin.com/in/luis-antonio-hernandez-acosta-420531100/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
            {/* mobile language + theme */}
            <button onClick={() => switchLang('en')} aria-label="English" className={`px-2 py-1 rounded ${lang==='en' ? 'ring-2 ring-blue-400' : ''}`}>🇺🇸</button>
            <button onClick={() => switchLang('es')} aria-label="Spanish" className={`px-2 py-1 rounded ${lang==='es' ? 'ring-2 ring-blue-400' : ''}`}>🇲🇽</button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition" aria-label="toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="ml-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              <Menu size={26} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden flex flex-col items-center space-y-4 py-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            {['home','projects','approach','results','testimonials','skills','contact'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition capitalize">
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center px-4"
      >
        {/* Imagen personal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8 relative"
        >
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg bg-gray-800/20 flex items-center justify-center">
            <img
              src="./profile.jpg"
              alt="Luis Antonio Hernández Acosta portrait"
              className="object-contain w-full h-full scale-110"
            />
          </div>
        </motion.div>
      
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          {t.heroTitle}
        </motion.h2>
      
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mb-6"
        >
          {t.heroSubtitle}
        </motion.p>
      
        {/* Botones */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex space-x-4"
        >
          <a
            href={"./Luis-Hernandez-Resume.pdf"}
            download
            className={`${theme.button} text-white px-5 py-3 rounded-2xl shadow-md`}
            aria-label="download resume"
          >
            {t.downloadCV}
          </a>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-3 rounded-2xl shadow-md"
            onClick={() => window.open(t.contact.linkedin, '_blank')}
          >
            {t.viewLinkedIn}
          </button>
        </motion.div>
      </section>


      {/* Projects Section */}
      <section id="projects" className={`max-w-5xl mx-auto py-16 px-4 ${theme.card}`}>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>{t.projectsTitle}</h3>
        <div className="space-y-8">
          {t.projects.map((p, i) => (
            <div key={i}>
              <h4 className="text-xl font-bold">{p.title}</h4>
              <p className="mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className={`max-w-5xl mx-auto py-16 px-4 ${theme.card}`}>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-4 border-b ${theme.accent} inline-block`}>{t.approachTitle}</h3>
        <p>{t.approach}</p>
      </section>

      {/* Results Section */}
      <section id="results" className={`max-w-5xl mx-auto py-16 px-4 ${theme.card}`}>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-4 border-b ${theme.accent} inline-block`}>{t.resultsTitle}</h3>
        <ul className="list-disc list-inside space-y-2">
          {t.results.map((r,i) => <li key={i}>{r}</li>)}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`max-w-5xl mx-auto py-16 px-4 ${theme.card}`}>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-4 border-b ${theme.accent} inline-block`}>{t.testimonialsTitle}</h3>
        <blockquote className="italic border-l-4 border-blue-500 pl-4">
          {t.testimonial.text}
          <footer className="mt-2 font-semibold">— {t.testimonial.author}</footer>
        </blockquote>
        <p className="mt-4 text-gray-400">*</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`max-w-5xl mx-auto py-16 px-4 ${theme.card}`}>
        <h3 className={`text-2xl md:text-3xl font-semibold mb-4 border-b ${theme.accent} inline-block`}>{t.skillsTitle}</h3>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          {t.skills.map((s,i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className={`py-16 text-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {lang === 'en' ? 'Contact' : 'Contacto'}
      </motion.h2>
    
      <motion.div
        className="flex justify-center space-x-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Email */}
        <a
          href="mailto:hernandez.a.luis@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 transition"
          title="Email"
        >
          <Mail size={20} />
          <span>hernandez.a.luis@gmail.com</span>
        </a>
    
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/luis-antonio-hernandez-acosta-420531100/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-500 transition"
          title="LinkedIn"
        >
          <Linkedin size={20} />
          <span>{lang === 'en' ? 'LinkedIn Profile' : 'Perfil de LinkedIn'}</span>
        </a>
      </motion.div>
    
      <motion.p
        className="text-sm opacity-80"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {lang === 'en'
          ? 'Based in Mexico City, available for remote collaboration worldwide.'
          : 'Con base en Ciudad de México, disponible para colaboración remota global.'}
      </motion.p>
    </motion.section>
      
      {/* Footer */}
      <footer className={`py-6 text-center border-t ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
        © {new Date().getFullYear()} Luis Antonio Hernández Acosta | Delivery Manager
      </footer>
    </div>
  );
}
