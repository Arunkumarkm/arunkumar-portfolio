// --- START OF FILE App.tsx ---

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  ChevronDown,
  Code,
  Users,
  Calendar,
  Award,
  Smartphone
} from 'lucide-react';
// FIX: Removed the unused import of 'SkillType' from './types.ts'
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION, PROJECTS, SKILL_ICONS, SkillTypes } from './constants';
import { SectionWrapper } from './components/SectionWrapper';
import { Card } from './components/Card';
import profileImage from './assets/profileImage.jpeg'; 

const App: React.FC = () => {
  
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 overflow-x-hidden relative font-sans selection:bg-slate-300 selection:text-slate-900">
      
      {/* Ambient Mirror Reflections (Glows) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/60 rounded-full blur-[100px] mix-blend-overlay" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[100px] mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl relative z-10 mx-auto bg-slate-200">
            {/* FIX: Use imported profile image */}
            <img 
              src={profileImage} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>
          {/* Glassy Halo */}
          <div className="absolute inset-0 rounded-full border border-white/60 scale-110 shadow-lg"></div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-4 tracking-tight text-slate-800 drop-shadow-sm"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-600 font-medium mb-8 max-w-2xl tracking-wide"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-slate-700"
        >
          <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-2 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/50 hover:bg-white/70 hover:border-white transition-all shadow-md">
            <Mail size={16} className="text-slate-600 group-hover:text-slate-900 transition-colors" />
            <span className="font-medium">{PERSONAL_INFO.email}</span>
          </a>
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/50 shadow-md">
            <Phone size={16} className="text-slate-600" />
            <span className="font-medium">{PERSONAL_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/50 shadow-md">
            <MapPin size={16} className="text-slate-600" />
            <span className="font-medium">{PERSONAL_INFO.location}</span>
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 10, 0] }}
           transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 cursor-pointer hover:text-slate-800 transition-colors"
           onClick={scrollToContent}
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>

      <div className="relative z-10 space-y-8 pb-24">
        
        {/* Profile Summary */}
        <SectionWrapper id="about" title="Profile Summary">
          <Card className="md:p-8 border-l-4 border-l-slate-400 !rounded-l-lg bg-white/50 shadow-lg">
             <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-normal">
               "{PERSONAL_INFO.profileSummary}"
             </p>
          </Card>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper title="Skills & Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Skills */}
            <div className="space-y-6">
               <h3 className="text-xl font-heading font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <div className="p-2 bg-white/60 rounded-lg text-slate-800 shadow-sm backdrop-blur border border-white/50"><Code size={20}/></div>
                 Technical Skills
               </h3>
               <div className="grid grid-cols-1 gap-3">
                 {SKILLS.filter(s => s.type === SkillTypes.TECHNICAL || s.type === SkillTypes.NON_TECHNICAL).map((skill, index) => (
                   <Card key={index} className="!p-4 flex items-center gap-4 group hover:bg-white/70 transition-colors" hoverEffect={true}>
                     <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 group-hover:text-slate-900 group-hover:border-slate-300 transition-colors">
                       {SKILL_ICONS[skill.name] || <Code size={20} />}
                     </div>
                     <div className="flex-grow">
                       <div className="flex justify-between items-center mb-2">
                         <h4 className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{skill.name}</h4>
                         {skill.level && <span className="text-xs text-slate-500 font-bold">{skill.level}%</span>}
                       </div>
                       <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden shadow-inner border border-white/50">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="bg-gradient-to-r from-slate-400 to-slate-700 h-full rounded-full"
                          />
                       </div>
                     </div>
                   </Card>
                 ))}
               </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-slate-800 mb-4 flex items-center gap-2">
                 <div className="p-2 bg-white/60 rounded-lg text-slate-800 shadow-sm backdrop-blur border border-white/50"><Users size={20}/></div>
                 Professional Attributes
               </h3>
               <div className="flex flex-wrap gap-3 content-start">
                 {SKILLS.filter(s => s.type === SkillTypes.SOFT).map((skill, index) => (
                   <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/40 backdrop-blur-sm border border-white/60 rounded-lg px-6 py-3 text-slate-700 font-medium hover:border-white hover:text-slate-900 hover:bg-white/80 transition-all cursor-default select-none shadow-md"
                   >
                     {skill.name}
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper title="Work History">
          <div className="relative border-l-2 border-slate-300 ml-3 md:ml-6 space-y-12 py-2">
            {EXPERIENCE.map((exp, _) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-6 w-[18px] h-[18px] rounded-full bg-white border-4 border-slate-400 group-hover:border-slate-800 group-hover:scale-110 transition-all duration-300 z-20 shadow-md"></div>
                
                <Card className="relative overflow-hidden group-hover:border-white/80 transition-all duration-500">
                  <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900">
                    <Briefcase size={80} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-black transition-colors">{exp.role}</h3>
                      <div className="text-lg text-slate-600 font-medium flex items-center gap-2 mt-1">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-white/50 border border-white/60 px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap w-fit shadow-sm backdrop-blur-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Education Section */}
        <SectionWrapper title="Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, _) => (
              <Card key={edu.id} className="relative flex flex-col h-full group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/50 border border-white/60 rounded-lg text-slate-700 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100/50 px-2 py-1 rounded border border-slate-200 shadow-sm">{edu.period}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-black transition-colors">{edu.degree}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{edu.institution}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center gap-2 text-sm text-slate-700 font-semibold">
                   <Award size={16} />
                   <span>{edu.score}</span>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper title="Featured Projects">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                 <div className="flex-grow space-y-4">
                   <div className="flex justify-between items-start">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-black transition-colors">{project.title}</h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/50 text-slate-600 border border-white/60 rounded-full hover:bg-white hover:text-black hover:border-white hover:scale-110 transition-all duration-300 shadow-sm"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                   </div>
                   
                   <p className="text-slate-700 text-lg leading-relaxed">
                     {project.description}
                   </p>
                   
                   <div className="flex flex-wrap gap-2 pt-2">
                     {project.tags.map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-white/50 border border-white/60 text-slate-600 text-xs rounded-full uppercase tracking-wider font-bold shadow-sm">
                         {tag}
                       </span>
                     ))}
                   </div>

                    {project.link && (
                      <div className="pt-4">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 bg-slate-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-black transition-colors shadow-lg hover:-translate-y-1 transform duration-200"
                        >
                          <Smartphone size={20} />
                          View on Play Store
                        </a>
                      </div>
                    )}
                 </div>
               </div>
            </Card>
          ))}
        </SectionWrapper>

        {/* Footer */}
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-12 bg-white/30 backdrop-blur-md">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
// --- END OF FILE App.tsx ---