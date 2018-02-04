var marked = require('marked');
var fs = require('fs');
const matter = require('gray-matter');
const $ = require('cheerio');

// public/blog/name         -- {content, data}
// public/blog-meta.json    -- list of {path, title, date, preview} all raw, not html

function handlePost(s) {
  var m = matter(s);
  m.content = marked(m.content);
  return m;
}

console.log("Running build script");

var renderedPosts = fs.readdirSync('./public/blog/');
renderedPosts.forEach((path) => fs.unlinkSync('./public/blog/'+path));

var posts = fs.readdirSync('./posts/');
var content = posts.map(
  (path) => [path, handlePost(fs.readFileSync('./posts/' + path, 'utf8'))]
);

content.forEach(
  ([path, data]) => fs.writeFileSync('./public/blog/' + path, JSON.stringify(data))
);

console.log("Blog posts written");

var metadata = content.map(
  ([path, o]) =>
  ({
    "path": path,
    "title": o.data.title,
    "date": o.data.date,
    "preview": $(o.content).first('p').html(),
  })
);

fs.writeFileSync('./public/blog-meta.json', JSON.stringify(metadata));

console.log("Blog metadata written");
