class LibraryItem{
    constructor(){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        //code here
    }
    returnItem() {
        //someCode
    }

}

class Book extends LibraryItem {
    constructor() {
        super();
        this.genre = genre;
        this.author = author;
    }
}

class DVD extends LibraryItem {
    constructor() {
        super();
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor() {
        super();
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let fearAndLoathing = new Book()