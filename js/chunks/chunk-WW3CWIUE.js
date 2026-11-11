var t='<ellipse cx="60" cy="108" rx="48" ry="7" fill="#000" opacity=".14"/>',r={bed:{back:t,front:`
      <rect x="8" y="34" width="14" height="68" rx="7" fill="#B5693A" stroke="#8C4A22" stroke-width="3"/>
      <rect x="14" y="62" width="98" height="26" rx="11" fill="#FFFFFF" stroke="#D7CDE6" stroke-width="3"/>
      <rect x="38" y="56" width="74" height="32" rx="11" fill="#FF6FB5" stroke="#D84A93" stroke-width="3"/>
      <path d="M52 58 V88 M70 58 V88 M88 58 V88" stroke="#FF9DCB" stroke-width="5"/>
      <ellipse cx="36" cy="60" rx="17" ry="10" fill="#FFF8E0" stroke="#E9D9A8" stroke-width="3"/>
      <rect x="10" y="84" width="104" height="12" rx="5" fill="#B5693A" stroke="#8C4A22" stroke-width="3"/>
      <rect x="14" y="94" width="9" height="13" rx="3" fill="#8C4A22"/><rect x="100" y="94" width="9" height="13" rx="3" fill="#8C4A22"/>`},toybox:{back:t,front:`
      <rect x="14" y="58" width="92" height="50" rx="9" fill="#3C8CFF" stroke="#2468C9" stroke-width="3"/>
      <rect x="14" y="76" width="92" height="9" fill="#2F78E0"/>
      <polygon points="60,84 63.5,91 71,92 65.5,97 67,104 60,100.5 53,104 54.5,97 49,92 56.5,91" fill="#FFD21F" stroke="#D9A100" stroke-width="2" stroke-linejoin="round"/>
      <circle cx="26" cy="96" r="5" fill="#FF6FB5"/><circle cx="94" cy="96" r="5" fill="#3CC65A"/>
      <g class="hs-lid"><rect x="9" y="45" width="102" height="17" rx="7" fill="#FF8A1F" stroke="#D96A00" stroke-width="3"/>
      <rect x="50" y="49" width="20" height="8" rx="4" fill="#FFD27A"/></g>`},curtain:{back:`${t}
      <rect x="14" y="20" width="92" height="86" rx="5" fill="#9AD8FF" stroke="#fff" stroke-width="5"/>
      <path d="M60 20 V106 M14 62 H106" stroke="#fff" stroke-width="5"/>
      <circle cx="88" cy="40" r="9" fill="#FFE070"/>
      <rect x="2" y="10" width="116" height="8" rx="4" fill="#8B5A2B"/><circle cx="4" cy="14" r="6" fill="#C98547"/><circle cx="116" cy="14" r="6" fill="#C98547"/>`,front:`
      <g class="hs-l"><path d="M8 16 H66 V108 C48 111 24 111 8 108 Z" fill="#FF6FB5" stroke="#D84A93" stroke-width="3" stroke-linejoin="round"/>
        <path d="M24 18 V108 M40 18 V109 M54 18 V109" stroke="#FF9DCB" stroke-width="4"/><path d="M8 62 Q18 76 30 62" fill="none" stroke="#D84A93" stroke-width="0"/></g>
      <g class="hs-r"><path d="M54 16 H112 V108 C96 111 70 111 54 108 Z" fill="#FF6FB5" stroke="#D84A93" stroke-width="3" stroke-linejoin="round"/>
        <path d="M70 18 V109 M84 18 V109 M98 18 V108" stroke="#FF9DCB" stroke-width="4"/></g>`},couch:{back:t,front:`
      <rect x="14" y="40" width="92" height="46" rx="16" fill="#9D5CFF" stroke="#6F36CC" stroke-width="3"/>
      <rect x="10" y="64" width="100" height="32" rx="12" fill="#B27EFF" stroke="#6F36CC" stroke-width="3"/>
      <rect x="2" y="54" width="22" height="46" rx="11" fill="#9D5CFF" stroke="#6F36CC" stroke-width="3"/>
      <rect x="96" y="54" width="22" height="46" rx="11" fill="#9D5CFF" stroke="#6F36CC" stroke-width="3"/>
      <path d="M60 68 V94" stroke="#6F36CC" stroke-width="3"/>
      <rect x="32" y="48" width="22" height="22" rx="5" fill="#FFD21F" stroke="#D9A100" stroke-width="2.5" transform="rotate(-12 43 59)"/>
      <rect x="16" y="96" width="9" height="11" rx="3" fill="#6F36CC"/><rect x="95" y="96" width="9" height="11" rx="3" fill="#6F36CC"/>`},tree:{back:'<ellipse cx="60" cy="108" rx="40" ry="6" fill="#1B7A2A" opacity=".25"/>',front:`
      <rect x="46" y="58" width="28" height="50" rx="8" fill="#A9672F" stroke="#7C4A1C" stroke-width="3"/>
      <path d="M56 70 Q60 80 56 92 M66 66 Q62 80 66 98" stroke="#7C4A1C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="38" cy="50" r="24" fill="#3CC65A" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="82" cy="50" r="24" fill="#3CC65A" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="60" cy="34" r="28" fill="#4FD66B" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="46" cy="40" r="5" fill="#F2364D"/><circle cx="74" cy="30" r="5" fill="#F2364D"/><circle cx="84" cy="56" r="5" fill="#F2364D"/><circle cx="34" cy="58" r="5" fill="#F2364D"/>`},basket:{back:t,front:`
      <path d="M16 56 H104 L96 106 H24 Z" fill="#E8A44A" stroke="#B87A22" stroke-width="3" stroke-linejoin="round"/>
      <path d="M20 70 H100 M22 84 H98 M30 56 L34 106 M50 56 L51 106 M70 56 L69 106 M90 56 L86 106" stroke="#C98530" stroke-width="3.5"/>
      <rect x="12" y="50" width="96" height="12" rx="6" fill="#C98530" stroke="#B87A22" stroke-width="3"/>
      <g class="hs-lid"><path d="M10 52 Q60 28 110 52 L104 60 H16 Z" fill="#FF5A6E" stroke="#D63549" stroke-width="3" stroke-linejoin="round"/>
      <path d="M36 44 L40 58 M60 40 L60 58 M84 44 L80 58" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>`},blanket:{back:t,front:`
      <path d="M6 106 C6 62 30 34 60 34 C90 34 114 62 114 106 Q104 112 94 106 Q84 112 74 106 Q64 112 54 106 Q44 112 34 106 Q24 112 6 106 Z" fill="#FF8A1F" stroke="#D96A00" stroke-width="3" stroke-linejoin="round"/>
      <path d="M12 86 C30 70 90 70 108 86 M18 64 C40 50 80 50 102 64" fill="none" stroke="#FFC070" stroke-width="9" stroke-linecap="round"/>
      <g fill="#fff" opacity=".9"><circle cx="40" cy="96" r="4.5"/><circle cx="64" cy="98" r="4.5"/><circle cx="86" cy="96" r="4.5"/><circle cx="52" cy="44" r="4"/><circle cx="72" cy="46" r="4"/></g>`},table:{back:t,front:`
      <rect x="54" y="14" width="12" height="26" rx="4" fill="#FFD21F" stroke="#D9A100" stroke-width="2.5"/>
      <circle cx="60" cy="12" r="6" fill="#FF6FB5"/><circle cx="52" cy="16" r="5" fill="#FF9DCB"/><circle cx="68" cy="16" r="5" fill="#FF9DCB"/>
      <rect x="6" y="38" width="108" height="16" rx="8" fill="#3CC6A8" stroke="#1E9C82" stroke-width="3"/>
      <path d="M10 52 H110 L114 106 Q104 112 94 106 Q84 112 74 106 Q64 112 54 106 Q44 112 34 106 Q24 112 6 106 Z" fill="#5ADBC0" stroke="#1E9C82" stroke-width="3" stroke-linejoin="round"/>
      <g fill="#fff" opacity=".8"><circle cx="26" cy="68" r="4.5"/><circle cx="52" cy="76" r="4.5"/><circle cx="80" cy="68" r="4.5"/><circle cx="98" cy="82" r="4.5"/><circle cx="34" cy="90" r="4.5"/><circle cx="68" cy="94" r="4.5"/></g>`},bush:{back:'<ellipse cx="60" cy="108" rx="46" ry="6" fill="#1B7A2A" opacity=".25"/>',front:`
      <circle cx="32" cy="80" r="26" fill="#2FB84F" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="88" cy="80" r="26" fill="#2FB84F" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="60" cy="58" r="32" fill="#44CC62" stroke="#1F9A3B" stroke-width="3"/>
      <circle cx="60" cy="86" r="26" fill="#3CC65A" stroke="#1F9A3B" stroke-width="3"/>
      <g fill="#FF5FA2"><circle cx="44" cy="52" r="5"/><circle cx="74" cy="46" r="5"/><circle cx="62" cy="76" r="5"/><circle cx="28" cy="82" r="5"/><circle cx="94" cy="78" r="5"/></g>`}},e={bed:{kind:"ears",left:40,top:22,w:46},toybox:{kind:"ears",left:26,top:14,w:50},curtain:{kind:"ears",left:26,top:-14,w:50},couch:{kind:"ears",left:26,top:8,w:50},tree:{kind:"ears",left:54,top:42,w:40,rot:24},basket:{kind:"ears",left:26,top:8,w:50},blanket:{kind:"ears",left:26,top:2,w:50},table:{kind:"ears",left:26,top:6,w:50},bush:{kind:"ears",left:26,top:10,w:50}};export{r as a,e as b};
