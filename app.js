// get user data 
let users=[
    {profilePic:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    displayPic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    pendingMessage:4, 
    location: "Qatar, Station", 
    name:"Xavi",age:20, 
    interests:['Moeny'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    displayPic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage:5, 
    location: "India, Dilli", 
    name:"Haunsu",age:20, 
    interests:['Drive, Fising, Gaming'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    displayPic:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage:7, 
    location: "Brazil, Lumois", 
    name:"Karim",age:30, 
    interests:['Work, Hunting'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    displayPic:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage:2, 
    location: "Sudi Arab, Riad", 
    name:"Karmia",age:24, 
    interests:['Cars, painting'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},


{profilePic:"https://images.mubicdn.net/images/cast_member/511484/cache-353260-1531030458/image-w856.jpg?size=800x", 
    displayPic:"https://wallpapercave.com/wp/wp8919910.jpg", 
    pendingMessage:4, 
    location: "Argentina", 
    name:"Messi",age:38, 
    interests:['FootBall, Robry'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    displayPic:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage:1, 
    location: "Canada, Jamisa Land", 
    name:"Dony",age:25, 
    interests:['Waking, Vloging'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    displayPic:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBvcnRyYWl0fGVufDB8fDB8fHww", 
    pendingMessage:2, 
    location: "Franch", 
    name:"Gruid",age:27, 
    interests:['Money, Dog'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
},
{profilePic:"https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    displayPic:"https://images.unsplash.com/photo-1608355023471-c13d29ac8fbf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    pendingMessage:12, 
    location: "Nepal", 
    name:"Sapra",age:30, 
    interests:['Eating, Travaling'],
    bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente quas corporis eius!',
    isFriend:null,
}
]


function select(element){
    return document.querySelector(element)
}

let curr=0;
let isAnimating=false;

function setData(index){
  select('.prflimg img').src=users[index]?.profilePic;
    select('.badge h5').textContent=users[index].pendingMessage;
    select('.location h3').textContent=users[index].location;
    select('.name h1:nth-child(1)').textContent=users[index].name;
    select('.name h1:nth-child(2)').textContent=users[index].age;
    
    let clutter="";
    users[index].interests.forEach(function(interest){ clutter+=
        ` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        <i class="ri-quill-pen-fill"></i>
        <h3 class="text-sm tracking-tight capitalize">${interest}</h3>
        </div>`
    })
    select('.tags').innerHTML=clutter;
    
    select('.bio p').textContent=users[index].bio
}




(function setInitial(){
    select('.mainCard img').src=users[curr]?.displayPic;
    select('.incomingCard img').src=users[curr+1]?.displayPic;
  setData(curr);
    curr=2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating=true 
    let tl=gsap.timeline({
        onComplete: function(){
            isAnimating=false;
          let main= select(".mainCard");
          let incoming = select(".incomingCard");


          incoming.classList.remove("z-[2]");
          incoming.classList.add("z-[3]");
          incoming.classList.remove("incomingCard");



          main.classList.remove("z-[3]");
          main.classList.add("z-[2]");
          gsap.set(main,{
            scale:1,
            opacity:1
          })
          if(curr===users.length) curr=0;
     select(".mainCard img").src=users[curr].displayPic;

          curr++;
          main.classList.remove("mainCard");
          incoming.classList.add("mainCard");
          main.classList.add("incomingCard")

        }
    });
    tl.to(".mainCard",{
        scale:1.1,
        opacity:0,
        ease:Circ,
        duration:.9
    },"a")
    
        .from(".incomingCard",{
        scale:.9,
        opacity:0,
        ease:Circ,
        duration:1.1
    },"a")

  }

};




let deny = select('.deny');
let accept = select('.accept');
deny.addEventListener("click",function(){
    imageChange();
     setData(curr-1);
    gsap.from(".details .element",{
    y:"100%",
    opacity:0.6,
    duration:1.5,
    ease:Power4.easeInOut,
    stagger:.06
})

});
accept.addEventListener("click",function(){
    imageChange();
     setData(curr-1);
    gsap.from(".details .element",{
    y:"100%",
    opacity:0.6,
    duration:1.5,
    ease:Power4.easeInOut,
    stagger:.06
})

});


(function containerCreator(){
document.querySelectorAll(".element")
.forEach(function(element){
  let div= document.createElement("div");
  div.classList.add(`${element.classList[1]}container`,"overflow-hidden");
   div.appendChild(element);
   select(".details").appendChild(div)
})
})();

