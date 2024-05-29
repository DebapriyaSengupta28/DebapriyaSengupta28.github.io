const projects = [
  { 
      name: "WebShield - Web Blocker", 
      description: "A browser extension enabling users to block unsafe and unverified websites.", 
      image: "./Assets/Projects/webshield.png", 
      hyperlink: "https://github.com/DebapriyaSengupta28/WebShield-Web-Blocker" 
  },
  {
    "name": "Anix-AnimeLibrary",
    "description": "Personalized anime library. Visit the site <a href='https://anix-animelibrary.vercel.app/' target='_blank'>here</a>.",
    "image": "./Assets/Projects/anix.png",
    "hyperlink": "https://github.com/DebapriyaSengupta28/AniX-AnimeLibrary"
  },
  { 
    "name": "frameillusioner.com", 
    "description": "Professional website for Frame Illusioner Studio, an animation studio. Visit the site <a href='https://frameillusioner.com/' target='_blank'>here</a>.", 
    "image": "./Assets/Projects/fi-studio.jpg", 
    "hyperlink": "https://github.com/DebapriyaSengupta28/frameillusioner.com" 
  },
  { 
      name: "Personal Website", 
      description: "Personal portfolio website.", 
      image: "./Assets/Projects/DG.png", 
      hyperlink: "https://github.com/DebapriyaSengupta28/DebapriyaSengupta28.github.io" 
  },
  { 
      name: "Quick-Definition", 
      description: "A browser extension which allows user to get any word definition and save it.", 
      image: "./Assets/Projects/quick-definition.jpeg", 
      hyperlink: "https://github.com/DebapriyaSengupta28/Quick_Definition_Extension" 
  },
  { 
      name: "Music-Recommendation", 
      description: "A system in Python using Jupyter Notebook for classifying song genres, moods, and artists.", 
      image: "./Assets/Projects/music-rec.png", 
      hyperlink: "https://github.com/DebapriyaSengupta28/Music-Recommendation-System" 
  },
  { 
      name: "Tic-Tac-Toe", 
      description: "Python Tic-Tac-Toe game using Pygame library.", 
      image: "./Assets/Projects/tic-tac-to.png", 
      hyperlink: "https://github.com/DebapriyaSengupta28/TicTacToe" 
  },
  // Add other projects with hyperlinks
];

let currentIndex = 0;

function renderProjects() {
  const container = document.getElementById('projects');
  container.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + 2; i++) {
      const project = projects[i];
      if (project) {
          const div = document.createElement('div');
          div.classList.add('project');
          div.innerHTML = `
              <img src="${project.image}" alt="${project.name}">
              <div class="details">
                  <h3>${project.name}</h3>
                  <p>${project.description}</p>
                  <a href="${project.hyperlink}" class="btn-more" target="_blank">Know More</a>
              </div>
          `;
          container.appendChild(div);
      }
  }

  document.getElementById('left-btn').disabled = currentIndex === 0;

  document.getElementById('right-btn').disabled = currentIndex === projects.length - 2;
}

function updateProjects(direction) {
  if (direction === 'left' && currentIndex > 0) {
      currentIndex--;
  } else if (direction === 'right' && currentIndex < projects.length - 2) {
      currentIndex++;
  }

  renderProjects();
}

document.getElementById('left-btn').addEventListener('click', () => updateProjects('left'));
document.getElementById('right-btn').addEventListener('click', () => updateProjects('right'));

renderProjects();
