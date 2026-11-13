/* ===== CONFIGURAÇÃO (edite aqui) ===== */
const CONFIG = {
  whatsapp: "5511900000000",            // FICTÍCIO: troque pelo real (DDI+DDD+número)
  whatsappShow: "(11) 90000-0000",
  email: "contato@avwgym.example",      // FICTÍCIO
  hours: "Seg a Sex, 06h às 22h · Sáb, 08h às 14h (horário de exemplo)",
  // Fotos: images/<id>.jpg (ex.: images/musculacao.jpg). 'pos' = ponto de foco do recorte (x% y%).
  modalities: [
    { id: "musculacao", name: "Musculação",        desc: "Sala completa com equipamentos para todos os níveis de treino.", pos: "60% 50%" },
    { id: "funcional",  name: "Funcional",         desc: "Treinos de corpo inteiro para força, resistência e mobilidade.", pos: "52% 40%" },
    { id: "aulas",      name: "Aulas coletivas",   desc: "Aulas em grupo com horários fixos e orientação do professor.", pos: "56% 50%" },
    { id: "cardio",     name: "Cardio",            desc: "Esteiras, bikes e ergômetros para condicionamento.", pos: "62% 40%" },
    { id: "personal",   name: "Personal trainer",  desc: "Treino individualizado e acompanhamento próximo.", pos: "56% 50%" },
    { id: "mobilidade", name: "Mobilidade",        desc: "Alongamento e mobilidade para treinar melhor e se recuperar.", pos: "52% 45%" },
  ],
  // VALORES FICTÍCIOS
  plans: [
    { name: "Musculação", price: 99,  hi: false, items: ["Acesso à sala de musculação", "Área de cardio", "Avaliação física inicial"] },
    { name: "Musculação + Aulas", price: 149, hi: true, items: ["Tudo do plano Musculação", "Aulas coletivas", "Funcional e mobilidade"] },
    { name: "Completo", price: 249, hi: false, items: ["Tudo do plano anterior", "Acompanhamento de personal", "Treino individualizado"] },
  ],
  schedule: [ // HORÁRIOS FICTÍCIOS
    { name: "Funcional",       days: "Seg, Qua e Sex", time: "07h · 12h · 19h" },
    { name: "Aulas coletivas", days: "Ter e Qui",      time: "08h · 18h · 20h" },
    { name: "Mobilidade",      days: "Seg e Qui",      time: "09h · 20h" },
    { name: "Treino livre",    days: "Todos os dias",  time: "Horário de funcionamento" },
  ],
};

const $ = (s) => document.querySelector(s);
const brl = (n) => "R$ " + n.toLocaleString("pt-BR");

$("#modList").innerHTML = CONFIG.modalities.map(m =>
  `<li><a class="gcard" href="#planos" aria-label="${m.name}">
    <img src="images/${m.id}.jpg" alt="" loading="lazy" style="object-position:${m.pos}" onerror="this.remove()">
    <span class="gcard__info"><span class="display gcard__n">${m.name}</span><span class="gcard__d">${m.desc}</span></span></a></li>`).join("");

$("#planList").innerHTML = CONFIG.plans.map(p =>
  `<li class="plan ${p.hi ? "plan--hi" : ""}"><h3 class="display">${p.name}</h3>
    <p class="display plan__price">${brl(p.price)}<small> /mês</small></p>
    <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
    <a class="btn" data-wa="Olá! Tenho interesse no plano ${p.name} da AVW Gym." href="#contato">Quero este plano</a></li>`).join("");

$("#schedList").innerHTML = CONFIG.schedule.map(s =>
  `<li><b class="display">${s.name}</b><span>${s.days}</span><em>${s.time}</em></li>`).join("");

$("#hours").textContent = CONFIG.hours;
$("#waShow").textContent = "WhatsApp " + CONFIG.whatsappShow;
$("#mailShow").textContent = CONFIG.email;

/* links de contato */
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(a.dataset.wa)}`;
  a.target = "_blank"; a.rel = "noopener";
});
document.querySelectorAll("[data-mail]").forEach(a => {
  a.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Contato pelo site")}`;
});

/* menu mobile */
const menuBtn = $("#menuBtn"), menu = $("#menu");
function setMenu(open) {
  menu.hidden = !open;
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "Fechar" : "Menu";
  document.body.style.overflow = open ? "hidden" : "";
}
menuBtn.addEventListener("click", () => setMenu(menu.hidden));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
window.matchMedia("(min-width:768px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
