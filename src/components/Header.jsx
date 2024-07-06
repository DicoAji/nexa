import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SribogaLogo from "./../../public/img/saiboga-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Tentang Kami", href: "#", current: false },
  { name: "Produk", href: "#", current: false },
  { name: "Inspirasi Baking & Consulting ", href: "#", current: false },
  { name: "Acara", href: "#", current: false },
  { name: "Hubungi Kami", href: "#", current: false },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="max-sm:fixed top-0 left-0 z-50 w-full ">
      {({ open }) => (
        <>
          <div className="sm:mt-[70px]">
            <div className="relative flex  items-center justify-between max-sm:fixed  top-0 left-0 right-0 z-20 ">
              <div className="absolute sm:hidden right-0 -translate-x-[20px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center p-2">
                  <span className="absolute -inset-0.5 left-0" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="w-full">
                <div className="flex flex-1 items-center justify-center  bg-[#FFFBF0] py-[10px]">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="hero_logo sm:hidden">
                      <div className="flex ">
                        <img
                          src={SribogaLogo}
                          className="h-fit max-sm:h-[26px] my-auto"
                          alt=""
                        />
                        <p className="uppercase sm:text-[26px]  text-[20px] text-[#293678] logo-brand  font-semibold ml-1 h-fit my-auto">
                          SRIBOGA
                        </p>
                      </div>
                      <p className="uppercase logo-brand text-[#293678] sm:text-[10px] text-[8px] sm:tracking-[0.8px] ">
                        PIONEER IN FLOUR INNOVATION
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block  py-[10px]">
                    <div className="flex lg:space-x-[60px] sm:space-x-[20px] text-blue-700 font-medium  text-[16px] ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="tracking-[0.64px] menu_nav border-transparent border-b-2 hover:shadow-blue-600 hover:border-b-2 hover:border-blue-600"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden  top-0 bg-[#FFFBF0] pt-[70px]">
            <div className="space-y-1 px-1 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className=" text-[12px] tracking-[0.64px] block px-2 py-1  font-light"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
