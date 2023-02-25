<h1 align='center'>GUIDE ON HOW TO CONTRIBUTE TO THE REPOSITORY</h1>

<h3>Steps</h3>

<h4><b>1. </b>Fork the repository.</h4>

> Forking allows you to make a copy of the main repository to your main github account so that you can make changes in it. 

<br>
<h4><b>2. </b>Clone the repository.</h4>

```bash

$ git clone https://github.com/<github.username>/ReactGroup.git
```

> Cloning a repository should assist you to draw all the source code that is in your remote repository into your local repository. In other words downloading the source code from your github account, make sure you clone 

<h4><b>3. </b>Create a new branch and chekout to it.</h4>

```bash

$ git branch {new-branch-name}
$ git checkout {new-branch-name}
```

> In your local repository, create a new branch with a name of your choice, switch to the new branch created and make it your working branch where you will add and commit the changes made in the repository.

<h4><b>4. </b>Make changes, commit and push to your remote repository.</h4>

```bash
$ git add .
$ git commit -m "Meaningfull message"
$ git push origin {new-branch-name}
```

> You should commit all the files changed before pushing the changes made to your remote repository. While pushing the changes make sure that you push to your new branch created in your local repository.

<h4><b>5. </b>Create a pull request.(PR)</h4>

> Once you've pushed changes to your remote repository under the {new-branch-name} created, create a pull request, this informs the contributors of the repository that there are new changes made that need to be reviewed. After reviewing the changes the pull request can then be merged to the main branch if there are no conflicts, you are allowed to delete a branch after merging the changes made in it.