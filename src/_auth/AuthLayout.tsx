import { Link, Outlet, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const AuthLayout = () => {
  
  return (
    <>
      <SignedIn>
        <Navigate to="/" />
      </SignedIn>
      
      <SignedOut>
        <div className="flex h-[100dvh] max-h-screen">
          <section className="remove-scrollbar container my-auto">
            <div className="sub-container max-w-[496px]">
              <img
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />

              <Outlet />

              <div className="text-14-regular mt-8 md:mt-20 flex justify-between">
                <p className="justify-items-end text-dark-600 xl:text-left">
                  © 2024 HealthTrack
                </p>
                <Link to="/?admin=true" className="text-green-500">
                  Archer Tech
                </Link>
              </div>
            </div>
          </section>

          <img
            src="/assets/images/onboarding-img.png"
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[50%]"
          />
        </div>
      </SignedOut>
    </>
  );
};

export default AuthLayout;