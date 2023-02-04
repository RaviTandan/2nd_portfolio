// ================typing animation====================
var typed = new Typed(".typing", {
    strings: ["", "UI/UX Designer","Web Developer", "React Developer",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// ================Aside===============================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    // console.log(navList[i])
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () 
    {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // console.log(navList[j].querySelector("a"))
                // console.log("back-section" + navList[j].querySelector("a"))
                addBackSection(j);
                // allSection[j].classList.add("back-section")
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        // console.log(this)
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section")
}
function showSection(element)
{
    // console.log(element)
    // console.log(element.getAttribute("href").split("#"))

    // const href = element.getAttribute("href").split("#")
    // target = href[1];
    // console.log(target)

    // const target = element.getAttribute("href").split("#")[1];
    // console.log(target)

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
    // console.log(element.getAttribute("href").split("#")[1])
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function ()
{
    const sectionIndex = this.getAttribute("data-section-index");
    // console.log(sectionIndex);
    // console.log(this)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerlerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerlerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerlerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

let a = document.getElementById("butn2")
a.onclick =()=>{
    setTimeout(()=>{
        a.style.background= "white"
        a.style.color= "black"
    },100)
    setTimeout(()=>{
        a.style.background= "#ff004f"
        a.style.color= "white"
    },1000)
}
