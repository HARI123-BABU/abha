import { buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import NavLinks from "./NavLinks";
import Wrapper from "./Wrapper";

const Navbar = async () => {
    const user = undefined;

    return (
        <header className="w-full sticky top-0 inset-x-0 z-50 bg-background h-16">
            <Wrapper className="h-full w-full flex items-center justify-between border-b">
                <Link href="/">
                    <h1 className="text-xl font-bold text-primary">ABHA</h1>
                </Link>

                <NavLinks user={user} />

                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <CircleUserRound strokeWidth={1.6} size={28} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="font-medium">
                                <Link href="/profile">
                                    <DropdownMenuItem className="cursor-pointer">
                                        Profile
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuSeparator />
                                <Link href="/abha-address">
                                    <DropdownMenuItem className="cursor-pointer">
                                        ABHA Address
                                    </DropdownMenuItem>
                                </Link>
                                <DropdownMenuSeparator />
                                <LogoutButton isDropdown />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                            >
                                Login
                            </Link>
                            <Link href="/register" className={buttonVariants()}>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
