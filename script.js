// coding for get data for resume and to display it
var form = document.getElementById("resume-builder");
var resumeElementDisplay = document.getElementById("display-resume");
// form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page to reload
    // collect value for variables as user input
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('f-name').value;
    var contact = document.getElementById('contact').value;
    var dateOfBirth = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    // generation of resume content dynamically
    var resumeByHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</P>\n    <p><b>Father's Name:</b>").concat(fatherName, "</P>\n    <p><b>Contact:</b>").concat(contact, "</P>\n    <p><b>Date of Birth:</b>").concat(dateOfBirth, "</P>\n    <p><b>Email:</b>").concat(email, "</P>\n    <br/>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</P>\n    <br/>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <br/>\n    <h3>Skills</h3>\n    <p>").concat(skills, "<p/>\n    ");
    // displaying the generated resume
    if (resumeElementDisplay) {
        resumeElementDisplay.innerHTML = resumeByHTML;
    }
    else {
        console.error('Resume input field is missing');
    }
});
