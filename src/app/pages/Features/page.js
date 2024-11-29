"use client"
import React from 'react';
import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="background-custom lg:min-h-[88vh]">
        <section className="pt-[7vw]">
          {/* First */}
          <section>
            <article className="flex flex-col lg:flex-row gap-y-3 justify-center items-start container mx-auto my-16">
              <Image
                className='
                  rounded-2xl
                  sm:w-[40vw]
                  mx-auto'
                src="/img/mainImg.avif"
                width={300}
                height={100}
                alt="Picture of the author"
              />
              <div className="mx-auto w-11/12 lg:w-1/2 flex justify-center items-center lg:items-start flex-col gap-y-4 ">
                <div className="flex flex-col gap-y-3">
                  <div className="font-semibold text-4xl">NU - Video Calling Application</div>
                  <div className="font-extralight">
                    Introducing NU - VCA, your ultimate video calling solution designed for seamless communication. Whether for personal or professional use, our platform offers crystal-clear video and audio quality, ensuring every conversation is as natural as in-person. Built with cutting-edge technology, NU - VCA provides a secure, reliable, and intuitive interface, allowing you to connect effortlessly anytime, anywhere. Experience the future of communication with NU - VCA, where clarity meets convenience.
                  </div>
                </div>
                <div>
                  <button type="submit" className="sm:w-[43.33vw] bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-4 rounded-3xl my-10">
                    <Link href="/pages/SignUp" className="text-base">Get Started</Link>
                  </button>
                </div>
              </div>
            </article>
            <article className="font-extralight w-11/12 flex flex-col gap-y-3 mx-auto my-10">
              <div>
                In today	&apos;s world, it	&apos;s not always practical to hold every meeting in person. With the rise of video chat apps tailored for professional use, businesses can efficiently work remotely while staying connected with clients and colleagues.
              </div>
              <div>
                Many of these apps offer work-focused video calling features designed for professional interactions rather than casual conversations with loved ones. As long as you have a reliable Wi-Fi connection, remote work is feasible and effective.
              </div>
              <div>
                If you<span>&apos;</span>re searching for a versatile video call app or software, consider NU-Video Calling Application. Its desktop and mobile applications provide
                <span className="font-semibold text-blue-700"> free video conferencing </span>
                along with group chat, SMS/MMS messaging, and more features, ensuring seamless communication for your business needs.
              </div>
            </article>
          </section>

          {/* Horizontal Line */}
          <div className="w-11/12 bg-blue-700 mx-auto h-1 my-10"></div>

          {/* Second */}
          <section>
            <section className="flex flex-col justify-center items-center mx-auto gap-y-16">
              <article className="gap-y-10 flex flex-col sm:flex-row w-11/12 mx-auto justify-center items-center ">
                <div className="sm:w-[40vw] flex flex-col gap-y-4 ">
                  <div className="font-semibold text-4xl">Browser-based video calls</div>
                  <div>Some video conferencing software will make you download the desktop or mobile app to host and join video calls. But NU-VCA is browser-based, which means it won	&apos;t force you to download the app. Host and join meetings from a web browser using your computer or mobile device, and get all the cool features that you	&apos;d get in the app.</div>
                </div>
                <div className="sm:w-[51.67vw] flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/browserbasedvideocall.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
              </article>

              <article className="gap-y-10 flex flex-col-reverse sm:flex-row w-11/12 mx-auto justify-center items-center ">
                <div className="sm:w-[51.67vw] flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/fullmeetingcontrol.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
                <div className="sm:w-[40vw] flex flex-col gap-y-4">
                  <div className="font-semibold text-4xl">Full meeting control</div>
                  <div>In the NU-VCA, all the call controls you need are easily in reach. Adjust your volume, start a screen share, mute and unmute yourself, or start and pause recording. It<span>&apos;</span>s all in a clean, easy-to-use interface that lays out all these options for you right on the screen.</div>
                </div>
              </article>

              <article className="flex flex-col sm:flex-row w-11/12 mx-auto justify-center items-center gap-y-10">
                <div className="sm:w-[40vw] flex flex-col gap-y-4">
                  <div className="font-semibold text-4xl">Screen sharing</div>
                  <div>Need to zoom in on a design mockup or run through a webinar with your remote team? NU-VCA as a screen sharing app lets you choose between sharing a specific window or tab or your whole screen. You can even do mobile screen sharing by texting someone a link. Again, no downloads needed.</div>
                </div>
                <div className="sm:w-[51.67vw]  flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/screensharing.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
              </article>

              <article className="gap-y-10 flex flex-col-reverse sm:flex-row w-11/12 mx-auto justify-center items-center ">
                <div className="sm:w-[51.67vw] flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/reboustsecuritysettings.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
                <div className="sm:w-[40vw] flex flex-col gap-y-4">
                  <div className="font-semibold text-4xl">Robust security settings</div>
                  <div>Keep your meetings secure. NU-VCA settings allow the host to mute participants, remove unwanted guests, lock the meeting, limit screen sharing, and more.</div>
                </div>
              </article>

              <article className="gap-y-10 flex flex-col sm:flex-row w-11/12 mx-auto justify-center items-center ">
                <div className="sm:w-[40vw] flex flex-col gap-y-4">
                  <div className="font-semibold text-4xl">Truly unified communications</div>
                  <div>Beyond online video calls, what if your team also communicates through phone calls and text chat? NU-VCA lets you consolidate all those tools into one. Talk, message, and meet—all from one convenient app. That makes for fewer software tools to pay for and manage—and less time wasted on context-switching for your team.</div>
                </div>
                <div className="sm:w-[51.67vw] flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/trulyunifiedcommunications.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
              </article>

              <article className="flex flex-col-reverse sm:flex-row w-11/12 mx-auto justify-center items-center gap-y-10">
                <div className="sm:w-[51.67vw] flex justify-center items-center">
                  <Image
                    className='
                  rounded-2xl
                  sm:w-[40vw]'
                    src="/img/hdvideoquality.webp"
                    width={300}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
                <div className="sm:w-[40vw] flex flex-col gap-y-4">
                  <div className="font-semibold text-4xl">HD video quality</div>
                  <div>No one wants laggy audio or pixelated video quality in a meeting, especially when you<span>&apos;</span>re meeting with clients or prospects. NU-VCA comes with crystal-clear HD video.</div>
                </div>
              </article>
            </section>
          </section>

          {/* Horizontal Line */}
          <div className="w-11/12 bg-blue-700 mx-auto h-1 my-10"></div>

          {/* Third */}
          <section>
            <article>
              <div className="w-10/12 mx-auto">
                <div className="font-semibold text-3xl">Start having live video calls with NU-VCA in 3 steps</div>
                <div>
                  <div>
                    <p className="text-lg">All you need to get started with live video calling in NU-VCA is an Internet connection.</p>
                  </div>

                  <section className="my-5">
                    <article>
                      <p className="font-semibold text-lg">Step 1: Sign Up and Set Up Your Account</p>
                    </article>
                    <article className=" ml-12 flex flex-col gap-y-4">
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Download and Install NU-VCA: </span>
                          Begin by downloading the NU-VCA application on your preferred device. It	&apos;s available for both desktop and mobile platforms.</p>
                      </div>
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Sign Up for an Account: </span>
                          Open the app and create a new account by providing your email address, setting a secure password, and entering any additional required information. If you already have an account, simply log in using your credentials.</p>
                      </div>
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Set Up Your Profile: </span>
                          After signing up, personalize your profile by adding a profile picture and updating your display name. This helps others recognize you during video calls.</p>
                      </div>
                    </article>
                  </section>

                  <section className="my-5">
                    <article>
                      <p className="font-semibold text-lg">Step 2: Add Contacts and Schedule a Video Call</p>
                    </article>
                    <article className=" ml-12 flex flex-col gap-y-4">
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Add Contacts: </span>
                          To start a video call, you	&apos;ll need to add contacts. Navigate to the “Contacts” section in NU-VCA, and add colleagues, clients, or friends by entering their email addresses or phone numbers. You can also import contacts from your device	&apos;s address book.</p>
                      </div>
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Schedule a Video Call: </span>
                          Once your contacts are added, you can schedule a video call. Go to the “Calendar” or “Schedule” section, select the date and time, and invite participants by choosing from your contact list. NU-VCA will send out invitations and reminders to ensure everyone is ready for the call.</p>
                      </div>
                    </article>
                  </section>

                  <section className="my-5">
                    <article>
                      <p className="font-semibold text-lg">Step 3: Start and Manage Your Video Call</p>
                    </article>
                    <article className=" ml-12 flex flex-col gap-y-4">
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Start the Video Call: </span>
                          At the scheduled time, open the NU-VCA app and go to the “Meetings” or “Calls” section. Select your scheduled meeting and click “Join” to start the video call. Alternatively, you can start an instant video call by selecting a contact and clicking on the video call icon.</p>
                      </div>
                      <div className="flex justify-center items-start gap-x-1">
                        <div>&#x2726;</div>
                        <p className="font-extralight">
                          <span className="font-semibold">Manage Your Call: </span>
                          During the call, NU-VCA offers a range of features to enhance your experience. You can use the group chat to send messages, share files, or collaborate with participants. The app also allows you to mute/unmute participants, record the call, and share your screen for presentations or demonstrations.</p>
                      </div>
                    </article>
                  </section>

                  <div>
                    <p className="text-lg">No need to launch a bunch of different applications, and you can even switch from a voice call to messaging and then to a video conference within the same conversation—all in one place with NU-VCA.</p>
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* Horizontal Line */}
          <div className="w-11/12 bg-blue-700 mx-auto h-1 my-10"></div>

          {/* Fourth */}
          <section>
            <article>
              <div className="w-10/12 mx-auto">
                <div className="font-semibold text-3xl mb-4">Online video calling: A better way to communicate with teammates, clients, and prospects</div>
                <div className="flex flex-col gap-y-4">
                  <p>Running a successful business involves many different aspects, and communication is one of the most crucial. If your team is spread across the globe, this becomes even more important. After all, you probably don	&apos;t want to fly teammates in and out of the office just for a meeting.</p>
                  <p>For sales teams, conducting product demos through a video call is a smarter and more efficient option than traveling for in-person presentations. This approach saves both time and money.</p>
                  <p>With <strong>NU-Video Calling Application</strong> (NU-VCA), you can enjoy HD video calling as a standard feature, allowing you to have face-to-face meetings from almost anywhere. Even if your call spans the Atlantic, your conversation will be as clear as if you were in the same room with your colleague.</p>
                </div>
              </div>
            </article>

            <article className="border bg-white textBlue py-10 my-10">
              <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-y-5">
                <div>
                  <p className="font-semibold text-4xl text-center sm:text-6xl">Get started with free video calls</p>
                </div>
                <div className="w-[90vw] sm:w-[60vw] text-center ">
                  <p>Are you still relying on Skype or WhatsApp for your business meetings? It<span>&apos;</span>s time for an upgrade! Switch to NU-Video Calling Application (NU-VCA) and start hosting video meetings from anywhere in the world with our free plan. Ready to see it in action? Book a demo with our team today and discover how it can transform your business communication!</p>
                </div>
                <div>
                  <button type="submit" className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-4 rounded-3xl">
                    <Link href="/pages/Login" className="text-base text-white">Get Started</Link>
                  </button>
                </div>
              </div>
            </article>
          </section>

          {/* Fifth */}
          <section>
            <article>
              <div className="w-10/12 mx-auto flex justify-between items-center py-10 gap-y-5 sm:flex-row flex-col">
                <div className="sm:w-[35vw] text-4xl font-semibold sm:min-h-[70vh] ">Frequently asked questions about online video calling</div>
                <div className="sm:w-[43.33vw] h-[70vh] overflow-y-scroll no-scrollbar">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">Can I make voice-only calls with a video calling app?</AccordionTrigger>
                      <AccordionContent>
                        Yes, NU-VCA, like many video calling apps, allows voice-only calls. Users can disable their camera or join audio-only, preserving bandwidth and privacy. This feature is useful when video isn't necessary or possible due to poor internet connection. NU-VCA's versatility makes it suitable for various communication needs, whether you prefer video or voice-only interactions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">Are certain devices better for making video calls?</AccordionTrigger>
                      <AccordionContent>
                        While NU-VCA works on various devices, certain hardware can enhance your video calling experience. Devices with high-quality cameras, powerful processors, and ample RAM tend to perform better. For optimal NU-VCA calls, consider using recent smartphones, tablets, or computers with built-in or external webcams. Ensure your device has a stable internet connection for the best video and audio quality.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">What can I use video calls for?</AccordionTrigger>
                      <AccordionContent>
                        NU-VCA offers versatile video calling capabilities for various purposes. You can use it for remote work meetings, virtual family gatherings, online education, telemedicine appointments, and social catch-ups with friends. NU-VCA enables face-to-face communication regardless of distance, making it ideal for job interviews, virtual events, collaborative projects, and even virtual tours. It's a powerful tool for maintaining connections in our increasingly digital world.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">Can I use video call with people outside of my organization?</AccordionTrigger>
                      <AccordionContent>
                        Yes, NU-VCA allows you to connect with people outside your organization. You can easily set up video calls with clients, partners, or friends by sharing a meeting link or inviting them via email. NU-VCA's cross-organization functionality ensures seamless communication, regardless of the participant's affiliation. This feature makes NU-VCA versatile for both professional and personal use across different networks.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">Should I pay for video calling software?</AccordionTrigger>
                      <AccordionContent>
                        While NU-VCA likely offers a free version with basic features, paying for premium tiers can provide additional benefits. These may include longer meeting durations, higher participant limits, advanced security features, and better video quality. Consider your usage needs: if you require professional-grade features or frequently host large meetings, NU-VCA's paid version could offer valuable enhancements to your video calling experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-xl cursor-pointer text-start">What	&apos;s the difference between video calling and video chatting?</AccordionTrigger>
                      <AccordionContent>
                        In NU-VCA, video calling and video chatting are often used interchangeably, but there can be subtle differences. Video calling typically refers to more structured, often scheduled conversations, like business meetings or interviews. Video chatting usually implies more casual, spontaneous interactions. However, NU-VCA's platform supports both formal and informal video communications, offering features suitable for professional calls and relaxed chats alike.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main >
      <Footer />
    </>
  );
}
