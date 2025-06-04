# First, make sure you're in the right directory
cd /Users/satyamkumar/Downloads/TSVP1-main\ 3/

# Initialize a new Git repository if you haven't already
git init

# Add the remote repository
git remote add origin https://github.com/Satyamsingh705/TSVP1.git

# Verify the remote was added correctly
git remote -v

# Add all files to staging
git add .

# Commit your changes
git commit -m "Initial commit with updated Header component"

# Rename the default branch to main
git branch -M main

# Push to the remote repository
git push -u origin main
