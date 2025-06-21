#!/bin/bash

# Auto-version script for scottkosman CLI
# This can be used as a pre-commit hook to automatically bump patch version

set -e

# Only bump version if this is a commit (not a merge, rebase, etc.)
if [[ "$(git rev-parse --abbrev-ref HEAD)" != "HEAD" ]]; then
    echo "🔄 Auto-bumping patch version..."
    
    # Get current version
    CURRENT_VERSION=$(node -p "require('./package.json').version")
    
    # Bump patch version
    npm version patch --no-git-tag-version --silent
    
    # Get new version
    NEW_VERSION=$(node -p "require('./package.json').version")
    
    if [[ "$CURRENT_VERSION" != "$NEW_VERSION" ]]; then
        echo "📦 Version bumped from $CURRENT_VERSION to $NEW_VERSION"
        
        # Add version changes to the commit
        git add package.json package-lock.json
        
        # Amend the commit message to include version bump
        echo "chore: auto-bump version to $NEW_VERSION" > .git/COMMIT_EDITMSG
        echo "" >> .git/COMMIT_EDITMSG
        echo "Auto-bumped patch version as part of commit process." >> .git/COMMIT_EDITMSG
    fi
fi 