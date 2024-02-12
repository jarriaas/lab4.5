// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");


  eleventyConfig.addShortcode("planet", function (planet, au, color) {
    var grad = '#FFFFFF';
    return `
    <div class="planet ${planet}">
    <div class="circle ${planet}" style="background:linear-gradient(45deg, #FFF, ${color})"></div>
    <h2>${planet}</h2>
    <p>${au}</p>
    </div>
    `
  });
};