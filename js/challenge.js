document.addEventListener("DOMContentLoaded", () => {
    // Initializing the counter
    const counterDisplay = document.getElementById("counter");
    let count = parseInt(counterDisplay.innerText);
    let timer = setInterval(incrementCounter, 1000);
    let paused = false;
  
    // Incrementing the counter every second
    function incrementCounter() {
      count++;
      counterDisplay.innerText = count;
    }
  
    // Plus button to manually incrementing the counter
    const plusBtn = document.getElementById("plus");
    plusBtn.addEventListener("click", () => {
      count++;
      counterDisplay.innerText = count;
    });
  
    // Minus button to manually decrementing the counter
    const minusBtn = document.getElementById("minus");
    minusBtn.addEventListener("click", () => {
      count--;
      counterDisplay.innerText = count;
    });
  
    // Liking button functionality
    const heartBtn = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const likes = {}; // Object to track likes for each number
  
    heartBtn.addEventListener("click", () => {
      const currentNumber = count;
      if (likes[currentNumber]) {
        likes[currentNumber]++;
        // Finding the corresponding list item and update the text
        const existingLi = document.querySelector(`li[data-num="${currentNumber}"]`);
        existingLi.innerText = `${currentNumber} has been liked ${likes[currentNumber]} times`;
      } else {
        likes[currentNumber] = 1;
        const li = document.createElement("li");
        li.dataset.num = currentNumber;
        li.innerText = `${currentNumber} has been liked 1 time`;
        likesList.appendChild(li);
      }
    });
  
    // Pausing/Resuming button functionality
    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", () => {
      if (!paused) {
        // Pausing the timer and disable buttons
        clearInterval(timer);
        paused = true;
        pauseBtn.innerText = "resume";
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        heartBtn.disabled = true;
        // Disabling the comment form submit button as well
        document.getElementById("submit").disabled = true;
      } else {
        // Resuming the timer and re-enable buttons
        timer = setInterval(incrementCounter, 1000);
        paused = false;
        pauseBtn.innerText = "pause";
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        heartBtn.disabled = false;
        document.getElementById("submit").disabled = false;
      }
    });
  
    // Comment form submission handling
    const commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const commentList = document.getElementById("list");
      const p = document.createElement("p");
      p.innerText = commentInput.value;
      commentList.appendChild(p);
      // Clear the input after submitting
      commentInput.value = "";
    });
  });
  