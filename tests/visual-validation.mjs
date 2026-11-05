import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const SCREENSHOT_DIR = path.resolve("./screenshots");
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runVisualValidation() {
  console.log("Starting Visual Validation with Playwright...");
  const browser = await chromium.launch({ headless: true });

  try {
    // 1. Desktop Viewport (1440x900)
    console.log("Validating Desktop Viewport (1440x900)...");
    const desktopContext = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await desktopContext.newPage();
    await page.goto("http://localhost:3030", { waitUntil: "networkidle" });

    // Capture Desktop Hero
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop_hero_1440.png"),
      clip: { x: 0, y: 0, width: 1440, height: 900 },
    });
    console.log("Captured desktop_hero_1440.png");

    // Scroll to Features
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop_features_1440.png"),
    });
    console.log("Captured desktop_features_1440.png");

    // Scroll to Pricing & test toggle
    await page.evaluate(() => {
      const el = document.getElementById("pricing");
      if (el) el.scrollIntoView();
    });
    await page.waitForTimeout(500);

    // Capture Pricing with Annual Plan active
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "desktop_pricing_yearly_1440.png"),
    });
    console.log("Captured desktop_pricing_yearly_1440.png");

    // Click Monthly Plan
    const monthlyBtn = page.getByRole("button", { name: "Monthly Plan" });
    if (await monthlyBtn.isVisible()) {
      await monthlyBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, "desktop_pricing_monthly_1440.png"),
      });
      console.log("Clicked Monthly Plan and captured desktop_pricing_monthly_1440.png");
    }

    // Test Quote Modal
    const quoteBtn = page.getByRole("button", { name: "Get a Quote" }).first();
    if (await quoteBtn.isVisible()) {
      await quoteBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, "desktop_quote_modal_1440.png"),
      });
      console.log("Opened Quote Modal and captured desktop_quote_modal_1440.png");

      // Close modal
      const closeBtn = page.getByRole("button", { name: "Close" });
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
        await page.waitForTimeout(300);
      }
    }

    // Test Interactive Tabs (Click Fraud)
    const clickFraudTab = page.getByRole("button", { name: "Click Fraud" });
    if (await clickFraudTab.isVisible()) {
      await clickFraudTab.click();
      await page.waitForTimeout(300);
      console.log("Tested Click Fraud Tab switch");
    }

    // 2. Tablet Viewport (768x1024)
    console.log("Validating Tablet Viewport (768x1024)...");
    const tabletContext = await browser.newContext({
      viewport: { width: 768, height: 1024 },
      deviceScaleFactor: 1,
    });
    const tabletPage = await tabletContext.newPage();
    await tabletPage.goto("http://localhost:3030", { waitUntil: "networkidle" });

    await tabletPage.screenshot({
      path: path.join(SCREENSHOT_DIR, "tablet_hero_768.png"),
      clip: { x: 0, y: 0, width: 768, height: 1024 },
    });
    console.log("Captured tablet_hero_768.png");

    // 3. Mobile Viewport (375x812)
    console.log("Validating Mobile Viewport (375x812)...");
    const mobileContext = await browser.newContext({
      viewport: { width: 375, height: 812 },
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: true,
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto("http://localhost:3030", { waitUntil: "networkidle" });

    await mobilePage.screenshot({
      path: path.join(SCREENSHOT_DIR, "mobile_hero_375.png"),
      clip: { x: 0, y: 0, width: 375, height: 812 },
    });
    console.log("Captured mobile_hero_375.png");

    // Test Mobile Menu Toggle
    const menuBtn = mobilePage.getByRole("button", { name: "Toggle navigation menu" });
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await mobilePage.waitForTimeout(300);
      await mobilePage.screenshot({
        path: path.join(SCREENSHOT_DIR, "mobile_menu_open_375.png"),
      });
      console.log("Captured mobile_menu_open_375.png");
    }

    console.log("Visual Validation completed successfully!");
  } catch (err) {
    console.error("Visual Validation error:", err);
  } finally {
    await browser.close();
  }
}

runVisualValidation();
