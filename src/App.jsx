import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import {
  Brain,
  CalendarDays,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  GraduationCap,
  Microscope,
  Activity,
  Target,
  CheckCircle2,
  Facebook,
  Twitter,
  Linkedin,
  Clock,
  Stethoscope,
} from 'lucide-react';
import { doctor, qualifications, memberships, services, galleryImages } from './data.js';


const imageDoctor =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUveidowbuVbDGV2soVdO9Cii6PLEnpx7eIL9JZ7yR75rBST6LEypC3M&s=10";

const LanguageContext = React.createContext({ lang: 'en', setLang: () => {} });
function useLanguage() { return React.useContext(LanguageContext); }
function LanguageToggle() { const { lang, setLang } = useLanguage(); return <button className="language-toggle" onClick={() => setLang(lang === 'en' ? 'fa' : 'en')} aria-label="Switch language"><span className={lang === 'en' ? 'selected' : ''}>EN</span><span className={lang === 'fa' ? 'selected' : ''}>دری</span></button>; }

function ButtonLink({ to='/appointment', children, secondary=false }) {
  return <Link className={`button ${secondary ? 'button-outline' : ''}`} to={to}>{children}<ArrowRight size={16}/></Link>;
}

// React Bits-inspired motion primitives: scroll reveal, blur-to-clear headline, and spotlight hover cards.
function Reveal({ children, className='', delay=0, y=24 }) {
  return <motion.div className={className} initial={{opacity:0, y, filter:'blur(7px)'}} whileInView={{opacity:1, y:0, filter:'blur(0px)'}} viewport={{once:true, amount:0.15}} transition={{duration:0.65, delay, ease:[0.22,1,0.36,1]}}>{children}</motion.div>;
}

function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const { lang } = useLanguage();
  React.useEffect(() => setOpen(false), [location.pathname]);
  const labels = lang === 'fa' ? ['خانه','درباره ما','تحصیلات','خدمات','گالری','اسناد','تماس'] : ['Home','About','Qualifications','Services','Gallery','Documents','Contact'];
  const links = labels.map((label, i) => [label, ['/', '/about', '/qualifications', '/services', '/gallery', '/documents', '/contact'][i]]);
  return <header className="header">
    <div className="container nav-wrap">
      <Link to="/" className="brand" aria-label="Dr. Khalid Khan Zadran home">
        <span className="brand-mark"><Brain size={30}/></span>
        <span><strong>Dr. Khalid Khan Zadran</strong><small>Consultant Neurosurgeon | Brain & Spine Surgeon</small></span>
      </Link>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav dir={lang === 'fa' ? 'rtl' : 'ltr'} className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label,to]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
      </nav>
      <LanguageToggle/><Link className="nav-appointment" to="/appointment"><CalendarDays size={16}/> {lang === 'fa' ? 'گرفتن وقت' : 'Book Appointment'}</Link>
    </div>
  </header>;
}


const GLOW_IMAGE =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4a917d4c-123f-4b68-8125-b201961b7791.jpg";

const GLOW_VIDEO =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/a8f60da5-538f-403a-a812-6be0f098e319.mp4";

