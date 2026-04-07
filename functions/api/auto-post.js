const articles = [
  {
    imageUrl: 'https://axait.ro/img/blog/mentenanta.svg',
    message: '🔧 Câți bani pierzi când se strică un server la momentul nepotrivit?\n\nO companie medie pierde între 5.000 și 50.000 lei pentru fiecare oră de downtime neprogramat.\n\nȘi cel mai dureros lucru? În 90% din cazuri, problema putea fi prevenită.\n\nMentenanța preventivă IT nu e un cost — e o investiție care:\n✅ Reduce downtime-ul cu 78%\n✅ Prelungește viața echipamentelor cu 30-40%\n✅ Previne pierderile de date înainte să se întâmple\n\nGândește-te la ea ca la revizia mașinii. Nu aștepți să se rupă motorul. 🚗\n\nCând ai făcut ultima dată o verificare completă a infrastructurii IT?\n\n📩 Scrie-ne și îți facem o evaluare gratuită.\n\n#MentenantaIT #SecuritateIT #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/phishing.svg',
    message: '⚠️ "Contul tău va fi blocat în 2 ore. Acționează acum!"\n\nSună familiar? Acesta e phishing. Și în 2026, e mai periculos ca niciodată.\n\nCu ajutorul AI, atacatorii creează emailuri aproape imposibil de distins de cele reale.\n\n🎯 Cum recunoști un atac:\n❌ Urgență artificială\n❌ Adresă expeditor suspectă\n❌ Link-uri ciudate\n❌ Cereri neobișnuite de bani sau parole\n\nRegula de aur: Orice cerere financiară prin email se confirmă TELEFONIC. 📞\n\nProtejează-ți echipa înainte de următorul atac. 🛡️\n\n📩 Contactează-ne pentru training anti-phishing.\n\n#Phishing #CyberSecurity #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/securitate.svg',
    message: '🔐 43% din atacurile cibernetice vizează companiile MICI și MIJLOCII.\n\nDe ce? Hackerii știu că IMM-urile au resurse limitate, dar dețin date valoroase.\n\n5 măsuri esențiale pe care ORICE firmă trebuie să le aibă:\n\n1️⃣ Firewall de generație nouă\n2️⃣ MFA — blochează 99,9% din atacuri\n3️⃣ Backup 3-2-1\n4️⃣ Actualizări la zi\n5️⃣ Training angajați\n\nBifezi toate 5? Dacă nu, afacerea ta e expusă. 🚨\n\n📩 Audit de securitate GRATUIT — contactează-ne azi.\n\n#SecuritateCibernetica #IMM #CyberSecurity #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/backup.svg',
    message: '💾 "Am dat delete din greșeală..."\n\nSau mai rău: ransomware care îți criptează TOATE datele.\n\nSoluția? Regula 3-2-1:\n\n3️⃣ copii ale datelor\n2️⃣ tipuri diferite de medii\n1️⃣ copie off-site\n\nDar atenție: un backup neTestat nu e un backup real.\n\nTestezi lunar restaurarea? Dacă nu, s-ar putea să ai o surpriză neplăcută exact când ai cea mai mare nevoie. 😬\n\n📩 Vorbește cu noi despre o soluție de backup potrivită.\n\n#Backup #RecuperareDate #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/cloud.svg',
    message: '☁️ Cloud sau server local?\n\nAdevărul? Nu există un răspuns universal — depinde de afacerea ta.\n\nCloud ✅ — scalezi rapid, plătești cât folosești, acces de oriunde\nServer local ✅ — control total, costuri previzibile, performanță maximă\n\nCea mai bună soluție pentru mulți? Hybrid — combini avantajele ambelor. 🤝\n\nVrei să știi ce ți se potrivește?\n\n📩 Consultanță IT gratuită pentru afacerea ta.\n\n#Cloud #ServerLocal #InfrastructuraIT #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/outsourcing.svg',
    message: '🤔 Angajezi un IT-ist sau externalizezi?\n\n👨‍💻 Angajat intern: 8.000-15.000 lei/lună + contribuții + echipament + training. Acoperă 1 persoană cu 1 set de competențe.\n\n🤝 Outsourcing AXA IT: echipă completă, toate specializările, disponibilitate 24/7, costuri flexibile.\n\nPentru majoritatea IMM-urilor: mai multă expertiză la costuri mai mici.\n\nCare e situația ta? 👇\n\n📩 Hai să facem un calcul împreună.\n\n#OutsourcingIT #IMM #ServiciiIT #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/wifi.svg',
    message: '📶 Toți angajații pe același WiFi cu vizitatorii? 🚨\n\nAceasta e o problemă de securitate serioasă.\n\nCe trebuie să ai:\n🔒 Rețea separată angajați vs vizitatori\n📱 VLAN-uri pe departamente\n🔍 Monitorizare trafic\n🔐 Autentificare WPA3 Enterprise\n\nO rețea WiFi Enterprise nu e un lux — e o necesitate pentru orice firmă serioasă.\n\n📩 Audit gratuit al rețelei tale.\n\n#WiFi #ReteleIT #SecuritateIT #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/supraveghere.svg',
    message: '📹 Câte firme au camere de supraveghere care nu funcționează când au nevoie?\n\nDin experiența noastră: mai multe decât ți-ai imagina.\n\nO cameră IP modernă:\n👁️ Detectează mișcarea și trimite alerte instant\n☁️ Stochează în cloud — chiar dacă înregistratorul e furat\n📱 Vezi live pe telefon ce se întâmplă\n🔒 Se integrează cu controlul accesului\n\nCând ai verificat ultima dată că camerele tale chiar înregistrează?\n\n📩 Evaluare gratuită a sistemului tău.\n\n#Supraveghere #CamereIP #SecuritateFizica #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/virtualizare.svg',
    message: '🖥️ Câte servere fizice ai în firmă? Și câte rulează la sub 20% din capacitate?\n\nVirtualizarea îți permite să rulezi 10 servere logice pe un singur server fizic.\n\nCe câștigi:\n💰 Costuri hardware -60-70%\n⚡ Migrezi un server în minute, nu zile\n🔄 Recovery instant\n🌱 Factură de curent mai mică\n\nVMware, Hyper-V, Proxmox — soluții pentru orice buget.\n\n📩 Analiză gratuită a infrastructurii tale.\n\n#Virtualizare #ServereIT #IMM #AXAIT'
  },
  {
    imageUrl: 'https://axait.ro/img/blog/audit.svg',
    message: '🔍 Știi exact ce echipamente IT are firma ta? Toate?\n\nDacă răspunsul e "aproximativ"... ai nevoie de un audit IT.\n\nUn audit IT complet îți arată:\n📋 Inventarul complet\n⚠️ Vulnerabilitățile existente\n💸 Costurile ascunse\n📈 Ce trebuie upgradat și când\n🎯 Prioritățile pentru urmă 12 luni\n\nFără audit, iei decizii IT în orbire.\n\n📩 Solicită auditul tău GRATUIT azi.\n\n#AuditIT #ConsultantaIT #IMM #AXAIT'
  }
];

