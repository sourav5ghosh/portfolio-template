import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Contact.scss';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const contactLinks: SocialLink[] = [
  {
    name: "Gmail",
    href: "mailto:souravghosh0865@gmail.com",
    icon: <EmailIcon fontSize="medium" />
  },
  {
    name: "GitHub",
    href: "https://github.com/sourav5ghosh",
    icon: <GitHubIcon fontSize="medium" />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/souravghosh15",
    icon: <LinkedInIcon fontSize="medium" />
  }
];

function Contact() {
  return (
    <section id="contact-content">
      <div className="contact-fullpage">
        <div className="contact-fullpage-inner">
          <h1>Contact Me</h1>
          <p className="contact-subtext">
            Open to data analytics opportunities, collaborations, and project discussions.
          </p>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name === "Gmail" ? "_self" : "_blank"}
                rel="noreferrer"
                aria-label={item.name}
                title={item.name}
                className="contact-link-item"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;