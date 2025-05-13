import React, { useEffect, useState } from "react";
import { useAmoForm } from "../../context/useAmoForm";

interface AmoFormsLoadFn {
  (f: Record<string, unknown>): void;
  f?: Record<string, unknown>[];
}

interface AmoFormsLoadedFn {
  (f: Record<string, unknown>, k: string): void;
  f?: [Record<string, unknown>, string][];
}

interface AmoFormsParams {
  setMeta?: (p: Record<string, unknown>) => void;
  params?: Record<string, unknown>[];
}

interface AmoWindow extends Window {
  amo_forms_params?: AmoFormsParams;
  amo_forms_load?: AmoFormsLoadFn;
  amo_forms_loaded?: AmoFormsLoadedFn;
}

const AmoForm: React.FC = () => {
  const { isOpen } = useAmoForm();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && !isScriptLoaded) {
      const existingScript = document.getElementById("amoforms_script_1503442");
      if (!existingScript) {
        const script = document.createElement("script");

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
          id: "1503442",
          hash: "8bf67c583a4281883e3e8968af22607a",
          locale: "ru",
        });

        w.amo_forms_loaded =
          w.amo_forms_loaded ||
          function (f: Record<string, unknown>, k: string) {
            (w.amo_forms_loaded!.f = w.amo_forms_loaded!.f || []).push([f, k]);
          };

        script.id = "amoforms_script_1503442";
        script.src =
          "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1746892119";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => setIsScriptLoaded(true);

        const el = document.querySelector(".amoFormContainer");
        if (el) {
          el.appendChild(script);
        }
      } else {
        setIsScriptLoaded(true);
      }
    }
  }, [isOpen, isScriptLoaded]);

  return (
    <div>
      {/* {isOpen && (
        <div id="amoforms_form_1503442" style={{ marginTop: "20px" }} />
      )} */}
    </div>
  );
};

export default AmoForm;
