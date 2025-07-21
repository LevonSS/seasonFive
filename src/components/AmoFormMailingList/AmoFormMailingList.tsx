import React, { useEffect, useState } from "react";
import { useAmoForm } from "../../context/useAmoForm";
import { AmoWindow } from "../AmoForm/AmoForm";

const AmoForm: React.FC = () => {
  const { isOpenMailingList } = useAmoForm();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isOpenMailingList && !isScriptLoaded) {
      const existingScript = document.getElementById("amoforms_script_1573890");

      if (!existingScript) {
        const w = window as AmoWindow;

        w.amo_forms_params = w.amo_forms_params || {
          setMeta: function (p: Record<string, unknown>) {
            this.params = (this.params || []).concat([p]);
          },
        };

        w.amo_forms_load =
          w.amo_forms_load ||
          function (f: Record<string, unknown>) {
            (w.amo_forms_load!.f = w.amo_forms_load!.f || []).push(f);
          };

        w.amo_forms_load({
          id: "1573890",
          hash: "2d73e6f819531dd7c4be757d0b98dcb9",
          locale: "ru",
        });

        w.amo_forms_loaded =
          w.amo_forms_loaded ||
          function (f: Record<string, unknown>, k: string) {
            (w.amo_forms_loaded!.f = w.amo_forms_loaded!.f || []).push([f, k]);
          };

        // Create and append script
        const script = document.createElement("script");
        script.id = "amoforms_script_1573890";
        script.src =
          "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1753079389";
        script.async = true;
        script.charset = "utf-8";

        script.onload = () => {
          setIsScriptLoaded(true);
        };

        const el = document.querySelector(".amoFormContainerMailingList");
        if (el) {
          el.appendChild(script);
        } else {
          // fallback to append to body if container not found
          document.body.appendChild(script);
        }
      } else {
        setIsScriptLoaded(true);
      }
    }
  }, [isOpenMailingList, isScriptLoaded]);

  return <div></div>;
};

export default AmoForm;
