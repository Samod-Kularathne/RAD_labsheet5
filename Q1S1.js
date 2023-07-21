function Student(indexNumber, name, dateOfBirth, address, contactNumber, emailAddress) {
  let _indexNumber = indexNumber;
  let _name = name;
  let _dateOfBirth = dateOfBirth;
  let _address = address;
  let _contactNumber = contactNumber;
  let _emailAddress = emailAddress;
  let _groupNumber = null;

  function calculateGroupNumber() {
    return _indexNumber % 4;
  }
  return {
    // Set details of the student
    setDetails: function (indexNumber, name, dateOfBirth, address, contactNumber, emailAddress) {
      _indexNumber = indexNumber;
      _name = name;
      _dateOfBirth = dateOfBirth;
      _address = address;
      _contactNumber = contactNumber;
      _emailAddress = emailAddress;
    },

    // Show details of the student
    showDetails: function () {
      console.log("Student Details:");
      console.log("Index Number: " + _indexNumber);
      console.log("Name: " + _name);
      console.log("Date of Birth: " + _dateOfBirth);
      console.log("Address: " + _address);
      console.log("Contact Number: " + _contactNumber);
      console.log("Email Address: " + _emailAddress);
    },

    // Set the group number
    setGroupNumber: function () {
      _groupNumber = calculateGroupNumber();
    },

    // Show the group number
    showGroupNumber: function () {
      console.log("Group Number: " + (_groupNumber + 1));
    },
  };
}

// Usage example 1:
const student1 = new Student("2023001", "John Doe", "2000-01-01", "123 Main St", "123-456-7890", "john@example.com");
student1.showDetails(); 
student1.setGroupNumber(); 
student1.showGroupNumber(); 

// Usage example 2:
student1.setDetails("2023002", "Jane Smith", "2001-02-02", "456 Elm St", "987-654-3210", "jane@example.com");
student1.showDetails();
student1.setGroupNumber();
student1.showGroupNumber();
