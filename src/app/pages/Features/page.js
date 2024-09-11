"use client"
import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import MainPicture from "@/Components/MainPicture";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.'
    },

    {
      id: 2,
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email at support@example.com or by phone at (123) 456-7890.'
    },

    {
      id: 3,
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday to Friday, 9:00 AM to 5:00 PM EST.'
    },

    {
      id: 4,
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all our products and services.'
    },

    {
      id: 5,
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location. Typically, orders are delivered within 3-5 business days.'
    },
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <main className="background-custom lg:min-h-[88vh">
        <section className="pt-[7vw]">
          {/* First */}
          <section>
            <article className="flex flex-col lg:flex-row gap-y-3 justify-center items-start container mx-auto my-10">
              <MainPicture />
              <div className="w-10/12 lg:w-1/2 flex justify-center mb-8 items-center lg:items-start  flex-col gap-y-4 ">
                <div className="flex flex-col gap-y-3">
                  <div className="font-semibold text-4xl">NU - Video Calling Application</div>
                  <div className="font-extralight">
                    Introducing NU - VCA, your ultimate video calling solution designed for seamless communication. Whether for personal or professional use, our platform offers crystal-clear video and audio quality, ensuring every conversation is as natural as in-person. Built with cutting-edge technology, NU - VCA provides a secure, reliable, and intuitive interface, allowing you to connect effortlessly anytime, anywhere. Experience the future of communication with NU - VCA, where clarity meets convenience.
                  </div>
                  <div className="font-semibold text-lg">Try it free for 30 days.</div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="sm:w-[43.33vw] bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-4 rounded-3xl text-white  flex justify-center items-center gap-x-2">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                      <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    <div className="text-base">Sign in with Google</div>
                  </button>
                </div>
                <div>
                  <button type="submit" className="sm:w-[43.33vw] bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-4 rounded-3xl">
                    <Link href="/pages/SignUp" className="text-base">Get Started</Link>
                  </button>
                </div>
              </div>
            </article>
            <article className="font-extralight w-[80vw] flex flex-col gap-y-3 mx-auto my-10">
              <div>
                In today’s world, it’s not always practical to hold every meeting in person. With the rise of video chat apps tailored for professional use, businesses can efficiently work remotely while staying connected with clients and colleagues.
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
            <article className=" flex w-11/12 mx-auto justify-center items-center">
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">Browser-based video calls</div>
                <div>Some video conferencing software will make you download the desktop or mobile app to host and join video calls. But NU-VCA is browser-based, which means it won’t force you to download the app. Host and join meetings from a web browser using your computer or mobile device, and get all the cool features that you’d get in the app.</div>
              </div>
              <div className="w-[51.67vw]">Image</div>
            </article>

            <article className=" flex w-11/12 mx-auto justify-center items-center my-5">
              <div className="w-[51.67vw]">Image</div>
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">Full meeting control</div>
                <div>In the NU-VCA, all the call controls you need are easily in reach. Adjust your volume, start a screen share, mute and unmute yourself, or start and pause recording. It<span>&apos;</span>s all in a clean, easy-to-use interface that lays out all these options for you right on the screen.</div>
              </div>
            </article>

            <article className=" flex w-11/12 mx-auto justify-center items-center my-5">
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">Screen sharing</div>
                <div>Need to zoom in on a design mockup or run through a webinar with your remote team? NU-VCA as a screen sharing app lets you choose between sharing a specific window or tab or your whole screen. You can even do mobile screen sharing by texting someone a link. Again, no downloads needed.</div>
              </div>
              <div className="w-[51.67vw]">Image</div>
            </article>

            <article className=" flex w-11/12 mx-auto justify-center items-center my-5">
              <div className="w-[51.67vw]">Image</div>
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">Robust security settings</div>
                <div>Keep your meetings secure. NU-VCA settings allow the host to mute participants, remove unwanted guests, lock the meeting, limit screen sharing, and more.</div>
              </div>
            </article>

            <article className=" flex w-11/12 mx-auto justify-center items-center my-5">
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">Truly unified communications</div>
                <div>Beyond online video calls, what if your team also communicates through phone calls and text chat? NU-VCA lets you consolidate all those tools into one. Talk, message, and meet—all from one convenient app. That makes for fewer software tools to pay for and manage—and less time wasted on context-switching for your team.</div>
              </div>
              <div className="w-[51.67vw]">Image</div>
            </article>

            <article className=" flex w-11/12 mx-auto justify-center items-center my-5">
              <div className="w-[51.67vw]">Image</div>
              <div className="w-[40vw] flex flex-col gap-y-4">
                <div className="font-semibold text-4xl">HD video quality</div>
                <div>No one wants laggy audio or pixelated video quality in a meeting, especially when you<span>&apos;</span>re meeting with clients or prospects. NU-VCA comes with crystal-clear HD video.</div>
              </div>
            </article>
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
                          Begin by downloading the NU-VCA application on your preferred device. It’s available for both desktop and mobile platforms.</p>
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
                          To start a video call, you’ll need to add contacts. Navigate to the “Contacts” section in NU-VCA, and add colleagues, clients, or friends by entering their email addresses or phone numbers. You can also import contacts from your device’s address book.</p>
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
                  <p>Running a successful business involves many different aspects, and communication is one of the most crucial. If your team is spread across the globe, this becomes even more important. After all, you probably don’t want to fly teammates in and out of the office just for a meeting.</p>
                  <p>For sales teams, conducting product demos through a video call is a smarter and more efficient option than traveling for in-person presentations. This approach saves both time and money.</p>
                  <p>With <strong>NU-Video Calling Application</strong> (NU-VCA), you can enjoy HD video calling as a standard feature, allowing you to have face-to-face meetings from almost anywhere. Even if your call spans the Atlantic, your conversation will be as clear as if you were in the same room with your colleague.</p>
                </div>
              </div>
            </article>

            <article className="border bg-white textBlue py-10 my-10">
              <div className="w-10/12 mx-auto flex flex-col justify-center items-center gap-y-5">
                <div>
                  <p className="font-semibold text-6xl">Get started with free video calls</p>
                </div>
                <div className="w-[60vw] text-center">
                  <p>Are you still relying on Skype or WhatsApp for your business meetings? It<span>&apos;</span>s time for an upgrade! Switch to NU-Video Calling Application (NU-VCA) and start hosting video meetings from anywhere in the world with our free plan. Ready to see it in action? Book a demo with our team today and discover how it can transform your business communication!</p>
                </div>
                <div>
                  <button type="submit" className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm px-5 py-4 rounded-3xl">
                    <Link href="/Login" className="text-base text-white">Get Started</Link>
                  </button>
                </div>
              </div>
            </article>
          </section>

          {/* Fifth */}
          <section>
            <article>
              <div className="sm:w-10/12 mx-auto flex justify-between items-center py-10">
                <div className="sm:w-[35vw] text-4xl font-semibold  min-h-[70vh]">Frequently asked questions about online video calling</div>
                <div className="sm:w-[43.33vw]  h-[70vh] overflow-y-scroll no-scrollbar">
                  <div className="text-2xl cursor-pointer">Can I make voice-only calls with a video calling app?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">Are certain devices better for making video calls?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">What can I use video calls for?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">Can I use video call with people outside of my organization?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">Should I pay for video calling software?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">Why should my business use video calling software?</div>
                  <div className="w-[43.33vw] bg-blue-700 mx-auto h-[1px] my-5"></div>
                  <div className="text-2xl cursor-pointer">What’s the difference between video calling and video chatting?</div>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}



// const FAQPage = () => {


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Section */}
//           <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search FAQs..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <FaSearch className="absolute left-3 top-3 text-gray-400" />
//               </div>
//             </div>
//             <div className="divide-y divide-gray-200 max-h-[calc(100vh-200px)] overflow-y-auto">
//               {filteredFAQs.map((faq) => (
//                 <div key={faq.id} className="p-4 transition duration-300 ease-in-out hover:bg-gray-50">
//                   <button
//                     className="flex justify-between items-center w-full text-left"
//                     onClick={() => toggleFAQ(faq.id)}
//                     aria-expanded={openFAQ === faq.id}
//                     aria-controls={`faq-answer-${faq.id}`}
//                   >
//                     <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
//                     <motion.div
//                       animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {openFAQ === faq.id ? (
//                         <FaChevronUp className="text-blue-500" />
//                       ) : (
//                         <FaChevronDown className="text-gray-400" />
//                       )}
//                     </motion.div>
//                   </button>
//                   <AnimatePresence>
//                     {openFAQ === faq.id && (
//                       <motion.p
//                         key={`faq-answer-${faq.id}`}
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="mt-2 text-gray-600"
//                       >
//                         {faq.answer}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQPage;