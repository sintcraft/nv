function no() {
   let elem = document.getElementById("no");
   let newCords = randomizerCords(resolveCords(elem));
   console.log(window.innerHeight/7, window.innerWidth/10, newCords.x, newCords.y);
   if(newCords.x > window.innerWidth - window.innerWidth/10){
      newCords.x = newCords.x - window.innerWidth/11;
   }
   if(newCords.y > window.innerHeight - window.innerHeight/10){
      newCords.y = newCords.y - window.innerHeight/11;
   }
   setCords(elem, newCords);
}

function si() {
   document.getElementById("yes").style.top = "45vh";
   document.getElementById("shadow").style.width = "100%";
   document.getElementById("video").play();
   setTimeout(function() {
      document.getElementById("video").style.display = "block";
   }, 2000);
   setTimeout(function() {
      document.getElementById("yes").style.opacity = "0%";
   }, 3000);

}

const resolveCords = (elem) => {
   let rect = elem.getBoundingClientRect();
   return {
      x: rect.left,
      y: rect.top
   };
}

const randomizerCords = ({ x, y }) => {
   return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
   };
}

const setCords = (elem, { x, y }) => {
   elem.style.left = x + "px";
   elem.style.top = y + "px";
}