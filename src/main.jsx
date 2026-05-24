import React from "react";
import { createRoot } from "react-dom/client";
import { MapPin, Users, MessageCircle, ShieldCheck, CalendarDays, Compass, Sparkles, Camera, Car, Mountain, Palmtree, Castle, Coffee } from "lucide-react";
import "./style.css";

const discordInvite = "https://discord.gg/nV7c9jJdjG";

function DestinationCard({ icon, title, text }) {
  return (
    <div className="destination-card">
      <div className="destination-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">
          <div className="brand-mark"><Compass size={20} /></div>
          <span>Ajmo Negde</span>
        </div>
        <a className="nav-button" href={discordInvite} target="_blank" rel="noreferrer">Uđi na server</a>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="badge"><Sparkles size={16}/> Discord zajednica za putovanja sa Balkana</div>
          <h1>Fali ti ekipa za put? <span>Ajmo negde.</span></h1>
          <p className="hero-text">
            Pronađi ljude za izlete, vikend avanture, more, planinu, gradove i spontana putovanja.
            Bez pritiska, bez politike, bez smaranja — samo dogovor i dobra energija.
          </p>
          <div className="hero-actions">
            <a className="primary" href={discordInvite} target="_blank" rel="noreferrer">Pridruži se</a>
            <a className="secondary" href="#kako">Kako radi?</a>
          </div>
          <div className="stats">
            <div><strong>Balkan</strong><span>ljudi iz regiona</span></div>
            <div><strong>24/7</strong><span>dogovori u chatu</span></div>
            <div><strong>0%</strong><span>politike i spama</span></div>
          </div>
        </div>

        <div className="chat-card">
          <div className="chat-header"><span></span> # trazim-ekipu</div>
          <div className="message"><b>Goran</b><p>Ćao ljudi, išao bih za vikend negde na jednodnevni izlet iz Novog Sada. Može Fruška gora, Temišvar ili nešto treće. Ko je za?</p></div>
          <div className="message blue"><b>Maja</b><p>Ja sam za Frušku, lagana šetnja + klopa posle?</p></div>
          <div className="message"><b>Marko</b><p>Može, imam auto. Hajde da dogovorimo vreme.</p></div>
          <small>3 osobe pišu...</small>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow">Nije još jedan prazan server</p>
          <h2>Ideja je jednostavna: ljudi koji hoće da se mrdnu iz kuće.</h2>
        </div>
        <p>
          Ajmo Negde je mesto za one koji bi putovali, ali im često fali društvo.
          Ovde se lako pita, predloži i dogovori — od kafe u drugom gradu do ozbiljnijeg puta.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Popularne ideje</p>
        <h2>Gde bismo mogli?</h2>
        <div className="destinations">
          <DestinationCard icon={<Mountain />} title="Fruška gora" text="Šetnja, vidikovci, manastiri i lagan vikend beg." />
          <DestinationCard icon={<Castle />} title="Transilvanija" text="Bran, Brašov, zamkovi i dobar roadtrip iz Srbije." />
          <DestinationCard icon={<Coffee />} title="Temišvar" text="Jednodnevni izlet, kafa, šetnja i lepa arhitektura." />
          <DestinationCard icon={<Palmtree />} title="More" text="Grčka, Crna Gora ili Hrvatska kada se skupi ekipa." />
          <DestinationCard icon={<Car />} title="Roadtrip" text="Spontano sedanje u auto i plan koji nastane usput." />
          <DestinationCard icon={<Camera />} title="Foto ture" text="Gradovi, priroda i mesta gde vredi napraviti dobru fotku." />
        </div>
      </section>

      <section id="kako" className="section split">
        <div>
          <p className="eyebrow">Kako funkcioniše</p>
          <h2>Uđeš, predstaviš se i predložiš plan.</h2>
          <p>Bez komplikovanja. Što jasnije napišeš destinaciju, datum, budžet i prevoz, veća je šansa da se neko priključi.</p>
          <a className="primary inline" href={discordInvite} target="_blank" rel="noreferrer">Uđi na Discord</a>
        </div>
        <div className="steps">
          <Step number="01" title="Predstavi se" text="Napiši odakle si, šta voliš i kakav tip putovanja ti odgovara." />
          <Step number="02" title="Predloži destinaciju" text="Kratko i jasno: gde, kada, koliko dana i kakva ekipa ti treba." />
          <Step number="03" title="Dogovorite detalje" text="Prevoz, troškovi, vreme polaska i granice komfora." />
          <Step number="04" title="Ajmo negde" text="Kada se sve poklopi, ostaje samo da krenete." />
        </div>
      </section>

      <section className="section rules">
        <div className="rules-card">
          <ShieldCheck size={34} />
          <h2>Atmosfera koju čuvamo</h2>
          <p>Server treba da bude opušten, ali normalan. Nema vređanja, politike, spama, lažnih dogovora i neprijatnog ponašanja.</p>
          <div className="rule-grid">
            <span>Bez politike</span>
            <span>Bez vređanja</span>
            <span>Bez spama</span>
            <span>Jasan dogovor</span>
            <span>Poštovanje</span>
            <span>Zdrav razum</span>
          </div>
        </div>
      </section>

      <section className="cta">
        <MessageCircle size={42}/>
        <h2>Možda baš danas neko traži isto putovanje kao ti.</h2>
        <p>Uđi na server, baci predlog i vidi ko je za. Ne mora sve da bude savršeno isplanirano — nekad je dovoljno da neko kaže: ajmo.</p>
        <a className="primary big" href={discordInvite} target="_blank" rel="noreferrer">Pridruži se serveru</a>
      </section>

      <footer>
        <span>© 2026 Ajmo Negde</span>
        <span>Discord zajednica za putovanja, izlete i dobru ekipu.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
