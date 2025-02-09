"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/pla_logo.png";
import Image from "next/image";
import { LightToggle } from "./Light_Toggle";
import { Book, PanelLeftClose, PanelRightClose } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchInput from "./SearchInput";

function Header() {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="md:container mx-auto px-4 ">
        <div className="flex h-24 items-center justify-between  gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href={"/"} prefetch={false}>
              <Image
                src={Logo}
                alt="logo"
                priority
                className="my-2 max-w-[120px] w-36 hover:shadow-slate-400 hover:scale-105  hover:invert hover:transition-all hover:delay-300 "
              />
            </Link>

            <SearchInput />
          </div>

          {!showIcons && (
            <PanelLeftClose
              onClick={() => setShowIcons(!showIcons)}
              size={23}
              className="md:hidden"
            />
          )}
          {showIcons && (
            <>
              <div className="md:hidden">
                {showIcons && (
                  <PanelRightClose
                    onClick={() => setShowIcons(!showIcons)}
                    size={23}
                  />
                )}
              </div>

              <div className="flex flex-col fixed right-2 cont ainer justify-center  top-20 mx-auto  space-y-2 md:space-x-4 md:hidden">
                <div className="flex items-center justify-center  flex-col space-y-2 md:space-x-4">
                  <SignedIn>
                    <Link
                      href={"/my-courses"}
                      prefetch={false}
                      className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-1 ">
                      <Book />

                      <span className=" md:block">My Courses</span>
                    </Link>
                  </SignedIn>

                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>

                <SignedOut>
                  <SignInButton mode="modal">
                    <Button variant="secondary">Use Now</Button>
                  </SignInButton>
                </SignedOut>
                <LightToggle />
              </div>
            </>
          )}

          <div className=" w-1/2 justify-end container   top-14 mx-auto  space-x-2 md:space-x-4 md:flex hidden">
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
              <SignedIn>
                <Link
                  href={"/my-courses"}
                  prefetch={false}
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-1 ">
                  <Book />

                  <span className=" md:block">My Courses</span>
                </Link>
              </SignedIn>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="secondary"></Button>
              </SignInButton>
            </SignedOut>
            <LightToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
