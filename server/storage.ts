import { type User, type InsertUser, type WellnessTip, type InsertWellnessTip, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createWellnessTip(tip: InsertWellnessTip): Promise<WellnessTip>;
  getWellnessTips(): Promise<WellnessTip[]>;
  
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private wellnessTips: Map<string, WellnessTip>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.wellnessTips = new Map();
    this.products = new Map();
    
    // Initialize with SARIRA Fig Malt product
    this.initializeProducts();
  }

  private initializeProducts() {
    const figMaltProduct: Product = {
      id: randomUUID(),
      name: "SARIRA Fig Malt",
      description: "Premium blend of organic figs, almonds, and cashews following traditional Tamil wellness practices",
      benefits: [
        "Rich in nutrients",
        "Supports digestion", 
        "Strengthens bones",
        "Boosts immunity"
      ],
      ingredients: [
        "Organic figs",
        "Premium almonds",
        "Fresh cashews",
        "Natural minerals"
      ],
      price: 899,
      imageUrl: "/assets/fig-malt-product.jpg"
    };
    
    this.products.set(figMaltProduct.id, figMaltProduct);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWellnessTip(insertTip: InsertWellnessTip): Promise<WellnessTip> {
    const id = randomUUID();
    const tip: WellnessTip = { 
      ...insertTip, 
      id, 
      createdAt: new Date() 
    };
    this.wellnessTips.set(id, tip);
    return tip;
  }

  async getWellnessTips(): Promise<WellnessTip[]> {
    return Array.from(this.wellnessTips.values());
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      price: insertProduct.price ?? null,
      imageUrl: insertProduct.imageUrl ?? null
    };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
