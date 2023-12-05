function scrollAlmostTop() { // Funktsioon kirjelduse kaugusele kerimiseks. Koodi kirjutas ChatGPT (https://chat.openai.com/).
  const targetElement = document.getElementById('agentKirjeldus'); // Replace 'yourTargetElementId' with your actual element ID
  const offsetPercentage = 10; // Adjust this percentage to scroll higher or lower above the element
  
  if (targetElement) {
    const elementHeight = targetElement.getBoundingClientRect().height;
    const offset = (elementHeight * offsetPercentage) / 100;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}
