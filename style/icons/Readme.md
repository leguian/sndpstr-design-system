# SNDPSTR Icons
## WebFont & Cheatsheet generator

Install `fontforge`.
* Download and install [fontforge](http://fontforge.github.io/en-US/downloads/windows/).
* Add `C:\Program Files (x86)\FontForgeBuilds\bin` to your `PATH` environment variable.

*`fontforge` isn’t required for the `node` engine (see [below](#available-engines)).*


### How to use

Put your .svg in 
```
/src/sndpstr/
```

Then run
```
grunt build
```

### CAUTION !

You must name your file as follow :
```
example-of-object.svg
```

Do not use number(s) in the file name. If you have to, use letters :)
```
car-2.svg --> car-two.svg
```
