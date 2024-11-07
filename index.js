const experience = [
    {id: 1, exp: "0 Months"},
    {id: 2, exp: "3 Months"},
    {id: 3, exp: "6 Months"},
    {id: 4, exp: "1 Year"},
    {id: 5, exp: "2 Year"},
    {id: 6, exp: "3 Year"},
    {id: 7, exp: "4 Year"},
    {id: 8, exp: "5 Year"},
    {id: 9, exp: "6 Year"},
    {id: 10, exp: "7 Year"},
    {id: 11, exp: "8 Year"},
    {id: 12, exp: "9 Year"},
    {id: 13, exp: "10 Year"},
    {id: 14, exp: "11 Year"},
    {id: 15, exp: "12 Year"},
    {id: 16, exp: "13 Year"},
    {id: 17, exp: "14 Year"},
    {id: 18, exp: "15 Year"},
    {id: 19, exp: "16 Year"},
    {id: 20, exp: "17 Year"},
    {id: 21, exp: "18 Year"},
    {id: 22, exp: "19+ Year"}
];

const salary = [
    {id: 1, salary: "1 lakh"},
    {id: 2, salary: "2 lakh"},
    {id: 3, salary: "3 lakh"},
    {id: 4, salary: "4 lakh"},
    {id: 5, salary: "5 lakh"},
    {id: 6, salary: "6 lakh"},
    {id: 7, salary: "7 lakh"},
    {id: 8, salary: "8 lakh"},
    {id: 9, salary: "9 lakh"},
    {id: 10, salary: "10 lakh"}
];

const keywords = [
    {value: "---", label: "---"},
    {value: "Python", label: "python"},
    {value: "Java", label: "java"},
    {value: "C++", label: "cpp"},
    {value: "JavaScript", label: "javascript"},
    {value: "TypeScript", label: "typescript"},
    {value: "Ruby", label: "ruby"},
    {value: "Swift", label: "swift"},
    {value: "C#", label: "csharp"},
    {value: "PHP", label: "php"},
    {value: "Go", label: "go"},
    {value: "Rust", label: "rust"},
    {value: "Kotlin", label: "kotlin"},
    {value: "SQL", label: "sql"},
    {value: "R", label: "r"},
    {value: "Perl", label: "perl"},
    {value: "Shell", label: "shell"},
    {value: "Dart", label: "dart"},
    {value: "Scala", label: "scala"},
    {value: "Haskell", label: "haskell"},
    {value: "Lua", label: "lua"},
    {value: "Objective-C", label: "objectivec"},
    {value: "Groovy", label: "groovy"},
    {value: "VBScript", label: "vbscript"},
    {value: "ActionScript", label: "actionscript"},
    {value: "Fortran", label: "fortran"},
    {value: "Ada", label: "ada"},
    {value: "F#", label: "fsharp"},
    {value: "ML", label: "ml"},
    {value: "Erlang", label: "erlang"},
    {value: "Smalltalk", label: "smalltalk"},
    {value: "OCaml", label: "ocaml"},
    {value: "Html", label: "html"},
    {value: "Css", label: "css"},
    {value: "React", label: "react.js"}
];

const educationLevels = [
    { id: 1, level: "10th pass" },
    { id: 2, level: "12th pass" },
    { id: 3, level: "Diploma" },
    { id: 4, level: "Graduate" },
    { id: 5, level: "Post Graduate" }
  ];
const minEXp=document.getElementById("minExperience")
const maxEXp=document.getElementById("maxExperience")
const minSalary=document.getElementById("minSalary")
const maxSalary=document.getElementById("maxSalary")
const keywordId=document.getElementById("keywordid")
const educationList = document.getElementById("educationList");

experience.forEach(exper=>{
    const option=document.createElement("option")
    option.value=exper.id 
    option.textContent=exper.exp
    minEXp.appendChild(option)
})

experience.forEach(exper=>{
    const option=document.createElement("option")
    option.value=exper.id 
    option.textContent=exper.exp
    maxEXp.appendChild(option)
})

salary.forEach(salary=>{
    const option=document.createElement("option")
    option.value=salary.id 
    option.textContent=salary.salary
    minSalary.appendChild(option)
})
salary.forEach(salary=>{
    const option=document.createElement("option")
    option.value=salary.id 
    option.textContent=salary.salary
    maxSalary.appendChild(option)
})

keywords.forEach(word=>{
    const option=document.createElement("option")
    option.value=word.label
    option.textContent=word.value
    keywordId.appendChild(option)
})

function renderEducationList() {
    educationList.innerHTML = ''; // Clear the list
    
    educationLevels.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "list-item";

      // Education level text
      const eduPara = document.createElement("p");
      eduPara.className = "edu-para";
      eduPara.textContent = item.level;

      // Icons container with click event
      const iconsCnt = document.createElement("div");
      iconsCnt.className = "icons-cnt";
      iconsCnt.innerHTML = `
        <i class="fa-solid fa-plus" style="font-size: 20px; color: #494646"; margin-right: 5px;"></i>
      `;

      // Toggle between plus and x icon on click
      iconsCnt.addEventListener("click", () => {
        const icon = iconsCnt.querySelector("i");
        if (icon.classList.contains("fa-plus")) {
          icon.classList.replace("fa-plus", "fa-xmark");
          icon.style.color = "#656eec";
          listItem.classList.add("click-edu")

        } else {
          icon.classList.replace("fa-xmark", "fa-plus");
          icon.style.color = "#494646" ;
          listItem.classList.remove("click-edu")
        }
      });

      // Append elements
      listItem.appendChild(eduPara);
      listItem.appendChild(iconsCnt);
      educationList.appendChild(listItem);
    });
  }

  // Initial render
  renderEducationList();