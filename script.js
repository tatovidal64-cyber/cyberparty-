/* ============================================================
   CYBERPARTY — game logic (split from index.html)
   ============================================================ */
/* ============================================================
   I18N — diccionario de textos centralizado (ES / EN)
   Para editar o agregar textos: tocá SOLO este objeto TEXTS.
   En el HTML los textos fijos llevan data-i18n="clave".
   En el JS se usan con t('clave').
   ============================================================ */
const TEXTS = {
  en: {
    lang_label:       "EN",
    set_title:        "Settings",
    set_lang:         "Language",
    set_music:        "Music",
    set_theme:        "Theme",
    set_board:        "Customize board",
    pal_default:      "Default",
    pal_terminal:     "Terminal",
    pal_alert:        "Alert",
    pal_security:     "Security",
    pal_neon:         "Neon",
    setup_title:      "Set up your game",
    rules_toggle:     "How to play \u25BE",
    start_btn:        "Start Game",
    players:          "Players",
    my_props:         "Your Properties",
    last_card:        "Last Card",
    activity:         "Activity",
    game_over:        "Game Over",
    play_again:       "Play Again",
    avatar_prompt:    "Choose an avatar (your face)",
    player:           "Player",
    continue:         "Continue",
    correct_fb:       "\u2705 Correct! ",
    wrong_fb:         "\u274C Not quite. ",
    timeout_fb:       "\u23F1\uFE0F Out of time. ",
    speed_bonus:      "+{pts} speed bonus",
    props_empty:      "No properties yet — land on a free brand and answer correctly to acquire it.",
    scorm_standalone: "Standalone",
    scorm_connected:  "LMS connected",
    result_label:     "Your result reported to the LMS",
    game_started:     "Game started",
    good_luck:        "Good luck!",
    roll_dice:        "🎲 Roll Dice",
    end_turn:         "End Turn",
    tile_go:          "GO",
    tile_quiz:        "Quiz",
    tile_end_quiz:    "End Quiz",
    tile_detour:      "Detour",
    tile_luck:        "Luck",
    tile_challenge:   "Challenge",
    tile_levy:        "Levy",
    tile_hack:        "Hack",
    tile_phishing:    "Phishing",
    tile_password:    "Password",
    tile_2fa:         "2FA",
    tile_susmail:     "Suspicious Email",
    tile_soceng:      "Social Engineering",
    tile_shoulder:    "Shoulder Surfing",
    tile_antivirus:   "Antivirus",
    tile_firewall:    "Firewall",
    tile_vpn:         "VPN",
    tile_https:       "HTTPS",
    tile_encryption:  "Encryption",
    tile_hashing:     "Hashing",
    tile_malware:     "Malware",
    tile_ransomware:  "Ransomware",
    tile_keylogger:   "Keylogger",
    tile_ddos:        "DDoS",
    tile_zeroday:     "Zero-Day",
    tile_sqli:        "SQL Injection",
    tok_shield:       "Shield",
    tok_lock:         "Lock",
    tok_key:          "Key",
    tok_bug:          "Bug",
    tok_bot:          "Bot",
    tok_agent:        "Agent",
    center_sub:       "THINK BEFORE YOU CLICK",
    f11_banner:       "⛶ Press <b>F11</b> for fullscreen",
    tagline:          "The Board Game · Corporate Learning",
    setup_sub:        "Choose how many players, then pick a token for each. Pass & play on one device.",
    pts_abbr:         "Stars",
    stars_word:       "stars",
    accuracy_word:    "accuracy",
    quiz_word:        "quiz",
    panel_stars:      "Stars",
    stars_empty:      "No stars yet — answer the challenge tiles correctly to earn them.",
    q_kind:           "Question",
    won_pts:          "+{pts} Stars",
    won_pts_star:     "+{pts} Stars and a star ⭐",
    no_pts:           "No Stars this time.",
    lost_pts:         "−{pts} Stars",
    go_title:         "GO",
    go_body:          "You're on GO. You earn a small bonus each lap.",
    setback_title:    "Setback",
    setback_body:     "A security slip costs you {pts} Stars.",
    hack_title:       "Your mail got hacked!",
    hack_body:        "A phishing email caught you off guard. You lose {pts} Stars and move back {back} tiles.",
    luck_title:       "Luck",
    challenge_kind:   "Challenge",
    challenge_card:   "Answer correctly to win 150 Stars.",
    quiz_card:        "Answer correctly to win {pts} Stars.",
    detour_card:      "Detour — answer correctly for Stars, or lose some.",
    kind_luck:        "Luck",
    kind_challenge:   "Challenge",
    kind_quiz:        "Quiz",
    log_lap:          "{name} completed a lap. +{pts} Stars.",
    log_tile_correct: "{name} got it right. +{pts} Stars.",
    log_tile_wrong:   "{name} missed it. No Stars.",
    log_challenge_win: "{name} won the challenge. +{pts} Stars.",
    log_challenge_miss:"{name} missed the challenge.",
    log_quiz_win:     "{name} aced the quiz. +{pts} Stars.",
    log_quiz_miss:    "{name} missed the quiz.",
    log_detour_win:   "{name} cleared the detour. +{pts} Stars.",
    log_detour_miss:  "{name} slipped on the detour. −{pts} Stars.",
    log_luck:         "{name}: {text}",
    log_setback:      "{name} hit a setback. −{pts} Stars.",
    log_hack:         "{name} landed on a hack. −{pts} pts and moves back {back}.",
    log_hack_wrong:   "{name} got phished. −{pts} pts and moves back {back}.",
    winner_line:      "{name} wins with {pts} Stars!",
    rank_meta:        "{acc}% accuracy · {correct}/{attempted} correct",
    you_tag:          "you",
    sr_note:          "Score = 60% quiz accuracy ({acc}%) + 40% Stars standing.",
    sr_sent:          "Sent via SCORM 1.2 to your learning platform.",
    sr_standalone:    "Standalone mode — no LMS detected, so nothing was sent. Inside an LMS the score is recorded automatically.",
    pass_label:       "pass ≥ 70",
    status_passed:    "PASSED",
    status_failed:    "FAILED",
    howto_intro:      "CyberParty is a gamified learning game. Move around the board, answer questions, and rack up Stars — the more you know, the higher you score.",
    howto_move_h:     "Move & Answer",
    howto_move_p:     "Roll the dice, move around the board, and answer the question on each tile. The faster you answer correctly, the bigger your speed bonus.",
    howto_points_h:   "Earn Stars",
    howto_points_p:   "Brand tiles give you Stars when you answer correctly. Higher-value tiles are worth more.",
    howto_special_h:  "Bonus & Hack Tiles",
    howto_special_p:  "Quiz, Luck and Challenge tiles give bonus Stars. A wrong answer or the Hack tile gets your mail hacked: you lose Stars and move back.",
    howto_lms_h:      "LMS System",
    howto_lms_p:      "Connects to your LMS: your quiz accuracy and final standing are reported automatically.",
    howto_win_h:      "How to Win",
    howto_win_p:      "The player with the most Stars after the set number of rounds wins."
  },
  es: {
    lang_label:       "ES",
    set_title:        "Configuración",
    set_lang:         "Idioma",
    set_music:        "Música",
    set_theme:        "Tema",
    set_board:        "Personalizar tablero",
    pal_default:      "Predeterminado",
    pal_terminal:     "Terminal",
    pal_alert:        "Alerta",
    pal_security:     "Seguridad",
    pal_neon:         "Neón",
    setup_title:      "Configurá la partida",
    rules_toggle:     "Cómo se juega \u25BE",
    start_btn:        "Empezar",
    players:          "Jugadores",
    my_props:         "Tus propiedades",
    last_card:        "Última carta",
    activity:         "Actividad",
    game_over:        "Fin del juego",
    play_again:       "Jugar de nuevo",
    avatar_prompt:    "Elegí un avatar (tu cara)",
    player:           "Jugador",
    continue:         "Continuar",
    correct_fb:       "\u2705 Correcto! ",
    wrong_fb:         "\u274C Casi. ",
    timeout_fb:       "\u23F1\uFE0F Se acabó el tiempo. ",
    speed_bonus:      "+{pts} por velocidad",
    props_empty:      "Todavía no tenés propiedades. Caé en una marca libre y respondé bien para quedártela.",
    scorm_standalone: "Independiente",
    scorm_connected:  "LMS conectado",
    result_label:     "Tu resultado reportado al LMS",
    game_started:     "Partida iniciada",
    good_luck:        "Buena suerte!",
    roll_dice:        "🎲 Tirar los dados",
    end_turn:         "Terminar turno",
    tile_go:          "GO",
    tile_quiz:        "Quiz",
    tile_end_quiz:    "Quiz final",
    tile_detour:      "Desvío",
    tile_luck:        "Suerte",
    tile_challenge:   "Desafío",
    tile_levy:        "Multa",
    tile_hack:        "Hackeo",
    tile_phishing:    "Phishing",
    tile_password:    "Contraseña",
    tile_2fa:         "2FA",
    tile_susmail:     "Mail sospechoso",
    tile_soceng:      "Ingeniería social",
    tile_shoulder:    "Espionaje visual",
    tile_antivirus:   "Antivirus",
    tile_firewall:    "Firewall",
    tile_vpn:         "VPN",
    tile_https:       "HTTPS",
    tile_encryption:  "Cifrado",
    tile_hashing:     "Hashing",
    tile_malware:     "Malware",
    tile_ransomware:  "Ransomware",
    tile_keylogger:   "Keylogger",
    tile_ddos:        "DDoS",
    tile_zeroday:     "Día cero",
    tile_sqli:        "Inyección SQL",
    tok_shield:       "Escudo",
    tok_lock:         "Candado",
    tok_key:          "Llave",
    tok_bug:          "Bicho",
    tok_bot:          "Bot",
    tok_agent:        "Agente",
    center_sub:       "PENSÁ ANTES DE HACER CLIC",
    f11_banner:       "⛶ Apretá <b>F11</b> para pantalla completa",
    tagline:          "Juego de tablero · Capacitación corporativa",
    setup_sub:        "Elegí cuántos jugadores y un token para cada uno. Se juega por turnos en el mismo dispositivo.",
    pts_abbr:         "Stars",
    stars_word:       "estrellas",
    accuracy_word:    "aciertos",
    quiz_word:        "quiz",
    panel_stars:      "Estrellas",
    stars_empty:      "Todavía no tenés estrellas. Respondé bien las casillas de desafío para ganarlas.",
    q_kind:           "Pregunta",
    won_pts:          "+{pts} Stars",
    won_pts_star:     "+{pts} Stars y una estrella ⭐",
    no_pts:           "Sin Stars esta vez.",
    lost_pts:         "−{pts} Stars",
    go_title:         "GO",
    go_body:          "Estás en GO. Ganás un bonus chico cada vuelta.",
    setback_title:    "Penalización",
    setback_body:     "Un descuido de seguridad te cuesta {pts} Stars.",
    hack_title:       "Te hackearon el mail!",
    hack_body:        "Un mail de phishing te agarró desprevenido. Perdés {pts} Stars y retrocedés {back} casillas.",
    luck_title:       "Suerte",
    challenge_kind:   "Desafío",
    challenge_card:   "Respondé bien para ganar 150 Stars.",
    quiz_card:        "Respondé bien para ganar {pts} Stars.",
    detour_card:      "Desvío — respondé bien para sumar Stars, o perdés algunos.",
    kind_luck:        "Suerte",
    kind_challenge:   "Desafío",
    kind_quiz:        "Quiz",
    log_lap:          "{name} completó una vuelta. +{pts} Stars.",
    log_tile_correct: "{name} acertó. +{pts} Stars.",
    log_tile_wrong:   "{name} falló. Sin Stars.",
    log_challenge_win: "{name} ganó el desafío. +{pts} Stars.",
    log_challenge_miss:"{name} falló el desafío.",
    log_quiz_win:     "{name} la clavó. +{pts} Stars.",
    log_quiz_miss:    "{name} falló el quiz.",
    log_detour_win:   "{name} pasó el desvío. +{pts} Stars.",
    log_detour_miss:  "{name} se complicó en el desvío. −{pts} Stars.",
    log_luck:         "{name}: {text}",
    log_setback:      "{name} cayó en una penalización. −{pts} Stars.",
    log_hack:         "{name} cayó en un hackeo. −{pts} pts y retrocede {back}.",
    log_hack_wrong:   "{name} se comió un phishing. −{pts} pts y retrocede {back}.",
    winner_line:      "{name} gana con {pts} Stars!",
    rank_meta:        "{acc}% de aciertos · {correct}/{attempted} correctas",
    you_tag:          "vos",
    sr_note:          "Puntaje = 60% de aciertos ({acc}%) + 40% por posición en Stars.",
    sr_sent:          "Enviado por SCORM 1.2 a tu plataforma.",
    sr_standalone:    "Modo independiente. No se detectó LMS, así que no se envió nada. Dentro de un LMS el puntaje se registra solo.",
    pass_label:       "aprobado ≥ 70",
    status_passed:    "APROBADO",
    status_failed:    "DESAPROBADO",
    howto_intro:      "CyberParty es un juego de aprendizaje gamificado. Avanzás por el tablero, respondés preguntas y vas sumando Stars. Cuanto más sabés, más puntaje hacés.",
    howto_move_h:     "Avanzá y respondé",
    howto_move_p:     "Tirá los dados, avanzá por el tablero y respondé la pregunta de cada casilla. Cuanto más rápido acertás, más bonus de velocidad sumás.",
    howto_points_h:   "Sumá Stars",
    howto_points_p:   "Las casillas de marca te dan Stars cuando acertás. Las que valen más dan más Stars.",
    howto_special_h:  "Casillas de bonus y hackeo",
    howto_special_p:  "Las casillas de Quiz, Suerte y Desafío dan Stars extra. Una respuesta incorrecta o la casilla de Hackeo te hackean el mail: perdés Stars y retrocedés.",
    howto_lms_h:      "Sistema LMS",
    howto_lms_p:      "Se conecta a tu LMS: tus aciertos y tu posición final se reportan automáticamente.",
    howto_win_h:      "Cómo se gana",
    howto_win_p:      "Gana quien junta más Stars al terminar las rondas."
  }
};

let LANG = 'en';
try{ var _savedLang = localStorage.getItem('cyberparty-lang'); if(_savedLang==='es'||_savedLang==='en') LANG=_savedLang; }catch(e){}

/* devuelve el texto de la clave en el idioma activo (cae a EN si falta) */
function t(key){
  var L = TEXTS[LANG] || TEXTS.en;
  if(L[key]!=null) return L[key];
  if(TEXTS.en[key]!=null) return TEXTS.en[key];
  return key;
}

/* como t() pero reemplaza variables: tf('won_pts',{pts:150}) -> "+150 puntos" */
function tf(key, vars){
  var str = t(key);
  if(vars){ Object.keys(vars).forEach(function(k){ str = str.split('{'+k+'}').join(vars[k]); }); }
  return str;
}

/* vuelca los textos sobre todos los elementos del HTML con data-i18n */
function applyI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  var ll = document.getElementById('lang-label'); if(ll) ll.textContent = t('lang_label');
}

/* cambia el idioma y refresca lo que esté en pantalla */
function setLang(l){
  LANG = (l==='es') ? 'es' : 'en';
  try{ localStorage.setItem('cyberparty-lang', LANG); }catch(e){}
  applyI18n();
  if(typeof state!=='undefined' && state){ try{ buildBoard(); renderAll(); }catch(e){} }
  else { try{ renderCountRow(); renderPlayersSetup(); }catch(e){} }
}

/* ============================================================
   ICONS — cybersecurity token & tile glyphs (filled, single color)
   ============================================================ */
