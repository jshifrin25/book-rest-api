exports.Book = function (title, author, published, pages, summary, category) {

    var book = {
        title: title,
        author: author,
        published: published,
        pages: pages,
        summary: summary,
        category: category,
        set: function (setter, newValue) {
            setField(setter, newValue);
        },
        get: function (getter) {
            return getField(getter);
        },
        toBookObj: function () {
            return {
                title: book.title,
                author: book.author,
                published: book.published,
                pages: book.pages,
                summary: book.summary,
                category: book.category
            };
        }
    }
    return book;

    function setField(field, value) {
        switch (field) {
        case 'title':
            book.title = value;
            break;
        case 'author':
            book.author = value;
            break;
        case 'published':
            if (value instanceof Date) {
                book.published = value;
            } else {
                throw new TypeError("Needs to use a date object");
            }
            break;
        case 'pages':
            if (typeof value === "number") {
                book.pages = value;
            } else {
                throw new TypeError("Needs to use a number object");
            }
            break;
        case 'summary':
            book.summary = value;
            break;
        case 'category':
            book.category = value;
            break;
        }
    }

    function getField(field) {
        var value;
        switch (field) {
        case 'title':
            value = book.title;
            break;
        case 'author':
            value = book.author;
            break;
        case 'published':
            value = book.published;
            break;
        case 'pages':
            value = book.pages;
            break;
        case 'summary':
            value = book.summary;
            break;
        case 'category':
            value = book.category;
            break;
        }
        return value;
    }
};

exports.parseBook = function (bookObj) {
    book = new this.Book();
    for (var key in bookObj) {
        book.set(key, bookObj[key]);
    }
    return book;
};