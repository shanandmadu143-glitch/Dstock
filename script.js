const i18n = {
  si: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Code හෝ Name මගින් සොයන්න:',
    placeholderSearch: 'සොයන්න Code හෝ Name ඇතුලත් කරන්න...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Section එක තෝරන්න:',
    optReceipt: 'Receipt (ලැබීම්)',
    optIssues: 'Issues (නිකුත් කිරීම්)',
    optReturn: 'Return (නැවත භාරදීම්)',
    optSslI: 'Received to SSL (SSL ලැබීම්)',
    optSslJ: 'Sent to SSL (SSL යැවීම්)',
    optRejectionL: 'Rejection (ප්‍රතික්ෂේප කිරීම්)',
    lblAmount: '<i class="fa-solid fa-calculator"></i> ප්‍රමාණය ඇතුළත් කරන්න:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share Data File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> සැකසුම් (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> භාෂාව තෝරන්න (Language):',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Theme එක තෝරන්න:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Excel (.xlsx) Restore කරන්න:',
    descRestore: 'පෙර Save කරන ලද Excel File එකක් මගින් දත්ත යාවත්කාලීන කරගන්න.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> Excel Backup එකක් ගන්න:',
    descBackup: 'වත්මන් දත්ත වල සුරක්ෂිත Backup එකක් ලබාගන්න.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> මුල් තත්වයට Reset කරන්න:',
    descReset: 'මුල් Default දත්ත ලබා ගැනීමට මෙම පද්ධතිය Reset කරන්න.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'කරුණාකර Material Code එකක් හෝ Name එකක් තෝරන්න!',
    msgValidAmount: 'කරුණාකර වලංගු 0 ට වැඩි අංකයක් පමණක් ඇතුළත් කරන්න! (ඍණ අංක හෝ අකුරු පිළිගනු නොලැබේ)',
    msgAdded: 'සාර්ථකව එකතු විය!',
    msgExcelShift: 'ගොනුව බාගත වූ අතර Stock එක යාවත්කාලීන විය!',
    msgRestoreSelect: 'කරුණාකර Excel File එකක් තෝරන්න!',
    msgRestoreSuccess: 'Excel Restore සාර්ථකයි!',
    msgResetConfirm: 'ඔබට නැවත මුල් දත්ත ලබා ගැනීමට අවශ්‍ය බව විශ්වාසද?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'ගොනුව Share කිරීමට සූදානම්!',
    shareNotSupported: 'ඔබගේ බ්‍රවුසරය File Share කිරීමට සහය නොදක්වයි. Direct Download සක්‍රිය විය.',
    msgItemCleared: 'දත්ත ඉවත් කර Closing Stock එක මුල් තත්වයට පත් කරන ලදී!',
    batchSuccess: 'Batch දත්ත සාර්ථකව යාවත්කාලීන විය!'
  },
  en: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'Type Code or Name to filter...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt',
    optIssues: 'Issues',
    optReturn: 'Return',
    optSslI: 'Received to SSL',
    optSslJ: 'Sent to SSL',
    optRejectionL: 'Rejection',
    lblAmount: '<i class="fa-solid fa-calculator"></i> Enter Amount:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> Settings & Preferences',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> Select Language:',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Choose Theme:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Restore Excel (.xlsx) File:',
    descRestore: 'Update current inventory using a previously saved Excel file.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> Export Excel Backup:',
    descBackup: 'Get a safe backup copy of current inventory data.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> Reset to Default Data:',
    descReset: 'Reset all records back to default starting items.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'Please select a Material Code or Name!',
    msgValidAmount: 'Please enter a valid number greater than 0! (Negative values or letters are not allowed)',
    msgAdded: 'successfully added!',
    msgExcelShift: 'File downloaded and Stock shifted successfully!',
    msgRestoreSelect: 'Please select an Excel file!',
    msgRestoreSuccess: 'Excel Restore Successful!',
    msgResetConfirm: 'Are you sure you want to reset to default data?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'File ready to share!',
    shareNotSupported: 'Your browser does not support file sharing. Direct download initiated.',
    msgItemCleared: 'Item data cleared and Closing Stock reset to original!',
    batchSuccess: 'Batch update applied successfully!'
  },
  ta: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> பெயர் அல்லது குறியீடு மூலம் தேடுக:',
    placeholderSearch: 'தேட குறியீடு அல்லது பெயரை தட்டச்சு செய்க...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> பிரிவைத் தேர்ந்தெடுக்கவும்:',
    optReceipt: 'ரசீது (Receipt)',
    optIssues: 'வழங்கல்கள் (Issues)',
    optReturn: 'திரும்பப் பெறுதல் (Return)',
    optSslI: 'Received to SSL',
    optSslJ: 'Sent to SSL',
    optRejectionL: 'Rejection',
    lblAmount: '<i class="fa-solid fa-calculator"></i> அளவை உள்ளிடவும்:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> அமைப்புகள் (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> மொழியைத் தேர்ந்தெடுக்கவும்:',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> தீம் தேர்ந்தெடுக்கவும்:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> எக்செல் கோப்பை மீட்டெடுக்க:',
    descRestore: 'முன்பு சேமிக்கப்பட்ட எக்செல் கோப்பைப் பயன்படுத்தித் தரவைப் புதுப்பிக்கவும்.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> காப்புப் பிரதி பெற:',
    descBackup: 'தற்போதைய தரவின் பாதுகாப்பான காப்புப் பிரதியைப் பெறவும்.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> இயல்புநிலைக்கு மீட்டமைக்க:',
    descReset: 'அனைத்து தரவையும் ஆரம்ப நிலைக்கு மீட்டமைக்கவும்.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'தயவுசெய்து ஒரு பொருளைத் தேர்ந்தெடுக்கவும்!',
    msgValidAmount: 'தயவுசெய்து 0 ஐ விட அதிகமான சரியான எண்ணை உள்ளிடவும்!',
    msgAdded: 'வெற்றிகரமாக சேர்க்கப்பட்டது!',
    msgExcelShift: 'பதிவிறக்கம் செய்யப்பட்டது, இருப்பு புதுப்பிக்கப்பட்டது!',
    msgRestoreSelect: 'தயவுசெய்து எக்செல் கோப்பைத் தேர்ந்தெடுக்கவும்!',
    msgRestoreSuccess: 'எக்செல் மீட்டமைப்பு வெற்றிகரமாக முடிந்தது!',
    msgResetConfirm: 'ஆரம்ப தரவுக்கு மீட்டமைக்க நிச்சயமாக விரும்புகிறீர்களா?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'பகிர கோப்பு தயாராக உள்ளது!',
    shareNotSupported: 'உங்கள் உலாவி கோப்பு பகிர்வை ஆதரிக்கவில்லை.',
    msgItemCleared: 'தரவு அழிக்கப்பட்டு தொடக்க நிலைக்கு மாற்றப்பட்டது!',
    batchSuccess: 'தொகுப்பு வெற்றிகரமாக புதுப்பிக்கப்பட்டது!'
  }
};

let currentLang = localStorage.getItem('rmc_app_lang') || 'si';
let currentTheme = localStorage.getItem('rmc_app_theme') || 'light';
let inventory = []; 
let selectedIndex = -1;
let searchDebounceTimeout = null;
let todayModalSearchTimeout = null;
let currentExportMode = 'excel'; 

