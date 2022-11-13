const click = (clazz) => {
    const buttons = document.getElementsByClassName(clazz);
    for (const button of buttons) {
        button.click();
        console.log("Created by Suhas Sumukh  Ads Closed");
    }
}
setInterval(() => {
    //console.log("Ads Remover On " + new Date());
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");

}, 300);
console.log("Created by Suhas Sumukh  Ads Closed");