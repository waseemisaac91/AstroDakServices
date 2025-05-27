import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Example reviews data
  const reviewsData: Review[] = [
    {
      id: 1,
      name: "Mark van Dijk",
      location: "'s-Hertogenbosch",
      rating: 5,
      text: i18n.language === 'nl' 
        ? "AstroDak heeft ons platdak perfect geïsoleerd. Het team was professioneel, netjes en heeft alles volgens afspraak opgeleverd. De isolatie werkt uitstekend - we merken direct het verschil in temperatuur en geluidsisolatie."
        : "AstroDak perfectly insulated our flat roof. The team was professional, neat, and delivered everything as agreed. The insulation works excellently - we immediately notice the difference in temperature and sound insulation.",
      date: "15-05-2024",
    },
    {
      id: 2,
      name: "Eva Janssen",
      location: "Eindhoven",
      rating: 4,
      text: i18n.language === 'nl' 
        ? "Zeer tevreden over de zinkwerkzaamheden aan onze dakgoten. Snel geregeld en goede communicatie. Alleen het schoonmaken achteraf had wat beter gekund, maar verder prima ervaring."
        : "Very satisfied with the zinc work on our gutters. Quickly arranged and good communication. Only the cleaning afterwards could have been better, but otherwise a great experience.",
      date: "02-04-2024",
    },
    {
      id: 3,
      name: "Peter de Vries",
      location: "Breda",
      rating: 5,
      text: i18n.language === 'nl' 
        ? "Fantastisch werk geleverd aan ons hellend dak. De dakpannen zijn perfect vervangen en de isolatie is onberispelijk uitgevoerd. Prijs-kwaliteitverhouding is uitstekend. Zeker een aanrader!"
        : "Fantastic work done on our sloped roof. The tiles were perfectly replaced and the insulation was impeccably executed. Price-quality ratio is excellent. Definitely recommended!",
      date: "22-03-2024",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="reviews" className="bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('reviews.title')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('reviews.subtitle')}
        </p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reviewsData.map((review) => (
            <motion.div 
              key={review.id} 
              className="bg-white rounded-lg shadow-soft p-6 hover:shadow-medium transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  {getInitials(review.name)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 italic">{review.text}</p>
              
              <p className="text-right text-sm text-gray-500">{review.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;