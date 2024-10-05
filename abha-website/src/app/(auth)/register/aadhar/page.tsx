"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AadharRegisterPage = () => {
    const router = useRouter();
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

    const [step1Data, setStep1Data] = useState({
        aadharNumber: "",
        termsChecked: false,
    });
    const [step2Data, setStep2Data] = useState({
        otp: "",
    });

    return (
        <Wrapper className="w-full h-full flex flex-col gap-8 items-center justify-center">
            <h1 className="text-2xl text-center font-bold">Create ABHA Number Using Aadhaar</h1>

            <div className="flex flex-col gap-2 max-w-sm w-full px-3 md:px-0">
                <div className="w-full mx-auto max-w-sm h-1.5 relative rounded-xl bg-slate-300 overflow-hidden">
                    {step === 1 && (
                        <div className="w-0 h-1.5 absolute rounded-xl bg-black animate-slider" />
                    )}
                    {step === 2 && (
                        <div className="w-1/4 h-1.5 absolute rounded-xl bg-black animate-slider" />
                    )}
                    {step === 3 && (
                        <div className="w-2/4 h-1.5 absolute rounded-xl bg-black animate-slider" />
                    )}
                    {step === 4 && (
                        <div className="w-3/4 h-1.5 absolute rounded-xl bg-black animate-slider" />
                    )}
                </div>
                <div className="flex items-center h-full justify-between px-3">
                    <h3 className="font-bold">
                        {step === 1 && "Personal Details"}
                        {step === 2 && "Address Details"}
                        {step === 3 && "Contact Details"}
                        {step === 4 && "Submit"}
                    </h3>
                    <p className="text-sm font-medium">{`Step: ${step}/4`}</p>
                </div>
            </div>

            {step === 1 && (
                <main className="flex flex-col gap-6 w-full max-w-sm items-center">
                    <div className="w-full space-y-0.5">
                        <Label htmlFor="aadhar">
                            Enter your Aadhar Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            placeholder="xxxx xxxx xxxx"
                            className="w-full"
                            id="aadhar"
                            onChange={(e) =>
                                setStep1Data({
                                    ...step1Data,
                                    aadharNumber: e.target.value
                                        .replace(/\D/g, "")
                                        .substring(0, 12)
                                        .replace(/(\d{4})(?=\d)/g, "$1 - "),
                                })
                            }
                            value={step1Data.aadharNumber}
                        />
                    </div>

                    <div className="w-full space-y-4">
                        <Accordion
                            type="single"
                            defaultValue="terms-and-conditions"
                            collapsible
                            className="w-full"
                        >
                            <AccordionItem value="terms-and-conditions">
                                <AccordionTrigger>Terms and Conditions</AccordionTrigger>
                                <AccordionContent className="max-h-[200px] overflow-y-auto">
                                    <p className="text-sm text-pretty font-medium text-muted-foreground pr-2">
                                        I, hereby declare that I am voluntarily sharing my Aadhaar
                                        number and demographic information issued by UIDAI, with
                                        National Health Authority (NHA) for the sole purpose of
                                        creation of ABHA number. I understand that my ABHA number
                                        can be used and shared for purposes as may be notified by
                                        ABDM from time to time including provision of healthcare
                                        services. Further, I am aware that my personal identifiable
                                        information (Name, Address, Age, Date of Birth, Gender and
                                        Photograph) may be made available to the entities working in
                                        the National Digital Health Ecosystem (NDHE) which inter
                                        alia includes stakeholders and entities such as healthcare
                                        professionals (e.g. doctors), facilities (e.g. hospitals,
                                        laboratories) and data fiduciaries (e.g. health programmes),
                                        which are registered with or linked to the Ayushman Bharat
                                        Digital Mission (ABDM), and various processes there under. I
                                        authorize NHA to use my Aadhaar number for performing
                                        Aadhaar based authentication with UIDAI as per the
                                        provisions of the Aadhaar (Targeted Delivery of Financial
                                        and other Subsidies, Benefits and Services) Act, 2016 for
                                        the aforesaid purpose. I understand that UIDAI will share my
                                        e-KYC details, or response of “Yes” with NHA upon successful
                                        authentication. I have been duly informed about the option
                                        of using other IDs apart from Aadhaar; however, I
                                        consciously choose to use Aadhaar number for the purpose of
                                        availing benefits across the NDHE. I am aware that my
                                        personal identifiable information excluding Aadhaar number /
                                        VID number can be used and shared for purposes as mentioned
                                        above. I reserve the right to revoke the given consent at
                                        any point of time as per provisions of Aadhaar Act and
                                        Regulations.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex h-fit items-center w-full">
                            <input
                                type="checkbox"
                                id="terms-and-conditions"
                                className="mr-2 h-4 aspect-square"
                                required
                                onChange={() => setStep1Data({ ...step1Data, termsChecked: true })}
                            />
                            <Label htmlFor="terms-and-conditions">
                                I agree to the above terms and conditions
                            </Label>
                        </div>
                    </div>

                    <div className="flex h-fit w-full items-center justify-between">
                        <Button
                            variant="secondary"
                            className="w-1/3"
                            onClick={() => router.replace("/register")}
                        >
                            Back
                        </Button>
                        <Button
                            className="w-1/3"
                            onClick={() => setStep(2)}
                            disabled={
                                step1Data.aadharNumber.length !== 18 || !step1Data.termsChecked
                            }
                        >
                            Next
                        </Button>
                    </div>
                </main>
            )}

            {step === 2 && (
                <main className="flex flex-col gap-8 w-full max-w-sm items-center">
                    <div>
                        <Label htmlFor="otp" className="text-xs">
                            Enter OTP
                        </Label>
                        <InputOTP
                            maxLength={6}
                            autoFocus
                            value={step2Data.otp}
                            id="otp"
                            onChange={(otp) => setStep2Data({ ...step2Data, otp: otp })}
                            containerClassName="w-full"
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    <div className="flex h-fit w-full items-center justify-between">
                        <Button variant="secondary" className="w-1/3">
                            Resend OTP
                        </Button>
                        <Button className="w-1/3" onClick={() => setStep(3)}>
                            Next
                        </Button>
                    </div>
                </main>
            )}
            {step === 3 && <div>Step 3</div>}
            {step === 4 && <div>Step 4</div>}
        </Wrapper>
    );
};

export default AadharRegisterPage;
