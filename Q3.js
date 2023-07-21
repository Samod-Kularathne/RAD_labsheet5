class Book {
    constructor(name, price, author, publisher) {
      this.name = name;
      this.price = price;
      this.author = author;
      this.publisher = publisher;
    }
  
    calculateDiscount() {
      throw new Error("Method 'calculateDiscount()' must be implemented.");
    }
  
    displayDetailsWithDiscount() {
      const discount = this.calculateDiscount();
      const discountedPrice = this.price - this.price * (discount / 100);
  
      console.log("Book Details:");
      console.log("Name: " + this.name);
      console.log("Author: " + this.author);
      console.log("Publisher: " + this.publisher);
      console.log("Price: $" + this.price.toFixed(2));
      console.log("Discount: " + discount + "%");
      console.log("Discounted Price: $" + discountedPrice.toFixed(2));
    }
  }
  
  // Subclass: Novel
  class Novel extends Book {
    constructor(name, price, author, publisher) {
      super(name, price, author, publisher);
    }
  
    calculateDiscount() {
      return 15;
    }
  }
  
  // Subclass: ShortStory
  class ShortStory extends Book {
    constructor(name, price, author, publisher) {
      super(name, price, author, publisher);
    }
  
   calculateDiscount() {
      return 15;
    }
  }
  
  // Subclass: Biography
  class Biography extends Book {
    constructor(name, price, author, publisher) {
      super(name, price, author, publisher);
    }
  
    calculateDiscount() {
      return 10;
    }
  }
  
  // Subclass: EducationalBook
  class EducationalBook extends Book {
    constructor(name, price, author, publisher) {
      super(name, price, author, publisher);
    }
  
    calculateDiscount() {
      return 20;
    }
  }
  
  // Usage example:
  const novel = new Novel("The Great Gatsby", 15.99, "F. Scott Fitzgerald", "Scribner");
  novel.displayDetailsWithDiscount();
  
  const shortStory = new ShortStory("The Tell-Tale Heart", 12.50, "Edgar Allan Poe", "The Pioneer");
  shortStory.displayDetailsWithDiscount();
  
  const biography = new Biography("Steve Jobs", 20.00, "Walter Isaacson", "Simon & Schuster");
  biography.displayDetailsWithDiscount();
  
  const educationalBook = new EducationalBook("Introduction to JavaScript", 30.00, "John Doe", "ABC Publications");
  educationalBook.displayDetailsWithDiscount();
  