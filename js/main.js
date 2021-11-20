let slider = document.querySelector("#myRange");
let selector = document.querySelector("#selector");
let pageViews = document.querySelector("#pageViews");
let progressBar = document.querySelector("#progressBar");
let amount = document.querySelector("#amount");
let toggle = document.querySelector("#inner-toggle");
let toggleBtn = document.querySelector("#toggleBtn");
let pageViewsArray = ["10k", "50k", "100k", "500k", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

/*slider.addEventListener('input', function () {
    updateValue();
    pageViews.innerHTML = pageViewsArray[slider];
});*/

function updateValue() {
    if (isYearly) {
        let num = ((slider.value * 2 * 16) / 100);
        
        amount.innerHTML = "$" + (num - ((num * 25))/100).toFixed(2) + "<span> /year</span>";
    } else {
        amount.innerHTML = "$" + ((slider.value * 2 * 16) / 100).toFixed(2) + "<span> /month</span>";;
    }
}

toggleBtn.addEventListener("click", function (e) {
    if (toggleBtn.checked == true) {
        toggle.classList.add("active");
        isYearly = true;
        
    } else {
        toggle.classList.remove("active");
        isYearly = false;
    }
    updateValue();
});

pageViews.innerHTML = (slider.value * 2) + "K Pageviews";
amount.innerHTML = "$" + ((slider.value * 2 * 16) / 100).toFixed(2) + "<span> /month</span>";

slider.oninput = function () {
    pageViews.innerHTML = (this.value * 2) + "K Pageviews";
    //amount.innerHTML = ((this.value * 2 * 16) / 100).toFixed(2) + "<span> /month</span>";
    console.log(isYearly);
    updateValue();
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";
}