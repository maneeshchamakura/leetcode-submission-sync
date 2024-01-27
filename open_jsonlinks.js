function openTabsWithDelay(urls) {
  const openNextTab = (index) => {
    if (index < urls.length) {
      const newTab = window.open(urls[index], '_blank');
      setTimeout(() => {
        newTab.close();
        openNextTab(index + 1);
      }, 5000);
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
  