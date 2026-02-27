function whatsappLink(numberE164, message){
  const encoded = encodeURIComponent(message || "");
  return `https://wa.me/${numberE164}?text=${encoded}`;
}
function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href === path) a.classList.add("active");
  });
}
document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();
  const waNumber = "2348130814626";
  const defaultMsg =
  "Hi, I’d like to book a marriage therapy session with Marriage Catalyst.";
  document.querySelectorAll("[data-whatsapp]").forEach(el=>{
    el.setAttribute("href", whatsappLink(waNumber, defaultMsg));
    el.setAttribute("target","_blank");
    el.setAttribute("rel","noopener");
  });
  const intakeForm = document.querySelector("#intakeForm");
  if(intakeForm){
    intakeForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(intakeForm).entries());
      const summary =
`*New Intake Request — Marriage Catalyst*
*Name:* ${data.name || ""}
*Email:* ${data.email || ""}
*Phone:* ${data.phone || ""}
*Session Type:* ${data.session || ""}
*Preferred Days:* ${data.days || ""}
*Main Concern:*
${data.concern || ""}`;
      window.open(whatsappLink(waNumber, summary), "_blank", "noopener");
      intakeForm.reset();
    });
  }
});