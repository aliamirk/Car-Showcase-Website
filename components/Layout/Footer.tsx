import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../constants";

const Footer = () => {

  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-200">

      {/* Container */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 ">

          {/* Car Hub Image */}
          <Image
            src="/logo.svg"
            alt="CarHub Logo"
            width={118}
            height={18}
            className="object-contain"
          />

          {/* Copyright Text */}
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        {/* Footer Links */}
        <div className=" footer__links ">

          {/* Footer title */}
          {footerLinks.map((link) => (

            // Footer Links Title
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>

              {
                // Footer Links
                link.links.map((linkItem) => (
                  <Link
                    key={linkItem.title}
                    href={linkItem.url}
                    className="text-gray-500 hover:text-gray-800 "
                  >
                    {linkItem.title}
                  </Link>
                ))
              }

            </div>
          ))}

        </div>
        
      </div>

        {/* Privacy and designed by */}

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 ">
          {/*  */}
          <p>
             @2023 Carhub. All Rights Reserved
          </p>

          <div className="footer__copyrights-link">
              <Link href="/" className="text-gray-500">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-500">
                Terms Of Use
              </Link>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
