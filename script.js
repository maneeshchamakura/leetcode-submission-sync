function openTabWithDelay(goto_url, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            chrome.tabs.create({ url: goto_url }, (tab) => {
                console.log('inside submission page');
                resolve();
            });
        }, delay);
    });
}

async function buttonClick() {
    const subUrls = [
        "https://leetcode.com/submissions/detail/269544800/",
        "https://leetcode.com/submissions/detail/1156873968/"
    ];

    let delay = 2000;

    for (const url of subUrls) {
        await openTabWithDelay(url, delay);
        delay += 10000;
    }
}

document.getElementById('myButton').addEventListener('click', buttonClick);
