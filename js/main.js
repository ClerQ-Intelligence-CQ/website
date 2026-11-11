/* ============================================================
   ClerQ Intelligence: Global JS
   Navigation, language toggle, scroll handling,
   and Interactive Clinical Suite Showcase (Quiet Light Canvas)
   ============================================================ */

(function () {
  'use strict';

  function resolveAssetUrl(relPath) {
    if (!relPath) return '';
    var clean = relPath.replace(/^\/+/, '');
    var base = clean;
    try {
      var pathname = window.location.pathname || '/';
      if (/\/(about|research|contact|partners)(\/|$)/.test(pathname)) {
        base = '../' + clean;
      } else {
        base = '/' + clean;
      }
    } catch (e) {
      base = '/' + clean;
    }
    // Append asset cache buster so mobile browsers never display stale media
    return base + (base.indexOf('?') === -1 ? '?v=20261111_11' : '&v=20261111_11');
  }

  // ============================================================
  // Clinical Suite Modules (7 Frontline Modules — 1:1 Screen Match)
  // ============================================================
  var suiteModules = [
    {
      key: 'lucy',
      num: '01',
      categoryEn: 'Point-of-Care Consultation · Category RED Triage',
      categorySw: 'Mashauriano ya Kitabibu · Tathmini ya Dharura',
      titleEn: 'Lucy Clinical Copilot',
      titleSw: 'Msaidizi wa Kitabibu wa Lucy',
      subEn: 'Emergency triage assessment, ABCDE vital resuscitation protocols, and bilingual Swahili/English consultation lookup.',
      subSw: 'Tathmini ya dharura (Category RED), itifaki ya ABCDE ya uokoaji, na mashauriano ya Kiswahili na Kiingereza.',
      img: 'assets/screens/new_lucy.png',
      video: 'assets/screens/chat_FINAL_cut_f80_f259_out.mp4',
      featuresEn: [
        'Instant STG 2026 Level-0 Router for Category RED (Immediate Threat) airway, breathing, and circulation (ABCDE) stabilization.',
        'Direct bedside dosing directives: High-Flow Oxygen (10–15 L/min via non-rebreather mask, target SpO2 >= 94%) and IV Crystalloids (Ringer\'s Lactate / 0.9% NaCl).',
        'Sema Rust morphological engine parses 19,717 Swahili and English lemmas locally on device with zero probabilistic guessing.'
      ],
      featuresSw: [
        'Kipanga njia cha STG 2026 cha Ngazi ya 0 kwa dharura kuu (Category RED) kuokoa njia ya hewa, upumuaji, na mzunguko wa damu (ABCDE).',
        'Maelekezo ya moja kwa moja ya vipimo: Oksijeni ya kasi ya juu (10–15 L/min kufikia SpO2 >= 94%) na maji ya mishipa (Ringer\'s Lactate / 0.9% NaCl).',
        'Mfumo wa Rust wa Sema unachambua mashina 19,717 ya Kiswahili na Kiingereza ndani ya kifaa bila ubashiri.'
      ],
      protocolEn: 'Tanzania Standard Treatment Guidelines (STG 2026, 6th Edition) · Chapter 1: Emergency Triage & Vital Resuscitation.',
      protocolSw: 'Miongozo ya Tiba ya Kawaida ya Tanzania (STG 2026, Toleo la 6) · Sura ya 1: Tathmini ya Dharura na Uokoaji.',
      impactEn: 'At primary dispensaries and outpatient triage desks, Lucy surfaces immediate Category RED stabilization steps and exact oxygen/fluid rates within seconds of patient arrival.',
      impactSw: 'Katika zahanati za msingi na dawati la dharura, Lucy inatoa hatua za haraka za kuokoa maisha na viwango sahihi vya oksijeni na maji ndani ya sekunde chache.'
    },
    {
      key: 'guide',
      num: '02',
      categoryEn: 'National Guideline Navigation · 21 Chapters',
      categorySw: 'Urambazaji wa Miongozo ya Kitaifa · Sura 21',
      titleEn: 'STG 2026 Protocols Hub',
      titleSw: 'Kitovu cha Miongozo ya STG 2026',
      subEn: 'Complete 21-chapter Tanzania STG 6th Edition index filtered by facility tier (Dispensary & Health Centre) and clinical specialty.',
      subSw: 'Orodha kamili ya sura 21 za STG Toleo la 6 inayochujwa kwa ngazi ya kituo (Zahanati na Kituo cha Afya) na idara.',
      img: 'assets/screens/new_guide_stg.png',
      video: 'assets/screens/guide_home_revolving.mp4',
      featuresEn: [
        'Instant search across all 21 official STG 2026 chapters with specialty filters (All, Emergency, Infectious, Maternal, Pediatric).',
        'Facility-level tags clearly distinguish Dispensary protocols (Ch 1 Emergency Triage, Ch 3 Malaria) from Health Centre care (Ch 2 Trauma & Burns, Ch 4 TB & Leprosy).',
        'Coupled with the offline NEMLIT Formulary Smart Dosing engine for Amoxicillin, Ceftriaxone, Paracetamol, Gentamicin, and Metronidazole.'
      ],
      featuresSw: [
        'Utafutaji wa papo hapo katika sura zote 21 rasmi za STG 2026 ukiwa na vichujio vya idara (Dharura, Maambukizi, Uzazi, Watoto).',
        'Alama za ngazi ya kituo zinatofautisha wazi itifaki za Zahanati (Sura ya 1 Dharura, Sura ya 3 Malaria) na Kituo cha Afya (Sura ya 2 Majeraha, Sura ya 4 Kifua Kikuu).',
        'Imeunganishwa na mfumo wa vipimo vya dawa wa NEMLIT kwa Amoxicillin, Ceftriaxone, Paracetamol, Gentamicin, na Metronidazole.'
      ],
      protocolEn: 'Tanzania STG 2026 (6th Edition, 21 Chapters) & National Essential Medicines List (NEMLIT) Tiered Formulary.',
      protocolSw: 'STG 2026 ya Tanzania (Toleo la 6, Sura 21) na Orodha ya Kitaifa ya Dawa Muhimu (NEMLIT).',
      impactEn: 'Replaces heavy printed reference manuals with instant, tier-appropriate treatment protocols that match the exact medicines stocked at the clinician\'s facility level.',
      impactSw: 'Inachukua nafasi ya vitabu vizito kwa miongozo ya papo hapo inayoendana na ngazi ya kituo na dawa zilizopo.'
    },
    {
      key: 'results',
      num: '03',
      categoryEn: 'Clinical Clerking · Step 6 of 6 Results',
      categorySw: 'Uchunguzi wa Kitabibu · Hatua ya 6 kati ya 6',
      titleEn: 'Differential & Sepsis',
      titleSw: 'Utambuzi Mbadala & Sepsis',
      subEn: 'Ranked primary diagnostic suspicion and secondary differentials weighted by clinical evidence and STG 2026 alignment.',
      subSw: 'Utambuzi mkuu na utambuzi mbadala uliopangwa kwa uzito wa dalili za kitabibu na ufuataji wa STG 2026.',
      img: 'assets/screens/new_results.png',
      video: null,
      featuresEn: [
        'Surfaces Primary Diagnostic Suspicion (#1): Sepsis Syndrome (STG Hour-1 Resuscitation Bundle — High Match) with one-tap treatment plan, dosing, and danger signs.',
        'Ranks Secondary Differential Diagnoses: Rank #2 Severe Malaria (Artesunate IV Protocol — High Match) and Rank #3 Diarrhoea with No Dehydration (IMCI Plan A).',
        'Deterministic bar-crossing scoring ensures life-threatening syndromes saturate immediately without black-box probability drift.'
      ],
      featuresSw: [
        'Inabainisha Utambuzi Mkuu (#1): Sepsis Syndrome (Itifaki ya Saa-1 ya Uokoaji ya STG) pamoja na mpango wa tiba, dozi, na dalili za hatari.',
        'Inapanga Utambuzi Mbadala (5): Nafasi ya #2 Malaria Kali (Itifaki ya Artesunate IV) na Nafasi ya #3 Kuhara bila Upungufu wa Maji (IMCI Plan A).',
        'Upimaji wa vigezo halisi unahakikisha magonjwa hatari yanajitokeza mara moja bila ubashiri usio wazi.'
      ],
      protocolEn: 'Tanzania STG 2026 · Hour-1 Sepsis Resuscitation Bundle, Severe Malaria IV Artesunate Protocol & IMCI Plan A.',
      protocolSw: 'STG 2026 ya Tanzania · Itifaki ya Saa-1 ya Sepsis, Itifaki ya Artesunate IV kwa Malaria Kali, na IMCI Plan A.',
      impactEn: 'Prevents missed occult sepsis and severe malaria overlap during busy outpatient clerking, guiding clinicians directly from structured assessment to life-saving action.',
      impactSw: 'Inazuia kukosa kubaini sepsis na malaria kali wakati wa uchunguzi wa wagonjwa wengi, ikimuongoza daktari kuchukua hatua za kuokoa maisha.'
    },
    {
      key: 'tools',
      num: '04',
      categoryEn: 'Clinical Tools & Labs · 32 Offline Calculators',
      categorySw: 'Zana za Kitabibu na Maabara · Vikokotoo 32',
      titleEn: 'Bedside Calculators',
      titleSw: 'Vikokotoo vya Wodini',
      subEn: '32 offline bedside clinical calculators, 10 AI diagnostic tools, and 6 Ahadi epidemiological sentinel monitors.',
      subSw: 'Vikokotoo 32 vya kitabibu nje ya mtandao, zana 10 za uchunguzi, na vigezo 6 vya ufuatiliaji wa magonjwa.',
      img: 'assets/screens/new_tools_calcs.png',
      video: null,
      featuresEn: [
        'Emergency & Trauma Scoring: Glasgow Coma Scale (GCS, 3–15 pts), Parkland Burns Fluid Resuscitation (mL / 24h), and NEWS-2 Early Warning Score (0–20 pts).',
        'Cardiopulmonary & Vascular Risk: CURB-65 Pneumonia Severity (0–5 pts), Wells Score for DVT & Pulmonary Embolism, and TIMI Risk Score for STEMI (0–7 pts).',
        'Renal & Electrolyte Dosing Safety: Estimated GFR (CKD-EPI mL/min/1.73m²), Cockcroft-Gault CrCl (mL/min), and Fractional Excretion of Sodium (FENa %).'
      ],
      featuresSw: [
        'Upimaji wa Dharura na Majeraha: Glasgow Coma Scale (GCS, alama 3–15), Maji ya Kuungua ya Parkland (mL / 24h), na NEWS-2 Early Warning Score.',
        'Hatari ya Mapafu na Mishipa: Ukali wa Nimonia wa CURB-65, Alama za Wells kwa DVT na PE, na TIMI Risk Score kwa STEMI.',
        'Usalama wa Figo na Vipimo vya Dawa: eGFR (CKD-EPI), Cockcroft-Gault CrCl (mL/min), na FENa (%).'
      ],
      protocolEn: 'Tanzania National Emergency, Trauma, Renal Dosing & Inpatient Acuity Standards (STG 2026).',
      protocolSw: 'Viwango vya Kitaifa vya Dharura, Majeraha, Usalama wa Figo na Utunzaji wa Wagonjwa Wodini (STG 2026).',
      impactEn: 'Eliminates mental arithmetic errors under emergency resuscitation stress, producing exact fluid volumes and renal-adjusted dosing in seconds.',
      impactSw: 'Inaondoa makosa ya mahesabu ya kichwa wakati wa dharura, ikitoa viwango sahihi vya maji na dozi salama kwa figo ndani ya sekunde chache.'
    },
    {
      key: 'ward',
      num: '05',
      categoryEn: 'Inpatient Care Management · Live Bed Census',
      categorySw: 'Usimamizi wa Wagonjwa Wodini · Sensa ya Vitanda',
      titleEn: 'Inpatient Ward Rounds',
      titleSw: 'Raundi za Wodi',
      subEn: 'Live inpatient bed census, department ward filters, bedside vitals tracking, and one-tap round note capture.',
      subSw: 'Sensa ya wagonjwa wodini, vichujio vya wodi, ufuatiliaji wa vipimo vya mwili, na uandishi wa raundi kwa mguso mmoja.',
      img: 'assets/screens/new_ward.png',
      video: null,
      featuresEn: [
        'Real-time inpatient acuity dashboard tracking Total Inpatients, Stable, Guarded, and Discharged patients across All Beds, Medical, Surgical, Pediatrics, and Maternity wards.',
        'Active bedside cards display working diagnosis (#OPD-2026-003 · Sepsis Syndrome), live vitals (SpO2 97%, BP, Temp), and admission status.',
        'One-tap bedside actions (+ Round Note, Transfer, View Chart) alongside top-bar Shift Handover and Receive workflows.'
      ],
      featuresSw: [
        'Dashibodi ya hali ya wagonjwa wodini inayofuatilia wagonjwa Imara (Stable), Wanaochunguzwa (Guarded), na Walioruhusiwa katika wodi za Tiba, Upasuaji, Watoto, na Uzazi.',
        'Kadi za vitanda zinaonyesha utambuzi (#OPD-2026-003 · Sepsis Syndrome), vipimo (SpO2 97%, BP, Joto), na hali ya kulazwa.',
        'Vitendo vya haraka wodini (+ Round Note, Transfer, View Chart) pamoja na vitufe vya Shift Handover na Receive.'
      ],
      protocolEn: 'Tanzania National Hospital Care Standards & Inpatient Ward Management Framework.',
      protocolSw: 'Viwango vya Kitaifa vya Huduma za Hospitali na Usimamizi wa Wodi Tanzania.',
      impactEn: 'Keeps morning ward rounds structured and accountable, ensuring every inpatient\'s vitals, working diagnosis, and round notes stay synchronized at the bedside.',
      impactSw: 'Inafanya raundi za asubuhi kuwa na mpangilio mzuri, ikihakikisha vipimo, utambuzi, na maelezo ya kila mgonjwa yanahifadhiwa kwa usahihi.'
    },
    {
      key: 'chart',
      num: '06',
      categoryEn: 'Longitudinal Patient Record · SOAP & Progression',
      categorySw: 'Kumbukumbu za Mgonjwa · SOAP na Maendeleo',
      titleEn: 'Patient Chart & Clerking',
      titleSw: 'Faili la Mgonjwa & SOAP',
      subEn: 'Complete bedside patient chart (#OPD-2026-003) with Recent SOAP, round delta comparisons, and interactive care checklists.',
      subSw: 'Faili kamili la mgonjwa (#OPD-2026-003) lenye muhtasari wa SOAP, ulinganisho wa raundi, na orodha ya huduma.',
      img: 'assets/screens/new_patient_chart.png',
      video: 'assets/screens/smooth_flow1_new_client.mp4',
      featuresEn: [
        'Structured patient header (#OPD-2026-003 · 32y Male · Bed 04 · Day 1 · Stable Inpatient) anchored to the Primary Working Diagnosis.',
        'Six dedicated clinical workspaces: Recent SOAP (Latest round summary), Compare Rounds & Delta (Track clinical progression), SBAR Shift Handover, and AI Plan Care Checklist.',
        'Longitudinal Clinical Timeline & Encounters plus Linked Bedside Notes & Media stored in an encrypted offline SQLite database.'
      ],
      featuresSw: [
        'Kichwa cha taarifa za mgonjwa (#OPD-2026-003 · Miaka 32 Me · Kitanda 04 · Siku ya 1) kikiwa na Utambuzi Mkuu wa Kazi.',
        'Sehemu sita za kazi za kitabibu: Recent SOAP, Compare Rounds & Delta (Kufuatilia maendeleo), SBAR Shift Handover, na AI Plan Care Checklist.',
        'Mfuatano wa matukio ya kitabibu (Clinical Timeline) na maelezo ya wodini yanayohifadhiwa salama kwenye simu bila mtandao.'
      ],
      protocolEn: 'Ministry of Health Tanzania Outpatient & Inpatient Clinical Documentation Standards (HMIS/MTUHA).',
      protocolSw: 'Viwango vya Kumbukumbu za Kitabibu za Wagonjwa wa Nje na Ndani vya Wizara ya Afya (MTUHA/HMIS).',
      impactEn: 'Replaces fragmented paper notes with a unified longitudinal chart where clinicians can compare round-to-round deltas and verify completed nursing tasks in one view.',
      impactSw: 'Inabadilisha karatasi zinazopotea na kuleta faili moja linalomwezesha daktari kulinganisha maendeleo ya kila raundi kwa urahisi.'
    },
    {
      key: 'journal',
      num: '07',
      categoryEn: 'Inter-Shift Continuity · Clinical Status Board',
      categorySw: 'Kukabidhiana Zamu · Bodi ya Hali ya Kitabibu',
      titleEn: 'Shift Handover & Status Board',
      titleSw: 'Bodi ya Zamu na Mawasiliano ya Timu',
      subEn: 'Local Vault hospital sync, STAT ICU/HDU alerts, and structured Medical Ward SBAR night-shift handovers.',
      subSw: 'Usawazishaji wa Local Vault hospitalini, tahadhari za haraka za ICU/HDU, na makabidhiano ya zamu ya SBAR.',
      img: 'assets/screens/new_journal_team.png',
      video: null,
      featuresEn: [
        'Hospital Local Vault Sync (e.g., Muhimbili National Hospital) coordinating active clinical threads across wards without internet dependency.',
        'Real-time Ward Notices broadcasting STAT ALERTS (ICU / HDU Bed 4 Vacated & Sterilized) and active thread counters across departments.',
        'Dedicated SHIFT HANDOVER channels (Medical Ward 3B Night Shift Sign-In & SBAR Handovers) so incoming clinicians review every critical update.'
      ],
      featuresSw: [
        'Usawazishaji wa Local Vault hospitalini unaoratibu mawasiliano ya kitabibu kati ya wodi bila kutegemea intaneti.',
        'Matangazo ya wodi ya wakati halisi yanayoonyesha STAT ALERTS (Kitanda cha ICU / HDU kuwa wazi na tayari) katika idara.',
        'Njia maalum za SHIFT HANDOVER (Wodi ya Tiba 3B Kukabidhiana Zamu ya Usiku kwa SBAR) ili madaktari wanaoingia wapate taarifa zote muhimu.'
      ],
      protocolEn: 'World Health Organization (WHO) & MoH Tanzania SBAR Patient Safety Handover Standards.',
      protocolSw: 'Viwango vya Usalama wa Mgonjwa Wakati wa Kukabidhiana Zamu kwa SBAR (WHO na Wizara ya Afya Tanzania).',
      impactEn: 'Closes the dangerous evening shift-change information gap, ensuring STAT bed availability and SBAR handover notes reach the incoming night team immediately.',
      impactSw: 'Inaziba pengo hatari la taarifa wakati wa kubadilishana zamu jioni, ikihakikisha timu ya usiku inapata taarifa za SBAR na vitanda vya ICU papo hapo.'
    }
  ];

  var activeSuiteIndex = 0;
  var isSuiteVideoPlaying = false;

  // Preload all 7 module screenshots immediately so switching is instantaneous
  function preloadSuiteImages() {
    suiteModules.forEach(function (mod) {
      var img = new Image();
      img.src = resolveAssetUrl(mod.img);
    });
  }

  // ============================================================
  // Language Management (SW / EN)
  // ============================================================
  var LANG_KEY = 'clerq-lang';

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}

    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'sw' ? 'sw' : 'en');

    document.querySelectorAll('[data-en][data-sw]').forEach(function (el) {
      var text = lang === 'sw' ? el.getAttribute('data-sw') : el.getAttribute('data-en');
      if (text) el.textContent = text;
    });

    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      var label = langToggle.querySelector('.nav__lang-label') || langToggle;
      label.textContent = lang === 'en' ? 'SW' : 'EN';
    }

    renderSuiteModule(activeSuiteIndex, false);
  }

  // ============================================================
  // Interactive Suite Showcase Controller (Instant & Synchronized)
  // ============================================================
  function renderSuiteModule(index, animated) {
    if (index < 0 || index >= suiteModules.length) return;
    activeSuiteIndex = index;
    isSuiteVideoPlaying = false;

    var mod = suiteModules[index];
    var lang = getLang();
    var resolvedImg = resolveAssetUrl(mod.img);

    // 1. Update Tabs
    var tabBtns = document.querySelectorAll('.suite-tab-btn');
    tabBtns.forEach(function (btn, i) {
      var isActive = i === index;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
      if (isActive && typeof btn.scrollIntoView === 'function') {
        try {
          btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (e) {}
      }
    });

    // 2. Update Dots
    var dots = document.querySelectorAll('.suite-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === index);
    });

    // 3. Update Device Screen Image & Video Immediately (No setTimeout lag)
    var imgEl = document.getElementById('suite-screen-img');
    var videoEl = document.getElementById('suite-screen-video');
    var flowToggleBtn = document.getElementById('suite-flow-toggle');
    var flowLabel = document.getElementById('suite-flow-label');

    if (videoEl) {
      if (typeof videoEl.pause === 'function') {
        videoEl.pause();
      }
      videoEl.style.display = 'none';
    }

    if (imgEl) {
      imgEl.style.display = 'block';
      imgEl.onerror = function () {
        var fallback = '/' + mod.img.replace(/^\/+/, '');
        if (imgEl.getAttribute('src') !== fallback) {
          imgEl.src = fallback;
        }
      };
      imgEl.src = resolvedImg;
      imgEl.setAttribute('data-active-module', mod.key);
      imgEl.alt = (lang === 'sw' ? mod.titleSw : mod.titleEn) + ' — ' + (lang === 'sw' ? mod.subSw : mod.subEn);
      imgEl.style.opacity = '1';
      imgEl.style.transform = 'scale(1)';
    }

    // 4. Update Live Video Toggle Button
    if (flowToggleBtn && flowLabel) {
      if (mod.video) {
        flowToggleBtn.style.display = 'inline-flex';
        flowLabel.textContent = lang === 'sw' ? 'Tazama Mtiririko wa Kazi' : 'Watch Live Interaction Flow';
      } else {
        flowToggleBtn.style.display = 'none';
      }
    }

    // 5. Update Header Meta
    var catEl = document.getElementById('suite-category-label');
    var counterEl = document.getElementById('suite-counter');
    var titleEl = document.getElementById('suite-title');
    var subEl = document.getElementById('suite-subtitle');

    if (catEl) catEl.textContent = lang === 'sw' ? mod.categorySw : mod.categoryEn;
    if (counterEl) counterEl.textContent = mod.num + ' / 07';
    if (titleEl) titleEl.textContent = lang === 'sw' ? mod.titleSw : mod.titleEn;
    if (subEl) subEl.textContent = lang === 'sw' ? mod.subSw : mod.subEn;

    // 6. Update Feature Cards
    var featList = document.getElementById('suite-features-list');
    if (featList) {
      featList.innerHTML = '';
      var feats = lang === 'sw' ? mod.featuresSw : mod.featuresEn;
      feats.forEach(function (f) {
        var row = document.createElement('div');
        row.className = 'suite-feature-item';

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'suite-feature-icon');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2.5');
        svg.setAttribute('aria-hidden', 'true');

        var polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', '20 6 9 17 4 12');
        svg.appendChild(polyline);

        var textSpan = document.createElement('span');
        textSpan.className = 'suite-feature-text';
        textSpan.textContent = f;

        row.appendChild(svg);
        row.appendChild(textSpan);
        featList.appendChild(row);
      });
    }

    // 7. Update Protocol & Impact Boxes
    var protoEl = document.getElementById('suite-protocol-text');
    var impactEl = document.getElementById('suite-impact-text');
    if (protoEl) protoEl.textContent = lang === 'sw' ? mod.protocolSw : mod.protocolEn;
    if (impactEl) impactEl.textContent = lang === 'sw' ? mod.impactSw : mod.impactEn;
  }

  // Expose globally so inline handlers or external calls always work
  window.selectSuiteModule = function (idx) {
    renderSuiteModule(idx, true);
  };

  function initSuiteShowcase() {
    var stage = document.getElementById('interactive-showcase');
    if (!stage) return;

    preloadSuiteImages();

    // Direct bindings on every tab button + container delegation
    document.querySelectorAll('.suite-tab-btn[data-module-idx]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var idx = parseInt(btn.getAttribute('data-module-idx'), 10);
        if (!isNaN(idx)) {
          renderSuiteModule(idx, true);
        }
      });
    });

    // Direct bindings on every dot
    document.querySelectorAll('.suite-dot[data-dot-idx]').forEach(function (dot) {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        var idx = parseInt(dot.getAttribute('data-dot-idx'), 10);
        if (!isNaN(idx)) {
          renderSuiteModule(idx, true);
        }
      });
    });

    // Prev / Next arrows click
    var prevBtn = document.getElementById('suite-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var nextIdx = (activeSuiteIndex - 1 + suiteModules.length) % suiteModules.length;
        renderSuiteModule(nextIdx, true);
      });
    }

    var nextBtn = document.getElementById('suite-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var nextIdx = (activeSuiteIndex + 1) % suiteModules.length;
        renderSuiteModule(nextIdx, true);
      });
    }

    // Live video flow toggle
    var flowToggleBtn = document.getElementById('suite-flow-toggle');
    if (flowToggleBtn) {
      flowToggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var mod = suiteModules[activeSuiteIndex];
        if (!mod || !mod.video) return;

        var imgEl = document.getElementById('suite-screen-img');
        var videoEl = document.getElementById('suite-screen-video');
        var flowLabel = document.getElementById('suite-flow-label');
        var lang = getLang();
        var resolvedVid = resolveAssetUrl(mod.video);

        isSuiteVideoPlaying = !isSuiteVideoPlaying;

        if (isSuiteVideoPlaying) {
          if (videoEl.getAttribute('src') !== resolvedVid) {
            videoEl.setAttribute('src', resolvedVid);
            videoEl.load();
          }
          videoEl.style.display = 'block';
          if (imgEl) imgEl.style.display = 'none';
          var p = videoEl.play();
          if (p !== undefined) p.catch(function () {});
          if (flowLabel) {
            flowLabel.textContent = lang === 'sw' ? 'Onyesha Picha Tulivu' : 'Show Static Screen';
          }
        } else {
          if (videoEl && typeof videoEl.pause === 'function') {
            videoEl.pause();
          }
          if (videoEl) videoEl.style.display = 'none';
          if (imgEl) imgEl.style.display = 'block';
          if (flowLabel) {
            flowLabel.textContent = lang === 'sw' ? 'Tazama Mtiririko wa Kazi' : 'Watch Live Interaction Flow';
          }
        }
      });
    }

    // Keyboard navigation
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        var prevIdx = (activeSuiteIndex - 1 + suiteModules.length) % suiteModules.length;
        renderSuiteModule(prevIdx, true);
      } else if (e.key === 'ArrowRight') {
        var nextIdx = (activeSuiteIndex + 1) % suiteModules.length;
        renderSuiteModule(nextIdx, true);
      }
    });

    renderSuiteModule(0, false);
  }

  // ============================================================
  // Global Event Listeners & Bootstrapping
  // ============================================================

  // Language switch button
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('#lang-toggle');
    if (!toggle) return;
    var current = getLang();
    setLang(current === 'en' ? 'sw' : 'en');
  });

  // Mobile navigation toggle & collapsible overlay
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  var navBackdrop = document.getElementById('nav-backdrop');
  var navClose = document.getElementById('nav-close');
  if (navToggle && navLinks) {
    function toggleMobileMenu(forceOpen) {
      var willOpen = typeof forceOpen === 'boolean' ? forceOpen : !navLinks.classList.contains('nav__links--open');
      navLinks.classList.toggle('nav__links--open', willOpen);
      navToggle.classList.toggle('nav__toggle--open', willOpen);
      navToggle.setAttribute('aria-expanded', String(willOpen));
      if (navBackdrop) {
        navBackdrop.classList.toggle('nav__backdrop--open', willOpen);
      }
      document.body.style.overflow = willOpen ? 'hidden' : '';
    }

    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    if (navClose) {
      navClose.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMobileMenu(false);
      });
    }

    // Event delegation on navLinks for close button or links
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('#nav-close') || e.target.closest('.nav__close')) {
        e.stopPropagation();
        toggleMobileMenu(false);
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', function () {
        toggleMobileMenu(false);
      });
    }

    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMobileMenu(false);
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
        toggleMobileMenu(false);
      }
    });
  }

  // Navbar scroll background
  var nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }, { passive: true });
  }

  // Initialize on DOM ready
  function boot() {
    initSuiteShowcase();
    var initialLang = getLang();
    setLang(initialLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