const ICONS = {
  shield:'<svg viewBox="0 0 24 24"><path d="M12 2 4 4.8v6.4c0 4.9 3.4 8.5 8 9.8 4.6-1.3 8-4.9 8-9.8V4.8L12 2z"/></svg>',
  lock:'<svg viewBox="0 0 24 24"><path d="M6.5 10.5h11a1.3 1.3 0 0 1 1.3 1.3v7.4a1.3 1.3 0 0 1-1.3 1.3h-11a1.3 1.3 0 0 1-1.3-1.3v-7.4a1.3 1.3 0 0 1 1.3-1.3z"/><path d="M8.2 10.5V8a3.8 3.8 0 0 1 7.6 0v2.5h-2V8a1.8 1.8 0 0 0-3.6 0v2.5z"/></svg>',
  key:'<svg viewBox="0 0 24 24"><path d="M12 2.5a4.2 4.2 0 0 0-1.3 8.18V21h2.6v-2h2v-2h-2v-1.6h2.2v-2h-2.2v-2.5A4.2 4.2 0 0 0 12 2.5zm0 2.4A1.8 1.8 0 1 1 10.2 6.7 1.8 1.8 0 0 1 12 4.9z"/></svg>',
  bug:'<svg viewBox="0 0 24 24"><path d="M12 7.5c2.5 0 4.4 2.6 4.4 5.7S14.5 19 12 19s-4.4-2.7-4.4-5.8S9.5 7.5 12 7.5z"/><path d="M12 4.4a2.6 2.6 0 0 1 2.4 1.6 8 8 0 0 0-4.8 0A2.6 2.6 0 0 1 12 4.4z"/><path d="M9.8 4.3 8 2.4l-.9.9 1.8 1.9zM14.2 4.3 16 2.4l.9.9-1.8 1.9z"/><path d="M7.4 11 4.8 9.6l-.5.9 2.6 1.4zM7 13.6H4.2v1H7zM7.4 16.8l-2.6 1.4.5.9L7.9 17.8zM16.6 11l2.6-1.4.5.9L17 12.4zM17 13.6h2.8v1H17zM16.6 16.8l2.6 1.4-.5.9L16.1 17.8z"/></svg>',
  robot:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11 2h2v2h3.2A2.8 2.8 0 0 1 19 6.8V17a2.8 2.8 0 0 1-2.8 2.8H7.8A2.8 2.8 0 0 1 5 17V6.8A2.8 2.8 0 0 1 7.8 4H11V2zM9 8.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zm6 0a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM8.5 14.5h7v2h-7z"/></svg>',
  user:'<svg viewBox="0 0 24 24"><path d="M12 4a3.6 3.6 0 1 1 0 7.2A3.6 3.6 0 0 1 12 4zM5.5 20.2a6.5 6.5 0 0 1 13 0 .8.8 0 0 1-.8.8H6.3a.8.8 0 0 1-.8-.8z"/></svg>',
  envelope:'<svg viewBox="0 0 24 24"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v.5l-9 5.6L3 7zM3 9l8.5 5.3a1 1 0 0 0 1 0L21 9v8.5A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z"/></svg>',
  hook:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.5 2.6a1.7 1.7 0 1 0 1.7 1.7 1.7 1.7 0 0 0-1.7-1.7zm0 1a.7.7 0 1 1-.7.7.7.7 0 0 1 .7-.7z"/><path d="M13 6.5v5.3a4.7 4.7 0 1 1-9.4 0V10h2v1.8a2.7 2.7 0 1 0 5.4 0V6.5z"/><path d="M5.9 9 3.6 11.7 3 8.7z"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 5C6.5 5 2.6 9.6 1 12c1.6 2.4 5.5 7 11 7s9.4-4.6 11-7c-1.6-2.4-5.5-7-11-7zm0 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2z"/></svg>',
  wall:'<svg viewBox="0 0 24 24"><path d="M3 4.5h18V8H3zM3 9h4v3.5H3zm5 0h8v3.5H8zm9 0h4v3.5h-4zM3 13.5h8V17H3zm9 0h8V17h-8zM3 18h4v1.5H3zm5 0h8v1.5H8zm9 0h4v1.5h-4z"/></svg>',
  globe:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6z"/><path d="M5.4 11h13.2v2H5.4zM11 5.4h2v13.2h-2z"/></svg>',
  wifi:'<svg viewBox="0 0 24 24"><path d="M12 17.4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6z"/><path d="M12 11.4a6 6 0 0 1 4.6 2.1l-1.9 1.9a3.4 3.4 0 0 0-5.4 0l-1.9-1.9A6 6 0 0 1 12 11.4z"/><path d="M12 6.2a11 11 0 0 1 8.1 3.6l-1.9 1.9a8.4 8.4 0 0 0-12.4 0L3.9 9.8A11 11 0 0 1 12 6.2z"/></svg>',
  hash:'<svg viewBox="0 0 24 24"><path d="M8.6 3h2l-.6 5h3.2l.6-5h2l-.6 5H20v2h-2.7l-.5 4H19v2h-2.4l-.6 5h-2l.6-5H9l-.6 5h-2l.6-5H4v-2h2.7l.5-4H5V8h2.4zM9.2 10l-.5 4H12l.5-4z"/></svg>',
  skull:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 3a8 8 0 0 0-8 8c0 2.8 1.4 4.9 3 6.1V19a1.6 1.6 0 0 0 1.6 1.6h.9V18h1.2v2.6h2.6V18h1.2v2.6h.9A1.6 1.6 0 0 0 17 19v-1.9c1.6-1.2 3-3.3 3-6.1a8 8 0 0 0-8-8zM9 10.4a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8zm6 0a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8z"/></svg>',
  bolt:'<svg viewBox="0 0 24 24"><path d="M13.2 2 5 13.2h5l-1.6 8.8 8.6-12h-5.4z"/></svg>',
  database:'<svg viewBox="0 0 24 24"><path d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 9.4c1.7 1.1 4.6 1.7 8 1.7s6.3-.6 8-1.7v3.4c0 1.7-3.6 3-8 3s-8-1.3-8-3zM4 15.3c1.7 1.1 4.6 1.7 8 1.7s6.3-.6 8-1.7V18.7c0 1.7-3.6 3-8 3s-8-1.3-8-3z"/></svg>',
  mask:'<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 8.6C6 7 9 6.4 12 6.4s6 .6 9 2.2c0 4-2 7.2-5 7.2a3.6 3.6 0 0 1-3-1.7 3.6 3.6 0 0 1-3 1.7c-3 0-5-3.2-5-7.2zm4.2 1.7a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 0 0-3.2 0zm6.6 0a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 0 0-3.2 0z"/></svg>',
  bomb:'<svg viewBox="0 0 24 24"><path d="M14.6 4.3 16.1 2.8l1.4 1.4-1.5 1.5.9.9-1.4 1.4-.9-.9A7 7 0 1 1 13 5.7l.9.9 1.4-1.4z"/><path d="M18.6 2.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/></svg>'
};

/* ============================================================
   SFX — every sound is synthesized with the Web Audio API.
   No external audio files, so it stays self-contained for SCORM.
   ============================================================ */
const SFX = (function(){
  var ctx=null;
  var GAIN=1.7;   // master multiplier for all sound effects
  function ac(){
    if(ctx===null){ try{ ctx=new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ ctx=false; } }
    if(ctx && ctx.state==='suspended'){ try{ ctx.resume(); }catch(e){} }
    return ctx||null;
  }
  function play(freq,t0,dur,type,vol){
    var c=ac(); if(!c) return;
    var o=c.createOscillator(), g=c.createGain();
    o.type=type||'sine'; o.frequency.setValueAtTime(freq,t0);
    o.connect(g); g.connect(c.destination);
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime((vol||0.16)*GAIN,t0+0.012);
    g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
    o.start(t0); o.stop(t0+dur+0.03);
  }
  function seq(notes){ var c=ac(); if(!c) return; var t=c.currentTime; notes.forEach(function(n){ play(n.f,t+(n.d||0),n.dur||0.18,n.type||'sine',n.v||0.16); }); }
  function now(){ var c=ac(); return c?c.currentTime:0; }
  function chaching(){ var t=now(); play(196,t,0.05,'square',0.10); play(1318,t+0.04,0.08,'square',0.13); play(1760,t+0.11,0.11,'square',0.14); play(2637,t+0.16,0.5,'sine',0.10); play(2093,t+0.16,0.5,'sine',0.08); play(3520,t+0.16,0.45,'sine',0.04); }
  return {
    click(){ play(660,now(),0.05,'triangle',0.13); },
    step(){ var c=ac(); if(!c) return; var t=c.currentTime; var len=Math.floor(c.sampleRate*0.05); var b=c.createBuffer(1,len,c.sampleRate); var d=b.getChannelData(0); for(var i=0;i<len;i++){ d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.2); } var s=c.createBufferSource(); s.buffer=b; var f=c.createBiquadFilter(); f.type='bandpass'; f.frequency.value=1700; f.Q.value=0.9; var g=c.createGain(); g.gain.value=0.16*GAIN; s.connect(f); f.connect(g); g.connect(c.destination); s.start(t); },
    dice(){ var c=ac(); if(!c) return; var n=c.currentTime; [0,0.06,0.12,0.18].forEach(function(d){ play(150+Math.random()*170,n+d,0.06,'square',0.10); }); },
    buy(){ chaching(); },
    correct(){ seq([{f:659,dur:0.13,type:'triangle',v:0.16},{f:880,d:0.10,dur:0.13,type:'triangle',v:0.16},{f:1047,d:0.20,dur:0.13,type:'triangle',v:0.16},{f:1319,d:0.30,dur:0.30,type:'triangle',v:0.17},{f:1976,d:0.34,dur:0.30,type:'sine',v:0.08}]); },
    wrong(){ var c=ac(); if(!c) return; var t=c.currentTime; function sl(f1,f2,t0,dur,vol){ var o=c.createOscillator(),g=c.createGain(); o.type='sawtooth'; o.frequency.setValueAtTime(f1,t0); o.frequency.linearRampToValueAtTime(f2,t0+dur); o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(0.0001,t0); g.gain.exponentialRampToValueAtTime(vol*GAIN,t0+0.03); g.gain.exponentialRampToValueAtTime(0.0001,t0+dur); o.start(t0); o.stop(t0+dur+0.03); } sl(311,294,t,0.22,0.12); sl(277,262,t+0.24,0.22,0.12); sl(247,185,t+0.48,0.55,0.13); },
    luck(){ seq([{f:660,dur:0.20,type:'sine',v:0.12},{f:990,d:0.06,dur:0.20,type:'sine',v:0.12},{f:1320,d:0.12,dur:0.22,type:'sine',v:0.12},{f:1760,d:0.18,dur:0.26,type:'sine',v:0.10}]); },
    quiz(){ seq([{f:784,dur:0.14,type:'sine',v:0.15},{f:1047,d:0.14,dur:0.24,type:'sine',v:0.15}]); },
    go(){ chaching(); },
    hack(){ var c=ac(); if(!c) return; var t=c.currentTime;
      function bz(f1,f2,t0,dur,vol){ var o=c.createOscillator(),g=c.createGain(); o.type='sawtooth'; o.frequency.setValueAtTime(f1,t0); o.frequency.exponentialRampToValueAtTime(f2,t0+dur); o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(0.0001,t0); g.gain.exponentialRampToValueAtTime(vol*GAIN,t0+0.02); g.gain.exponentialRampToValueAtTime(0.0001,t0+dur); o.start(t0); o.stop(t0+dur+0.03); }
      bz(440,90,t,0.18,0.12); bz(320,70,t+0.15,0.20,0.12); bz(220,46,t+0.34,0.30,0.13);
      var len=Math.floor(c.sampleRate*0.20); var b=c.createBuffer(1,len,c.sampleRate); var d=b.getChannelData(0); for(var i=0;i<len;i++){ d[i]=(Math.random()*2-1)*Math.pow(1-i/len,1.4); }
      var s=c.createBufferSource(); s.buffer=b; var f=c.createBiquadFilter(); f.type='bandpass'; f.frequency.value=820; f.Q.value=0.8; var g=c.createGain(); g.gain.value=0.11*GAIN; s.connect(f); f.connect(g); g.connect(c.destination); s.start(t); }
  };
})();

/* ============================================================
   MUSIC — looping background track (user-supplied file: bg-music.mp3)
   ============================================================ */
const MUSIC = (function(){
  /* background track: user-supplied royalty-free file bg-music.mp3 */
  var audio=null, wanted=true, VOL=0.17;
  try{ if(localStorage.getItem('cyberparty-music')==='off') wanted=false; }catch(e){}
  function el(){
    if(!audio){
      audio=new Audio('ikoliks_aj-lounge-jazz-elevator-music-342629.mp3');
      audio.loop=true; audio.preload='auto'; audio.volume=VOL;
    }
    return audio;
  }
  function updateBtn(){ var b=document.getElementById('music-toggle'); if(b) b.classList.toggle('on', wanted); }
  function start(){ if(!wanted) return; var a=el(); try{ var p=a.play(); if(p&&p.catch) p.catch(function(){}); }catch(e){} updateBtn(); }
  function stop(){ if(audio){ try{ audio.pause(); }catch(e){} } updateBtn(); }
  return {
    start:start, stop:stop, wanted(){ return wanted; },
    toggle(){ wanted=!wanted; try{ localStorage.setItem('cyberparty-music', wanted?'on':'off'); }catch(e){} updateBtn(); if(wanted) start(); else stop(); }
  };
})();
/* ============================================================
   VOICE — speaks the rolled dice total aloud (browser text-to-speech)
   ============================================================ */
const VOICE = (function(){
  var ok = ('speechSynthesis' in window);
  var voice = null;
  function pick(){
    if(!ok) return;
    var vs = window.speechSynthesis.getVoices()||[];
    var en = vs.filter(function(v){ return /^en/i.test(v.lang); });
    function score(v){
      var n=(v.name||'').toLowerCase(); var s=0;
      if(/natural|neural|premium|enhanced|online/.test(n)) s+=6;   // high-quality, human-like
      if(/google/.test(n)) s+=4;
      if(/\b(david|guy|mark|daniel|james|christopher|eric|brian|matthew|aaron|fred|alex|gordon)\b/.test(n)) s+=3; // announcer-ish male
      if(/\bmale\b/.test(n)) s+=2;
      if(/en-us|en_us|united states/.test(v.lang.toLowerCase()+n)) s+=1;
      return s;
    }
    en.sort(function(a,b){ return score(b)-score(a); });
    voice = en[0] || vs[0] || null;
  }
  if(ok){ pick(); try{ window.speechSynthesis.onvoiceschanged = pick; }catch(e){} }
  var WORDS={2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve'};
  return {
    say(n){
      if(!ok) return;
      try{
        var u=new SpeechSynthesisUtterance(WORDS[n]||String(n));
        u.lang='en-US'; u.rate=0.9; u.pitch=0.95; u.volume=1;   // natural pace, near-natural pitch
        if(voice) u.voice=voice;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(u);
      }catch(e){}
    }
  };
})();

/* wire music button + start audio on first user gesture (autoplay policy) */
(function(){
  var b=document.getElementById('music-toggle');
  if(b){
    b.classList.toggle('on', MUSIC.wanted());
    b.addEventListener('pointerdown',function(e){ e.stopPropagation(); });
    b.addEventListener('click',function(){ SFX.click(); MUSIC.toggle(); });
  }
  function go(){ if(MUSIC.wanted()) MUSIC.start(); document.removeEventListener('pointerdown',go); document.removeEventListener('keydown',go); }
  document.addEventListener('pointerdown',go);
  document.addEventListener('keydown',go);
})();

/* ============================================================
   FIREWORKS — celebratory burst behind the modal on a correct answer
   ============================================================ */
function fireworks(){
  const cv=document.getElementById('fx-canvas'); if(!cv) return;
  const rect=cv.getBoundingClientRect(); if(rect.width<2) return;
  const DPR=Math.min(window.devicePixelRatio||1,2);
  cv.width=rect.width*DPR; cv.height=rect.height*DPR;
  const g=cv.getContext('2d'); g.setTransform(DPR,0,0,DPR,0,0);
  const W=rect.width, H=rect.height;
  const colors=['#11ACED','#2FA84F','#F4B73F','#D8323C','#5BB5E9','#7A4FBF','#FFFFFF'];
  let parts=[];
  function burst(x,y){ const n=64, base=colors[Math.floor(Math.random()*colors.length)]; for(let i=0;i<n;i++){ const a=(Math.PI*2*i)/n+Math.random()*0.25, sp=2+Math.random()*4.2; parts.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:1,col:Math.random()<0.28?'#fff':base,size:1.4+Math.random()*1.8}); } }
  burst(W*0.30,H*0.36);
  setTimeout(()=>burst(W*0.70,H*0.40),170);
  setTimeout(()=>burst(W*0.50,H*0.26),340);
  let frames=0;
  function step(){
    frames++; g.clearRect(0,0,W,H);
    parts.forEach(p=>{ p.vy+=0.055; p.x+=p.vx; p.y+=p.vy; p.vx*=0.985; p.vy*=0.985; p.life-=0.016; });
    parts=parts.filter(p=>p.life>0);
    parts.forEach(p=>{ g.globalAlpha=Math.max(0,p.life); g.fillStyle=p.col; g.beginPath(); g.arc(p.x,p.y,p.size,0,Math.PI*2); g.fill(); });
    g.globalAlpha=1;
    if(parts.length>0 && frames<150) requestAnimationFrame(step); else g.clearRect(0,0,W,H);
  }
  requestAnimationFrame(step);
}

