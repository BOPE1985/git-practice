class Media {
    constructor(title){
      this._title = title;
      this._isCheckOut = false;
      this._ratings = []
    }
  
    get title(){
      return this._title;
    }
  
    get isCheckOut(){
      return this._isCheckOut;
    }
  
    get ratings(){
      return this._ratings;
    }
  
    set isCheckOut(response){
      this._ischeckOut = response
    }
  
    toggleCheckOutStatus(){
      if(this._isCheckOut === true){
        return false;
      }else{
        return true;
      }
    }
  
    addRating(newRating){
      this._ratings.push(newRating)
    }
  
    getAverageRatings(){
      let arrTotal = this._ratings.reduce((a,b) => {
        return a + b
      }, 0)
      return arrTotal/this._ratings.length
    }
  
  }
  
  class Book extends Media{
    constructor(author, title, pages){
      super(title);
      this._author = author;
      this._pages = 0;
    }
  
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media{
    constructor(director, title, runtime){
      super(title);
      this._director = director;
      this._runtime = 0;
    }
  
    get director(){
      return this._director;
    }
    get runtime(){
      return this._runtime;
    }
  }
  
  class Cd extends Media{
    consturctor(artist, title, songs){
      Super(title);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist(){
      return this._artist;
    }
    get songs(){
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything)
  console.log(historyOfEverything.toggleCheckOutStatus())
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything)
  console.log(historyOfEverything.getAverageRatings())
  
  const speed = new Movie('Jan de Bont', 'speed', 166);
  console.log(speed)
  console.log(speed.toggleCheckOutStatus())
  console.log(speed.isCheckOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed)
  console.log(speed.getAverageRatings())