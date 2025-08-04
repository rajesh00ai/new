import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWellnessTipSchema } from "@shared/schema";
import { generateWellnessTip, generateProductRecommendation, type WellnessTipRequest } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all products
  app.get("/api/products", async (_req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Generate AI wellness tip
  app.post("/api/wellness-tips/generate", async (req, res) => {
    try {
      const request: WellnessTipRequest = req.body;
      const wellnessTip = await generateWellnessTip(request);
      
      // Store the generated tip
      const storedTip = await storage.createWellnessTip({
        category: wellnessTip.category,
        tip: wellnessTip.tip,
        benefits: wellnessTip.benefits
      });
      
      res.json({
        ...wellnessTip,
        id: storedTip.id,
        createdAt: storedTip.createdAt
      });
    } catch (error) {
      console.error("Error generating wellness tip:", error);
      res.status(500).json({ message: "Failed to generate wellness tip" });
    }
  });

  // Get all wellness tips
  app.get("/api/wellness-tips", async (_req, res) => {
    try {
      const tips = await storage.getWellnessTips();
      res.json(tips);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch wellness tips" });
    }
  });

  // Generate product recommendation
  app.post("/api/recommendations", async (req, res) => {
    try {
      const { preferences } = req.body;
      if (!preferences) {
        return res.status(400).json({ message: "Preferences are required" });
      }
      
      const recommendation = await generateProductRecommendation(preferences);
      res.json({ recommendation });
    } catch (error) {
      console.error("Error generating recommendation:", error);
      res.status(500).json({ message: "Failed to generate recommendation" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
