const letter = `To my love 

It's 11:11  
My favourite wish, my favourite person ❤️🌙
You know what? I don't really know how to wish for something at 11:11 tonight because the only thing my heart wants is something I already had 'YOU' ❤️just like before
I know things between us aren't the same right now....😌We are not talking like we used to the little conversations have become silence nd honestly this silence hurts more than any argument🥺 I keep wanting to text you, tell you random things, share my day and talk to you like nothing ever went wrong ..I know that will not going to happen now but still I wish for that..

I know I made mistakes... I'm not going to blame  or find excuses for what I do..
 I know where I went wrong nd if I could turn back time.. I would handle things differently.... I'm truly sorry, my love🤌🏻🥺

But please don't mistake my silence for a lack of love...Even when we're not talking  you're still the person I search for in my notifications😊You're still the person I want to tell everything to 💯 You're still the one I miss in the middle of doing absolutely nothing😫😫

I don't want a relationship where we never fight..I want a relationship where even after a fight, we don't forget how much we mean to each other nd how much we love each love... I want us to learn, grow, understand nd choose each other again and again till the end 🤞🏻♾️ 

I miss being your person😭🤌🏻 I miss being the reason behind your smile😌 I miss our silly conversations, our teasing, our little moments and even the smallest things that I probably never appreciated enough...

If I could make one wish tonight, it wouldn't be for expensive gifts, perfect days or a fairytale relationship... It would simply be for another chance to love you better, understand you deeper and create a thousand more beautiful memories with you❤️🤞🏻🫠

I'm not asking you to forget what happened...🙃 I'm just asking you not to give up on what we have

Among all the wishes people make at 11:11, mine has only four letters.. US ❤️

I love you, more than my ego could ever explain ❤️😚I don't want to be right and lose you.. I want us to be okay again🤌🏻🩹

Can we please find our way back to each other? Can we start again??🥺❤️`;

const reasons = [
  "Because even ordinary conversations with you feel special.",
  "Because your presence can make a difficult day feel lighter.",
  "Because I can be silly and completely myself around you.",
  "Because you have a way of making little moments memorable.",
  "Because I love hearing about the small details of your day.",
  "Because your smile is one of my favourite sights.",
  "Because we have memories that still make me smile.",
  "Because even when I am quiet, there is so much I want to tell you.",
  "Because I want to keep learning how to love you better.",
  "Because I still look forward to making new memories with you.",
  "Because, through all the imperfect days, my heart still chooses you."
];

const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const letterSection = document.getElementById("letterSection");
const reasonsSection = document.getElementById("reasonsSection");
const endingSection = document.getElementById("endingSection");
const letterText = document.getElementById("letterText");
const reasonsGrid = document.getElementById("reasonsGrid");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
function revealLetter() {
  envelope.classList.add("open");
  openLetter.disabled = true;
  openLetter.textContent = "Opening your letter… ♡";
  setTimeout(() => {
    letterSection.classList.remove("hidden");
    letterText.textContent = letter;
    letterSection.scrollIntoView({ behavior: "smooth" });
    openLetter.disabled = false;
    openLetter.innerHTML = 'Letter opened <span>♡</span>';
  }, 650);
}
openLetter.addEventListener("click", revealLetter);
envelope.addEventListener("click", revealLetter);
envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); revealLetter(); }
});

reasons.forEach((reason, index) => {
  const card = document.createElement("button");
  card.className = "reason-card";
  card.type = "button";
  card.setAttribute("aria-expanded", "false");
  card.innerHTML = `<span class="number">NO. ${String(index + 1).padStart(2, "0")}</span><span class="heart">♡</span><span class="hint">Tap to open</span>`;
  card.addEventListener("click", () => {
    const isOpen = card.classList.toggle("revealed");
    card.setAttribute("aria-expanded", String(isOpen));
    card.querySelector(".hint").textContent = isOpen ? reason : "Tap to open";
    card.querySelector(".heart").textContent = isOpen ? "♥" : "♡";
  });
  reasonsGrid.appendChild(card);
});

document.getElementById("toReasons").addEventListener("click", () => {
  reasonsSection.classList.remove("hidden");
  reasonsSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("toEnding").addEventListener("click", () => {
  endingSection.classList.remove("hidden");
  endingSection.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("restart").addEventListener("click", () => {
  letterSection.classList.add("hidden");
  reasonsSection.classList.add("hidden");
  endingSection.classList.add("hidden");
  envelope.classList.remove("open");
  openLetter.innerHTML = 'Open your little letter <span>♡</span>';
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});

const heartsLayer = document.querySelector(".floating-hearts");
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "float-heart";
  heart.textContent = Math.random() > .45 ? "♡" : "✧";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 15}px`;
  const duration = 9 + Math.random() * 8;
  heart.style.animationDuration = `${duration}s`;
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
for (let i = 0; i < 9; i++) setTimeout(createHeart, i * 500);
setInterval(createHeart, 1500);
