import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import { ArrowRight } from 'lucide-react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { submitContactForm } from '../lib/contact';

const Kontakt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Website',
    'Branding',
    'Digital Marketing',
    'Virtuelle Assistenz',
    'Social Media',
    'Design'
  ];

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        email: formData.get('email') as string,
        message: `Interests: ${selectedInterests.join(', ')}\n\nMessage: ${formData.get('message')}`,
      };

      await submitContactForm(data);

      setSubmitStatus({
        type: 'success',
        message: 'Danke für deine Nachricht! Wir melden uns bald.'
      });
      (e.target as HTMLFormElement).reset();
      setSelectedInterests([]);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Es gab einen Fehler beim Senden. Bitte versuche es später noch einmal.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
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

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-[32px] leading-[1.2] tracking-tight mb-16 md:text-5xl md:leading-[1.1]">
                Gute Dinge<br />
                fangen oft mit<br />
                einem <span className="font-bold">HALLO</span> an.
              </h1>

              <h2 className="text-xl font-light mb-6">Ich interessiere mich für:</h2>
              
              {/* Interest Selection */}
              <div className="flex flex-wrap gap-3 mb-12">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-4 py-2 rounded-full text-sm border border-black transition-colors ${
                      selectedInterests.includes(interest)
                        ? 'bg-black text-white'
                        : 'bg-transparent hover:bg-black hover:text-white'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Vorname*"
                    className="w-full bg-transparent border-b border-black focus:border-black px-0 py-2 placeholder-black focus:outline-none text-base"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Nachname*"
                    className="w-full bg-transparent border-b border-black focus:border-black px-0 py-2 placeholder-black focus:outline-none text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="E-Mail*"
                    className="w-full bg-transparent border-b border-black focus:border-black px-0 py-2 placeholder-black focus:outline-none text-base"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="Nachricht"
                    rows={1}
                    className="w-full bg-transparent border-b border-black focus:border-black px-0 py-2 placeholder-black focus:outline-none text-base resize-none"
                  ></textarea>
                </div>

                {/* Newsletter and Privacy Radio Buttons */}
                <div className="space-y-4 mt-12">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="newsletter"
                      className="mt-1 w-2.5 h-2.5 border-2 border-black rounded-full text-black focus:ring-0 focus:ring-offset-0 checked:bg-black checked:hover:bg-black"
                    />
                    <span className="text-black text-sm leading-tight">
                      Ich freue mich auf die monatliche Digital Glow Up Story von mizmu
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="privacy"
                      required
                      className="mt-1 w-2.5 h-2.5 border-2 border-black rounded-full text-black focus:ring-0 focus:ring-offset-0 checked:bg-black checked:hover:bg-black"
                    />
                    <span className="text-black text-sm leading-tight">
                      Ich verstehe, dass mizmu meine Daten gemäss Datenschutzerklärung sicher verwahrt
                    </span>
                  </label>
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-black/5 text-black' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white rounded-full py-3 flex items-center justify-center gap-2 text-base font-normal"
                >
                  Absenden <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Kontakt;