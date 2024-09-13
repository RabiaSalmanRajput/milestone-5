document.getElementById("resumeForm")?.addEventListener("submit", function(event){
    event.preventDefault();

    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;


  const usernameElement = document.getElementById("username") as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
       
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
       
       /////////////////////////////////
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
 //////////////////////////////////////////



const username = usernameElement.value;
const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`



    //crerate resume output
    const resumeOutput = `
    <h1>Resume</h1>
  ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile Picture" class="profilePicture">` : '' }

    <h2>Personal Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone</strong> ${phone}</p>

<h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    const downloadLink = document.createElement("a")
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = "Download Your Resume";


    const resumeOutputElement = document.getElementById('resumeOutput'); 
    if(resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;///////////////////////

resumeOutputElement.appendChild(downloadLink)



resumeOutputElement.style.display = "block";
 } else {
        console.error('one or more output elements are missing.');
    }

}
document.addEventListener(
    "DOMContentLoaded", () =>
    {
        // Capture all elements with
        //contenteditable attribute set to true
        document.querySelectorAll("[content editable=true]").forEach((element) =>
        {
            element.addEventListener("input", (event)=> {
                const target = event.target as HTMLElement; 
              
            })
        })
        
    }
)
});

document.querySelector(".download")?.addEventListener("Click", ()=>{
    print()
});