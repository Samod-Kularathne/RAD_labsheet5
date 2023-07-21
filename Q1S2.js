class Examination {
    #indexNumber;
    #mcqMarks;
    #essayMarks;
  
    constructor(indexNumber, mcqMarks, essayMarks) {
      this.#indexNumber = indexNumber;
      this.#mcqMarks = mcqMarks;
      this.#essayMarks = essayMarks;
    }
  
    #calculateTotalMarks() {
      return this.#mcqMarks + this.#essayMarks;
    }

    displayTotalMarks() {
      const totalMarks = this.#calculateTotalMarks();
      console.log("Total Marks: " + totalMarks);
      return totalMarks;
    }
  
    displayPassOrFail() {
      const totalMarks = this.#calculateTotalMarks();
      const passOrFail = totalMarks >= 50 ? "Pass" : "Fail";
      console.log("Result: " + passOrFail);
      return passOrFail;
    }
  
    displayGrade() {
      const totalMarks = this.#calculateTotalMarks();
      let grade;
  
      if (totalMarks >= 75) {
        grade = "Grade A";
      } else if (totalMarks >= 65) {
        grade = "Grade B";
      } else if (totalMarks >= 55) {
        grade = "Grade C";
      } else if (totalMarks >= 35) {
        grade = "Grade S";
      } else {
        grade = "Grade W";
      }
  
      console.log("Grade: " + grade);
      return grade;
    }
  }
  
  // Usage example:
  const student1 = new Examination("2023001", 80, 65);
  
  // Display the total marks
  student1.displayTotalMarks();
  
  // Display pass or fail status
  student1.displayPassOrFail();
  
  // Display the grade
  student1.displayGrade();
  