function Footer() {
  return (
    <footer className="footer footer-cobalt">
      {/* Aurora background */}
      <div className="footer-aurora" aria-hidden="true">
        <div
          className="footer-glow-plate"
          style={{ backgroundImage: `url("${GLOW_IMAGE}")` }}
        />

        <video
          className="footer-glow-video"
          autoPlay
          muted
          loop
          playsInline
          poster={GLOW_IMAGE}
          aria-hidden="true"
          onCanPlay={(event) => {
            event.currentTarget.classList.add("is-ready");
          }}
        >
          <source src={GLOW_VIDEO} type="video/mp4" />
        </video>

        {/* Decorative arc and glass ring */}
        <svg
          className="footer-orbit"
          viewBox="0 0 1326 558"
          preserveAspectRatio="none"
          role="presentation"
        >
          <defs>
            <linearGradient id="footerArcGradient">
              <stop offset="0%" stopColor="#2A6DFC" />
              <stop offset="100%" stopColor="#3FD0FF" />
            </linearGradient>

            <linearGradient id="footerRingGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A6DFC" />
              <stop offset="100%" stopColor="#8AF0FF" />
            </linearGradient>

            <radialGradient id="footerGlassFill">
              <stop offset="0%" stopColor="#092454" stopOpacity=".82" />
              <stop offset="100%" stopColor="#00071A" stopOpacity=".96" />
            </radialGradient>

            <filter id="footerRingGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          <path
            className="footer-arc-line"
            d="M 0 143 Q 410 415 816 386 Q 1080 355 1326 334"
            fill="none"
            stroke="url(#footerArcGradient)"
            strokeWidth="1.6"
          />

          <circle
            cx="780.7"
            cy="351.5"
            r="78"
            fill="none"
            stroke="url(#footerRingGradient)"
            strokeWidth="2.4"
            filter="url(#footerRingGlow)"
            opacity=".65"
          />

          <circle
            cx="780.7"
            cy="351.5"
            r="78"
            fill="url(#footerGlassFill)"
            stroke="url(#footerRingGradient)"
            strokeWidth="2.4"
          />
        </svg>
      </div>

      <div className="footer-content">
        {/* Main footer */}
        <div className="footer-main">
          <div className="footer-intro">
            <Link to="/" className="footer-brand" aria-label="Home">
              <span className="footer-brand-icon">
                <Brain size={30} strokeWidth={1.5} />
              </span>
              <span className="footer-brand-text">
                <strong>{doctor.name}</strong>
                <small>Brain &amp; Spine Care</small>
              </span>
            </Link>

            <p className="footer-description">
              Professional neurosurgical care, trusted medical guidance, and
              appointment requests in Kabul, Afghanistan.
            </p>

            <Link to="/appointment" className="footer-cta">
              <span className="footer-cta-circle">
                <ArrowUpRight size={27} strokeWidth={1.5} />
              </span>
              <span>Request an appointment</span>
            </Link>
          </div>

          {/* Vertical medical wordmark */}
          <div className="footer-wordmark" aria-label="Brain and Spine Care">
            <span>BRAIN &amp; SPINE CARE</span>
          </div>

          <nav className="footer-column" aria-label="Explore">
            <h4>Explore</h4>
             <Link to="/">Home</Link>
             <Link to="/services">Specializations</Link>
             <Link to="/about">About the Doctor</Link>
             <Link to="/qualifications">Qualifications</Link>
             <Link to="/gallery">Gallery</Link>
             <Link to="/documents">Education &amp; Documents</Link>
             <Link to="/contact">Contact</Link>
            
          </nav>

          <div className="footer-column footer-contact">
            <h4>Contact</h4>
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>{doctor.clinic}, {doctor.location}</span>
            </p>
            <a href={`tel:${doctor.phoneLink}`}>
              <Phone size={16} aria-hidden="true" />
              <span>{doctor.phone}</span>
            </a>
            <Link to="/appointment">
              <CalendarDays size={16} aria-hidden="true" />
              <span>Request appointment</span>
            </Link>
            <a href={`mailto:${doctor.email || ""}`}>
              <Mail size={16} aria-hidden="true" />
              <span>Email the clinic</span>
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="footer-dashed-rule" />

        <div className="footer-bottom">
          <div className="footer-social">
            <span className="footer-social-label">Connect with us</span>

            <div className="footer-social-icons">
              <a
                href="https://x.com/afgneurosurgeon"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={19} />
              </a>
              <a
                href="https:linkedin.com/in/dr-khalid-khan-zadran-67597036"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https:https://t.co/Mh5pZMgVdE"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={19} />
              </a>
              <a
                href={`mailto:${doctor.email || ""}`}
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="footer-legal">
            <span>
              © {new Date().getFullYear()} {doctor.name}
            </span>
            <span>All rights reserved.</span>
            <span>Medical information should be verified with the clinic.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}



function PageHeading({eyebrow,title,description}) {
  return <div className="page-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>;
}

function ServiceCard({item}) {
  return <motion.article className="service-card spotlight-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.15}} transition={{duration:0.5,delay:Math.max(0,(Number(item.number)||1)-1)*0.07}} whileHover={{y:-7,scale:1.015,transition:{duration:0.2}}}>
    <img src={item.image} alt="" loading="lazy"/>
    <div className="service-content"><div className="service-icon">{item.icon === 'target' ? <Target/> : item.icon === 'spine' ? <Activity/> : item.icon === 'nerve' ? <Microscope/> : <Brain/>}</div><span className="service-number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><Link to="/services" className="text-link">Explore service <ArrowRight size={15}/></Link></div>
  </motion.article >;
}

function Home() {
  return <>
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.12,delayChildren:0.12}}}}>
          <motion.span className="eyebrow eyebrow-light" variants={{hidden:{opacity:0,y:12,filter:"blur(5px)"},show:{opacity:1,y:0,filter:"blur(0px)"}}}>WELCOME TO MY PRACTICE</motion.span>
          <motion.h1 variants={{hidden:{opacity:0,y:22,filter:"blur(10px)"},show:{opacity:1,y:0,filter:"blur(0px)"}}}>{doctor.name}</motion.h1>
          <motion.h2 variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}}>{doctor.title}</motion.h2>
          <motion.p variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0} }}> Consultant neurosurgeon specializing in brain and spine surgery, based at Rifah Medical Complex in Kabul, Afghanistan. The supplied profile lists more than 16 years of experience.</motion.p>
          <motion.div className="hero-actions" variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}}><ButtonLink>Book a Consultation</ButtonLink><ButtonLink to="/about" secondary>Learn More</ButtonLink></motion.div>
          <motion.div className="hero-contact" variants={{hidden:{opacity:0,y:16},show:{opacity:1,y:0}}}>
            <div><MapPin/><span><strong>{doctor.clinic}</strong><small>{doctor.location}</small></span></div>
            <a href={`tel:${doctor.phoneLink}`}><Phone/><span><strong>{doctor.phone}</strong><small>Call the clinic</small></span></a>
          </motion.div>
        </motion.div>
        <motion.div className="hero-doctor" initial={{opacity:0,x:35,scale:0.98}} animate={{opacity:1,x:0,scale:1}} transition={{duration:0.85,ease:[0.22,1,0.36,1],delay:0.18}}><img src={imageDoctor} alt="Dr. Khalid Khan Zadran" /></motion.div>
      </div>
    </section>
    <section className="section section-soft">
      <div className="container">
        <Reveal className="section-intro"><div><span className="eyebrow">MY SPECIALIZATIONS</span><h2>Advanced Neurosurgical Care</h2></div><p>Information about areas of practice, including brain, spine, peripheral nerve conditions, and neuronavigation technology.</p></Reveal>
        <div className="service-grid">{services.map(item => <ServiceCard key={item.number} item={item}/>)}</div>
        <div className="center-action"><ButtonLink to="/services" secondary>View All Specializations</ButtonLink></div>
      </div>
    </section>
    <section className="section">
      <Reveal className="container about-preview">
        <div className="about-photo"><img src={imageDoctor} alt="Dr. Khalid Khan Zadran" loading="lazy"/><div className="photo-note"><ShieldCheck/><span><strong>Patient-focused approach</strong><small>Clear information and careful planning</small></span></div></div>
        <div className="about-preview-copy"><span className="eyebrow">ABOUT THE DOCTOR</span><h2>Professional experience. A human approach.</h2><p>Dr. Khalid Khan Zadran is a consultant neurosurgeon specializing in brain and spine surgery in Kabul, Afghanistan. The supplied profile describes more than 16 years of experience and research related to brain disorders.</p><p>The supplied information lists MBBS, MD, RMP, MCPS, and FCPS (Neurosurgery), and describes his involvement in establishing Afghanistan’s national neurosurgery association. Please verify credentials and historical claims before publication.</p><ButtonLink to="/about" secondary>Read Biography</ButtonLink></div>
        <div className="highlight-card"><h3>Profile at a glance</h3><div><GraduationCap/><span><strong>Medical education</strong><small>Ayub Medical College, Abbottabad (as provided)</small></span></div><div><Stethoscope/><span><strong>Specialty</strong><small>Neurosurgery</small></span></div><div><MapPin/><span><strong>Practice location</strong><small>Kabul, Afghanistan</small></span></div><div><CalendarDays/><span><strong>Consultation</strong><small>Request an appointment online</small></span></div></div>
      </Reveal>
    </section>
    <section className="cta-band"><Reveal className="container cta-inner"><div><span className="eyebrow eyebrow-light">TAKE THE NEXT STEP</span><h2>Have a question or need a consultation?</h2><p>Contact the clinic or send an appointment request online.</p></div><ButtonLink>Book an Appointment</ButtonLink></Reveal></section>
  </>;
}

