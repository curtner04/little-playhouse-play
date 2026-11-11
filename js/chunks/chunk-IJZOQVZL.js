var e='stroke="#5a3a2a" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"',i={toys:{id:"toys",badge:"\u{1F9F8}",clip:"cleanup.in_toys",go:"cleanup.go_toys",label:"Toy box",svg:`<svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="112" rx="50" ry="6" fill="rgba(0,0,0,.16)"/>
      <rect x="10" y="48" width="100" height="62" rx="9" fill="#FF8A1F" ${e}/>
      <rect x="10" y="48" width="100" height="16" rx="6" fill="#FFB347" ${e}/>
      <rect x="16" y="68" width="88" height="6" fill="#FFD21F" opacity=".9"/>
      <rect x="16" y="98" width="88" height="6" fill="#FFD21F" opacity=".9"/>
      <polygon points="60,72 65,83 77,84 68,92 71,104 60,97 49,104 52,92 43,84 55,83" fill="#FFF4B0" ${e}/>
      <rect x="6" y="36" width="108" height="16" rx="8" fill="#FF5FA2" ${e}/>
      <circle cx="30" cy="28" r="12" fill="#B87333" ${e}/><circle cx="23" cy="19" r="6" fill="#B87333" ${e}/><circle cx="37" cy="19" r="6" fill="#B87333" ${e}/>
      <rect x="78" y="14" width="22" height="22" rx="4" fill="#3C9CFF" ${e}/>
    </svg>`},books:{id:"books",badge:"\u{1F4DA}",clip:"cleanup.in_books",go:"cleanup.go_books",label:"Bookshelf",svg:`<svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="113" rx="48" ry="5" fill="rgba(0,0,0,.16)"/>
      <rect x="12" y="8" width="96" height="104" rx="8" fill="#C98A4B" ${e}/>
      <rect x="20" y="16" width="80" height="40" rx="3" fill="#8A5A2B" stroke="#5a3a2a" stroke-width="2.5"/>
      <rect x="20" y="62" width="80" height="40" rx="3" fill="#8A5A2B" stroke="#5a3a2a" stroke-width="2.5"/>
      <rect x="24" y="24" width="11" height="32" fill="#FF5FA2"/><rect x="36" y="20" width="11" height="36" fill="#3C9CFF"/>
      <rect x="48" y="28" width="11" height="28" fill="#FFD21F"/><rect x="60" y="22" width="12" height="34" fill="#3CC65A"/>
      <rect x="74" y="26" width="11" height="30" fill="#9D5CFF"/>
      <rect x="26" y="72" width="11" height="30" fill="#FF8A1F"/><rect x="38" y="68" width="12" height="34" fill="#19C3C3"/>
      <rect x="52" y="76" width="30" height="26" fill="#F2364D"/>
      <rect x="84" y="70" width="11" height="32" fill="#FFD21F"/>
      <rect x="20" y="56" width="80" height="6" fill="#C98A4B" stroke="#5a3a2a" stroke-width="2"/>
    </svg>`},clothes:{id:"clothes",badge:"\u{1F455}",clip:"cleanup.in_clothes",go:"cleanup.go_clothes",label:"Laundry basket",svg:`<svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="113" rx="46" ry="5" fill="rgba(0,0,0,.16)"/>
      <path d="M44 42 Q60 4 78 42" fill="#FFB6D9" ${e}/>
      <circle cx="38" cy="38" r="7" fill="#FFD21F" ${e}/>
      <path d="M20 46 L100 46 L90 108 Q60 116 30 108 Z" fill="#36B6E8" ${e}/>
      <path d="M25 64 H95 M28 80 H92 M30 96 H90" stroke="#1B86B8" stroke-width="3.5" fill="none"/>
      <path d="M44 50 L50 106 M60 50 V112 M76 50 L70 106" stroke="#1B86B8" stroke-width="3.5" fill="none"/>
      <rect x="14" y="40" width="92" height="12" rx="6" fill="#8FDCFF" ${e}/>
    </svg>`},shoes:{id:"shoes",badge:"\u{1F45F}",clip:"cleanup.in_shoes",go:"cleanup.go_shoes",label:"Shoe rack",svg:`<svg viewBox="0 0 120 120" aria-hidden="true">
      <ellipse cx="60" cy="113" rx="48" ry="5" fill="rgba(0,0,0,.16)"/>
      <rect x="14" y="30" width="10" height="82" rx="4" fill="#2FA84A" ${e}/>
      <rect x="96" y="30" width="10" height="82" rx="4" fill="#2FA84A" ${e}/>
      <rect x="10" y="30" width="100" height="10" rx="4" fill="#3CC65A" ${e}/>
      <rect x="10" y="64" width="100" height="10" rx="4" fill="#3CC65A" ${e}/>
      <rect x="10" y="98" width="100" height="10" rx="4" fill="#3CC65A" ${e}/>
      <path d="M30 28 q0-14 14-14 h6 v14 z" fill="#FF5FA2" stroke="#5a3a2a" stroke-width="2.5"/>
      <path d="M62 28 q0-14 14-14 h6 v14 z" fill="#FFD21F" stroke="#5a3a2a" stroke-width="2.5"/>
      <path d="M30 62 q0-14 14-14 h6 v14 z" fill="#3C9CFF" stroke="#5a3a2a" stroke-width="2.5"/>
      <path d="M62 62 q0-14 14-14 h6 v14 z" fill="#FF8A1F" stroke="#5a3a2a" stroke-width="2.5"/>
    </svg>`}},l={toys:[{key:"teddy",emoji:"\u{1F9F8}",clip:"words.teddy"},{key:"ball",emoji:"\u26BD",clip:"words.ball"},{key:"car",emoji:"\u{1F697}",clip:"words.car"},{key:"yoyo",emoji:"\u{1FA80}",clip:"words.yoyo"},{key:"blocks",emoji:"\u{1F9F1}",clip:"words.blocks"},{key:"dino",emoji:"\u{1F996}",clip:"animals.dinosaur"},{key:"kite",emoji:"\u{1FA81}",clip:"words.kite"},{key:"balloon",emoji:"\u{1F388}",clip:"words.balloon"}],books:[{key:"redbook",emoji:"\u{1F4D5}",clip:"cleanup.book_red"},{key:"greenbook",emoji:"\u{1F4D7}",clip:"cleanup.book_green"},{key:"bluebook",emoji:"\u{1F4D8}",clip:"cleanup.book_blue"},{key:"orangebook",emoji:"\u{1F4D9}",clip:"cleanup.book_orange"}],clothes:[{key:"shirt",emoji:"\u{1F455}",clip:"words.shirt"},{key:"dress",emoji:"\u{1F457}",clip:"words.dress"},{key:"sock",emoji:"\u{1F9E6}",clip:"words.sock"},{key:"pants",emoji:"\u{1F456}",clip:"words.pants"},{key:"cap",emoji:"\u{1F9E2}",clip:"cleanup.cap"}],shoes:[{key:"sneaker",emoji:"\u{1F45F}",clip:"words.shoe"},{key:"boot",emoji:"\u{1F462}",clip:"cleanup.boot"},{key:"sandal",emoji:"\u{1FA74}",clip:"cleanup.sandal"}]},o=[{id:"bedroom",say:"cleanup.room_bedroom",wall:["#FFD1E8","#FFB3D9"],stripe:"rgba(255,255,255,.35)",floor:["#E9B27A","#D99A5E"],rug:"#4FD1B0",rug2:"#A8EDD6",sun:"\u{1F319}",decor:`<svg viewBox="0 0 200 40" preserveAspectRatio="none" class="cu-decor" aria-hidden="true">
      <path d="M0 6 Q25 22 50 6 T100 6 T150 6 T200 6" fill="none" stroke="#fff" stroke-width="2.5" opacity=".85"/>
      <polygon points="14,10 26,10 20,26" fill="#FFD21F"/><polygon points="50,10 62,10 56,26" fill="#3C9CFF"/><polygon points="86,10 98,10 92,26" fill="#FF5FA2"/>
      <polygon points="122,10 134,10 128,26" fill="#3CC65A"/><polygon points="158,10 170,10 164,26" fill="#9D5CFF"/></svg>`},{id:"playroom",say:"cleanup.room_playroom",wall:["#FFF0A8","#FFE070"],stripe:"rgba(255,138,31,.16)",floor:["#7ED6A5","#5CC48C"],rug:"#FF5FA2",rug2:"#FFB3D9",sun:"\u2600\uFE0F",decor:`<svg viewBox="0 0 200 40" preserveAspectRatio="none" class="cu-decor" aria-hidden="true">
      <g fill="#FF8A1F" opacity=".85"><circle cx="20" cy="14" r="6"/><circle cx="70" cy="26" r="5"/><circle cx="120" cy="12" r="6"/><circle cx="170" cy="26" r="5"/></g>
      <g fill="#3C9CFF" opacity=".85"><rect x="40" y="8" width="10" height="10" rx="2"/><rect x="95" y="24" width="10" height="10" rx="2"/><rect x="146" y="6" width="10" height="10" rx="2"/></g></svg>`},{id:"livingroom",say:"cleanup.room_living",wall:["#BFE9FF","#8FD6FF"],stripe:"rgba(255,255,255,.3)",floor:["#C9A07A","#B5875F"],rug:"#3CC65A",rug2:"#9BE5A8",sun:"\u2B50",decor:`<svg viewBox="0 0 200 40" preserveAspectRatio="none" class="cu-decor" aria-hidden="true">
      <rect x="20" y="4" width="44" height="30" rx="4" fill="#fff" stroke="#8A5A2B" stroke-width="3"/><circle cx="42" cy="19" r="8" fill="#FF8A1F"/>
      <rect x="130" y="4" width="50" height="30" rx="4" fill="#fff" stroke="#8A5A2B" stroke-width="3"/><path d="M138 30 L150 14 L160 24 L166 18 L174 30 Z" fill="#3CC65A"/></svg>`}];export{i as a,l as b,o as c};
