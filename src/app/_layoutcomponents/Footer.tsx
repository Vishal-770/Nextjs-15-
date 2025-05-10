
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
} from '@heroicons/react/24/outline'; // Outline icons
import { 
  FaceFrownIcon as FacebookIcon,
  XMarkIcon as TwitterIcon, // Twitter was renamed to X
    InboxStackIcon   as InstagramIcon,
  LinkIcon as LinkedInIcon, // Note: 'Linkedin' (no capital D)
} from '@heroicons/react/24/solid'; // Solid icons

const Footer = () => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Design', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Marketing', href: '#' },
        { name: 'Consulting', href: '#' },
        { name: 'Support', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      text: '123 Business Ave, Suite 456, New York, NY 10001',
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      text: '+1 (555) 123-4567',
    },
    {
      icon: <EnvelopeIcon className="h-5 w-5" />,
      text: 'info@company.com',
    },
  ];

  const socialLinks = [
    {
      icon: <FacebookIcon className="h-5 w-5" />,
      href: '#',
      name: 'Facebook',
    },
    {
      icon: <TwitterIcon className="h-5 w-5" />,
      href: '#',
      name: 'Twitter',
    },
    {
      icon: <InstagramIcon className="h-5 w-5" />,
      href: '#',
      name: 'Instagram',
    },
    {
      icon: <LinkedInIcon className="h-5 w-5" />,
      href: '#',
      name: 'LinkedIn',
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Company Name</h3>
            <p className="text-gray-300">
              Providing innovative solutions for your business needs since 2023.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-0.5 text-gray-400">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="pt-4">
              <h5 className="text-gray-300 mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;