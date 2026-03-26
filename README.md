# 🦷 MERCY Dental Clinic Management System
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, fully responsive dental clinic management system built with React.js. Features a beautiful public-facing website with animated components, patient portal for booking appointments, and admin dashboard for managing appointments and patients.

![MERCY Dental Demo](/img/home.gif)
*Figure 1: Our home page 

## ✨ Live Demo

🔗 **View Live Demo:** [https://mercy-dental-clinic.vercel.app/](https://mercy-dental-clinic.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [API & Data Flow](#api--data-flow)
- [Animations](#animations)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Features

### Public Pages (No Login Required)
- **Home Page** - Animated hero slider, stats counters, feature sections
- **Services Page** - Filterable service cards with floating animations
- **Team Page** - Professional profiles with interactive modals
- **Feedback Page** - Patient testimonials with rating filters and animated counters
- **About Page** - Mission, vision, values with animated cards
- **Contact Page** - Contact form with validation and FAQ section

### Patient Portal (Login Required)
- **Patient Dashboard** - Overview of upcoming appointments
- **Book Appointment** - Schedule appointments with date, time, and dentist selection
- **My Appointments** - View appointment history with status tracking

### Admin Portal (Admin Login Required)
- **Admin Dashboard** - Overview of all appointments and patients
- **Manage Appointments** - Update appointment statuses (pending, confirmed, completed, cancelled)
- **Manage Patients** - View and manage patient information

### Interactive Features
- ✨ Floating card animations on services and team pages
- 📊 Animated counters that start on scroll
- 🎨 Masonry-style testimonial grid
- 🔍 Filterable service categories
- 🎭 Modal popups for detailed views
- 📱 Fully responsive design
- 🌊 Smooth scroll animations
- ⭐ Google-like rating display

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| **React 18** | Frontend framework |
| **Tailwind CSS** | Styling and animations |
| **React Router DOM** | Navigation and routing |
| **LocalStorage** | Client-side data persistence |
| **React Hooks** | State management |
| **Context API** | Authentication state |
| **Custom Hooks** | Reusable logic |

## 📁 Project Structure

```bash

mercy-dental/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── auth/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── AdminRegister.jsx
│ │ ├── layout/
│ │ │ └── PublicLayout.jsx
│ │ ├── patient/
│ │ │ ├── PatientDashboard.jsx
│ │ │ ├── BookAppointment.jsx
│ │ │ └── MyAppointments.jsx
│ │ └── admin/
│ │ └── AdminDashboard.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── ServicesPage.jsx
│ │ ├── TeamPage.jsx
│ │ ├── FeedbackPage.jsx
│ │ ├── AboutPage.jsx
│ │ └── ContactPage.jsx
│ ├── contexts/
│ │ └── AuthContext.jsx
│ ├── hooks/
│ │ └── useLocalStorage.js
│ ├── utils/
│ │ └── seedData.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

```

## 💻 Installation

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Bethelhem-Yirga/dental-clinic.git
cd mercy-dental
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Tailwind CSS (if not already installed)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 4: Configure Tailwind
Update tailwind.config.js:

 
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 5: Add Tailwind Directives
Add to src/index.css:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 6: Start Development Server

```bash
npm run dev
```
The application will open at http://localhost:5173

### Step 7: Build for Production

```bash
npm run build
```
The build files will be in the dist folder.
