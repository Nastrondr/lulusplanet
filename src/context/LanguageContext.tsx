import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Language } from '../content/i18n';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<Language>('zh');

  // 初始加载时从 localStorage 读取语言
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  // 每次切换语言后，把 lang 写入 localStorage
  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prevLang => prevLang === 'zh' ? 'en' : 'zh');
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
