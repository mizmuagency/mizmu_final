import React from 'react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PreFooter3 from '../components/PreFooter3';

const Blog = () => {
  const blogPosts = [
    {
      id: 'workflow',
      title: 'WORKFLOW: Deine Zusammenarbeit mit mizmu',
      excerpt: 'Lerne unseren Workflow kennen und erfahre, wie wir gemeinsam mit dir digitale Magie erschaffen.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_workflow.png',
      link: '/blog/workflow'
    },
    {
      id: 'public-relations',
      title: 'Public Relations: Der Schlüssel zum Erfolg',
      excerpt: 'Wie moderne PR-Strategien dein Unternehmen auf das nächste Level bringen.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_publicrealtions.png',
      link: '/blog/public-relations'
    },
    {
      id: 'seo-2025',
      title: 'SEO Trends 2025: Was uns erwartet',
      excerpt: 'Die wichtigsten SEO-Trends und wie du dich darauf vorbereitest.',
      image: 'https://pub-f50bad00c34f4dbb9e7b6b2bf1b7722d.r2.dev/mizmu_seo2025.png',
      link: '/blog/seo-2025'
    }
  ];

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
            {/* Hero Section */}
            <div className="max-w-4xl mb-20">
              <h1 className="text-5xl xs:text-6xl font-light tracking-tight leading-[1.1] mb-12">
                News, Digitale<br />
                Glow Ups &<br />
                Insights
              </h1>
            </div>

            {/* Featured Post */}
            {blogPosts.length > 0 && (
              <div className="mb-20">
                <Link to={blogPosts[0].link} className="block">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                    <img 
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-2xl">
                    <h2 className="text-2xl xs:text-3xl font-light mb-4">{blogPosts[0].title}</h2>
                    <p className="text-black mb-6">{blogPosts[0].excerpt}</p>
                    <span className="inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap">
                      Weiterlesen <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Other Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} to={post.link} className="group">
                  <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-light mb-4">{post.title}</h3>
                  <p className="text-black mb-6">{post.excerpt}</p>
                  <span className="inline-flex items-center justify-center h-[44px] border-2 border-black rounded-full px-8 group-hover:bg-black group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                    {post.id === 'public-relations' ? 'Lerne wie' : post.id === 'seo-2025' ? 'SEOfy me now' : 'Weiterlesen'} <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <PreFooter3 />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Blog;