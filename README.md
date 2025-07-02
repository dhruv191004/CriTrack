# Critrack - Cricket Scoring App

A modern Progressive Web App (PWA) for cricket scoring built with the MERN stack.

## Features

- 📱 Mobile-first design with responsive UI
- 🏏 Live match scoring with ball-by-ball tracking
- 🎯 Real-time updates using Socket.io
- 📊 Detailed scorecards with statistics
- 📄 PDF export of scorecards
- 🔐 Google Sign-In and Email/Password authentication
- 📱 Installable PWA experience
- 🎨 Dark mode support

## Tech Stack

- Frontend: React + TailwindCSS
- Backend: Node.js + Express.js
- Database: MongoDB Atlas
- State Management: React Context API
- Real-time: Socket.io
- PDF Generation: jsPDF

## Project Structure

```
critrack/
├── frontend/           # React frontend application
├── backend/            # Node.js backend application
└── public/            # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Add required environment variables (see `.env.example`)
4. Start the development servers:
   ```bash
   npm run dev
   ```

## Environment Variables

Create `.env` files in both frontend and backend directories with the following variables:

### Frontend
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

### Backend
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT
