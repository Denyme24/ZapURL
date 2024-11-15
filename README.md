# ZapURL - Modern URL Shortener

**ZapURL** is a robust and modern URL shortening application designed for efficiency, simplicity, and security. Built with **Next.js**, **React**, and **Tailwind CSS**, it features secure authentication, responsive design, and a personal dashboard to manage and track shortened URLs.

---

## 🚀 Features

- **URL Shortening**: Convert long, unwieldy URLs into concise, memorable links.
- **User Authentication**: Secure GitHub OAuth integration for account management.
- **Personal Dashboard**: Manage, update, and delete your shortened URLs with ease.
- **Alerts**: Real-time alerts powered by `react-toastify`.
- **Responsive Design**: Enjoy seamless functionality across devices.

---

## 🛠 Tech Stack

### Frontend

- **Framework**: Next.js (Server-Side Rendering and Routing)
- **Styling**: Tailwind CSS
- **UI Components**: React

### Backend

- **API Routes**: Next.js
- **Database**: MongoDB, with Mongoose for object data modeling
- **Authentication**: NextAuth.js

### Deployment & Configuration

- **Containerization**: Docker and Docker Compose
- **Linting**: ESLint
- **Styling Configuration**: Tailwind CSS and PostCSS

---

## 📂 Project Structure

```
├── app/
│   ├── page.js                # Main logic for URL shortening
│   ├── SessionWrapper.js      # Session management wrapper
├── components/
├── db/
├── models/
├── configuration/
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── postcss.config.mjs     # PostCSS configuration
├── route.js                   # Handles URL generation, updating, and deletion
├── Dockerfile                 # Docker container setup
├── docker-compose.yml         # Docker environment orchestration
```

---

## ⚡ Quick Start

### Prerequisites

Ensure you have the following installed:

- Docker
- Node.js and npm (if running locally)

### Run with Docker

1. **Pull Docker Image**:

   ```bash
   docker pull denyme24/zap_url
   ```

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/zapurl.git
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the project root and add:

   ```env
   GITHUB_ID=your_github_id
   GITHUB_SECRET=your_github_secret
   NEXTAUTH_URL=http://localhost:3000
   MONGO_URI=mongodb://mongo:27017/shorten-url
   NEXTAUTH_SECRET=your_secret
   ```

4. **Run with Docker**:
   ```bash
   docker-compose up --build
   ```

---

### Development

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

---

## 🌐 Production Deployment

Use Docker Compose for production deployment:

```bash
docker-compose -f docker-compose.yml up --build
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Developed by **Naman Raj**.  
Built with ❤️ using **Next.js** and **MongoDB**.

---

## 🤝 Contributions

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

---
