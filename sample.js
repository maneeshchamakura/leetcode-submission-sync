not_found = []
found_links = []
temp =0;
end = 1000
incr = 20
while (temp <= end) {
    url = `https://leetcode.com/api/submissions/?offset=${temp}&limit=20&lastkey=`
    temp += incr
    if (localStorage.getItem(url)) {
        // Value is in local storage
        links_array = JSON.parse(localStorage.getItem(url));
        for (var link of links_array) {
            found_links.push(link)
        }
    } else {
        // Value is not in local storage
        not_found.push(url)
    }
}
console.log(found_links)
console.log(not_found)
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Copied to clipboard: ' + text);
}
copyToClipboard("[" + found_links.join(',\n') + "]")
JSON.stringify(found_links)