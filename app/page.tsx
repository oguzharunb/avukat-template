"use client";

/* eslint-disable @next/next/no-img-element -- Remote img elements are explicitly requested; Unsplash supplies responsive optimized images. */

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Scale,
  Building2,
  Landmark,
  Handshake,
  ShieldCheck,
  BriefcaseBusiness,
  Check,
  Download,
  Plus,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const courtImage =
  "https://images.unsplash.com/photo-1701605919891-1824e8dae598";
const columnsImage =
  "https://images.unsplash.com/photo-1636652966850-5ac4d02370e9";
const services = [
  {
    icon: Building2,
    title: "Şirketler & Ticaret",
    label: "İşinizin her aşamasında.",
    description:
      "Şirketinizin kuruluşundan büyümesine, ticari ilişkilerinizden kurumsal kararlarınıza kadar hukuki ihtiyaçlarınıza bütüncül bir bakış.",
    topics: [
      "Şirket kuruluşu ve kurumsal yapı",
      "Ticari sözleşmeler",
      "Ortaklık ilişkileri",
      "Birleşme ve devralma süreçleri",
    ],
  },
  {
    icon: Landmark,
    title: "Gayrimenkul",
    label: "Sağlam temeller, güvenli adımlar.",
    description:
      "Gayrimenkul yatırımlarında, mülkiyet ilişkilerinde ve kira süreçlerinde belgelere dayanan, özenli bir değerlendirme.",
    topics: [
      "Alım ve satım süreçleri",
      "Kira ilişkileri",
      "Tapu ve mülkiyet konuları",
      "İnşaat sözleşmeleri",
    ],
  },
  {
    icon: Handshake,
    title: "Aile & Miras",
    label: "Hayatın hassas dönemlerinde.",
    description:
      "Aile ilişkilerini ve geleceğe dair kararları ilgilendiren süreçlerde mahremiyeti ve kişisel ihtiyaçları merkeze alan bir yaklaşım.",
    topics: [
      "Aile hukukuna ilişkin uyuşmazlıklar",
      "Malvarlığı ilişkileri",
      "Miras planlaması",
      "Miras paylaşımı",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "İş Hukuku",
    label: "Dengeli ilişkiler, net çözümler.",
    description:
      "Çalışan ve işveren ilişkilerinde, iş hayatının değişen ihtiyaçlarını dikkate alan hukuki danışmanlık ve süreç takibi.",
    topics: [
      "İş sözleşmeleri",
      "Çalışma ilişkileri",
      "İşçilik alacakları",
      "İş uyuşmazlıkları",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Uyuşmazlık Çözümü",
    label: "Her ihtimale hazırlıklı.",
    description:
      "Her uyuşmazlığı kendi koşulları içinde ele alarak müzakere, arabuluculuk ve dava süreçlerine yönelik yol haritası.",
    topics: [
      "Dava öncesi değerlendirme",
      "Müzakere süreçleri",
      "Arabuluculukta temsil",
      "Dava ve icra takibi",
    ],
  },
  {
    icon: Scale,
    title: "Hukuki Danışmanlık",
    label: "Sorunlardan önce, yanınızda.",
    description:
      "Bireylerin ve kurumların günlük kararlarında hukuki boyutu görünür kılan, sürdürülebilir ve önleyici danışmanlık.",
    topics: [
      "Sözleşme inceleme",
      "Hukuki risk değerlendirmesi",
      "Düzenli kurumsal danışmanlık",
      "Kişisel veri süreçleri",
    ],
  },
];
const faqs = [
  [
    "İlk görüşmede neler konuşacağız?",
    "İlk görüşme, sizi ve ihtiyacınızı anlamaya ayrılır. Sürecin geçmişini, beklentilerinizi ve varsa ilgili belgeleri birlikte değerlendirerek sonraki adımları konuşuruz.",
  ],
  [
    "Görüşmeye nasıl hazırlanabilirim?",
    "Konuyla ilgili tarihleri, temel sorularınızı ve elinizdeki belgelerin listesini hazırlamanız görüşmeyi kolaylaştırır. Hassas belgelerinizi açık internet formları üzerinden paylaşmamanızı öneririz.",
  ],
  [
    "Çevrim içi görüşme yapabilir miyiz?",
    "Görüşme biçimi, randevu planlanırken birlikte belirlenebilir. Çevrim içi görüşme tercihinizi görüşme notunuza ekleyebilirsiniz.",
  ],
  [
    "Hukuki süreç hakkında nasıl bilgilendirilirim?",
    "İletişim yöntemi ve bilgilendirme düzeni, çalışmanın başında belirlenir. Önemli gelişmeleri ve sıradaki adımları anlaşılır bir dille paylaşmak yaklaşımımızın temelidir.",
  ],
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#"
      aria-label="VERA Hukuk ana sayfa"
      className={`brand ${light ? "brand-light" : ""}`}
    >
      <span className="brand-name">
        vera<span className="brand-dot">.</span>
      </span>
      <span className="brand-sub">HUKUK & DANIŞMANLIK</span>
    </a>
  );
}
function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [detail, setDetail] = useState<number | null>(null);
  const [info, setInfo] = useState<"privacy" | "site" | null>(null);
  const [request, setRequest] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    elements.forEach((el) => observer.observe(el));
    const sections = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => sections.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      sections.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuPanel.current?.querySelector("a")?.focus();
    const keyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [
          menuButton.current,
          ...Array.from(
            menuPanel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        if (e.shiftKey && document.activeElement === items[0]) {
          e.preventDefault();
          items[items.length - 1]?.focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === items[items.length - 1]
        ) {
          e.preventDefault();
          items[0]?.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth > 850) setMenuOpen(false);
    };
    document.addEventListener("keydown", keyboard);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", keyboard);
      window.removeEventListener("resize", resize);
    };
  }, [menuOpen]);

  const nav = [
    { id: "yaklasim", title: "Büromuz" },
    { id: "uzmanlik", title: "Çalışma Alanlarımız" },
    { id: "surec", title: "Yaklaşımımız" },
    { id: "sorular", title: "Sıkça Sorulanlar" },
  ];
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `VERA HUKUK — ÖN GÖRÜŞME NOTU\n\nAd Soyad: ${data.get("name")}\nE-posta: ${data.get("email")}\nKonu: ${data.get("topic")}\n\n${data.get("message")}\n\nBu not cihazınızda oluşturulmuştur. Herhangi bir yere gönderilmemiştir ve randevu oluşturmaz.`;
    setRequest(text);
  };
  const download = () => {
    if (!request) return;
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + request], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "vera-gorusme-notu.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        İçeriğe geç
      </a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <Brand />
          <nav aria-label="Ana menü" className="desktop-nav">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.title}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#iletisim">
            Birlikte konuşalım <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div ref={menuPanel} className="mobile-menu" id="mobile-menu">
            <span className="menu-caption">HER ADIMDA YANINIZDA.</span>
            {nav.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{i + 1}</span>
                {item.title}
                <ArrowUpRight size={20} />
              </a>
            ))}
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>
              <span>05</span>Birlikte konuşalım
              <ArrowUpRight size={20} />
            </a>
            <p>Hukuka özen. İnsana değer.</p>
          </div>
        )}
      </header>
      <main id="main" inert={menuOpen}>
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <SectionLabel>BAĞIMSIZ HUKUK. ORTAK GÜVEN.</SectionLabel>
            <h1 id="hero-title">
              Hayat değişir.
              <br />
              Haklarınız
              <br />
              <em>güvende olsun.</em>
            </h1>
            <p className="hero-description">
              Karmaşık süreçlerde net bir yol.
              <br />
              Her kararınızda, her adımınızda yanınızdayız.
            </p>
            <div className="hero-actions">
              <a className="button button-burgundy" href="#iletisim">
                Birlikte konuşalım <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#uzmanlik">
                Çalışma alanlarımız <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="fine-rule" />
              <span>Hukuka özen. İnsana değer.</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={`${courtImage}?auto=format&fit=crop&w=1300&q=85`}
              srcSet={`${courtImage}?auto=format&fit=crop&w=700&q=80 700w, ${courtImage}?auto=format&fit=crop&w=1300&q=85 1300w`}
              sizes="(max-width: 850px) 100vw, 48vw"
              alt="Gün ışığında yükselen klasik adliye sütunları"
              width={900}
              height={1100}
              fetchPriority="high"
            />
            <div className="image-shade" />
            <div className="image-topline">
              <span>VERA PERSPEKTİFİ</span>
              <Scale size={22} strokeWidth={1.2} />
            </div>
            <div className="hero-image-caption">
              <span>
                Güçlü bir duruş.
                <br />
                İnsani bir yaklaşım.
              </span>
              <a
                href="#yaklasim"
                className="image-circle"
                aria-label="Büromuzun yaklaşımını keşfedin"
              >
                <ArrowDown size={24} strokeWidth={1.4} />
              </a>
            </div>
            <span className="image-side-label">
              İLKELERİMİZDEN ALDIĞIMIZ GÜÇLE.
            </span>
          </div>
        </section>
        <div className="principles-bar section-shell">
          <span>
            <ShieldCheck size={20} strokeWidth={1.3} /> Mesleki özen
          </span>
          <span>
            <Handshake size={20} strokeWidth={1.3} /> Şeffaf iletişim
          </span>
          <span>
            <Scale size={20} strokeWidth={1.3} /> Bağımsız yaklaşım
          </span>
          <span>
            <Landmark size={20} strokeWidth={1.3} /> Kalıcı güven
          </span>
        </div>

        <section
          className="expertise section-shell section-space"
          id="uzmanlik"
        >
          <div className="section-heading reveal">
            <div>
              <SectionLabel>ÇALIŞMA ALANLARIMIZ</SectionLabel>
              <h2>
                Her ihtiyaç farklı.
                <br />
                <em>Özenimiz aynı.</em>
              </h2>
            </div>
            <p>
              Hayatın ve iş dünyasının farklı alanlarında,
              <br className="desktop-break" /> ihtiyacınıza odaklanan hukuki
              destek.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <button
                key={service.title}
                className={`service-card reveal ${i === 0 ? "service-featured" : ""}`}
                onClick={() => setDetail(i)}
                aria-label={`${service.title} hakkında bilgi`}
                style={{ transitionDelay: `${(i % 3) * 65}ms` }}
              >
                <div className="service-top">
                  <service.icon size={30} strokeWidth={1.25} />
                  <span>0{i + 1}</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.label}</p>
                </div>
                <div className="service-bottom">
                  <span>Yakından inceleyin</span>
                  <ArrowUpRight size={21} strokeWidth={1.5} />
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="about section-shell section-space" id="yaklasim">
          <div className="about-image reveal">
            <img
              src={`${columnsImage}?auto=format&fit=crop&w=1000&q=85`}
              alt="Klasik mimaride taş sütunlar ve dengeli cephe ayrıntıları"
              width={800}
              height={1000}
              loading="lazy"
            />
            <div className="about-stamp">
              <Scale size={27} strokeWidth={1.2} />
              <span>
                HUKUKA ÖZEN.
                <br />
                İNSANA DEĞER.
              </span>
            </div>
            <span className="photo-credit">MİMARİDE DENGE. HUKUKTA İLKE.</span>
          </div>
          <div className="about-copy reveal">
            <SectionLabel>VERA’NIN YAKLAŞIMI</SectionLabel>
            <h2>
              Bir dosyadan
              <br />
              <em>çok daha fazlası.</em>
            </h2>
            <p className="about-lead">
              Her hukuki meselenin ardında bir insan, bir emek, bir gelecek var.
            </p>
            <p>
              Sizi dinleyerek başlarız. İhtiyacınızı anlamadan çözüm önermeyiz.
              Karmaşık hukuki konuları anlaşılır kılar, seçeneklerinizi birlikte
              değerlendiririz.
            </p>
            <p>
              Bizim için güven; büyük sözlerden değil, özenle atılan adımlardan
              doğar. İlk görüşmeden son adıma kadar aynı dikkat, aynı açıklık.
            </p>
            <a className="text-link underline-link" href="#surec">
              Birlikte nasıl ilerliyoruz? <ArrowUpRight size={19} />
            </a>
            <div className="about-signature">
              <span>vera.</span>
              <span>Hukuk & Danışmanlık</span>
            </div>
          </div>
        </section>

        <section className="philosophy">
          <div className="section-shell philosophy-inner reveal">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <SectionLabel light>İLKELERİMİZ, PUSULAMIZ.</SectionLabel>
            <h2>
              İyi hukuk, önce
              <br />
              <em>iyi anlamakla başlar.</em>
            </h2>
            <p>
              Doğru soruları sorar, dikkatle dinleriz.
              <br />
              Çünkü size uygun yol, sizi anlamaktan geçer.
            </p>
            <span className="philosophy-rule" />
          </div>
          <span className="philosophy-word" aria-hidden="true">
            vera.
          </span>
        </section>

        <section className="process section-shell section-space" id="surec">
          <div className="section-heading reveal">
            <div>
              <SectionLabel>BİRLİKTE İLERLİYORUZ</SectionLabel>
              <h2>
                Belirsizlikten,
                <br />
                <em>bir yol haritasına.</em>
              </h2>
            </div>
            <p>
              Nereden başlayacağınızı bilmeniz gerekmez.
              <br />
              İlk adımı birlikte atarız.
            </p>
          </div>
          <div className="process-grid">
            {[
              {
                title: "Sizi dinliyoruz.",
                text: "Hikâyenizi, önceliklerinizi ve beklentilerinizi anlamak için zaman ayırıyoruz.",
              },
              {
                title: "Yolu netleştiriyoruz.",
                text: "Seçenekleri, olası riskleri ve sürecin adımlarını açık bir dille birlikte değerlendiriyoruz.",
              },
              {
                title: "Birlikte ilerliyoruz.",
                text: "Her aşamada sizi bilgilendiriyor, gelişmeleri ve sonraki adımları sizinle paylaşıyoruz.",
              },
            ].map((step, i) => (
              <article className="process-card reveal" key={step.title}>
                <div className="step-top">
                  <span>0{i + 1}</span>
                  <span className="step-line" />
                  {i < 2 ? <ArrowRight size={17} /> : <Check size={17} />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq-wrap" id="sorular">
          <div className="faq section-shell section-space">
            <div className="faq-intro reveal">
              <SectionLabel>AKLINIZDAKİ SORULAR</SectionLabel>
              <h2>
                Önce,
                <br />
                <em>biraz netlik.</em>
              </h2>
              <p>
                İlk adımı atmadan önce
                <br />
                bilmek isteyebilecekleriniz.
              </p>
              <a href="#iletisim" className="text-link">
                Başka bir sorunuz mu var? <ArrowUpRight size={18} />
              </a>
            </div>
            <Accordion
              className="faq-list reveal"
              type="single"
              collapsible
              defaultValue="q0"
            >
              {faqs.map(([q, a], i) => (
                <AccordionItem value={`q${i}`} key={q} className="faq-item">
                  <AccordionTrigger className="faq-question">
                    <span className="faq-number">0{i + 1}</span>
                    <span>{q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-answer">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="contact section-shell section-space" id="iletisim">
          <div className="contact-copy reveal">
            <SectionLabel>İLK ADIM, BİR MERHABA.</SectionLabel>
            <h2>
              Birlikte
              <br />
              <em>konuşalım.</em>
            </h2>
            <p>
              Bir sorunuz, bir kararınız ya da
              <br />
              nereden başlayacağınızı bilmediğiniz bir süreç.
              <br />
              Sizi dinlemeye hazırız.
            </p>
            <div className="contact-note">
              <Scale size={26} strokeWidth={1.2} />
              <p>
                Güven, doğru bir
                <br />
                <strong>iletişimle başlar.</strong>
              </p>
            </div>
            <p className="demo-note">
              VERA, örnek bir hukuk bürosu kimliğidir.
              <br />
              Bu demo üzerinden randevu veya mesaj gönderilmez.
            </p>
          </div>
          <div className="contact-form-wrap reveal">
            <form ref={formRef} onSubmit={submit} className="contact-form">
              <div className="form-heading">
                <span>Ön görüşme notunuz</span>
                <ArrowUpRight size={22} />
              </div>
              <p className="form-intro">
                Konuşmak istediklerinizi bir araya getirin.
              </p>
              <div className="form-row">
                <label>
                  Adınız ve soyadınız
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Ad Soyad"
                  />
                </label>
                <label>
                  E-posta adresiniz
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={150}
                    placeholder="ornek@eposta.com"
                  />
                </label>
              </div>
              <label>
                Hangi konuda görüşmek istersiniz?
                <select name="topic" defaultValue="" required>
                  <option value="" disabled>
                    Konu seçiniz
                  </option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Diğer / Henüz emin değilim</option>
                </select>
              </label>
              <label>
                Kısaca bahseder misiniz?
                <textarea
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={3}
                  placeholder="Görüşmek istediğiniz konuyu kısaca yazabilirsiniz…"
                />
              </label>
              <p className="form-privacy">
                Bilgileriniz yalnızca bu sayfada işlenir; bir sunucuya
                gönderilmez. Lütfen hassas bilgi paylaşmayın.
              </p>
              <button
                className="button button-burgundy form-submit"
                type="submit"
              >
                Görüşme notu oluştur <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer" inert={menuOpen}>
        <div className="section-shell">
          <div className="footer-main">
            <div>
              <Brand light />
              <p>
                Hukuka özen.
                <br />
                İnsana değer.
              </p>
            </div>
            <div className="footer-links">
              <span>KEŞFEDİN</span>
              <a href="#yaklasim">Büromuz</a>
              <a href="#uzmanlik">Çalışma Alanlarımız</a>
              <a href="#surec">Yaklaşımımız</a>
            </div>
            <div className="footer-links">
              <span>İLETİŞİMDE KALALIM</span>
              <a href="#iletisim">
                Birlikte konuşalım <ArrowUpRight size={15} />
              </a>
              <a href="#sorular">Sıkça Sorulanlar</a>
              <a
                href="https://unsplash.com/photos/A4Qca4vX1Q0"
                target="_blank"
                rel="noreferrer"
              >
                Fotoğraflar: Unsplash <ArrowUpRight size={13} />
              </a>
            </div>
            <a href="#" className="back-top" aria-label="Sayfanın başına dön">
              <ArrowUpRight size={23} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} VERA Hukuk · Tasarım demosu
            </span>
            <div>
              <button onClick={() => setInfo("privacy")}>Gizlilik</button>
              <button onClick={() => setInfo("site")}>Site hakkında</button>
              <span>Özenle tasarlandı.</span>
            </div>
          </div>
        </div>
      </footer>
      <Dialog
        open={detail !== null}
        onOpenChange={(open) => {
          if (!open) setDetail(null);
        }}
      >
        <DialogContent className="vera-dialog" showCloseButton={false}>
          {detail !== null && (
            <>
              <DialogClose className="dialog-x" aria-label="Detayı kapat">
                <X size={20} />
              </DialogClose>
              <span className="dialog-kicker">
                ÇALIŞMA ALANLARIMIZ · 0{detail + 1}
              </span>
              <DialogTitle className="dialog-title">
                {services[detail].title}
              </DialogTitle>
              <DialogDescription className="dialog-description">
                {services[detail].description}
              </DialogDescription>
              <div className="topic-list">
                {services[detail].topics.map((t) => (
                  <div key={t}>
                    <Plus size={16} />
                    {t}
                  </div>
                ))}
              </div>
              <a
                className="button button-burgundy"
                href="#iletisim"
                onClick={() => setDetail(null)}
              >
                Bu konuda konuşalım <ArrowUpRight size={18} />
              </a>
              <p className="dialog-fine">
                Bu içerik örnek hizmet tanıtımıdır; hukuki görüş niteliği
                taşımaz.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={info !== null}
        onOpenChange={(open) => {
          if (!open) setInfo(null);
        }}
      >
        <DialogContent className="vera-dialog" showCloseButton={false}>
          <DialogClose className="dialog-x" aria-label="Pencereyi kapat">
            <X size={20} />
          </DialogClose>
          <DialogTitle className="dialog-title">
            {info === "privacy" ? "Gizliliğiniz önemli." : "Bu site hakkında."}
          </DialogTitle>
          <DialogDescription className="dialog-description">
            {info === "privacy"
              ? "Bu tasarım demosu form bilgilerinizi bir sunucuya göndermez ve kalıcı olarak saklamaz. Oluşturulan not yalnızca açık sayfada tutulur; indirmeyi seçerseniz cihazınıza kaydedilir. Harici fotoğraflar Unsplash, yazı tipleri Google Fonts üzerinden yüklenir; bu hizmetlere bağlantı kurulduğunda IP adresi gibi teknik bilgiler iletilebilir. Analiz veya reklam çerezleri kullanılmaz."
              : "VERA Hukuk, web tasarımını göstermek amacıyla oluşturulmuş örnek bir markadır; bu site gerçek bir hukuk bürosunu temsil etmez. Hizmet açıklamaları tanıtım örneğidir ve hukuki tavsiye içermez. Görüşme notu aracı mesaj göndermez ve randevu oluşturmaz. Mimari fotoğraflar Unsplash üzerinden doğrudan yüklenir."}
          </DialogDescription>
        </DialogContent>
      </Dialog>
      <Dialog
        open={request !== null}
        onOpenChange={(open) => {
          if (!open) setRequest(null);
        }}
      >
        <DialogContent className="vera-dialog" showCloseButton={false}>
          <DialogClose className="dialog-x" aria-label="Not penceresini kapat">
            <X size={20} />
          </DialogClose>
          <span className="success-icon">
            <Check size={28} />
          </span>
          <DialogTitle className="dialog-title">
            İlk adımınız hazır.
          </DialogTitle>
          <DialogDescription className="dialog-description">
            Görüşme notunuzu oluşturduk. Henüz hiçbir yere gönderilmedi ve
            randevu alınmadı. Notunuzu cihazınıza indirebilirsiniz.
          </DialogDescription>
          <pre className="request-preview">{request}</pre>
          <button onClick={download} className="button button-burgundy">
            Notumu indir <Download size={18} />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
