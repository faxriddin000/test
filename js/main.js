// ========================================================
// MARS IT School (marsit.uz) - Official Landing Page Engine & i18n
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Dictionary (UZ, RU, EN)
  const translations = {
    uz: {
      nav_courses: "Ta'lim",
      nav_about: "Maktab haqida",
      nav_branches: "Filiallar",
      nav_blog: "Blog",
      nav_contact: "Kontaktlar",
      nav_test_btn: "Testdan o'tish",
      hero_headline: "AI yordamida<br>kelajakni<br>yaratishni<br>o'rganish",
      hero_subtitle: "Sun'iy intellekt, zamonaviy dasturlash va ilg'or texnologiyalarni 9–17 yoshli bolalar va o'smirlar uchun qiziqarli amaliyot hamda xalqaro standartlar asosida o'rgatamiz.",
      hero_cta_primary: "Bepul maslahat uchun ro'yxatdan o'ting",
      hero_cta_secondary: "Kurslarni ko'rish",
      hero_chat_bubble: "Savolingiz bormi? Menga yozing 👋",
      // Nega biz
      why_us_badge: "Nega biz",
      why_us_title: "Nega MARS IT School'ni tanlashadi",
      why_us_subtitle: "Biz bolaga o'rganish, rivojlanish va bilimini amalda qo'llash qiziqarli bo'ladigan muhit yaratamiz.",
      why_us_btn: "Batafsil",
      // Dropdowns
      drop_courses_1: "AI Kids (9–11 yosh)",
      drop_courses_2: "AI Pilot (12–14 yosh)",
      drop_courses_3: "Hub Pro (15–17 yosh)",
      drop_about_1: "SPACE platformasi",
      drop_about_2: "Eduverse kutubxonasi",
      drop_about_3: "MarsCode tizimi",
      drop_branches_title: "TOSHKENTDAGI 6 TA FILIAL",
      // Cards
      card1_title: "Mening kurslarim va Shaxsiy kabinet",
      card1_desc: "Har bir modul va dars bo'yicha shaxsiy progress trekeri, o'zlashtirish foizi va darsni bir zumda davom ettirish tugmasi.",
      card2_title: "Eduverse video kutubxonasi",
      card2_desc: "Cheksiz qo'shimcha video kurslar kutubxonasi: HTML, CSS, Python, 3D Blender, C#, C++, Unity va sun'iy intellekt asoslari.",
      card3_title: "MarsCode — FAANG darajasidagi keyslar",
      card3_desc: "Google, Amazon va Netflix intervyu topshiriqlari andozasida tuzilgan real dasturlash amaliyoti va kodni avtomatik tekshiruvchi platforma.",
      card4_title: "RPG Gamifikatsiya, Streek va Coinlar",
      card4_desc: "Darsga qatnashish, uyga vazifa va faollik uchun SPACE coinlari, olovli 7 kunlik streek, umumiy turnir reytingi va qiziqarli mini-o'yinlar.",
      card5_title: "Ota-onalar uchun shaffof onlayn to'lov",
      card5_desc: "Ota-onalar uchun shaffof kabinet: to'lovlar tarixi, qarzdorlik nazorati va Click, Payme orqali 1 daqiqada xavfsiz to'lash imkoniyati.",
      // MarsHub
      marshub_badge: "MarsHub",
      marshub_title: "MarsHub — o'quvchilar uchun xavfsiz sun'iy intellektli onlayn muhit",
      marshub_desc: "Bola nima qilmoqchi ekanini yozadi — AI-agent sayt yoki o'yinni yig'ib, o'z manzilida joylaydi. O'zbekistondagi barcha o'quvchilar uchun bepul, Telegram orqali kirish.",
      marshub_stat: "826 nafar bola yaratgan 935 ta sayt",
      marshub_cta: "Sinab ko'rish",
      marshub_card1_title: "AI-agent",
      marshub_card1_desc: "Tavsif bo'yicha kod yozadi va xatolarini o'zi tuzatadi",
      marshub_card2_title: "O'z sayting",
      marshub_card2_desc: "Darhol internetda: nomi.marshub.uz",
      marshub_card3_title: "Kurslar va o'yinlar",
      marshub_card3_desc: "Dasturlash va sun'iy intellekt o'z sur'atingda",
      // Testimonials
      testimonials_title: "Ota-onalar MARS IT School haqida nima deydi",
      testimonials_subtitle: "O'quvchilarimiz ota-onalarining samimiy fikrlari va natijalari",
      parent_role: "Ota-ona",
      watch_story: "Videoni ko'rish",
      // Shop
      shop_badge: "🎁 Sovg'alar do'koni",
      shop_title: "MARS Shop — ballarni sovg'alarga almashtiring",
      shop_subtitle: "Darslarga qatnashing, kod yozing, coinlar to'plang va ularni haqiqiy gadjetlarga almashtiring!",
      shop_cta_banner: "SPACE platformasida coin to'plang — darslarga qatnashing va sovg'alarni olib keting!",
      shop_banner_btn: "Ro'yxatdan o'tish (+50 coin)",
      // Premium
      prem_badge: "Space Premium — ko'proq imkoniyatlar",
      prem_title: "Bo'lajak IT-yetakchilar uchun maksimal quvvat",
      prem_desc: "Obuna barcha MARS IT School o'quvchilari uchun avtomatik tarzda taqdim etiladi.",
      // Form
      form_badge: "Bepul maslahat",
      form_title: "MARS IT School bilan o'qishni boshlang",
      form_desc: "Ariza qoldiring, biz sizga platforma haqida batafsil ma'lumot beramiz va farzandingizga mos kursni tanlaymiz.",
      form_btn: "Ariza yuborish / Bepul konsultatsiya",
      form_name_label: "Ism *",
      form_surname_label: "Familiya *",
      form_phone_label: "Telefon raqami *",
      form_branch_label: "Qulay filial",
      form_age_label: "Farzandingiz yoshi",
      // Footer
      footer_desc: "Bolalar va o'smirlar uchun zamonaviy dasturlash maktabi",
      footer_sched: "Har kuni 09:00 dan 20:00 gacha",
      footer_rights: "Barcha huquqlar himoyalangan."
    },
    ru: {
      nav_courses: "Обучение",
      nav_about: "О школе",
      nav_branches: "Филиалы",
      nav_blog: "Блог",
      nav_contact: "Контакты",
      nav_test_btn: "Пройти тест",
      hero_headline: "Учитесь<br>создавать будущее<br>с помощью AI",
      hero_subtitle: "Обучаем детей и подростков (9–17 лет) искусственному интеллекту, программированию и технологиям будущего через интерактивную практику.",
      hero_cta_primary: "Записаться на бесплатную консультацию",
      hero_cta_secondary: "Посмотреть курсы",
      hero_chat_bubble: "Есть вопрос? Напишите мне 👋",
      // Nega biz
      why_us_badge: "Почему мы",
      why_us_title: "Почему выбирают MARS IT School",
      why_us_subtitle: "Мы создаем среду, в которой ребенку интересно учиться, развиваться и применять знания.",
      why_us_btn: "Подробнее",
      // Dropdowns
      drop_courses_1: "AI Kids (9–11 лет)",
      drop_courses_2: "AI Pilot (12–14 лет)",
      drop_courses_3: "Hub Pro (15–17 лет)",
      drop_about_1: "Платформа SPACE",
      drop_about_2: "Библиотека Eduverse",
      drop_about_3: "Платформа MarsCode",
      drop_branches_title: "6 ФИЛИАЛОВ В ТАШКЕНТЕ",
      // Cards
      card1_title: "Мои курсы и Личный кабинет",
      card1_desc: "Индивидуальный трекинг каждого модуля и урока, процент прохождения программы и мгновенная кнопка «Resume» для продолжения учёбы.",
      card2_title: "Видеобиблиотека Eduverse",
      card2_desc: "Обширная библиотека дополнительных видеокурсов: HTML, CSS, Python, 3D Blender, C#, C++, Unity и основы искусственного интеллекта.",
      card3_title: "MarsCode — Задачи в стиле FAANG",
      card3_desc: "Интерактивная платформа задач в стиле собеседований в Google, Amazon и Netflix с автоматической проверкой решений и тестами.",
      card4_title: "RPG-Геймификация, Стрик и Коины",
      card4_desc: "Коины за посещаемость, домашние задания и активность, ежедневный огненный стрик, сезонный турнирный рейтинг и аркадные мини-игры.",
      card5_title: "Прозрачная онлайн-оплата для родителей",
      card5_desc: "Прозрачный кабинет для родителей: история платежей, контроль баланса и моментальная оплата через Click и Payme без визита в филиал.",
      // MarsHub
      marshub_badge: "MarsHub",
      marshub_title: "MarsHub — безопасная онлайн-среда с AI для учеников",
      marshub_desc: "Ребёнок пишет, что хочет создать — AI-агент собирает сайт или игру и размещает по личному адресу. Бесплатно для всех школьников Узбекистана, вход через Telegram.",
      marshub_stat: "935 сайтов, созданных 826 детьми",
      marshub_cta: "Попробовать",
      marshub_card1_title: "AI-агент",
      marshub_card1_desc: "Пишет код по описанию и сам исправляет ошибки",
      marshub_card2_title: "Свой сайт",
      marshub_card2_desc: "Сразу в интернете: name.marshub.uz",
      marshub_card3_title: "Курсы и игры",
      marshub_card3_desc: "Программирование и AI в своём темпе",
      // Testimonials
      testimonials_title: "Что говорят родители о MARS IT School",
      testimonials_subtitle: "Реальные истории и отзывы родителей наших учеников",
      parent_role: "Родитель",
      watch_story: "Смотреть отзыв",
      // Shop
      shop_badge: "🎁 Магазин подарков",
      shop_title: "MARS Shop — обменивай баллы на подарки",
      shop_subtitle: "Посещай занятия, пиши код, копи коины SPACE и забирай крутые гаджеты и фирменный мерч!",
      shop_cta_banner: "Копи коины в SPACE — посещай занятия и забирай призы!",
      shop_banner_btn: "Записаться (+50 коинов)",
      // Premium
      prem_badge: "Space Premium — больше возможностей",
      prem_title: "Максимальный буст для будущих IT-лидеров",
      prem_desc: "Подписка автоматически становится доступна для учеников MARS IT School.",
      // Form
      form_badge: "Бесплатная консультация",
      form_title: "Начните обучение в MARS IT School",
      form_desc: "Оставьте заявку, и мы расскажем подробнее о платформе и подберём курс для вашего ребёнка.",
      form_btn: "Отправить заявку / Бесплатная консультация",
      form_name_label: "Имя *",
      form_surname_label: "Фамилия *",
      form_phone_label: "Номер телефона *",
      form_branch_label: "Удобный филиал",
      form_age_label: "Возраст ребёнка",
      // Footer
      footer_desc: "Современная школа программирования для детей и подростков",
      footer_sched: "Ежедневно с 09:00 до 20:00",
      footer_rights: "Все права защищены."
    },
    en: {
      nav_courses: "Courses",
      nav_about: "About School",
      nav_branches: "Branches",
      nav_blog: "Blog",
      nav_contact: "Contacts",
      nav_test_btn: "Take a test",
      hero_headline: "Learn to<br>build the future<br>with AI",
      hero_subtitle: "We teach kids and teenagers (ages 9–17) artificial intelligence, modern programming, and future technologies through engaging hands-on projects.",
      hero_cta_primary: "Register for free consultation",
      hero_cta_secondary: "View courses",
      hero_chat_bubble: "Have a question? Text me 👋",
      // Nega biz
      why_us_badge: "Why Us",
      why_us_title: "Why choose MARS IT School",
      why_us_subtitle: "We create an environment where kids love to learn, grow, and apply their knowledge in practice.",
      why_us_btn: "Learn More",
      // Dropdowns
      drop_courses_1: "AI Kids (ages 9–11)",
      drop_courses_2: "AI Pilot (ages 12–14)",
      drop_courses_3: "Hub Pro (ages 15–17)",
      drop_about_1: "SPACE Platform",
      drop_about_2: "Eduverse Library",
      drop_about_3: "MarsCode System",
      drop_branches_title: "6 BRANCHES IN TASHKENT",
      // Cards
      card1_title: "My Courses & Personal Cabinet",
      card1_desc: "Individual progress tracker for each module and lesson, completion percentage, and an instant 'Resume' button to continue learning.",
      card2_title: "Eduverse Video Library",
      card2_desc: "Extensive video course library with unlimited access: HTML, CSS, Python, Blender 3D, C#, C++, Unity, and AI fundamentals.",
      card3_title: "MarsCode — FAANG Challenges",
      card3_desc: "Interactive coding challenge platform modeled after Google, Amazon, and Netflix interview tasks with real-time automated test verification.",
      card4_title: "RPG Gamification, Streak & Coins",
      card4_desc: "Earn SPACE coins for attendance, homework, and classroom activity, maintain your daily fire streak, climb leaderboards, and play logic mini-games.",
      card5_title: "Transparent Online Billing for Parents",
      card5_desc: "Clear dashboard for parents: billing history, balance tracking, and instant safe online payment via Click and Payme.",
      // MarsHub
      marshub_badge: "MarsHub",
      marshub_title: "MarsHub — a safe AI online environment for students",
      marshub_desc: "A child types what they want to build — the AI agent generates the website or game and deploys it immediately. Free for all students in Uzbekistan via Telegram.",
      marshub_stat: "935 websites built by 826 students",
      marshub_cta: "Try It Now",
      marshub_card1_title: "AI Agent",
      marshub_card1_desc: "Writes code from description and fixes bugs autonomously",
      marshub_card2_title: "Your Website",
      marshub_card2_desc: "Live on the web instantly: name.marshub.uz",
      marshub_card3_title: "Courses & Games",
      marshub_card3_desc: "Programming and artificial intelligence at your own pace",
      // Testimonials
      testimonials_title: "What parents say about MARS IT School",
      testimonials_subtitle: "Real stories and feedback from our students' parents",
      parent_role: "Parent",
      watch_story: "Watch testimonial",
      // Shop
      shop_badge: "🎁 Gift Store",
      shop_title: "MARS Shop — Redeem Points for Gifts",
      shop_subtitle: "Attend classes, code projects, collect SPACE coins, and redeem them for top gadgets and merch!",
      shop_cta_banner: "Collect coins in SPACE — attend classes and claim awesome prizes!",
      shop_banner_btn: "Enroll now (+50 coins)",
      // Premium
      prem_badge: "Space Premium — More Possibilities",
      prem_title: "Maximum Boost for Future IT Leaders",
      prem_desc: "Subscription is automatically unlocked for all MARS IT School students.",
      // Form
      form_badge: "Free Consultation",
      form_title: "Start Learning with MARS IT School",
      form_desc: "Leave a request, and we will guide you through the platform and choose the best course for your child.",
      form_btn: "Submit Application / Free Consultation",
      form_name_label: "First Name *",
      form_surname_label: "Last Name *",
      form_phone_label: "Phone Number *",
      form_branch_label: "Preferred Branch",
      form_age_label: "Child's Age",
      // Footer
      footer_desc: "Modern coding school for children and teenagers",
      footer_sched: "Daily 09:00 to 20:00",
      footer_rights: "All rights reserved."
    }
  };

  let currentLang = 'uz';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update main language badge label
    const currentLangLabel = document.getElementById('lang-current-label');
    if (currentLangLabel) {
      if (lang === 'uz') currentLangLabel.innerText = "O'z";
      else if (lang === 'ru') currentLangLabel.innerText = "Ру";
      else if (lang === 'en') currentLangLabel.innerText = "En";
    }

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (translations[lang][key].includes('<br>')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.innerText = translations[lang][key];
        }
      }
    });

    // Translate placeholder attributes if any
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });
  }

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      setLanguage(lang);
      playClickSound();
    });
  });

  // Sound Synth Engine (Optional Cyber Clicks)
  let audioCtx = null;
  function playClickSound() {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(350, now + 0.04);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  // 2. Quiz Modal Trigger
  const quizModal = document.getElementById('quiz-modal');
  const openQuizBtns = document.querySelectorAll('.open-quiz-modal');
  const quizModalClose = document.getElementById('quiz-modal-close');

  openQuizBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (quizModal) quizModal.classList.add('active');
      playClickSound();
    });
  });

  if (quizModalClose && quizModal) {
    quizModalClose.addEventListener('click', () => {
      quizModal.classList.remove('active');
    });
  }

  // 3. Shop Exchange Modal
  const shopModal = document.getElementById('shop-modal');
  const shopModalClose = document.getElementById('shop-modal-close');
  const shopBuyBtns = document.querySelectorAll('.shop-buy-btn');

  shopBuyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const cost = btn.dataset.cost;
      const icon = btn.dataset.icon;
      if (shopModal) {
        document.getElementById('shop-modal-item-title').innerText = name;
        document.getElementById('shop-modal-item-cost').innerText = cost + ' coin';
        document.getElementById('shop-modal-item-img').innerText = icon || '🎁';
        shopModal.classList.add('active');
      }
      playClickSound();
    });
  });

  if (shopModalClose && shopModal) {
    shopModalClose.addEventListener('click', () => {
      shopModal.classList.remove('active');
    });
  }

  // 3.5 Video Testimonials Modal
  const videoModal = document.getElementById('video-testimonial-modal');
  const videoModalClose = document.getElementById('video-modal-close');
  const videoModalIframe = document.getElementById('video-modal-iframe');
  const videoModalName = document.getElementById('video-modal-name');
  const videoModalRole = document.getElementById('video-modal-role');

  const videoCards = document.querySelectorAll('.video-card-container');
  videoCards.forEach((card) => {
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      const role = card.querySelector('[data-i18n="parent_role"]')?.innerText || 'Ota-ona';
      const videoSrc = card.dataset.video || 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1';

      if (videoModal) {
        if (videoModalName) videoModalName.innerText = name;
        if (videoModalRole) videoModalRole.innerText = role;
        if (videoModalIframe) videoModalIframe.src = videoSrc;
        videoModal.classList.add('active');
      }
      playClickSound();
    });
  });

  const closeVideoModal = () => {
    if (videoModal) {
      videoModal.classList.remove('active');
      if (videoModalIframe) videoModalIframe.src = '';
    }
  };

  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);

  // Video Slider Arrow Controls
  const sliderPrev = document.getElementById('video-slider-prev');
  const sliderNext = document.getElementById('video-slider-next');
  const marqueeWrapper = document.querySelector('.video-marquee-wrapper');
  const marqueeTrack = document.querySelector('.video-marquee-track');

  if (sliderPrev && marqueeWrapper && marqueeTrack) {
    sliderPrev.addEventListener('click', () => {
      marqueeTrack.style.animationPlayState = 'paused';
      marqueeWrapper.scrollBy({ left: -290, behavior: 'smooth' });
      playClickSound();
    });
  }

  if (sliderNext && marqueeWrapper && marqueeTrack) {
    sliderNext.addEventListener('click', () => {
      marqueeTrack.style.animationPlayState = 'paused';
      marqueeWrapper.scrollBy({ left: 290, behavior: 'smooth' });
      playClickSound();
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === quizModal) quizModal.classList.remove('active');
    if (e.target === shopModal) shopModal.classList.remove('active');
    if (e.target === videoModal) closeVideoModal();
  });

  // 4. Uzbekistan Phone Mask
  const phoneInput = document.getElementById('lead-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      let val = this.value.replace(/\D/g, '');
      if (!val.startsWith('998')) {
        val = '998' + val;
      }
      val = val.substring(0, 12);

      let formatted = '+998 ';
      if (val.length > 3) formatted += '(' + val.substring(3, 5);
      if (val.length >= 5) formatted += ') ' + val.substring(5, 8);
      if (val.length >= 8) formatted += '-' + val.substring(8, 10);
      if (val.length >= 10) formatted += '-' + val.substring(10, 12);
      this.value = formatted;
    });

    phoneInput.addEventListener('focus', function () {
      if (!this.value) this.value = '+998 (';
    });
  }

  // 5. Lead Form Submission
  const leadForm = document.getElementById('lead-gen-form');
  const formSuccessModal = document.getElementById('form-success-modal');
  const formSuccessClose = document.getElementById('form-success-close');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('lead-name')?.value.trim();
      const surname = document.getElementById('lead-surname')?.value.trim();
      const phone = phoneInput?.value.trim();

      if (!name || !surname || !phone || phone.length < 18) {
        alert("Iltimos, ismingiz, familiyangiz va telefon raqamingizni to'liq kiriting!");
        return;
      }

      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerText = 'Yuborilmoqda...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        leadForm.reset();
        if (formSuccessModal) {
          const clientNameHolder = document.getElementById('success-client-name');
          if (clientNameHolder) clientNameHolder.innerText = name;
          formSuccessModal.classList.add('active');
        }
      }, 700);
    });
  }

  if (formSuccessClose && formSuccessModal) {
    formSuccessClose.addEventListener('click', () => {
      formSuccessModal.classList.remove('active');
    });
  }

  // 6. Scroll-To-Top Button Handling
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        scrollTopBtn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        scrollTopBtn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playClickSound();
    });
  }

  // 7. Interactive Terminal Simulation for MarsHub
  const terminalInput = document.getElementById('marshub-terminal-cmd');
  const terminalOutput = document.getElementById('marshub-terminal-out');
  if (terminalInput && terminalOutput) {
    const commands = [
      { cmd: 'onam uchun sayt qil', out: 'mama.marshub.uz' },
      { cmd: 'kosmik mini-oyin yarat', out: 'space-quest.marshub.uz' },
      { cmd: 'portfolio sahifamni tayyorla', out: 'aziz-dev.marshub.uz' }
    ];
    let cmdIdx = 0;

    function typeCommand() {
      const current = commands[cmdIdx];
      let charIdx = 0;
      terminalInput.textContent = '';
      terminalOutput.innerHTML = '<span class="text-gray-500 animate-pulse">...yaratilmoqda</span>';

      const typeInterval = setInterval(() => {
        if (charIdx < current.cmd.length) {
          terminalInput.textContent += current.cmd.charAt(charIdx);
          charIdx++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            terminalOutput.innerHTML = `<span class="text-emerald-400">✓</span> <span class="text-gray-200">sayt chop etildi:</span> <a href="https://${current.out}" target="_blank" class="text-amber-400 underline hover:text-amber-300 font-semibold">${current.out}</a><span class="inline-block w-2 h-4 bg-white align-middle ml-1 animate-pulse"></span>`;
            cmdIdx = (cmdIdx + 1) % commands.length;
            setTimeout(typeCommand, 6000);
          }, 600);
        }
      }, 70);
    }

    setTimeout(typeCommand, 2500);
  }

  // Default Language: UZ
  setLanguage('uz');
});
