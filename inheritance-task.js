class LibraryItem{
    constructor(title, id, isAvailable){
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkOut() {
        this.isAvailable = false; 
        console.log(`${this.title} is now available: ${this.isAvailable}.`)
    }
    returnItem() {
        this.isAvailable = true;
        console.log(`${this.title} is now available: ${this.isAvailable}.`)
    }

}

class Book extends LibraryItem {
    constructor(title, id, isAvailable, genre, author) {
        super(title, id, isAvailable);
        this.genre = genre;
        this.author = author;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, isAvailable, director, duration) {
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
    summarizeFilm(){
        console.log(`The movie ${this.title} by ${this.director} is ${this.duration} long. You should watch it!`)
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, isAvailable, issueNumber, publisher) {
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let fearAndLoathing = new Book("Fear and Loathing in Las Vegas", 744, true, "non-fiction", "Hunter S. Thomnpson")
console.log(fearAndLoathing);

let firstDVD = new DVD("Moe no Suzaku", 777, false, "Naomi Kawase", "1h34m")
console.log(firstDVD);

let firstMagazine = new Magazine("Monocle", 333, true, 42, "Winkreative Ltd.")
console.log(firstMagazine);


firstMagazine.checkOut();
firstDVD.returnItem();
firstDVD.summarizeFilm();

console.log(firstDVD.director);
console.log(fearAndLoathing.genre);
