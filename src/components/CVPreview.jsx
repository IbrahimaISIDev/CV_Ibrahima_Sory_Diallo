// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download, Calendar, Briefcase, GraduationCap, Star, Award } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import CodeImage from '/src/assets/Code-Image.jpeg';

const CVPreview = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'CV_Ibrahima_Sory_Diallo',
    onAfterPrint: () => alert('CV téléchargé avec succès!')
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div ref={componentRef} className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Sidebar */}
          <div className="bg-gray-900 text-white p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <img
                  src={CodeImage}
                  alt="Ibrahima Sory Diallo"
                  className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg mb-4"
                />
                <div className="absolute bottom-0 right-0 bg-yellow-400 rounded-full p-2">
                  <Star className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-center">Ibrahima Sory Diallo</h1>
              <p className="text-yellow-400 font-semibold mt-2">Développeur Web/Mobile Full-stack Junior</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <a href="mailto:sorydiallo371@gmail.com" className="hover:text-yellow-400 transition-colors duration-200">sorydiallo371@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <a href="tel:+221785619115" className="hover:text-yellow-400 transition-colors duration-200">+221 78 561 91 15</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <a href="#" className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
              </a>
              <a href="#" className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200">
                <Github className="w-5 h-5 mr-3" /> GitHub
              </a>
              <a href="#" className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200">
                <Globe className="w-5 h-5 mr-3" /> Portfolio
              </a>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 border-b border-yellow-400 pb-2">Langues</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <span>Français</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <div key={index} className="w-2 h-2 rounded-full bg-yellow-400 ml-1"></div>
                    ))}
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <span>Anglais</span>
                  <div className="flex">
                    {[1, 2, 3, 4].map((_, index) => (
                      <div key={index} className="w-2 h-2 rounded-full bg-yellow-400 ml-1"></div>
                    ))}
                    <div className="w-2 h-2 rounded-full bg-gray-600 ml-1"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 p-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2 flex items-center">
                <Award className="w-6 h-6 mr-2 text-yellow-400" />
                Résumé Professionnel
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Développeur Web/Mobile Full-stack Junior passionné, avec une formation solide et une expérience pratique dans le développement d&apos;applications web et mobiles. Compétent dans l&apos;utilisation de technologies modernes et constamment à la recherche de nouvelles opportunités pour innover et créer des solutions impactantes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400" />
                Compétences Techniques
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Langages", skills: "HTML5, CSS3, JavaScript (ES6+), TypeScript, PHP 8" },
                  { title: "Front-end", skills: "React, Vue.js, Tailwind CSS, Bootstrap" },
                  { title: "Back-end", skills: "Node.js, Express.js, Laravel, API RESTful" },
                  { title: "Bases de données", skills: "MySQL, PostgreSQL, MongoDB, Firebase" },
                  { title: "DevOps & Outils", skills: "Git, GitHub, Docker, Trello" },
                  { title: "Méthodologies", skills: "Agile Scrum" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.skills}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-yellow-400" />
                Formation
              </h2>
              {[
                {
                  institution: "Sonatel Academy",
                  degree: "Formation en développement d'applications web et mobile",
                  period: "Février 2024 - Présent",
                  details: "Focus sur les technologies web modernes et le développement mobile."
                },
                {
                  institution: "Groupe ISI Suptech",
                  degree: "Licence en Informatique",
                  period: "Décembre 2022 - Février 2024",
                  details: "Spécialisation en développement logiciel et systèmes d'information."
                },
                {
                  institution: "Lycée Blaise Diagne",
                  degree: "Baccalauréat S2 (Sciences)",
                  period: "Juillet 2022",
                }
              ].map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0 flex bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <GraduationCap className="w-6 h-6 mr-4 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.institution}</h3>
                    <p className="text-gray-600">{edu.degree}</p>
                    <p className="text-gray-500 text-sm flex items-center mt-1">
                      <Calendar className="w-4 h-4 mr-2" /> {edu.period}
                    </p>
                    {edu.details && <p className="text-gray-600 mt-1 text-sm">{edu.details}</p>}
                  </div>
                </div>
              ))}
            </section>

            <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-yellow-400 pb-2 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-yellow-400" />
                Expérience de Projets
              </h2>
              {[
                {
                  title: "Application Web de Gestion Pédagogique",
                  technologies: "PHP, Tailwind CSS, MySQL",
                  role: "Développeur Full-stack",
                  description: "Développement d'une application pour la gestion des cours, des étudiants et des enseignants. Mise en œuvre de l'architecture MVC pour une séparation claire des préoccupations."
                },
                {
                  title: "Application de Gestion de Boutique",
                  technologies: "PHP (procédural), Tailwind CSS",
                  role: "Développeur Front-end (en équipe)",
                  description: "Développement d'une application de gestion de boutique avec un accent sur la gestion des clients, des dettes et des articles. Participation active à la conception de l'interface utilisateur à l'aide de Figma."
                },
                {
                  title: "Réseau Social",
                  technologies: "Node.js, TypeScript, Prisma, MongoDB",
                  role: "Développeur Back-end",
                  description: "Développement d'un réseau social avec une architecture évolutive. Gestion des utilisateurs, des publications et des relations entre utilisateurs."
                },
                {
                  title: "API de Gestion de Boutique (Back-end)",
                  technologies: "Laravel, PostgreSQL",
                  role: "Développeur Back-end",
                  description: "Développement d'API REST pour gérer les articles, clients et transactions d'une boutique. Mise en œuvre de la logique métier à l'aide de Laravel."
                },
              ].map((project, index) => (
                <div key={index} className="mb-6 last:mb-0 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <Briefcase className="w-6 h-6 mr-4 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{project.title}</h3>
                      <p className="text-yellow-600 font-medium">{project.role}</p>
                      <p className="text-gray-600 text-sm mt-1">{project.technologies}</p>
                      <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handlePrint}
          className="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          Télécharger CV <Download className="inline-block w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CVPreview;
