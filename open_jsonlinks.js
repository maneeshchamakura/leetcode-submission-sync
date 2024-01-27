function openTabsWithDelay(urls) {
    const openNextTab = (index) => {
      if (index < urls.length) {
        window.open(urls[index], '_blank');
        setTimeout(() => {
          openNextTab(index + 1);
        }, 3000);
        // Adding a delay before closing the tab
      setTimeout(function () {
          window.close();
      }, 15000); 
      }
    };
  
    openNextTab(0);
  }
  
  sub_urls = []
  temp =1020;
  while (temp <= 1740) {
    url = `https://leetcode.com/api/submissions/?offset=${temp}&limit=20&lastkey=`
    temp += 20
    sub_urls.push(url)
  }
  // Call the function with your list of URLs
  openTabsWithDelay(sub_urls);
  