# SARIRA Wellness Brand Website

## Overview

SARIRA is a wellness brand website that combines traditional Tamil wellness practices with modern health science. The application showcases premium organic nutrition products, particularly their flagship Fig Malt blend, and provides AI-powered personalized wellness recommendations. The platform serves as both a product showcase and educational resource for health-conscious individuals interested in traditional wellness approaches.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom brand colors and design system
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state and data fetching
- **Design Pattern**: Component-based architecture with reusable UI components

### Backend Architecture
- **Server**: Express.js with TypeScript for REST API endpoints
- **Data Storage**: In-memory storage with interfaces designed for easy migration to databases
- **AI Integration**: OpenAI GPT-4o for generating personalized wellness tips
- **API Design**: RESTful endpoints for products, wellness tips, and AI recommendations
- **Development Setup**: Vite middleware integration for seamless development experience

### Database Schema
- **Products**: Store product information including name, description, benefits, ingredients, pricing, and images
- **Wellness Tips**: Store AI-generated wellness recommendations with categories and benefits
- **Users**: Basic user management schema (prepared but not actively used)
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript

### Authentication and Authorization
- Currently not implemented but infrastructure prepared for session-based authentication
- User schema exists for future authentication features
- Session storage configured with PostgreSQL session store

### Component Structure
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Brand introduction with call-to-action buttons
- **Product Showcase**: Dynamic product display with benefits and ingredients
- **Health Benefits**: Interactive benefit cards with icons and descriptions
- **Recipe Usage**: Usage suggestions and serving ideas
- **About Section**: Brand story and philosophy
- **AI Wellness Tips**: Interactive AI-powered wellness recommendation generator
- **Contact Section**: Multiple contact methods including phone and WhatsApp
- **Footer**: Company information and navigation links

## External Dependencies

### Core Technologies
- **React**: Frontend framework for building user interfaces
- **Express.js**: Backend web server framework
- **TypeScript**: Type safety across the entire application
- **Vite**: Modern build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI and Styling
- **Shadcn/ui**: Pre-built component library
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management

### Data Management
- **TanStack React Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database ORM
- **Drizzle Kit**: Database migration and schema management
- **Zod**: Runtime type validation

### AI and External Services
- **OpenAI API**: GPT-4o for generating personalized wellness recommendations
- **Neon Database**: PostgreSQL serverless database (configured but using in-memory storage)

### Development Tools
- **Wouter**: Lightweight routing library
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development

### Communication Integrations
- **WhatsApp**: Direct messaging integration for customer orders
- **Phone**: Click-to-call functionality for immediate contact