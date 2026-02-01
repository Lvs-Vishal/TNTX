import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import { CONTACT_EMAIL, ZOHO_FORM_URL } from "@/lib/constants";

export const ContactPage = () => {
  useEffect(() => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-industrial-obsidian flex items-center justify-center">
      <div className="text-center px-4">
        <Mail className="h-16 w-16 text-industrial-orange mx-auto mb-6" />
        <h1 className="text-3xl font-heading text-white mb-4">CONTACT US</h1>
        <p className="font-body text-industrial-smoke mb-6">
          Redirecting to email...
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-body text-industrial-orange hover:text-white transition-colors text-lg"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="font-body text-industrial-smoke text-sm mt-8">
          If not redirected,{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-industrial-orange hover:underline">
            click here to email us
          </a>
        </p>
      </div>
    </div>
  );
};

export const ApplicationPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = ZOHO_FORM_URL;
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-industrial-obsidian flex items-center justify-center">
      <div className="text-center px-4">
        <ExternalLink className="h-16 w-16 text-industrial-orange mx-auto mb-6" />
        <h1 className="text-3xl font-heading text-white mb-4">APPLICATION</h1>
        <p className="font-body text-industrial-smoke mb-6">
          Redirecting to application form...
        </p>
        <a
          href={ZOHO_FORM_URL}
          className="font-body text-industrial-orange hover:text-white transition-colors text-lg"
        >
          Open Application Form
        </a>
        <p className="font-body text-industrial-smoke text-sm mt-8">
          If not redirected,{" "}
          <a href={ZOHO_FORM_URL} className="text-industrial-orange hover:underline">
            click here to apply
          </a>
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate("/")}
            className="font-body text-industrial-smoke hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
