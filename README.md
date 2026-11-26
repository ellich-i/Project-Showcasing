# BSIT Showcase 🎓

A public student portfolio platform where BSIT students can showcase their IT-related academic and personal projects, get credit for group work, and build a portfolio.

> **Status:** Early development. Backend setup is in progress.

## Tech Stack

- **Backend:** JavaScript, Node.js, Express.js
- **Database:** PostgreSQL with Prisma (not set up yet)
- **API style:** REST
- **API testing:** Postman
- **Frontend:** Not chosen yet

## Project Structure

```text
Project-Showcasing/
├── backend/      # Express API
├── frontend/     # Frontend app (coming soon)
├── .gitignore
└── README.md
```

## Run the Backend Locally

Requirements: [Node.js LTS](https://nodejs.org) and Git.

```powershell
git clone https://github.com/ellich-i/Project-Showcasing.git
cd Project-Showcasing/backend
npm install
copy .env.example .env
npm run dev
```

Then open http://localhost:5000/api/health. You should see:

```json
{"status":"ok","message":"BSIT Showcase API is running"}
```

### Useful scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Starts the server and restarts it when files change |
| `npm start` | Starts the server normally |

## Team Workflow

1. Never push directly to `main`.
2. Pull the latest `main` before starting work:
   `git checkout main` then `git pull origin main`
3. Create your own branch:
   `git checkout -b feature/your-task-name`
4. Commit small and often:
   `git add <files>` then `git commit -m "feat: short message"`
5. Push your branch:
   `git push -u origin feature/your-task-name`
6. Open a pull request on GitHub and ask a groupmate to review it.

Commit message prefixes: `feat:` new feature, `fix:` bug fix, `docs:` documentation, `chore:` setup or other.

## Rules

- Never commit `.env`, passwords, or secrets.
- Never commit real student data. Use fake data for testing.
- Backend code goes in `backend/`, frontend code goes in `frontend/`.