import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import lighthouse from "lighthouse";
import puppeteer from "puppeteer";

const app = express();
const PORT = 5000; // Port declaration

app.use(cors());
app.use(bodyParser.json());

// Endpoint to perform Lighthouse audits
app.post("/api/audit", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const browser = await puppeteer.launch({ headless: true });
    const { lhr } = await lighthouse(url, {
      port: new URL(browser.wsEndpoint()).port,
      output: "json",
    });
    await browser.close();

    // Extract meaningful results
    const results = {
      performance: lhr.categories.performance.score * 100,
      accessibility: lhr.categories.accessibility.score * 100,
      seo: lhr.categories.seo.score * 100,
      bestPractices: lhr.categories["best-practices"].score * 100,
      audits: lhr.audits,
    };

    res.json(results);
  } catch (error) {
    console.error("Error running Lighthouse audit:", error);
    res.status(500).json({ error: "Failed to analyze website." });
  }
});

// Endpoint for evaluating website UX/UI
app.post("/api/evaluate-website", (req, res) => {
  const { websiteURL } = req.body;

  if (!websiteURL) {
    return res.status(400).json({ error: "Website URL is required." });
  }

  // Simulated evaluation logic (replace with real API calls or algorithms)
  const suggestions = [
    "Improve mobile responsiveness",
    "Enhance color contrast for accessibility",
    "Optimize page load speed",
  ];
  res.json({ status: "success", suggestions });
});

// Single app.listen call to start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
