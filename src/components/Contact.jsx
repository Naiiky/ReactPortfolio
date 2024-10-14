import { Contacts } from "../constantes/data";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Prenons Contact</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{Contacts.location}</p>
        <p className="my-4">{Contacts.tel}</p>
        <a href={`mailto:${Contacts.email}`} className="border-b">
          {Contacts.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
