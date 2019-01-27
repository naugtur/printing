const nunjucks = require('nunjucks');

const ITEMS_PER_PAGE = 4;
const data = require('./input.json').map((item, i) => {
    item.startsPage = !(i % ITEMS_PER_PAGE) && i !== 0
    return item
});

require('fs').writeFileSync('page.html', nunjucks.render('./page.tpl', { items: data }))