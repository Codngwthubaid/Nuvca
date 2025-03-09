// "use client";
// import Loader from "@/components/Loader";
// import MeetingRoom from "@/components/MeetingRoom";
// import MeetingSetup from "@/components/MeetingSetup";
// import { useGetCallById } from "@/hooks/useGetCallById";
// import { useUser } from "@clerk/nextjs";
// import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
// import React, { useState } from "react";

// interface MeetingPageProps {
//   params: {
//     id: string;
//   };
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
import { Call, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

interface MeetingPageProps {
  params: {
    id: string;
  };
}

const Meeting = ({ params }: MeetingPageProps) => {
  const { id } = params;
  const { isLoaded } = useUser();
  const [isSetupCompleted, setIsSetupCompleted] = useState(false);
  const [call, setCall] = useState<Call | undefined>(undefined);
  const [isCallLoading, setIsCallLoading] = useState(true);

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const { call, isCallLoading } = await useGetCallById(id);
        setCall(call);
        setIsCallLoading(isCallLoading);
      } catch (error) {
        console.error("Error fetching call:", error);
        setIsCallLoading(false);
      }
    };

    fetchCall();
  }, [id]);

  if (!isLoaded || !call || isCallLoading) return <Loader />;

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