const defaultItems = [ 
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500}, 
  {type: "RM", code: "11002301", name: "MONOSODIUM GLUTAMATE", uom: "KG", op_stock: 4525}, 
  {type: "RM", code: "67548375", name: "ONION POWDER", uom: "KG", op_stock: 120}, 
  {type: "RM", code: "11067473", name: "CITRIC ACID MONOHYDRATE (FOOD GRADE)", uom: "KG", op_stock: 50}, 
  {type: "RM", code: "11002242", name: "SPICE CELERY POWDER", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "67550393", name: "GARLIC POWDER", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "67548417", name: "WHITE PEPPER", uom: "KG", op_stock: 15}, 
  {type: "RM", code: "11002253", name: "SPICE TURMERIC POWDER", uom: "KG", op_stock: 4}, 
  {type: "RM", code: "11061729", name: "I+G SODIUM 5'RIBONUCLEOTID", uom: "KG", op_stock: 40}, 
  {type: "RM", code: "11827361", name: "DRIED CORN STARCH 5% MOISTURE-SSL", uom: "KG", op_stock: 6000}, 
  {type: "RM", code: "11061758", name: "CORN STARCH - IMPORT", uom: "KG", op_stock: 0}, 
  {type: "RM", code: "11067112", name: "YEAST EXTR. MICROGRANUL. STANDARD 18% SA", uom: "KG", op_stock: 400}, 
  {type: "RM", code: "11067118", name: "FLAVOUR CHICKEN POWDER (S-2182)", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "11061730", name: "CARAMEL COLOUR CLASS III (E150C)", uom: "KG", op_stock: 20}, 
  {type: "RM", code: "11067140", name: "MALTO DEXTRIN 18-20 (M20)", uom: "KG", op_stock: 500}, 
  {type: "RM", code: "11002220", name: "SPICE NUTMEG POWDER", uom: "KG", op_stock: 10}, 
  {type: "RM", code: "11002206", name: "SPICE BLACK PEPPER POWDER", uom: "KG", op_stock: 150}, 
  {type: "RM", code: "11002213", name: "SPICE CORIANDER POWDER", uom: "KG", op_stock: 0}, 
  {type: "RM", code: "11002214", name: "SPICE CUMIN POWDER", uom: "KG", op_stock: 100}, 
  {type: "RM", code: "11002211", name: "SPICE CLOVE POWDER", uom: "KG", op_stock: 10}, 
  {type: "RM", code: "11002210", name: "SPICE CINNAMON POWDER", uom: "KG", op_stock: 2} 
]; 

function showLoading(text = "Processing...") {
  const el = document.getElementById('loadingText');
  if (el) el.innerText = text;
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'none';
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) themeSelect.value = theme;
  localStorage.setItem('rmc_app_theme', theme);
}

function changeTheme(theme) { applyTheme(theme); }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('rmc_app_lang', lang);
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = lang;
  
  const t = i18n[lang] || i18n['si'];
  const setHtml = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };
  const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };

  setHtml('lblSearch', t.lblSearch);
  const searchInputEl = document.getElementById('searchInput');
  if(searchInputEl) searchInputEl.placeholder = t.placeholderSearch;
  setHtml('lblSection', t.lblSection);
  setText('optReceipt', t.optReceipt);
  setText('optIssues', t.optIssues);
  setText('optReturn', t.optReturn);
  setText('optSslI', t.optSslI);
  setText('optSslJ', t.optSslJ);
  setText('optRejectionL', t.optRejectionL);
  setHtml('lblAmount', t.lblAmount);
  setHtml('btnSave', t.btnSave);
  
  const btnExcel = document.getElementById('btnExcel'); if(btnExcel) btnExcel.title = t.titleExcel;
  const btnShare = document.getElementById('btnShare'); if(btnShare) btnShare.title = t.titleShare;
  
  setHtml('txtSettingsTitle', t.txtSettingsTitle);
  setHtml('lblLanguage', t.lblLanguage);
  setHtml('lblTheme', t.lblTheme);
  setHtml('lblRestore', t.lblRestore);
  setText('descRestore', t.descRestore);
  setHtml('btnRestore', t.btnRestore);
  setHtml('lblBackup', t.lblBackup);
  setText('descBackup', t.descBackup);
  setHtml('btnBackup', t.btnBackup);
  setHtml('lblReset', t.lblReset);
  setText('descReset', t.descReset);
  setHtml('btnReset', t.btnReset);
  setHtml('lblFooter', t.lblFooter);
}

function changeLanguage(lang) { applyLanguage(lang); }

function showToast(message, type = 'success') { 
  const container = document.getElementById('toastContainer'); 
  if (!container) return;
  const toast = document.createElement('div'); 
  toast.className = `toast toast-${type}`; 
  let iconClass = 'fa-circle-check'; 
  if (type === 'error') iconClass = 'fa-circle-xmark'; 
  if (type === 'warning') iconClass = 'fa-triangle-exclamation'; 
  toast.innerHTML = `<i class="fa-solid ${iconClass}" style="font-size: 1.2rem; color: var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'warning'});"></i> <span>${message}</span>`; 
  container.appendChild(toast); 
  
  setTimeout(() => { 
    toast.style.opacity = '0';
    toast.style.transform = 'scale(0.8)';
    setTimeout(() => toast.remove(), 250);
  }, 2500); 
} 

function getTodayStr() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function roundNum(val) {
  return Math.round((Number(val) + Number.EPSILON) * 1000) / 1000;
}

function calculateClosingStock(item) {
  const op = Number(item.op_stock) || 0;
  const receipt = Number(item.f_receipt) || 0;
  const issues = Number(item.g_issues) || 0;
  const ret = Number(item.h_return) || 0;
  const sslRec = Number(item.i_ssl_received) || 0;
  const sslSent = Number(item.j_ssl_sent) || 0;
  const rejection = Number(item.l_rejection) || 0;

  return roundNum(op + receipt - issues + ret + sslRec - sslSent - rejection);
}

function loadInventoryData() { 
  const savedData = localStorage.getItem('rmc_stock_inventory'); 
  if (savedData) { 
    try { 
      inventory = JSON.parse(savedData); 
      inventory.forEach(item => {
        item.op_stock = Number(item.op_stock) || 0;
        item.f_receipt = Number(item.f_receipt) || 0;
        item.g_issues = Number(item.g_issues) || 0;
        item.h_return = Number(item.h_return) || 0;
        item.i_ssl_received = Number(item.i_ssl_received) || 0;
        item.j_ssl_sent = Number(item.j_ssl_sent) || 0;
        item.l_rejection = Number(item.l_rejection) || 0;
        item.closing = calculateClosingStock(item);
        item.last_updated = item.last_updated || "";
      });
    } catch(e) { 
      initDefaultInventory(); 
    } 
  } else { 
    initDefaultInventory(); 
  } 
} 

function initDefaultInventory() { 
  inventory = defaultItems.map(item => ({ 
    ...item, 
    op_stock: Number(item.op_stock) || 0,
    f_receipt: 0, 
    g_issues: 0, 
    h_return: 0, 
    i_ssl_received: 0, 
    j_ssl_sent: 0, 
    l_rejection: 0, 
    closing: Number(item.op_stock) || 0,
    last_updated: ""
  })); 
  saveInventoryData(); 
} 

function saveInventoryData() { 
  localStorage.setItem('rmc_stock_inventory', JSON.stringify(inventory)); 
} 

function updateVisibilityState(isTypingOrSelected) {
  const footerNote = document.getElementById('lblFooter');
  if (footerNote) {
    footerNote.style.display = isTypingOrSelected ? 'none' : 'block';
  }
}

function updateClearBtnVisibility() {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (!clearSearchBtn || !searchInput) return;
  if (searchInput.value.trim() !== '' || selectedIndex !== -1) {
    clearSearchBtn.style.display = 'flex';
  } else {
    clearSearchBtn.style.display = 'none';
  }
}

function clearSearchInput() {
  const searchInput = document.getElementById('searchInput');
  const selectedBadge = document.getElementById('selectedBadge');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput) searchInput.value = '';
  selectedIndex = -1;
  if (selectedBadge) selectedBadge.style.display = 'none';
  if (searchResults) searchResults.style.display = 'none';
  updateVisibilityState(false);
  updateClearBtnVisibility();
  if (searchInput) searchInput.focus();
}

function selectItem(index) { 
  selectedIndex = index; 
  const item = inventory[index]; 
  if (!item) return;
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const selectedBadge = document.getElementById('selectedBadge');

  if (searchInput) searchInput.value = `${item.code} - ${item.name}`; 
  if (searchResults) searchResults.style.display = 'none'; 
  
  item.closing = calculateClosingStock(item);

  const dispCode = document.getElementById('dispCode'); if(dispCode) dispCode.innerText = item.code; 
  const dispName = document.getElementById('dispName'); if(dispName) dispName.innerText = item.name; 
  const dispUom = document.getElementById('dispUom'); if(dispUom) dispUom.innerText = item.uom; 
  const dispClosing = document.getElementById('dispClosing'); if(dispClosing) dispClosing.innerText = Number(item.closing).toLocaleString() + ' ' + item.uom; 
  
  if(selectedBadge) selectedBadge.style.display = 'block'; 
  updateVisibilityState(true);
  updateClearBtnVisibility();

  const inputAmount = document.getElementById('inputAmount');
  if (inputAmount) inputAmount.focus();
} 

