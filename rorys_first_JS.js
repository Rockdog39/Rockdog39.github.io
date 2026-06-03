/* Function to throw alert upon opening the Newsletter Signup Form. */
function newsletterWelcome() {
    alert ("Welcome to the R² Web Development Newsletter Signup")
}

/* Function to check that a first name and last name has been entered and that a valid name with
   no excess spaces are allowed but single spaces between names, hyphens and apostrophes are. 
   The function also checks that at least one "Department" check box has been selected. */

function validateForm() {
    let firstName =
        document.getElementById("first-name").value;
    let lastName =
        document.getElementById("last-name").value;

    /* Regex pattern that allows only letters, hyphens, apostrophes, space between names, and most 
       importantly the + enforces that at least one or more letters have been entered, ie if no name 
       entered the function returns false for that field and triggers the alert.  */    
    let namePattern = /^[A-Za-z]+([ '-][A-Za-z]+)*$/; 
        if (!namePattern.test(firstName.trim())) {
          alert("Please enter a valid first name.");
          return false;
        }
        if (!namePattern.test(lastName.trim())) {
          alert("Please enter a valid last name.");
          return false;
        }

    /* Next step of validation function to check that at least one department check box selected */      
    let departments =
        document.getElementsByName("department[]");
    let checked = false;
    
    /* For loop to iterate through each check box until a checked box is found, if no check box found
       the alert is triggered. */
    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            checked = true;
        }
    }
    if (checked == false) {
        alert("Please select at least one department.");
        return false;
    }
    return true;
}
