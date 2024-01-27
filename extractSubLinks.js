x = document.querySelector('body > div:nth-child(1)');
if(x == null) {
    x = document.querySelector('body > pre')
}
result = JSON.parse(x.innerText);
submissions_dump = result['submissions_dump']
urls_dict = {}
for (var submission of submissions_dump) {
    if (submission['status_display'].toLowerCase() === "accepted") {
        url = `https://leetcode.com${submission['url']}`
        title_slug = submission['title_slug']
        if (title_slug in urls_dict) {
            continue;
        }
        urls_dict[title_slug] = url
    }
}
values = Object.values(urls_dict)
console.log(values)
// Convert the object to a string and store it in local storage
localStorage.setItem(window.location.href, JSON.stringify(values));