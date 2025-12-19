import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

/* -------------------------
   Helper: Sprache aus URL
-------------------------- */
function getLang(path) {
  if (path.endsWith("-en")) return "en";
  if (path.endsWith("-tr")) return "tr";
  return "de";
}

/* -------------------------
   Zentrale Seiten-Logik
-------------------------- */
function renderPage(page) {
  return (req, res) => {
    const lang = getLang(req.path);
    const suffix = lang === "de" ? "" : `-${lang}`;

    res.render(`${page}${suffix}.ejs`, {
      current: page,
      lang
    });
  };
}

/* -------------------------
   Redirect
-------------------------- */
app.get("/", (req, res) => {
  res.redirect("/home");
});

/* -------------------------
   Routen (sauber & kurz)
-------------------------- */

// Home
app.get("/home", renderPage("home"));
app.get("/home-en", renderPage("home"));
app.get("/home-tr", renderPage("home"));

// CV
app.get("/cv", renderPage("cv"));
app.get("/cv-en", renderPage("cv"));
app.get("/cv-tr", renderPage("cv"));

// Portfolio
app.get("/portfolio", renderPage("portfolio"));
app.get("/portfolio-en", renderPage("portfolio"));
app.get("/portfolio-tr", renderPage("portfolio"));

// About Me
app.get("/about-me", renderPage("about-me"));
app.get("/about-me-en", renderPage("about-me"));
app.get("/about-me-tr", renderPage("about-me"));

// Contact
app.get("/contact", renderPage("contact"));
app.get("/contact-en", renderPage("contact"));
app.get("/contact-tr", renderPage("contact"));

/* -------------------------
   Server
-------------------------- */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
