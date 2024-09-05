class School {
    constructor(name, level, numbersOfStudents){
      this._name = name;
      this._level = level;
      this._numbersOfStudents = numbersOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numbersOfStudents(){
      return this._numbersOfStudents
    }
  
    set numbersOfStudents(newNumbersOfStudents){
      if(typeof newNumbersOfStudents !== 'number'){
        return 'invalid input: Input a number'
      }else{
        this._numbersOfStudents = newNumbersOfStudents
      }
    }
  
    quickFacts(){
      console.log(`${this.name} educates ${this.numbersOfStudents} at ${this.level} level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
      let randNum = Math.floor(Math.random()* substituteTeachers.length)
      return substituteTeachers[randNum]
    }
  }
  
  class PrimarySchool extends School{
    constructor(name, numbersOfStudents, pickUpPolicy){
      super(name,'primary',numbersOfStudents);
      this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
      return this._pickUpPolicy;
    }
  }
  
  class MiddleSchool extends School{
    constructor(name,numbersOfStudents){
      super(name,'Middle',numbersOfStudents);
    }
  }
  
  class HighSchool extends School{
    constructor(name,numbersOfStudents, sportsTeam){
      super(name,'High',numbersOfStudents);
      this._sportsTeam = sportsTeam;
    }
    get sportsTeam(){
      return this._sportsTeam;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('lorraine Hansbury', 514, 'primary','Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts()
  
  const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J.R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
  
  console.log(sub)
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  console.log(alSmith.sportsTeam)
  
  
  
  
  