function addSingleSectionData() { 
  const t = i18n[currentLang] || i18n['si'];
  if (selectedIndex === -1 || !inventory[selectedIndex]) { 
    showToast(t.msgSelectMaterial, 'warning'); 
    return; 
  } 
  
  const sectionSelect = document.getElementById('sectionSelect');
  const inputAmount = document.getElementById('inputAmount');
  
  if (!sectionSelect || !inputAmount) return;

  const targetSection = sectionSelect.value; 
  const rawVal = inputAmount.value.trim();
  const amount = parseFloat(rawVal) || 0; 
  
  // Strict Validation: prevent negative, non-numeric, e, +, -
  if (rawVal === "" || isNaN(amount) || amount <= 0 || rawVal.includes('-') || rawVal.includes('+') || rawVal.toLowerCase().includes('e')) { 
    showToast(t.msgValidAmount, 'error'); 
    inputAmount.focus();
    return; 
  } 
  
  let item = inventory[selectedIndex]; 
  
  if (targetSection === 'F') item.f_receipt = roundNum(item.f_receipt + amount); 
  else if (targetSection === 'G') item.g_issues = roundNum(item.g_issues + amount); 
  else if (targetSection === 'H') item.h_return = roundNum(item.h_return + amount); 
  else if (targetSection === 'I') item.i_ssl_received = roundNum(item.i_ssl_received + amount); 
  else if (targetSection === 'J') item.j_ssl_sent = roundNum(item.j_ssl_sent + amount); 
  else if (targetSection === 'L') item.l_rejection = roundNum(item.l_rejection + amount); 

  item.closing = calculateClosingStock(item); 
  item.last_updated = getTodayStr();

  const dispClosing = document.getElementById('dispClosing');
  if (dispClosing) {
    dispClosing.innerText = Number(item.closing).toLocaleString() + ' ' + item.uom;
  }

  saveInventoryData(); 
  inputAmount.value = ''; 
  showToast(`${item.name} [${targetSection}] - ${amount} ${t.msgAdded}`, 'success'); 
  
  // Quick Entry Keyboard Shortcut: reset search & focus back to search input
  clearSearchInput();
} 

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    modal.classList.add('show');
  });
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 200);
}

/* Today Uploaded Modal Functions */
function openTodayUploadedModal() {
  const todaySearchInput = document.getElementById('todayModalSearchInput');
  if (todaySearchInput) todaySearchInput.value = '';
  renderTodayUploadedList();
  showModal('todayUploadedModal');
}

function closeTodayUploadedModal() {
  hideModal('todayUploadedModal');
}

function renderTodayUploadedList() {
  const container = document.getElementById('todayCardsContainer');
  if (!container) return;
  container.innerHTML = '';

  const todayStr = getTodayStr();
  const searchInputVal = document.getElementById('todayModalSearchInput');
  const q = searchInputVal ? searchInputVal.value.toLowerCase().trim() : '';
  const fragment = document.createDocumentFragment();

  let count = 0;

  inventory.forEach((item, idx) => {
    item.closing = calculateClosingStock(item);
    const hasActivity = (item.last_updated === todayStr) || 
                        (item.f_receipt > 0 || item.g_issues > 0 || item.h_return > 0 || item.i_ssl_received > 0 || item.j_ssl_sent > 0 || item.l_rejection > 0);

    if (hasActivity) {
      const matchesSearch = (String(item.name) + " " + String(item.code)).toLowerCase().includes(q);
      if (matchesSearch) {
        count++;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checklist-item';
        itemDiv.style.marginBottom = '8px';

        itemDiv.innerHTML = ` 
          <div class="checklist-left">
            <div class="checklist-info">
              <div class="checklist-name" title="${item.name}">${item.name}</div>
              <div class="checklist-code"><i class="fa-solid fa-barcode"></i> ${item.code}</div>
            </div>
          </div>
          <div class="checklist-right">
            <div class="checklist-stock">${Number(item.closing).toLocaleString()} ${item.uom}</div>
            <div style="font-size: 0.68rem; color: var(--success); font-weight: 700; text-transform: uppercase;">Today Live</div>
          </div>
        `;

        itemDiv.onclick = () => {
          openItemDetails(idx);
        };

        fragment.appendChild(itemDiv);
      }
    }
  });

  if (count === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted); font-weight:600;">අද දින දත්ත කිසිවක් ඇතුළත් කර නැත. (No updates today)</div>`;
  } else {
    container.appendChild(fragment);
  }
}

/* Batch Operations / Multi-select Functions */
function openBatchModal() {
  const batchInput = document.getElementById('batchInputAmount');
  if (batchInput) batchInput.value = '';
  renderBatchItemsList();
  showModal('batchModal');
}

function closeBatchModal() {
  hideModal('batchModal');
}

