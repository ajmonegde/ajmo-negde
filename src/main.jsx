import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Users, ShieldCheck, MessageCircle, CalendarDays, Compass, Sparkles, Car, Mountain, Coffee, Camera, HeartHandshake, ArrowRight } from 'lucide-react';
import './style.css';

const DISCORD_INVITE = 'https://discord.gg/nV7c9jJdjG';

function App(){
  const cards = [
    {icon:<Users/>, title:'Nađi ekipu', text:'Za izlet, more, planinu, grad, festival ili spontanu vožnju.'},
    {icon:<CalendarDays/>, title:'Dogovor bez smaranja', text:'Napišeš datum, mesto, budžet i vidiš ko je za.'},
    {icon:<ShieldCheck/>, title:'Normalna atmosfera', text:'Bez politike, spama i toksičnosti. Samo poštovanje i dobra energija.'},
  ];
  const vibes = [
    ['🚗', 'Road trip', 'Kad ti se ide, ali ti fali društvo.'],
    ['🏔️', 'Planina', 'Vikend beg, priroda, šetnja, pogled.'],
    ['🏙️', 'Gradovi', 'Novi Sad, Beograd, Budimpešta, Temišvar, Brašov...'],
    ['☕', 'Lagano', 'Kafa, šetnja, jednodnevni izlet, upoznavanje ljudi.'],
  ];
  return <main>
    <section className="hero">
      <div className="blur b1"></div><div className="blur b2"></div>
      <nav><div className="brand"><Compass size={24}/> Ajmo Negde</div><a href={DISCORD_INVITE} className="navbtn">Uđi na server</a></nav>
      <div className="heroGrid">
        <div className="heroText">
          <div className="pill"><Sparkles size={17}/> Discord zajednica za putovanja sa Balkana</div>
          <h1>Fali ti ekipa za put? <span>Ajmo negde.</span></h1>
          <p className="lead">Server za ljude koji bi putovali, išli na izlete, obilazili mesta i upoznavali normalnu ekipu — bez pritiska, bez foliranja, samo dogovor i dobra energija.</p>
          <div className="actions"><a href={DISCORD_INVITE} className="primary">Pridruži se <ArrowRight size={18}/></a><a href="#kako" className="secondary">Kako radi?</a></div>
          <div className="miniStats"><div><b>Balkan</b><small>ljudi iz regiona</small></div><div><b>24/7</b><small>dogovori u chatu</small></div><div><b>0%</b><small>politike i spama</small></div></div>
        </div>
        <div className="phoneCard">
          <div className="chatTop"><span></span><b># trazim-ekipu</b></div>
          <div className="msg"><b>Goran</b><p>Ćao ljudi, išao bih za vikend negde na jednodnevni izlet iz Novog Sada. Može Fruška gora, Temišvar ili nešto treće. Ko je za?</p></div>
          <div className="msg alt"><b>Maja</b><p>Ja sam za Frušku, lagana šetnja + klopa posle?</p></div>
          <div className="msg"><b>Marko</b><p>Može, imam auto. Hajde da dogovorimo vreme.</p></div>
          <div className="typing">3 osobe pišu...</div>
        </div>
      </div>
    </section>

    <section className="section">
      <h2>Nije samo još jedan Discord server.</h2>
      <p className="sectionLead">Ideja je da lakše nađeš ljude koji stvarno žele negde da idu, a ne da plan ostane samo “mogli bismo jednom”.</p>
      <div className="cards">{cards.map((c,i)=><div className="card" key={i}><div className="icon">{c.icon}</div><h3>{c.title}</h3><p>{c.text}</p></div>)}</div>
    </section>

    <section className="split" id="kako">
      <div><h2>Kako funkcioniše?</h2><p>Uđeš, predstaviš se kratko i pišeš šta tražiš. Što jasnije napišeš plan, lakše će se neko priključiti.</p></div>
      <div className="steps"><div><b>1</b><span>Uđeš na Discord</span></div><div><b>2</b><span>Predstaviš se u kanalu</span></div><div><b>3</b><span>Napišeš destinaciju, datum i ideju</span></div><div><b>4</b><span>Dogovorite detalje i krećete</span></div></div>
    </section>

    <section className="section dark">
      <h2>Za kakve planove je server?</h2>
      <div className="vibes">{vibes.map((v,i)=><div className="vibe" key={i}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></div>)}</div>
    </section>

    <section className="rules">
      <div><HeartHandshake size={38}/><h2>Opusteno, ali kulturno.</h2><p>Poenta servera je da se ljudi osećaju sigurno i normalno. Zato nema vređanja, smaranja, politike, spama i lažnih dogovora.</p></div>
      <ul><li>Bez vređanja i provociranja</li><li>Bez politike i teških rasprava</li><li>Bez spama, reklama i lažnih planova</li><li>Dogovor treba da bude jasan: mesto, datum, budžet, prevoz</li><li>Privatne dogovore pravi pažljivo i pametno</li></ul>
    </section>

    <section className="cta"><MessageCircle size={46}/><h2>Možda baš neko traži isti plan kao ti.</h2><p>Uđi na server, napiši gde bi išao i vidi ko je za. Nekad je samo jedna poruka dovoljna da se pokrene dobra priča.</p><a href={DISCORD_INVITE} className="primary">Uđi na Ajmo Negde</a></section>
    <footer>© 2026 Ajmo Negde · Discord zajednica za putovanja</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
