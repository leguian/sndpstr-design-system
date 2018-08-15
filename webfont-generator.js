const webfontsGenerator = require('webfonts-generator');
const fs=require('fs');
const Handlebars = require('handlebars');


const iconPath = 'icons/svg';

const svgFiles = fs.readdirSync(iconPath);
console.log(svgFiles);

Handlebars.registerHelper('dotreplace', function(options) {
    return options.fn(this).replace(/\./g, " ");
});

webfontsGenerator({
    files: svgFiles.map(f => `${iconPath}/${f}`),
    dest: 'icons/webfont/',
    html:true,
    templateOptions:{
        classPrefix: 'icon',
        baseSelector: '.icon'
    },
    htmlTemplate: "icons/templates/html.hbs",
    cssTemplate: "icons/templates/css.hbs",
    fontName: "sndpstr-icon",

}, function(error) {
    if (error) {
        console.log('Fail!', error);
    } else {
        console.log('Done!');
    }
})