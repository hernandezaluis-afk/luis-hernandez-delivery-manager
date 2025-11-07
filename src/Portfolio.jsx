import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sun, Moon } from 'lucide-react';

/**
 * Simplified, self-contained Portfolio component.
 * Uses no external UI library so it runs out-of-the-box.
 */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

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
          <div className="hidden md:flex items-center space-x-6">
            {['home','projects','approach','results','testimonials','skills','contact'].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-blue-500 transition capitalize">
                {item}
              </a>
            ))}
            <a href="mailto:hernandez.a.luis@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.993 1.872l-7.5 5a2.25 2.25 0 0 1-2.514 0l-7.5-5A2.25 2.25 0 0 1 2.25 6.993V6.75" />
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/luis-antonio-hern%C3%A1ndez-acosta-420531100" target="_blank" rel="noreferrer" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7.5h-4.5V14a1.5 1.5 0 0 0-3 0v7.5H10V14a6 6 0 0 1 6-6zM4.5 9h3V21h-3zM6 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700 transition" aria-label="toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <Menu size={28} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden flex flex-col items-center space-y-4 py-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            {['home','projects','approach','results','testimonials','skills','contact'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition capitalize">
                {item}
              </a>
            ))}
            <button onClick={toggleTheme} className="flex items-center space-x-2 border rounded-md px-3 py-1">
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              <span>{darkMode ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold mb-6">
          Transformo estrategias en resultados medibles
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg max-w-2xl mb-8">
          Delivery Manager con más de 15 años de experiencia en consultoría de software para los sectores bancario, seguros y fianzas. En los últimos 5 años he liderado equipos de más de 100 profesionales en proyectos estratégicos de desarrollo, migraciones tecnológicas, analítica de datos e inteligencia artificial, garantizando entregas puntuales, de alta calidad y dentro de presupuesto.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex space-x-4">
          <a href="Resume%20Luis%20Hernandez.pdf" download className={`${theme.button} text-white px-6 py-3 rounded-2xl shadow-md`} aria-label="Descargar CV">
            Descargar CV
          </a>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-2xl shadow-md" onClick={() => window.open('https://www.linkedin.com/in/luis-antonio-hern%C3%A1ndez-acosta-420531100', '_blank')}>
            Ver LinkedIn
          </button>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`max-w-5xl mx-auto py-20 px-4 ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Proyectos Destacados</h3>
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold">PCI Compliance Implementation</h4>
            <p className="mt-2">Lideré una iniciativa estratégica para asegurar el cumplimiento de la norma PCI DSS en una aplicación financiera crítica. Coordiné un equipo multidisciplinario de 9 personas durante 34 semanas, logrando la conformidad regulatoria 5 semanas antes del plazo, con una rentabilidad final de 25.05% y alta satisfacción del cliente.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">End User Computer (EUC) Applications Modernization</h4>
            <p className="mt-2">Responsable de la modernización de más de 20 EUCs para un cliente bancario. Transformé aplicaciones en soluciones web con Angular y microservicios Java, liderando a más de 30 profesionales. Se implementó DevOps por aplicación, con cumplimiento en tiempo y una rentabilidad de 30.79%.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Integración de Datos Maestros para Estados de Cuenta</h4>
            <p className="mt-2">Dirigí un proyecto de ingeniería de datos enfocado en optimizar los ETLs de generación de estados de cuenta. Logré incrementar la rentabilidad en 10 puntos porcentuales y cumplir con todos los requerimientos regulatorios.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Implementación de MDM (Master Data Management)</h4>
            <p className="mt-2">Responsable de implementar el estándar MDM en el Data Warehouse de un cliente asegurador. Se diseñó arquitectura en AWS utilizando Glue, Glue Catalog, AIM y CloudWatch. Entregado por fases conforme al roadmap, con rentabilidad sostenida y satisfacción del cliente.</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className={`max-w-5xl mx-auto py-20 px-4 ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Enfoque de Entrega</h3>
        <p>Mi enfoque combina metodologías ágiles y marcos escalados como SAFe, Scrum, Kanban, SDLC y Design Thinking para asegurar resultados predecibles y alineados a los objetivos de negocio. Superviso KPIs como SPI, CPI, productividad y margen neto, junto con un control riguroso de riesgos.</p>
        <ul className="mt-4 list-disc list-inside">
          <li><strong>Frameworks:</strong> SAFe, Scrum, Kanban, SDLC, Design Thinking</li>
          <li><strong>Herramientas:</strong> Jira, Confluence, Microsoft Project</li>
        </ul>
      </section>

      {/* Results Section */}
      <section id="results" className={`max-w-5xl mx-auto py-20 px-4 ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Resultados</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Crecimiento del 100% en la operación entre 2020 y 2024.</li>
          <li>Cumplimiento constante del margen bruto en todos los proyectos.</li>
          <li>Promedio de 8 puntos NPS en evaluaciones de clientes.</li>
          <li>Reducción de cartera de 120 a 90 días.</li>
          <li>Clima laboral superior a 9/10 durante cinco años consecutivos.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`max-w-5xl mx-auto py-20 px-4 ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Testimonios</h3>
        <blockquote className="italic border-l-4 border-blue-500 pl-4">
          “En el rol de Delivery Manager, Luis Antonio es una persona comprometida con el éxito de los proyectos, con una excelente atención desde el proceso de venta hasta el seguimiento post implementación. Está atento a las necesidades tanto del cliente como del equipo, buscando siempre soluciones y un ganar-ganar para todos los involucrados.”
          <footer className="mt-2 font-semibold">— Víctor Barrón</footer>
        </blockquote>
        <p className="mt-6 text-gray-400">*Más testimonios serán incorporados próximamente.*</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`max-w-5xl mx-auto py-20 px-4 ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Habilidades Clave</h3>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
          <li>Project Management</li>
          <li>Agile Methodologies & Scaled Frameworks</li>
          <li>Business Intelligence & Data Strategy</li>
          <li>Strategic Planning & Execution</li>
          <li>Leadership & Team Growth</li>
          <li>Effective Communication & Active Listening</li>
          <li>Decision-Making & Problem-Solving</li>
          <li>Storytelling & Executive Presentations</li>
          <li>Design Thinking & Innovation</li>
          <li>Consultative Selling & Change Management</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`max-w-5xl mx-auto py-20 px-4 text-center ${theme.card}`}>
        <h3 className={`text-3xl font-semibold mb-6 border-b ${theme.accent} inline-block`}>Contacto</h3>
        <p className="mb-2">📧 hernandez.a.luis@gmail.com</p>
        <p className="mb-2">📞 +52 55 2673 2058</p>
        <a href="https://www.linkedin.com/in/luis-antonio-hern%C3%A1ndez-acosta-420531100" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
      </section>

      {/* Footer */}
      <footer className={`py-6 text-center border-t ${darkMode ? 'border-gray-700 text-gray-500' : 'border-gray-300 text-gray-600'}`}>
        © {new Date().getFullYear()} Luis Antonio Hernández Acosta | Delivery Manager
      </footer>
    </div>
  );
}
