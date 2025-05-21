import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const posts = {
    'workflow': {
      title: 'WORKFLOW: Deine Zusammenarbeit mit mizmu',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_workflow.png',
      content: (
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-light mb-4"><strong>1. Kennenlernen & Kick-off</strong></h2>
            <p className="font-medium mb-2">Ziel: Wir wollen euch und euer Vorhaben wirklich verstehen.</p>
            <ul className="pl-4 space-y-2">
              <li className="list-disc">Kostenloses Erstgespräch (remote oder vor Ort)</li>
              <li className="list-disc">Analyse eurer Vision, Ziele & Herausforderungen</li>
              <li>→ Entscheidung zur Zusammenarbeit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4"><strong>2. Angebot & Rahmen stecken</strong></h2>
            <p className="font-medium mb-2">Ziel: Klarheit über Umfang, Leistungen & Budget schaffen.</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Individuelles Angebot basierend auf eurem Bedarf</li>
              <li>Definition von Zielen, Zeitplan und Projektumfang</li>
              <li>Vertragsabschluss & Startschuss</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4"><strong>3. Research & Konzeption</strong></h2>
            <p className="font-medium mb-2">Ziel: Eine fundierte Basis und kreative Leitidee entwickeln</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Zielgruppenanalyse</li>
              <li>Moodboards, Storylines, Strukturideen, erste Scribbles</li>
              <li>Feedbackrunde & Freigabe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4"><strong>4. Design & Umsetzung</strong></h2>
            <p className="font-medium mb-2">Ziel: Ideen visuell und funktional auf den Punkt bringen.</p>
            <ul className="pl-4 space-y-2">
              <li className="list-disc">Branding, Webdesign oder Content-Creation</li>
              <li className="list-disc">Iterative Entwicklung mit Check-ins</li>
              <li>→ Gemeinsames Testen & Feinschliff</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4"><strong>5. Launch & Übergabe</strong></h2>
            <p className="font-medium mb-2">Ziel: Bereit für den Start - und langfristigen Erfolg.</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Finaler Go-Live oder Übergabe der Assets</li>
              <li>Optional: Support- oder Wartungspaket</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4"><strong>6. Glow-Up & Weiterentwicklung</strong></h2>
            <p className="font-medium mb-2">Ziel: Ausbauen, wachsen, optimieren.</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Performance-Analyse & Feedback-Loop</li>
              <li>Updates, Kampagnen, neue Features</li>
              <li>Langfristige Zusammenarbeit als kreative Partner:innen</li>
            </ul>
          </section>

          <div className="mt-16 text-xl">
            <p className="font-light">
              Ready when you are. Mizmu ist deine digitale Magie Agentur - kreativ, nahbar und immer ein
              bisschen anders.
            </p>
          </div>
        </div>
      )
    },
    'public-relations': {
      title: 'PUBLIC RELATIONS: Der Schlüssel zu Vertrauen und langfristigem Erfolg',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_publicrealtions.png',
      content: (
        <div className="space-y-12">
          <section>
            <p className="text-lg mb-8">
              In der heutigen digitalen Welt kann ein schlechter Ruf in Sekunden viral gehen – und ein fehlendes
              PR-Team macht es nur schlimmer.
            </p>
            <p className="text-lg mb-8">
              Unternehmen, Marken und Persönlichkeiten brauchen strategische Kommunikation, um Vertrauen
              aufzubauen, Krisen zu managen und langfristig relevant zu bleiben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6">Drei Gründe, warum PR unverzichtbar ist:</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">1. Aufbau eines positiven Markenimages</h3>
                <p className="text-lg mb-4">
                  PR ist nicht nur Werbung – es geht um authentische Kommunikation und eine glaubwürdige Story.
                  Unternehmen und Persönlichkeiten, die sich strategisch positionieren, geniessen mehr Vertrauen bei
                  Kunden, Investoren und Medien.
                </p>
                <p className="text-lg italic">
                  Beispiel: Ben & Jerry's nutzt PR gezielt, um sich als sozial engagierte Marke zu etablieren, indem
                  sie Themen wie Klimaschutz und soziale Gerechtigkeit in ihre Kommunikation einbauen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">2. Effektives Krisenmanagement</h3>
                <p className="text-lg mb-4">
                  Jede Marke kann in einen Skandal geraten – entscheidend ist, wie sie darauf reagiert. PR-Profis
                  wissen, wann und wie man Stellung beziehen muss, um Schaden zu minimieren und Vertrauen
                  zurückzugewinnen.
                </p>
                <p className="text-lg italic">
                  Beispiel: Coca-Cola geriet wegen problematischer Marketingkampagnen unter Kritik. Durch
                  schnelle, transparente Kommunikation und gezielte Massnahmen konnte das Unternehmen sein
                  Image stabilisieren.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-4">3. Mehr Sichtbarkeit</h3>
                <p className="text-lg mb-4">
                  PR sorgt dafür, dass eine Marke nicht nur bekannt wird, sondern eine emotionale Verbindung zur
                  Zielgruppe aufbaut. Eine durchdachte Strategie steigert die Reichweite und macht Unternehmen zu
                  relevanten Stimmen in ihrer Branche.
                </p>
                <p className="text-lg italic">
                  Beispiel: Nike setzt auf PR-Kampagnen mit starken Botschaften, die ihre Markenwerte wie
                  Diversität und soziale Verantwortung betonen. So entsteht eine enge Bindung zu ihrer Community.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4">Fazit: Ohne PR kein nachhaltiger Erfolg!</h2>
            <p className="text-lg mb-4">
              Wer sichtbar, glaubwürdig und erfolgreich sein will, kommt an strategischer PR nicht vorbei.
            </p>
            <p className="text-xl font-medium">
              Sei kein Kanye und leave the "No PR Era" behind! Schreib uns!
            </p>
          </section>
        </div>
      )
    },
    'seo-2025': {
      title: 'SEO in 2025: Brand, Vertrauen und externe Signale',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_seo2025.png',
      content: (
        <div className="space-y-12">
          <section>
            <p className="text-lg mb-8">
              Wenn du in letzter Zeit etwas gegoogelt hast, hast du sicher bemerkt, dass die Suchergebnisse nicht
              mehr nur aus einer simplen Liste blauer Links bestehen.
            </p>
            <p className="text-lg mb-8">
              Heute zählt vor allem, wer wo über dich spricht – von Bewertungen über Social Media bis hin zu
              digitaler PR.
            </p>
            <p className="text-lg">
              Hier erfährst du, was sich verändert hat und wie du dich optimal darauf einstellst.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6"><strong>1. OFFSITE</strong></h2>
            <p className="text-lg mb-4">
              Mittlerweile beinhalten 60 % der Suchergebnisse Off-Site-Quellen wie:
            </p>
            <ul className="space-y-2 text-lg">
              <li>✔ Social-Media-Posts & Diskussionen</li>
              <li>✔ Bewertungen auf Google, Trustpilot und in Foren</li>
              <li>✔ Nachrichtenartikel & Erwähnungen in digitaler PR</li>
              <li>✔ YouTube-, und TikTok-Inhalte</li>
            </ul>
            <p className="text-lg mt-4">
              Google durchsucht nicht mehr nur deine Website – es bewertet die Glaubwürdigkeit deiner Marke
              im gesamten Web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6"><strong>2. BEWERTUNGEN</strong></h2>
            <p className="text-lg mb-4">
              Eine der grössten Veränderungen, die wir beobachten konnten, ist die Priorisierung von
              Bewertungen durch Google. Wenn Nutzer über Ihre Marke sprechen (positiv oder negativ), hört
              Google zu.
            </p>
            <ul className="space-y-2 text-lg">
              <li>Positive Bewertungen = mehr Vertrauen und Sichtbarkeit</li>
              <li>Keine Bewertungen? Sie sind schwerer zu finden</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6"><strong>3. ONSITE VS. OFFSITE</strong></h2>
            <p className="text-lg mb-4">
              SEO hat sich über die einfache Trennung von Onsite- und Offsite-Strategien hinaus entwickelt.
              Heute ist es ein vernetztes Ökosystem, in dem Inhalte, technisches SEO, Backlinks,
              Markenerwähnungen, soziale Signale und die Nutzererfahrung zusammenwirken.
            </p>
            <p className="text-lg">
              Suchmaschinen bewerten nicht nur Keywords und Links – sie analysieren Autorität, Engagement
              und Relevanz im gesamten Web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6"><strong>4. SEO PRIORITÄTEN</strong></h2>
            <p className="text-lg mb-4">
              Blick über deine Website hinaus bau eine starke digitale Präsenz auf.
            </p>
            <ul className="space-y-2 text-lg">
              <li>Brand-SEO: Suchnachfrage steigern und Branded Search Volumen erhöhen</li>
              <li>Bewertungen & Reputation: Kundenfeedback aktiv managen</li>
              <li>Digitale PR: Hochwertige Medienerwähnungen erzielen</li>
              <li>Social & Off-Site-SEO – Optimierung für TikTok, YouTube</li>
              <li>Ganzheitlicher Ansatz: Kombiniere On-Site- und Off-Site-Massnahmen für langfristige Wirkung</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-6"><strong>5. FAZIT</strong></h2>
            <p className="text-lg mb-4">
              Bei SEO geht es nicht mehr nur um technische Optimierungen und Backlinks. Es geht um
              Markensichtbarkeit, offsite Reputation und Vertrauen.
            </p>
            <ul className="space-y-2 text-lg mb-4">
              <li>✔ Experience</li>
              <li>✔ Expertise</li>
              <li>✔ Authority</li>
              <li>✔ Trust</li>
            </ul>
            <p className="text-lg mb-8">
              Eine Marke mit Bekanntheit, Autorität und Beständigkeit ist eine Marke, die gut rankt. Sie erhält
              Medienpräsenz, regt Gespräche an und baut dauerhafte Kundenbeziehungen auf.
            </p>
            <p className="text-lg">
              Google achtet darauf, und wir helfen dir dabei. Doch warum redet niemand von VIDEO SEO?
              Erfahre im nächsten Beitrag, worum es da geht und wie sich SEO in Zukunft entwickeln wird.
            </p>
          </section>
        </div>
      )
    }
  };

  const post = posts[id as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post nicht gefunden</h1>
          <Link 
            to="/blog" 
            className="text-[#9333EA] hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white">
      <GradientCanvas />
      
      <div className="relative z-20">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20">
          {/* Hero Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-12">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-12">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none mb-12">
              {post.content}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col xs:flex-row justify-between items-stretch gap-4 mt-16">
              <Link 
                to="/blog" 
                className="hidden xs:inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 hover:bg-black hover:text-white transition-colors text-base xs:text-sm shadow-sm hover:shadow-md"
              >
                <span className="hidden xs:inline">Zurück zum Blog</span>
                <span className="xs:hidden">Zurück</span>
                <ArrowLeft className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/kontakt" 
                className="hidden xs:inline-flex items-center justify-center h-[44px] gap-2 bg-black text-white px-8 rounded-full hover:bg-black/90 transition-colors text-base xs:text-sm shadow-md hover:shadow-lg"
              >
                <span className="hidden xs:inline">Dein Projekt starten</span>
                <span className="xs:hidden">Projekt starten</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;