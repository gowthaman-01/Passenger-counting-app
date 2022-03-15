# Passenger counting app

Simple counting app built using Javascript, HTML and CSS

## Git workflow

### Setting up Git

git init

git status

git add . or git add _file_

Create repo in github

git remote add origin _ssh key_

git commit -m _title_ -m _description_

git commit -am (if file was modified and not created)

git push -u origin master (upstream)

git log - to check all the commits

### Branching

Create new branch --> git checkout -b _new branch name_

git merge _branch name_ or master (to sync your master with updates)

# Undoing

Undoing a staging (undoing the git add command) - git reset or git reset _filename_

Undoing a commit - git reset HEAD~1 (here we point to the commit that was one before the new commit). This will undo the commit and unstage the change as well. You can also git reset _hash_ that can be found using git log

git reset --hard will also erase the changes
