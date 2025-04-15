#!/bin/bash

# Yukon Lab Setup Script

echo "Setting up Yukon Lab project..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create necessary directories
echo "Creating necessary directories..."
mkdir -p public/images

# Create a basic placeholder image for DNA pattern
echo "Creating placeholder files..."
echo "This is a placeholder for the DNA pattern image" > public/images/dna-pattern.png

# Build the project
echo "Building the project..."
npm run build

echo "Setup complete! Run 'npm run dev' to start the development server."
echo "Then visit http://localhost:3000 in your browser." 