// src/components/GoogleTranslate.js
import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const loadGoogleTranslateScript = () => {
      return new Promise((resolve, reject) => {
        if (document.getElementById("google-translate-script")) {
          resolve(); // Script already loaded
          return;
        }

        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.onload = resolve;
        script.onerror = (error) => {
          console.error("Google Translate script failed to load:", error);
          reject(error);
        };
        document.body.appendChild(script);
      });
    };

    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,te,mr,ta,ur,gu,ml,kn,or,pa,as",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      } else {
        console.error("Google Translate object is not available.");
      }
    };

    const init = async () => {
      try {
        window.googleTranslateElementInit = initializeGoogleTranslate;
        await loadGoogleTranslateScript();
      } catch (error) {
        console.error("Initialization failed:", error);
      }
    };

    init();
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
