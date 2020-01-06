git checkout master
npm run build-exam
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update"
git push origin gh-pages
git checkout master