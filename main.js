let firstClick = true; //check first click element or not

const items = document.querySelectorAll('.nav ul li');

const handleClick = function(event) {
  event.preventDefault(); 
  if (firstClick) { // if first impelemention event
    firstClick = false; 
    items.forEach(i => {
      resetLinkColor(i);
    });
    this.classList.add('active-list');
    changeLinkColor(this);
  } else {
    if (!this.classList.contains('active-list')) {
      items.forEach(i => {
        i.classList.remove('active-list');
        resetLinkColor(i);
      });
      this.classList.add('active-list');
      changeLinkColor(this);
    }
  }
};
// loop element items (li) when implemention event ("click") implemention function (handle click)
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// link = span + icon
function changeLinkColor(liElement) {
  const link = liElement.querySelector('a');
  link.style.color = '#181f26';
}


function resetLinkColor(liElement) {
  const link = liElement.querySelector('a');
  link.style.color = 'white'; 
}

const User_Profile_content = document.getElementById("User-Profile-content");
const Favourite_content = document.getElementById("Favourite-content");
const Reviews_content = document.getElementById("Reviews-content");
const Posts_content = document.getElementById("Posts-content");

        
        items[0].addEventListener("click", function() {
            
            Favourite_content.classList.add("hidden");
            Reviews_content.classList.add("hidden");
            Posts_content.classList.add("hidden");
            User_Profile_content.classList.remove("hidden");
        });

        items[1].addEventListener("click", function() {
            User_Profile_content.classList.add("hidden");
            Favourite_content.classList.remove("hidden");
            Reviews_content.classList.add("hidden");
            Posts_content.classList.add("hidden");
           
        });
        items[2].addEventListener("click", function() {
            User_Profile_content.classList.add("hidden");
            Favourite_content.classList.add("hidden");
            Reviews_content.classList.remove("hidden");
            Posts_content.classList.add("hidden");
            
        });
        items[3].addEventListener("click", function() {
            User_Profile_content.classList.add("hidden");
            Reviews_content.classList.add("hidden");
            Posts_content.classList.remove("hidden");
            Favourite_content.classList.add("hidden");
        });


const allStar = document.querySelectorAll('.rating .star');

allStar.forEach((item , idx)=> {
    item.addEventListener('click' , function() {
        allStar.forEach(i=> {
            i.classList.replace('bxs-star' ,'bx-star' )
        })
        for(let i = 0 ; i < allStar.length ; i++){
            if(i<= idx)
                {
                    allStar[i].classList.replace('bx-star' , 'bxs-star')
                }
        }
    })
})