import { buttonVariants } from "@/components/ui/button";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <Wrapper className="w-full h-full flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-2xl font-bold">Create ABHA Number</h1>
                <p className="text-sm font-medium text-center text-muted-foreground">
                    Please choose one of the below option to start with the creation of your ABHA
                </p>
            </div>
            <div className="flex flex-col gap-4 w-full mx-auto max-w-xs">
                <Link href="/register/aadhar" className={buttonVariants()}>
                    Create using Aadhar
                </Link>
                <Link href="/register/pan" className={buttonVariants()}>
                    Create using PAN
                </Link>
            </div>
        </Wrapper>
    );
};

export default RegisterPage;
