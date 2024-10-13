const suggestions = ["apple", "banana", "cherry", "date", "elderberry"];

window.onload = function () {
  // Event listener code here
  document.getElementById("search-bar").addEventListener("input", autocomplete);
};

function filterSuggestions(input) {
  return suggestions.filter((suggestion) => {
    const normalizedSuggestion = suggestion.toLowerCase().replace(/\s+/g, "");
    const normalizedInput = input.toLowerCase().replace(/\s+/g, "");
    return normalizedSuggestion.includes(normalizedInput);
  });
}

function displaySuggestions(suggestions) {
  const suggestionsContainer = document.getElementById(
    "autocomplete-suggestions"
  );
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  suggestions.forEach((suggestion) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.textContent = suggestion;
    suggestionsContainer.appendChild(suggestionItem);
  });
}

function autocomplete() {
  const input = document.getElementById("search-bar").value;
  const suggestionsContainer = document.getElementById(
    "autocomplete-suggestions"
  );

  // Hide suggestions container if input is empty
  if (input === "") {
    suggestionsContainer.style.display = "none";
    return; // Early return to avoid unnecessary processing
  } else {
    suggestionsContainer.style.display = "block";
  }

  const filteredSuggestions = filterSuggestions(input);
  displaySuggestions(filteredSuggestions);
  
}

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
  document.getElementById("search-bar").value = "";
  autocomplete(); // Trigger autocomplete to clear suggestions
});