/* fizzle: the "wrong answer" counterpart to fireworks — a dud/deflated burst.
   The card shakes, a red glow pulses, and muted debris tumbles down and fades. */
function fizzle(){
  const modal=document.getElementById('modal');
  if(modal){ modal.classList.remove('shake'); void modal.offsetWidth; modal.classList.add('shake'); setTimeout(function(){ modal.classList.remove('shake'); },560); }
  const cv=document.getElementById('fx-canvas'); if(!cv) return;
  const rect=cv.getBoundingClientRect(); if(rect.width<2) return;
  const DPR=Math.min(window.devicePixelRatio||1,2);
  cv.width=rect.width*DPR; cv.height=rect.height*DPR;
  const g=cv.getContext('2d'); g.setTransform(DPR,0,0,DPR,0,0);
  const W=rect.width, H=rect.height;
  const colors=['#D8323C','#a32a31','#6b6f76','#9aa0a8','#3a3d42'];
  let parts=[];
  // weak upward "dud" puffs that immediately fall back down (heavy gravity)
  function puff(x,y){ const n=24; for(let i=0;i<n;i++){ const a=-Math.PI/2+(Math.random()-0.5)*1.7, sp=1+Math.random()*3; parts.push({x:x,y:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2.2,life:1,col:colors[Math.floor(Math.random()*colors.length)],size:1.6+Math.random()*2.4,rot:Math.random()*6.28,vr:(Math.random()-0.5)*0.3}); } }
  puff(W*0.5,H*0.42);
  setTimeout(function(){ puff(W*0.34,H*0.40); },110);
  setTimeout(function(){ puff(W*0.66,H*0.44); },110);
  let flash=1, frames=0;
  function step(){
    frames++; g.clearRect(0,0,W,H);
    if(flash>0){ const grd=g.createRadialGradient(W/2,H/2,Math.min(W,H)*0.2,W/2,H/2,Math.max(W,H)*0.72); grd.addColorStop(0,'rgba(216,50,60,0)'); grd.addColorStop(1,'rgba(216,50,60,'+(0.32*flash)+')'); g.fillStyle=grd; g.fillRect(0,0,W,H); flash-=0.06; }
    parts.forEach(function(p){ p.vy+=0.22; p.x+=p.vx; p.y+=p.vy; p.vx*=0.99; p.rot+=p.vr; p.life-=0.017; });
    parts=parts.filter(function(p){ return p.life>0 && p.y<H+24; });
    parts.forEach(function(p){ g.globalAlpha=Math.max(0,p.life); g.fillStyle=p.col; g.save(); g.translate(p.x,p.y); g.rotate(p.rot); g.fillRect(-p.size,-p.size*0.6,p.size*2,p.size*1.2); g.restore(); });
    g.globalAlpha=1;
    if((parts.length>0||flash>0) && frames<150) requestAnimationFrame(step); else g.clearRect(0,0,W,H);
  }
  requestAnimationFrame(step);
}

/* hack: el efecto de "te hackearon el mail" — lluvia de caracteres glitch
   con flash rojo de alarma detrás del modal. Hermano de fireworks/fizzle. */
function hackFx(){
  const modal=document.getElementById('modal');
  if(modal){ modal.classList.remove('hacked'); void modal.offsetWidth; modal.classList.add('hacked'); }
  const cv=document.getElementById('fx-canvas'); if(!cv) return;
  const rect=cv.getBoundingClientRect(); if(rect.width<2) return;
  const DPR=Math.min(window.devicePixelRatio||1,2);
  cv.width=rect.width*DPR; cv.height=rect.height*DPR;
  const g=cv.getContext('2d'); g.setTransform(DPR,0,0,DPR,0,0);
  const W=rect.width, H=rect.height;
  const glyphs="01<>/\\#@$%&*?ABCDEF0123456789{}[]=+";
  const step_px=14, cols=Math.max(1,Math.floor(W/step_px));
  let drops=[];
  for(let i=0;i<cols;i++){ drops.push({x:i*step_px+4, y:Math.random()*-H, v:4+Math.random()*7}); }
  let flash=1, frames=0;
  function step(){
    frames++; g.clearRect(0,0,W,H);
    if(flash>0){ g.fillStyle='rgba(216,50,60,'+(0.30*flash)+')'; g.fillRect(0,0,W,H); flash-=0.05; }
    g.font='14px monospace'; g.textBaseline='top';
    drops.forEach(function(dp){
      const ch=glyphs[Math.floor(Math.random()*glyphs.length)];
      g.fillStyle = Math.random()<0.22 ? '#ff5b66' : '#33ff77';
      g.globalAlpha = 0.85;
      g.fillText(ch, dp.x, dp.y);
      dp.y+=dp.v; if(dp.y>H+20){ dp.y=Math.random()*-40; }
    });
    g.globalAlpha=1;
    if(frames<72) requestAnimationFrame(step); else g.clearRect(0,0,W,H);
  }
  requestAnimationFrame(step);
}
const TOKENS = [
  {id:'shield', tkey:'tok_shield', color:'#11ACED', icon:'shield'},
  {id:'lock',   tkey:'tok_lock',   color:'#6E2B8B', icon:'lock'},
  {id:'key',    tkey:'tok_key',    color:'#E0322B', icon:'key'},
  {id:'bug',    tkey:'tok_bug',    color:'#1B8A4C', icon:'bug'},
  {id:'bot',    tkey:'tok_bot',    color:'#E5318C', icon:'robot'},
  {id:'agent',  tkey:'tok_agent',  color:'#C77F1A', icon:'user'}
];
const tokenById = id => TOKENS.find(t=>t.id===id);
const tokenDisc = (color,icon,cls='') => `<span class="${cls}" style="background:${color}">${ICONS[icon]}</span>`;

/* Avatar faces — players pick a face emoji (diverse selection) */
const AVATARS = [
  "👦🏻", "👨🏻", "👧🏻", "👩🏻", "👦🏼", "👨🏼", "👧🏼", "👩🏼", "👦🏽", "👨🏽", "👧🏽", "👩🏽", "👨🏿‍🦱", "👧🏿", "👩🏿‍🦱", "👩🏿"
];
const avatarDisc = (p,cls='') => `<span class="${cls} av" style="background:${p.color}">${p.avatar||"😀"}</span>`;

/* ============================================================
   BOARD DEFINITION — 28 tiles (8x8 perimeter), cybersecurity themed
   ============================================================ */
const G = {prob:'var(--g-basics)',kids:'var(--g-aware)',plant:'var(--g-tools)',waters:'var(--g-data)',indul:'var(--g-malware)',spec:'var(--g-attacks)'};
/* name = id interno (estable); tkey = etiqueta bilingue; icon = glifo del set ICONS */
function prop(name,tkey,icon,group,color,price){return {type:'property',name,tkey,icon,group,color,price,ownerId:null,level:0};}

const BOARD = [
  {type:'go',name:'GO'},                                              //0
  prop('Phishing','tile_phishing','hook','prob',G.prob,60),           //1
  {type:'luck',name:'Luck Deck'},                                     //2
  prop('Password','tile_password','key','prob',G.prob,60),            //3
  prop('2FA','tile_2fa','lock','prob',G.prob,80),                     //4
  prop('Suspicious Email','tile_susmail','envelope','kids',G.kids,100),//5
  {type:'challenge',name:'Challenge Deck'},                           //6
  {type:'quiz_corner',name:'Challenge Quiz'},                         //7  corner
  prop('Social Engineering','tile_soceng','mask','kids',G.kids,100),  //8
  prop('Shoulder Surfing','tile_shoulder','eye','kids',G.kids,120),   //9
  {type:'luck',name:'Luck Deck'},                                     //10
  prop('Antivirus','tile_antivirus','shield','plant',G.plant,140),    //11
  prop('Firewall','tile_firewall','wall','plant',G.plant,140),        //12
  {type:'hack',name:'Hacked Mail'},                                   //13
  {type:'end_quiz',name:'End of Street Quiz'},                        //14 corner
  prop('VPN','tile_vpn','wifi','plant',G.plant,160),                  //15
  prop('HTTPS','tile_https','globe','waters',G.waters,180),           //16
  {type:'challenge',name:'Challenge Deck'},                           //17
  prop('Encryption','tile_encryption','key','waters',G.waters,180),   //18
  prop('Hashing','tile_hashing','hash','waters',G.waters,200),        //19
  prop('Malware','tile_malware','bug','indul',G.indul,220),           //20
  {type:'go_to_quiz',name:'Quiz Zone Detour'},                        //21 corner
  prop('Ransomware','tile_ransomware','skull','indul',G.indul,220),   //22
  {type:'luck',name:'Luck Deck'},                                     //23
  prop('Keylogger','tile_keylogger','eye','indul',G.indul,240),       //24
  prop('DDoS','tile_ddos','bolt','spec',G.spec,260),                  //25
  prop('Zero-Day','tile_zeroday','bomb','spec',G.spec,280),           //26
  prop('SQL Injection','tile_sqli','database','spec',G.spec,320)      //27
];
const GROUP_SIZE = {prob:3,kids:3,plant:3,waters:3,indul:3,spec:3};

/* grid coordinates for an 8x8 perimeter ring (GO at bottom-right) */
function tileCoords(i){
  if(i===0)  return {r:8,c:8};
  if(i<=6)   return {r:8, c:8-i};
  if(i===7)  return {r:8, c:1};
  if(i<=13)  return {r:8-(i-7), c:1};
  if(i===14) return {r:1, c:1};
  if(i<=20)  return {r:1, c:1+(i-14)};
  if(i===21) return {r:1, c:8};
  return {r:1+(i-21), c:8};
}

/* ============================================================
   BANCO DE PREGUNTAS — estructura bilingüe (ES / EN)
   Cada pregunta: enunciado (q), 4 opciones (o), indice correcto (a, 0-3),
   y explicacion/feedback (e). Todo con sus dos idiomas.
   >> Banco definitivo provisto por Nadia: 30 preguntas de ciberseguridad,
      bilingues ES/EN, con 4 opciones y explicacion por pregunta.
   ============================================================ */
