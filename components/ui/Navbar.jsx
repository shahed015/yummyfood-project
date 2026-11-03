// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { FiMenu, FiX } from "react-icons/fi";
// import { PiShoppingCartSimple } from "react-icons/pi";

// const NAV_LINKS = [
//   { label: "About Us", href: "/about" },
//   { label: "Menu", href: "/menu" },
//   { label: "Contact", href: "/contact" },
//   { label: "Blog", href: "/blog" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => setIsOpen(false);
//   const isActive = (href) => !href.includes("#") && pathname === href;

//   return (
//     <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
//       <div className="container-custom">
//         <nav
//           aria-label="Main"
//           className="flex h-16 items-center justify-between gap-4 lg:h-18"
//         >
//           <Link href="/" onClick={closeMenu} className={`shrink-0 focus-ring`}>
//             <Image
//               src="/blackLogo.png"
//               alt="YummyFood"
//               width={500}
//               height={500}
//               priority
//               className="h-10 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop links */}
//           <ul className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
//             {NAV_LINKS.map(({ label, href }) => (
//               <li key={label}>
//                 <Link
//                   href={href}
//                   aria-current={isActive(href) ? "page" : undefined}
//                   className={`transition-colors duration-200 hover:text-primary focus-ring ${
//                     isActive(href) ? "text-primary" : "text-text"
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             <Link
//               href="/cart"
//               className={`relative grid size-10 place-items-center text-2xl text-secondary transition-colors duration-200 hover:text-primary focus-ring`}
//             >
//               <PiShoppingCartSimple aria-hidden="true" />
//               <span className="sr-only">Cart</span>
//               <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-secondary"></span>
//             </Link>

//             <button
//               type="button"
//               onClick={() => setIsOpen((prev) => !prev)}
//               aria-expanded={isOpen}
//               aria-controls="mobile-menu"
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//               className={`grid size-10 place-items-center text-2xl text-secondary transition-colors duration-200 hover:text-primary md:hidden focus-ring`}
//             >
//               {isOpen ? (
//                 <FiX aria-hidden="true" />
//               ) : (
//                 <FiMenu aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile menu */}
//         {isOpen && (
//           <ul id="mobile-menu" className="flex flex-col pb-3 md:hidden">
//             {NAV_LINKS.map(({ label, href }) => (
//               <li key={label} className="border-t border-border/60">
//                 <Link
//                   href={href}
//                   onClick={closeMenu}
//                   aria-current={isActive(href) ? "page" : undefined}
//                   className={`block py-3 text-base font-medium transition-colors duration-200 hover:text-primary focus-ring ${
//                     isActive(href) ? "text-primary" : "text-text"
//                   }`}
//                 >
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";

const EASE = [0.22, 1, 0.36, 1];

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);
  const isActive = (href) => !href.includes("#") && pathname === href;

  // Escape diye close + menu khola thakle background scroll bondho
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container-custom">
          <nav
            aria-label="Main"
            className="flex h-16 items-center justify-between gap-4 lg:h-18"
          >
            <Link href="/" onClick={closeMenu} className="shrink-0 focus-ring">
              <Image
                src="/blackLogo.png"
                alt="YummyFood"
                width={500}
                height={500}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <ul className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`transition-colors duration-200 hover:text-primary focus-ring ${
                      isActive(href) ? "text-primary" : "text-text"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                className="relative grid size-10 place-items-center text-2xl text-secondary transition-colors duration-200 hover:text-primary focus-ring"
              >
                <PiShoppingCartSimple aria-hidden="true" />
                <span className="sr-only">Cart</span>
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold leading-none text-secondary"></span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="grid size-10 place-items-center text-2xl text-secondary transition-colors duration-200 hover:text-primary focus-ring md:hidden"
              >
                {isOpen ? (
                  <FiX aria-hidden="true" />
                ) : (
                  <FiMenu aria-hidden="true" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu: header er baire, jate backdrop-blur fixed position na bhange */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            id="mobile-menu"
            aria-label="Mobile menu"
            className="fixed inset-0 z-30 overflow-y-auto bg-background/80 pt-24 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
          >
            <ul className="container-custom flex flex-col gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`block text-xl font-medium transition-colors duration-200 hover:text-primary focus-ring ${
                      isActive(href) ? "text-primary" : "text-text"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