function About() {
  return <main className="page-main"><div className="container"><PageHeading eyebrow="ABOUT" title="About Dr. Khalid Khan Zadran" description="Professional background, clinical interests, and approach to neurosurgical care."/><div className="two-column"><div className="profile-image"><img src={imageDoctor} alt="Dr. Khalid Khan Zadran"/></div><div className="prose"><span className="eyebrow">BIOGRAPHY</span><h2>Care built on knowledge and communication</h2><p>Dr. Khalid Khan Zadran is described in the provided project information as a consultant neurosurgeon specializing in brain and spine surgery in Kabul, Afghanistan.</p><p>The supplied profile lists education at Ayub Medical College in Abbottabad and FCPS Neurosurgery through the College of Physicians and Surgeons Pakistan. It also describes him as an Afghan brain-disorder researcher and as the first FCPS neurosurgeon in Afghanistan. Please verify these claims with official documentation before publication.</p><p>The aim of this website is to help patients and families find professional information, understand listed areas of practice, and contact the clinic to request a consultation.</p><ButtonLink to="/appointment">Request a Consultation</ButtonLink></div></div><div className="values-grid"><div className="value-card"><ShieldCheck/><h3>Clear communication</h3><p>Helping patients understand the consultation process and available next steps.</p></div><div className="value-card"><Brain/><h3>Brain & spine focus</h3><p>Clinical interests across brain, spine, and peripheral nerve conditions.</p></div><div className="value-card"><Microscope/><h3>Research interest</h3><p>Research related to brain disorders, as described in the supplied profile.</p></div></div></div></main>;
}

function Qualifications() {
  return <main className="page-main"><div className="container"><PageHeading eyebrow="EDUCATION & CREDENTIALS" title="Qualifications & Memberships" description="The credentials and professional organizations listed in the project brief. Please verify details before publication."/><div className="qual-layout"><section><h2 className="subheading">Listed qualifications</h2><div className="qualification-list">{qualifications.map(q=><article className="qualification-item" key={q.short}><div className="qual-mark"><GraduationCap/></div><div><h3>{q.short}</h3><p>{q.detail}</p></div><CheckCircle2 className="qual-check"/></article>)}</div><div className="notice"><ShieldCheck/><p><strong>Credential verification</strong><br/>These credentials are listed from the supplied information and should be verified against official documents before publication.</p></div></section><section className="membership-panel"><span className="eyebrow">PROFESSIONAL AFFILIATIONS</span><h2>Professional memberships</h2><p>Organizations listed in the provided information.</p>{memberships.map((m,i)=><div className="membership-item" key={m}><span>{String(i+1).padStart(2,'0')}</span><p>{m}</p></div>)}<div className="education-note"><h3>Medical education</h3><p>Ayub Medical College, Abbottabad</p><p>FCPS Neurosurgery, 2001–2015 (as supplied)</p><p>College of Physicians and Surgeons Pakistan — Consultant Neurosurgeon, December 2020–present (as supplied)</p></div></section></div></div></main>;
}

