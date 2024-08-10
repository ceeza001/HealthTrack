import { Outlet, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const RootLayout = () => {
  
  return (
    <>
      <SignedOut>
        <Navigate to="/sign-in" />
      </SignedOut>
      
      <SignedIn>
        <div className="w-full">
          <UserButton />
          <Outlet />
        
        </div>
      </SignedIn>
    </>
  );
};

export default RootLayout;