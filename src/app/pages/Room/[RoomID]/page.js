"use client"
import React from 'react'
import UserHook from '@/hooks/useUser';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const page = ({ params }) => {
  const { user } = UserHook()
  const RoomID = params.RoomID
  console.log(RoomID)

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 164815597;
    const serverSecret = "09911a3df0bcd43e334f236126ea2f5f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      RoomID,
      uuidv4(),
      user || "user" + Date.now(),
      3600);

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    console.log(zp);
    
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            RoomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  }


  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    </>
  )
}

export default page