import ContactForm from './ContactForm/ContactForm';
import './ContactUs.css'

const ContactUs = () => {
  const phoneNumber = '+1234567890';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = 'contact@example.com';
  const emailLink = `mailto:${email}`;

  


  return (
    <>    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="mb-4">
        For inquiries, you can reach us through the following methods:
      </p>
      <ul>
        <li className="mb-2">
          WhatsApp: <a className="text-blue-500 hover:underline" href={whatsappLink} target="_blank" rel="noopener noreferrer">Send a Message</a>
        </li>
        <li className="mb-2">
          Email: <a className="text-blue-500 hover:underline" href={emailLink} target="_blank" rel="noopener noreferrer">Send an Email</a>
        </li>
        <li>
          Phone: <a className="text-blue-500 hover:underline" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </li>
      </ul>
    </div>
    <ContactForm />
    </>
  );
};

export default ContactUs;