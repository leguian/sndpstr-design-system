SNDPSTR DS
==============

### Install SASS

NPM
```
npm install -g sass
```

Chocolatey (Windows alternative)
```
choco install sass
```

Homebrew (Mac OS X alternative)
```
brew install --devel sass/sass/sass
```
### Set up

Compile to your style sheet

```
cd style/
sass --watch sndpstr.scss:style.css
```

### Doc
Components : http://thimblecss.com/docs

Grids : http://reflexgrid.com/docs/index.html

### Design system generator

Compile design system

```
cd design-system/
npm run kss
```
More information : https://css-tricks.com/build-style-guide-straight-sass/