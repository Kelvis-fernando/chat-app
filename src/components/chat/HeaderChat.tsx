import type { NextPage } from "next";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SignOut, Gear, Question } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/chat/Headerchat.module.scss";

const HeaderChat: NextPage = () => {
   function classNames(...classes: any) {
      return classes.filter(Boolean).join(" ");
   }
   return (
      <header>
         <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-zinc-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <Link href="/chat" className="flex items-center cursor-pointer">
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex cursor-pointer">
                     <Image
                        src={"/chatapp-icon.png"}
                        width={30}
                        height={30}
                        alt={"Icon logo"}
                     />
                     Chat App
                  </span>
               </Link>
               <div
                  className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                  id="mobile-menu-2"
               >
                  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                     <li>
                        <Menu
                           as="div"
                           className="relative inline-block text-left"
                        >
                           <div>
                              <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-white text-sm font-medium hover:border">
                                 <Image
                                    src="/perfil.png"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                    alt="Phoro from perfil"
                                 />
                                 <ChevronDownIcon
                                    className="-mr-1 ml-2 h-5 w-5"
                                    aria-hidden="true"
                                 />
                              </Menu.Button>
                           </div>

                           <Transition
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                           >
                              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                 <div className="py-1">
                                    <Menu.Item>
                                       <Link href="/auth/signIn">
                                          <span className={styles.dropdownLink}>
                                             <Gear size={20} />
                                             Account settings
                                          </span>
                                       </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                       <Link href="/auth/signIn">
                                          <span className={styles.dropdownLink}>
                                             <Question size={20} />
                                             Support
                                          </span>
                                       </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                       <Link href="/auth/signIn">
                                          <span className={styles.dropdownLink}>
                                             <SignOut size={20} />
                                             Logout
                                          </span>
                                       </Link>
                                    </Menu.Item>
                                 </div>
                              </Menu.Items>
                           </Transition>
                        </Menu>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default HeaderChat;
