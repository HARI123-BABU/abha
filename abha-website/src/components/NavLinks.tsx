"use client";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "./ui/button";

const NavLinks = ({ user }: { user: undefined | boolean }) => {
    const pathName = usePathname();

    const NAVIGATIONMENULINKS: {
        title: string;
        href?: string;
        content?: { title: string; href: string }[];
    }[] = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About Us",
            content: [
                { title: "ABDM", href: "https://abdm.gov.in/abdm" },
                { title: "NHA", href: "https://abdm.gov.in/nha" },
            ],
        },
        {
            title: "Resource Center",
            content: [
                {
                    title: "Health Data Management Policy",
                    href: "https://abdm.gov.in:8081/uploads/Draft_HDM_Policy_April2022_e38c82eee5.pdf",
                },
                {
                    title: "News and Media",
                    href: "https://abdm.gov.in/in-the-news",
                },
            ],
        },
        {
            title: "Support",
            content: [
                { title: "Grievance Portal", href: "https://grievance.abdm.gov.in/grievance/v3/" },
                { title: "Contact Us", href: "/contact" },
                { title: "FAQ's", href: "/faq" },
            ],
        },
    ] as const;

    return (
        <>
            <nav className="hidden md:flex items-center h-20 gap-2">
                {NAVIGATIONMENULINKS.map((link) => {
                    if (link.content) {
                        return (
                            <NavigationMenu key={link.title}>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="flex flex-col gap-2 p-2 w-full">
                                                {link.content.map((item) => (
                                                    <Link
                                                        href={item.href}
                                                        legacyBehavior
                                                        passHref
                                                        key={item.title}
                                                    >
                                                        <NavigationMenuLink
                                                            target="_blank"
                                                            className={navigationMenuTriggerStyle()}
                                                        >
                                                            {item.title}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                ))}
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        );
                    }

                    return (
                        <Link
                            href={link.href as string}
                            className={navigationMenuTriggerStyle({
                                className: { "!bg-accent": pathName === (link.href as string) },
                            })}
                        >
                            {link.title}
                        </Link>
                    );
                })}
            </nav>

            <Sheet>
                <SheetTrigger>
                    <Menu className="md:hidden" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="hidden">Navigation</SheetTitle>
                        <SheetDescription className="hidden">Navigation</SheetDescription>
                    </SheetHeader>
                    <div className="flex flex-col justify-between py-8 flex-grow gap-8 h-full">
                        <nav>
                            {NAVIGATIONMENULINKS.filter((link) => !link.content).map((link) => (
                                <SheetClose asChild>
                                    <Link
                                        href={link.href as string}
                                        className="!justify-normal flex flex-1 items-center py-4 text-sm font-bold border-b"
                                        key={link.title}
                                    >
                                        {link.title}
                                    </Link>
                                </SheetClose>
                            ))}
                            <Accordion type="multiple" className="w-full">
                                {NAVIGATIONMENULINKS.filter((link) => link.content).map((link) => (
                                    <AccordionItem value={link.title} key={link.title}>
                                        <AccordionTrigger className="font-bold">
                                            {link.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-4 py-2">
                                                {link.content?.map((item) => (
                                                    <SheetClose asChild>
                                                        <Link
                                                            href={item.href}
                                                            className={buttonVariants({
                                                                variant: "ghost",
                                                                className:
                                                                    "!justify-normal !font-semibold",
                                                            })}
                                                            key={item.title}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </SheetClose>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </nav>

                        <div className="flex w-full flex-col gap-6">
                            <SheetClose asChild>
                                <Link
                                    href="/login"
                                    className={buttonVariants({
                                        variant: "ghost",
                                        className: "w-full",
                                    })}
                                >
                                    Login
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link
                                    href="/register"
                                    className={buttonVariants({ className: "w-full" })}
                                >
                                    Register
                                </Link>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default NavLinks;