const QUESTIONS = [
  {
    q: { en:"What is phishing?",
         es:"¿Qué es el phishing?" },
    o: { en:["An attack that steals information by pretending to be trustworthy","A type of virus that deletes files","An encryption method","A tool for making backups"],
         es:["Un ataque para robar información simulando ser confiable","Un tipo de virus que borra archivos","Un método de encriptación","Una herramienta para hacer copias de seguridad"] },
    a: 0,
    e: { en:"Phishing tricks people by posing as a trustworthy entity (a bank, company, or contact) to steal data or credentials.",
         es:"El phishing engaña a la persona haciéndose pasar por una entidad confiable (banco, empresa, contacto) para robar datos o credenciales." }
  },
  {
    q: { en:"Which of these is the most secure password?",
         es:"¿Cuál es la contraseña más segura?" },
    o: { en:["12345678","JaneDoe","G7!kP#2zL9","password123"],
         es:["12345678","JaneDoe","G7!kP#2zL9","password123"] },
    a: 2,
    e: { en:"A strong password combines uppercase and lowercase letters, numbers, and symbols, and avoids predictable patterns or personal information.",
         es:"Una contraseña segura combina mayúsculas, minúsculas, números y símbolos, sin patrones predecibles ni datos personales." }
  },
  {
    q: { en:"What does MFA (Multi-Factor Authentication) mean?",
         es:"¿Qué significa MFA (Multi-Factor Authentication)?" },
    o: { en:["Using several passwords","Verification using multiple factors","Automatic authentication","Logging in without a password"],
         es:["Usar varias contraseñas","Verificación con múltiples factores","Autenticación automática","Iniciar sesión sin contraseña"] },
    a: 1,
    e: { en:"MFA requires at least two different ways to verify identity (for example, a password plus a code), making unauthorized access harder.",
         es:"MFA exige al menos dos formas distintas de verificar la identidad (por ejemplo, contraseña más un código), dificultando el acceso no autorizado." }
  },
  {
    q: { en:"What is ransomware?",
         es:"¿Qué es un ransomware?" },
    o: { en:["Software that speeds up your computer","Malware that locks your data and demands a ransom","A backup tool","A free antivirus program"],
         es:["Software que acelera la computadora","Malware que secuestra información y pide rescate","Herramienta de backup","Un antivirus gratuito"] },
    a: 1,
    e: { en:"Ransomware encrypts files or locks system access and demands payment to restore them, with no guarantee of recovery.",
         es:"El ransomware cifra archivos o bloquea el acceso al sistema y exige un pago para restaurarlos, sin garantía de recuperarlos." }
  },
  {
    q: { en:"What should you do with a suspicious email?",
         es:"¿Qué deberías hacer con un email sospechoso?" },
    o: { en:["Open the attachments","Ignore it or report it","Forward it to coworkers","Reply asking the sender to confirm who they are"],
         es:["Abrir los adjuntos","Ignorarlo o reportarlo","Reenviarlo a colegas","Responderlo pidiendo que confirmen quién lo envía"] },
    a: 1,
    e: { en:"With a suspicious email, the safest move is not to interact with it and instead report it to your security or IT team.",
         es:"Ante un email sospechoso, lo más seguro es no interactuar con él y reportarlo al equipo de seguridad o IT." }
  },
  {
    q: { en:"What is a VPN?",
         es:"¿Qué es una VPN?" },
    o: { en:["A virtual private network","An antivirus program","A type of firewall","A program for clearing your browsing history"],
         es:["Una red privada virtual","Un antivirus","Un tipo de firewall","Un programa para borrar el historial de navegación"] },
    a: 0,
    e: { en:"A VPN creates an encrypted connection between your device and the internet, hiding your traffic and protecting your data on public networks.",
         es:"Una VPN crea una conexión cifrada entre tu dispositivo e internet, ocultando tu tráfico y protegiendo tu información en redes públicas." }
  },
  {
    q: { en:"What does antivirus software do?",
         es:"¿Qué hace un antivirus?" },
    o: { en:["Improves your computer's speed","Detects and removes malware","Protects your WiFi network","Automatically encrypts your files"],
         es:["Mejora la velocidad","Detecta y elimina malware","Protege la red WiFi","Encripta automáticamente tus archivos"] },
    a: 1,
    e: { en:"Antivirus software scans files and programs to detect, block, and remove malicious software before it causes harm.",
         es:"El antivirus analiza archivos y programas para detectar, bloquear y eliminar software malicioso antes de que cause daño." }
  },
  {
    q: { en:"What is \"shoulder surfing\"?",
         es:"¿Qué es el \"shoulder surfing\"?" },
    o: { en:["A remote attack","Physically spying on screens or keyboards","Hacking a network","A type of phishing sent by text message"],
         es:["Ataque remoto","Espiar pantallas o teclados físicamente","Hackeo de redes","Un tipo de phishing por SMS"] },
    a: 1,
    e: { en:"Shoulder surfing means physically looking over someone's shoulder to see what they type or view on their screen and steal information.",
         es:"El shoulder surfing consiste en observar físicamente, por encima del hombro, lo que alguien escribe o ve en su pantalla para robar información." }
  },
  {
    q: { en:"Which of these is a good security habit?",
         es:"¿Cuál de estos es un buen hábito de seguridad?" },
    o: { en:["Sharing passwords","Using the same password everywhere","Changing passwords regularly","Writing passwords on a visible piece of paper"],
         es:["Compartir contraseñas","Usar la misma clave en todo","Cambiar contraseñas regularmente","Anotar las contraseñas en un papel visible"] },
    a: 2,
    e: { en:"Changing passwords regularly reduces the risk that they remain useful to an attacker if they were ever leaked or stolen.",
         es:"Cambiar las contraseñas con regularidad reduce el riesgo de que sigan siendo útiles para un atacante si fueron filtradas o robadas." }
  },
  {
    q: { en:"What does HTTPS mean?",
         es:"¿Qué significa HTTPS?" },
    o: { en:["A faster webpage","A secure, encrypted connection","A free website","A site verified by the government"],
         es:["Página más rápida","Conexión segura cifrada","Sitio gratis","Un sitio verificado por el gobierno"] },
    a: 1,
    e: { en:"HTTPS encrypts the communication between your browser and a website, protecting the data sent during the connection.",
         es:"HTTPS cifra la comunicación entre el navegador y el sitio web, protegiendo los datos que se envían durante la conexión." }
  },
  {
    q: { en:"What is social engineering?",
         es:"¿Qué es ingeniería social?" },
    o: { en:["Hacking carried out by bots","Manipulating people to obtain information","A physical attack","Software for analyzing social media"],
         es:["Hackeo con robots","Manipulación de personas para obtener datos","Ataque físico","Un software para analizar redes sociales"] },
    a: 1,
    e: { en:"Social engineering exploits trust, fear, or urgency to manipulate a person into revealing information or taking an action.",
         es:"La ingeniería social aprovecha la confianza, el miedo o la urgencia para manipular a una persona y que revele información o realice una acción." }
  },
  {
    q: { en:"What is a firewall?",
         es:"¿Qué es un firewall?" },
    o: { en:["Antivirus software","A filter that controls network traffic","Automatic backup software","A program that generates passwords"],
         es:["Antivirus","Filtro que controla tráfico de red","Backup automático","Un programa que genera contraseñas"] },
    a: 1,
    e: { en:"A firewall filters traffic going in and out of a network, blocking unauthorized connections according to security rules.",
         es:"Un firewall filtra el tráfico que entra y sale de una red, bloqueando conexiones no autorizadas según reglas de seguridad." }
  },
  {
    q: { en:"What is a brute-force attack?",
         es:"¿Qué es un ataque de fuerza bruta?" },
    o: { en:["A physical attack","Trying many passwords until one works","Using phishing","Stealing a laptop to access its files"],
         es:["Ataque físico","Intentar muchas contraseñas hasta acertar","Uso de phishing","Robar una laptop para acceder a sus archivos"] },
    a: 1,
    e: { en:"In a brute-force attack, the attacker systematically tries many password combinations until finding the right one.",
         es:"En un ataque de fuerza bruta, el atacante prueba sistemáticamente muchas combinaciones de contraseñas hasta encontrar la correcta." }
  },
  {
    q: { en:"What is malware?",
         es:"¿Qué es malware?" },
    o: { en:["Legitimate software","Malicious software","Defective hardware","An unwanted email message"],
         es:["Software legítimo","Software malicioso","Hardware defectuoso","Un mensaje de correo no deseado"] },
    a: 1,
    e: { en:"Malware is any software designed to damage, spy on, or take control of a device without the user's consent.",
         es:"Malware es cualquier software diseñado para dañar, espiar o tomar control de un dispositivo sin el consentimiento del usuario." }
  },
  {
    q: { en:"What is spear phishing?",
         es:"¿Qué es el spear phishing?" },
    o: { en:["Mass phishing","An attack targeted at a specific person","An automated attack","A virus that spreads through USB drives"],
         es:["Phishing masivo","Ataque dirigido a una persona específica","Ataque automático","Un virus que se propaga por USB"] },
    a: 1,
    e: { en:"Spear phishing is a personalized attack aimed at a specific person or organization, using real information to appear credible.",
         es:"El spear phishing es un ataque personalizado dirigido a una persona u organización específica, usando información real para parecer creíble." }
  },
  {
    q: { en:"What does a keylogger do?",
         es:"¿Qué hace un keylogger?" },
    o: { en:["Locks the keyboard","Records what you type","Encrypts data","Automatically deletes files"],
         es:["Bloquea teclado","Registra lo que escribís","Encripta datos","Borra archivos automáticamente"] },
    a: 1,
    e: { en:"A keylogger secretly records every key you press, allowing an attacker to steal passwords and other sensitive information.",
         es:"Un keylogger registra en secreto cada tecla que presionás, lo que permite a un atacante robar contraseñas y otra información sensible." }
  },
  {
    q: { en:"What is encryption?",
         es:"¿Qué es el cifrado?" },
    o: { en:["Data compression","Protecting information by encoding it","A backup copy","A type of WiFi connection"],
         es:["Compresión de datos","Protección de información mediante codificación","Copia de seguridad","Un tipo de conexión WiFi"] },
    a: 1,
    e: { en:"Encryption transforms information into a code that can only be read with the correct key, protecting it from unauthorized access.",
         es:"El cifrado transforma la información en un código que solo puede leerse con la clave correcta, protegiéndola de accesos no autorizados." }
  },
  {
    q: { en:"What is a security update?",
         es:"¿Qué es una actualización de seguridad?" },
    o: { en:["Changing your password","A patch that fixes vulnerabilities","Restarting the system","An automatic backup"],
         es:["Cambiar contraseña","Parche que corrige vulnerabilidades","Reiniciar sistema","Una copia de seguridad automática"] },
    a: 1,
    e: { en:"Security updates fix known flaws in software, preventing attackers from exploiting them.",
         es:"Las actualizaciones de seguridad corrigen fallas conocidas en el software, evitando que los atacantes las exploten." }
  },
  {
    q: { en:"What is shadow IT?",
         es:"¿Qué es el shadow IT?" },
    o: { en:["Cloud-based systems","Using technology without IT's approval","Using antivirus software","A group of anonymous hackers"],
         es:["Sistemas en la nube","Uso de tecnología sin aprobación de IT","Uso de antivirus","Un grupo de hackers anónimos"] },
    a: 1,
    e: { en:"Shadow IT happens when someone uses apps or devices not approved by the IT team, which can create security risks.",
         es:"El shadow IT ocurre cuando alguien usa apps o dispositivos no autorizados por el equipo de IT, lo que puede generar riesgos de seguridad." }
  },
  {
    q: { en:"What is a DDoS attack?",
         es:"¿Qué es un ataque DDoS?" },
    o: { en:["A physical attack","Overwhelming a system with massive amounts of requests","Stealing passwords","A virus that encrypts files"],
         es:["Ataque físico","Saturación de un sistema con múltiples solicitudes","Robo de contraseñas","Un virus que cifra archivos"] },
    a: 1,
    e: { en:"A DDoS attack floods a system or server with massive traffic, making it unavailable to legitimate users.",
         es:"Un ataque DDoS satura un sistema o servidor con tráfico masivo, dejándolo inaccesible para los usuarios legítimos." }
  },
  {
    q: { en:"Which best describes the concept of \"least privilege\"?",
         es:"¿Qué describe mejor el concepto de \"least privilege\"?" },
    o: { en:["Granting full access to avoid getting blocked","Granting only the permissions necessary for each role","Limiting access exclusively to administrators","Allowing open access during the first 24 hours"],
         es:["Dar acceso completo para evitar bloqueos","Otorgar solo los permisos necesarios para cada rol","Limitar el acceso únicamente a administradores","Permitir acceso libre durante las primeras 24 horas"] },
    a: 1,
    e: { en:"The least privilege principle means giving each person only the access needed for their job, reducing risk if their account is compromised.",
         es:"El principio de mínimo privilegio busca que cada persona tenga solo los accesos necesarios para su trabajo, reduciendo el riesgo si su cuenta se ve comprometida." }
  },
  {
    q: { en:"What is the main difference between authentication and authorization?",
         es:"¿Cuál es la diferencia principal entre autenticación y autorización?" },
    o: { en:["There is no difference","Authentication verifies identity; authorization defines access","Authorization happens before authentication","Authentication defines access; authorization verifies identity"],
         es:["No hay diferencia","Autenticación verifica identidad; autorización define accesos","Autorización ocurre antes que autenticación","Autenticación define accesos; autorización verifica identidad"] },
    a: 1,
    e: { en:"Authentication confirms who a person is (for example, with a password), while authorization determines what they can do once identified.",
         es:"La autenticación confirma quién es una persona (por ejemplo, con una contraseña), mientras que la autorización determina qué puede hacer una vez identificada." }
  },
  {
    q: { en:"Which technique involves automatically testing username and password combinations leaked from previous breaches against different services?",
         es:"¿Qué técnica consiste en probar automáticamente combinaciones de usuarios y contraseñas obtenidas de filtraciones previas en distintos servicios?" },
    o: { en:["Phishing","Credential stuffing","Man-in-the-middle","Ransomware as a service"],
         es:["Phishing","Credential stuffing","Man-in-the-middle","Ransomware as a Service"] },
    a: 1,
    e: { en:"Credential stuffing uses credentials leaked from one site to automatically test them on other services, relying on the fact that many people reuse passwords.",
         es:"El credential stuffing usa credenciales filtradas en un sitio para probarlas automáticamente en otros servicios, aprovechando que mucha gente reutiliza contraseñas." }
  },
  {
    q: { en:"Which mechanism helps ensure data integrity during transmission?",
         es:"¿Qué mecanismo ayuda a garantizar la integridad de los datos durante su transmisión?" },
    o: { en:["Hashing","Compression","Indexing","Streaming"],
         es:["Hashing","Compresión","Indexación","Streaming"] },
    a: 0,
    e: { en:"Hashing generates a unique fingerprint of the data; if that fingerprint changes upon receipt, it means the data was altered during transmission.",
         es:"El hashing genera una huella única de los datos; si esa huella cambia al recibirlos, significa que fueron alterados durante la transmisión." }
  },
  {
    q: { en:"Which best describes a \"privilege escalation\" attack?",
         es:"¿Qué describe mejor un ataque \"Privilege Escalation\"?" },
    o: { en:["Gaining initial access to a system","Gaining permissions beyond what was authorized","Deleting user accounts","Locking a system until a ransom is paid"],
         es:["Acceso inicial a un sistema","Aumento de permisos más allá de los autorizados","Eliminación de usuarios","Bloqueo del sistema hasta pagar un rescate"] },
    a: 1,
    e: { en:"Privilege escalation occurs when an attacker, after gaining access to a system, manages to obtain greater permissions than they originally had.",
         es:"La escalada de privilegios ocurre cuando un atacante, tras acceder a un sistema, logra obtener permisos mayores a los que originalmente tenía." }
  },
  {
    q: { en:"What is a zero-day vulnerability?",
         es:"¿Qué es un zero-day?" },
    o: { en:["An already-fixed bug","An unknown vulnerability","A common virus","An attack that happens exactly at midnight"],
         es:["Error ya solucionado","Vulnerabilidad desconocida","Virus común","Un ataque que ocurre exactamente a medianoche"] },
    a: 1,
    e: { en:"A zero-day is a vulnerability that hasn't yet been discovered or patched by the vendor, which makes it especially dangerous.",
         es:"Un zero-day es una vulnerabilidad que aún no fue descubierta ni corregida por el fabricante, lo que la hace especialmente peligrosa." }
  },
  {
    q: { en:"What is the principle of least privilege?",
         es:"¿Qué es el principio de mínimo privilegio?" },
    o: { en:["Granting all access","Granting only the access that's necessary","Not using permissions at all","Granting temporary access without review"],
         es:["Dar todos los accesos","Otorgar solo los accesos necesarios","No usar permisos","Otorgar accesos temporales sin revisión"] },
    a: 1,
    e: { en:"This principle states that each user or system should have only the access strictly necessary to do its job.",
         es:"Este principio establece que cada usuario o sistema debe tener únicamente los accesos indispensables para cumplir su función." }
  },
  {
    q: { en:"What type of attack is \"Man-in-the-Middle\"?",
         es:"¿Qué tipo de ataque es el \"Man-in-the-Middle\"?" },
    o: { en:["Interception of communication","A physical attack","A virus","A type of malware that encrypts files"],
         es:["Intercepción de comunicación","Ataque físico","Virus","Un tipo de malware que cifra archivos"] },
    a: 0,
    e: { en:"In a Man-in-the-Middle attack, the attacker positions themselves between two communicating parties to intercept or alter the exchanged information.",
         es:"En un ataque Man-in-the-Middle, el atacante se interpone entre dos partes que se comunican para interceptar o alterar la información intercambiada." }
  },
  {
    q: { en:"What is credential stuffing?",
         es:"¿Qué es el credential stuffing?" },
    o: { en:["Creating passwords","Reusing stolen credentials across multiple sites","A DDoS attack","Encrypting credentials to protect them"],
         es:["Crear contraseñas","Reutilizar credenciales robadas en múltiples sitios","Ataque DDoS","Cifrar credenciales para protegerlas"] },
    a: 1,
    e: { en:"Credential stuffing reuses usernames and passwords stolen from one site to try to access accounts on other services.",
         es:"El credential stuffing reutiliza usuarios y contraseñas robados en un sitio para intentar acceder a cuentas en otros servicios." }
  },
  {
    q: { en:"What is the main goal of a SQL injection attack?",
         es:"¿Cuál es el objetivo principal de un ataque de SQL Injection?" },
    o: { en:["Disrupting the service","Manipulating database queries to access or modify information","Encrypting the user's files","Stealing the victim's WiFi password"],
         es:["Interrumpir el servicio","Manipular consultas a la base de datos para acceder o modificar información","Encriptar archivos del usuario","Robar la contraseña WiFi de la víctima"] },
    a: 1,
    e: { en:"SQL injections exploit flaws in forms or queries to insert malicious code and access or modify data in the database.",
         es:"La inyección SQL aprovecha fallas en formularios o consultas para insertar código malicioso y acceder o modificar datos de la base de datos." }
  }
];

/* Mazo de Suerte — efecto instantáneo de puntos (sin pregunta), bilingüe */
const LUCK = [
  {t:{en:"Security training paid off. +120 Stars.",          es:"La capacitación rindió. +120 Stars."},            pts:120},
  {t:{en:"You clicked a sketchy link. −80 Stars.",            es:"Hiciste clic en un link dudoso. −80 Stars."},      pts:-80},
  {t:{en:"You reported a phishing attempt. +150 Stars.",      es:"Reportaste un intento de phishing. +150 Stars."},  pts:150},
  {t:{en:"A weak password was found on your account. −60 Stars.", es:"Encontraron una contraseña débil en tu cuenta. −60 Stars."}, pts:-60},
  {t:{en:"You turned on two-factor authentication. +100 Stars.",  es:"Activaste la verificación en dos pasos. +100 Stars."},      pts:100},
  {t:{en:"You shared a file with the wrong person. −100 Stars.",  es:"Compartiste un archivo con la persona equivocada. −100 Stars."}, pts:-100},
  {t:{en:"You spotted a fake invoice. +130 Stars.",           es:"Detectaste una factura falsa. +130 Stars."},      pts:130},
  {t:{en:"You updated your software on time. +90 Stars.",     es:"Actualizaste el software a tiempo. +90 Stars."},   pts:90}
];

/* ============================================================
   SCORM 1.2 WRAPPER — works in an LMS, degrades to standalone
   ============================================================ */
