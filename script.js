function throwConfetti() {
  const confetti = document.getElementById("confetti");
  for (let j=0; j<80; j++) {
    const piece=document.createElement("div");
    piece.classList.add("piece");
    piece.style.left=Math.random()*100+"vw";
    piece.style.background=`hsl(${Math.random()*360},90%,60%)`;
    piece.style.animationDuration=2+Math.random()*3+"s";
    piece.style.width=Math.random()*8+6+"px";
    piece.style.height=Math.random()*14+8+"px";
    confetti.appendChild(piece);
    setTimeout(()=>piece.remove(),5000);
  }
}
window.onload = ()=>{throwConfetti();}