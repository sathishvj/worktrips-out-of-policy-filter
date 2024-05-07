function removeOutOfPolicyTiles() {
  const hotelTiles = document.querySelectorAll('accommodation-hotel-tile');
  const outOfPolicyText = 'Out of travel policy';

  console.log("Number of hotelTiles: ", hotelTiles.length);

  hotelTiles.forEach(tile => {
	if (tile.innerHTML.includes(outOfPolicyText)) tile.remove();
  });
}

// Check for changes to the DOM (optional for dynamic sites)
const observer = new MutationObserver(removeOutOfPolicyTiles);
observer.observe(document.body, { childList: true, subtree: true }); 

// Run initially on page load
removeOutOfPolicyTiles();
