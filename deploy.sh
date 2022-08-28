rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:coderyjw/trip-website.git &&
git push -f -u origin master 