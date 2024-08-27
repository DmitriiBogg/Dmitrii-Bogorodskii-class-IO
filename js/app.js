// Display skills with animation
document.querySelectorAll(".skill-per").forEach(function (element) {
  var width = element.getAttribute("per");
  element.style.width = width;
});

// Footer creation
const footer = document.createElement("footer");
footer.classList.add("footer");

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.textContent = `© ${thisYear} Dmitrii Bogorodskii`;
footer.appendChild(copyright);
document.body.appendChild(footer);

// Skills section
document.addEventListener("DOMContentLoaded", () => {
  let skills = [
    { name: "HTML", level: "30%" },
    { name: "CSS", level: "20%" },
    { name: "JavaScript", level: "25%" },
  ];

  function updateSkillsSection() {
    const skillsSection = document.getElementById("skills");
    if (!skillsSection) {
      console.error('Element with id "skills" not found');
      return;
    }

    const skillContainer = skillsSection;
    skillContainer.innerHTML = "";

    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "Skills:";
    skillContainer.appendChild(skillsTitle);

    skills.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill");

      const skillName = document.createElement("div");
      skillName.classList.add("skill-name");
      skillName.textContent = skill.name;

      const skillBar = document.createElement("div");
      skillBar.classList.add("skill-bar");

      const skillPer = document.createElement("div");
      skillPer.classList.add("skill-per");
      skillPer.setAttribute("per", skill.level);
      skillPer.style.width = skill.level;

      skillBar.appendChild(skillPer);
      skillDiv.appendChild(skillName);
      skillDiv.appendChild(skillBar);

      skillContainer.appendChild(skillDiv);
    });
  }

  // Functions for updating skills
  function addSkill(name, level) {
    skills.push({ name: name, level: level });
    updateSkillsSection();
  }

  function updateSkill(name, newLevel) {
    const skill = skills.find((skill) => skill.name === name);
    if (skill) {
      skill.level = newLevel;
      updateSkillsSection();
    }
  }

  addSkill("ChatJPT", "35%");
  updateSkill("CSS", "40%");
  updateSkill("HTML", "70%");
});

// Message form
document.addEventListener("DOMContentLoaded", () => {
  const messageForm = document.querySelector('form[name="leave_message"]');
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");

  function toggleMessageSection() {
    if (messageList.childElementCount === 0) {
      messageSection.style.display = "none";
    } else {
      messageSection.style.display = "block";
    }
  }

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const newMessage = document.createElement("li");
    newMessage.classList.add("message-item");

    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>
      <p>${usersMessage}</p>
    `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
      newMessage.remove();
      toggleMessageSection();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    toggleMessageSection();

    messageForm.reset();
  });
  toggleMessageSection();
});
