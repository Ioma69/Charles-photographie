module.exports = function(eleventyconfig){

    eleventyconfig.addPassthroughCopy('./src/style.css');
    eleventyconfig.addPassthroughCopy('./src/images');
    eleventyconfig.addPassthroughCopy('./src/script.js');
    eleventyconfig.addPassthroughCopy('./src/uploads');
    eleventyconfig.addPassthroughCopy('./src/admin');
        return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}