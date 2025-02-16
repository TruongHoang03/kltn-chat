"use client";

import { useState, useEffect } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";


export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");
 
    return (
      <div className="h-full flex items-center justify-center bg-[#5C3B58]">
          <div className="md:h-auto md:w-[420px]">
              {state === "signIn" ? <SignInCard setState={setState}/> : <SignUpCard setState={setState}/>}

          </div>
      </div>
  );
};


export default function MyComponent() {
    const [time, setTime] = useState("");
  
    useEffect(() => {
      setTime(new Date().toLocaleTimeString());
    }, []);
  
    return <time suppressHydrationWarning>{time}</time>;
  }

// "use client";

// import { useState } from "react";
// import { SignInFlow } from "../types";
// import { SignInCard } from "./sign-in-card";
// import { SignUpCard } from "./sign-up-card";

// export const AuthScreen = () => {
//     const [state, setState] = useState<SignInFlow>("signIn");

//     return (
//         <div className="h-full flex items-center justify-center bg-[#5C3B58]">
//             <div className="md:h-auto md:w-[420px]"> 
//                 {state === "signIn" ? <SignInCard /> : <SignUpCard />}
//                 {/* Thêm nút để chuyển đổi giữa SignIn và SignUp */}
//                 <button 
//                     onClick={() => setState(state === "signIn" ? "signUp" : "signIn")}
//                     className="mt-4 px-4 py-2 bg-white text-black rounded"
//                 >
//                     {state === "signIn" ? "Go to Sign Up" : "Go to Sign In"}
//                 </button>
//             </div>
//         </div>
//     );
// };
