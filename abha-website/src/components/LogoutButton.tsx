"use client";
import { Button } from "./ui/button";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const LogoutButton = ({ isDropdown }: { isDropdown: boolean }) => {
    const handleLogout = () => {};

    if (isDropdown) {
        return (
            <DropdownMenuItem
                className="cursor-pointer text-destructive hover:!bg-destructive hover:!text-destructive-foreground"
                onClick={handleLogout}
            >
                Logout
            </DropdownMenuItem>
        );
    }

    return (
        <Button variant="ghost" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
