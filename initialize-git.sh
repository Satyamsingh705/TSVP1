# Initialize a new Git repository
git init

# Add all files to the staging area
git add .

# Commit the changes
git commit -m "Initial commit with complete project structure"

# Add the GitHub repository as a remote
git remote add origin https://github.com/Satyamsingh705/TSVP1.git

# Verify the remote was added
git remote -v

# Rename your current branch to 'main' if it's not already named that
git branch -M main

# Push to GitHub with force flag
git push -f origin main
