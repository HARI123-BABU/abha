// app/api/verify-otp/route.js
import { NextResponse } from 'next/server';
 // Your OTP verification logic

export async function POST(request) {
  const { mobile, otp } = await request.json();

  const isValid = await OTPService.verifyOTP(mobile, otp); // Implement this function

  if (isValid) {
    // Save the user data to the database or session
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid OTP.' });
  }
}
