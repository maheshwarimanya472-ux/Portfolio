const profiles = {
  recruiter: {
    kicker:"PROFILE 01 / FOR RECRUITERS",title:"A marketer who asks why, then gets to work.",
    intro:"I'm Manya Maheshwari, a digital marketing professional working across content strategy, SEO, social media, website content and analytics. I like pairing clear communication with curious, evidence-led thinking.",
    art:"THE<br>WORK",contentKicker:"THE PROFESSIONAL CUT",contentTitle:"Experience & selected work",cta:"VIEW MY WORK ↓",
    projects:[
      {tag:"DIGITAL MARKETING · SEO",title:"EndureAir Systems",desc:"Website content, SEO, LinkedIn and Instagram planning, newsletters, market research and performance insights.",art:"CONTENT<br>MEETS<br>CLARITY",tone:"thumb-red"},
      {tag:"SEO · ANALYTICS",title:"InceptiveSolutions",desc:"On-page and off-page SEO, keyword research, website content and performance tracking.",art:"SEARCH<br>WITH<br>INTENT",tone:"thumb-blue"},
      {tag:"CONTENT DESIGN",title:"iQuanta",desc:"Writing and designing social content with strong hooks, clear messaging and audience-friendly structure.",art:"MAKE IT<br>STICK",tone:"thumb-gold"}
    ],
    cases:["beauty","convenience","amul"],
    details:[
      {title:"Experience",body:"Digital Marketing Executive · EndureAir Systems<br>Content, SEO, social media, analytics, research and marketing communication.<br><br>Social Media Moderator · iQuanta<br>Content moderation, community engagement and social content."},
      {title:"Skills & tools",tags:["SEO","Social media","Content writing","Google Analytics","Search Console","Google Ads","Meta Ads","Market research","Reporting","Email marketing"]},
      {title:"How I work",body:"Curious by default. I start with the audience and context, look for the real problem, develop ideas, and use performance signals to decide what to improve."}
    ]
  },
  connector:{
    kicker:"PROFILE 02 / FOR CONNECTORS",title:"Good conversations can become good work.",
    intro:"I'm interested in meeting people who care about brands, culture, content and the decisions behind growth. This space is for shared ideas, collaborations and work that benefits from a fresh perspective.",
    art:"LET'S<br>CONNECT",contentKicker:"THE PEOPLE CUT",contentTitle:"What I'm curious about",cta:"START A CONVERSATION ↗",
    projects:[
      {tag:"COLLABORATION",title:"Content with a point of view",desc:"Working with teams to turn a broad brief into clear, relevant content that sounds like the brand.",art:"FIND<br>THE<br>ANGLE",tone:"thumb-blue"},
      {tag:"BRAND THINKING",title:"Ideas worth discussing",desc:"Independent brand breakdowns that open up questions about positioning, audience and creative choices.",art:"ASK<br>BETTER<br>QUESTIONS",tone:"thumb-violet"},
      {tag:"DIGITAL",title:"Creative meets performance",desc:"Bringing content instincts and analytics together to learn what resonates and what deserves another look.",art:"MAKE<br>IT<br>MATTER",tone:"thumb-green"}
    ],
    cases:["beauty","convenience","amul"],
    details:[
      {title:"Open to",body:"Marketing collaborations, content projects, thoughtful conversations, freelance opportunities and meeting people building interesting brands."},
      {title:"Topics I enjoy",tags:["Brand strategy","Digital culture","Content","Social media","Consumer behaviour","Marketing analytics","Creative testing"]},
      {title:"Reach me",body:"Have a project, idea or perspective to exchange? I'd be glad to hear about it.<br><br><a href='mailto:maheshwarimanya472@gmail.com'>maheshwarimanya472@gmail.com ↗</a>"}
    ]
  },
  marketer:{
    kicker:"PROFILE 03 / FOR MARKETERS",title:"The post is the output. The thinking is the story.",
    intro:"I study what brands publish, how their choices shape perception, and where the strategy could be sharper. These are independent case studies built around observations, possible gaps and what I'd test if I were on the team.",
    art:"THINK<br>IN<br>PUBLIC",contentKicker:"THE STRATEGY CUT",contentTitle:"Ideas, audits & experiments",cta:"EXPLORE THE ANALYSIS ↓",
    projects:[
      {tag:"BRAND · INSTAGRAM",title:"Beauty brand feed audit",desc:"What a brand's Instagram reveals about its audience, content mix, product story and positioning.",art:"THE<br>BEAUTY<br>EDIT",tone:"thumb-pink",case:"beauty"},
      {tag:"CATEGORY · POSITIONING",title:"Convenience vs entertainment",desc:"How two similar promises can feel different through tone, creative devices and repetition.",art:"SAME<br>NEED.<br>NEW FEEL.",tone:"thumb-blue",case:"convenience"},
      {tag:"CULTURE · BRAND VOICE",title:"Amul's consistent personality",desc:"How a familiar voice can respond to changing moments without becoming a different brand each time.",art:"TOPICAL<br>BY<br>DESIGN",tone:"thumb-gold",case:"amul"}
    ],
    cases:["beauty","convenience","amul"],
    details:[
      {title:"My framework",body:"Observe the category and audience. Question what the brand is assuming. Find a useful gap. Propose an action and define what signal could show whether it worked."},
      {title:"The toolkit",tags:["Competitor analysis","Audience research","Content strategy","SEO","Google Analytics","Social analytics","Meta Ads","Google Ads","Creative testing"]},
      {title:"What I want to explore next",body:"Growth and performance marketing, deeper analytics, consumer behaviour, creative effectiveness and the connection between brand memory and measurable action."}
    ]
  }
};
const cases={
 beauty:{kicker:"CASE STUDY 01 / BEAUTY & SOCIAL",title:"I studied a beauty brand's Instagram. The feed told me more than its ads.",intro:"A brand's feed is an experience in its own right. Before a visitor sees a product page or an ad, the grid can signal who the brand is for, what it values and whether its world feels relevant.",audit:"Map the content mix across product education, creator content, customer proof, trends and brand storytelling. Check visual consistency, comment quality, saves and shares where visible, and whether a new visitor gets a clear next step.",gap:"A feed can look polished but feel interchangeable. Too many product shots can make the brand's point of view hard to spot; trend-led posts can earn attention without building a reason to choose the product.",action:"Build a content matrix with a clear role for each format. Test creator-led routines against product-first creative, add useful product proof, and judge each format by its job rather than likes alone."},
 convenience:{kicker:"CASE STUDY 02 / POSITIONING & CATEGORY",title:"Two brands sell convenience. Why does one feel more entertaining?",intro:"When products solve a similar need, the experience around the product can become the differentiator. Language, humour, pacing and recurring creative devices can make the same functional promise feel different.",audit:"Compare recent social posts, ad hooks, recurring formats, creator choices and calls to action. Separate what each brand promises from how it makes that promise feel, then check consistency across channels.",gap:"A funny post can earn attention without making the brand memorable. A style built only on borrowed internet humour can also be easy for competitors to imitate.",action:"Define a recognisable creative territory and repeatable content formats. Test a functional message against a more entertaining execution, then compare watch time, shares, branded searches or clicks where data is available."},
 amul:{kicker:"CASE STUDY 03 / CULTURE & BRAND VOICE",title:"Amul doesn't need a new personality every time the news changes.",intro:"Real-time marketing asks a brand to respond to the moment without losing itself. The question is how a recognisable voice stays consistent while the subject and conversation keep changing.",audit:"Review topical creatives across different events. Look for repeated visual cues, language, humour, cultural references and how quickly the idea connects the news back to the brand.",gap:"Fast reactions can miss context, age badly or make a brand appear to comment on everything. Relevance is not enough if the creative feels forced or the brand connection is weak.",action:"Use an editorial filter: is the moment relevant to the audience, can the brand add a distinctive point of view, and can the idea be understood quickly? Keep voice guidelines and review which posts earn meaningful conversation."}
};
const home=document.querySelector("#home"),profileScreen=document.querySelector("#profiles"),dashboard=document.querySelector("#dashboard"),caseDialog=document.querySelector("#case-dialog");
function goTo(screen){[home,profileScreen,dashboard].forEach(el=>{el.classList.remove("active")});if(screen==="home")home.classList.add("active");else if(screen==="profiles")profileScreen.classList.add("active");else dashboard.classList.add("active");window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}
document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>goTo(button.dataset.go)));
function cardMarkup(item,index){return `<button class="shelf-card" ${item.caseId?`data-open-case="${item.caseId}"`:""} aria-label="Explore ${item.title.replace(/"/g,"&quot;")}"><div class="shelf-thumb ${item.tone}"><span>${item.art}</span></div><div class="shelf-meta">${item.tag}</div><h4>${item.title}</h4><p>${item.desc}</p></button>`}
function renderProfile(id){const p=profiles[id];if(!p)return;document.querySelector("#dashboard-kicker").textContent=p.kicker;document.querySelector("#dashboard-title").textContent=p.title;document.querySelector("#dashboard-intro").textContent=p.intro;document.querySelector("#dashboard-art-word")?.replaceChildren();document.querySelector("#content-kicker").textContent=p.contentKicker;document.querySelector("#content-title").textContent=p.contentTitle;document.querySelector("#dashboard-cta").textContent=p.cta;document.querySelector("#shelf-projects").innerHTML=p.projects.map((x,i)=>cardMarkup({...x,caseId:x.case},i)).join("");document.querySelector("#shelf-cases").innerHTML=p.cases.map((id,i)=>{const c=cases[id];return cardMarkup({caseId:id,tag:["BRAND / SOCIAL","POSITIONING","CULTURE / CONTENT"][i],title:c.title,desc:c.intro,art:["THE<br>BEAUTY<br>EDIT","SAME NEED.<br>DIFFERENT FEEL.","TOPICAL.<br>TIMELESS."][i],tone:["thumb-pink","thumb-blue","thumb-gold"][i]},i)}).join("");document.querySelector("#detail-grid").innerHTML=p.details.map(d=>`<article class="detail-panel"><h4>${d.title}</h4>${d.body?`<p>${d.body}</p>`:""}${d.tags?`<div class="tag-list">${d.tags.map(t=>`<span>${t}</span>`).join("")}</div>`:""}</article>`).join("");dashboard.dataset.profile=id;goTo("dashboard")}
document.querySelectorAll("[data-profile]").forEach(button=>button.addEventListener("click",()=>renderProfile(button.dataset.profile)));
document.addEventListener("click",event=>{const button=event.target.closest("[data-open-case]");if(!button)return;const c=cases[button.dataset.openCase];if(!c)return;document.querySelector("#dialog-kicker").textContent=c.kicker;document.querySelector("#dialog-title").textContent=c.title;document.querySelector("#dialog-intro").textContent=c.intro;document.querySelector("#dialog-audit").textContent=c.audit;document.querySelector("#dialog-gap").textContent=c.gap;document.querySelector("#dialog-action").textContent=c.action;if(caseDialog.showModal)caseDialog.showModal()});
document.querySelector(".dialog-close")?.addEventListener("click",()=>caseDialog.close());caseDialog?.addEventListener("click",event=>{if(event.target===caseDialog)caseDialog.close()});
document.querySelector(".sound-toggle")?.addEventListener("click",event=>{const button=event.currentTarget;const isOn=button.dataset.sound!=="on";button.dataset.sound=isOn?"on":"off";button.textContent=isOn?"SOUND ON":"SOUND OFF";button.title=isOn?"Sound effects enabled":"Sound effects disabled";});
document.addEventListener("keydown",event=>{if(event.key==="Enter" && document.activeElement===document.body && home.classList.contains("active")){goTo("profiles");}});
document.querySelector("#year").textContent=new Date().getFullYear();
const portraitFrame=document.querySelector(".portrait-frame");
if(portraitFrame){portraitFrame.setAttribute("tabindex","0");portraitFrame.setAttribute("aria-label","Portrait styling preview. Hover or focus to preview the casual look.");}