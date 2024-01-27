const delayBetweenRequests = 2000; // 1000 milliseconds = 1 second
complete_data = []

function makeRequest(index) {
    url = `https://leetcode.com/api/submissions/?offset=${index}&limit=20&lastkey=`
    console.log(url)
}

function makeRequestsSequentially() {
  let index = 0;

  function makeNextRequest() {
    if (index <= 100) {
      makeRequest(index);
      index += 20;
      setTimeout(makeNextRequest, delayBetweenRequests);
    }
  }

  makeNextRequest();
}

// Call the function to start making requests with delays
makeRequestsSequentially();

