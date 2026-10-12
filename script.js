const caseStudies = {
  beauty: {
    kicker: "CASE STUDY 01 / BEAUTY & SOCIAL",
    title: "I studied a beauty brand's Instagram. The feed told me more than its ads.",
    intro: "The feed is a brand experience in its own right. Before a person sees a product page or an ad, the grid can signal who the brand is for, what it values, and whether its world feels relevant to them.",
    audit: "Map the content mix across product education, creator content, customer proof, trends and brand storytelling. Check visual consistency, comment quality, saves and shares where visible, and whether the profile gives a new visitor a clear next step.",
    gap: "A feed can look polished but feel interchangeable. Too many product shots can make it hard to understand the brand's point of view; trend-led posts can attract attention without building a reason to choose the product.",
    action: "Build a simple content matrix with a clear role for each format. Test creator-led routines against product-first creative, add useful proof such as texture or wear demonstrations, and judge each format by its job rather than likes alone."
  },
  convenience: {
    kicker: "CASE STUDY 02 / POSITIONING & CATEGORY",
    title: "Two brands sell convenience. Why does one feel more entertaining?",
    intro: "When products solve a similar need, the experience around the product can become the differentiator. Language, humour, pacing, characters and recurring creative devices can make the same functional promise feel very different.",
    audit: "Compare the brands' most recent social posts, ad hooks, recurring formats, creator choices and calls to action. Separate what each brand promises from how it makes that promise feel, then check whether the tone is consistent across channels.",
    gap: "A funny post can earn attention without making the brand memorable. A competitor can also copy a trend or format quickly, so a style built only on borrowed internet humour may be easy to imitate.",
    action: "Define a recognisable creative territory and three repeatable content formats. Test a functional message against a more entertaining execution, then compare watch time, shares, branded searches or clicks where data is available."
  },
  amul: {
    kicker: "CASE STUDY 03 / CULTURE & BRAND VOICE",
    title: "Amul doesn't need a new personality every time the news changes.",
    intro: "Real-time marketing asks a brand to respond to the moment without losing itself in it. The interesting question is how a recognisable voice can stay consistent while the subject, reference and audience conversation keep changing.",
    audit: "Review a sample of topical creatives across different events. Look for repeated visual cues, language, humour, cultural references and the speed at which the idea connects the news back to the brand. Also ask whether the reference is clear without a long explanation.",
    gap: "Fast reactions can miss context, age badly or make a brand appear to comment on everything. Relevance alone is not enough if the creative feels forced or the brand connection is weak.",
    action: "Use a simple editorial filter: is the moment relevant to the audience, can the brand add a distinctive point of view, and can the idea be understood quickly? Keep a consistent voice guide, define approval boundaries and review which posts earn meaningful conversation."
  }
};

const dialog = document.querySelector("#case-dialog");
const closeDialog = () => {
  if (dialog && dialog.open) dialog.close();
};

document.querySelectorAll("[data-case]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = caseStudies[button.dataset.case];
    if (!item || !dialog) return;
    document.querySelector("#dialog-kicker").textContent = item.kicker;
    document.querySelector("#dialog-title").textContent = item.title;
    document.querySelector("#dialog-intro").textContent = item.intro;
    document.querySelector("#dialog-audit").textContent = item.audit;
    document.querySelector("#dialog-gap").textContent = item.gap;
    document.querySelector("#dialog-action").textContent = item.action;
    if (typeof dialog.showModal === "function") dialog.showModal();
  });
});

document.querySelector(".dialog-close")?.addEventListener("click", closeDialog);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
