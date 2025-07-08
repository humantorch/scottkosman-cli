#!/bin/bash

# Publish script for scottkosman CLI
# Usage: ./scripts/publish.sh [patch|minor|major]

set -e

# Default to patch version if no argument provided
VERSION_TYPE=${1:-patch}

echo "🚀 Publishing scottkosman CLI..."

# Check if we have uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Bump version
echo "📦 Bumping version ($VERSION_TYPE)..."
npm version $VERSION_TYPE --no-git-tag-version

# Run tests
npm test

# Build the project
echo "🔨 Building project..."
npm run build

# Publish to npm
echo "📤 Publishing to npm..."
npm publish

# Create git tag and push
echo "🏷️  Creating git tag and pushing..."
git add package.json package-lock.json
git commit -m "chore: bump version to $(node -p "require('./package.json').version")"
git tag v$(node -p "require('./package.json').version")
git push && git push --tags

echo "✅ Successfully published scottkosman@$(node -p "require('./package.json').version")"
echo "🌐 Package available at: https://www.npmjs.com/package/scottkosman" 