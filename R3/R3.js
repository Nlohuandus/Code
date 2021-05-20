//containers
let generalContainer = document.createElement("div");
generalContainer.className = "generalContainer";
let imageContainer = document.createElement("div");
imageContainer.className = "imageContainer";

//images creation and properties
let image = document.createElement("img");
image.src = "surf.jpg";
image.id = "image";
let play = document.createElement("img");
play.src = "play.svg";
play.id = "play";
// modal
let modal = document.createElement("div");
modal.className = "modal";
modal.style = "display : none";
let close = document.createElement("img");
close.src = "close.svg";
close.id = "close";
modal.appendChild(close);
//modal functions
play.onclick = (e) => {
  e.preventDefault();
  modal.style = "display: flex";
  video.play();
  play.style = "display: none"
};
close.onclick = (e) => {
  e.preventDefault();
  modal.style = "display: none";
  video.pause();
  play.style = "display: flex"
};

//video
let video = document.createElement("video");
video.src = "http://techslides.com/demos/sample-videos/small.mp4";
video.controls = true;
video.id = "video";
modal.appendChild(video);
//text creation and properties
let textContainer = document.createElement("div");
textContainer.className = "textContainer";
let title = document.createElement("h1");
title.innerText = "Give the world the answer they need, become a Supernatural Partner today.";
title.id = "title"
let content = document.createElement("h4");
content.innerText =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam tempora quam accusamus mollitia iste ipsa, ipsum odit temporibus enim sequi ut magni facere ratione repellendus assumenda voluptatibus adipisci rem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam tempora quam accusamus mollitia iste ipsa, ipsum odit temporibus enim sequi ut magni facere ratione repellendus assumenda voluptatibus adipisci rem.";
content.id = "content"
  //subContainers elemnts
generalContainer.appendChild(imageContainer);
generalContainer.appendChild(textContainer);
//img elements attached to a div
imageContainer.appendChild(image);
imageContainer.appendChild(play);
//text elements
textContainer.appendChild(title);
textContainer.appendChild(content);
//elements attached to the body
document.body.appendChild(modal);
document.body.appendChild(generalContainer);
