import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let current = ""

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/home", (req, res) => {
  current = "home";
  res.render(`${current}.ejs`, 
    {
        current: current
    }
  );
});
app.get("/home-tr", (req, res) => {
  current = "home";
  res.render(`${current}-tr.ejs`, 
    {
        current: current
    }
  );
});
app.get("/home-en", (req, res) => {
  current = "home";
  res.render(`${current}-en.ejs`, 
    {
        current: current
    }
  );
});

app.get("/cv", (req, res) => {
  current = "cv";
  res.render(`${current}.ejs`, 
    {
        current: current
    }
  );
});
app.get("/cv-tr", (req, res) => {
  current = "cv";
  res.render(`${current}-tr.ejs`, 
    {
        current: current
    }
  );
});
app.get("/cv-en", (req, res) => {
  current = "cv";
  res.render(`${current}-en.ejs`, 
    {
        current: current
    }
  );
});

app.get("/portfolio", (req, res) => {
  current = "portfolio";
  res.render(`${current}.ejs`, 
    {
        current: current
    }
  );
});
app.get("/portfolio-tr", (req, res) => {
  current = "portfolio";
  res.render(`${current}-tr.ejs`, 
    {
        current: current
    }
  );
});
app.get("/portfolio-en", (req, res) => {
  current = "portfolio";
  res.render(`${current}-en.ejs`, 
    {
        current: current
    }
  );
});

app.get("/about-me", (req, res) => {
  current = "about-me";
  res.render(`${current}.ejs`, 
    {
        current: current
    }
  );
});
app.get("/about-me-tr", (req, res) => {
  current = "about-me";
  res.render(`${current}-tr.ejs`, 
    {
        current: current
    }
  );
});
app.get("/about-me-en", (req, res) => {
  current = "about-me";
  res.render(`${current}-en.ejs`, 
    {
        current: current
    }
  );
});

app.get("/contact", (req, res) => {
  current = "contact";
  res.render(`${current}.ejs`, 
    {
        current: current
    }
  );
});
app.get("/contact-tr", (req, res) => {
  current = "contact";
  res.render(`${current}-tr.ejs`, 
    {
        current: current
    }
  );
});
app.get("/contact-en", (req, res) => {
  current = "contact";
  res.render(`${current}-en.ejs`, 
    {
        current: current
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