function Services() {
  return <main className="page-main"><div className="container"><PageHeading eyebrow="CLINICAL INTERESTS" title="Specializations & Services" description="A clear overview of the clinical areas described in the supplied profile. Individual treatment options depend on medical assessment."/><div className="service-grid service-grid-large">{services.map(item=><ServiceCard key={item.number} item={item}/>)}</div><section className="technology-panel"><div className="technology-icon"><Target size={42}/></div><div><span className="eyebrow">SURGICAL TECHNOLOGY</span><h2>Neuronavigation</h2><p>Neuronavigation uses medical imaging to help a surgical team orient themselves to relevant anatomy during selected procedures. Whether it is suitable depends on the case, available equipment, and the treating team's assessment.</p></div></section><div className="service-disclaimer">This page is general information only and is not a diagnosis or a substitute for a consultation with a qualified medical professional.</div></div></main>;
}

function Gallery() {
  return <main className="page-main"><div className="container"><PageHeading eyebrow="GALLERY" title="Clinical & Medical Gallery" description="Illustrative medical imagery for the portfolio design. These images are not claimed to depict the doctor, his clinic, or actual procedures."/><div className="gallery-grid">{galleryImages.map((item,i)=><figure className={`gallery-item gallery-${i+1}`} key={item.src}><img src={item.src} alt={item.alt} loading="lazy"/><figcaption>{item.alt}</figcaption></figure>)}</div><div className="notice"><ShieldCheck/><p>Before launch, replace these illustrative stock images with approved photos and ensure you have permission to publish them.</p></div></div></main>;
}

function Documents() {
  const documents = [
    'MBBS Certificate', 'MD Certificate', 'RMP Certificate', 'MCPS Certificate',
    'FCPS Neurosurgery Certificate', 'Ayub Medical College Educational Record',
    'College of Physicians and Surgeons Pakistan Fellowship / Verification',
    'Professional Membership Certificates'
  ];
  return <main className="page-main"><div className="container"><PageHeading eyebrow="EDUCATION & DOCUMENTS" title="Education & Documents" description="Document placeholders are ready. Verified certificates and records can be added here later."/><div className="documents-grid">{documents.map((name, i) => <article className="document-card" key={name}><div className="document-card-icon"><GraduationCap size={24}/></div><div><h3>{name}</h3><p>Document to be added</p></div><span className="document-status">Pending</span></article>)}</div><div className="notice"><ShieldCheck/><p>These are placeholders only. No certificates or verification documents have been fabricated. Add the actual approved files when available.</p></div></div></main>;
}

function Contact() {
  return <main className="page-main"><div className="container"><PageHeading eyebrow="CONTACT" title="Contact the Clinic" description="Use the contact details below to ask about consultation availability."/><div className="contact-layout"><div className="contact-cards"><div className="contact-card"><span><MapPin/></span><div><h3>Clinic</h3><p>{doctor.clinic}</p><small>{doctor.location}</small></div></div><div className="contact-card"><span><Phone/></span><div><h3>Phone</h3><p>{doctor.phone}</p><small>Call to ask about availability</small><a className="text-link" href={`tel:${doctor.phoneLink}`}>Call Now <ArrowRight size={15}/></a></div></div><div className="contact-card"><span><Clock/></span><div><h3>Appointments</h3><p>By request</p><small>Confirm clinic hours by phone.</small><Link className="text-link" to="/appointment">Online request <ArrowRight size={15}/></Link></div></div></div><div className="map-placeholder"><MapPin size={34}/><h3>Rifah Medical Complex</h3><p>Kabul, Afghanistan</p><p className="map-small">An exact clinic address was not provided, so a map pin cannot be placed reliably.</p><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rifah Medical Complex Kabul Afghanistan')}`} target="_blank" rel="noreferrer" className="button button-outline">Search on Google Maps <ArrowRight size={15}/></a></div></div><div className="contact-bottom"><h2>Ready to request an appointment?</h2><p>Send the clinic your preferred date and contact information.</p><ButtonLink>Book an Appointment</ButtonLink></div></div></main>;
}

function Appointment() {
  const { lang } = useLanguage();
  const fa = lang === 'fa';
  return <main className="page-main appointment-page"><div className="container">
    <PageHeading eyebrow={fa ? 'نوبت‌دهی آنلاین' : 'ONLINE APPOINTMENT'} title={fa ? 'گرفتن وقت مشاوره' : 'Book a Consultation'} description={fa ? 'برای انتخاب تاریخ و ساعت مناسب، از تقویم زیر استفاده کنید. نوبت از طریق Calendly تنظیم می‌شود.' : 'Choose an available date and time using the scheduler below. Booking is handled securely through Calendly.'}/>
    
<motion.section
  className="calendly-section"
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.55 }}
>
  <div className="calendly-intro">
    <CalendarDays size={28} />
    <div>
      <h2>
        {fa ? 'زمان مشاوره را انتخاب کنید' : 'Choose a consultation time'}
      </h2>
    </div>
  </div>

  <iframe
    title="Calendly appointment scheduler"
    src="https://calendly.com/d/5gw-xzj-33h/dipa-inhouse-meeting-discussion"
    width="100%"
    height="760"
    frameBorder="0"
    loading="lazy"
  />
</motion.section>

    <div className="appointment-contact-note"><Phone size={18}/><span>{fa ? 'برای پرسش‌های عمومی با کلینیک تماس بگیرید: ' : 'For general questions, contact the clinic: '}<strong>{doctor.phone}</strong></span></div>
  </div></main>;
}