const SCORM = (function(){
  let api=null, ok=false, finished=false;
  function find(w){let n=0;while(w && w.API==null && w.parent && w.parent!==w && n<12){n++;w=w.parent;}return w?w.API:null;}
  function get(){let a=find(window); if(!a && window.opener) a=find(window.opener); return a;}
  return {
    init(){ try{ api=get(); if(api){ const r=api.LMSInitialize(""); ok=(r==="true"||r===true); if(ok){ api.LMSSetValue("cmi.core.lesson_status","incomplete"); api.LMSCommit(""); } } }catch(e){ ok=false; } return ok; },
    studentName(){ try{ return ok? (api.LMSGetValue("cmi.core.student_name")||"") : ""; }catch(e){ return ""; } },
    finish(score,status){ try{ if(ok && !finished){ api.LMSSetValue("cmi.core.score.min","0"); api.LMSSetValue("cmi.core.score.max","100"); api.LMSSetValue("cmi.core.score.raw",String(score)); api.LMSSetValue("cmi.core.lesson_status",status); api.LMSCommit(""); api.LMSFinish(""); finished=true; } }catch(e){} },
    quit(){ try{ if(ok && !finished){ api.LMSCommit(""); api.LMSFinish(""); finished=true; } }catch(e){} },
    connected(){ return ok; }
  };
})();
window.addEventListener("beforeunload", ()=>SCORM.quit());

/* ============================================================
   GAME STATE & HELPERS
   ============================================================ */
const MAX_ROUNDS=12, LAP_BONUS=50;
/* ---- HACKEO: cuánto duele que te hackeen el mail ----
   HACK_BACK    = casillas que retrocedés
   HACK_PENALTY = puntos que perdés
   Aplica al caer en la casilla de Hackeo y al responder mal una pregunta de marca. */
const HACK_BACK=3, HACK_PENALTY=50;
/* ---- PUNTAJE POR VELOCIDAD ----
   QUESTION_TIME   = segundos que tenés para responder cada pregunta
   SPEED_BONUS_MAX = puntos extra máximos por responder al instante (se reparten
                     según el tiempo que te sobra; respondés justo = +0)
   Si se acaba el tiempo cuenta como respuesta incorrecta. */
const QUESTION_TIME=20, SPEED_BONUS_MAX=75;
let state=null;
let qDeck=[];
const $ = s=>document.querySelector(s);
const rand=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const cur=()=>state.players[state.current];
const byId=id=>state.players.find(p=>p.id===id);
const aliveCount=()=>state.players.filter(p=>p.alive).length;

function nextQuestion(){ if(qDeck.length===0){ qDeck=[...QUESTIONS].sort(()=>Math.random()-0.5);} return qDeck.pop(); }
function addPoints(p,n){ p.points=Math.max(0,(p.points||0)+n); }
function accuracy(p){ return p.attempted? p.correct/p.attempted : 0; }

function log(msg){ state.log.push(msg); renderLog(); }

/* ============================================================
   SETUP SCREEN
   ============================================================ */
let setupCount=2;
let setupAssign={}; // playerIndex -> tokenId
let setupNames={};
let setupAvatar={}; // playerIndex -> emoji

function renderCountRow(){
  const row=$("#count-row"); row.innerHTML="";
  for(let n=2;n<=4;n++){
    const b=document.createElement("button");
    b.className="count-btn"+(n===setupCount?" sel":"");
    b.textContent=n;
    b.onclick=()=>{ SFX.click(); setupCount=n; // trim assignments beyond count
      Object.keys(setupAssign).forEach(k=>{ if(+k>=n) delete setupAssign[k]; });
      renderCountRow(); renderPlayersSetup(); };
    row.appendChild(b);
  }
}
function renderPlayersSetup(){
  const wrap=$("#players-setup"); wrap.innerHTML="";
  for(let i=0;i<setupCount;i++){
    const div=document.createElement("div"); div.className="psetup";
    const head=document.createElement("div"); head.className="psetup-head";
    head.innerHTML=`<span class="pn">P${i+1}</span>`;
    const input=document.createElement("input");
    input.value=setupNames[i]||(t('player')+" "+(i+1));
    input.maxLength=16;
    input.oninput=e=>setupNames[i]=e.target.value;
    head.appendChild(input);
    div.appendChild(head);

    const grid=document.createElement("div"); grid.className="token-grid";
    TOKENS.forEach(tk=>{
      const takenByOther=Object.entries(setupAssign).some(([k,v])=>v===tk.id && +k!==i);
      const selected=setupAssign[i]===tk.id;
      const opt=document.createElement("button");
      opt.className="token-opt"+(selected?" sel":"")+(takenByOther?" taken":"");
      opt.innerHTML=`${tokenDisc(tk.color,tk.icon,'tk')}<span>${t(tk.tkey)}</span>`;
      opt.onclick=()=>{ if(takenByOther)return; SFX.click(); setupAssign[i]=tk.id; renderPlayersSetup(); updateStart(); };
      grid.appendChild(opt);
    });
    div.appendChild(grid);

    if(setupAvatar[i]===undefined) setupAvatar[i]=AVATARS[i % AVATARS.length];
    const ahead=document.createElement("div"); ahead.className="avatar-head"; ahead.textContent=t('avatar_prompt');
    div.appendChild(ahead);
    const agrid=document.createElement("div"); agrid.className="avatar-grid";
    AVATARS.forEach(em=>{
      const a=document.createElement("button");
      a.className="avatar-opt"+(setupAvatar[i]===em?" sel":"");
      a.textContent=em;
      a.onclick=()=>{ SFX.click(); setupAvatar[i]=em; renderPlayersSetup(); };
      agrid.appendChild(a);
    });
    div.appendChild(agrid);

    wrap.appendChild(div);
  }
  updateStart();
}
function updateStart(){
  let ready=true;
  for(let i=0;i<setupCount;i++){ if(!setupAssign[i]) ready=false; }
  $("#start-btn").disabled=!ready;
}
$("#rules-toggle").onclick=()=>{ SFX.click(); $("#rules-box").classList.toggle("show"); };
$("#start-btn").onclick=()=>{ SFX.click(); startGame(); };

/* ============================================================
   START / RESET GAME
   ============================================================ */
