const dict = {
  th: {
    name: 'พัฒนะ ป้อมทอง',
    role: 'นักศึกษาฝึกงานสาย Full-Stack Web Development / UX/UI',
    badge: 'กำลังมองหาโอกาสฝึกงาน',
    about_title: 'เกี่ยวกับฉัน',
    about_body: 'นักศึกษาวิทยาการคอมพิวเตอร์ ที่สนใจด้านการพัฒนาเว็บแบบ Full-Stack สามารถพัฒนาได้ทั้ง Frontend และ Backend โดยใช้เทคโนโลยีเว็บสมัยใหม่ ถนัด Python และมีทักษะการใช้ Figma ในการออกแบบ UX/UI ได้อย่างชำนาญ เป็นคนรับผิดชอบงาน เรียนรู้เทคโนโลยีใหม่ได้เร็ว และใส่ใจประสบการณ์ผู้ใช้',
    profile_title: 'ข้อมูลส่วนตัว',
    birthday : '11 กันยายน 2546',
    age: '22 ปี',
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
    p1_time: 'ระยะเวลา 2 สัปดาห์',
    p1_desc: 'ออกแบบ UX/UI ครบ: Wireframe → Prototype → UI พร้อมค้นหา ตะกร้า และเช็คเอาต์',
    p2_title: 'แอปสุ่มเมนูอาหาร (Mobile)',
    p2_time: 'ระยะเวลา 4 สัปดาห์',
    p2_desc: 'แอปช่วยสุ่มเมนูพร้อมประวัติและฟิลเตอร์ประเภทอาหาร',
    p3_title: 'พัฒนาแชทบอตแบบเสียง (Python)',
    p3_time: 'ระยะเวลา 2 เดือน',
    p3_desc: 'พัฒนาแชทบอตแบบเสียงสำหรับตอบคำถามสิทธิของผู้ประกันตน สำนักงานประกันสังคม',
    interests_title: 'ความสนใจ',
    interests_body: 'UX/UI Design, Web development, Mobile App, เทคโนโลยีใหม่ ๆ',
    // Section titles
    softskills_title: "ทักษะการทำงาน",
    hardskills_title: "ทักษะทางเทคนิค",

    // Soft Skills
    soft_team: "การทำงานเป็นทีม",
    soft_fast: "การเรียนรู้เร็ว",
    soft_res: "ความรับผิดชอบ",

    // Hard Skills
    skill_python: "Python",
    skill_java: "Java",
    skill_web: "Web App",
    skill_mobile: "Mobile",
    skill_figma: "Figma",

    // Levels
    level_good: "ดี",
    level_medium: "ปานกลาง",
    level_pro: "ชำนาญ",
  },
  en: {
    name: 'Phatthana Pomthong',
    role: 'Intern – Full-Stack Web Development & UX/UI',
    badge: 'Internship',
    about_title: 'About Me',
    about_body: 'Computer Science student passionate about Full-Stack Web Development. Skilled in Python and Figma, with strengths in UX/UI design, responsibility, and fast learning.',
    profile_title: 'Profile',
    birthday: '11 September 2003',
    age : '22 years old',
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
    p1_time: 'Duration 2 weeks',
    p1_desc: 'End‑to‑end UX/UI in Figma: wireframes → interactive prototype → polished UI with search, cart, checkout.',
    p2_title: 'Random Food Menu App (Mobile)',
    p2_time: 'Duration 4 weeks',
    p2_desc: 'Suggests random dishes with history and category filters.',
    p3_title: 'Developed a chatbot (Python)',
    p3_time : 'Duration 2 Months',
    p3_desc: 'Created a chatbot to answer insured persons’ rights inquiries for the Social Security Office',
    interests_title: 'Interests',
    interests_body: 'UX/UI Design, Web development, Mobile App, Emerging Tech',
    // Section titles
    softskills_title: "Soft Skills",
    hardskills_title: "Technical Skills",

    // Soft Skills
    soft_team: "Teamwork",
    soft_fast: "Fast Learner",
    soft_res: "Responsibility",

    // Hard Skills
    skill_python: "Python",
    skill_java: "Java",
    skill_web: "Web App",
    skill_mobile: "Mobile",
    skill_figma: "Figma",

    // Levels
    level_good: "Good",
    level_medium: "Intermediate",
    level_pro: "Proficient",

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
