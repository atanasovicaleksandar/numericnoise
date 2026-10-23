# NumericNoise

An independent data-and-culture publication exploring alternative music, art, scenes, and statistics.

This starter is intentionally lightweight: Next.js + TypeScript, plain CSS, Markdown article drafts, and JSON data files. There is no database or paid service required to run it locally.

## 1. Requirements

- Node.js 20.9 or newer
- Git (optional for local work, recommended for version history)
- A GitHub account if you want to host the source there

Check your Node.js version:

```bash
node --version
npm --version
```

## 2. Run the website locally

Open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Stop the development server with `Ctrl+C`.

## 3. Useful commands

```bash
npm run dev       # start the local development server
npm run build     # check that a production build succeeds
npm run start     # serve the production build locally
npm run lint      # run ESLint
npm run typecheck # check TypeScript types
```

Before publishing, run:

```bash
npm run lint
npm run typecheck
npm run build
```

## 4. Project map

```text
numericnoise-starter/
├── public/
│   ├── images/          # images served directly by the website
│   └── datasets/        # downloadable CSV or other public files
├── content/
│   └── articles/        # Markdown drafts and article source material
├── data/
│   ├── artists.json     # artist records
│   ├── releases.json    # release records
│   └── labels.json      # label records
├── src/
│   └── app/
│       ├── page.tsx     # homepage: /
│       ├── journal/
│       │   └── page.tsx # journal landing page: /journal
│       ├── lab/
│       │   └── page.tsx # research projects: /lab
│       ├── archive/
│       │   └── page.tsx # searchable-style archive overview: /archive
│       ├── about/
│       │   └── page.tsx # about and methodology: /about
│       ├── layout.tsx   # shared HTML shell, metadata, shared navigation
│       └── globals.css  # global design system and responsive styling
├── package.json         # scripts and dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
└── README.md            # this guide
```

### What the main folders mean

- `src/app/`: pages and layouts. Each folder with a `page.tsx` creates a route. For example, `src/app/lab/page.tsx` becomes `/lab`.
- `public/`: files that should be served as-is. `public/datasets/releases.csv` can be linked as `/datasets/releases.csv`.
- `content/articles/`: Markdown source drafts. These are editorial source files for now; the starter does not yet automatically turn them into pages.
- `data/`: structured records used by the archive. The JSON files include sample data so you can see the intended shape.
- `globals.css`: change fonts, colors, spacing, and responsive layout here.
- `layout.tsx`: shared navigation, footer, site metadata, and the outer HTML document.
- `package.json`: tells npm which packages to install and which commands are available.

## 5. Adding archive records

Open the JSON files in `data/`. Keep each record valid JSON (double quotes around keys and strings; no trailing commas). The current records are fictional demonstration entries, not verified real-world discography data.

The archive page currently contains a small hand-written display sample so the site works immediately. A next step is to import the JSON files into the page and implement search/filter controls.

## 6. Adding a dataset

Put a CSV file in `public/datasets/`, for example `public/datasets/releases.csv`. It will be available at:

`https://your-domain.example/datasets/releases.csv`

Only place data in `public/` if it is intended to be publicly accessible. Do not put secrets, private submissions, or personal information there.

## 7. Adding an article

Write a draft in `content/articles/`. The current site links to a sample article concept, but does not yet include a Markdown publishing pipeline. You can initially create articles as TSX pages, or later add an MDX/Markdown loader or a CMS.

## 8. GitHub: put this project in a repository

### Option A — Upload using the GitHub website

1. Download and extract the ZIP you received.
2. Open GitHub and create a new empty repository named `numericnoise`.
3. Open the extracted folder on your computer.
4. Upload the *contents* of the extracted folder to the repository root. Do not upload the ZIP as the only file.
5. Commit the upload.

### Option B — Push using Git

Create an empty repository on GitHub, then run these commands from the project folder, replacing the URL with your repository's actual URL:

```bash
git init
git add .
git commit -m "Initial NumericNoise starter"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/numericnoise.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Do not type the example URL literally.

## 9. Deploy later

Connect the GitHub repository to a Next.js-compatible host and follow that provider's current custom-domain instructions to connect `numericnoise.net`. DNS records depend on the chosen host, so use the exact values it provides. Keep existing email-related DNS records intact.

Before selecting a free hosting plan, check whether its current terms permit your intended personal or commercial use.

## 10. Good next steps

1. Replace the sample homepage copy with the NumericNoise mission and first featured project.
2. Add two or three original journal pieces.
3. Choose one research question and publish a chart with its data source and methodology.
4. Implement real JSON-driven archive search.
5. Add a database only when you need editing, accounts, or user submissions.

## Content and data notes

- Treat the included names and records as fictional sample data.
- Check licensing and attribution before republishing external datasets, artwork, album covers, or artist biographies.
- Include source links, collection dates, definitions, and limitations with every research dataset.
- Never commit API keys or credentials to GitHub.
