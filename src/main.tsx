import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Github, Mail, Menu, X, Code2, Sparkles, GraduationCap, Award, Braces, Orbit, Leaf, Layers, Server, Check, Copy, Send, Linkedin, Facebook, Phone, MessageCircle } from 'lucide-react';
import './styles.css';

const username = 'cigarePhyoPyaePyaeKhaing';
const github = `https://github.com/${username}`;
const email = 'phyopyaekhaing2006@gmail.com';
const projects = [
 {name:'studenthub',owner:username,type:'Software & AI',language:'Java',icon:GraduationCap,color:'peach',description:'An interactive digital bulletin board for UIT students, with announcements, deadlines and community discussions.',tags:['Java','Jakarta / JSP','MySQL'],note:'Team project · repository contributor'},
 {name:'IGNIS-NASA-2026',owner:'Harry-Pyae',type:'Collaboration',language:'TypeScript',icon:Orbit,color:'space',description:'Evidence-first fire-safety intelligence for human spaceflight, built around NASA microgravity combustion research.',tags:['TypeScript','NASA Space Apps','Team project'],note:'Verified repository contributor'},
 {name:'pixelpop-server',owner:username,type:'Web development',language:'JavaScript',icon:Server,color:'pink',description:'A JavaScript server repository. Browse the source to explore the implementation and development history.',tags:['JavaScript','Server'],note:'Repository owner & contributor'},
 {name:'FoodWasteAI', owner:username, type:'Software & AI', language:'Java', icon:Leaf, color:'sage', description:'Food waste prediction, prevention and redistribution, combining a Java backend with Gemini and Prolog reasoning.', tags:['Java','MySQL','Gemini','Prolog'], note:'Repository contributor'},
 {name:'classsync-portal',owner:username,type:'Web development',language:'TypeScript',icon:Layers,color:'lavender',description:'A TypeScript project in my development portfolio. Explore the repository for its source and current progress.',tags:['TypeScript','Web'],note:'Repository owner & contributor'},
 {name:'AstroCareAI',owner:'Harry-Pyae',type:'Collaboration',language:'TypeScript',icon:Sparkles,color:'blue',description:'A collaborative NASA hackathon practice-round project, developed in TypeScript.',tags:['TypeScript','Hackathon practice','Team project'],note:'Verified repository contributor'},
];
const certificates = [
 {title:'UIT Semester IV Academic Record',org:'University of Information Technology',status:'Academic record · Second year',date:'2025–2026 · Semester IV',image:'uit-semester-iv.png',detail:'Second-year Computer Science and Technology academic record for Semester IV, 2025–2026. Semester GPA: 3.95/4.00; cumulative GPA: 3.85/4.00; 21 credit units. Student ID redacted for privacy. This is an academic record, not a professional certification.'},
 {title:'ITPEC Information Technology Passport',org:'ITPEC · Myanmar Computer Federation',status:'Qualification · Passed',date:'Issued January 2026',image:'itpec.png',detail:'Information Technology Passport Examination passed on 26 October 2025. Examinee ID redacted for privacy.'},
 {title:'NASA Space Apps 2026',org:'NASA Space Apps Challenge',status:'Participation · Galactic Problem Solver',date:'14–15 November 2026',image:'nasa.png',detail:'Galactic Problem Solver recognition for participation and efforts to address challenges on Earth and in space.'},
 {title:'IBM Dev Day: Bob in Action',org:'IBM',status:'Participation',date:'27–30 August 2026',image:'ibm.png',detail:'Certificate of participation in IBM Dev Day: Bob in Action.'},
 {title:'Smart Event Graphics with AI',org:'MCPA · Yangon Region',status:'Workshop participation',date:'30 October 2026',image:'mcpa.png',detail:'Participation in the Smart Event Graphics with AI workshop.'},
 {title:'Yangon Region Academic Award',org:'Yangon Region Government',status:'Academic achievement',date:'Grade 12 achievement',image:'academic.png',detail:'Academic recognition from Yangon Region, alongside Grade 12 completion with three distinctions.'},
];
const academicResults = [
 {semester:'Semester I',year:'First year',courses:[['Myanmar Literature','A−'],['Integrating Critical Thought and Language Skills','A−'],['Physics (Mechanics and Electromagnetism)','A'],['Calculus','A'],['Digital Fundamentals of Computer Systems','A+'],['Introduction to Business and Fundamentals of Information Systems','A']]},
 {semester:'Semester II',year:'First year',courses:[['Myanmar Literature and Language (Social Communication and Culture)','B−'],['Professional Communications','B+'],['Web Technology (Cornerstone Project)','A−'],['Human Computer Interaction and Information Security','A'],['Programming in C++ (Cornerstone Project)','A'],['Networking Fundamentals','A−'],['Discrete Mathematics','A−']]},
 {semester:'Semester III',year:'Second year',courses:[['Engineering Mathematics','A'],['Operating Systems Fundamentals','A'],['Electronic Devices (Cornerstone Project)','A'],['Software Requirement Analysis and Design','A+'],['Database Management Systems','A−'],['Data Structures and Algorithms','A']]},
 {semester:'Semester IV',year:'Second year · 2025–2026',courses:[['IELTS Academic Skills and Strategies','A−'],['Artificial Intelligence','A'],['Linear Algebra','A+'],['Computer Architecture and Organization','A+'],['Management Principles and Engineering Economics','A+'],['Network Design and Engineering','A'],['Enterprise Applications Development using Java (Keystone Project)','A+']]},
];
const skillCategories = ['All skills','Web & Frontend','Backend & Languages','AI, Logic & Data','CS Foundations','Tools & Cloud'] as const;
const techSkills = [
 {name:'HTML5',category:'Web & Frontend',icon:'/tech/html5.svg',source:'Web Tech · UI Structure'},
 {name:'CSS3',category:'Web & Frontend',icon:'/tech/css3.svg',source:'Responsive Design & Motion'},
 {name:'JavaScript',category:'Web & Frontend',icon:'/tech/javascript.svg',source:'pixelpop-server · Web'},
 {name:'TypeScript',category:'Web & Frontend',icon:'/tech/typescript.svg',source:'IGNIS · classsync · AstroCare'},
 {name:'React',category:'Web & Frontend',icon:'/tech/react.svg',source:'Portfolio · Interactive UI'},
 {name:'Tailwind CSS',category:'Web & Frontend',icon:'/tech/tailwindcss.svg',source:'Modern UI Styling'},
 {name:'Vite',category:'Web & Frontend',icon:'/tech/vite.svg',source:'Frontend Build Tooling'},
 {name:'Java',category:'Backend & Languages',icon:'/tech/java.svg',source:'Enterprise Java (A+) · studenthub'},
 {name:'Jakarta / JSP',category:'Backend & Languages',icon:'/tech/tomcat.svg',source:'studenthub · Java Web'},
 {name:'C++',category:'Backend & Languages',icon:'/tech/cplusplus.svg',source:'Cornerstone Project (A)'},
 {name:'Python',category:'Backend & Languages',icon:'/tech/python.svg',source:'Software & AI Practice'},
 {name:'Node.js',category:'Backend & Languages',icon:'/tech/nodejs.svg',source:'JS Server & Tooling'},
 {name:'Google Gemini',category:'AI, Logic & Data',icon:'/tech/gemini.svg',source:'FoodWasteAI · Generative AI'},
 {name:'Claude',category:'AI, Logic & Data',icon:'/tech/claude.svg',source:'Anthropic AI Assistant'},
 {name:'Codex',category:'AI, Logic & Data',icon:'/tech/codex.svg',source:'OpenAI Coding Agent'},
 {name:'Antigravity',category:'AI, Logic & Data',icon:'/tech/antigravity.svg',source:'Google Agentic Dev Platform'},
 {name:'SWI-Prolog',category:'AI, Logic & Data',icon:'/tech/prolog.svg',source:'FoodWasteAI · Logic Reasoning'},
 {name:'MySQL',category:'AI, Logic & Data',icon:'/tech/mysql.svg',source:'DBMS (A−) · studenthub · FoodWasteAI'},
 {name:'Supabase',category:'AI, Logic & Data',icon:'/tech/supabase.svg',source:'Postgres Database & Auth'},
 {name:'AI & ML',category:'AI, Logic & Data',icon:'/tech/aiml.svg',source:'Artificial Intelligence (A)'},
 {name:'Data Structures & Algorithms',category:'CS Foundations',icon:'/tech/dsa.svg',source:'UIT Semester III (A)'},
 {name:'Computer Architecture',category:'CS Foundations',icon:'/tech/architecture.svg',source:'Digital Systems & Arch (A+)'},
 {name:'UML & System Design',category:'CS Foundations',icon:'/tech/uml.svg',source:'Software Analysis & Design (A+)'},
 {name:'Computer Networking',category:'CS Foundations',icon:'/tech/networking.svg',source:'Network Design & Eng (A)'},
 {name:'HCI & Info Security',category:'CS Foundations',icon:'/tech/security.svg',source:'Security & UX (A)'},
 {name:'Linux / OS',category:'Tools & Cloud',icon:'/tech/linux.svg',source:'OS Fundamentals (A)'},
 {name:'Bash / CLI',category:'Tools & Cloud',icon:'/tech/bash.svg',source:'Terminal & Dev Workflows'},
 {name:'Git',category:'Tools & Cloud',icon:'/tech/git.svg',source:'Version Control'},
 {name:'GitHub',category:'Tools & Cloud',icon:'/tech/github.svg',source:'Team & Open-Source Repos'},
 {name:'Vercel',category:'Tools & Cloud',icon:'/tech/vercel.svg',source:'Cloud Web Deployment'},
 {name:'Render',category:'Tools & Cloud',icon:'/tech/render.svg',source:'Cloud App Hosting'},
 {name:'Railway',category:'Tools & Cloud',icon:'/tech/railway.svg',source:'Full-Stack Cloud Deploy'},
 {name:'VS Code',category:'Tools & Cloud',icon:'/tech/vscode.svg',source:'Code Editor & Debugging'},
 {name:'Cursor',category:'Tools & Cloud',icon:'/tech/cursor.svg',source:'AI-First Code Editor'},
 {name:'Canva',category:'Tools & Cloud',icon:'/tech/canva.svg',source:'Graphics & Visual Design'},
];
type Certificate = typeof certificates[number];
type PageId = 'home'|'projects'|'about'|'skills'|'education'|'achievements'|'contact';
const pageOrder: {id:PageId;label:string;path:string;num:string;summary:string}[] = [
 {id:'home',label:'Home',path:'/',num:'00',summary:'Overview & introduction'},
 {id:'projects',label:'Projects',path:'/projects',num:'01',summary:'6 public & team repositories'},
 {id:'about',label:'About',path:'/about',num:'02',summary:'Story, values & portrait'},
 {id:'skills',label:'Skills',path:'/skills',num:'03',summary:'35 tech skills with official icons'},
 {id:'education',label:'Education',path:'/education',num:'04',summary:'UIT Year 03, GPA & 4 semesters'},
 {id:'achievements',label:'Achievements',path:'/achievements',num:'05',summary:'6 certificates & recognitions'},
 {id:'contact',label:'Contact',path:'/contact',num:'06',summary:'Email, GitHub & social profiles'},
];
const validPages = new Set<PageId>(pageOrder.map(p=>p.id));
function resolvePage():PageId{
 const seg=window.location.pathname.replace(/^\/+|\/+$/g,'').toLowerCase() as PageId;
 if(validPages.has(seg)) return seg;
 const hash=window.location.hash.replace(/^#\/?/,'').toLowerCase() as PageId;
 if(validPages.has(hash)) return hash;
 return 'home';
}
function App(){
 const [page,setPage]=useState<PageId>(()=>resolvePage());
 const [menu,setMenu]=useState(false),[filter,setFilter]=useState('All projects'),[skillFilter,setSkillFilter]=useState<string>('All skills'),[active,setActive]=useState<Certificate|null>(null),[copied,setCopied]=useState(false),[scrolled,setScrolled]=useState(false),[showTop,setShowTop]=useState(false),[openTerms,setOpenTerms]=useState<Record<string,boolean>>({});
 const dialog=useRef<HTMLDialogElement>(null);
 const progressBar=useRef<HTMLDivElement>(null);
 const heroArt=useRef<HTMLDivElement>(null);
 const smoothTarget=useRef<number|null>(null);
 const smoothAnimating=useRef(false);
 const activeRef=useRef<Certificate|null>(null);
 activeRef.current=active;
 const navigate=(next:PageId,e?:React.MouseEvent)=>{
  if(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0) return;e.preventDefault();}
  setMenu(false);
  smoothTarget.current=null;
  smoothAnimating.current=false;
  const destPath=next==='home'?'/':`/${next}`;
  if(window.location.pathname!==destPath||window.location.hash){window.history.pushState(null,'',destPath);}
  if(next===page){window.scrollTo({top:0,behavior:'smooth'});return;}
  setPage(next);
  window.scrollTo({top:0,behavior:'instant'});
 };
 useEffect(()=>{
  const hash=window.location.hash.replace(/^#\/?/,'').toLowerCase() as PageId;
  if(window.location.pathname==='/'&&validPages.has(hash)&&hash!=='home'){
   window.history.replaceState(null,'',`/${hash}`);
   setPage(hash);
  }
  const onPop=()=>{
   smoothTarget.current=null;
   smoothAnimating.current=false;
   setMenu(false);
   setPage(resolvePage());
   window.scrollTo({top:0,behavior:'instant'});
  };
  window.addEventListener('popstate',onPop);
  return ()=>window.removeEventListener('popstate',onPop);
 },[]);
 useEffect(()=>{
  const meta=pageOrder.find(p=>p.id===page);
  document.title=page==='home'?'Phyo Pyae Pyae Khaing · Developer Portfolio':`${meta?.label} · Phyo Pyae Pyae Khaing`;
 },[page]);
 useEffect(()=>{if(active) dialog.current?.showModal();else dialog.current?.close();},[active]);
 useEffect(()=>{if(!active)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=previous}},[active]);
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes=Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if(reduced||!('IntersectionObserver' in window)){nodes.forEach(el=>el.classList.add('is-visible'));return;}
  const io=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}});},{threshold:0.06,rootMargin:'0px 0px -24px 0px'});
  nodes.forEach(el=>io.observe(el));
  return ()=>io.disconnect();
 },[page]);
 useEffect(()=>{
  let raf=0;
  const update=()=>{
   raf=0;
   const y=window.scrollY;
   setScrolled(prev=>(y>24)!==prev?y>24:prev);
   setShowTop(prev=>(y>420)!==prev?y>420:prev);
   const max=document.documentElement.scrollHeight-window.innerHeight;
   if(progressBar.current){progressBar.current.style.transform=`scaleX(${max>20?Math.min(1,Math.max(0,y/max)):0})`;}
  };
  const onScroll=()=>{if(!raf) raf=window.requestAnimationFrame(update);};
  update();
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll,{passive:true});
  return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);if(raf) window.cancelAnimationFrame(raf);};
 },[page]);
 useEffect(()=>{
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=window.matchMedia('(pointer: coarse)').matches;
  if(reduced||coarse) return;
  let rafId=0,lastTime=0,currentY=window.scrollY;
  const maxScroll=()=>Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
  const stop=()=>{if(rafId){window.cancelAnimationFrame(rafId);rafId=0;}smoothAnimating.current=false;smoothTarget.current=null;};
  const step=(now:number)=>{
   const dt=lastTime?Math.min(0.05,(now-lastTime)/1000):0.016;
   lastTime=now;
   if(smoothTarget.current===null){stop();return;}
   const target=Math.min(maxScroll(),Math.max(0,smoothTarget.current));
   smoothTarget.current=target;
   const diff=target-currentY;
   if(Math.abs(diff)<0.5){
    currentY=target;
    window.scrollTo({top:target,behavior:'instant'});
    stop();
    return;
   }
   const ease=1-Math.exp(-11.5*dt);
   currentY+=diff*ease;
   window.scrollTo({top:currentY,behavior:'instant'});
   rafId=window.requestAnimationFrame(step);
  };
  const startScrollTo=(nextTarget:number)=>{
   const clamped=Math.min(maxScroll(),Math.max(0,nextTarget));
   if(!smoothAnimating.current){currentY=window.scrollY;lastTime=0;}
   smoothTarget.current=clamped;
   if(!smoothAnimating.current){smoothAnimating.current=true;rafId=window.requestAnimationFrame(step);}
  };
  const onWheel=(e:WheelEvent)=>{
   if(e.ctrlKey||e.metaKey||activeRef.current) return;
   const el=e.target as HTMLElement|null;
   if(el&&el.closest('dialog')) return;
   const delta=e.deltaMode===1?e.deltaY*32:e.deltaMode===2?e.deltaY*window.innerHeight:e.deltaY;
   if(Math.abs(delta)<1) return;
   e.preventDefault();
   const base=smoothAnimating.current&&smoothTarget.current!==null?smoothTarget.current:window.scrollY;
   startScrollTo(base+delta*0.95);
  };
  const onAnchorClick=(e:MouseEvent)=>{
   const link=(e.target as HTMLElement|null)?.closest('a[href^="#"]') as HTMLAnchorElement|null;
   if(!link) return;
   const id=link.getAttribute('href')?.slice(1);
   if(!id) return;
   const targetEl=id==='top'?null:document.getElementById(id);
   if(id!=='top'&&!targetEl) return;
   e.preventDefault();
   const dest=id==='top'?0:Math.max(0,targetEl!.getBoundingClientRect().top+window.scrollY-104);
   startScrollTo(dest);
  };
  const onExternalInput=()=>{if(smoothAnimating.current) stop();};
  window.addEventListener('wheel',onWheel,{passive:false});
  document.addEventListener('click',onAnchorClick);
  window.addEventListener('mousedown',onExternalInput,{passive:true});
  window.addEventListener('keydown',onExternalInput,{passive:true});
  window.addEventListener('touchstart',onExternalInput,{passive:true});
  return ()=>{
   stop();
   window.removeEventListener('wheel',onWheel);
   document.removeEventListener('click',onAnchorClick);
   window.removeEventListener('mousedown',onExternalInput);
   window.removeEventListener('keydown',onExternalInput);
   window.removeEventListener('touchstart',onExternalInput);
  };
 },[]);
 function onHeroMove(e:React.MouseEvent<HTMLDivElement>){
  if(!heroArt.current||window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r=heroArt.current.getBoundingClientRect();
  const mx=((e.clientX-r.left)/r.width-0.5)*2;
  const my=((e.clientY-r.top)/r.height-0.5)*2;
  heroArt.current.style.setProperty('--mx',mx.toFixed(3));
  heroArt.current.style.setProperty('--my',my.toFixed(3));
 }
 function onHeroLeave(){
  if(!heroArt.current) return;
  heroArt.current.style.setProperty('--mx','0');
  heroArt.current.style.setProperty('--my','0');
 }
 function onCardMove(e:React.MouseEvent<HTMLElement>){
  const el=e.currentTarget;
  const r=el.getBoundingClientRect();
  el.style.setProperty('--px',`${Math.round(e.clientX-r.left)}px`);
  el.style.setProperty('--py',`${Math.round(e.clientY-r.top)}px`);
 }
 function toggleTerm(sem:string){setOpenTerms(prev=>({...prev,[sem]:!prev[sem]}));}
 async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),2500)}catch{window.location.href=`mailto:${email}`}}
 const nav:[string,PageId][]=[['Home','home'],['Projects','projects'],['About','about'],['Skills','skills'],['Education','education'],['Achievements','achievements']];
 const stagger=(n:number)=>({'--stagger':n} as React.CSSProperties);
 const idx=pageOrder.findIndex(p=>p.id===page);
 const prevPage=idx>0?pageOrder[idx-1]:null;
 const nextPage=idx<pageOrder.length-1?pageOrder[idx+1]:pageOrder[0];
 return <><a className="skip" href="#main">Skip to content</a><div className="scroll-progress" aria-hidden="true"><div ref={progressBar}/></div><div className="ambient" aria-hidden="true"/>
 <header className={`nav-wrap${scrolled?' is-scrolled':''}`}><nav className="nav glass" aria-label="Main navigation"><a href="/" className="brand" aria-label="Home" onClick={e=>navigate('home',e)}><img className="brand-logo" src="/pppk-logo.png" alt="Pppk" width="110" height="42" decoding="async"/></a><div className="desktop-nav">{nav.map(([n,id])=><a key={id} href={id==='home'?'/':`/${id}`} className={page===id?'active':''} aria-current={page===id?'page':undefined} onClick={e=>navigate(id,e)}>{n}</a>)}</div><a className={`nav-contact${page==='contact'?' active':''}`} href="/contact" aria-current={page==='contact'?'page':undefined} onClick={e=>navigate('contact',e)}>Let’s connect <ArrowUpRight size={15}/></a><button className="menu-button" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav>{menu&&<div id="mobile-nav" className="mobile-nav glass">{[...nav,['Contact','contact' as PageId] as [string,PageId]].map(([n,id])=><a key={id} href={id==='home'?'/':`/${id}`} className={page===id?'active':''} aria-current={page===id?'page':undefined} onClick={e=>navigate(id,e)}>{n}<ArrowUpRight size={18}/></a>)}</div>}</header>
 <main id="main" className="page-stage" key={page}>
 {page==='home'&&<>
 <section id="home" className="hero section-shell"><div className="hero-copy"><div className="eyebrow availability hero-in" style={stagger(0)}><span/> OPEN TO HACKATHON COLLABORATIONS</div><p className="hello hero-in" style={stagger(1)}>Hi there, I’m Phyo <span aria-hidden="true">✧</span></p><h1 className="hero-in" style={stagger(2)}>Phyo Pyae<br/>Pyae Khaing<span className="period">.</span></h1><p className="hero-role hero-in" style={stagger(3)}>Developer by curiosity.<br/><em>Problem solver at heart.</em></p><p className="intro hero-in" style={stagger(4)}>Third-year UIT student building for the web, exploring software development, and finding possibilities in AI & ML.</p><div className="hero-actions hero-in" style={stagger(5)}><a className="button primary" href="/projects" onClick={e=>navigate('projects',e)}>Explore my work <ArrowUpRight size={18}/></a><a className="button secondary" href={github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a></div><div className="hero-meta hero-in" style={stagger(6)}><img className="uit-icon-inline" src="/uit-logo.png" alt="UIT logo" width="22" height="20" decoding="async"/> University of Information Technology <span>•</span> Year 03</div></div>
 <div ref={heroArt} className="hero-art hero-art-in" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave} aria-label="Decorative illustration of code, creativity and curiosity"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="art-star star-one">✳</span><span className="art-star star-two">✧</span><div className="floating-label label-top glass"><span className="dot"/> A little code. A lot of curiosity.</div><div className="code-window glass"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>hello-world.tsx</span><Code2 size={15}/></div><div className="code-content"><span className="line-number">01</span><div><span className="code-purple">const</span> developer = {'{'}</div><span className="line-number">02</span><div> name: <span className="code-rose">'Phyo'</span>,</div><span className="line-number">03</span><div> focus: [<span className="code-rose">'Web'</span>, <span className="code-rose">'AI/ML'</span>],</div><span className="line-number">04</span><div> mindset: <span className="code-rose">'Always learning'</span>,</div><span className="line-number">05</span><div> next: <span className="code-purple">'Let’s build together'</span></div><span className="line-number">06</span><div>{'}'};</div><span className="line-number">07</span><div className="code-comment">// ideas → meaningful experiences<span className="code-caret" aria-hidden="true"/></div></div><div className="window-footer"><span>✦ made with curiosity</span><span>TypeScript</span></div></div><div className="floating-label label-bottom glass"><div className="label-icon"><Sparkles size={22}/></div><div><strong>Always a work in progress</strong><span>Learning. Building. Becoming.</span></div></div><div className="small-orb"/></div>
 <a className="scroll-hint hero-in" style={stagger(7)} href="#explore"><ArrowDown size={15}/> Explore each chapter</a></section>
 <div className="credentials-strip section-shell"><div data-reveal="" style={stagger(0)}><strong>03<span> / year</span></strong><p>At the University of Information Technology</p></div><div data-reveal="" style={stagger(1)}><strong>Web <span>+ Software</span></strong><p>Building useful digital experiences</p></div><div data-reveal="" style={stagger(2)}><strong>AI <span>& Machine Learning</span></strong><p>A field I’m excited to explore</p></div></div>
 <section id="explore" className="section-shell chapters-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow">PORTFOLIO CHAPTERS</p><h2>Browse by <em>section.</em></h2></div><p>Each part of my portfolio lives on its own focused page.</p></div><div className="chapter-grid">{pageOrder.filter(p=>p.id!=='home').map((c,i)=><a key={c.id} href={c.path} className="chapter-card glass glow-card" data-reveal="" style={stagger(i)} onMouseMove={onCardMove} onClick={e=>navigate(c.id,e)}><div className="chapter-top"><span className="eyebrow">{c.num}</span><ArrowUpRight size={17}/></div><h3>{c.label}</h3><p>{c.summary}</p></a>)}</div></section>
 </>}
 {page==='projects'&&<section id="projects" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Ideas, turned into <em>code.</em></h2></div><p>A growing collection of personal projects,<br className="desktop-only"/> university work and team collaborations.</p></div><div className="filters" role="group" aria-label="Filter projects" data-reveal="" style={stagger(1)}>{['All projects','Web development','Software & AI','Collaboration'].map(f=><button key={f} className={filter===f?'selected':''} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div data-reveal=""><div className="project-grid" key={filter}>{projects.filter(p=>filter==='All projects'||p.type===filter).map((p,i)=><article className="project-card glass card-enter glow-card" style={stagger(i)} key={p.name} onMouseMove={onCardMove}><div className={`project-art ${p.color}`} aria-hidden="true"><div className="art-grid"/><p className="art-index">{p.type}</p><p.icon size={64} strokeWidth={1}/><span className="project-art-name">{p.name==='IGNIS-NASA-2026'?'IGNIS':p.name}</span><span className="art-spark">✧</span></div><div className="project-body"><div className="project-title"><h3>{p.name}</h3><a href={`https://github.com/${p.owner}/${p.name}`} target="_blank" rel="noreferrer" aria-label={`View ${p.name} source on GitHub`}><ArrowUpRight size={22}/></a></div><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-note"><Github size={13}/>{p.note}</div></div></article>)}</div></div><p className="source-note" data-reveal="">Project summaries follow public repositories. Collaboration credits verified against GitHub contributor listings · 18 Nov 2026.</p><a className="text-link" data-reveal="" href={`${github}?tab=repositories`} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></section>}
 {page==='about'&&<section id="about" className="section-shell page-section about-grid"><div className="about-art glass" data-reveal="left"><span className="eyebrow">THE PERSON BEHIND THE CODE</span><img className="portrait" src="/phyo-portrait.png" alt="Portrait of Phyo Pyae Pyae Khaing" width="1159" height="1159" loading="lazy" decoding="async"/><p>Curious mind.<br/><em>Thoughtful builder.</em></p><span className="about-signature">Phyo Pyae Pyae Khaing</span></div><div className="about-copy" data-reveal="right"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>Learning by doing.<br/><em>Growing by building.</em></h2><p>I’m Phyo, a third-year student at the University of Information Technology. My interests sit at the intersection of web development, software engineering and artificial intelligence.</p><p>University assignments, mini projects, personal work and team projects are all part of how I learn. I’m looking for hackathon opportunities to bring that curiosity into a team and work on meaningful problems.</p><div className="about-values"><span><Code2 size={18}/> Web & software</span><span><Sparkles size={18}/> AI/ML curiosity</span><span><Braces size={18}/> Learning through projects</span></div></div></section>}
 {page==='skills'&&<section id="skills" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>Tools for the <em>next idea.</em></h2></div><p>Languages, frameworks, databases and CS foundations<br className="desktop-only"/> drawn from my UIT coursework and projects.</p></div><div className="filters" role="group" aria-label="Filter tech skills" data-reveal="" style={stagger(1)}>{skillCategories.map(c=><button key={c} className={skillFilter===c?'selected':''} aria-pressed={skillFilter===c} onClick={()=>setSkillFilter(c)}>{c}</button>)}</div><div data-reveal=""><div className="tech-grid" key={skillFilter}>{techSkills.filter(s=>skillFilter==='All skills'||s.category===skillFilter).map((s,i)=><article className="tech-tile glass glow-card card-enter" style={stagger(Math.min(i,10))} key={s.name} onMouseMove={onCardMove}><div className="tech-icon-box"><img src={s.icon} alt="" width="28" height="28" loading="lazy" decoding="async"/></div><div className="tech-meta"><h3>{s.name}</h3><small>{s.source}</small></div></article>)}</div></div></section>}
 {page==='education'&&<section id="education" className="section-shell page-section education"><div data-reveal="left"><p className="eyebrow">04 / THE FOUNDATION</p><h2>A journey of<br/><em>continuous learning.</em></h2></div><div className="timeline"><article data-reveal="" style={stagger(0)}><span className="timeline-dot"/><div className="uit-heading"><img className="uit-logo" src="/uit-logo.png" alt="University of Information Technology logo" width="44" height="40" decoding="async"/><div><p className="eyebrow">CURRENT · THIRD YEAR</p><h3>University of Information Technology</h3></div></div><p>Continuing my studies at UIT, with a focus on building skills through university and personal projects.</p></article><article data-reveal="" style={stagger(1)}><span className="timeline-dot"/><p className="eyebrow">2025–2026 · SECOND YEAR · SEMESTER IV</p><h3>Computer Science and Technology</h3><div className="academic-metrics"><div><strong>3.95 <span>/ 4.00</span></strong><p>Semester GPA</p></div><div><strong>3.85 <span>/ 4.00</span></strong><p>Cumulative GPA</p></div></div><p>21 credit units completed this semester. Course highlights: A in Artificial Intelligence; A+ in Linear Algebra, Computer Architecture and Organization, and Enterprise Applications Development using Java (Keystone Project).</p><p className="record-note">From my UIT Semester IV academic record. Cumulative GPA is as reported on that record.</p><div className="coursework"><h4>Coursework & results</h4><p className="coursework-intro">Four semesters of foundations in computing, mathematics and software development.</p>{academicResults.map(term=>{const isOpen=Boolean(openTerms[term.semester]);return <div className={`accordion-item${isOpen?' is-open':''}`} key={term.semester}><button type="button" className="accordion-trigger" aria-expanded={isOpen} onClick={()=>toggleTerm(term.semester)}><span>{term.semester}<small>{term.year}</small></span><span className="expand-mark" aria-hidden="true">+</span></button><div className="accordion-panel"><div className="accordion-inner"><dl>{term.courses.map(([course,grade])=><div className="course-row" key={course}><dt>{course}</dt><dd><span className="sr-only">Grade </span>{grade}</dd></div>)}</dl></div></div></div>;})}</div></article><article data-reveal="" style={stagger(2)}><span className="timeline-dot"/><p className="eyebrow">SECONDARY EDUCATION</p><h3>Grade 12 · Three distinctions</h3><p>Completed Grade 12 with three distinctions, and received a Yangon Region academic award.</p></article></div></section>}
 {page==='achievements'&&<section id="achievements" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow">05 / MILESTONES</p><h2>Learning, with a little <em>recognition.</em></h2></div><p>Qualifications, participation<br/> and moments along the way.</p></div><div className="certificate-grid">{certificates.map((c,i)=><button className={`certificate glass glow-card cert-${i}`} data-reveal="" style={stagger(i)} key={c.title} onMouseMove={onCardMove} onClick={()=>setActive(c)} aria-label={`View ${c.title} certificate`}><div className="certificate-image"><img src={`/certificates/${c.image}`} alt="" loading="lazy" decoding="async"/><span>View certificate <ArrowUpRight size={15}/></span></div><div className="certificate-body"><p className="eyebrow">{c.status}</p><h3>{c.title}</h3><p>{c.org}</p><span>{c.date}</span></div></button>)}</div></section>}
 {page==='contact'&&<>
 <section id="contact" className="section-shell contact page-section"><span className="contact-star" data-reveal="scale" aria-hidden="true">✳</span><p className="eyebrow" data-reveal="">06 / LET’S MAKE SOMETHING MEANINGFUL</p><h2 data-reveal="" style={stagger(1)}>Your next teammate<br/>might be <em>right here.</em></h2><p data-reveal="" style={stagger(2)}>Have a hackathon idea or a project in mind?<br/>I’d love to hear about it.</p><div data-reveal="" style={stagger(3)}><a className="button primary" href={`mailto:${email}`}><Mail size={18}/> Say hello <ArrowUpRight size={18}/></a></div><div className="email-row" data-reveal="" style={stagger(4)}><a href={`mailto:${email}`}>{email}</a><button className={copied?'is-copied':''} onClick={copyEmail} aria-label="Copy email address">{copied?<Check size={16}/>:<Copy size={16}/>}</button></div><span className="copy-status" role="status">{copied?'Email copied!':''}</span><div className="social-links" aria-label="Social profiles"><a data-reveal="" style={stagger(0)} href="https://www.linkedin.com/in/phyo-pyae-pyae-khaing-1a4b59428" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/><span>LinkedIn<small>Let’s connect professionally</small></span><ArrowUpRight size={16}/></a><a data-reveal="" style={stagger(1)} href="https://www.facebook.com/share/1P7tW4d1VL/" target="_blank" rel="noopener noreferrer"><Facebook size={18}/><span>Facebook<small>Phyo Pyae Pyae Khaing</small></span><ArrowUpRight size={16}/></a><a data-reveal="" style={stagger(2)} href="https://t.me/CigaretheVisualiser" target="_blank" rel="noopener noreferrer"><Send size={18}/><span>Telegram<small>@CigaretheVisualiser</small></span><ArrowUpRight size={16}/></a><a data-reveal="" style={stagger(3)} href={github} target="_blank" rel="noopener noreferrer"><Github size={18}/><span>GitHub<small>Explore my repositories</small></span><ArrowUpRight size={16}/></a><a data-reveal="" style={stagger(4)} href="viber://chat?number=%2B959666912842"><MessageCircle size={18}/><span>Viber<small>Open a chat in the Viber app</small></span><ArrowUpRight size={16}/></a><a data-reveal="" style={stagger(5)} href="tel:+959666912842"><Phone size={18}/><span>Phone<small>+95 9 666 912 842</small></span><ArrowUpRight size={16}/></a></div></section>
 <section id="github" className="section-shell github-section github-compact glass" data-reveal="scale"><div className="github-icon"><Github size={34}/></div><div><p className="eyebrow">BUILDING IN THE OPEN</p><h2>The story continues <em>on GitHub.</em></h2><p>Explore the source, follow my progress, or find something we can build together.</p></div><a className="button secondary" href={github} target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={18}/></a></section>
 </>}
 {page!=='home'&&<nav className="section-shell page-pager" aria-label="Page navigation">
  {prevPage?<a href={prevPage.path} className="pager-link glass" onClick={e=>navigate(prevPage.id,e)}><ArrowLeft size={16}/><span><small>Previous</small><strong>{prevPage.label}</strong></span></a>:<span/>}
  <a href={nextPage.path} className="pager-link pager-next glass" onClick={e=>navigate(nextPage.id,e)}><span><small>{nextPage.id==='home'?'Back to':'Next'}</small><strong>{nextPage.label}</strong></span><ArrowRight size={16}/></a>
 </nav>}
 </main><footer className="section-shell"><a className="brand" href="/" aria-label="Home" onClick={e=>navigate('home',e)}><img className="brand-logo brand-logo-footer" src="/pppk-logo.png" alt="Pppk" width="94" height="36" decoding="async"/></a><p>Made with care & a curious mind.</p><a href="#top">Back to top ↑</a></footer>
 <a href="#top" className={`back-to-top glass${showTop?' is-shown':''}`} aria-label="Back to top" tabIndex={showTop?0:-1}><ArrowUp size={18}/></a>
 <dialog ref={dialog} onCancel={()=>setActive(null)} onClick={e=>{if(e.target===e.currentTarget)setActive(null)}} aria-labelledby="certificate-title"><button className="dialog-close" onClick={()=>setActive(null)} aria-label="Close certificate"><X/></button>{active&&<><div className="dialog-description"><Award size={22}/><h2 id="certificate-title">{active.title}</h2><p>{active.detail}</p></div><img src={`/certificates/${active.image}`} alt={`${active.title} certificate awarded to Phyo Pyae Pyae Khaing`} decoding="async"/></>}</dialog></>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
