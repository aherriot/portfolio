
# build the site
hugo -d ../aherriot.github.io/

# deploy it to github
cd ../aherriot.github.io/
git add .
git commit -m "Update"
git push
cd ../portfolio