const translations = {
  'WELCOME TO MY PRACTICE':'به مطب تخصصی من خوش آمدید', 'Book a Consultation':'درخواست مشاوره', 'Learn More':'بیشتر بدانید',
  'MY SPECIALIZATIONS':'تخصص‌های من', 'Advanced Neurosurgical Care':'مراقبت‌های پیشرفته جراحی اعصاب', 'View All Specializations':'مشاهده همه تخصص‌ها',
  'ABOUT THE DOCTOR':'درباره داکتر', 'Professional experience. A human approach.':'تجربه تخصصی، رویکرد انسانی', 'Read Biography':'خواندن زندگی‌نامه',
  'TAKE THE NEXT STEP':'گام بعدی', 'Have a question or need a consultation?':'پرسشی دارید یا به مشاوره نیاز دارید؟',
  'About Dr. Khalid Khan Zadran':'درباره داکتر خالد خان ځدراڼ', 'Qualifications & Memberships':'تحصیلات و عضویت‌ها',
  'Specializations & Services':'تخصص‌ها و خدمات', 'Clinical & Medical Gallery':'گالری طبی', 'Contact the Clinic':'تماس با کلینیک',
  'Education & Documents':'تحصیلات و اسناد', 'Document to be added':'سند بعداً اضافه می‌شود', 'MBBS Certificate':'سند فراغت MBBS',
  'MD Certificate':'سند MD', 'RMP Certificate':'سند RMP', 'MCPS Certificate':'سند MCPS', 'FCPS Neurosurgery Certificate':'سند تخصص جراحی اعصاب FCPS',
  'Ayub Medical College Educational Record':'اسناد تحصیلی کالج طبی ایوب', 'Professional Membership Certificates':'اسناد عضویت‌های مسلکی',
  'Pending':'در انتظار', 'Call Now':'همین اکنون تماس بگیرید', 'Home':'خانه', 'About':'درباره ما', 'Qualifications':'تحصیلات',
  'Services':'خدمات', 'Gallery':'گالری', 'Documents':'اسناد', 'Contact':'تماس', 'Clinic':'کلینیک', 'Phone':'شماره تماس',
  'Appointments':'نوبت‌دهی', 'Full name *':'نام کامل *', 'Phone number *':'شماره تماس *', 'Email address':'آدرس ایمیل',
  'Preferred date *':'تاریخ دلخواه *', 'Preferred time':'وقت دلخواه', 'Consultation type':'نوع مشاوره',
  'Brief message (optional)':'پیام کوتاه (اختیاری)', 'Send Appointment Request':'ارسال درخواست نوبت', 'Flexible':'هر وقت مناسب باشد',
  'In-person consultation':'مشاوره حضوری', 'Follow-up consultation':'مشاوره پیگیری', 'General inquiry':'پرسش عمومی',
  'Professional background, clinical interests, and approach to neurosurgical care.':'سوابق مسلکی، علاقه‌مندی‌های کلینیکی و رویکرد در مراقبت‌های جراحی اعصاب.',
  'Professional memberships':'عضویت‌های مسلکی', 'Listed qualifications':'مدارک و صلاحیت‌های درج‌شده', 'BIOGRAPHY':'زندگی‌نامه',
  'Contact the clinic or send an appointment request online.':'با کلینیک تماس بگیرید یا درخواست نوبت را آنلاین ارسال کنید.',
  'WELCOME TO MY PRACTICE':'به مطب تخصصی من خوش آمدید','Consultant Neurosurgeon | Brain & Spine Surgeon':'متخصص جراحی اعصاب | جراحی مغز و ستون فقرات',
  'Consultant neurosurgeon specializing in brain and spine surgery, based at Rifah Medical Complex in Kabul, Afghanistan. The supplied profile lists more than 16 years of experience.':'داکتر متخصص جراحی اعصاب و جراحی مغز و ستون فقرات در مجتمع طبی رفاه در کابل، افغانستان. در پروفایل ارائه‌شده بیش از ۱۶ سال تجربه ذکر شده است.',
  'Need an Appointment?':'به نوبت نیاز دارید؟','Send an appointment request online and the clinic can follow up with you.':'درخواست نوبت را آنلاین ارسال کنید تا کلینیک با شما تماس بگیرد.',
  'MY SPECIALIZATIONS':'تخصص‌های من','Information about areas of practice, including brain, spine, peripheral nerve conditions, and neuronavigation technology.':'معلومات درباره زمینه‌های کاری، از جمله بیماری‌های مغز، ستون فقرات، اعصاب محیطی و فناوری راهنمایی عصبی.',
  'ABOUT THE DOCTOR':'درباره داکتر','Professional experience. A human approach.':'تجربه مسلکی، رویکرد انسانی','Professional experience':'تجربه مسلکی','Patient-focused approach':'رویکرد بیمارمحور','Clear information and careful planning':'معلومات واضح و برنامه‌ریزی دقیق',
  'Profile at a glance':'نگاهی کوتاه به پروفایل','Medical education':'تحصیلات طبی','Specialty':'تخصص','Practice location':'محل فعالیت','Consultation':'مشاوره','Request an appointment online':'درخواست نوبت آنلاین','TAKE THE NEXT STEP':'گام بعدی','Have a question or need a consultation?':'پرسشی دارید یا به مشاوره نیاز دارید؟','Contact the clinic or send an appointment request online.':'با کلینیک تماس بگیرید یا درخواست نوبت را آنلاین ارسال کنید.',
  'Advanced Neurosurgical Care':'مراقبت‌های پیشرفته جراحی اعصاب','View All Specializations':'مشاهده همه تخصص‌ها','Brain & Spine Care':'مراقبت از مغز و ستون فقرات','Explore':'بخش‌ها','Contact':'تماس','Contact the Clinic':'تماس با کلینیک','About the Doctor':'درباره داکتر','Specializations':'تخصص‌ها','Request appointment':'درخواست نوبت','Call the clinic':'با کلینیک تماس بگیرید',
  'About Dr. Khalid Khan Zadran':'درباره داکتر خالد خان ځدراڼ','Professional background, clinical interests, and approach to neurosurgical care.':'سوابق مسلکی، علاقه‌مندی‌های کلینیکی و رویکرد در مراقبت‌های جراحی اعصاب.',
  'Contact the Clinic':'تماس با کلینیک','Use the contact details below to ask about consultation availability.':'برای پرسش درباره زمان‌های مشاوره، از معلومات تماس زیر استفاده کنید.','Call to ask about availability':'برای آگاهی از وقت‌های موجود تماس بگیرید','Confirm clinic hours by phone.':'ساعات کاری کلینیک را از طریق تلفن تأیید کنید.','By request':'با هماهنگی قبلی','Ready to request an appointment?':'آیا می‌خواهید نوبت بگیرید؟','Send the clinic your preferred date and contact information.':'تاریخ دلخواه و معلومات تماس خود را برای کلینیک بفرستید.','Search on Google Maps':'جستجو در گوگل مپس',
  'Education & Documents':'تحصیلات و اسناد','Document placeholders are ready. Verified certificates and records can be added here later.':'جای اسناد آماده است. تصدیق‌نامه‌ها و سوابق تأییدشده بعداً در این بخش اضافه می‌شوند.','These are placeholders only. No certificates or verification documents have been fabricated. Add the actual approved files when available.':'این‌ها فقط جایگاه‌های خالی هستند. هیچ تصدیق‌نامه یا سند تأییدی ساخته نشده است. اسناد اصلی و تأییدشده را در صورت موجود بودن اضافه کنید.',
  'Specializations & Services':'تخصص‌ها و خدمات','Clinical & Medical Gallery':'گالری کلینیکی و طبی','Page not found':'صفحه پیدا نشد',"The page you're looking for does not exist.":'صفحه‌ای که جستجو می‌کنید وجود ندارد.','Return Home':'بازگشت به صفحه اصلی',
  'Book a Consultation':'گرفتن وقت مشاوره','Choose an available date and time using the scheduler below. Booking is handled securely through Calendly.':'از طریق تقویم زیر تاریخ و ساعت مناسب را انتخاب کنید. تنظیم نوبت از طریق Calendly انجام می‌شود.','Choose a consultation time':'زمان مشاوره را انتخاب کنید','The appointment calendar loads below. Complete the steps in Calendly to submit your booking request.':'تقویم نوبت‌دهی در پایین نمایش داده می‌شود. مراحل Calendly را برای ثبت درخواست تکمیل کنید.','If the calendar does not appear, ':'اگر تقویم نمایش داده نشد، ','open the scheduling page directly.':'صفحه نوبت‌دهی را مستقیماً باز کنید.','For general questions, contact the clinic: ':'برای پرسش‌های عمومی با کلینیک تماس بگیرید: '
};

