import { cn } from "@/lib/utils";

const Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-3 sm:px-6 md:px-12 lg:px-16 h-full", className)}>
            {children}
        </div>
    );
};

export default Wrapper;
