import { Contact } from "../types";

interface ContactProps {
  contacts: Contact[];
}

const ContactComponent = ({ contacts }: ContactProps) => {
  return (
    <footer id="contact" className="bg-darkBg text-lightText py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-10 mb-6">
          {contacts.map((it) => (
            <div
              key={it.id}
              className="bg-jungle-pink text-jungleGreen hover:text-junglePink transition-colors duration-200 rounded-full p-2"
            >
              <a
                data-testid={it.url}
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {<it.icon className="w-8 h-8" />}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ContactComponent;
