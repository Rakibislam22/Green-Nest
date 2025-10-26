# 🌿 Green Nest – Smart Plant Marketplace

**Live Demo:** [Green-Nest](https://green-nest-2025.web.app/)


---

## 🪴 Overview

**Green Nest** is a modern, eco-themed web application built for plant lovers and home gardeners.
It allows users to explore, learn, and purchase plants while discovering care tips and décor ideas for greener living.

Developed with **React + Firebase**, it combines a clean design, smooth routing, and responsive UI powered by **Tailwind CSS** and **DaisyUI**.

---

## ✨ Key Features

* 🌱 **Home Page:** Dynamic hero section, plant categories, and featured plants
* 🌿 **Plant Details Page:** Shows detailed plant info, price, and care tips
* 🌼 **Authentication:** Login & Signup using **Firebase Authentication**
* 🧑‍🌾 **My Profile:** View and manage personal information
* 🌻 **Plant Experts & Tips:** Discover plant care guidance and expert suggestions
* 🪴 **Eco Décor Ideas:** Learn creative ways to decorate your home with plants
* 💫 **Responsive Design:** Works smoothly across all devices
* 🔔 **Toast Notifications:** Interactive alerts via React Toastify
* 🔄 **Private Routes:** Access control for authenticated users

---

## 🧰 Tech Stack

| Category            | Technologies                           |
| ------------------- | -------------------------------------- |
| **Frontend**        | React, Vite, React Router v7           |
| **Styling**         | Tailwind CSS, DaisyUI                  |
| **State & Auth**    | React Context API, Firebase Auth       |
| **Backend / DB**    | Firebase Firestore                     |
| **UI Enhancements** | Swiper.js, React Icons, React Toastify |
| **Deployment**      | Firebase Hosting                       |

---

## 📂 Project Structure

```
src/
├── assets/                 # Images & static files
├── components/             # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ImageSlider.jsx
│   ├── Plant.jsx
│   ├── EcoDecorIdeas.jsx
│   ├── PlantCareTips.jsx
│   ├── PlantOfTheWeek.jsx
│   └── PlantsExperts.jsx
│
├── firebase/
│   └── firebase.init.js    # Firebase configuration
│
├── layouts/
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Plants.jsx
│   ├── PlantDetails.jsx
│   ├── MyProfile.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── ErrorPage.jsx
│
├── provider/
│   ├── AuthProvider.jsx
│   ├── AuthContext.jsx
│   └── PrivateRoute.jsx
│
└── router/
    └── Router.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Rakibislam22/Green-Nest.git
cd Green-Nest
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env.local`

```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to explore locally.

---

## 🌍 Deployment

The app is deployed on **Firebase Hosting**.
To deploy your own version:

```bash
npm run build
firebase deploy
```

---

## 👨‍💻 Developer

**👤 Rakib Islam**

🌐 [GitHub – Rakibislam22](https://github.com/Rakibislam22)

---

## 🪴 License

This project is licensed under the **MIT License** – feel free to use and modify with credit.

