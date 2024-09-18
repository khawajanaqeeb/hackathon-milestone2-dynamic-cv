// coding for get data for resume and to display it
var form=document.getElementById("resume-builder") as HTMLFormElement;
var resumeElementDisplay=document.getElementById("display-resume")as HTMLDivElement;

// form submission
form.addEventListener('submit',(event:Event) => {
    event.preventDefault();  // prevent page to reload

    // collect value for variables as user input
    const name=(document.getElementById('name')as HTMLInputElement).value
    const fatherName=(document.getElementById('f-name')as HTMLInputElement).value
    const contact=(document.getElementById('contact')as HTMLInputElement).value
    const dateOfBirth=(document.getElementById('dob')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const experience=(document.getElementById('experience')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLInputElement).value
    const skills=(document.getElementById('skills')as HTMLInputElement).value

    // generation of resume content dynamically

    const resumeByHTML=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</P>
    <p><b>Father's Name:</b>${fatherName}</P>
    <p><b>Contact:</b>${contact}</P>
    <p><b>Date of Birth:</b>${dateOfBirth}</P>
    <p><b>Email:</b>${email}</P>
    <br/>
    <h3>Experience</h3>
    <p>${experience}</P>
    <br/>
    <h3>Education</h3>
    <p>${education}</p>
    <br/>
    <h3>Skills</h3>
    <p>${skills}<p/>
    `;
    // displaying the generated resume

    if (resumeElementDisplay){
        resumeElementDisplay.innerHTML=resumeByHTML ;
    } else{
        console.error ('Resume input field is missing');
    }
});
