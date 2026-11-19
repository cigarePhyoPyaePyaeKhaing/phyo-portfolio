import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowUp, ArrowLeft, ArrowRight, Github, Mail, Menu, X, Code2, Sparkles, GraduationCap, Award, Braces, Orbit, Leaf, Layers, Server, Check, Copy, Loader2, Send, Linkedin, Facebook, Phone, MessageCircle, Home, FolderGit2, User, Cpu, Trophy, Globe, BrainCircuit, Users, Rocket, ShieldCheck, LayoutGrid, Terminal, BookOpen, Cloud, Calendar, TrendingUp, BookMarked, Medal, BadgeCheck, Building2, Heart, Compass, Lightbulb, Search, ChevronLeft, ChevronRight, ChevronsUpDown } from 'lucide-react';
import './styles.css';

const username = 'cigarePhyoPyaePyaeKhaing';
const github = `https://github.com/${username}`;
const email = 'phyopyaekhaing2006@gmail.com';
const projects = [
 {name:'studenthub',owner:username,type:'Software & AI',language:'Java',icon:GraduationCap,color:'peach',liveUrl:'https://httpsstudenthub.us/',description:'An interactive digital bulletin board for UIT students, with announcements, deadlines and community discussions.',tags:['Java','Jakarta / JSP','MySQL'],note:'Team project · repository contributor'},
 {name:'IGNIS-NASA-2026',owner:'Harry-Pyae',type:'Collaboration',language:'TypeScript',icon:Orbit,color:'space',liveUrl:'https://ignis-nasa-2026.vercel.app',description:'Evidence-first fire-safety intelligence for human spaceflight, built around NASA microgravity combustion research.',tags:['TypeScript','NASA Space Apps','Team project'],note:'Verified repository contributor'},
 {name:'pixelpop-server',owner:username,type:'Web development',language:'JavaScript',icon:Server,color:'pink',liveUrl:'https://pixelpop-server.onrender.com/',description:'A JavaScript server repository. Browse the source to explore the implementation and development history.',tags:['JavaScript','Server'],note:'Repository owner & contributor'},
 {name:'FoodWasteAI', owner:username, type:'Software & AI', language:'Java', icon:Leaf, color:'sage', liveUrl:'https://foodwasteai-s56f.onrender.com/', description:'Food waste prediction, prevention and redistribution, combining a Java backend with Gemini and Prolog reasoning.', tags:['Java','MySQL','Gemini','Prolog'], note:'Repository contributor'},
 {name:'classsync-portal',owner:username,type:'Web development',language:'TypeScript',icon:Layers,color:'lavender',liveUrl:'https://classsync-portal.vercel.app',description:'A TypeScript project in my development portfolio. Explore the repository for its source and current progress.',tags:['TypeScript','Web'],note:'Repository owner & contributor'},
 {name:'AstroCareAI',owner:'Harry-Pyae',type:'Collaboration',language:'TypeScript',icon:Sparkles,color:'blue',liveUrl:'https://astro-care-ai.vercel.app',description:'A collaborative NASA hackathon practice-round project, developed in TypeScript.',tags:['TypeScript','Hackathon practice','Team project'],note:'Verified repository contributor'},
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
 {name:'HTML5',category:'Web & Frontend',icon:'/tech/html5.svg'},
 {name:'CSS3',category:'Web & Frontend',icon:'/tech/css3.svg'},
 {name:'JavaScript',category:'Web & Frontend',icon:'/tech/javascript.svg'},
 {name:'TypeScript',category:'Web & Frontend',icon:'/tech/typescript.svg'},
 {name:'React',category:'Web & Frontend',icon:'/tech/react.svg'},
 {name:'Tailwind CSS',category:'Web & Frontend',icon:'/tech/tailwindcss.svg'},
 {name:'Vite',category:'Web & Frontend',icon:'/tech/vite.svg'},
 {name:'Java',category:'Backend & Languages',icon:'/tech/java.svg'},
 {name:'Jakarta / JSP',category:'Backend & Languages',icon:'/tech/tomcat.svg'},
 {name:'C++',category:'Backend & Languages',icon:'/tech/cplusplus.svg'},
 {name:'Python',category:'Backend & Languages',icon:'/tech/python.svg'},
 {name:'Node.js',category:'Backend & Languages',icon:'/tech/nodejs.svg'},
 {name:'Google Gemini',category:'AI, Logic & Data',icon:'/tech/gemini.svg'},
 {name:'Claude',category:'AI, Logic & Data',icon:'/tech/claude.svg'},
 {name:'Codex',category:'AI, Logic & Data',icon:'/tech/codex.svg'},
 {name:'Antigravity',category:'AI, Logic & Data',icon:'/tech/antigravity.svg'},
 {name:'SWI-Prolog',category:'AI, Logic & Data',icon:'/tech/prolog.svg'},
 {name:'MySQL',category:'AI, Logic & Data',icon:'/tech/mysql.svg'},
 {name:'Supabase',category:'AI, Logic & Data',icon:'/tech/supabase.svg'},
 {name:'AI & ML',category:'AI, Logic & Data',icon:'/tech/aiml.svg'},
 {name:'Data Structures & Algorithms',category:'CS Foundations',icon:'/tech/dsa.svg'},
 {name:'Computer Architecture',category:'CS Foundations',icon:'/tech/architecture.svg'},
 {name:'UML & System Design',category:'CS Foundations',icon:'/tech/uml.svg'},
 {name:'Computer Networking',category:'CS Foundations',icon:'/tech/networking.svg'},
 {name:'HCI & Info Security',category:'CS Foundations',icon:'/tech/security.svg'},
 {name:'Linux / OS',category:'Tools & Cloud',icon:'/tech/linux.svg'},
 {name:'Bash / CLI',category:'Tools & Cloud',icon:'/tech/bash.svg'},
 {name:'Git',category:'Tools & Cloud',icon:'/tech/git.svg'},
 {name:'GitHub',category:'Tools & Cloud',icon:'/tech/github.svg'},
 {name:'Vercel',category:'Tools & Cloud',icon:'/tech/vercel.svg'},
 {name:'Render',category:'Tools & Cloud',icon:'/tech/render.svg'},
 {name:'Railway',category:'Tools & Cloud',icon:'/tech/railway.svg'},
 {name:'VS Code',category:'Tools & Cloud',icon:'/tech/vscode.svg'},
 {name:'Cursor',category:'Tools & Cloud',icon:'/tech/cursor.svg'},
 {name:'Canva',category:'Tools & Cloud',icon:'/tech/canva.svg'},
];
type Certificate = typeof certificates[number];
type PageId = 'home'|'projects'|'about'|'skills'|'education'|'achievements'|'contact';
const pageOrder: {id:PageId;label:string;path:string;num:string;summary:string;icon:React.ComponentType<{size?:number}>}[] = [
 {id:'home',label:'Home',path:'/',num:'00',summary:'Overview & introduction',icon:Home},
 {id:'projects',label:'Projects',path:'/projects',num:'01',summary:'6 public & team repositories',icon:FolderGit2},
 {id:'about',label:'About',path:'/about',num:'02',summary:'Story, values & portrait',icon:User},
 {id:'skills',label:'Skills',path:'/skills',num:'03',summary:'35 tech skills with official icons',icon:Cpu},
 {id:'education',label:'Education',path:'/education',num:'04',summary:'UIT Year 03, GPA & 4 semesters',icon:GraduationCap},
 {id:'achievements',label:'Achievements',path:'/achievements',num:'05',summary:'6 certificates & recognitions',icon:Trophy},
 {id:'contact',label:'Contact',path:'/contact',num:'06',summary:'Email, GitHub & social profiles',icon:Mail},
];
const projectTagSvg: Record<string,string> = {
 'Java':'/tech/java.svg',
 'Jakarta / JSP':'/tech/tomcat.svg',
 'MySQL':'/tech/mysql.svg',
 'TypeScript':'/tech/typescript.svg',
 'JavaScript':'/tech/javascript.svg',
 'Gemini':'/tech/gemini.svg',
 'Prolog':'/tech/prolog.svg',
};
function renderTagIcon(tag:string){
 if(projectTagSvg[tag]) return <img className="tag-svg" src={projectTagSvg[tag]} alt="" width="13" height="13" loading="lazy" decoding="async"/>;
 if(tag==='NASA Space Apps') return <Rocket size={12}/>;
 if(tag==='Team project') return <Users size={12}/>;
 if(tag==='Server') return <Server size={12}/>;
 if(tag==='Web') return <Globe size={12}/>;
 if(tag==='Hackathon practice') return <Sparkles size={12}/>;
 return <Code2 size={12}/>;
}
const projectTabIcons: Record<string,React.ReactNode> = {
 'All projects':<LayoutGrid size={13}/>,
 'Web development':<Globe size={13}/>,
 'Software & AI':<BrainCircuit size={13}/>,
 'Collaboration':<Users size={13}/>,
};
const skillTabIcons: Record<string,React.ReactNode> = {
 'All skills':<LayoutGrid size={13}/>,
 'Web & Frontend':<Globe size={13}/>,
 'Backend & Languages':<Terminal size={13}/>,
 'AI, Logic & Data':<BrainCircuit size={13}/>,
 'CS Foundations':<BookOpen size={13}/>,
 'Tools & Cloud':<Cloud size={13}/>,
};
const validPages = new Set<PageId>(pageOrder.map(p=>p.id));
function resolvePage():PageId{
 const seg=window.location.pathname.replace(/^\/+|\/+$/g,'').toLowerCase() as PageId;
 if(validPages.has(seg)) return seg;
 const hash=window.location.hash.replace(/^#\/?/,'').toLowerCase() as PageId;
 if(validPages.has(hash)) return hash;
 return 'home';
}
function triggerRipple(e:React.MouseEvent<HTMLElement>){
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 const el=e.currentTarget;
 const rect=el.getBoundingClientRect();
 const size=Math.max(rect.width,rect.height)*1.4;
 const ripple=document.createElement('span');
 ripple.className='btn-ripple';
 ripple.style.width=`${size}px`;
 ripple.style.height=`${size}px`;
 ripple.style.left=`${e.clientX-rect.left-size/2}px`;
 ripple.style.top=`${e.clientY-rect.top-size/2}px`;
 el.appendChild(ripple);
 window.setTimeout(()=>ripple.remove(),560);
}
function GlassTabs({items,value,onChange,label,icons}:{items:readonly string[];value:string;onChange:(v:string)=>void;label:string;icons?:Record<string,React.ReactNode>}){
 const wrapRef=useRef<HTMLDivElement>(null);
 const [pill,setPill]=useState<{x:number;y:number;w:number;h:number;ready:boolean}>({x:0,y:0,w:0,h:0,ready:false});
 const measure=()=>{
  const wrap=wrapRef.current;
  if(!wrap) return;
  const activeBtn=wrap.querySelector<HTMLButtonElement>('button[aria-pressed="true"]');
  if(!activeBtn) return;
  setPill({x:activeBtn.offsetLeft,y:activeBtn.offsetTop,w:activeBtn.offsetWidth,h:activeBtn.offsetHeight,ready:true});
 };
 useLayoutEffect(()=>{measure();},[value,items.length]);
 useEffect(()=>{
  const wrap=wrapRef.current;
  const onResize=()=>measure();
  window.addEventListener('resize',onResize,{passive:true});
  let ro:ResizeObserver|null=null;
  if(wrap&&'ResizeObserver' in window){ro=new ResizeObserver(()=>measure());ro.observe(wrap);}
  return ()=>{window.removeEventListener('resize',onResize);ro?.disconnect();};
 },[value]);
 return <div ref={wrapRef} className="filters glass-tabs" role="group" aria-label={label} data-reveal="">
  {pill.ready&&<span className="tab-indicator" aria-hidden="true" style={{transform:`translate3d(${pill.x}px,${pill.y}px,0)`,width:`${pill.w}px`,height:`${pill.h}px`}}/>}
  {items.map(item=><button key={item} type="button" className={`liquid-btn tab-btn${value===item?' selected':''}`} aria-pressed={value===item} onClick={e=>{triggerRipple(e);onChange(item);e.currentTarget.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}}>{icons?.[item]}<span>{item}</span></button>)}
 </div>;
}
function App(){
 const [page,setPage]=useState<PageId>(()=>resolvePage());
 const [menu,setMenu]=useState(false),[filter,setFilter]=useState('All projects'),[skillFilter,setSkillFilter]=useState<string>('All skills'),[skillQuery,setSkillQuery]=useState(''),[codeTab,setCodeTab]=useState<'hello'|'stack'|'goals'>('hello'),[active,setActive]=useState<Certificate|null>(null),[copyState,setCopyState]=useState<'idle'|'loading'|'success'>('idle'),[scrolled,setScrolled]=useState(false),[showTop,setShowTop]=useState(false),[openTerms,setOpenTerms]=useState<Record<string,boolean>>({});
 const dialog=useRef<HTMLDialogElement>(null);
 const progressBar=useRef<HTMLDivElement>(null);
 const heroArt=useRef<HTMLDivElement>(null);
 const headerRef=useRef<HTMLElement>(null);
 const desktopNavRef=useRef<HTMLDivElement>(null);
 const [navPill,setNavPill]=useState<{x:number;w:number;visible:boolean}>({x:0,w:0,visible:false});
 const smoothTarget=useRef<number|null>(null);
 const smoothAnimating=useRef(false);
 const activeRef=useRef<Certificate|null>(null);
 activeRef.current=active;
 const scrollToTop=(e?:React.MouseEvent)=>{
  if(e) e.preventDefault();
  smoothTarget.current=null;
  smoothAnimating.current=false;
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduced?'instant':'smooth'});
 };
 const navigate=(next:PageId,e?:React.MouseEvent)=>{
  if(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0) return;e.preventDefault();}
  setMenu(false);
  smoothTarget.current=null;
  smoothAnimating.current=false;
  const destPath=next==='home'?'/':`/${next}`;
  if(window.location.pathname!==destPath||window.location.hash){window.history.pushState(null,'',destPath);}
  if(next===page){scrollToTop();return;}
  setPage(next);
  window.scrollTo({top:0,behavior:'instant'});
 };
 useEffect(()=>{
  if(!menu) return;
  const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape') setMenu(false);};
  const onDown=(e:MouseEvent)=>{if(headerRef.current&&!headerRef.current.contains(e.target as Node)) setMenu(false);};
  window.addEventListener('keydown',onKey);
  document.addEventListener('mousedown',onDown);
  return ()=>{window.removeEventListener('keydown',onKey);document.removeEventListener('mousedown',onDown);};
 },[menu]);
 useLayoutEffect(()=>{
  const updateNavPill=()=>{
   const wrap=desktopNavRef.current;
   if(!wrap) return;
   const el=wrap.querySelector<HTMLAnchorElement>('a.active');
   if(!el){setNavPill(p=>({...p,visible:false}));return;}
   setNavPill({x:el.offsetLeft,w:el.offsetWidth,visible:true});
  };
  updateNavPill();
  window.addEventListener('resize',updateNavPill,{passive:true});
  let ro:ResizeObserver|null=null;
  if(desktopNavRef.current&&'ResizeObserver' in window){ro=new ResizeObserver(()=>updateNavPill());ro.observe(desktopNavRef.current);}
  return ()=>{window.removeEventListener('resize',updateNavPill);ro?.disconnect();};
 },[page]);
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
 useEffect(()=>{
  if(!active) return;
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const onKey=(e:KeyboardEvent)=>{
   if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
    e.preventDefault();
    setActive(curr=>{
     if(!curr) return curr;
     const i=certificates.findIndex(c=>c.title===curr.title);
     const nextIdx=e.key==='ArrowRight'?(i+1)%certificates.length:(i-1+certificates.length)%certificates.length;
     return certificates[nextIdx];
    });
   }
  };
  window.addEventListener('keydown',onKey);
  return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',onKey);};
 },[active]);
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
   const ease=1-Math.exp(-14.5*dt);
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
   if(el&&el.closest('dialog,.glass-tabs,.code-tabs')) return;
   const delta=e.deltaMode===1?e.deltaY*32:e.deltaMode===2?e.deltaY*window.innerHeight:e.deltaY;
   if(Math.abs(delta)<1) return;
   // Let ultra-smooth native 120Hz trackpad gestures glide natively; smooth discrete mouse wheel ticks
   if(e.deltaMode===0&&Math.abs(e.deltaY)<42) return;
   e.preventDefault();
   const base=smoothAnimating.current&&smoothTarget.current!==null?smoothTarget.current:window.scrollY;
   startScrollTo(base+delta*0.92);
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
 async function copyEmail(e:React.MouseEvent<HTMLButtonElement>){
  if(copyState==='loading') return;
  triggerRipple(e);
  setCopyState('loading');
  try{
   await Promise.all([navigator.clipboard.writeText(email),new Promise(r=>setTimeout(r,260))]);
   setCopyState('success');
   window.setTimeout(()=>setCopyState('idle'),2600);
  }catch{
   setCopyState('idle');
   window.location.href=`mailto:${email}`;
  }
 }
 const nav = pageOrder.filter(p=>p.id!=='contact');
 const mobileDockIds: PageId[] = ['home','projects','skills','about','contact'];
 const marqueeTech = techSkills.filter(s=>['React','TypeScript','Java','Python','C++','Google Gemini','Claude','Antigravity','Cursor','Supabase','MySQL','Tailwind CSS','Vite','Vercel','Render','Railway','GitHub','Canva'].includes(s.name));
 const featuredProjects = [projects[0], projects[1]];
 const formatDomain = (url:string)=>url.replace(/^https?:\/\//,'').replace(/\/$/,'');
 const filteredProjects = projects.filter(p=>filter==='All projects'||p.type===filter);
 const qNorm = skillQuery.trim().toLowerCase();
 const filteredSkills = techSkills.filter(s=>(skillFilter==='All skills'||s.category===skillFilter)&&(!qNorm||s.name.toLowerCase().includes(qNorm)||s.category.toLowerCase().includes(qNorm)));
 const allTermsOpen = academicResults.every(t=>openTerms[t.semester]);
 const toggleAllTerms = (e:React.MouseEvent<HTMLButtonElement>)=>{
  triggerRipple(e);
  const next:boolean = !allTermsOpen;
  const map:Record<string,boolean>={};
  academicResults.forEach(t=>{map[t.semester]=next;});
  setOpenTerms(map);
 };
 const activeCertIdx = active ? certificates.findIndex(c=>c.title===active.title) : -1;
 const stepCert = (dir:1|-1, e:React.MouseEvent<HTMLButtonElement>)=>{
  triggerRipple(e);
  if(activeCertIdx<0) return;
  setActive(certificates[(activeCertIdx+dir+certificates.length)%certificates.length]);
 };
 const stagger=(n:number)=>({'--stagger':n} as React.CSSProperties);
 const idx=pageOrder.findIndex(p=>p.id===page);
 const prevPage=idx>0?pageOrder[idx-1]:null;
 const nextPage=idx<pageOrder.length-1?pageOrder[idx+1]:pageOrder[0];
 return <><a className="skip" href="#main">Skip to content</a><div className="scroll-progress" aria-hidden="true"><div ref={progressBar}/></div><div className="ambient" aria-hidden="true"><span className="ambient-orb orb-a"/><span className="ambient-orb orb-b"/><span className="ambient-orb orb-c"/></div>
 <header ref={headerRef} className={`nav-wrap${scrolled?' is-scrolled':''}`}><nav className="nav glass" aria-label="Main navigation"><a href="/" className="brand" aria-label="Home" onClick={e=>navigate('home',e)}><img className="brand-logo" src="/pppk-logo.png" alt="Pppk" width="110" height="42" decoding="async"/></a><div ref={desktopNavRef} className="desktop-nav">{navPill.visible&&<span className="nav-indicator" aria-hidden="true" style={{transform:`translate3d(${navPill.x}px,0,0)`,width:`${navPill.w}px`}}/>}{nav.map(item=><a key={item.id} href={item.path} className={page===item.id?'active':''} aria-current={page===item.id?'page':undefined} onClick={e=>navigate(item.id,e)}><item.icon size={14}/><span>{item.label}</span></a>)}</div><a className={`nav-contact liquid-btn${page==='contact'?' active':''}`} href="/contact" aria-current={page==='contact'?'page':undefined} onClick={e=>{triggerRipple(e);navigate('contact',e);}}><Mail size={14}/> Let’s connect <ArrowUpRight size={15}/></a><button type="button" className="menu-button liquid-btn" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} aria-controls="mobile-nav" onClick={e=>{triggerRipple(e);setMenu(!menu);}}>{menu?<X size={20}/>:<Menu size={20}/>}</button></nav>{menu&&<div id="mobile-nav" className="mobile-nav glass">{pageOrder.map(item=><a key={item.id} href={item.path} className={page===item.id?'active':''} aria-current={page===item.id?'page':undefined} onClick={e=>navigate(item.id,e)}><span className="mobile-nav-label"><item.icon size={16}/>{item.label}</span><ArrowUpRight size={17}/></a>)}</div>}</header>
 <main id="main" className="page-stage" key={page}>
 {page==='home'&&<>
 <section id="home" className="hero section-shell"><div className="hero-copy"><div className="eyebrow availability hero-in" style={stagger(0)}><span/> OPEN TO HACKATHON COLLABORATIONS <Rocket size={12} className="eyebrow-svg"/></div><p className="hello hero-in" style={stagger(1)}>Hi there, I’m Phyo <span aria-hidden="true">✧</span></p><h1 className="hero-in" style={stagger(2)}>Phyo Pyae<br/>Pyae Khaing<span className="period">.</span></h1><p className="hero-role hero-in" style={stagger(3)}>Developer by curiosity.<br/><em>Problem solver at heart.</em></p><p className="intro hero-in" style={stagger(4)}>Third-year <span className="inline-chip"><img src="/uit-logo.png" alt="" width="15" height="14" decoding="async"/>UIT</span> student building for the <span className="inline-chip"><Globe size={13}/>web</span>, exploring <span className="inline-chip"><Code2 size={13}/>software development</span>, and finding possibilities in <span className="inline-chip"><BrainCircuit size={13}/>AI &amp; ML</span>.</p><div className="hero-actions hero-in" style={stagger(5)}><a className="button primary liquid-btn" href="/projects" onClick={e=>{triggerRipple(e);navigate('projects',e);}}><FolderGit2 size={17}/> Explore my work <ArrowUpRight size={18}/></a><a className="button secondary liquid-btn" href={github} target="_blank" rel="noreferrer" onClick={triggerRipple}><Github size={18}/> GitHub</a></div><div className="hero-meta hero-in" style={stagger(6)}><img className="uit-icon-inline" src="/uit-logo.png" alt="UIT logo" width="22" height="20" decoding="async"/> University of Information Technology <span>•</span> <GraduationCap size={14} className="meta-svg"/> Year 03</div></div>
 <div ref={heroArt} className="hero-art hero-art-in" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave} aria-label="Interactive developer code preview"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="art-star star-one">✳</span><span className="art-star star-two">✧</span><div className="floating-label label-top glass"><span className="dot"/> A little code. A lot of curiosity.</div><div className="code-window glass"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><div className="code-tabs" role="tablist" aria-label="Code preview files">{([['hello','hello-world.tsx'],['stack','stack.ts'],['goals','goals.json']] as const).map(([k,lbl])=><button key={k} type="button" role="tab" aria-selected={codeTab===k} className={`code-tab${codeTab===k?' active':''}`} onClick={()=>setCodeTab(k)}>{lbl}</button>)}</div><Code2 size={14} className="window-code-ico"/></div><div className="code-content" key={codeTab}>{codeTab==='hello'&&<><span className="line-number">01</span><div><span className="code-purple">const</span> developer = {'{'}</div><span className="line-number">02</span><div> name: <span className="code-rose">'Phyo'</span>,</div><span className="line-number">03</span><div> focus: [<span className="code-rose">'Web'</span>, <span className="code-rose">'AI/ML'</span>],</div><span className="line-number">04</span><div> mindset: <span className="code-rose">'Always learning'</span>,</div><span className="line-number">05</span><div> next: <span className="code-purple">'Let’s build together'</span></div><span className="line-number">06</span><div>{'}'};</div><span className="line-number">07</span><div className="code-comment">// ideas → meaningful experiences<span className="code-caret" aria-hidden="true"/></div></>}{codeTab==='stack'&&<><span className="line-number">01</span><div><span className="code-purple">export const</span> stack = {'{'}</div><span className="line-number">02</span><div> web: [<span className="code-rose">'React'</span>, <span className="code-rose">'TypeScript'</span>, <span className="code-rose">'Vite'</span>],</div><span className="line-number">03</span><div> backend: [<span className="code-rose">'Java 17'</span>, <span className="code-rose">'JSP'</span>, <span className="code-rose">'MySQL'</span>],</div><span className="line-number">04</span><div> ai: [<span className="code-rose">'Gemini'</span>, <span className="code-rose">'Prolog'</span>, <span className="code-rose">'Claude'</span>],</div><span className="line-number">05</span><div> cloud: [<span className="code-rose">'Vercel'</span>, <span className="code-rose">'Render'</span>, <span className="code-rose">'Supabase'</span>]</div><span className="line-number">06</span><div>{'}'};</div><span className="line-number">07</span><div className="code-comment">// 35+ tools across UIT &amp; live apps<span className="code-caret" aria-hidden="true"/></div></>}{codeTab==='goals'&&<><span className="line-number">01</span><div>{'{'}</div><span className="line-number">02</span><div> <span className="code-purple">"university"</span>: <span className="code-rose">"UIT · Year 03"</span>,</div><span className="line-number">03</span><div> <span className="code-purple">"semesterGPA"</span>: <span className="code-rose">"3.95 / 4.00"</span>,</div><span className="line-number">04</span><div> <span className="code-purple">"liveApps"</span>: <span className="code-rose">6</span>,</div><span className="line-number">05</span><div> <span className="code-purple">"openTo"</span>: <span className="code-rose">"Hackathons &amp; Teams"</span></div><span className="line-number">06</span><div>{'}'}</div><span className="line-number">07</span><div className="code-comment">// click tabs above to inspect<span className="code-caret" aria-hidden="true"/></div></>}</div><div className="window-footer"><span>✦ interactive preview</span><span className="inline-meta"><img src={codeTab==='goals'?'/tech/vscode.svg':'/tech/typescript.svg'} alt="" width="12" height="12" decoding="async"/> {codeTab==='goals'?'JSON':'TypeScript'}</span></div></div><div className="floating-label label-bottom glass"><div className="label-icon"><Sparkles size={22}/></div><div><strong>Always a work in progress</strong><span>Learning. Building. Becoming.</span></div></div><div className="small-orb"/></div>
 <a className="scroll-hint hero-in" style={stagger(7)} href="#explore"><ArrowDown size={15}/> Explore highlights &amp; chapters</a></section>
 <div className="credentials-strip section-shell"><div className="glass cred-card" data-reveal="" style={stagger(0)}><div className="cred-icon"><img src="/uit-logo.png" alt="" width="24" height="22" decoding="async"/></div><div><strong>03<span> / year</span></strong><p>At the University of Information Technology</p></div></div><div className="glass cred-card" data-reveal="" style={stagger(1)}><div className="cred-icon"><Globe size={20}/></div><div><strong>06<span> live apps</span></strong><p>Deployed on Vercel, Render &amp; web</p></div></div><div className="glass cred-card" data-reveal="" style={stagger(2)}><div className="cred-icon"><BrainCircuit size={20}/></div><div><strong>35<span>+ skills</span></strong><p>Web, Software, AI &amp; CS foundations</p></div></div></div>
 <section className="section-shell marquee-section" aria-label="Tech stack preview" data-reveal=""><div className="marquee-bar glass"><div className="marquee-track">{[...marqueeTech,...marqueeTech].map((t,i)=><a key={`${t.name}-${i}`} href="/skills" className="marquee-pill" onClick={e=>navigate('skills',e)}><img src={t.icon} alt="" width="18" height="18" loading="lazy" decoding="async"/><span>{t.name}</span></a>)}</div></div></section>
 <section id="explore" className="section-shell spotlight-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow eyebrow-ico"><Rocket size={13}/> FEATURED DEPLOYMENTS</p><h2>Live on the <em>web.</em></h2></div><a className="text-link" href="/projects" onClick={e=>navigate('projects',e)}>View all 6 projects <ArrowUpRight size={16}/></a></div><div className="spotlight-grid">{featuredProjects.map((p,i)=><article key={p.name} className="spotlight-card glass glow-card" data-reveal="" style={stagger(i)} onMouseMove={onCardMove}><div className={`spotlight-badge ${p.color}`}><p.icon size={24} strokeWidth={1.5}/></div><div className="spotlight-body"><div className="spotlight-head"><div><h3>{p.name}</h3><a className="domain-caption" href={p.liveUrl} target="_blank" rel="noreferrer"><Globe size={11}/>{formatDomain(p.liveUrl)}</a></div><span className="live-pill"><span className="live-dot"/>Live</span></div><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{renderTagIcon(t)}{t}</span>)}</div><div className="project-links"><a className="project-live-btn liquid-btn" href={p.liveUrl} target="_blank" rel="noreferrer" onClick={triggerRipple}><Globe size={13}/> Open Live Site <ArrowUpRight size={14}/></a><a className="project-code-btn liquid-btn" href={`https://github.com/${p.owner}/${p.name}`} target="_blank" rel="noreferrer" onClick={triggerRipple}><Github size={13}/> Code</a></div></div></article>)}</div></section>
 <section className="section-shell chapters-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow eyebrow-ico"><Compass size={13}/> PORTFOLIO CHAPTERS</p><h2>Browse by <em>section.</em></h2></div><p>Each part of my portfolio lives on its own focused page.</p></div><div className="chapter-grid">{pageOrder.filter(p=>p.id!=='home').map((c,i)=><a key={c.id} href={c.path} className="chapter-card glass glow-card liquid-btn" data-reveal="" style={stagger(i)} onMouseMove={onCardMove} onClick={e=>{triggerRipple(e);navigate(c.id,e);}}><div className="chapter-top"><span className="chapter-badge"><c.icon size={16}/><span>{c.num}</span></span><ArrowUpRight size={17}/></div><h3>{c.label}</h3><p>{c.summary}</p></a>)}</div></section>
 </>}
 {page==='projects'&&<section id="projects" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow eyebrow-ico"><FolderGit2 size={13}/> 01 / SELECTED WORK</p><h2>Ideas, turned into <em>code.</em></h2></div><p>A growing collection of personal projects,<br className="desktop-only"/> university work and team collaborations.</p></div><div className="toolbar-row" data-reveal=""><GlassTabs items={['All projects','Web development','Software & AI','Collaboration']} value={filter} onChange={setFilter} label="Filter projects" icons={projectTabIcons}/><span className="count-pill glass"><Globe size={12}/> {filteredProjects.length} live {filteredProjects.length===1?'project':'projects'}</span></div><div data-reveal=""><div className="project-grid" key={filter}>{filteredProjects.map((p,i)=><article className="project-card glass card-enter glow-card" style={stagger(i)} key={p.name} onMouseMove={onCardMove}><div className={`project-art ${p.color}`} aria-hidden="true"><div className="art-grid"/><p className="art-index">{p.type}</p><p.icon size={64} strokeWidth={1}/><span className="project-art-name">{p.name==='IGNIS-NASA-2026'?'IGNIS':p.name}</span><span className="art-spark">✧</span></div><div className="project-body"><div className="project-title"><h3>{p.name}</h3><a className="liquid-btn icon-circle-btn" href={p.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} live deployment`} onClick={triggerRipple}><ArrowUpRight size={19}/></a></div><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{renderTagIcon(t)}{t}</span>)}</div><div className="project-links"><a className="project-live-btn liquid-btn" href={p.liveUrl} target="_blank" rel="noreferrer" onClick={triggerRipple}><span className="live-dot" aria-hidden="true"/><Globe size={13}/> Live Site <ArrowUpRight size={14}/></a><a className="project-code-btn liquid-btn" href={`https://github.com/${p.owner}/${p.name}`} target="_blank" rel="noreferrer" onClick={triggerRipple}><Github size={13}/> Source</a></div><div className="project-note"><Github size={13}/>{p.note}</div></div></article>)}</div></div><p className="source-note inline-sentence-note" data-reveal=""><ShieldCheck size={14}/><span>Project summaries follow public repositories. Collaboration credits verified against GitHub contributor listings · 18 Nov 2026.</span></p><a className="text-link" data-reveal="" href={`${github}?tab=repositories`} target="_blank" rel="noreferrer"><Github size={15}/> More on GitHub <ArrowUpRight size={16}/></a></section>}
 {page==='about'&&<section id="about" className="section-shell page-section about-grid"><div className="about-art glass glow-card" data-reveal="left" onMouseMove={onCardMove}><span className="eyebrow eyebrow-ico"><Sparkles size={12}/> THE PERSON BEHIND THE CODE</span><img className="portrait" src="/phyo-portrait.png" alt="Portrait of Phyo Pyae Pyae Khaing" width="1159" height="1159" loading="lazy" decoding="async"/><p>Curious mind.<br/><em>Thoughtful builder.</em></p><span className="about-signature">Phyo Pyae Pyae Khaing</span></div><div className="about-copy" data-reveal="right"><p className="eyebrow eyebrow-ico"><User size={13}/> 02 / A LITTLE ABOUT ME</p><h2>Learning by doing.<br/><em>Growing by building.</em></h2><p>I’m Phyo, a third-year student at the <span className="inline-chip"><img src="/uit-logo.png" alt="" width="15" height="14" decoding="async"/>University of Information Technology</span>. My interests sit at the intersection of <span className="inline-chip"><Globe size={13}/>web development</span>, <span className="inline-chip"><Code2 size={13}/>software engineering</span> and <span className="inline-chip"><BrainCircuit size={13}/>artificial intelligence</span>.</p><p>University assignments, mini projects, personal work and <span className="inline-chip"><Users size={13}/>team projects</span> are all part of how I learn. I’m looking for <span className="inline-chip"><Rocket size={13}/>hackathon opportunities</span> to bring that curiosity into a team and work on meaningful problems.</p><div className="about-values"><span><Code2 size={16}/> Web &amp; software</span><span><BrainCircuit size={16}/> AI/ML curiosity</span><span><Braces size={16}/> Learning through projects</span></div></div></section>}
 {page==='skills'&&<section id="skills" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow eyebrow-ico"><Cpu size={13}/> 03 / MY TOOLKIT</p><h2>Tools for the <em>next idea.</em></h2></div><p>Languages, frameworks, databases and CS foundations<br className="desktop-only"/> drawn from my UIT coursework and projects.</p></div><div className="skills-controls" data-reveal=""><GlassTabs items={skillCategories} value={skillFilter} onChange={setSkillFilter} label="Filter tech skills" icons={skillTabIcons}/><div className="glass-search-wrap"><Search size={15} className="search-ico"/><input type="search" className="glass-input" value={skillQuery} onChange={e=>setSkillQuery(e.target.value)} placeholder="Search 35 skills (e.g. Java, Gemini, React...)" aria-label="Search tech skills"/>{skillQuery&&<button type="button" className="search-clear" onClick={()=>setSkillQuery('')} aria-label="Clear search"><X size={14}/></button>}</div></div><div data-reveal="">{filteredSkills.length>0?<div className="tech-grid" key={`${skillFilter}-${qNorm}`}>{filteredSkills.map((s,i)=><article className="tech-tile glass glow-card card-enter" style={stagger(Math.min(i,10))} key={s.name} onMouseMove={onCardMove}><div className="tech-icon-box"><img src={s.icon} alt="" width="28" height="28" loading="lazy" decoding="async"/></div><div className="tech-meta"><h3>{s.name}</h3></div></article>)}</div>:<div className="empty-state glass"><Search size={24}/><h3>No matching skills found</h3><p>Try searching another language, framework, or reset your filter.</p><button type="button" className="button secondary liquid-btn" onClick={e=>{triggerRipple(e);setSkillFilter('All skills');setSkillQuery('');}}>Reset filters</button></div>}</div></section>}
 {page==='education'&&<section id="education" className="section-shell page-section education"><div data-reveal="left"><p className="eyebrow eyebrow-ico"><GraduationCap size={14}/> 04 / THE FOUNDATION</p><h2>A journey of<br/><em>continuous learning.</em></h2></div><div className="timeline"><article data-reveal="" style={stagger(0)}><span className="timeline-dot"/><div className="uit-heading"><img className="uit-logo" src="/uit-logo.png" alt="University of Information Technology logo" width="44" height="40" decoding="async"/><div><p className="eyebrow eyebrow-ico"><Calendar size={11}/> CURRENT · THIRD YEAR</p><h3>University of Information Technology</h3></div></div><p>Continuing my studies at <span className="inline-chip"><img src="/uit-logo.png" alt="" width="15" height="14" decoding="async"/>UIT</span>, with a focus on building skills through university and personal projects.</p></article><article data-reveal="" style={stagger(1)}><span className="timeline-dot"/><p className="eyebrow eyebrow-ico"><BookOpen size={12}/> 2025–2026 · SECOND YEAR · SEMESTER IV</p><h3>Computer Science and Technology</h3><div className="academic-metrics"><div className="glass"><div className="metric-top"><TrendingUp size={15}/><span>Semester GPA</span></div><strong>3.95 <span>/ 4.00</span></strong><div className="gpa-bar" aria-hidden="true"><span style={{width:'98.75%'}}/></div></div><div className="glass"><div className="metric-top"><Award size={15}/><span>Cumulative GPA</span></div><strong>3.85 <span>/ 4.00</span></strong><div className="gpa-bar" aria-hidden="true"><span style={{width:'96.25%'}}/></div></div></div><div className="coursework"><div className="coursework-head"><h4 className="heading-ico"><BookMarked size={16}/> Coursework &amp; results</h4><button type="button" className="mini-glass-btn liquid-btn" onClick={toggleAllTerms}><ChevronsUpDown size={13}/><span>{allTermsOpen?'Collapse all':'Expand all'}</span></button></div><p className="coursework-intro">Four semesters of foundations in computing, mathematics and software development.</p>{academicResults.map(term=>{const isOpen=Boolean(openTerms[term.semester]);return <div className={`accordion-item glass${isOpen?' is-open':''}`} key={term.semester}><button type="button" className="accordion-trigger liquid-btn" aria-expanded={isOpen} onClick={e=>{triggerRipple(e);toggleTerm(term.semester);}}><span className="accordion-title"><Calendar size={15} className="acc-ico"/><span>{term.semester}<small>{term.year}</small></span></span><span className="expand-mark" aria-hidden="true">+</span></button><div className="accordion-panel"><div className="accordion-inner"><dl>{term.courses.map(([course,grade])=><div className="course-row" key={course}><dt>{course}</dt><dd><span className="sr-only">Grade </span>{grade}</dd></div>)}</dl></div></div></div>;})}</div></article><article data-reveal="" style={stagger(2)}><span className="timeline-dot"/><div className="uit-heading"><div className="medal-badge"><Medal size={22}/></div><div><p className="eyebrow eyebrow-ico"><Award size={11}/> SECONDARY EDUCATION</p><h3>Grade 12 · Three distinctions</h3></div></div><p>Completed Grade 12 with three distinctions, and received a <span className="inline-chip"><Trophy size={13}/>Yangon Region academic award</span>.</p></article></div></section>}
 {page==='achievements'&&<section id="achievements" className="section-shell page-section"><div className="section-heading" data-reveal=""><div><p className="eyebrow eyebrow-ico"><Trophy size={13}/> 05 / MILESTONES</p><h2>Learning, with a little <em>recognition.</em></h2></div><p>Qualifications, participation<br/> and moments along the way.</p></div><div className="certificate-grid">{certificates.map((c,i)=><button type="button" className={`certificate glass glow-card cert-${i}`} data-reveal="" style={stagger(i)} key={c.title} onMouseMove={onCardMove} onClick={()=>setActive(c)} aria-label={`View ${c.title} certificate`}><div className="certificate-image"><img src={`/certificates/${c.image}`} alt="" loading="lazy" decoding="async"/><span>View certificate <ArrowUpRight size={15}/></span></div><div className="certificate-body"><p className="eyebrow eyebrow-ico"><BadgeCheck size={12}/> {c.status}</p><h3>{c.title}</h3><p className="cert-meta-row">{c.org.includes('University of Information Technology')?<img src="/uit-logo.png" alt="" width="15" height="14" decoding="async"/>:<Building2 size={13}/>}<span>{c.org}</span></p><span className="cert-meta-row cert-date-row"><Calendar size={12}/><span>{c.date}</span></span></div></button>)}</div></section>}
 {page==='contact'&&<>
 <section id="contact" className="section-shell contact page-section"><span className="contact-star" data-reveal="scale" aria-hidden="true">✳</span><p className="eyebrow eyebrow-ico eyebrow-center" data-reveal=""><Sparkles size={12}/> 06 / LET’S MAKE SOMETHING MEANINGFUL</p><h2 data-reveal="" style={stagger(1)}>Your next teammate<br/>might be <em>right here.</em></h2><p data-reveal="" style={stagger(2)}>Have a <span className="inline-chip"><Rocket size={13}/>hackathon idea</span> or a <span className="inline-chip"><Lightbulb size={13}/>project in mind</span>?<br/>I’d love to hear about it.</p><div data-reveal="" style={stagger(3)}><a className="button primary liquid-btn" href={`mailto:${email}`} onClick={triggerRipple}><Mail size={18}/> Say hello <ArrowUpRight size={18}/></a></div><div className="email-row glass" data-reveal="" style={stagger(4)}><Mail size={16} className="email-row-ico"/><a href={`mailto:${email}`}>{email}</a><button type="button" className={`email-copy-btn liquid-btn${copyState==='loading'?' is-loading':''}${copyState==='success'?' is-success':''}`} onClick={copyEmail} disabled={copyState==='loading'} aria-label={copyState==='success'?'Email copied':'Copy email address'} data-tooltip={copyState==='success'?'Copied!':'Copy email'}>{copyState==='loading'?<Loader2 size={15} className="spin"/>:copyState==='success'?<Check size={15}/>:<Copy size={15}/>}<span>{copyState==='loading'?'Copying':copyState==='success'?'Copied':'Copy'}</span></button></div><span className="copy-status" role="status">{copyState==='success'?'Email copied to clipboard!':''}</span><div className="social-links" aria-label="Social profiles"><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(0)} onMouseMove={onCardMove} onClick={triggerRipple} href="https://www.linkedin.com/in/phyo-pyae-pyae-khaing-1a4b59428" target="_blank" rel="noopener noreferrer"><Linkedin size={18}/><span>LinkedIn<small>Let’s connect professionally</small></span><ArrowUpRight size={16}/></a><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(1)} onMouseMove={onCardMove} onClick={triggerRipple} href="https://www.facebook.com/share/1P7tW4d1VL/" target="_blank" rel="noopener noreferrer"><Facebook size={18}/><span>Facebook<small>Phyo Pyae Pyae Khaing</small></span><ArrowUpRight size={16}/></a><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(2)} onMouseMove={onCardMove} onClick={triggerRipple} href="https://t.me/CigaretheVisualiser" target="_blank" rel="noopener noreferrer"><Send size={18}/><span>Telegram<small>@CigaretheVisualiser</small></span><ArrowUpRight size={16}/></a><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(3)} onMouseMove={onCardMove} onClick={triggerRipple} href={github} target="_blank" rel="noopener noreferrer"><Github size={18}/><span>GitHub<small>Explore my repositories</small></span><ArrowUpRight size={16}/></a><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(4)} onMouseMove={onCardMove} onClick={triggerRipple} href="viber://chat?number=%2B959666912842"><MessageCircle size={18}/><span>Viber<small>Open a chat in the Viber app</small></span><ArrowUpRight size={16}/></a><a className="glass glow-card liquid-btn" data-reveal="" style={stagger(5)} onMouseMove={onCardMove} onClick={triggerRipple} href="tel:+959666912842"><Phone size={18}/><span>Phone<small>+95 9 666 912 842</small></span><ArrowUpRight size={16}/></a></div></section>
 <section id="github" className="section-shell github-section github-compact glass glow-card" data-reveal="scale" onMouseMove={onCardMove}><div className="github-icon"><Github size={34}/></div><div><p className="eyebrow eyebrow-ico"><Code2 size={12}/> BUILDING IN THE OPEN</p><h2>The story continues <em>on GitHub.</em></h2><p>Explore the source, follow my progress, or find something we can build together.</p></div><a className="button secondary liquid-btn" href={github} target="_blank" rel="noreferrer" onClick={triggerRipple}><Github size={17}/> Visit my GitHub <ArrowUpRight size={18}/></a></section>
 </>}
 {page!=='home'&&<nav className="section-shell page-pager" aria-label="Page navigation">
  {prevPage?<a href={prevPage.path} className="pager-link glass liquid-btn" onClick={e=>{triggerRipple(e);navigate(prevPage.id,e);}}><ArrowLeft size={16}/><span><small>Previous</small><strong>{prevPage.label}</strong></span></a>:<span/>}
  <a href={nextPage.path} className="pager-link pager-next glass liquid-btn" onClick={e=>{triggerRipple(e);navigate(nextPage.id,e);}}><span><small>{nextPage.id==='home'?'Back to':'Next'}</small><strong>{nextPage.label}</strong></span><ArrowRight size={16}/></a>
 </nav>}
 </main><footer className="section-shell"><a className="brand" href="/" aria-label="Home" onClick={e=>navigate('home',e)}><img className="brand-logo brand-logo-footer" src="/pppk-logo.png" alt="Pppk" width="94" height="36" decoding="async"/></a><p className="footer-note">Made with <Heart size={13} className="footer-heart"/> care &amp; a curious mind <Sparkles size={13} className="footer-spark"/>.</p><a className="footer-top" href="#top" onClick={scrollToTop}>Back to top ↑</a></footer>
 <nav className="mobile-dock glass" aria-label="Quick navigation">{mobileDockIds.map(id=>{const item=pageOrder.find(p=>p.id===id)!;return <a key={id} href={item.path} className={`dock-item${page===id?' active':''}`} aria-current={page===id?'page':undefined} onClick={e=>navigate(id,e)}><item.icon size={18}/><span>{item.label}</span></a>;})}</nav>
 <a href="#top" className={`back-to-top glass liquid-btn${showTop?' is-shown':''}`} aria-label="Back to top" data-tooltip="Top" tabIndex={showTop?0:-1} onClick={e=>{triggerRipple(e);scrollToTop(e);}}><ArrowUp size={18}/></a>
 <dialog ref={dialog} className="glass-modal" onCancel={()=>setActive(null)} onClick={e=>{if(e.target===e.currentTarget)setActive(null)}} aria-labelledby="certificate-title"><button type="button" className="dialog-close liquid-btn" onClick={()=>setActive(null)} aria-label="Close certificate"><X size={18}/></button>{active&&<><div className="dialog-description"><div className="dialog-top-meta"><Award size={20}/><span className="modal-counter">{activeCertIdx+1} / {certificates.length}</span></div><h2 id="certificate-title">{active.title}</h2><p>{active.detail}</p></div><img src={`/certificates/${active.image}`} alt={`${active.title} certificate awarded to Phyo Pyae Pyae Khaing`} decoding="async"/><div className="dialog-nav"><button type="button" className="mini-glass-btn liquid-btn" onClick={e=>stepCert(-1,e)}><ChevronLeft size={16}/> Previous</button><button type="button" className="mini-glass-btn liquid-btn" onClick={e=>stepCert(1,e)}>Next <ChevronRight size={16}/></button></div></>}</dialog></>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
