import React, { useState } from 'react';
import { Copy, Check, FileText, Download, Send, MessageSquare, Linkedin, Github, Phone, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Graceful fallback to mailto
    const mailtoSubject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 4000);
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-10 lg:px-14 border-b border-[#E2DDD2]"
    >
      {/* Section Header (Matching Image 9) */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 pb-8 border-b border-[#E2DDD2]">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-mono text-[#D94E28] font-bold">§06</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] font-display">
            Contact & Connect
          </h2>
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#6E6A61] flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#D94E28]" />
          <span>CURRENTLY IN DONDAICHA, IN</span>
        </span>
      </div>

      {/* Main High-Impact Lead (Matching Image 9) */}
      <div className="py-8 max-w-3xl space-y-4">
        <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#141413] leading-tight">
          Building something impactful, or need a full-stack engineer who understands the complete stack?
        </h3>
        <p className="text-sm sm:text-base text-[#5E5B54] leading-relaxed">
          Have an open software engineering role, startup project, or opportunity? I'm actively open for Full-Stack, MERN Stack, and Software Engineering positions.
        </p>
      </div>

      {/* Interactive Email Bar with COPY button (Matching Image 9) */}
      <div className="pt-2 pb-8">
        <div className="flex flex-col sm:flex-row sm:inline-flex items-center w-full sm:w-auto gap-2 sm:gap-0 rounded-xl bg-[#141413] text-[#FAF7F2] p-1.5 border border-[#2C2B29] shadow-sm">
          <div className="w-full sm:w-auto px-4 py-2 font-mono text-xs sm:text-sm text-[#DCD6C8] break-all text-center">
            {PERSONAL_INFO.email}
          </div>
          <button
            id="copy-email-btn"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto justify-center flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2C2B29] hover:bg-[#D94E28] text-white text-xs font-mono font-semibold transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#98C379]" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Résumé Download Cards (Matching Image 9) */}
      <div className="space-y-3 pt-4 pb-10 border-b border-[#E2DDD2]">
        <span className="text-xs font-mono font-bold tracking-widest text-[#6E6A61] uppercase">
          RÉSUMÉ
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            id="download-resume-mern"
            href={PERSONAL_INFO.resumeUrl}
            download="Kasim_Shah_MERN_Resume.pdf"
            className="p-3 sm:p-4 rounded-xl border border-[#DCD6C8] hover:bg-[#EFEBE1] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EAE5DA] border border-[#D6CEBF] text-[#141413]">
                <FileText className="w-5 h-5 text-[#D94E28]" />
              </div>
              <div>
                <div className="text-sm font-bold font-display text-[#141413] group-hover:text-[#D94E28] transition-colors">
                  MERN Stack Developer résumé
                </div>
                <div className="text-[11px] font-mono text-[#6E6A61]">
                  PDF • DOWNLOAD
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#6E6A61] group-hover:text-[#141413] transition-colors" />
          </a>

          <a
            id="download-resume-se"
            href={PERSONAL_INFO.resumeUrl}
            download="Kasim_Shah_Software_Engineer_Resume.pdf"
            className="p-3 sm:p-4 rounded-xl border border-[#DCD6C8] hover:bg-[#EFEBE1] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#EAE5DA] border border-[#D6CEBF] text-[#141413]">
                <FileText className="w-5 h-5 text-[#D94E28]" />
              </div>
              <div>
                <div className="text-sm font-bold font-display text-[#141413] group-hover:text-[#D94E28] transition-colors">
                  Software Engineer résumé
                </div>
                <div className="text-[11px] font-mono text-[#6E6A61]">
                  PDF • DOWNLOAD
                </div>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#6E6A61] group-hover:text-[#141413] transition-colors" />
          </a>
        </div>
      </div>

      {/* Interactive Communication Channels & Direct Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
        {/* Left: Quick Connect Links */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="text-base font-bold font-display text-[#141413]">
            Direct Channels
          </h4>

          <div className="space-y-3">
            <a
              id="contact-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] hover:bg-[#EFEBE1] transition-all text-xs font-mono text-[#141413] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#25D366] transition-colors">WhatsApp Chat</div>
                  <div className="text-[11px] font-mono text-[#6E6A61]">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
            </a>

            <a
              id="contact-linkedin"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] hover:bg-[#EFEBE1] transition-all text-xs font-mono text-[#141413] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0077B5]/10 border border-[#0077B5]/20 text-[#0077B5] group-hover:bg-[#0077B5]/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#0077B5] transition-colors">LinkedIn Profile</div>
                  <div className="text-[11px] font-mono text-[#6E6A61]">kasim-shah-176175340</div>
                </div>
              </div>
            </a>

            <a
              id="contact-github"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-[#DCD6C8] hover:bg-[#EFEBE1] transition-all text-xs font-mono text-[#141413] group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#141413]/10 border border-[#141413]/20 text-[#141413] group-hover:bg-[#141413]/20 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold font-display group-hover:text-[#D94E28] transition-colors">GitHub Repositories</div>
                  <div className="text-[11px] font-mono text-[#6E6A61]">github.com/kasimshah19</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <h4 className="text-base font-bold font-display text-[#141413] mb-4">
            Send a Direct Message
          </h4>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#6E6A61]">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] border border-[#DCD6C8] text-xs font-mono text-[#141413] focus:outline-hidden focus:border-[#D94E28]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#6E6A61]">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] border border-[#DCD6C8] text-xs font-mono text-[#141413] focus:outline-hidden focus:border-[#D94E28]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#6E6A61]">Subject / Role Opportunity</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer Role / Freelance Inquiry"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] border border-[#DCD6C8] text-xs font-mono text-[#141413] focus:outline-hidden focus:border-[#D94E28]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#6E6A61]">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Write your note or project description..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#EFEBE1] border border-[#DCD6C8] text-xs font-mono text-[#141413] focus:outline-hidden focus:border-[#D94E28]"
              />
            </div>

            <button
              id="send-message-submit-btn"
              type="submit"
              className="w-full py-3 rounded-lg bg-[#141413] text-[#FAF7F2] hover:bg-[#2C2B29] text-xs font-mono font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-[#D94E28]" />
              <span>{formStatus === 'success' ? 'Opening Mail Client...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
