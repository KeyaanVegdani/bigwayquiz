const questions = [
    "Standing in front of you are two funny looking creatures offering to help lead you to the dragon. Who do you want to bring along with you?",
    "Your guide warns you that a dense and treacherous jungle lays ahead of you. How do you prepare?",
    "After weeding your way through the noodley foliage, two boats are docked at shore. Which do you board?",
    "Oh no! A soup monster appears out of nowhere. What do you do?",
    "You’ve arrived at your destination - or have you? It appears the winds shifted you off course. Do you:",
    "Finally, you reach your rightful destination. Pick your mode of transportation:",
    "A landslide is coming! How do you handle the situation?",
    "On your way up the mountain, you:",
    "You’ve arrived at the dragon’s lair. Do you:",
    "The dragon appears before you in a smoky aura. You:",
    "The dragon asks you a question. “My broth recipe? What makes you think you are worthy of such a secret?”",
    "Dragon’s question, “The recipe for a broth is what you seek, but is it a secret you are ready to keep? Look deep into my eyes and tell me: which ingredient has the highest prize?”"
  ];

  const options = [
    ["The whimsical Mushroom Mage", "The pragmatic Pork Paladin"],
    ["Take inventory and devise a plan.", "Head in and figure it out along the way."],
    ["A boat with just you and the captain.", "A cruise ship with lots of travellers to chat with."],
    ["Hide and observe the monster to strategize against it.", "Charge at the monster, hoping to catch it off guard."],
    ["Ask a townsperson for help.", "Try and figure it out on your own."],
    ["A buggy that will take you directly to your destination.", "A friendly camel who’s known to embark on side quests."],
    ["Take shelter so I can continue on my path once it’s clear.", "Outrun the landslide!"],
    ["Take in the beautiful view and enjoy your surroundings.", "Think of all the fun activities you can do the next time!"],
    ["Entice the dragon with a big plate of fresh hotpot meat.", "Yell loudly with the hope it wakes up."],
    ["Try to reason with the dragon to ask for the broth recipe.", "Use your charisma to connect with the dragon gaining trust."],
    ["I am a down to earth person who’s practical and pragmatic.", "I am an imaginative person who’s always peering in time."],
    ["Love, of course!", "Salt, it enhances all the other flavours."]
  ];

  const colors = [
    { background: "#04141C", button: "#04141C", text: "#FFF4E6", secondary: "#5888B6"}, // Q1
    { background: "#091E18", button: "#091E18", text: "#FFF4E6", secondary: "#648660"}, // Q2
    { background: "#A22E0B", button: "#A22E0B", text: "#FFF4E6", secondary: "#FB701F" }, // Q3
    { background: "#A22E0B", button: "#A22E0B", text: "#FFF4E6", secondary: "#FB701F" }, // Q4
    { background: "#5F2525", button: "#5F2525", text: "#FFF4E6", secondary: "#FF999B" }, // Q5
    { background: "#3D3D24", button: "#3D3D24", text: "#FFF4E6", secondary: "#BACAA4" }, // Q6
    { background: "#451D12", button: "#451D12", text: "#FFF4E6", secondary: "#FF999B" }, // Q7
    { background: "#3D3024", button: "#3D3024", text: "#FFF4E6", secondary: "#A68171" }, // Q8
    { background: "#280505", button: "#280505", text: "#FFF4E6", secondary: "#8F1102" }, // Q9
    { background: "#280505", button: "#280505", text: "#FFF4E6", secondary: "#8F1102" }, // Q10
    { background: "#280505", button: "#280505", text: "#FFF4E6", secondary: "#8F1102" }, // Q11
    { background: "#280505", button: "#280505", text: "#FFF4E6", secondary: "#8F1102" },  // Q12
    { background: "#000000", button: "#333333", text: "#FFF4E6", secondary: "#65B128" } // Final result page
  ];

  const questionImages = [
    { background: "background1.svg", foreground: "foreground1.webp", squiggleRight: "squiggle1-right", squiggleLeft: "squiggle1-left", bottom: "bottom1.svg"},
    { background: "background2.svg", foreground: "foreground2.webp", squiggleRight: "squiggle2-right", squiggleLeft: "squiggle2-left", bottom: "bottom2.svg"},
    { background: "background3.svg", foreground: "foreground3.webp", squiggleRight: "squiggle3-right", squiggleLeft: "squiggle3-left", bottom: "bottom3.svg"},
    { background: "background4.svg", foreground: "foreground4.webp", squiggleRight: "squiggle4-right", squiggleLeft: "squiggle4-left", bottom: "bottom4.svg"},
    { background: "background5.svg", foreground: "foreground5.webp", squiggleRight: "squiggle5-right", squiggleLeft: "squiggle5-left", bottom: "bottom5.svg"},
    { background: "background6.svg", foreground: "foreground6.webp", squiggleRight: "squiggle6-right", squiggleLeft: "squiggle6-left", bottom: "bottom6.svg"},
    { background: "background7.svg", foreground: "foreground7.webp", squiggleRight: "squiggle7-right", squiggleLeft: "squiggle7-left", bottom: "bottom7.svg"},
    { background: "background8.svg", foreground: "foreground8.webp", squiggleRight: "squiggle8-right", squiggleLeft: "squiggle8-left", bottom: "bottom8.svg"},
    { background: "background9.svg", foreground: "foreground9.webp", squiggleRight: "squiggle9-right", squiggleLeft: "squiggle9-left", bottom: "bottom9.svg"},
    { background: "background10.svg", foreground: "foreground10.webp", squiggleRight: "squiggle10-right", squiggleLeft: "squiggle10-left", bottom: "bottom10.svg"},
    { background: "background11.svg", foreground: "foreground11.webp", squiggleRight: "squiggle11-right", squiggleLeft: "squiggle11-left", bottom: "bottom11.svg"},
    { background: "background12.svg", foreground: "foreground12.webp", squiggleRight: "squiggle12-right", squiggleLeft: "squiggle12-left", bottom: "bottom12.svg"},
    { background: "background13.svg", foreground: "foreground13.webp", squiggleRight: "squiggle13-right", squiggleLeft: "squiggle13-left", bottom: "bottom13.svg"},
  ]

  const resultColors = {
    "ENFP": { background: "#852948", button: "#660A46", text: "#FFF4E6", secondary: "#FF8B8B" },
    "INFJ": { background: "#BE4A51", button: "#992A32", text: "#FFF4E6", secondary: "#004D40" },
    "ISTP": { background: "#6C407C", button: "#41234B", text: "#FFF4E6", secondary: "#1565C0" },
    "INTJ": { background: "#35547E", button: "#193D6D", text: "#FFF4E6", secondary: "#455A64" },
    "ENTP": { background: "#246B69", button: "#154746", text: "#FFF4E6", secondary: "#EF6C00" },
    "ISFP": { background: "#49448F", button: "#35316C", text: "#FFF4E6", secondary: "#689F38" },
    "ESFJ": { background: "#AC4A0D", button: "#932A00", text: "#FFF4E6", secondary: "#D81B60" },
    "ISTJ": { background: "#AC4A0D", button: "#932A00", text: "#FFF4E6", secondary: "#546E7A" },
    "ENFJ": { background: "#3A4F3B", button: "#293829", text: "#FFF4E6", secondary: "#8E24AA" },
    "INTP": { background: "#AC4A0D", button: "#932A00", text: "#FFF4E6", secondary: "#512DA8" },
    "ESTJ": { background: "#AC4A0D", button: "#932A00", text: "#FFF4E6", secondary: "#F57F17" },
    "INFP": { background: "#7E3D3D", button: "#5F2C2C", text: "#FFF4E6", secondary: "#7CB342" },
    "ESFP": { background: "#1F6626", button: "#063B2E", text: "#FFF4E6", secondary: "#FBC02D" },
    "ISFJ": { background: "#D5822F", button: "#A95213", text: "#FFF4E6", secondary: "#1976D2" },
    "ESTP": { background: "#AC4A0D", button: "#932A00", text: "#FFF4E6", secondary: "#C62828" },
    "ENTJ": { background: "#841C1E", button: "#690C0D", text: "#FFF4E6", secondary: "#D84315" }
  };
  
  

  const optionScores = [
    ["N", "S"], ["J", "P"], ["I", "E"], ["J", "P"], ["E", "I"], ["S", "N"],
    ["J", "P"], ["S", "N"], ["J", "P"], ["T", "F"], ["S", "N"], ["F", "T"]
  ];

  const resultImages = {
    "ENFP": "./assets/questions/ENFP.png",
    "ENFJ": "./assets/questions/ENFJ.png",
    "ENTP": "./assets/questions/ENTP.png",
    "ENTJ": "./assets/questions/ENTJ.png",
    "ESFP": "./assets/questions/ESFP.png",
    "ESTP": "./assets/questions/ESTP.png",
    "INFP": "./assets/questions/INFP.png",
    "INFJ": "./assets/questions/INFJ.png",
    "INTJ": "./assets/questions/INTJ.png",
    "ISFP": "./assets/questions/ISFP.png",
    "ISFJ": "./assets/questions/ISFJ.png",
    "ISTP": "./assets/questions/ISTP.png"
  };
  
  

  //    "ESFJ": "/assets/questions/ESFJ.png",
  //     "ESTJ": "/assets/questions/ESTJ.png",
  //     "INTP": "/assets/questions/INTP.png",
  //     "ISTJ": "/assets/questions/ISTJ.png"

  let E = 0, N = 0, F = 0, J = 0, I = 0, S = 0, T = 0, P = 0;
  let currentQuestionIndex = 0;
  let answers = new Array(questions.length).fill(null); // Stores selected option index (0 or 1)

  function loadQuestion(index) {
    const docBod = document.body;
  
    // If we're at results, skip fade and go straight to result screen
    if (index >= questions.length) {
      docBod.classList.remove('fade-out');
      docBod.classList.remove('fade-in');
      showResults();
      return;
    }
  
    // Proceed with normal fade transition
    const color = colors[index];
    const image = questionImages[index];

    document.getElementById('endBtn').style.display = 'none';
  
    docBod.classList.remove('fade-in');
    docBod.classList.add('fade-out');
  
    setTimeout(() => {
      // Style updates
      document.body.style.backgroundColor = color.background;
      document.body.style.color = color.text;
  
      const backBtn = document.getElementById('backBtn');
      document.getElementById('backArrow').style.stroke = color.secondary;
      document.getElementById('homeArrow').style.stroke = color.secondary;

  
      // Question content
      document.getElementById('questionText').textContent = `${questions[index]}`;
      const answersDiv = document.getElementById('answers');
      answersDiv.innerHTML = '';
  
      options[index].forEach((text, optIdx) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.backgroundColor = color.button;
        button.style.color = color.text;
        button.style.border = "none";
        button.style.borderRadius = "0.5rem";
        document.getElementById('bottom-bar').style.backgroundColor = color.button;
  
        button.onclick = () => {
          if (answers[currentQuestionIndex] !== null) {
            const previousLetter = optionScores[currentQuestionIndex][answers[currentQuestionIndex]];
            decrementLetter(previousLetter);
          }
  
          answers[currentQuestionIndex] = optIdx;
          const selectedLetter = optionScores[currentQuestionIndex][optIdx];
          incrementLetter(selectedLetter);
  
          currentQuestionIndex++;
          loadQuestion(currentQuestionIndex);
        };
  
        answersDiv.appendChild(button);
        createFireflies();
      });
  
      // Set question number and update assets
      document.getElementById('number').textContent = `${index + 1}/12`;
      document.getElementById('number').style.color = color.secondary;
      document.getElementById('background-img').src = 'assets/questions/' + image.background;
      document.getElementById('squiggle-right').src = 'assets/questions/' + image.squiggleRight + '.svg';
      document.getElementById('squiggle-left').src = 'assets/questions/' + image.squiggleLeft + '.svg';
      document.getElementById('bottom').src = 'assets/questions/' + image.bottom;
  
      document.getElementById('backBtn').style.display = index > 0 ? 'inline-block' : 'none';
      document.getElementById('homeBtn').style.display = index > 0 ? 'none' : 'inline-block';
  
      // Trigger fade-in for updated content
      docBod.classList.remove('fade-out');
      docBod.classList.add('fade-in');
  
      // Remove fade-in class after animation
      setTimeout(() => {
        docBod.classList.remove('fade-in');
      }, 400);
    }, 400);
  }
  
  

  function incrementLetter(letter) {
    switch (letter) {
      case "E": E++; break;
      case "N": N++; break;
      case "F": F++; break;
      case "J": J++; break;
      case "I": I++; break;
      case "S": S++; break;
      case "T": T++; break;
      case "P": P++; break;
    }
  }

  function decrementLetter(letter) {
    switch (letter) {
      case "E": E--; break;
      case "N": N--; break;
      case "F": F--; break;
      case "J": J--; break;
      case "I": I--; break;
      case "S": S--; break;
      case "T": T--; break;
      case "P": P--; break;
    }
  }

  function goBack() {
    if (currentQuestionIndex > 0) {
      // Undo score for current question if it had been answered
      if (answers[currentQuestionIndex - 1] !== null) {
        const previousLetter = optionScores[currentQuestionIndex - 1][answers[currentQuestionIndex - 1]];
        decrementLetter(previousLetter);
        answers[currentQuestionIndex - 1] = null; // Clear old answer
      }
      currentQuestionIndex--;
      loadQuestion(currentQuestionIndex);
    }
  }

  function showResults() {
    const finalResult = 
      (E >= I ? "E" : "I") +
      (N >= S ? "N" : "S") +
      (T >= F ? "T" : "F") +
      (J >= P ? "J" : "P");
  
    const imageSrc = resultImages[finalResult] || "./assets/questions/default.png";
    const theme = resultColors[finalResult] || { background: "#000", button: "#333", text: "#FFF", secondary: "#65B128" };
    const finalImage = questionImages[questionImages.length - 1];
  
    // Apply dynamic result theme
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    document.getElementById('bottom-bar').style.backgroundColor = theme.button;
  
    // Update visuals
    document.getElementById('background-img').style.display = 'none';
    document.getElementById('squiggle-right').style.display = 'none';
    document.getElementById('squiggle-left').style.display = 'none';
    document.getElementById('bottom').style.display = 'none';
  
    document.getElementById('backBtn').style.display = 'none';
    document.getElementById('homeBtn').style.display = 'none';
    document.getElementById('number').style.display = 'none';

    document.getElementById('endBtn').style.display = 'block';
    document.getElementById('endBtn').style.backgroundColor = theme.button;
    document.getElementById('endBtn').style.color = theme.text;
  
    document.getElementById('questionContainer').innerHTML = `
      <img src="${imageSrc}" alt="${finalResult} Result Image" style="max-width: 100%; margin-top: 1rem;">
    `;
  }

  function createFireflies(count = 20) {
    const container = document.getElementById('fireflies');
    container.innerHTML = ''; // Clear any existing fireflies
  
    for (let i = 0; i < count; i++) {
      const fly = document.createElement('div');
      fly.className = 'firefly';
  
      // Random position
      fly.style.top = Math.random() * 100 + 'vh';
      fly.style.left = Math.random() * 100 + 'vw';
  
      // Random movement
      const x = (Math.random() - 0.5) * 200 + 'px';
      const y = (Math.random() - 0.5) * 200 + 'px';
      fly.style.setProperty('--x', x);
      fly.style.setProperty('--y', y);
  
      // Random delay for animation staggering
      fly.style.animationDelay = Math.random() * 5 + 's';
  
      container.appendChild(fly);
    }
  }
  
  
  

  window.onload = () => loadQuestion(currentQuestionIndex);