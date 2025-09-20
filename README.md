**# EduBridgeAI Starter

**Tagline:** *Personalized AI-powered learning support for teachers, learners, and parents in under-resourced schools.*

**Director & Entrepreneur:** Zwelakhe Msuthu
📞 +27 71 385 1993

---

## 📌 Overview

EduBridgeAI is a mobile-first platform designed to:

* Assist **teachers** with AI-generated lesson ideas, learner-specific plans, and adaptive assessments.
* Support **learners** with personalized study tasks, notes, and offline-first access.
* Engage **parents** by providing real-time progress dashboards, communication with teachers, and the ability to help at home.

This repository contains the **React Native (Expo) starter app** with:

* Authentication (mock OTP login)
* Offline sync (SQLite demo)
* Mock backend (Node/Express server)
* Clean UI starter screens

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (LTS recommended)
* [Expo CLI](https://docs.expo.dev/get-started/installation/)
* Git

### 2. Clone the Repo

```bash
git clone https://github.com/<your-username>/EduBridgeAI-Starter.git
cd EduBridgeAI-Starter
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the App

```bash
npm start
```

* Press `i` to open in iOS Simulator (Mac only).
* Press `a` to open in Android Emulator.
* Or scan the QR code in Expo Go app (iOS/Android).

### 5. Run Mock Backend

Open a new terminal and run:

```bash
cd backend_mock
npm install
npm start
```

---

## 📂 Project Structure

```
EduBridgeAI-Starter/
│── App.js              # Main React Native app
│── package.json
│── backend_mock/       # Node.js mock backend (OTP + learner data)
│── assets/             # Logos, icons, images
│── README.md           # Project documentation
│── .gitignore
```

---

## 🛠️ Features (MVP)

* ✅ Login with mock OTP flow
* ✅ Offline-first notes/tasks using **SQLite**
* ✅ Teacher dashboard (starter UI)
* ✅ Parent progress view (demo data)
* ✅ Learner personalized tasks (demo)

---

## 📖 Next Steps

* Replace mock OTP with Firebase or SMS provider
* Connect SQLite sync with live backend API
* Add role-based dashboards (teacher / learner / parent)
* Polish UI with EduBridgeAI branding

---

## 📜 License

Proprietary – All rights reserved by **Zwelakhe Msuthu**.
**
