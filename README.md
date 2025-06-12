# Ride Share App

This project contains a simple Express backend and a React (Vite) frontend.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

1. Install server dependencies:

```bash
cd rideshare-app/server
npm install
```

2. Install client dependencies:

```bash
cd ../client
npm install
```

### Environment Variables

Create a `.env` file in `rideshare-app/server` based on `.env.example` and provide your MongoDB connection string and optional port number.

For the client, copy `.env.example` to `.env` if you need to customize the API URL.

### Running in Development

Start the backend server:

```bash
cd rideshare-app/server
node index.js
```

In a separate terminal, start the frontend:

```bash
cd rideshare-app/client
npm run dev
```

The React app will load data from the backend URL defined in `VITE_API_URL`.

*** End of File
