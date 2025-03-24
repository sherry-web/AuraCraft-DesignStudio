import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import puppeteer from "puppeteer";
import lighthouse from "lighthouse";
import nodemailer from "nodemailer"; // For sending email confirmations

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Add CSP header for enhanced security
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' https://your-cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://your-cdn.com;"
  );
  next();
});

// Lighthouse Audit Endpoint
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

// Website Evaluation Endpoint
app.post("/api/evaluate-website", (req, res) => {
  const { websiteURL } = req.body;

  if (!websiteURL) {
    return res.status(400).json({ error: "Website URL is required." });
  }

  const suggestions = [
    "Improve mobile responsiveness",
    "Enhance color contrast for accessibility",
    "Optimize page load speed",
  ];
  res.json({ status: "success", suggestions });
});

// Save Hero Content Endpoint
app.post("/api/save-hero-content", (req, res) => {
  const { title, subtitle } = req.body;

  if (!title || !subtitle) {
    return res.status(400).json({ error: "Both title and subtitle are required." });
  }

  console.log("Received content to save:", { title, subtitle });
  res.json({ message: "Hero content saved successfully!", data: { title, subtitle } });
});

// Submit Project Endpoint with Email Confirmation
app.post("/api/submit-project", async (req, res) => {
  const { projectDetails, email } = req.body;

  if (!projectDetails || !email) {
    return res.status(400).json({ error: "Project details and email are required." });
  }

  try {
    // Process project submission (e.g., save to database)
    console.log("Project submitted:", projectDetails);

    // Send email confirmation
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Project Submission Confirmation",
      text: `Thank you for submitting your project! Here are the details:\n\n${JSON.stringify(
        projectDetails,
        null,
        2
      )}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Project submitted successfully! Confirmation email sent." });
  } catch (error) {
    console.error("Error submitting project:", error);
    res.status(500).json({ error: "Failed to submit project." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});