document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        "Communication Skills",
        "Team Collaboration",
        "Problem Solving",
        "Time Management",
        "Project Management",
        "Adaptability",
    ];

    const skillsList = document.getElementById("skills-list");

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    
        // Change button text depending on theme
        if (document.body.classList.contains("dark-mode")) {
            this.textContent = "Light Theme";
        } else {
            this.textContent = "Dark Theme";
        }
    });
    
    
});