function showScreen(id){ document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")); $("#"+id).classList.add("active"); }

function startGame(){
  // reset board ownership
  BOARD.forEach(t=>{ if(t.type==='property'){ t.ownerId=null; t.level=0; } });
  qDeck=[];
  const players=[];
  const lmsName=SCORM.studentName();
  for(let i=0;i<setupCount;i++){
    const tk=tokenById(setupAssign[i]);
    let name=setupNames[i]||(t('player')+" "+(i+1));
    if(i===0 && lmsName){ // use LMS name for the enrolled learner (Player 1), format "Last, First" -> "First Last"
      const parts=lmsName.split(",").map(s=>s.trim());
      name = parts.length===2? (parts[1]+" "+parts[0]) : lmsName;
    }
    players.push({id:i,name,tokenId:tk.id,color:tk.color,icon:tk.icon,avatar:setupAvatar[i]||AVATARS[i % AVATARS.length],points:0,pos:0,alive:true,correct:0,attempted:0});
  }
  state={players,current:0,round:1,phase:'idle',dice:[1,1],log:[],lastCard:null,pendingEnd:false};

  enterGame();
}

/* Entrada compartida al juego: pill SCORM + tablero + pantalla + primer render.
   La usan startGame() (local) y el modo online una vez que 'state' está armado. */
function enterGame(){
  const connected=SCORM.init();
  $("#scorm-pill").classList.toggle("on",connected);
  $("#scorm-text").textContent=connected?t('scorm_connected'):t('scorm_standalone');
  buildBoard();
  showScreen("game-screen");
  log(t('game_started')+" — "+state.players.length+" "+t('players').toLowerCase()+". "+t('good_luck'));
  renderAll();
  if(typeof NET!=='undefined' && NET.afterEnterGame) NET.afterEnterGame();
}

/* ============================================================
   BOARD DOM
   ============================================================ */
function buildBoard(){
  const board=$("#board"); board.innerHTML="";
  const T=t;
  BOARD.forEach((t,i)=>{
    const {r,c}=tileCoords(i);
    const el=document.createElement("div");
    el.dataset.idx=i; el.style.gridRow=r; el.style.gridColumn=c;
    if(t.color) el.style.setProperty('--neon', t.color);
    let cls="tile", inner="";
    if(t.type==='property'){
      inner=`<div class="tile-wm" style="color:${t.color}">${ICONS[t.icon]||ICONS.shield}</div>
             <div class="band" style="background:${t.color}"></div>
             <div class="lvl"></div>
             <div class="tname">${T(t.tkey)}</div>
             <div class="tprice">+${t.price}<span class="ps">${T('pts_abbr')}</span></div>`;
    } else if(t.type==='go'){ cls+=" corner go"; inner=`<div class="tspecial">${T('tile_go')}<br>⭐ +${LAP_BONUS}</div>`; }
    else if(t.type==='quiz_corner'){ cls+=" corner quizc"; inner=`<div class="ticon">❓</div><div class="tspecial">${T('tile_quiz')}</div>`; }
    else if(t.type==='end_quiz'){ cls+=" corner endquiz"; inner=`<div class="ticon">🏁</div><div class="tspecial">${T('tile_end_quiz')}</div>`; }
    else if(t.type==='go_to_quiz'){ cls+=" corner gotoquiz"; inner=`<div class="ticon">↪</div><div class="tspecial">${T('tile_detour')}</div>`; }
    else if(t.type==='luck'){ cls+=" luck"; inner=`<div class="ticon">🍀</div><div class="tspecial">${T('tile_luck')}</div>`; }
    else if(t.type==='challenge'){ cls+=" challenge"; inner=`<div class="ticon">🎯</div><div class="tspecial">${T('tile_challenge')}</div>`; }
    else if(t.type==='hack'){ cls+=" hack"; inner=`<div class="ticon">📧</div><div class="tspecial">${T('tile_hack')}</div>`; }
    el.className=cls; el.innerHTML=inner;
    const tok=document.createElement("div"); tok.className="tile-tokens"; el.appendChild(tok);
    board.appendChild(el);
  });
  // center medallion
  const center=document.createElement("div"); center.className="center"; center.id="center";
  center.innerHTML=`<div class="clogo">CYBER<span class="dot">P</span>ARTY</div>
    <div class="csub">${t('center_sub')}</div>
    <div class="turn-pill" id="turn-pill"></div>
    <div class="dice-row"><div class="die" id="die1"></div><div class="die" id="die2"></div></div>
    <button class="btn btn-roll" id="roll-btn">${t('roll_dice')}</button>
    <button class="btn btn-end" id="end-btn" disabled>${t('end_turn')}</button>`;
  $("#board").appendChild(center);
  $("#roll-btn").onclick=rollAndMove;
  $("#end-btn").onclick=()=>{ SFX.click(); endTurn(); };
}

/* ============================================================
   RENDERING
   ============================================================ */
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
function renderDie(el,val){ el.innerHTML=""; const on=PIPS[val]; for(let k=0;k<9;k++){ const d=document.createElement("i"); if(on.includes(k))d.classList.add("on"); el.appendChild(d);} }
function renderDice(){ renderDie($("#die1"),state.dice[0]); renderDie($("#die2"),state.dice[1]); }

function renderTokens(movedTilePulse){
  document.querySelectorAll(".tile-tokens").forEach(c=>c.innerHTML="");
  state.players.forEach(p=>{
    if(!p.alive) return;
    const tile=document.querySelector(`.tile[data-idx="${p.pos}"] .tile-tokens`);
    if(!tile) return;
    const pawn=document.createElement("div");
    pawn.className="pawn"+(p.id===state.current?" cur":"");
    pawn.style.background=p.color;
    pawn.innerHTML=ICONS[p.icon];
    tile.appendChild(pawn);
  });
  if(movedTilePulse!=null){
    const t=document.querySelector(`.tile[data-idx="${movedTilePulse}"]`);
    if(t){ t.classList.remove("land-flash"); void t.offsetWidth; t.classList.add("land-flash"); }
  }
}

function renderBoardOwners(){
  BOARD.forEach((t,i)=>{
    if(t.type!=='property') return;
    const el=document.querySelector(`.tile[data-idx="${i}"]`);
    const lvl=el.querySelector(".lvl");
    el.querySelectorAll(".owner-badge").forEach(b=>b.remove());
    if(t.ownerId!=null){
      const owner=byId(t.ownerId);
      el.classList.add("owned"); el.style.setProperty("--owner",owner.color);
      const badge=document.createElement("div"); badge.className="owner-badge"; badge.style.background=owner.color;
      badge.innerHTML=ICONS[owner.icon]; el.appendChild(badge);
    } else { el.classList.remove("owned"); el.style.removeProperty("--owner"); }
    lvl.innerHTML=""; for(let k=0;k<t.level;k++){ lvl.innerHTML+="<i></i>"; }
  });
}

function renderTurnPill(){
  const p=cur();
  $("#turn-pill").innerHTML=`${avatarDisc(p,'ptok')} ${p.name} · R${state.round}/${MAX_ROUNDS}`;
}
function renderTopScore(){
  // en modo online, arriba a la derecha se muestra SIEMPRE tu propio jugador
  // (no el de turno); en modo local (pass & play) sigue mostrando el de turno.
  const online = typeof NET!=='undefined' && NET.mode && NET.mode!=='off';
  const p = (online && state.players[NET.seat]) ? state.players[NET.seat] : cur();
  $("#tb-money").innerHTML=`${avatarDisc(p,'ptok')} ⭐ ${p.points} ${t('pts_abbr')}`;
}
function renderCurCard(){
  const p=cur();
  const acc=p.attempted? Math.round(100*p.correct/p.attempted):0;
  $("#cur-card").innerHTML=`
    <div class="big-tok" style="background:${p.color}">${p.avatar||"😀"}</div>
    <div class="ci"><div class="cn">${p.name}</div><div class="cm">⭐ ${p.points} ${t('pts_abbr')}</div>
    <div class="psub" style="font-size:11px;color:var(--muted);font-weight:700">${acc}% ${t('accuracy_word')}</div></div>`;
}
function renderPlayers(){
  const list=$("#players-list"); list.innerHTML="";
  state.players.forEach((p,i)=>{
    const acc=p.attempted? Math.round(100*p.correct/p.attempted):0;
    const row=document.createElement("div");
    row.className="prow"+(i===state.current?" active":"");
    row.innerHTML=`${avatarDisc(p,'ptok')}
      <div class="pmeta"><div class="pname">${p.name}</div>
      <div class="psub">${acc}% ${t('quiz_word')}</div></div>
      <div class="pcash">⭐ ${p.points}</div>`;
    list.appendChild(row);
  });
}
function renderLastCard(){
  if(!state.lastCard){ $("#lastcard-panel").style.display="none"; return; }
  $("#lastcard-panel").style.display="block";
  const c=state.lastCard;
  const color = c.kind==='luck'?'var(--azure)': c.kind==='challenge'?'var(--brand)':'var(--red)';
  const label = c.kind==='luck'?t('kind_luck'): c.kind==='challenge'?t('kind_challenge'):t('kind_quiz');
  $("#lastcard").innerHTML=`<span class="lc-kind" style="background:${color}">${label}</span><div>${c.text}</div>`;
}
function renderLog(){
  const el=$("#log"); el.innerHTML=state.log.slice(-30).map(m=>`<div>${m}</div>`).join("");
}
function renderControls(){
  const rb=$("#roll-btn"); if(rb) rb.disabled = state.phase!=='idle';
  const eb=$("#end-btn"); if(eb) eb.disabled  = state.phase!=='acted';
  if(typeof NET!=='undefined' && NET.gateControls) NET.gateControls();
}
function purchaseFx(idx,color){
  const board=$("#board"); const el=document.querySelector(`.tile[data-idx="${idx}"]`);
  if(!board||!el) return;
  el.style.setProperty('--owner',color);
  el.classList.remove('buy-flash'); void el.offsetWidth; el.classList.add('buy-flash');
  const f=document.createElement('div'); f.className='buy-float'; f.textContent='✓';
  f.style.setProperty('--owner',color);
  f.style.left=(el.offsetLeft+el.offsetWidth/2)+'px';
  f.style.top=(el.offsetTop+el.offsetHeight/2)+'px';
  board.appendChild(f);
  setTimeout(()=>{ try{ f.remove(); }catch(e){} },1150);
}
function renderAll(){
  renderDice(); renderTokens(); renderBoardOwners(); renderTurnPill();
  renderTopScore(); renderCurCard(); renderPlayers(); renderLastCard(); renderControls();
}

/* ============================================================
   MODAL SYSTEM
   ============================================================ */
function closeModal(){ $("#modal-bg").classList.remove("show"); }
function modalAccent(){ return (state&&state.players&&state.players[state.current])?state.players[state.current].color:'var(--brand)'; }
function frameModal(){
  var m=$("#modal"); var c=modalAccent();
  m.style.border='5px solid '+c;
  m.style.boxShadow='0 0 0 4px '+c+'33, 0 24px 60px rgba(0,0,0,.45)';
  var p=(state&&state.players&&state.players[state.current])?state.players[state.current]:null;
  var old=m.querySelector('.modal-player'); if(old) old.remove();
  if(p){
    var b=document.createElement('div');
    b.className='modal-player';
    b.style.background=c;
    b.innerHTML='<span class="mp-face">'+(p.avatar||'')+'</span><span class="mp-name">'+p.name+'</span>';
    m.insertBefore(b, m.firstChild);
  }
}
function showInfo(title,body,icon){
  return new Promise(res=>{
    $("#modal").innerHTML=`${icon?`<div class="m-icon">${icon}</div>`:""}<h2>${title}</h2><div class="m-body">${body}</div><div class="m-btns"><button class="m-btn primary" id="m-ok">${t('continue')}</button></div>`;
    frameModal();
    $("#modal-bg").classList.add("show");
    $("#m-ok").onclick=()=>{ SFX.click(); closeModal(); res(); };
  });
}
/* showHack: como showInfo pero con borde rojo, glitch y sonido de hackeo */
function showHack(title,body){
  return new Promise(res=>{
    $("#modal").innerHTML=`<div class="m-icon">📧💀</div><h2>${title}</h2><div class="m-body">${body}</div><div class="m-btns"><button class="m-btn primary" id="m-ok">${t('continue')}</button></div>`;
    frameModal();
    var m=$("#modal");
    m.style.border='5px solid var(--red)';
    m.style.boxShadow='0 0 0 4px rgba(216,50,60,.25), 0 24px 60px rgba(0,0,0,.5)';
    $("#modal-bg").classList.add("show");
    SFX.hack();
    hackFx();
    $("#m-ok").onclick=()=>{ SFX.click(); m.classList.remove('hacked'); closeModal(); res(); };
  });
}
function showChoice(title,body,buttons){
  return new Promise(res=>{
    const btns=buttons.map((b,i)=>`<button class="m-btn ${b.primary?'primary':''}" data-i="${i}" ${b.disabled?'disabled':''}>${b.label}</button>`).join("");
    $("#modal").innerHTML=`<h2>${title}</h2><div class="m-body">${body}</div><div class="m-btns">${btns}</div>`;
    frameModal();
    $("#modal-bg").classList.add("show");
    $("#modal").querySelectorAll(".m-btn").forEach(el=>{ el.onclick=()=>{ SFX.click(); closeModal(); res(buttons[+el.dataset.i].val); }; });
  });
}
/* askQuestion: muestra una pregunta con cronómetro.
   Más rápido respondés bien = más bonus de velocidad (hasta SPEED_BONUS_MAX).
   Si se acaba el tiempo, cuenta como incorrecta. Lleva el registro de aciertos. */
function askQuestion(contextTitle,opts={}){
  const q=nextQuestion();
  return new Promise(res=>{
    const optHtml=(q.o[LANG]||q.o.en).map((o,i)=>`<button class="opt" data-i="${i}">${o}</button>`).join("");
    $("#modal").innerHTML=`<div class="m-kind">${contextTitle}</div>`
      +`<div class="qtimer"><div class="qtimer-fill" id="qtimer-fill"></div></div>`
      +`<div class="m-q">${q.q[LANG]||q.q.en}</div><div id="opts">${optHtml}</div><div id="qfeedback"></div>`;
    frameModal();
    $("#modal-bg").classList.add("show");
    const optEls=$("#modal").querySelectorAll(".opt");
    const fill=$("#qtimer-fill");
    const total=QUESTION_TIME*1000;
    const deadline=Date.now()+total;
    let done=false, rafId=null;

    function tick(){
      if(done) return;
      const left=deadline-Date.now();
      const frac=Math.max(0,left/total);
      if(fill){
        fill.style.width=(frac*100)+"%";
        fill.classList.toggle("warn", frac<=0.5 && frac>0.2);
        fill.classList.toggle("danger", frac<=0.2);
      }
      if(left<=0){ finish(-1); return; }
      rafId=requestAnimationFrame(tick);
    }
    rafId=requestAnimationFrame(tick);

    function finish(chosen){
      if(done) return; done=true;
      if(rafId) cancelAnimationFrame(rafId);
      const timedOut = chosen<0;
      const correct = !timedOut && chosen===q.a;
      const left=Math.max(0,deadline-Date.now());
      const speed = correct ? left/total : 0;          // 0..1 según tiempo restante
      optEls.forEach((e,i)=>{ e.disabled=true; if(i===q.a)e.classList.add("correct"); if(i===chosen&&!correct)e.classList.add("wrong"); });
      const p=cur(); p.attempted++;
      let speedBonus=0;
      if(correct){ p.correct++; speedBonus=Math.round(SPEED_BONUS_MAX*speed); if(speedBonus>0) addPoints(p,speedBonus); SFX.correct(); fireworks(); }
      else { SFX.wrong(); fizzle(); }
      const head = correct ? t('correct_fb') : (timedOut ? t('timeout_fb') : t('wrong_fb'));
      let extra = correct ? (opts.correctMsg?`<br><b>${opts.correctMsg}</b>`:"") : (opts.wrongMsg?`<br><b>${opts.wrongMsg}</b>`:"");
      if(correct && speedBonus>0) extra += `<br><b class="speed-line">⚡ ${tf('speed_bonus',{pts:speedBonus})}</b>`;
      $("#qfeedback").innerHTML=`<div class="feedback ${correct?'ok':'no'}">${head}${q.e[LANG]||q.e.en}${extra}</div><div class="m-btns" style="margin-top:14px"><button class="m-btn primary" id="q-ok">${t('continue')}</button></div>`;
      $("#q-ok").onclick=()=>{ SFX.click(); closeModal(); res({correct,q,speed}); };
    }

    optEls.forEach(el=>{ el.onclick=()=>{ finish(+el.dataset.i); }; });
  });
}

/* ============================================================
   POINTS — sin pagos ni quiebra en el modelo de puntos
   (la suma/resta de puntos se hace con addPoints)
   ============================================================ */

/* ============================================================
   TURN FLOW
   ============================================================ */
/* Roll Dice & End Turn handlers are wired inside buildBoard (both buttons live in the board center). */

async function rollAndMove(){
  if(state.phase!=='idle') return;
  if(typeof NET!=='undefined' && NET.isMyTurn && !NET.isMyTurn()) return; // online: no es mi turno
  state.phase='moving'; renderControls();
  const p=cur();
  state.dice=[rand(1,6),rand(1,6)];
  SFX.dice();
  $("#die1").classList.add("rolling"); $("#die2").classList.add("rolling");
  // quick roll animation
  for(let k=0;k<9;k++){ renderDie($("#die1"),rand(1,6)); renderDie($("#die2"),rand(1,6)); await sleep(70+k*16); }
  renderDice();
  $("#die1").classList.remove("rolling"); $("#die2").classList.remove("rolling");
  const steps=state.dice[0]+state.dice[1];
  VOICE.say(steps);
  log(`🎲 ${p.name} rolled ${state.dice[0]} + ${state.dice[1]} = ${steps}.`);
  await sleep(330);
  for(let i=0;i<steps;i++){
    await sleep(360);
    p.pos=(p.pos+1)%BOARD.length;
    SFX.step();
    if(p.pos===0){ addPoints(p,LAP_BONUS); SFX.go(); log("🏁 "+tf('log_lap',{name:p.name,pts:LAP_BONUS})); renderTopScore(); renderCurCard(); renderPlayers(); }
    renderTokens();
  }
  renderTokens(p.pos);
  await sleep(420);
  await resolveTile();
  renderAll();
  if(state.pendingEnd){ return endGame(); }
  state.phase='acted'; renderControls();
  if(typeof NET!=='undefined' && NET.syncState) NET.syncState();
}

async function resolveTile(){
  const p=cur(); const tile=BOARD[p.pos];
  switch(tile.type){
    case 'go': await showInfo(t('go_title'), t('go_body'), "🟢"); break;
    case 'hack': await hackPlayer(p,'tile'); break;
    case 'luck': await drawLuck(); break;
    case 'challenge': await challengeQuiz(); break;
    case 'quiz_corner': await rewardQuiz(150,'tile_quiz'); break;
    case 'end_quiz': await rewardQuiz(200,'tile_end_quiz'); break;
    case 'go_to_quiz': await detourQuiz(); break;
    case 'property': await resolveProperty(tile); break;
  }
}

async function resolveProperty(tile){
  const p=cur();
  const reward=tile.price;
  const {correct}=await askQuestion(t('q_kind'),{correctMsg:tf('won_pts',{pts:reward}),wrongMsg:t('no_pts')});
  if(correct){ addPoints(p,reward); SFX.buy(); purchaseFx(p.pos,p.color); log("✅ "+tf('log_tile_correct',{name:p.name,pts:reward})); }
  else { await sleep(180); await hackPlayer(p,'wrong'); }
}

async function drawLuck(){
  SFX.luck();
  const card=LUCK[rand(0,LUCK.length-1)];
  const text=card.t[LANG]||card.t.en;
  state.lastCard={kind:'luck',text:text};
  await showInfo(t('luck_title'),text,"🍀");
  const p=cur();
  addPoints(p,card.pts);
  log("🍀 "+tf('log_luck',{name:p.name,text:text}));
}
async function challengeQuiz(){
  SFX.quiz();
  state.lastCard={kind:'challenge',text:t('challenge_card')};
  const {correct}=await askQuestion(t('challenge_kind'),{correctMsg:tf('won_pts',{pts:150}),wrongMsg:t('no_pts')});
  const p=cur();
  if(correct){ addPoints(p,150); log("🎯 "+tf('log_challenge_win',{name:p.name,pts:150})); }
  else log("🎯 "+tf('log_challenge_miss',{name:p.name}));
}
async function rewardQuiz(amount,titleKey){
  SFX.quiz();
  state.lastCard={kind:'quiz',text:tf('quiz_card',{pts:amount})};
  const {correct}=await askQuestion(t(titleKey),{correctMsg:tf('won_pts',{pts:amount}),wrongMsg:t('no_pts')});
  const p=cur();
  if(correct){ addPoints(p,amount); log("❓ "+tf('log_quiz_win',{name:p.name,pts:amount})); }
  else log("❓ "+tf('log_quiz_miss',{name:p.name}));
}
async function detourQuiz(){
  SFX.quiz();
  state.lastCard={kind:'quiz',text:t('detour_card')};
  const {correct}=await askQuestion(t('tile_detour'),{correctMsg:tf('won_pts',{pts:75}),wrongMsg:tf('lost_pts',{pts:50})});
  const p=cur();
  if(correct){ addPoints(p,75); log("↪ "+tf('log_detour_win',{name:p.name,pts:75})); }
  else { addPoints(p,-50); log("↪ "+tf('log_detour_miss',{name:p.name,pts:50})); }
}

/* ============================================================
   HACKEO — te agarra un phishing: perdés puntos y retrocedés
   source: 'tile' (caíste en la casilla) o 'wrong' (respondiste mal)
   ============================================================ */
async function hackPlayer(p,source){
  await showHack(t('hack_title'), tf('hack_body',{pts:HACK_PENALTY,back:HACK_BACK}));
  addPoints(p,-HACK_PENALTY);
  log("💀 "+tf(source==='tile'?'log_hack':'log_hack_wrong',{name:p.name,pts:HACK_PENALTY,back:HACK_BACK}));
  renderTopScore(); renderCurCard(); renderPlayers();
  await moveBack(p,HACK_BACK);
}
/* retrocede n casillas, paso a paso (sin bonus de vuelta al cruzar GO) */
async function moveBack(p,n){
  for(let i=0;i<n;i++){
    await sleep(320);
    p.pos=(p.pos-1+BOARD.length)%BOARD.length;
    SFX.step();
    renderTokens();
  }
  renderTokens(p.pos);
  await sleep(360);
}

function endTurn(){
  if(state.phase!=='acted') return;
  if(typeof NET!=='undefined' && NET.isMyTurn && !NET.isMyTurn()) return; // online: no es mi turno
  if(state.pendingEnd || aliveCount()<=1){ return endGame(); }
  // advance to next alive player
  let guard=0;
  do{
    state.current=(state.current+1)%state.players.length;
    if(state.current===0) state.round++;
    guard++;
  } while(!state.players[state.current].alive && guard<20);
  if(state.round>MAX_ROUNDS){ return endGame(); }
  state.phase='idle';
  renderAll();
  if(typeof NET!=='undefined' && NET.syncState) NET.syncState();
}

/* ============================================================
   END GAME + SCORM REPORT
   ============================================================ */
function endGame(){
  state.phase='ended';
  if(typeof NET!=='undefined' && NET.syncState) NET.syncState();
  const ranked=[...state.players].sort((a,b)=> (b.points-a.points) || (accuracy(b)-accuracy(a)) );
  const winner=ranked[0];
  // SCORM score: en local, "Player 1" es el enrolled learner (un solo dispositivo).
  // En online, cada dispositivo tiene su propia sesión de LMS, así que cada
  // quien reporta según SU PROPIO asiento, no siempre el 0.
  const mySeat = (typeof NET!=='undefined' && NET.mode!=='off') ? NET.seat : 0;
  const learner=state.players[mySeat] || state.players[0];
  const maxPts=Math.max(...state.players.map(p=>p.points),1);
  const ptsFactor=Math.max(0,learner.points)/maxPts;
  const score=Math.round(100*(0.6*accuracy(learner)+0.4*ptsFactor));
  const status=score>=70?"passed":"failed";
  SCORM.finish(score,status);

  $("#winner-line").innerHTML="🏆 "+tf('winner_line',{name:`<b>${winner.name}</b>`,pts:winner.points});
  $("#rank").innerHTML=ranked.map((p,i)=>`
    <div class="rrow ${i===0?'first':''}">
      <div class="rk">${i+1}</div>
      ${avatarDisc(p,'rtok')}
      <div class="rmeta"><div class="rname">${p.name}${p.id===mySeat?' · '+t('you_tag'):''}</div>
      <div class="racc">${tf('rank_meta',{acc:(p.attempted? Math.round(100*p.correct/p.attempted):0),correct:p.correct,attempted:p.attempted})}</div></div>
      <div class="rnet">⭐ ${p.points}</div>
    </div>`).join("");

  const connected=SCORM.connected();
  $("#scorm-report").innerHTML=`
    <div class="sr-label">${t('result_label')}</div>
    <div class="sr-score">${score}<span style="font-size:24px;opacity:.7">/100</span></div>
    <div class="sr-status ${status==='passed'?'pass':'fail'}">${status==='passed'?t('status_passed'):t('status_failed')} · ${t('pass_label')}</div>
    <div class="sr-note">${tf('sr_note',{acc:Math.round(accuracy(learner)*100)})} ${connected? t('sr_sent') : t('sr_standalone')}</div>`;

  showScreen("end-screen");
}
$("#again-btn").onclick=()=>{ SFX.click(); showScreen("setup-screen"); };

/* ============================================================
   INIT
   ============================================================ */
renderCountRow();
renderPlayersSetup();

/* ============================================================
   THEME TOGGLE (light / dark) — remembers your choice
   ============================================================ */
(function(){
  var KEY='cyberparty-theme';
  var body=document.body;
  try{
    var saved=localStorage.getItem(KEY);
    if(saved==='dark') body.classList.remove('light');
    else if(saved==='light') body.classList.add('light');
  }catch(e){}
  var btn=document.getElementById('theme-toggle');
  if(btn){
    btn.addEventListener('click',function(){
      SFX.click();
      body.classList.toggle('light');
      try{ localStorage.setItem(KEY, body.classList.contains('light')?'light':'dark'); }catch(e){}
    });
  }
})();

/* ============================================================
   IDIOMA — selector EN / ES (aplica los textos al cargar)
   ============================================================ */
(function(){
  applyI18n();
  var b=document.getElementById('lang-toggle');
  if(b){
    b.addEventListener('click',function(){
      SFX.click();
      setLang(LANG==='en'?'es':'en');
    });
  }
})();
/* ============================================================
   CONFIGURACIÓN — engranaje que abre/cierra el panel de opciones
   ============================================================ */
(function(){
  var gear  = document.getElementById('settings-toggle');
  var panel = document.getElementById('settings-panel');
  if(!gear || !panel) return;
  function open(){ panel.classList.add('open'); gear.classList.add('open'); gear.setAttribute('aria-expanded','true'); }
  function close(){ panel.classList.remove('open'); gear.classList.remove('open'); gear.setAttribute('aria-expanded','false'); }
  gear.addEventListener('click', function(e){
    e.stopPropagation();
    SFX.click();
    if(panel.classList.contains('open')) close(); else open();
  });
  /* cerrar al tocar fuera del panel o del engranaje */
  document.addEventListener('click', function(e){
    if(!panel.classList.contains('open')) return;
    if(panel.contains(e.target) || gear.contains(e.target)) return;
    close();
  });
  /* cerrar con Escape */
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });
})();

