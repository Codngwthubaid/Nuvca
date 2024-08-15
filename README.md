# Video Calling Application

## Overview

This video calling application is a full-featured, real-time communication platform developed using **Next.js** for server-side rendering and efficient routing, **Tailwind CSS** for a highly customizable and responsive UI, and several npm packages to handle video streaming, peer-to-peer connections, and other essential functionalities. The application is designed to offer a seamless video communication experience with a focus on performance, scalability, and ease of use.

## Key Features

- **Real-Time Video Calling**: Facilitates instant video calls between users using WebRTC technology for peer-to-peer connections.
- **Responsive Design**: Leveraging Tailwind CSS, the application adapts to different screen sizes, providing a consistent experience across desktops, tablets, and smartphones.
- **Scalable Architecture**: Built with Next.js, the application supports both server-side rendering and static site generation, ensuring fast loading times and scalability.
- **User Authentication**: Secure user authentication is implemented to restrict access to video calls only to authenticated users.
- **Multiple Room Support**: Users can create or join different video rooms, making it ideal for group meetings, classes, or casual conversations.
- **Chat Functionality**: In addition to video, users can send text messages during the call, enhancing the communication experience.
- **Screen Sharing**: Users can share their screens with others in the call, useful for presentations, tutorials, and collaboration.

## Technologies Used

- **Next.js**: Provides server-side rendering, API routes, and static site generation, making the application fast and SEO-friendly.
- **Tailwind CSS**: A utility-first CSS framework used for creating a responsive and visually appealing UI with minimal effort.
- **WebRTC**: A suite of protocols and APIs enabling peer-to-peer video, voice, and data sharing directly between browsers.
- **Socket.io**: Handles real-time, bidirectional, and event-based communication, used for signaling in the WebRTC connection.
- **Express.js**: A web application framework for Node.js, used to create a custom server to handle API routes and authentication.
- **Next-Auth**: Handles user authentication, offering a variety of authentication providers and strategies.
- **PeerJS**: Simplifies WebRTC peer-to-peer data, video, and audio connections.
- **PostCSS**: For processing Tailwind CSS and other CSS files, enabling a modern, maintainable CSS codebase.

## Setup Instructions

### Prerequisites

Before setting up the application, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for managing packages)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/video-calling-app.git
   cd video-calling-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**:
   Create a `.env.local` file in the root of the project and configure the necessary environment variables such as:
   - `NEXT_PUBLIC_GOOGLE_API_KEY`: For any Google API services you may use.
   - `NEXT_PUBLIC_PEERJS_API_KEY`: For PeerJS service.
   - Other environment-specific configurations.

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000`.

### Deployment

For deployment, consider platforms like Vercel or Netlify, which offer seamless integration with Next.js. Ensure to configure your environment variables on the deployment platform.

## Project Structure

- **pages/**: Contains all the pages of the application, including the API routes.
- **components/**: Reusable components such as video player, chat box, and buttons.
- **styles/**: Contains global and component-specific CSS files, including Tailwind CSS configurations.
- **lib/**: Utility functions, custom hooks, and context providers.
- **public/**: Static assets like images, icons, and videos.
- **server/**: Custom server logic, such as setting up Express.js and handling API routes.

## Customization

- **Tailwind CSS**: Modify the `tailwind.config.js` file to customize themes, extend utility classes, or add new plugins.
- **PeerJS Configurations**: Adjust PeerJS settings in `lib/peerConfig.js` to customize peer-to-peer connections.
- **Next-Auth Providers**: Add or configure authentication providers in `pages/api/auth/[...nextauth].js`.

## Future Enhancements

- **Recording Feature**: Add functionality to record video calls.
- **Advanced Security**: Implement end-to-end encryption for video calls.
- **Notification System**: Push notifications for incoming calls and messages.

## Contributions

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Special thanks to the developers of Next.js, Tailwind CSS, and WebRTC for their excellent tools and documentation.
- Inspired by the need for efficient and reliable remote communication solutions.

