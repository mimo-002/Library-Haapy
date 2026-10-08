const catalog = [
 {id:"section1",filter:"party",title:"🎉 زينة أعياد الميلاد والحفلات والأفراح",items:["أدوات تجميل","مدفع ورق","زينة","زينة","زينة","زينة","زينة"],emojis:["💄","🎉","🎈","🎊","🎀","✨","🥳"]},
 {id:"section2",filter:"toys",title:"🧸 ألعاب الأطفال",items:["كرات قدم","Ball","Ball","Ball","Line Up","Repoit","عرائس","شطرنج","مركبات","سكوتر","ماكينة خياطة وبازل","روبوت","عرائس","عروسة","عروسة","طيارات وتحكم عن بعد","ألعاب ألغاز","بالونات","أدوات","عجلة","حذاء الاسكيت","عربية","ليدو","مركبة","مسدس فقاعات","منفخ بالونات","زوميرا","بازل"],emojis:["⚽","🏀","🏀","🏀","🎲","🎯","🪆","♟️","🚗","🛴","🧵","🤖","🪆","👧","🧸","✈️","🧩","🎈","🪀","🚲","🛼","🚙","🎲","🚙","🫧","🎈","📯","🧩"]},
 {id:"section3",filter:"accessories",title:"💎 خرز وإكسسوارات",items:["ساعات وأساور","شمع أعياد الميلاد","شمع أعياد الميلاد","خرز","إكسسوارات","إكسسوارات","إكسسوارات"],emojis:["⌚","🕯️","🕯️","📿","💎","🎀","💍"]},
 {id:"section4",filter:"gifts",title:"🎁 هدايا",items:["بوكس هدايا فارغ","بوكس هدايا عيد الأم","بوكس هدايا عيد الأم","بوكس هدايا فارغ","بوكس هدايا"],emojis:["🎁","💝","🌷","🎀","🎁"]},
 {id:"section5",filter:"school",title:"✏️ أدوات مدرسية",items:["أوراق فلوسكاب","أدوات مدرسية","كراسات مدرسية","كشاكيل مدرسية","كشاكيل سلك مدرسية","آلة حاسبة","أدوات مدرسية","حبر","أدوات مدرسية"],emojis:["📄","✏️","📒","📔","📓","🧮","📏","🖋️","🎒"]}
];

const catalogEl=document.getElementById("catalog");
const filters=document.querySelectorAll(".filter");
const view=document.getElementById("quickView");
const closeView=document.getElementById("closeView");

function render(filter="all"){
  if(!catalogEl)return;
  catalogEl.innerHTML="";
  catalog.filter(s=>filter==="all"||s.filter===filter).forEach((section,si)=>{
    const wrap=document.createElement("section");
    wrap.className="catalog-section";
    wrap.id=section.id;
    wrap.innerHTML=`<div class="catalog-title"><h2>${section.title}</h2><span>${section.items.length} اختيار</span></div><div class="product-grid"></div>`;
    const grid=wrap.querySelector(".product-grid");
    section.items.forEach((name,i)=>{
      const card=document.createElement("article");
      card.className="product-card";
      card.style.animationDelay=`${Math.min(i*.035,.35)}s`;
      card.innerHTML=`<div class="product-visual"><span class="emoji">${section.emojis[i]||"🎁"}</span><span class="badge">${i<2?"مميز ✨":"Happy"}</span></div><div class="product-info"><h3>${name}</h3><p>اختيار لطيف من مكتبة Happy 💛</p><button type="button">اعرف التفاصيل ✨</button></div>`;
      card.querySelector("button").addEventListener("click",()=>openQuick(name,section.title.split(" ").slice(1,4).join(" "),section.emojis[i]||"🎁"));
      grid.appendChild(card);
    });
    catalogEl.appendChild(wrap);
  });
}
function openQuick(title,tag,emoji){
  if(!view)return;
  document.getElementById("quickTitle").textContent=title;
  document.getElementById("quickTag").textContent=tag;
  document.getElementById("quickEmoji").textContent=emoji;
  view.classList.add("open");view.setAttribute("aria-hidden","false");
}
function closeQuick(){if(view){view.classList.remove("open");view.setAttribute("aria-hidden","true")}}
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  render(btn.dataset.filter);
}));
if(closeView)closeView.addEventListener("click",closeQuick);
if(view)view.addEventListener("click",e=>{if(e.target===view)closeQuick()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeQuick()});
render();
