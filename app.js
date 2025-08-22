const dict = {
  th: {
    name: 'พัฒนะ ป้อมทอง',
    role: 'นักศึกษาฝึกงานสายซอฟต์แวร์ / UX/UI',
    badge: 'กำลังมองหาโอกาสฝึกงาน',
    about_title: 'เกี่ยวกับฉัน',
    about_body: 'นักศึกษาวิทยาการคอมพิวเตอร์ สนใจพัฒนาแอปและการออกแบบประสบการณ์ผู้ใช้ (UX/UI) ถนัด Python และใช้ Figma ได้อย่างชำนาญ เป็นคนรับผิดชอบ เรียนรู้เร็ว และชอบสร้างงานที่ใส่ใจผู้ใช้',
    profile_title: 'ข้อมูลส่วนตัว',
    location: 'อยุธยา, ประเทศไทย',
    skills_title: 'ทักษะ',
    skill_mobile: 'Mobile App (พื้นฐาน)',
    soft_team: 'ทำงานเป็นทีม',
    soft_fast: 'เรียนรู้เร็ว',
    soft_res: 'รับผิดชอบ',
    edu_title: 'ประวัติการศึกษา',
    edu_bu_line1: 'มหาวิทยาลัยกรุงเทพ คณะเทคโนโลยีสารสนเทศและนวัตกรรม',
    edu_bu_line2: 'สาขาวิทยาการคอมพิวเตอร์ (GPA 3.15)',
    proj_title: 'ผลงาน / โปรเจกต์',
    p1_title: 'ออกแบบแอปซื้อของ (Figma)',
    p1_desc: 'ออกแบบ UX/UI ครบ: Wireframe → Prototype → UI พร้อมค้นหา ตะกร้า และเช็คเอาต์',
    p2_title: 'แอปสุ่มเมนูอาหาร (Mobile)',
    p2_desc: 'แอปช่วยสุ่มเมนูพร้อมประวัติและฟิลเตอร์ประเภทอาหาร',
    interests_title: 'ความสนใจ',
    interests_body: 'UX/UI Design, Web/Mobile App, เทคโนโลยีใหม่ๆ',
  },
  en: {
    name: 'Phatthana Pomthong',
    role: 'Software / UX/UI Intern (Student)',
    badge: 'Open to Internship',
    about_title: 'About Me',
    about_body: 'Computer Science student passionate about app development and UX/UI. Comfortable with Python and proficient in Figma. Responsible, fast learner, and user-focused.',
    profile_title: 'Profile',
    location: 'Ayutthaya, Thailand',
    skills_title: 'Skills',
    skill_mobile: 'Mobile App (basic)',
    soft_team: 'Teamwork',
    soft_fast: 'Fast Learner',
    soft_res: 'Responsibility',
    edu_title: 'Education',
    edu_bu_line1: 'Bangkok University – Information Technology and Innovation',
    edu_bu_line2: 'Computer Science (GPA 3.15)',
    proj_title: 'Projects',
    p1_title: 'Shopping App Design (Figma)',
    p1_desc: 'End‑to‑end UX/UI in Figma: wireframes → interactive prototype → polished UI with search, cart, checkout.',
    p2_title: 'Random Food Menu App (Mobile)',
    p2_desc: 'Suggests random dishes with history and category filters.',
    interests_title: 'Interests',
    interests_body: 'UX/UI Design, Web/Mobile Apps, Emerging Tech',
  }
};

function applyLang(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = (lang==='th'?'th':'en');
  const d = dict[lang];
  document.querySelectorAll('[data-i18n-key]').forEach(el=>{
    const k = el.getAttribute('data-i18n-key');
    if(d[k]) el.textContent = d[k];
  });
  localStorage.setItem('resume_lang', lang);
}

const btn = document.getElementById('langBtn');
btn.addEventListener('click', () => {
  const current = localStorage.getItem('resume_lang') || 'th';
  applyLang(current === 'th' ? 'en' : 'th');
});

applyLang(localStorage.getItem('resume_lang') || 'th');

(()=>{
  const required = ['name','role','about_title','skills_title','edu_title','proj_title'];
  const okTH = required.every(k=> !!dict.th[k]);
  const okEN = required.every(k=> !!dict.en[k]);
  console.assert(okTH && okEN, 'i18n dictionary missing keys:', {okTH, okEN});
  console.log('Resume site self-tests passed ✅');
})();
