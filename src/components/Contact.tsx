import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Check, AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission with a timeout
    try {
      // In a real application, this would be replaced with an actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({ 
        success: true, 
        message: t('contact.form.success')
      });
      reset();
    } catch (error) {
      setFormStatus({ 
        success: false, 
        message: t('contact.form.error')
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-soft overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-secondary inline-block">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4 mt-8">
                <p className="flex items-start">
                  <span className="mr-3 text-secondary mt-1">
                    <MapPin size={18} />
                  </span>
                  <span>{t('contact.info.address')}</span>
                </p>
                
                <p className="flex items-start">
                  <span className="mr-3 text-secondary mt-1">
                    <Phone size={18} />
                  </span>
                  <span>
                    {t('contact.info.phone')}: 
                    <a href="tel:+31684762946" className="ml-1 text-secondary hover:underline">
                      +31 684762946
                    </a>
                  </span>
                </p>
                
                <p className="flex items-start">
                  <span className="mr-3 text-secondary mt-1">
                    <Mail size={18} />
                  </span>
                  <span>
                    {t('contact.info.email')}: 
                    <a href="mailto:info.astrodak@gmail.com" className="ml-1 text-secondary hover:underline">
                      info.astrodak@gmail.com
                    </a>
                  </span>
                </p>
                
                <p className="flex items-start">
                  <span className="mr-3 text-secondary mt-1">
                    <Clock size={18} />
                  </span>
                  <span>{t('contact.info.hours')}</span>
                </p>
              </div>
            </div>
            
            <div className="w-full h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.851571341427!2d5.274695175539803!3d51.64424330069867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6e94ddf76e1a7%3A0x8c0386e6b3e13bd8!2sSalahutuplein%2C%20Vught!5e0!3m2!1snl!2snl!4v1747840579003!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AstroDak Location"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-soft p-6">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-secondary inline-block">
              {t('contact.form.title')}
            </h3>
            
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                <div className="flex items-center">
                  {formStatus.success ? (
                    <Check size={18} className="mr-2" />
                  ) : (
                    <AlertTriangle size={18} className="mr-2" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: true })}
                  className={`${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                  })}
                  className={`${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.email?.type === 'required' && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="text-red-500 text-sm mt-1">Invalid email address</p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message', { required: true })}
                  className={`${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">This field is required</p>
                )}
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.form.send')}...
                  </span>
                ) : (
                  t('contact.form.send')
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;