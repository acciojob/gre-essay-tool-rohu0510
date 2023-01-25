//your code here
// Get the textbox and h3 element
const textbox = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

// Add an event listener to the textbox
textbox.addEventListener("input", function() {
  // Get the text in the textbox
  const text = textbox.value;

	if (text === "") {
    wordCount.innerHTML = 0;
    return;
  }

  // Count the number of words in the text
  const wordCountValue = text.trim().split(/\s+/).length;

  // Update the h3 with the word count
  wordCount.innerHTML = wordCountValue;
});
