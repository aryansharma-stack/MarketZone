# Corporate Demat Remat Website

A modern and responsive web application built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [TypeScript](https://www.typescriptlang.org/). It features modern UI using [Tailwind CSS](https://tailwindcss.com/) and smooth animations via [Framer Motion](https://www.framer.com/motion/).

## 📖 Project Overview & Details

This application is a fully functional Corporate Demat Remat Website, designed to provide information and services related to the dematerialization and rematerialization of securities. The project is structured with various informative pages and functional components:

### 📄 Detailed Pages Breakdown
- **Home (`Home.tsx`)**: The landing page that provides an overview of the corporate services and features a welcoming hero section.
- **About (`About.tsx`)**: Contains the company's background, history, and mission.
- **Services (`Services.tsx`)**: Detailed explanations of the Demat and Remat services provided, along with their benefits.
- **Partners (`Partners.tsx`)**: Information covering affiliated businesses, trusted brokers, or partner organizations.
- **Downloads (`Downloads.tsx`)**: A dedicated resource center providing downloadable documents, instructions, and service forms for clients.
- **FAQ (`FAQ.tsx`)**: A structured list of frequently asked questions and their answers for self-service user guidance.
- **Contact (`Contact.tsx`)**: Reach out information, a contact form, and an interactive map overview for locating the company.

### 🧩 Key Components Highlight
- **LeadCaptureModal (`LeadCaptureModal.tsx`)**: A strategic modal that intercepts user visits to securely capture their contact details (Name, Email, Phone Number). This data is saved locally to a `leads.json` file.
- **WhatsAppButton (`WhatsAppButton.tsx`)**: A persistent floating UI element providing users with an instant chat option, enhancing user engagement.
- **AnimatedSection (`AnimatedSection.tsx`)**: A reusable wrapper component utilizing Framer Motion for revealing content beautifully on scroll, enhancing the modern feel of the application.

## 🌟 Features

- **Responsive Design**: Designed to work seamlessly across desktops, tablets, and mobile devices.
- **Modern UI Elements**: Utilizing Tailwind CSS for styling and Framer Motion for dynamic animations.
- **Routing**: Client-side routing implemented with React Router DOM for fast and seamless page transitions.
- **Lead Capture System**: A built-in modal to capture user information (Name, Email, Phone) efficiently.
- **Extensive Pages**: Includes dedicated pages for Home, About, Services, Partners, Downloads, FAQ, and Contact.
- **Reusable Components**: Modular UI parts including a sticky Header, informative Footer, interactive map integration, and a WhatsApp floating action button.

## 🚀 Tech Stack

- **Frontend Framework**: React 18, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM (v7)
- **Backend/Database**: Options to integrate with Supabase

## 📦 Prerequisites

Before you begin setting up the project, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (Version 18.x, 20.x, or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or you can use [Yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

## 🛠️ Step-by-Step Installation

Follow these instructions to set up the project locally.

### 1. Get the Project Files

Navigate to the project folder (`AMAN/` directory) via your terminal or command prompt:
```bash
cd path/to/project/folder/AMAN
```

### 2. Install Dependencies

Install the required node modules and packages by running the following command in the root directory of the project:
```bash
npm install
```

### 3. Start the Development Server

To launch the Vite development server with Hot Module Replacement (HMR) enabled, run:
```bash
npm run dev
```

### 4. Open in Browser

Once the server has started successfully, you will see a local URL in your terminal (typically `http://localhost:5173/`). Open this URL in your preferred web browser to view and interact with the application.

## ⚙️ Building for Production

When you are ready to deploy the website, you can create a production-ready build by running:
```bash
npm run build
```
This command compiles the React application and optimizes all assets, placing the output in the `dist` directory. 

You can preview the generated production build locally using:
```bash
npm run preview
```

## 📁 Project Structure

Here is a brief overview of the primary directories and files in this project:

- `src/` - The main application source text.
  - `components/` - Reusable UI components (e.g., `Header.tsx`, `Footer.tsx`, `WhatsAppButton.tsx`, `LeadCaptureModal.tsx`).
  - `pages/` - Different page components corresponding to the website routes (`Home.tsx`, `About.tsx`, `Services.tsx`, etc.).
  - `App.tsx` - The root component containing the main layout and routing configurations.
  - `main.tsx` - Entry point where the React application connects to the DOM.
- `index.html` - The HTML template for the application.
- `leads.json` - Local JSON file for storing captured user leads.
- `package.json` - Holds project metadata, dependencies, and NPM scripts.
- `tailwind.config.js` - Configuration file for customizing Tailwind CSS rules and themes.
- `vite.config.ts` - Vite builder configuration file.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to modify the codebase to adapt to new requirements or design ideas.