export async function onRequestPost(context) {
  const { request, env } = context;

  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${env.API_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const pageId = env.FACEBOOK_PAGE_ID;
  const accessToken = env.FACEBOOK_ACCESS_TOKEN;

  let currentIndex = 0;
  try {
    const stored = await env.POSTS_KV.get('current_index');
    if (stored !== null) currentIndex = parseInt(stored);
  } catch (e) {
    currentIndex = 0;
  }

  const article = articles[currentIndex % articles.length];

  // Incearca cu poza
  let postResult;
  let usedPhoto = false;
  const photoResponse = await fetch(
    `https://graph.facebook.com/v25.0/${pageId}/photos`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        url: article.imageUrl,
        message: article.message,
        access_token: accessToken,
      }),
    }
  );
  postResult = await photoResponse.json();
  usedPhoto = photoResponse.ok;

  // Fallback text only
  if (!photoResponse.ok) {
    const feedResponse = await fetch(
      `https://graph.facebook.com/v25.0/${pageId}/feed`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: article.message,
          access_token: accessToken,
        }),
      }
    );
    postResult = await feedResponse.json();
  }

  const nextIndex = (currentIndex + 1) % articles.length;
  await env.POSTS_KV.put('current_index', String(nextIndex));

  return new Response(JSON.stringify({
    success: true,
    article_index: currentIndex,
    next_index: nextIndex,
    used_photo: usedPhoto,
    result: postResult
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
