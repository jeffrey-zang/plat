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
5. Copy the content in `.env.template`
6. Create a new file called `.env` in the same directory
7. Paste the content into `.env`
8. Fill in the missing values

**Backend**
1. `cd backend`
3. Install dependencies: `npm i`
4. Start server: `npm run dev`
5. See the server at `localhost:3000`
5. Copy the content in `.env.template`
6. Create a new file called `.env` in the same directory
7. Paste the content into `.env`
8. Fill in the missing values

If it doesn't work you might have the wrong version of Node. I think I'm using v21.5.0 or something. Shouldn't matter if your version isn't too archaic.

After you do this, you should be running the app at `http://localhost:5173` and the API at `http://localhost:3000`.

## How to make changes
1. Visit Linear and find an issue that's been assigned to you or that you want to work on. For this example, I'll be using "PG-38 Set up Express"
2. Copy the standard git branch name by pressing `Ctrl + Shift + .` or by clicking the pull request icon on the top right.
3. Open your code editor and make your changes. Be sure to type `git pull` to sync your local changes.
4. Open a terminal. 
5. In the terminal, type `git checkout -b <branchname>` and replace `<branchname>` with the name copied from Linear. Referring to the example, it would be `git checkout -b pg-38-set-up-express`.
6. Type `git add .`
7. Type `git commit -m "<action>(<scope>): <message>"`. For my example, it might look something like `git commit -m "feat(be): set up express"`.
- `<action>` can be one of the following: `feat` (feature), `fix` (fixed bug), `docs` (documentation), `style` (code styling), `refac` (code refactoring), `chore` (temporary thing/something that doesn't affect the user)
- `<scope>` can be one of the following: `fe` (frontend), `be` (backend), `ai` (voice, NLP, etc.)
- `<message>` is a short description of the contents of your commit.
8. Type `git push`.
9. Visit the GitHub repo.
10. Click "Compare & pull request".
11. Name the pull request "PG-<id> <description>" and replace `<id>` with the issue id on Linear and `<description>` with a short description of the issue. It should be the same as the branch name, but without the dashes and with a PG-<id> prefix. Linear should now automatically link the issue to your pull request. For my example, the pull request is named "PG-38 set up express".
12. Make sure the target branch is `dev`, not `stage` or `main`.
12. Request for someone to review and merge your pull request. Linear will automatically update the status to `In Review`.
13. After it has been merged, Linear will update the status of your issue to `Done`.

Please note that direct changes made to the `main` branch are not allowed. Pull requests must be made and reviewed before changes are merged. If your programming does not follow the naming schemes listed above, it will not be merged. **Please use the "Squash and merge" option always when merging pull requests.**
```
