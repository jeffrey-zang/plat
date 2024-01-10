# Plat
What's up guys welcome back to another episode of Plat creations. Today we'll be doing some epic programming using the hot new programming language known as JavaScript. We'll be making an AI-powered pitch assistant for the high school startup incubator Flowboat. Read below for some development guidelines.

## Setup
1. Open a terminal
2. Clone the repo: `git clone https://github.com/jeffrey-zang/plat.git`
3. `cd plat`

This is a monorepo split into `/frontend` and `/backend`. The frontend is a React app and the backend is a Node.js app. You need to run both of them at the same time for the app to work. 

**Frontend**
1. `cd frontend`
2. Install dependencies: `npm i` 
3. Start server: `npm run dev`
4. See the server at `localhost:5173`

If it doesn't work you might have the wrong version of Node. I think I'm using v21.5.0 or something. Shouldn't matter if your version isn't too archaic.

**Backend**
1. (if you're not already in the root directory) `cd plat` (or wherever you cloned the repo)
2. `cd backend`
3. Install dependencies: `npm i`
4. Start server: `npm run dev`
5. See the server at `localhost:3000`