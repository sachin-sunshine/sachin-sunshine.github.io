# Sunshine Institute of Computer Education

Official website for **Sunshine Institute of Computer Education**, Narela, Delhi.  
Built with React, Vite, Tailwind CSS, and Framer Motion.

**Live site:** https://sachin-sunshine.github.io/

---

## Running Locally

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

You can verify by running:
```bash
node -v
npm -v
```

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/sachin-sunshine/sachin-sunshine.github.io.git
cd sachin-sunshine.github.io
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

The site will be available at **http://localhost:5173** in your browser.  
The page auto-refreshes whenever you save a file.

---

## Other Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build the site for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |

---

## Project Structure

```
├── public/          # Static assets (logo, icons, favicon)
├── src/
│   ├── components/  # All page sections (Navbar, Hero, Courses, etc.)
│   ├── context/     # React context (fee data)
│   ├── data/        # Course data
│   ├── App.jsx      # Root component
│   └── main.jsx     # Entry point
├── index.html
├── vite.config.js
└── package.json
```
