var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName('tab-content');


function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of  tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
   
}

let sidebar = document.getElementById("sidemenu");

function openmenu(){
    sidebar.style.right = "0";
}
function closemenu(){
    sidebar.style.right = "-400px";
}

let btns = document.querySelectorAll('.btn');

// Loop through each button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      this.classList.add('sher');  // 'this' refers to the clicked button

        // Remove class after 300ms to reset
        setTimeout(() => {
            this.classList.remove('sher');
        }, 300);
    });
}
    


