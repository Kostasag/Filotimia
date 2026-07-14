import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "el";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: { en: string; el: string }) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("filotimia_lang") as Lang | null;
      if (saved === "en" || saved === "el") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("filotimia_lang", l);
    } catch {}
  };

  const t = (s: { en: string; el: string }) => s[lang];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const base =
    "inline-flex items-center rounded-full border text-xs font-medium tracking-wider overflow-hidden";
  const border = dark ? "border-white/40" : "border-navy/30";
  const active = dark ? "bg-white text-navy" : "bg-navy text-white";
  const inactive = dark ? "text-white/80 hover:text-white" : "text-navy/70 hover:text-navy";
  return (
    <div className={`${base} ${border}`} role="group" aria-label="Language">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors ${lang === "en" ? active : inactive}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("el")}
        className={`px-3 py-1.5 transition-colors ${lang === "el" ? active : inactive}`}
        aria-pressed={lang === "el"}
      >
        ΕΛ
      </button>
    </div>
  );
}