function renderBatchItemsList() {
  const container = document.getElementById('batchItemsContainer');
  if (!container) return;
  container.innerHTML = '';
  const fragment = document.createDocumentFragment();

  inventory.forEach((item, idx) => {
    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'space-between';
    div.style.padding = '8px 10px';
    div.style.background = 'var(--card-bg)';
    div.style.borderRadius = '8px';
    div.style.border = '1px solid var(--border-color)';
    div.style.marginBottom = '6px';

    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; overflow: hidden;">
        <input type="checkbox" class="batch-item-checkbox" data-index="${idx}" style="width: 18px; height: 18px; cursor: pointer;">
        <span style="font-size: 0.88rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">[${item.code}] ${item.name}</span>
      </div>
      <span style="font-size: 0.8rem; color: var(--text-muted); flex-shrink: 0;">${item.uom}</span>
    `;
    fragment.appendChild(div);
  });
  container.appendChild(fragment);
}

function toggleSelectAllBatch(select) {
  const checkboxes = document.querySelectorAll('.batch-item-checkbox');
  checkboxes.forEach(chk => chk.checked = select);
}

function applyBatchOperation() {
  const t = i18n[currentLang] || i18n['si'];
  const sectionSel = document.getElementById('batchSectionSelect');
  const amountInput = document.getElementById('batchInputAmount');
  if (!sectionSel || !amountInput) return;

  const section = sectionSel.value;
  const rawVal = amountInput.value.trim();
  const amount = parseFloat(rawVal) || 0;

  if (rawVal === "" || isNaN(amount) || amount <= 0 || rawVal.includes('-') || rawVal.includes('+') || rawVal.toLowerCase().includes('e')) {
    showToast(t.msgValidAmount, 'error');
    amountInput.focus();
    return;
  }

  const checkboxes = document.querySelectorAll('.batch-item-checkbox:checked');
  if (checkboxes.length === 0) {
    showToast('කරුණාකර අයිතම අවම වශයෙන් එකක්වත් තෝරන්න!', 'warning');
    return;
  }

  showLoading("Applying batch updates...");

  setTimeout(() => {
    checkboxes.forEach(chk => {
      const idx = parseInt(chk.getAttribute('data-index'));
      const item = inventory[idx];
      if (item) {
        if (section === 'F') item.f_receipt = roundNum(item.f_receipt + amount);
        else if (section === 'G') item.g_issues = roundNum(item.g_issues + amount);
        else if (section === 'H') item.h_return = roundNum(item.h_return + amount);
        else if (section === 'I') item.i_ssl_received = roundNum(item.i_ssl_received + amount);
        else if (section === 'J') item.j_ssl_sent = roundNum(item.j_ssl_sent + amount);
        else if (section === 'L') item.l_rejection = roundNum(item.l_rejection + amount);

        item.closing = calculateClosingStock(item);
        item.last_updated = getTodayStr();
      }
    });

    saveInventoryData();
    hideLoading();
    closeBatchModal();
    showToast(t.batchSuccess, 'success');
  }, 300);
}

function openSettings() { 
  showModal('settingsModal');
} 

function closeSettings() { 
  hideModal('settingsModal');
} 

function openRestoreHelpModal() {
  showModal('restoreHelpModal');
  switchHelpTopic('fileType');
}

function closeRestoreHelpModal() {
  hideModal('restoreHelpModal');
}

function openExportModal(mode) {
  currentExportMode = mode;
  updateDefaultFileName();
  showModal('exportModal');
}

function closeExportModal() {
  hideModal('exportModal');
}

function updateDefaultFileName() {
  const formatSelect = document.getElementById('exportFormatSelect');
  const fileNameInput = document.getElementById('exportFileNameInput');
  if (!formatSelect || !fileNameInput) return;

  const ext = formatSelect.value;
  const today = getTodayStr();
  fileNameInput.value = `Stock_Counting_${today}.${ext}`;
}

function switchHelpTopic(topic) {
  const box = document.getElementById('helpContentBox');
  if (!box) return;

  if (topic === 'fileType') {
    box.innerHTML = `
      <h4 style="color: var(--primary); margin-bottom: 8px;"><i class="fa-solid fa-file-excel"></i> Upload කළ යුත්තේ මොන වගේ File එකක්ද?</h4>
      <p>• මෙම App එක මඟින් මීට පෙර Download කරගත් හෝ Backup එකක් ලෙස ලබාගත් <b>Excel (.xlsx හෝ .xls)</b> ගොනුවක් පමණක් upload කළ යුතුය.</p>
      <p>• එම Excel ගොනුව තුළ අනිවාර්යයෙන්ම <b>Material Code, Material Name, Op.Stock-Warehouse, Receipt, Issues, Return, Closing Stock</b> වැනි නිවැරදි ශීර්ෂ (Headers) අඩංගු විය යුතුය.</p>
      <p>• වෙනත් වෙනත් අක්‍රමවත් Excel පත්‍ර උඩුගත කිරීමෙන් දත්ත දෝෂ සහගත විය හැක.</p>
    `;
  } else if (topic === 'howToDo') {
    box.innerHTML = `
      <h4 style="color: var(--success); margin-bottom: 8px;"><i class="fa-solid fa-upload"></i> Excel File එකක් Upload කර Restore කරන්නේ කෙසේද?</h4>
      <p>1. Settings වෙත ගොස් <b>'Restore Excel (.xlsx) File'</b> යටතේ ඇති <b>'Choose File'</b> බොත්තම ඔබන්න.</p>
      <p>2. ඔබගේ පරිගණකයෙන් හෝ දුරකථනයෙන් අදාළ Excel ගොනුව තෝරාගන්න.</p>
      <p>3. ඉන්පසු කොළ පාටින් ඇති <b>'Restore Excel Data'</b> බොත්තම ක්ලික් කරන්න.</p>
      <p>4. සාර්ථක පණිවිඩයක් සමඟින් ඔබගේ පැරණි දත්ත යාවත්කාලීන වනු ඇත.</p>
    `;
  } else if (topic === 'appFeatures') {
    box.innerHTML = `
      <h4 style="color: var(--warning); margin-bottom: 8px;"><i class="fa-solid fa-boxes-stacked"></i> Web App එක භාවිතයෙන් කළ හැකි දේවල් මොනවාද?</h4>
      <p>• <b>Stock Tracking:</b> ද්‍රව්‍යවල (Materials) Code හෝ Name මඟින් සෙවීම සහ Receipt, Issues, Return, SSL Received/Sent, Rejection ආදී විවිධ Sections යටතේ දත්ත ඇතුළත් කිරීම.</p>
      <p>• <b>Real-time Closing Stock:</b> දත්ත ඇතුළත් කළ පසු ස්වයංක්‍රීයව Closing Stock එක ගණනය වීම.</p>
      <p>• <b>Excel Export & Shift:</b> දිනපතා තොග වාර්තා Excel ගොනුවක් ලෙස ඩවුන්ලෝඩ් කර ගැනීම සහ Stock එක ඉදිරියට මාරු කිරීම (Shift Stock).</p>
      <p>• <b>Share Report:</b> සකස් කළ වාර්තා WhatsApp හෝ වෙනත් යෙදුම් හරහා පහසුවෙන් Share කිරීම.</p>
      <p>• <b>Multi-language & Theme:</b> සිංහල, ඉංග්‍රීසි සහ දෙමළ භාෂා මෙන්ම විවිධ Themes මාරු කරමින් භාවිත කිරීම.</p>
    `;
  }
}

function openItemDetails(index) {
  const item = inventory[index];
  if (!item) return;
  
  item.closing = calculateClosingStock(item);
  const setText = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
  
  setText('detCode', item.code);
  setText('detName', item.name);
  setText('detUom', item.uom);
  setText('detOp', Number(item.op_stock).toLocaleString() + ' ' + item.uom);
  setText('detReceipt', Number(item.f_receipt).toLocaleString() + ' ' + item.uom);
  setText('detIssues', Number(item.g_issues).toLocaleString() + ' ' + item.uom);
  setText('detReturn', Number(item.h_return).toLocaleString() + ' ' + item.uom);
  setText('detSslI', Number(item.i_ssl_received || 0).toLocaleString() + ' ' + item.uom);
  setText('detSslJ', Number(item.j_ssl_sent || 0).toLocaleString() + ' ' + item.uom);
  setText('detRejectionL', Number(item.l_rejection || 0).toLocaleString() + ' ' + item.uom);
  setText('detClosing', Number(item.closing).toLocaleString() + ' ' + item.uom);

  showModal('itemDetailModal');
}

function closeItemDetailModal() {
  hideModal('itemDetailModal');
}

function generateWorkbookWithFormulas() {
  const headers = [
    "Type", "Material Code", "Material Name", "UOM", 
    "Op.Stock-Warehouse", "Receipt", "Issues", "Return", 
    "Received to SSL", "Sent to SSL", "Rejection", "Closing Stock"
  ];
  
  const sheetData = [headers];

  inventory.forEach((item) => {
    sheetData.push([
      item.type || "RM",
      item.code,
      item.name,
      item.uom,
      Number(item.op_stock) || 0,
      Number(item.f_receipt) || 0,
      Number(item.g_issues) || 0,
      Number(item.h_return) || 0,
      Number(item.i_ssl_received) || 0,
      Number(item.j_ssl_sent) || 0,
      Number(item.l_rejection) || 0,
      Number(item.closing) || 0
    ]);
  });

  const worksheet = XLSX.utils.aoa_to_sheet(sheetData); 

  inventory.forEach((_, index) => {
    const rowNum = index + 2; 
    const cellRef = `L${rowNum}`;
    if (worksheet[cellRef]) {
      worksheet[cellRef].f = `E${rowNum}+F${rowNum}-G${rowNum}+H${rowNum}+I${rowNum}-J${rowNum}-K${rowNum}`;
    }
  });

  const workbook = XLSX.utils.book_new(); 
  XLSX.utils.book_append_sheet(workbook, worksheet, "Stock_Data");
  return workbook;
}

function getFormattedFileData(format, customName) {
  const today = getTodayStr();
  const workbook = generateWorkbookWithFormulas();
  const fileName = customName || `Stock_Counting_${today}.${format}`;

  if (format === 'xlsx') {
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    return {
      blob: new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }),
      filename: fileName,
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    };
  } else if (format === 'csv') {
    const worksheet = workbook.Sheets["Stock_Data"];
    const csvContent = XLSX.utils.sheet_to_csv(worksheet);
    return {
      blob: new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }),
      filename: fileName,
      mimeType: 'text/csv'
    };
  } else if (format === 'txt') {
    let txtContent = `STOCK COUNTING REPORT - ${today}\n\n`;
    inventory.forEach((item, idx) => {
      txtContent += `${idx + 1}. [${item.code}] ${item.name}\n`;
      txtContent += `   Op Stock: ${item.op_stock} | Receipts: ${item.f_receipt} | Issues: ${item.g_issues} | Returns: ${item.h_return}\n`;
      txtContent += `   SSL Rec: ${item.i_ssl_received} | SSL Sent: ${item.j_ssl_sent} | Rejections: ${item.l_rejection}\n`;
      txtContent += `   Closing Stock: ${item.closing} ${item.uom}\n`;
      txtContent += `--------------------------------------------------\n`;
    });
    return {
      blob: new Blob([txtContent], { type: 'text/plain;charset=utf-8;' }),
      filename: fileName,
      mimeType: 'text/plain'
    };
  }
}

function triggerDirectDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (document.body.contains(a)) document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
}

async function processExportAction() {
  const t = i18n[currentLang] || i18n['si'];
  const formatSelect = document.getElementById('exportFormatSelect');
  const fileNameInput = document.getElementById('exportFileNameInput');
  const chkShiftStock = document.getElementById('chkShiftStock');
  
  const format = formatSelect ? formatSelect.value : 'xlsx';
  const shouldShift = chkShiftStock ? chkShiftStock.checked : false;

  let customFileName = fileNameInput && fileNameInput.value.trim() !== '' 
    ? fileNameInput.value.trim() 
    : `Stock_Counting_${getTodayStr()}.${format}`;

  if (!customFileName.endsWith(`.${format}`)) {
    customFileName += `.${format}`;
  }

  showLoading("Generating file & exporting...");

  setTimeout(async () => {
    const fileData = getFormattedFileData(format, customFileName);
    closeExportModal();

    if (currentExportMode === 'excel') {
      triggerDirectDownload(fileData.blob, customFileName);
      if (shouldShift) {
        resetStockAndComplete(t);
      } else {
        showToast('File Downloaded Successfully!', 'success');
      }
    } else if (currentExportMode === 'share') {
      const file = new File([fileData.blob], customFileName, { type: fileData.mimeType });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: t.shareTitle,
            text: `Stock Counting Report - ${getTodayStr()}`,
            files: [file]
          });
          showToast(t.shareSuccess, 'success');
          if (shouldShift) resetStockAndComplete(t);
        } catch (err) {
          if (err.name !== 'AbortError') {
            triggerDirectDownload(fileData.blob, customFileName);
            showToast('Share failed. Downloaded directly.', 'warning');
            if (shouldShift) resetStockAndComplete(t);
          }
        }
      } else {
        triggerDirectDownload(fileData.blob, customFileName);
        showToast(t.shareNotSupported, 'warning');
        if (shouldShift) resetStockAndComplete(t);
      }
    }
    hideLoading();
  }, 300);
}

async function downloadXLSXBackup() { 
  showLoading("Preparing backup file...");
  setTimeout(() => {
    const defaultName = `Stock_Counting_Backup_${getTodayStr()}.xlsx`;
    const fileData = getFormattedFileData('xlsx', defaultName);
    triggerDirectDownload(fileData.blob, defaultName);
    hideLoading();
    showToast('Backup File Downloaded Successfully!', 'success');
  }, 300);
}

function resetStockAndComplete(t) {
  inventory.forEach(item => { 
    item.op_stock = Number(item.closing) || 0; 
    item.f_receipt = 0; 
    item.g_issues = 0; 
    item.h_return = 0; 
    item.i_ssl_received = 0; 
    item.j_ssl_sent = 0; 
    item.l_rejection = 0; 
    item.closing = item.op_stock; 
    item.last_updated = "";
  }); 
  saveInventoryData(); 
  clearSearchInput();
  showToast(t.msgExcelShift, 'success'); 
}

function restoreFromXLSX() { 
  const t = i18n[currentLang] || i18n['si'];
  const fileInput = document.getElementById('xlsxFileInput'); 
  if (!fileInput || !fileInput.files[0]) { 
    showToast(t.msgRestoreSelect, 'warning'); 
    return; 
  } 
  
  const file = fileInput.files[0];
  showLoading("Restoring Excel data...");

  const reader = new FileReader(); 
  reader.onload = function(e) { 
    try { 
      const data = new Uint8Array(e.target.result); 
      const workbook = XLSX.read(data, { type: 'array' }); 
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName]; 
      const matrix = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" }); 
      
      if (!matrix || matrix.length === 0) { 
        hideLoading();
        showToast('Error: Excel file is empty or corrupted!', 'error'); 
        return; 
      } 
      
      let headerIndex = -1; 
      let colMap = { type: -1, code: -1, name: -1, uom: -1, op_stock: -1, f_receipt: -1, g_issues: -1, h_return: -1, i_ssl_received: -1, j_ssl_sent: -1, l_rejection: -1, closing: -1 }; 
      
      for (let r = 0; r < Math.min(matrix.length, 10); r++) { 
        const rowStr = matrix[r].map(c => String(c).toLowerCase().trim()); 
        if (rowStr.some(c => c.includes("code") || c.includes("material") || c.includes("name"))) { 
          headerIndex = r; 
          rowStr.forEach((cellVal, colIdx) => { 
            if (cellVal.includes("type")) colMap.type = colIdx; 
            else if (cellVal.includes("code")) colMap.code = colIdx; 
            else if (cellVal.includes("name")) colMap.name = colIdx; 
            else if (cellVal.includes("uom") || cellVal.includes("unit")) colMap.uom = colIdx; 
            else if (cellVal.includes("op") || cellVal.includes("open") || cellVal.includes("warehouse")) colMap.op_stock = colIdx; 
            else if (cellVal.includes("receipt") || cellVal === "f") colMap.f_receipt = colIdx; 
            else if (cellVal.includes("issue") || cellVal === "g") colMap.g_issues = colIdx; 
            else if (cellVal.includes("return") || cellVal === "h") colMap.h_return = colIdx; 
            else if (cellVal.includes("received to ssl") || cellVal.includes("ssl i") || cellVal === "i") colMap.i_ssl_received = colIdx; 
            else if (cellVal.includes("sent to ssl") || cellVal.includes("ssl j") || cellVal === "j") colMap.j_ssl_sent = colIdx; 
            else if (cellVal.includes("rejection") || cellVal === "l") colMap.l_rejection = colIdx; 
            else if (cellVal.includes("closing")) colMap.closing = colIdx; 
          }); 
          break; 
        } 
      } 

      // Error Handling for incorrect columns/format
      if (headerIndex === -1 || colMap.code === -1 || colMap.name === -1) {
        hideLoading();
        showToast('Error: Invalid Excel format or missing mandatory columns (Material Code / Name)!', 'error');
        return;
      }

      const startIndex = headerIndex + 1; 
      let restored = []; 

      for (let r = startIndex; r < matrix.length; r++) { 
        const row = matrix[r]; 
        if (!row || row.length === 0) continue; 
        
        let code = colMap.code !== -1 && row[colMap.code] !== undefined ? String(row[colMap.code]).trim() : ""; 
        let name = colMap.name !== -1 && row[colMap.name] !== undefined ? String(row[colMap.name]).trim() : ""; 

        if (code || name) { 
          let type = colMap.type !== -1 && row[colMap.type] !== undefined && row[colMap.type] !== "" ? String(row[colMap.type]).trim() : "RM"; 
          let uom = colMap.uom !== -1 && row[colMap.uom] !== undefined && row[colMap.uom] !== "" ? String(row[colMap.uom]).trim() : "KG"; 
          
          let op_stock = colMap.op_stock !== -1 ? parseFloat(row[colMap.op_stock]) || 0 : 0; 
          let f_receipt = colMap.f_receipt !== -1 ? parseFloat(row[colMap.f_receipt]) || 0 : 0; 
          let g_issues = colMap.g_issues !== -1 ? parseFloat(row[colMap.g_issues]) || 0 : 0; 
          let h_return = colMap.h_return !== -1 ? parseFloat(row[colMap.h_return]) || 0 : 0; 
          let i_ssl_received = colMap.i_ssl_received !== -1 ? parseFloat(row[colMap.i_ssl_received]) || 0 : 0; 
          let j_ssl_sent = colMap.j_ssl_sent !== -1 ? parseFloat(row[colMap.j_ssl_sent]) || 0 : 0; 
          let l_rejection = colMap.l_rejection !== -1 ? parseFloat(row[colMap.l_rejection]) || 0 : 0; 
          
          let tempItem = { op_stock, f_receipt, g_issues, h_return, i_ssl_received, j_ssl_sent, l_rejection };
          let closing = calculateClosingStock(tempItem); 
          let last_updated = (f_receipt || g_issues || h_return || i_ssl_received || j_ssl_sent || l_rejection) ? getTodayStr() : "";
            
          restored.push({ 
            type, code, name, uom, op_stock, f_receipt, g_issues, h_return, i_ssl_received, j_ssl_sent, l_rejection, closing, last_updated
          }); 
        } 
      } 

      hideLoading();
      if (restored.length > 0) { 
        inventory = restored; 
        saveInventoryData(); 
        fileInput.value = ""; 
        closeSettings(); 
        showToast(t.msgRestoreSuccess, 'success'); 
      } else { 
        showToast('Error: No valid data rows found in Excel file!', 'error'); 
      } 
    } catch (err) { 
      hideLoading();
      showToast('Error reading Excel file! Please check the file structure.', 'error'); 
    } 
  }; 
  reader.readAsArrayBuffer(file); 
} 

function resetToDefault() { 
  const t = i18n[currentLang] || i18n['si'];
  if (confirm(t.msgResetConfirm)) { 
    localStorage.removeItem('rmc_stock_inventory'); 
    initDefaultInventory(); 
    clearSearchInput();
    closeSettings(); 
    showToast("Reset Successful!", "success"); 
  } 
} 

document.addEventListener('click', function (e) {
  const target = e.target.closest('.ripple');
  if (target) {
    const rect = target.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');

    const existingRipple = target.querySelector('.ripple-effect');
    if (existingRipple) {
      existingRipple.remove();
    }

    target.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 400);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadInventoryData();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  updateVisibilityState(false);
  updateClearBtnVisibility();

  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const inputAmount = document.getElementById('inputAmount');

  // Keyboard Navigation: Enter key handling for Quick Entry
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResults && searchResults.style.display === 'block') {
          const firstItem = searchResults.querySelector('.search-item');
          if (firstItem) {
            firstItem.click();
          }
        }
      }
    });

    searchInput.addEventListener('input', function() { 
      clearTimeout(searchDebounceTimeout);
      const query = this.value.toLowerCase().trim(); 
      
      updateClearBtnVisibility();

      if (query === '') {
        selectedIndex = -1;
        const selectedBadge = document.getElementById('selectedBadge');
        if (selectedBadge) selectedBadge.style.display = 'none';
        updateVisibilityState(false);
      } else {
        updateVisibilityState(true);
      }

      searchDebounceTimeout = setTimeout(() => {
        if (!searchResults) return;
        searchResults.innerHTML = ''; 
        if (!query) { 
          searchResults.style.display = 'none'; 
          return; 
        } 
        
        const filtered = inventory.filter(item => 
          String(item.code).toLowerCase().includes(query) || String(item.name).toLowerCase().includes(query) 
        ); 
        
        if (filtered.length > 0) { 
          searchResults.style.display = 'block'; 
          const fragment = document.createDocumentFragment();
          filtered.forEach(item => { 
            const idx = inventory.findIndex(i => i.code === item.code && i.name === item.name); 
            const div = document.createElement('div'); 
            div.className = 'search-item'; 
            div.innerHTML = `<span><strong>${item.code}</strong> - ${item.name}</span> <span style="color:var(--primary); font-weight:700; font-size:0.82rem;">${Number(item.closing).toLocaleString()} ${item.uom}</span>`; 
            div.onclick = () => selectItem(idx); 
            fragment.appendChild(div); 
          }); 
          searchResults.appendChild(fragment);
        } else { 
          searchResults.style.display = 'none'; 
        } 
      }, 100);
    }); 
  }

  // Prevent minus, plus, e in number input fields
  if (inputAmount) {
    inputAmount.addEventListener('keydown', function(e) {
      if (['-', '+', 'e', 'E'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        addSingleSectionData();
      }
    });
  }

  const batchAmountInput = document.getElementById('batchInputAmount');
  if (batchAmountInput) {
    batchAmountInput.addEventListener('keydown', function(e) {
      if (['-', '+', 'e', 'E'].includes(e.key)) {
        e.preventDefault();
      }
    });
  }

  document.addEventListener('click', function(e) {
    if (searchInput && searchResults && !searchInput.contains(e.target) && !searchResults.contains(e.target) && clearSearchBtn && !clearSearchBtn.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  const todayModalSearch = document.getElementById('todayModalSearchInput');
  if (todayModalSearch) {
    todayModalSearch.addEventListener('input', function() {
      clearTimeout(todayModalSearchTimeout);
      todayModalSearchTimeout = setTimeout(() => {
        renderTodayUploadedList();
      }, 100);
    });
  }
});

/* ===== Robust backup / upload / QR / ZIP / history additions ===== */
const HISTORY_KEY = 'rmc_stock_history_v2';
function addHistory(action, details='') {
  try {
    const list = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    list.unshift({time:new Date().toISOString(), action, details});
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0,100)));
  } catch(e) {}
}
function setSaveStatus(text='Saved') {
  const el=document.getElementById('saveStatus'); if(el) el.innerHTML='<i class="fa-solid fa-circle-check"></i> '+text;
}
function openHistoryModal(){ renderHistory(); showModal('historyModal'); }
function closeHistoryModal(){ hideModal('historyModal'); }
function renderHistory(){
  const c=document.getElementById('historyContainer'); if(!c)return;
  let list=[]; try{list=JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]')}catch(e){}
  if(!list.length){c.innerHTML='<div class="empty-state">No history yet.</div>';return;}
  c.innerHTML=list.map(x=>`<div class="checklist-item"><div class="checklist-left"><div class="checklist-info"><div class="checklist-name">${escapeHtml(x.action)}</div><div class="checklist-code">${escapeHtml(x.details||'')}</div></div></div><div class="checklist-right"><small>${new Date(x.time).toLocaleString()}</small></div></div>`).join('');
}
function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function openUploadModal(){showModal('uploadModal');renderUploadQueue()}
function closeUploadModal(){hideModal('uploadModal')}
function renderUploadQueue(){
  const input=document.getElementById('multiXlsxInput'), q=document.getElementById('uploadQueue'); if(!q)return;
  const files=input?.files||[]; q.innerHTML=Array.from(files).map(f=>`<div><i class="fa-solid fa-file-excel"></i> ${escapeHtml(f.name)} <span style="float:right">${Math.round(f.size/1024)} KB</span></div>`).join('');
}
async function restoreMultipleXLSX(){
  const input=document.getElementById('multiXlsxInput'); const files=Array.from(input?.files||[]);
  if(!files.length){showToast('Please select at least one Excel file.','warning');return;}
  showLoading('Reading Excel files...');
  try{
    const merged=new Map(inventory.map(i=>[String(i.code),normalizeItem(i)]));
    for(const file of files){
      const buf=await file.arrayBuffer(); const wb=XLSX.read(new Uint8Array(buf),{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]]; const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
      const parsed=parseExcelRows(rows); parsed.forEach(row=>merged.set(String(row.code),row));
    }
    inventory=Array.from(merged.values()).map(normalizeItem); saveInventoryData(); addHistory('Multi-file Excel restore',`${files.length} files`); setSaveStatus('Saved'); closeUploadModal(); renderUploadQueue(); input.value=''; showToast('All Excel files uploaded and merged successfully.','success');
  }catch(e){console.error(e);showToast('Upload failed. Please check the Excel files.','error')}
  finally{hideLoading()}
}
function normalizeHeader(v){return String(v??'').toLowerCase().replace(/[._\-\/()]/g,' ').replace(/\s+/g,' ').trim()}
function parseExcelRows(matrix){
  let hi=-1, map={};
  for(let r=0;r<Math.min(15,matrix.length);r++){
    const cells=matrix[r].map(normalizeHeader); const code=cells.findIndex(x=>x.includes('material code')||x==='code'||x.includes('item code'));
    const name=cells.findIndex(x=>x.includes('material name')||x==='name'||x.includes('item name'));
    if(code>=0 && name>=0){hi=r;cells.forEach((x,i)=>{if(x.includes('type'))map.type=i;else if(x.includes('code'))map.code=i;else if(x.includes('name'))map.name=i;else if(x.includes('uom')||x.includes('unit'))map.uom=i;else if(x.includes('op stock')||x.includes('opening')||x.includes('warehouse'))map.op_stock=i;else if(x.includes('receipt'))map.f_receipt=i;else if(x.includes('issue'))map.g_issues=i;else if(x.includes('return'))map.h_return=i;else if(x.includes('received to ssl')||x==='i')map.i_ssl_received=i;else if(x.includes('sent to ssl')||x==='j')map.j_ssl_sent=i;else if(x.includes('rejection')||x==='l')map.l_rejection=i;});break;}
  }
  if(hi<0||map.code==null||map.name==null)throw new Error('Invalid headers');
  const n=v=>Number(v)||0, out=[];
  for(let r=hi+1;r<matrix.length;r++){const row=matrix[r];const code=String(row[map.code]??'').trim(),name=String(row[map.name]??'').trim();if(!code&&!name)continue;const item={type:String(row[map.type]??'RM')||'RM',code,name,uom:String(row[map.uom]??'KG')||'KG',op_stock:n(row[map.op_stock]),f_receipt:n(row[map.f_receipt]),g_issues:n(row[map.g_issues]),h_return:n(row[map.h_return]),i_ssl_received:n(row[map.i_ssl_received]),j_ssl_sent:n(row[map.j_ssl_sent]),l_rejection:n(row[map.l_rejection]),last_updated:getTodayStr()};item.closing=calculateClosingStock(item);out.push(item)}return out;
}
function openBackupModal(){showModal('backupModal')}
function closeBackupModal(){hideModal('backupModal')}
function downloadJson(obj,name){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});triggerDirectDownload(blob,name)}
function downloadClosingBackup(){
  const data={version:2,type:'closing-stock-backup',createdAt:new Date().toISOString(),items:inventory.map(i=>({code:String(i.code),name:i.name,uom:i.uom,closing:calculateClosingStock(i)}))};
  downloadJson(data,`Closing_Stock_Backup_${getTodayStr()}.json`);addHistory('Closing Stock Backup','Downloaded');showToast('Closing Stock backup downloaded.','success');
}
function downloadFullBackup(){
  downloadJson({version:2,type:'full-backup',createdAt:new Date().toISOString(),items:inventory},`Full_Backup_${getTodayStr()}.json`);addHistory('Full Backup','Downloaded');showToast('Full backup downloaded.','success');
}
async function readJsonFile(file){if(!file)throw new Error('No file');return JSON.parse(await file.text())}
async function restoreClosingBackup(file){
  try{showLoading('Restoring Closing Stock...');const data=await readJsonFile(file);if(data.type!=='closing-stock-backup'||!Array.isArray(data.items))throw new Error('Invalid closing backup');const byCode=new Map(data.items.map(x=>[String(x.code),x]));let count=0;inventory.forEach(item=>{const x=byCode.get(String(item.code));if(x){item.op_stock=Number(x.closing)||0;item.f_receipt=0;item.g_issues=0;item.h_return=0;item.i_ssl_received=0;item.j_ssl_sent=0;item.l_rejection=0;item.closing=item.op_stock;item.last_updated='';count++}});saveInventoryData();addHistory('Closing Stock Restore',`${count} items mapped to Opening Stock`);showToast(`${count} items restored as Opening Stock.`,'success');document.getElementById('closingBackupInput').value='';}
  catch(e){showToast('Invalid Closing Stock backup file.','error')}finally{hideLoading()}
}
async function restoreFullBackup(file){
  try{showLoading('Restoring full backup...');const data=await readJsonFile(file);if(data.type!=='full-backup'||!Array.isArray(data.items))throw new Error('Invalid full backup');inventory=data.items.map(normalizeItem);saveInventoryData();addHistory('Full Restore',`${inventory.length} items`);showToast('Full restore completed successfully.','success');document.getElementById('fullBackupInput').value='';}
  catch(e){showToast('Invalid Full Backup file.','error')}finally{hideLoading()}
}
async function downloadRegisteredZip(){
  const populated=inventory.filter(i=>hasEnteredData(i)); if(!populated.length){showToast('No items with entered data are available.','warning');return}
  if(typeof JSZip==='undefined'||!window.jspdf||typeof QRCode==='undefined'){showToast('Required PDF/ZIP libraries are not available. Check your internet connection.','error');return}
  showLoading('Creating PDF files and ZIP...');
  try{const zip=new JSZip();const {jsPDF}=window.jspdf;
    for(const item of populated){const doc=new jsPDF();doc.setFontSize(16);doc.text('Stock Counting - Registered Item',15,18);doc.setFontSize(11);doc.text(`Material Code: ${String(item.code)}`,15,32);doc.text(`Material Name: ${String(item.name).slice(0,80)}`,15,41);doc.text(`UOM: ${item.uom}`,15,50);doc.text(`Opening Stock: ${item.op_stock}`,15,59);doc.text(`Closing Stock: ${calculateClosingStock(item)}`,15,68);doc.text(`Updated: ${item.last_updated||getTodayStr()}`,15,77);const canvas=document.createElement('canvas');await QRCode.toCanvas(canvas,String(item.code),{width:140,margin:1});doc.addImage(canvas.toDataURL('image/png'),'PNG',145,28,45,45);const safe=String(item.code).replace(/[^a-zA-Z0-9_-]/g,'_');zip.file(`${safe}_${getTodayStr()}.pdf`,doc.output('blob'))}
    const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}});triggerDirectDownload(blob,`Registered_Items_QR_${getTodayStr()}.zip`);addHistory('Registered Items ZIP',`${populated.length} PDFs`);showToast('ZIP downloaded successfully.','success');
  }catch(e){console.error(e);showToast('Could not create ZIP.','error')}finally{hideLoading()}
}
function hasEnteredData(i){return Number(i.f_receipt)||Number(i.g_issues)||Number(i.h_return)||Number(i.i_ssl_received)||Number(i.j_ssl_sent)||Number(i.l_rejection)||String(i.last_updated||'')!==''}
function openRegisteredModal(){renderRegisteredItems();showModal('registeredModal')}
function closeRegisteredModal(){hideModal('registeredModal')}
function renderRegisteredItems(){const c=document.getElementById('registeredItemsContainer');if(!c)return;const list=inventory.filter(hasEnteredData);document.getElementById('registeredCount').textContent=`${list.length} items`;c.innerHTML=list.length?list.map(i=>`<div class="checklist-item"><div class="checklist-left"><i class="fa-solid fa-qrcode" style="color:var(--primary)"></i><div class="checklist-info"><div class="checklist-name">${escapeHtml(i.name)}</div><div class="checklist-code">${escapeHtml(i.code)}</div></div></div><div class="checklist-right"><span class="checklist-stock">${Number(calculateClosingStock(i)).toLocaleString()} ${escapeHtml(i.uom)}</span></div></div>`).join(''):'<div class="empty-state">No registered items yet.</div>'}

/* Add history tracking without changing existing entry behaviour. */
const _addSingleSectionData=addSingleSectionData;
addSingleSectionData=function(){const before=selectedIndex;_addSingleSectionData();if(before>=0&&inventory[before]){addHistory('Stock Entry',`${inventory[before].code} - ${inventory[before].name}`);setSaveStatus('Saved');}}
const _saveInventoryData=saveInventoryData;
saveInventoryData=function(){_saveInventoryData();setSaveStatus('Saved');}

/* Safer single-file restore: merge by Material Code instead of replacing unrelated records. */
restoreFromXLSX = async function(){
  const t=i18n[currentLang]||i18n.si, input=document.getElementById('xlsxFileInput');
  const file=input?.files?.[0]; if(!file){showToast(t.msgRestoreSelect,'warning');return}
  showLoading('Restoring Excel data...');
  try{const rows=XLSX.utils.sheet_to_json(XLSX.read(new Uint8Array(await file.arrayBuffer()),{type:'array'}).Sheets[XLSX.read(new Uint8Array(await file.arrayBuffer()),{type:'array'}).SheetNames[0]],{header:1,defval:''});const parsed=parseExcelRows(rows);const map=new Map(inventory.map(i=>[String(i.code),i]));parsed.forEach(x=>map.set(String(x.code),normalizeItem(x)));inventory=Array.from(map.values()).map(normalizeItem);saveInventoryData();addHistory('Excel Restore',`${parsed.length} rows`);input.value='';closeSettings();showToast(t.msgRestoreSuccess,'success')}catch(e){console.error(e);showToast('Error reading Excel file. Check the headers and data.','error')}finally{hideLoading()}
};

/* Close modals with Escape and clicking the backdrop. */
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.modal.show').forEach(m=>hideModal(m.id))}});
document.addEventListener('click',e=>{if(e.target.classList?.contains('modal'))hideModal(e.target.id)});

/* ===== Upload / Restore reliability patch ===== */
(function(){
  const num = v => {
    if (typeof v === 'number') return Number.isFinite(v) ? v : 0;
    const s = String(v ?? '').replace(/,/g,'').trim();
    if (!s) return 0;
    const n = Number(s);
    return Number.isFinite(n) ? n : 0;
  };
  const key = v => normalizeHeader(v)
    .replace(/[\n\r]+/g,' ')
    .replace(/\s+/g,' ')
    .trim();

  function findColumn(headers, aliases){
    for(let i=0;i<headers.length;i++){
      const h=key(headers[i]);
      if(aliases.some(a=>h===a || h.includes(a))) return i;
    }
    return -1;
  }

  function parseExcelRowsRobust(matrix){
    if(!Array.isArray(matrix) || !matrix.length) throw new Error('Excel file is empty.');
    let headerIndex=-1, headers=[];
    const max=Math.min(matrix.length,30);
    for(let r=0;r<max;r++){
      const row=Array.isArray(matrix[r])?matrix[r]:[];
      const hs=row.map(key);
      const code=findColumn(hs,['material code','item code','product code','code','material no','material number']);
      const name=findColumn(hs,['material name','item name','product name','description','name']);
      if(code>=0 && name>=0){headerIndex=r;headers=hs;break;}
    }
    if(headerIndex<0) throw new Error('Missing Material Code and Material Name columns.');

    const c={
      type:findColumn(headers,['type','category']),
      code:findColumn(headers,['material code','item code','product code','code','material no','material number']),
      name:findColumn(headers,['material name','item name','product name','description','name']),
      uom:findColumn(headers,['uom','unit of measure','unit']),
      op_stock:findColumn(headers,['opening stock','opening','op stock','op. stock','warehouse stock','opening balance']),
      f_receipt:findColumn(headers,['receipt','receipts','received','f']),
      g_issues:findColumn(headers,['issue','issues','issued','g']),
      h_return:findColumn(headers,['return','returns','returned','h']),
      i_ssl_received:findColumn(headers,['received to ssl','ssl received','ssl i','i']),
      j_ssl_sent:findColumn(headers,['sent to ssl','ssl sent','ssl j','j']),
      l_rejection:findColumn(headers,['rejection','rejected','l']),
      closing:findColumn(headers,['closing stock','closing','closing balance'])
    };

    const out=[];
    for(let r=headerIndex+1;r<matrix.length;r++){
      const row=Array.isArray(matrix[r])?matrix[r]:[];
      const code=String(c.code>=0?(row[c.code]??''):'').trim();
      const name=String(c.name>=0?(row[c.name]??''):'').trim();
      if(!code && !name) continue;
      if(!code) continue;
      const item={
        type:String(c.type>=0?(row[c.type]??'RM'):'RM').trim()||'RM',
        code,name,
        uom:String(c.uom>=0?(row[c.uom]??'KG'):'KG').trim()||'KG',
        op_stock:num(c.op_stock>=0?row[c.op_stock]:0),
        f_receipt:num(c.f_receipt>=0?row[c.f_receipt]:0),
        g_issues:num(c.g_issues>=0?row[c.g_issues]:0),
        h_return:num(c.h_return>=0?row[c.h_return]:0),
        i_ssl_received:num(c.i_ssl_received>=0?row[c.i_ssl_received]:0),
        j_ssl_sent:num(c.j_ssl_sent>=0?row[c.j_ssl_sent]:0),
        l_rejection:num(c.l_rejection>=0?row[c.l_rejection]:0),
        last_updated:''
      };
      item.closing = c.closing>=0 && String(row[c.closing]??'').trim()!==''
        ? num(row[c.closing]) : calculateClosingStock(item);
      if(item.f_receipt||item.g_issues||item.h_return||item.i_ssl_received||item.j_ssl_sent||item.l_rejection) item.last_updated=getTodayStr();
      out.push(normalizeItem(item));
    }
    if(!out.length) throw new Error('No valid data rows found.');
    return out;
  }

  async function readExcelFile(file){
    if(!file) throw new Error('No file selected.');
    const name=String(file.name||'').toLowerCase();
    if(!/\.(xlsx|xls)$/.test(name)) throw new Error('Please select an Excel .xlsx or .xls file.');
    if(typeof XLSX==='undefined') throw new Error('Excel library could not be loaded. Please check internet connection and reload the app.');
    const buffer=await file.arrayBuffer();
    const wb=XLSX.read(new Uint8Array(buffer),{type:'array',cellDates:true});
    if(!wb.SheetNames?.length) throw new Error('Excel workbook has no worksheet.');
    const ws=wb.Sheets[wb.SheetNames[0]];
    const matrix=XLSX.utils.sheet_to_json(ws,{header:1,defval:'',raw:true});
    return parseExcelRowsRobust(matrix);
  }

  window.restoreMultipleXLSX = async function(){
    const input=document.getElementById('multiXlsxInput');
    const files=Array.from(input?.files||[]);
    if(!files.length){showToast('Excel file එකක් තෝරන්න.','warning');return;}
    if(typeof XLSX==='undefined'){showToast('Excel library load වී නැහැ. Internet connection එක පරීක්ෂා කර page එක reload කරන්න.','error');return;}
    showLoading(`Reading ${files.length} Excel file${files.length>1?'s':''}...`);
    try{
      const merged=new Map((Array.isArray(inventory)?inventory:[]).map(i=>[String(i.code).trim(),normalizeItem(i)]));
      let total=0;
      for(let n=0;n<files.length;n++){
        showLoading(`Reading file ${n+1} of ${files.length}: ${files[n].name}`);
        const rows=await readExcelFile(files[n]);
        rows.forEach(item=>{merged.set(String(item.code).trim(),item);total++;});
      }
      inventory=Array.from(merged.values()).map(normalizeItem);
      saveInventoryData();
      addHistory('Multi-file Excel Upload / Restore',`${files.length} file(s), ${total} row(s)`);
      setSaveStatus('Saved');
      if(input) input.value='';
      renderUploadQueue();
      closeUploadModal();
      if(typeof renderInventory==='function') renderInventory();
      showToast(`${total} Excel row(s) successfully uploaded/restored.`,`success`);
    }catch(e){
      console.error('Upload / Restore error:',e);
      showToast(`Upload / Restore failed: ${e.message||'Invalid Excel file.'}`,'error');
    }finally{hideLoading();}
  };

  window.restoreFromXLSX = async function(){
    const t=i18n[currentLang]||i18n.si;
    const input=document.getElementById('xlsxFileInput');
    const file=input?.files?.[0];
    if(!file){showToast(t.msgRestoreSelect||'Please select an Excel file.','warning');return;}
    if(typeof XLSX==='undefined'){showToast('Excel library load වී නැහැ. Internet connection එක පරීක්ෂා කර page එක reload කරන්න.','error');return;}
    showLoading(`Restoring ${file.name}...`);
    try{
      const parsed=await readExcelFile(file);
      const map=new Map((Array.isArray(inventory)?inventory:[]).map(i=>[String(i.code).trim(),normalizeItem(i)]));
      parsed.forEach(item=>map.set(String(item.code).trim(),item));
      inventory=Array.from(map.values()).map(normalizeItem);
      saveInventoryData();
      addHistory('Excel Restore',`${parsed.length} row(s)`);
      setSaveStatus('Saved');
      input.value='';
      closeSettings();
      if(typeof renderInventory==='function') renderInventory();
      showToast(t.msgRestoreSuccess||`${parsed.length} row(s) restored successfully.`,'success');
    }catch(e){
      console.error('Excel restore error:',e);
      showToast(`Excel Restore failed: ${e.message||'Please check the Excel file.'}`,'error');
    }finally{hideLoading();}
  };

  function bindUploadUI(){
    const input=document.getElementById('multiXlsxInput');
    const zone=document.getElementById('uploadDropzone');
    if(input && !input.dataset.bound){
      input.dataset.bound='1';
      input.addEventListener('change',renderUploadQueue);
    }
    if(zone && input && !zone.dataset.bound){
      zone.dataset.bound='1';
      zone.addEventListener('click',e=>{if(e.target!==input) input.click();});
      ['dragenter','dragover'].forEach(ev=>zone.addEventListener(ev,e=>{e.preventDefault();e.stopPropagation();zone.classList.add('dragover');}));
      ['dragleave','drop'].forEach(ev=>zone.addEventListener(ev,e=>{e.preventDefault();e.stopPropagation();zone.classList.remove('dragover');}));
      zone.addEventListener('drop',e=>{
        const dropped=Array.from(e.dataTransfer?.files||[]).filter(f=>/\.(xlsx|xls)$/i.test(f.name));
        if(!dropped.length){showToast('Excel .xlsx / .xls files only.','warning');return;}
        try{
          const dt=new DataTransfer(); dropped.forEach(f=>dt.items.add(f)); input.files=dt.files;
          renderUploadQueue();
        }catch(err){showToast('Could not attach dropped files. Please use Select Files.','error');}
      });
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bindUploadUI); else bindUploadUI();
  const oldOpenUploadModal=window.openUploadModal;
  window.openUploadModal=function(){bindUploadUI(); if(oldOpenUploadModal) oldOpenUploadModal(); else {showModal('uploadModal');renderUploadQueue();}};
})();
