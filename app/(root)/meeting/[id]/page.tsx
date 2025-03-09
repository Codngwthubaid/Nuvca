// "use client";
// import Loader from "@/components/Loader";
// import MeetingRoom from "@/components/MeetingRoom";
// import MeetingSetup from "@/components/MeetingSetup";
// import { useGetCallById } from "@/hooks/useGetCallById";
// import { useUser } from "@clerk/nextjs";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import React, { useState } from "react";

// interface MeetingPageProps {
//   params: { id: string }; // `params` is a plain object with `id` in Client Components
// }

// const Meeting = ({ params }: MeetingPageProps) => {
//   const { id } = params;
//   const { isLoaded } = useUser();
//   const [isSetupCompleted, setIsSetupCompleted] = useState(false);

//   const { call, isCallLoading } = useGetCallById(id);

//   if (!isLoaded || !call || isCallLoading) return <Loader />;

//   return (
//     <main className="h-screen w-full">
//       <StreamCall call={call}>
//         <StreamTheme>
//           {!isSetupCompleted ? (
//             <MeetingSetup setIsSetupCompleted={setIsSetupCompleted} />
//           ) : (
//             <MeetingRoom />
//           )}
//         </StreamTheme>
//       </StreamCall>
//     </main>
//   );
// };

// export default Meeting;



"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

// Define props with params as a Promise
interface MeetingPageProps {
  params: Promise<{ id: string }>; // Reflects Next.js 15.2 behavior
}

const Meeting = ({ params }: MeetingPageProps) => {
  const [id, setId] = useState<string | null>(null); // State to hold resolved id
  const { isLoaded } = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);

  // Resolve the params Promise on the client side
  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    }).catch((error) => {
      console.error("Error resolving params:", error);
    });
  }, [params]);

  const { call, isCallLoading } = useGetCallById(id || ""); // Use resolved id

  // Show loader until id is resolved and other conditions are met
  if (!id || !isLoaded || !call || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupCompleted ? (
            <MeetingSetup setIsSetupCompleted={setIsSetupCompleted} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;