/* ============================================================
   PERSONALIZAR TABLERO — paletas de color del tablero.
   Independiente del modo claro/oscuro. Recuerda la elección.
   "Predeterminado" = base (ninguna clase pal-* en el body).
   ============================================================ */
(function(){
  var KEY='cyberparty-palette';
  var body=document.body;
  var PALS=['default','terminal','alert','security','neon'];
  var nameEl=document.getElementById('pal-current');
  var swatches=document.querySelectorAll('.pal-sw');

  function apply(id){
    if(PALS.indexOf(id)<0) id='default';
    PALS.forEach(function(p){ if(p!=='default') body.classList.toggle('pal-'+p, p===id); });
    if(nameEl){ nameEl.setAttribute('data-i18n','pal_'+id); nameEl.textContent=(typeof t==='function')?t('pal_'+id):id; }
    for(var i=0;i<swatches.length;i++){
      var on=swatches[i].getAttribute('data-pal')===id;
      swatches[i].classList.toggle('active',on);
      swatches[i].setAttribute('aria-checked', on?'true':'false');
    }
  }

  var start='default';
  try{ var saved=localStorage.getItem(KEY); if(saved) start=saved; }catch(e){}
  apply(start);

  var box=document.getElementById('pal-swatches');
  if(box){
    box.addEventListener('click', function(e){
      var b=e.target.closest ? e.target.closest('.pal-sw') : null;
      if(!b) return;
      var id=b.getAttribute('data-pal');
      if(typeof SFX!=='undefined' && SFX.click) SFX.click();
      apply(id);
      try{ localStorage.setItem(KEY,id); }catch(err){}
    });
  }
})();

/* ====================================================================
   CYBERPARTY · MODO ONLINE — Fase 1a + 1b
   Ingreso + sala + sincronización de arranque, y ahora turnos en vivo
   (tirar → mover → pregunta) de forma host-autoritativa: quien tiene el
   turno corre la lógica en su propio dispositivo (igual que en local) y,
   al terminar de tirar o de terminar turno, transmite el `state` entero
   a los demás, que lo adoptan tal cual y re-renderizan. No hay cómputo
   duplicado (dados/preguntas) en más de un dispositivo a la vez, así que
   no hay estados que puedan divergir.

   Transporte local = BroadcastChannel (dos pestañas del mismo navegador,
   sin Cloudflare). Diseñado para cambiar a PartyKit (WebSocket) tocando
   SOLO la función makeTransport(): misma firma send()/close() + onMsg.

   Vista de espectador (ver la pregunta del que tiene el turno mientras
   responde) y reconexión quedan para la Fase 2.
   ==================================================================== */
