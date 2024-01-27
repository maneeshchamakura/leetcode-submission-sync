if (window.location.href.startsWith("https://leetcode.com/submissions/detail/")) {
  // Execute your script
  setTimeout(function () {
    document.getElementById("edit-code-btn").click();   
  }, 5000);
}

setTimeout(function () {
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }));
  console.log("ctrl+enter invoked")
  // Adding a delay before closing the tab
  setTimeout(function () {
      window.close();
  }, 15000); // Adjust the delay (in milliseconds) as needed
}, 7000);
