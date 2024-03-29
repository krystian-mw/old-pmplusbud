import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

import "../styles/components/QuickContact.scss";

const QcList = [
  {
    text: "kontakt@pmplusbud.pl",
    link: "mailto:kontakt@pmplusbud.pl",
    icon: <HiOutlineMail />,
    className: "email",
  },
  {
    text: "123 123 123",
    link: "tel:123123123",
    icon: <HiOutlinePhone />,
    className: "phone",
  },
  {
    text: "Messenger",
    link: "/messenger",
    icon: <FaFacebookMessenger />,
    className: "messenger",
  },
  {
    text: "WhatsApp",
    link: "/whatsapp",
    icon: <FaWhatsapp />,
    className: "whatsapp",
  },
];

export default function QC() {
  return (
    <div id="QuickContact" className="contact">
      {QcList.map((qc, index) => (
        <a
          key={index}
          data-aos="flip-left"
          data-aos-delay={250 * index}
          data-aos-once="true"
          href={qc.link}
          className={qc.className}
        >
          <span className="content">
            {qc.icon}
            {qc.text}
          </span>
        </a>
      ))}
    </div>
  );
}