const NET = (function(){
  "use strict";

  /* ---- mini-i18n local (no toca el TEXTS grande) ---- */
  const L = {
    mode_local:{en:'On this device', es:'En este dispositivo'},
    mode_online:{en:'Online · room', es:'Online · sala'},
    pnp_hint:{en:'Pass & play on one device.', es:'Pasar y jugar en un dispositivo.'},
    online_hint_setup:{en:'Create a room and share the link — others join from their own device.', es:'Creá una sala y compartí el link — los demás entran desde su dispositivo.'},
    create:{en:'Create room', es:'Crear sala'},
    join:{en:'Join a room', es:'Unirse a una sala'},
    enter_code:{en:'Room code', es:'Código de la sala'},
    join_btn:{en:'Enter', es:'Entrar'},
    back:{en:'Back', es:'Volver'},
    not_found:{en:"Room not found. Check the code.", es:'No se encontró la sala. Revisá el código.'},
    code_label:{en:'Room code', es:'Código de la sala'},
    copy_link:{en:'Copy link', es:'Copiar link'},
    copy_code:{en:'Copy code', es:'Copiar código'},
    copied:{en:'Copied!', es:'¡Copiado!'},
    pick_token:{en:'Pick your token', es:'Elegí tu ficha'},
    your_name:{en:'Your name', es:'Tu nombre'},
    in_room:{en:'In the room', es:'En la sala'},
    waiting_host:{en:'Waiting for the host to start…', es:'Esperando que el anfitrión arranque…'},
    waiting_players:{en:'Waiting for players to pick a token…', es:'Esperando que elijan ficha…'},
    start:{en:'Start game', es:'Empezar partida'},
    need_two:{en:'Need at least 2 players', es:'Faltan jugadores (mínimo 2)'},
    you:{en:'you', es:'vos'},
    host:{en:'host', es:'anfitrión'},
    connecting:{en:'Connecting…', es:'Conectando…'},
    online_badge:{en:'ONLINE · room {code}', es:'ONLINE · sala {code}'}
  };
  const nt = k => { const e=L[k]; return e ? (e[LANG]||e.en) : k; };
  const ntf = (k,v) => { let s=nt(k); for(const x in v) s=s.replace('{'+x+'}', v[x]); return s; };

  /* ---- estado del módulo ---- */
  let uiMode = 'local';     // 'local' | 'online'  (qué pestaña del setup)
  let mode   = 'off';       // 'off' | 'host' | 'guest'  (rol de red)
  let lobbyView = 'home';   // 'home' | 'join' | 'room'
  let seat = -1;            // mi índice de jugador (host=0)
  let cid  = null;          // id único de este cliente
  let code = null;          // código de sala
  let roster = [];          // [{seat,cid,name,token,avatar,ready,isHost}]
  let liveTurns = true;     // turnos/movimiento/preguntas en vivo (Fase 1b)
  let transport = null;
  let joinTimer = null;
  let autoCode = null;
  let suppressBroadcast = false; // true mientras se adopta un state que llegó de red, para no reenviarlo en cadena

  const rnd = () => Math.random().toString(36).slice(2,8);
  function genCode(){ const a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s=''; for(let i=0;i<4;i++) s+=a[Math.floor(Math.random()*a.length)]; return s; }
  function defaultName(s){
    if(s===0){ const n=SCORM.studentName && SCORM.studentName(); if(n){ const p=n.split(',').map(x=>x.trim()); return p.length===2?(p[1]+' '+p[0]):n; } }
    return t('player')+' '+(s+1);
  }
  function myEntry(){ return roster.find(r=>r.cid===cid); }
  function tokenTaken(tid){ return roster.some(r=>r.token===tid && r.cid!==cid); }

  /* ====================================================================
     TRANSPORTE
     NET_HOST es el único dato que hay que completar después de deployar
     (ver cf-worker-server/CLOUDFLARE_DEPLOY.md). Sirve tanto para el
     Cloudflare Worker directo (recomendado, ver el .md) como para un
     host de PartyKit si el día de mañana lo usan — es el mismo protocolo
     WebSocket + la misma ruta /parties/main/<code> en los dos casos.
     Mientras diga 'TU-WORKER.TU-SUBDOMINIO.workers.dev' cae a
     BroadcastChannel (dos pestañas del mismo navegador) para poder
     seguir developeando/testeando sin depender del server.
     ==================================================================== */
  const NET_HOST = 'stormy-mustang-6462.tatovidal64-cyber.deno.net';

  function makeTransport(roomCode, onMsg){
    if(NET_HOST.indexOf('TU-WORKER')===0){
      // fallback de desarrollo: sin server real todavía
      const ch = new BroadcastChannel('cyberparty-room-'+roomCode);
      ch.onmessage = e => { try{ onMsg(e.data); }catch(err){ console.error('net onMsg', err); } };
      return { send: m => ch.postMessage(m), close: () => { try{ ch.close(); }catch(e){} } };
    }
    const ws = new WebSocket('wss://'+NET_HOST+'/parties/main/'+roomCode);
    let open=false, queue=[];
    ws.addEventListener('open', ()=>{ open=true; queue.forEach(m=>ws.send(m)); queue=[]; });
    ws.addEventListener('message', e=>{ try{ onMsg(JSON.parse(e.data)); }catch(err){ console.error('net onMsg', err); } });
    ws.addEventListener('error', e=>{ console.error('NET ws error', e); });
    return {
      send: m => { const p=JSON.stringify(m); if(open) ws.send(p); else queue.push(p); },
      close: () => { try{ ws.close(); }catch(e){} }
    };
  }
  /*  Server: ver cf-worker-server/src/worker.js (recomendado, Cloudflare
      Worker directo, gratis, sin el límite compartido de PartyKit) o
      partykit-server/party/server.js (alternativa, si el día de mañana
      el cupo de PartyKit ya no da error). Los dos son relays puros, sin
      lógica de juego, con los mismos mensajes hello/claim/roster/start/
      state de siempre. */

  function send(msg){ if(transport) transport.send(Object.assign({from:cid}, msg)); }

  /* ====================================================================
     UI: selector de modo + contenedor de lobby (inyectados en el setup)
     ==================================================================== */
  function injectStyles(){
    const css = `
    .mode-sel{display:flex;gap:8px;margin:0 0 16px;background:var(--cream,#EEF3FF);padding:5px;border-radius:12px;border:1px solid var(--line,#dbe3f7)}
    .mode-sel button{flex:1;border:none;border-radius:9px;padding:10px 8px;font:600 13px/1 var(--sans,system-ui);letter-spacing:.02em;cursor:pointer;background:transparent;color:var(--brand,#324BAA);transition:.15s}
    .mode-sel button.sel{background:var(--brand,#324BAA);color:#fff}
    #cp-lobby{margin-top:4px;text-align:left}
    .lob-sub{color:var(--muted,#5b6790);font-size:13px;line-height:1.5;margin:0 0 16px}
    .lob-actions{display:flex;flex-direction:column;gap:10px}
    .lob-btn{border:2px solid var(--brand,#324BAA);border-radius:11px;padding:12px 14px;font:600 14px/1 var(--sans,system-ui);letter-spacing:.02em;cursor:pointer;background:#fff;color:var(--brand,#324BAA);transition:transform .08s,background .12s}
    .lob-btn:hover:not(:disabled){transform:translateY(-1px);background:var(--cream,#EEF3FF)} .lob-btn:disabled{opacity:.45;cursor:not-allowed;transform:none}
    .lob-btn.ghost{background:#fff;color:var(--brand,#324BAA);border:1px solid var(--line,#dbe3f7)}
    .lob-code-row{display:flex;gap:8px;align-items:stretch;margin:0 0 10px}
    .lob-code{flex:1;font:700 26px/1 var(--mono,ui-monospace,monospace);letter-spacing:.18em;color:var(--brand,#324BAA);text-align:center;padding:14px;border:1px dashed var(--brand,#324BAA);border-radius:12px;background:var(--cream,#EEF3FF);user-select:all;margin:0}
    .lob-code-row button{border:none;border-radius:12px;padding:0 16px;font:600 12px/1 var(--sans,system-ui);cursor:pointer;background:var(--azure,#11ACED);color:#fff;white-space:nowrap;transition:background .15s}
    .lob-code-row button.ok,.lob-link button.ok{background:var(--green,#2FA84F)}
    .lob-link{display:flex;gap:8px;align-items:center;margin:0 0 18px}
    .lob-link input{flex:1;font:500 12px/1.3 var(--mono,ui-monospace,monospace);padding:10px;border-radius:9px;border:1px solid var(--line,#dbe3f7);background:#fff;color:var(--muted,#5b6790);overflow:hidden;text-overflow:ellipsis}
    .lob-link button{border:none;border-radius:9px;padding:10px 12px;font:600 12px/1 var(--sans,system-ui);cursor:pointer;background:var(--azure,#11ACED);color:#fff;white-space:nowrap;transition:background .15s}
    .lob-input{width:100%;font:600 18px/1 var(--mono,ui-monospace,monospace);letter-spacing:.16em;text-align:center;text-transform:uppercase;padding:13px;border-radius:11px;border:1px solid var(--line,#dbe3f7);background:#fff;color:var(--ink,#0E1430);margin:0 0 12px}
    .lob-input:focus{outline:none;border-color:var(--brand,#324BAA)}
    .lob-err{color:var(--red,#D8323C);font-size:13px;margin:0 0 10px;min-height:18px}
    .lob-label{font:700 12px/1 var(--sans,system-ui);text-transform:uppercase;letter-spacing:.08em;color:var(--muted,#5b6790);margin:14px 0 8px}
    .lob-name{width:100%;font:600 15px/1 var(--sans,system-ui);padding:11px;border-radius:10px;border:1px solid var(--line,#dbe3f7);background:#fff;color:var(--ink,#0E1430);margin:0 0 4px}
    .lob-name:focus{outline:none;border-color:var(--brand,#324BAA)}
    .lob-tokens{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .lob-tok{position:relative;display:flex;flex-direction:column;align-items:center;gap:5px;padding:9px 4px;border-radius:14px;background:#fff;border:2px solid var(--line,#dbe3f7);color:var(--muted,#5b6790);font:600 11px/1.1 var(--sans,system-ui);cursor:pointer;transition:.15s}
    .lob-tok .tk{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 4px 10px -4px rgba(0,0,0,.4)}
    .lob-tok .tk svg{width:62%;height:62%;fill:#fff}
    .lob-tok.sel{border-color:var(--brand,#324BAA);background:var(--cream,#EEF3FF);color:var(--brand,#324BAA);transform:translateY(-2px)}
    .lob-tok.taken{opacity:.32;cursor:not-allowed;filter:grayscale(.6)}
    .lob-avs{display:flex;flex-wrap:wrap;gap:6px}
    .lob-av{width:34px;height:34px;border-radius:9px;border:2px solid var(--line,#dbe3f7);background:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.12s}
    .lob-av.sel{border-color:var(--brand,#324BAA);background:var(--cream,#EEF3FF);transform:scale(1.06)}
    .lob-roster{display:flex;flex-direction:column;gap:6px;margin:8px 0 16px}
    .lob-prow{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:10px;border:1px solid var(--line,#dbe3f7);background:var(--paper,#F7FAFF)}
    .lob-prow .rt{width:24px;height:24px;border-radius:7px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;flex:0 0 auto}
    .lob-prow .rn{flex:1;font:600 14px/1 var(--sans,system-ui);color:var(--ink,#0E1430)}
    .lob-prow .rb{font:600 10px/1 var(--sans,system-ui);text-transform:uppercase;letter-spacing:.06em;color:var(--muted,#5b6790)}
    .lob-prow.nope{opacity:.6}
    .online-flag{position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:30;font:600 11px/1 var(--mono,ui-monospace,monospace);letter-spacing:.08em;color:var(--brand,#11ACED);background:rgba(8,14,22,.82);border:1px solid var(--brand,#11ACED);border-radius:999px;padding:6px 14px;white-space:nowrap}
    .setup-card.online-mode #count-row,.setup-card.online-mode #players-setup,.setup-card.online-mode #rules-toggle,.setup-card.online-mode #rules-box,.setup-card.online-mode #start-btn,.setup-card.online-mode .setup-sub{display:none!important}
    .setup-card:not(.online-mode) #cp-lobby{display:none}
    `;
    const s=document.createElement('style'); s.textContent=css; document.head.appendChild(s);
  }

  function buildSetupUI(){
    const card=document.querySelector('.setup-card'); if(!card) return;
    // selector de modo, arriba de todo (después del banner F11 y el h2 si están)
    const sel=document.createElement('div'); sel.className='mode-sel';
    sel.innerHTML=`<button data-m="local" class="sel">${nt('mode_local')}</button><button data-m="online">${nt('mode_online')}</button>`;
    const h2=card.querySelector('h2');
    if(h2 && h2.nextSibling) card.insertBefore(sel, h2.nextSibling); else card.insertBefore(sel, card.firstChild);
    sel.querySelectorAll('button').forEach(b=> b.onclick=()=>{ SFX.click(); setUiMode(b.dataset.m); });
    // contenedor de lobby
    const lob=document.createElement('div'); lob.id='cp-lobby'; card.appendChild(lob);
    renderLobby();
  }

  function setUiMode(m){
    uiMode=m;
    const card=document.querySelector('.setup-card');
    card.classList.toggle('online-mode', m==='online');
    document.querySelectorAll('.mode-sel button').forEach(b=> b.classList.toggle('sel', b.dataset.m===m));
    if(m==='online' && mode==='off'){ lobbyView = autoCode? 'join' : 'home'; renderLobby(); }
  }

  /* ---- LOBBY render ---- */
  function renderLobby(){
    const lob=document.getElementById('cp-lobby'); if(!lob) return;
    if(mode==='off' && lobbyView==='home'){
      lob.innerHTML=`<p class="lob-sub">${nt('online_hint_setup')}</p>
        <div class="lob-actions">
          <button class="lob-btn" id="lob-create">${nt('create')}</button>
          <button class="lob-btn ghost" id="lob-join">${nt('join')}</button>
        </div>`;
      lob.querySelector('#lob-create').onclick=()=>{ SFX.click(); createRoom(); };
      lob.querySelector('#lob-join').onclick=()=>{ SFX.click(); lobbyView='join'; renderLobby(); };
    }
    else if(mode==='off' && lobbyView==='join'){
      lob.innerHTML=`<p class="lob-sub">${nt('enter_code')}</p>
        <input class="lob-input" id="lob-code" placeholder="····" maxlength="4" value="${autoCode||''}" autocomplete="off">
        <div class="lob-err" id="lob-err"></div>
        <div class="lob-actions">
          <button class="lob-btn" id="lob-go">${nt('join_btn')}</button>
          <button class="lob-btn ghost" id="lob-back">${nt('back')}</button>
        </div>`;
      const inp=lob.querySelector('#lob-code');
      lob.querySelector('#lob-go').onclick=()=>{ SFX.click(); joinRoom((inp.value||'').trim().toUpperCase()); };
      lob.querySelector('#lob-back').onclick=()=>{ SFX.click(); autoCode=null; lobbyView='home'; renderLobby(); };
      inp.addEventListener('keydown',e=>{ if(e.key==='Enter') joinRoom((inp.value||'').trim().toUpperCase()); });
      if(autoCode){ joinRoom(autoCode); autoCode=null; }
    }
    else if(lobbyView==='room'){
      renderRoom(lob);
    }
  }

  function renderRoom(lob){
    // el re-render reconstruye todo el HTML (incl. los inputs), así que si no
    // guardamos y restauramos el foco/cursor, escribir en "tu nombre" pierde
    // el foco en cada tecla (el input viejo se destruye y aparece uno nuevo).
    const active=document.activeElement;
    const activeId=(active && lob.contains(active)) ? active.id : null;
    const selStart=(activeId && typeof active.selectionStart==='number') ? active.selectionStart : null;
    const selEnd=(activeId && typeof active.selectionEnd==='number') ? active.selectionEnd : null;

    const me=myEntry();
    const isHost = mode==='host';
    const ready = roster.length>=2 && roster.every(r=>r.token);
    const link = shareUrl(code);

    let head='';
    if(isHost){
      head=`<div class="lob-label">${nt('code_label')}</div>
        <div class="lob-code-row"><div class="lob-code">${code}</div><button id="lob-copy-code">${nt('copy_code')}</button></div>
        <div class="lob-link"><input id="lob-share" readonly value="${link}"><button id="lob-copy">${nt('copy_link')}</button></div>`;
    }else{
      head=`<div class="lob-label">${nt('in_room')} · ${code}</div>`;
    }

    const tokens = TOKENS.map(tk=>{
      const taken=tokenTaken(tk.id), sel=me&&me.token===tk.id;
      return `<button class="lob-tok ${sel?'sel':''} ${taken?'taken':''}" data-tk="${tk.id}">
        <span class="tk" style="background:${tk.color}">${ICONS[tk.icon]}</span><span>${t(tk.tkey)}</span></button>`;
    }).join('');

    const avs = AVATARS.map(em=>`<button class="lob-av ${me&&me.avatar===em?'sel':''}" data-av="${em}">${em}</button>`).join('');

    const rows = roster.slice().sort((a,b)=>a.seat-b.seat).map(r=>{
      const tk=r.token?tokenById(r.token):null;
      const tags=[]; if(r.isHost) tags.push(nt('host')); if(r.cid===cid) tags.push(nt('you'));
      return `<div class="lob-prow ${r.token?'':'nope'}">
        <span class="rt" style="background:${tk?tk.color:'#39455a'}">${r.avatar||'😀'}</span>
        <span class="rn">${r.name}</span>
        <span class="rb">${tags.join(' · ')||(r.token?'':nt('waiting_players'))}</span></div>`;
    }).join('');

    lob.innerHTML = head +
      `<div class="lob-label">${nt('your_name')}</div>
       <input class="lob-name" id="lob-myname" maxlength="16" value="${me?me.name:''}">
       <div class="lob-label">${nt('pick_token')}</div>
       <div class="lob-tokens" id="lob-tokens">${tokens}</div>
       <div class="lob-label">Avatar</div>
       <div class="lob-avs" id="lob-avs">${avs}</div>
       <div class="lob-label">${nt('in_room')} (${roster.length})</div>
       <div class="lob-roster">${rows}</div>` +
      (isHost
        ? `<div class="lob-actions"><button class="lob-btn" id="lob-start" ${ready?'':'disabled'}>${ready?nt('start'):nt('need_two')}</button><button class="lob-btn ghost" id="lob-leave">${nt('back')}</button></div>`
        : `<p class="lob-sub" style="text-align:center;color:var(--brand,#11ACED)">${nt('waiting_host')}</p>`);

    if(isHost){
      const cc=lob.querySelector('#lob-copy-code');
      cc.onclick=()=>{ try{ navigator.clipboard.writeText(code); }catch(e){} cc.textContent=nt('copied'); cc.classList.add('ok'); setTimeout(()=>{ cc.textContent=nt('copy_code'); cc.classList.remove('ok'); },1400); };
      const sh=lob.querySelector('#lob-copy');
      sh.onclick=()=>{ const i=lob.querySelector('#lob-share'); i.select(); try{ navigator.clipboard.writeText(link); }catch(e){} sh.textContent=nt('copied'); sh.classList.add('ok'); setTimeout(()=>{ sh.textContent=nt('copy_link'); sh.classList.remove('ok'); },1400); };
      const st=lob.querySelector('#lob-start'); if(st) st.onclick=()=>{ SFX.click(); hostStart(); };
      const lv=lob.querySelector('#lob-leave'); if(lv) lv.onclick=()=>{ SFX.click(); leaveRoom(); };
    }
    const nameInp=lob.querySelector('#lob-myname');
    nameInp.oninput=e=>{ updateMyPick({name:e.target.value}); };
    lob.querySelectorAll('.lob-tok').forEach(b=> b.onclick=()=>{ if(b.classList.contains('taken'))return; SFX.click(); updateMyPick({token:b.dataset.tk}); });
    lob.querySelectorAll('.lob-av').forEach(b=> b.onclick=()=>{ SFX.click(); updateMyPick({avatar:b.dataset.av}); });

    if(activeId){
      const toFocus=lob.querySelector('#'+activeId);
      if(toFocus){
        toFocus.focus();
        if(selStart!=null && toFocus.setSelectionRange){ try{ toFocus.setSelectionRange(selStart, selEnd); }catch(e){} }
      }
    }
  }

  function shareUrl(c){ try{ const u=new URL(location.href); u.searchParams.set('room',c); u.hash=''; return u.toString(); }catch(e){ return 'cyberparty.app/r/'+(c||'').toLowerCase(); } }

  /* ====================================================================
     ROLES
     ==================================================================== */
  function createRoom(){
    mode='host'; cid='h_'+rnd(); code=genCode(); seat=0;
    roster=[{seat:0,cid,name:defaultName(0),token:null,avatar:AVATARS[0],ready:false,isHost:true}];
    transport=makeTransport(code, onMsg);
    lobbyView='room'; renderLobby();
  }

  function leaveRoom(){
    if(transport){ try{ transport.close(); }catch(e){} transport=null; }
    mode='off'; seat=-1; cid=null; code=null; roster=[];
    lobbyView='home';
    renderLobby();
  }

  function joinRoom(c){
    if(!c){ return; }
    code=c; mode='off'; cid='g_'+rnd();
    if(transport){ transport.close(); }
    transport=makeTransport(code, onMsg);
    const err=document.getElementById('lob-err'); if(err) err.textContent=nt('connecting');
    send({t:'hello', cid, name:''});
    clearTimeout(joinTimer);
    joinTimer=setTimeout(()=>{ if(mode==='off'){ const e=document.getElementById('lob-err'); if(e) e.textContent=nt('not_found'); } }, 2600);
  }

  function updateMyPick(patch){
    const me=myEntry(); if(!me) return;
    if(patch.token!==undefined){ if(tokenTaken(patch.token)) return; me.token=patch.token; me.ready=!!patch.token; }
    if(patch.name!==undefined) me.name=patch.name;
    if(patch.avatar!==undefined) me.avatar=patch.avatar;
    if(mode==='host'){ broadcastRoster(); renderLobby(); }
    else { send({t:'claim', cid, token:me.token, name:me.name, avatar:me.avatar}); /* render optimista */ renderLobby(); }
  }

  function broadcastRoster(){ send({t:'roster', code, roster}); }

  /* ---- recepción de mensajes (host y guest comparten canal) ---- */
  function onMsg(msg){
    if(!msg || msg.from===cid) return;        // ignorar lo propio
    if(msg.t==='state'){ adoptSyncedState(msg.state); return; } // turno en vivo: viene de quien jugó, aplica para host y guest por igual
    if(mode==='host'){
      if(msg.t==='hello'){
        if(roster.length>=4) return;
        if(!roster.find(r=>r.cid===msg.cid)){
          const s=roster.length;
          roster.push({seat:s,cid:msg.cid,name:defaultName(s),token:null,avatar:AVATARS[s%AVATARS.length],ready:false,isHost:false});
        }
        broadcastRoster(); renderLobby();
      }
      else if(msg.t==='claim'){
        const r=roster.find(x=>x.cid===msg.cid); if(!r) return;
        if(msg.token && !roster.some(x=>x.token===msg.token && x.cid!==msg.cid)){ r.token=msg.token; r.ready=true; }
        else if(!msg.token){ r.token=null; r.ready=false; }
        if(typeof msg.name==='string' && msg.name) r.name=msg.name;
        if(msg.avatar) r.avatar=msg.avatar;
        broadcastRoster(); renderLobby();
      }
    } else { // guest (mode 'off' hasta recibir roster, luego 'guest')
      if(msg.t==='roster'){
        clearTimeout(joinTimer);
        const mine=msg.roster.find(r=>r.cid===cid);
        if(!mine) return;                      // todavía no me agregó
        if(mode==='off'){ mode='guest'; seat=mine.seat; lobbyView='room'; }
        roster=msg.roster; code=msg.code||code;
        renderLobby();
      }
      else if(msg.t==='start'){
        adoptStart(msg.state);
      }
    }
  }

  /* ====================================================================
     ARRANQUE  (host arma el state canónico y lo reparte)
     ==================================================================== */
  function buildStateFromRoster(){
    BOARD.forEach(t=>{ if(t.type==='property'){ t.ownerId=null; t.level=0; } });
    qDeck=[];
    const players=roster.slice().sort((a,b)=>a.seat-b.seat).map((r,i)=>{
      const tk=tokenById(r.token);
      return {id:i,name:r.name,tokenId:r.token,color:tk.color,icon:tk.icon,avatar:r.avatar,points:0,pos:0,alive:true,correct:0,attempted:0};
    });
    state={players,current:0,round:1,phase:'idle',dice:[1,1],log:[],lastCard:null,pendingEnd:false};
  }

  function hostStart(){
    if(!(roster.length>=2 && roster.every(r=>r.token))) return;
    buildStateFromRoster();
    send({t:'start', state});
    enterGame();
  }

  function adoptStart(snap){
    if(!snap) return;
    state = snap;                 // adoptar estado canónico del host
    enterGame();
  }

  /* ====================================================================
     TURNOS EN VIVO (Fase 1b)
     Quien tiene el turno corre tirar/mover/pregunta en su propio
     dispositivo (mismo código que en local) y al terminar transmite el
     `state` entero. Los demás lo adoptan tal cual y re-renderizan.
     ==================================================================== */
  function isMyTurn(){
    return mode==='off' || (state && state.current===seat);
  }

  function syncState(){
    if(mode==='off' || suppressBroadcast) return;
    send({t:'state', state});
  }

  function adoptSyncedState(snap){
    if(!snap) return;
    suppressBroadcast = true;     // si esto dispara un endGame() acá, que no reenvíe
    try{
      state = snap;
      if(typeof renderAll==='function') renderAll();
      if(state.phase==='ended' && typeof endGame==='function') endGame();
    } finally {
      suppressBroadcast = false;
    }
  }

  /* ====================================================================
     EN JUEGO
     ==================================================================== */
  function afterEnterGame(){
    if(mode==='off') return;
    // bandera persistente sobre el tablero (no la pisa renderAll)
    const wrap=document.querySelector('.board-wrap');
    if(wrap && !document.getElementById('online-flag')){
      const f=document.createElement('div'); f.id='online-flag'; f.className='online-flag';
      f.textContent=ntf('online_badge',{code:code});
      wrap.appendChild(f);
    }
    gateControls();
  }

  function gateControls(){
    if(mode==='off') return;
    const rb=document.getElementById('roll-btn'), eb=document.getElementById('end-btn');
    if(!liveTurns){ if(rb) rb.disabled=true; if(eb) eb.disabled=true; return; }
    // sólo el jugador de turno puede tirar / terminar turno
    const myTurn = state && state.current===seat;
    if(rb && !myTurn) rb.disabled=true;
    if(eb && !myTurn) eb.disabled=true;
  }

  /* ====================================================================
     INIT
     ==================================================================== */
  function init(){
    injectStyles();
    buildSetupUI();
    // link compartido: ?room=CODE → modo online + auto-join
    try{
      const rp=(new URLSearchParams(location.search).get('room')||'').toUpperCase();
      if(rp){ autoCode=rp; setUiMode('online'); }
    }catch(e){}
    // re-traducir lobby al cambiar idioma
    const lb=document.getElementById('lang-toggle');
    if(lb) lb.addEventListener('click', ()=>{ setTimeout(()=>{ if(uiMode==='online') renderLobby(); document.querySelectorAll('.mode-sel button').forEach(b=>{ b.textContent = b.dataset.m==='local'?nt('mode_local'):nt('mode_online'); }); }, 0); });
  }

  return {
    init,
    get mode(){ return mode; },
    get seat(){ return seat; },
    gateControls,
    afterEnterGame,
    syncState,
    isMyTurn
  };
})();

NET.init();