Object.assign(translations, {
  'Professional information and appointment requests for neurosurgical consultation in Kabul, Afghanistan.':'معلومات مسلکی و درخواست‌های نوبت برای مشاوره جراحی اعصاب در کابل، افغانستان.',
  'Explore':'بخش‌ها','About the Doctor':'درباره داکتر','Specializations':'تخصص‌ها','Request appointment':'درخواست نوبت','Brain & Spine Care':'مراقبت از مغز و ستون فقرات',
  'Consultant neurosurgeon specializing in brain and spine surgery in Kabul, Afghanistan.':'متخصص جراحی اعصاب و جراحی مغز و ستون فقرات در کابل، افغانستان.',
  'Dr. Khalid Khan Zadran is a consultant neurosurgeon specializing in brain and spine surgery in Kabul, Afghanistan. The supplied profile describes more than 16 years of experience and research related to brain disorders.':'داکتر خالد خان ځدراڼ متخصص جراحی اعصاب و جراحی مغز و ستون فقرات در کابل، افغانستان است. در پروفایل ارائه‌شده بیش از ۱۶ سال تجربه و پژوهش در زمینه اختلالات مغزی ذکر شده است.',
  'The supplied information lists MBBS, MD, RMP, MCPS, and FCPS (Neurosurgery), and describes his involvement in establishing Afghanistan’s national neurosurgery association. Please verify credentials and historical claims before publication.':'معلومات ارائه‌شده مدارک MBBS، MD، RMP، MCPS و FCPS (جراحی اعصاب) را فهرست می‌کند و از همکاری او در ایجاد انجمن ملی جراحی اعصاب افغانستان یاد می‌کند. پیش از نشر، مدارک و ادعاهای تاریخی را تأیید کنید.',
  'Ayub Medical College, Abbottabad (as provided)':'کالج طبی ایوب، ایبت‌آباد (طبق معلومات ارائه‌شده)','Neurosurgery':'جراحی اعصاب','Kabul, Afghanistan':'کابل، افغانستان',
  'About Dr. Khalid Khan Zadran':'درباره داکتر خالد خان ځدراڼ','Care built on knowledge and communication':'مراقبت بر پایه دانش و ارتباط مؤثر',
  'Dr. Khalid Khan Zadran is described in the provided project information as a consultant neurosurgeon specializing in brain and spine surgery in Kabul, Afghanistan.':'در معلومات این پروژه، داکتر خالد خان ځدراڼ به‌عنوان متخصص جراحی اعصاب و جراحی مغز و ستون فقرات در کابل، افغانستان معرفی شده است.',
  'The supplied profile lists education at Ayub Medical College in Abbottabad and FCPS Neurosurgery through the College of Physicians and Surgeons Pakistan. It also describes him as an Afghan brain-disorder researcher and as the first FCPS neurosurgeon in Afghanistan. Please verify these claims with official documentation before publication.':'در پروفایل ارائه‌شده، تحصیل در کالج طبی ایوب در ایبت‌آباد و تخصص جراحی اعصاب FCPS از کالج داکتران و جراحان پاکستان ذکر شده است. همچنین از او به‌عنوان پژوهشگر اختلالات مغزی و نخستین متخصص جراحی اعصاب FCPS در افغانستان یاد شده است. پیش از نشر، این موارد را با اسناد رسمی تأیید کنید.',
  'The aim of this website is to help patients and families find professional information, understand listed areas of practice, and contact the clinic to request a consultation.':'هدف این وب‌سایت کمک به بیماران و خانواده‌ها برای یافتن معلومات مسلکی، آشنایی با زمینه‌های کاری و تماس با کلینیک جهت درخواست مشاوره است.',
  'Clear communication':'ارتباط واضح','Helping patients understand the consultation process and available next steps.':'کمک به بیماران برای درک روند مشاوره و مراحل بعدی.','Brain & spine focus':'تمرکز بر مغز و ستون فقرات','Clinical interests across brain, spine, and peripheral nerve conditions.':'زمینه‌های علاقه‌مندی کلینیکی شامل بیماری‌های مغز، ستون فقرات و اعصاب محیطی است.','Research interest':'علاقه‌مندی پژوهشی','Research related to brain disorders, as described in the supplied profile.':'پژوهش درباره اختلالات مغزی، طبق پروفایل ارائه‌شده.',
  'EDUCATION & CREDENTIALS':'تحصیلات و مدارک','The credentials and professional organizations listed in the project brief. Please verify details before publication.':'مدارک و سازمان‌های مسلکی درج‌شده در معلومات پروژه. پیش از نشر، جزئیات را تأیید کنید.','Credential verification':'تأیید مدارک','These credentials are listed from the supplied information and should be verified against official documents before publication.':'این مدارک بر اساس معلومات ارائه‌شده درج شده‌اند و باید پیش از نشر با اسناد رسمی تأیید شوند.','PROFESSIONAL AFFILIATIONS':'وابستگی‌های مسلکی','Organizations listed in the provided information.':'سازمان‌های درج‌شده در معلومات ارائه‌شده.','FCPS Neurosurgery, 2001–2015 (as supplied)':'تخصص جراحی اعصاب FCPS، ۲۰۰۱–۲۰۱۵ (طبق معلومات ارائه‌شده)','College of Physicians and Surgeons Pakistan — Consultant Neurosurgeon, December 2020–present (as supplied)':'کالج داکتران و جراحان پاکستان — متخصص جراحی اعصاب، دسامبر ۲۰۲۰ تا اکنون (طبق معلومات ارائه‌شده)',
  'CLINICAL INTERESTS':'زمینه‌های علاقه‌مندی کلینیکی','A clear overview of the clinical areas described in the supplied profile. Individual treatment options depend on medical assessment.':'مروری بر زمینه‌های کلینیکی ذکرشده در پروفایل. گزینه‌های درمانی به ارزیابی طبی بستگی دارند.','SURGICAL TECHNOLOGY':'فناوری جراحی','Neuronavigation':'ناوبری عصبی','Neuronavigation uses medical imaging to help a surgical team orient themselves to relevant anatomy during selected procedures. Whether it is suitable depends on the case, available equipment, and the treating team\'s assessment.':'ناوبری عصبی از تصاویر طبی برای کمک به تیم جراحی در تشخیص موقعیت ساختارهای بدن در برخی عملیات استفاده می‌کند. مناسب‌بودن آن به وضعیت بیمار، تجهیزات موجود و ارزیابی تیم درمان بستگی دارد.','This page is general information only and is not a diagnosis or a substitute for a consultation with a qualified medical professional.':'این صفحه صرفاً معلومات عمومی است و جایگزین تشخیص یا مشاوره با متخصص صحی واجد شرایط نمی‌شود.',
  'Illustrative medical imagery for the portfolio design. These images are not claimed to depict the doctor, his clinic, or actual procedures.':'تصاویر طبی نمونه برای طراحی وب‌سایت هستند و ادعا نمی‌شود که داکتر، کلینیک او یا عملیات واقعی را نشان می‌دهند.','Before launch, replace these illustrative stock images with approved photos and ensure you have permission to publish them.':'پیش از نشر وب‌سایت، تصاویر نمونه را با عکس‌های تأییدشده جایگزین کنید و اجازه نشر آن‌ها را داشته باشید.',
  'Document placeholders are ready. Verified certificates and records can be added here later.':'جایگاه اسناد آماده است. تصدیق‌نامه‌ها و سوابق تأییدشده بعداً در این بخش اضافه می‌شوند.','These are placeholders only. No certificates or verification documents have been fabricated. Add the actual approved files when available.':'این‌ها فقط جایگاه خالی هستند. هیچ تصدیق‌نامه یا سند تأییدی ساخته نشده است. در صورت موجود بودن، فایل‌های اصلی و تأییدشده را اضافه کنید.',
  'Use the contact details below to ask about consultation availability.':'برای پرسش درباره زمان‌های مشاوره از معلومات تماس زیر استفاده کنید.','Call to ask about availability':'برای آگاهی از وقت‌های موجود تماس بگیرید','Confirm clinic hours by phone.':'ساعات کاری کلینیک را از طریق تلفن تأیید کنید.','By request':'با هماهنگی قبلی','Ready to request an appointment?':'آیا می‌خواهید نوبت بگیرید؟','Send the clinic your preferred date and contact information.':'تاریخ دلخواه و معلومات تماس خود را برای کلینیک بفرستید.','Online request':'درخواست آنلاین','An exact clinic address was not provided, so a map pin cannot be placed reliably.':'آدرس دقیق کلینیک ارائه نشده است؛ بنابراین محل دقیق روی نقشه قابل تعیین نیست.',
  'Brain Tumors & Structural Disorders':'تومورهای مغزی و اختلالات ساختاری','Assessment and treatment planning for brain tumors, trauma, and structural brain disorders.':'ارزیابی و برنامه‌ریزی درمان تومورهای مغزی، آسیب‌ها و اختلالات ساختاری مغز.','Spine & Disc Conditions':'بیماری‌های ستون فقرات و دیسک','Evaluation of disc problems, spinal conditions, nerve compression, and complex spinal reconstruction needs.':'ارزیابی مشکلات دیسک، بیماری‌های ستون فقرات، فشار بر اعصاب و نیازهای پیچیده بازسازی ستون فقرات.','Peripheral Nerve Conditions':'بیماری‌های اعصاب محیطی','Diagnosis and surgical treatment planning for peripheral nerve conditions and related disorders.':'تشخیص و برنامه‌ریزی درمان جراحی برای بیماری‌های اعصاب محیطی و اختلالات مرتبط.','Neuronavigation Technology':'فناوری ناوبری عصبی','Neuronavigation is an image-guided technology used to support surgical planning and precise orientation.':'ناوبری عصبی فناوری هدایت‌شده با تصویر است که به برنامه‌ریزی جراحی و تعیین دقیق موقعیت کمک می‌کند.',
  'Medical brain imaging':'تصویربرداری طبی مغز','Medical technology in a clinical setting':'فناوری طبی در محیط کلینیکی','Healthcare professionals in a clinical setting':'کارکنان صحی در محیط کلینیکی','Spine and healthcare reference image':'تصویر مرجع ستون فقرات و مراقبت صحی',
  'College of Physicians and Surgeons Pakistan Fellowship / Verification':'تأییدیه / فلوشیپ کالج داکتران و جراحان پاکستان','Switch language':'تغییر زبان','Toggle navigation':'باز و بسته کردن فهرست'
});

