"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");

  const handleSendOtp = () => {
    if (phoneNumber.trim().length < 10) return;
    // Add your OTP sending logic here
    setOtpSent(true);
  };

  const handleSubmit = () => {
    if (otp.trim().length === 0) return;
    // Add login or registration logic here
    console.log({ name, phoneNumber, otp, type: login ? "login" : "register" });
  };

  return (
    <section
      id="auth"
      className="min-h-screen w-full flex items-center justify-center px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-w-4xl">
        {/* Left content */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-3xl md:text-4xl font-extrabold mt-6 leading-tight tracking-tight">
            Book Your Stay Now
          </h1>
          <p className="text-muted-foreground mt-2">
            {login
              ? "Enter your details to log in"
              : "Enter your details to create an account"}
          </p>
          <p
            className="mt-6 text-sm md:text-base cursor-pointer underline hover:text-primary transition-colors"
            onClick={() => {
              setLogin(!login);
              setOtpSent(false);
              setOtp("");
              setPhoneNumber("");
              setName("");
            }}
          >
            {login
              ? "Don't have an account? Create one"
              : "Already have an account? Log in"}
          </p>
        </div>

        {/* Form content */}
        <div className="w-full max-w-sm space-y-4">
          {!login && !otpSent && (
            <Input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          {!otpSent ? (
            <>
              <Input
                type="tel"
                placeholder="Mobile number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button className="w-full" onClick={handleSendOtp}>
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <Input
                type="text"
                inputMode="numeric"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button className="w-full" onClick={handleSubmit}>
                {login ? "Log In" : "Register"}
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
