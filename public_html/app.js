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
    ["A reliable dune buggy that will take you directly to your destination.", "A friendly camel who’s known to embark on exciting side quests."],
    ["Take shelter so I can continue on my path once it’s clear.", "Outrun the landslide!"],
    ["Take in the beautiful view and enjoy your surroundings.", "Think of all the fun activities you can do the next time you visit!"],
    ["Entice the dragon with a big plate of fresh hotpot meat.", "Yell loudly with the hope it wakes up."],
    ["Try to reason with the dragon, using logic to ask for the broth recipe.", "Use your charisma to connect with the dragon, hoping it will find you trustworthy."],
    ["I am a down to earth person who’s practical and pragmatic. I like to live in the moment and value simplicity.", "I am an imaginative person who’s always peering into the past and future. I am creative and curious, always thinking outside the box."],
    ["Love, of course!", "Salt, it enhances all the other flavours."]
  ];

  const colors = [
    { background: "#1D331A", button: "#0A2407", text: "#FFF4E6", secondary: "#407813"}, // Q1
    { background: "#0A2407", button: "#0A2407", text: "#FFF4E6", secondary: "#407813"}, // Q2
    { background: "#f5f5dc", button: "#556b2f", text: "#FFF4E6", secondary: "#65B128" }, // Q3
    { background: "#ffe4e1", button: "#cd5c5c", text: "#FFF4E6", secondary: "#65B128" }, // Q4
    { background: "#e6e6fa", button: "#6a5acd", text: "#FFF4E6", secondary: "#65B128" }, // Q5
    { background: "#f0fff0", button: "#228b22", text: "#FFF4E6", secondary: "#65B128" }, // Q6
    { background: "#fffacd", button: "#ff8c00", text: "#FFF4E6", secondary: "#65B128" }, // Q7
    { background: "#dcdcdc", button: "#808080", text: "#FFF4E6", secondary: "#65B128" }, // Q8
    { background: "#faf0e6", button: "#b22222", text: "#FFF4E6", secondary: "#65B128" }, // Q9
    { background: "#e0ffff", button: "#20b2aa", text: "#FFF4E6", secondary: "#65B128" }, // Q10
    { background: "#ffe4b5", button: "#8b4513", text: "#FFF4E6", secondary: "#65B128" }, // Q11
    { background: "#fdf5e6", button: "#d2691e", text: "#FFF4E6", secondary: "#65B128" },  // Q12
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
  

  const optionScores = [
    ["N", "S"], ["J", "P"], ["I", "E"], ["J", "P"], ["E", "I"], ["S", "N"],
    ["J", "P"], ["S", "N"], ["J", "P"], ["T", "F"], ["S", "N"], ["F", "T"]
  ];

  const resultImages = {
    "ENFP": "/public_html/assets/questions/ENFP.png",
    "ENFJ": "/public_html/assets/questions/ENFJ.png",
    "ENTP": "/public_html/assets/questions/ENTP.png",
    "ENTJ": "/public_html/assets/questions/ENTJ.png",
    "ESFP": "/public_html/assets/questions/ESFP.png",
    "ESTP": "/public_html/assets/questions/ESTP.png",
    "INFP": "/public_html/assets/questions/INFP.png",
    "INFJ": "/public_html/assets/questions/INFJ.png",
    "INTJ": "/public_html/assets/questions/INTJ.png",
    "ISFP": "/public_html/assets/questions/ISFP.png",
    "ISFJ": "/public_html/assets/questions/ISFJ.png",
    "ISTP": "/public_html/assets/questions/ISTP.png"
  };
  
  

  //    "ESFJ": "/assets/questions/ESFJ.png",
  //     "ESTJ": "/assets/questions/ESTJ.png",
  //     "INTP": "/assets/questions/INTP.png",
  //     "ISTJ": "/assets/questions/ISTJ.png"

  let E = 0, N = 0, F = 0, J = 0, I = 0, S = 0, T = 0, P = 0;
  let currentQuestionIndex = 0;
  let answers = new Array(questions.length).fill(null); // Stores selected option index (0 or 1)

  function loadQuestion(index) {
    const color = colors[index];
    const image = questionImages[index];
    const docBod = document.body;
  
    // Start fade out
    docBod.classList.remove('fade-in');
    docBod.classList.add('fade-out');
  
    setTimeout(() => {
      // Style updates
      document.body.style.backgroundColor = color.background;
      document.body.style.color = color.text;
  
      // Back/Home button styling
      const backBtn = document.getElementById('backBtn');
      document.getElementById('backArrow').style.stroke = color.secondary;
      document.getElementById('homeArrow').style.stroke = color.secondary;
  
      if (index >= questions.length) {
        showResults();
        return;
      }
  
      // Question content
      document.getElementById('questionText').textContent = `${questions[index]}`;
      const answersDiv = document.getElementById('answers');
      answersDiv.innerHTML = '';
  
      options[index].forEach((text, optIdx) => {
        const button = document.createElement('button');
        button.textContent = text;
  
        // Button styling
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
      });
  
      // Question number and squiggles
      document.getElementById('number').textContent = `${index + 1}/12`;
      document.getElementById('number').style.color = color.secondary;
      document.getElementById('background-img').src = 'assets/questions/' + image.background;
      document.getElementById('squiggle-right').src = 'assets/questions/' + image.squiggleRight + '.svg';
      document.getElementById('squiggle-left').src = 'assets/questions/' + image.squiggleLeft + '.svg';
      document.getElementById('bottom').src = 'assets/questions/' + image.bottom;
  
      // Show/hide navigation buttons
      document.getElementById('backBtn').style.display = index > 0 ? 'inline-block' : 'none';
      document.getElementById('homeBtn').style.display = index > 0 ? 'none' : 'inline-block';
  
      // Trigger fade-in
      docBod.classList.remove('fade-out');
      docBod.classList.add('fade-in');
  
      // Optional: remove fade-in after transition to keep class list clean
      setTimeout(() => {
        docBod.classList.remove('fade-in');
      }, 400);
    }, 400); // Match with CSS transition duration
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
  
    const imageSrc = resultImages[finalResult] || "/public_html/assets/questions/default.png"; // fallback if needed
  
    document.getElementById('questionContainer').innerHTML = `
      <h2>Quiz Completed!</h2>
      <p><strong>Your Result:</strong> ${finalResult}</p>
      <img src="${imageSrc}" alt="${finalResult} Result Image" style="max-width: 100%; margin-top: 1rem;">
    `;
  }

  window.onload = () => loadQuestion(currentQuestionIndex);