function TranslationLayer({lang}) {
  React.useEffect(() => {
    const apply = () => {
      document.documentElement.lang = lang === 'fa' ? 'fa-AF' : 'en';
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
      document.body.classList.toggle('dari-mode', lang === 'fa');
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      const entries = Object.entries(translations).sort((a,b) => b[0].length-a[0].length);
      nodes.forEach(node => {
        if (node.__originalText === undefined) node.__originalText = node.nodeValue;
        const original = node.__originalText.trim();
        if (!original) return;
        const target = lang === 'fa' ? entries.reduce((value,[en,fa]) => value.replaceAll(en,fa), node.__originalText) : node.__originalText;
        if (node.nodeValue !== target) node.nodeValue = target;
      });
      document.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el => {
        ['placeholder','title','aria-label','alt'].forEach(attr => {
          if (!el.hasAttribute(attr)) return;
          const key = `__original_${attr}`;
          if (el[key] === undefined) el[key] = el.getAttribute(attr);
          const original = el[key];
          let value = original;
          if (lang === 'fa') entries.forEach(([en,fa]) => { value = value.replaceAll(en,fa); });
          if (el.getAttribute(attr) !== value) el.setAttribute(attr,value);
        });
      });
    };
    apply();
    const observer = new MutationObserver(() => apply());
    observer.observe(document.body, {childList:true,subtree:true});
    return () => observer.disconnect();
  }, [lang]);
  return null;
}

export default function App() {
  const [lang, setLang] = React.useState('en');
  const location = useLocation();
  return <LanguageContext.Provider value={{lang,setLang}}><TranslationLayer lang={lang}/><Header/><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.25,ease:'easeOut'}}><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/qualifications" element={<Qualifications/>}/><Route path="/services" element={<Services/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/documents" element={<Documents/>}/><Route path="/contact" element={<Contact/>}/><Route path="/appointment" element={<Appointment/>}/><Route path="*" element={<main className="page-main"><div className="container"><PageHeading eyebrow="404" title="Page not found" description="The page you're looking for does not exist."/><ButtonLink to="/">Return Home</ButtonLink></div></main>}/></Routes></motion.div></AnimatePresence><Footer/></LanguageContext.Provider>;
}
