/* Store new preference */
document.querySelector('.hour12').addEventListener('change', _ => {
    chrome.storage.sync.set({
        'hour12': document.querySelector('.hour12').checked
    }, function () {
    });
});

/* Tick checkbox on load if it's stored in storage */
chrome.storage.sync.get(['hour12'], function(result) {
    document.querySelector('.hour12').checked = result.hour12;
});

/* Reflect changes made through popup in other tabs */
chrome.storage.onChanged.addListener(_ => {
    chrome.storage.sync.get(['hour12'], function(result) {
        document.querySelector('.hour12').checked = result.hour12;
    });
});

/* Store new preference */
document.querySelectorAll('.theme').forEach(element => element.addEventListener('change', element => {
    console.log('changed')
    console.log(element.srcElement.value)
    chrome.storage.sync.set({
        'theme': element.srcElement.value
    }, function () {
    });
}));
