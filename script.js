var _a, _b;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        /////////////////////////////////
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //////////////////////////////////////////
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //crerate resume output
        var resumeOutput = "\n    <h1>Resume</h1>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"profile Picture\" class=\"profilePicture\">") : '', "\n\n    <h2>Personal Information</h2>\n    <p><strong>Name:</strong> ").concat(name_1, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone</strong> ").concat(phone, "</p>\n\n<h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
        var downloadLink = document.createElement("a");
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your Resume";
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput; ///////////////////////
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
        else {
            console.error('one or more output elements are missing.');
        }
    }
    document.addEventListener("DOMContentLoaded", function () {
        // Capture all elements with
        //contenteditable attribute set to true
        document.querySelectorAll("[content editable=true]").forEach(function (element) {
            element.addEventListener("input", function (event) {
                var target = event.target;
            });
        });
    });
});
(_b = document.querySelector(".download")) === null || _b === void 0 ? void 0 : _b.addEventListener("Click", function () {
    print();
});
