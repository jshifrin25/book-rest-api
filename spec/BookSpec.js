/* jshint jasmine:true */
describe('Book', function () {
    var Book = require('../books/Book'),
        testBook;
    beforeEach(function () {
        testBook = new Book.Book('A Book', 'An Author', new Date(), 300, 'Summary of a book', 'Testing');
    });
    it('should create a new book object', function () {
        expect(testBook).toBeDefined();
    });
    it('should create a new book with title', function () {
        expect(testBook).toEqual(jasmine.objectContaining({
            title: 'A Book',
            author: jasmine.any(String),
            published: jasmine.any(Date),
            pages: jasmine.any(Number),
            summary: jasmine.any(String),
            category: jasmine.any(String)
        }));
    });
    it('should have a title that is retriveable', function () {
        expect(testBook.get('title')).toEqual('A Book');
    });
    it('should be able to modify its title', function () {
        expect(testBook.title).toEqual('A Book');
        testBook.set('title', 'Another Book');
        expect(testBook.title).toEqual('Another Book');
    });
    it('should be able to modify its Author', function () {
        expect(testBook.author).toEqual('An Author');
        testBook.set('author', 'Another Author');
        expect(testBook.author).toEqual('Another Author');
    });
    it('should accept only valid dates for the published field', function () {
        testBook.set('published', new Date());
        expect(testBook.published).toEqual(jasmine.any(Date));
    });
    it('should throw error if published is not an instance of Date', function () {
        expect(function () {
            testBook.set('published', 'January-17-2015');
        }).toThrowError(TypeError, 'Needs to use a date object');
    });
    it('should set values of object and return the object when parsing', function () {
        var book = Book.parseBook(testBook.toBookObj());
        expect(book).toEqual(jasmine.objectContaining({
            title: testBook.get('title'),
            author: testBook.get('author'),
            published: testBook.get('published'),
            pages: testBook.get('pages')
        }));
    });
});