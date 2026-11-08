/* ===================== Icons ===================== */
const IC = {
  pallet:'<path d="M2 11 13 5l9 5-11 6Z"/><path d="M5 12.67l11-6M8 14.33l11-6"/><path d="M2 11v4l1.8 1v-2.2l1.98 1.1v2.2l1.44.8v-2.2l1.98 1.1V19l1.8 1V16"/><path d="M11 20l2.2-1.2v-2.2l2.42-1.32v2.2l1.76-.96v-2.2L19.8 13v2.2L22 14v-4"/>',
  tote:'<path d="M4.5 4h15L22 8.5H2L4.5 4Z"/><path d="M12 4c-1.1.5.9 1.2-.2 1.9s1.3 1.4.2 2.6"/><path d="M2 8.5V10h20V8.5"/><path d="M3 10l1.3 10h15.4L21 10"/><path d="M7.5 10v2.6h9V10"/><path d="M10 20l1-5.6h2l1 5.6"/>',
  boxOpen:'<path d="M3 9.5 12 13l9-3.5"/><path d="M3 9.5V17l9 4 9-4V9.5"/><path d="M12 13v8"/><path d="M3 9.5 1.2 6.2 10.2 3 12 6.3M21 9.5l1.8-3.3L13.8 3 12 6.3"/>',
  palletBoxes:'<rect x="2" y="18" width="20" height="2" rx=".4"/><path d="M3.5 20v2h1.8v-2M9.2 20v2H11v-2M13 20v2h1.8v-2M18.7 20v2h1.8v-2"/><rect x="3.2" y="11" width="8.5" height="7" rx=".8"/><rect x="12.3" y="11" width="8.5" height="7" rx=".8"/><path d="M6.8 11v1.6h1.3V11M15.9 11v1.6h1.3V11"/><path d="M7.45 16v-2.2M6.6 14.6l.85-.85.85.85M16.55 16v-2.2M15.7 14.6l.85-.85.85.85"/><rect x="5.2" y="4" width="6.6" height="7" rx=".8"/><rect x="12.4" y="5.6" width="5.8" height="5.4" rx=".8"/><path d="M7.85 4v1.5h1.3V4"/><path d="M14.2 8.2h2.2M14.2 9.5h2.2"/>',
  cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 11.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 7H6"/>',
  tower:'<rect x="4" y="3" width="16" height="5" rx="1"/><rect x="4" y="10" width="16" height="5" rx="1"/><rect x="4" y="17" width="16" height="4" rx="1"/><path d="M8 5.5h3M8 12.5h3"/>',
  sort:'<path d="M12 3v7M12 10l-6 6M12 10l6 6M6 16v5M18 16v5M3 21h6M15 21h6"/>',
  layers:'<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="m2 13 10 5 10-5"/><path d="m2 18 10 5 10-5" opacity=".5"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  package:'<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="M3 7.5 12 12l9-4.5M12 12v9M7.5 5.2l9 4.6"/>',
  clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/>',
  inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5.5 5h13L21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6l2.5-8Z"/>',
  truck:'<path d="M2 6h12v10H2zM14 10h4l4 3v3h-8"/><circle cx="6.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/>',
  school:'<path d="M2 9 12 4l10 5-10 5L2 9Z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',
  book:'<path d="M4 4h6a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H4V4ZM20 4h-5a3 3 0 0 0-2 1v16a2 2 0 0 1 2-2h5V4Z"/>',
  test:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 13 2 2 4-4"/>',
  list:'<path d="m3 6 1.5 1.5L7 5M3 12l1.5 1.5L7 11M3 18l1.5 1.5L7 17M10 6h11M10 12h11M10 18h11"/>',
  scan:'<path d="M3 7V4h3M21 7V4h-3M3 17v3h3M21 17v3h-3M7 8v8M10 8v8M13 8v8M16 8v8"/>',
  camera:'<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="4"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>', check:'<path d="m5 12 5 5L19 7"/>', plus:'<path d="M12 5v14M5 12h14"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/>', trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  up:'<path d="m6 15 6-6 6 6"/>', down:'<path d="m6 9 6 6 6-6"/>', back:'<path d="M15 6l-6 6 6 6"/>', next:'<path d="M9 6l6 6-6 6"/>',
  chart:'<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/>', users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', file:'<path d="M6 3h8l5 5v13H6V3Z"/><path d="M14 3v5h5"/>',
  doc:'<path d="M6.5 2.5h8l5 5v14h-13v-19Z"/><path d="M14.5 2.5v5h5"/><path d="M9.5 11.5h6M9.5 14.5h6M9.5 17.5h3.5"/>',
  warn:'<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17v.5"/>', logout:'<path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/>',
  download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', upload:'<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>', eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>'
};
const ICON_CHOICES = ['pallet','tote','boxOpen','palletBoxes','cart','tower','sort','layers','shield','package','clipboard','inbox','truck','school','book','test','list','scan','users','file'];
/* Optical normalization: each pictogram scaled so its visual area matches (~18 units, max 20 of 24) and centred */
const ICON_FIT = {"pallet": "translate(12 12) scale(1.000) translate(-12.00 -12.50)", "tote": "translate(12 12) scale(1.000) translate(-12.00 -12.00)", "boxOpen": "translate(12 12) scale(0.913) translate(-12.00 -12.00)", "palletBoxes": "translate(12 12) scale(0.949) translate(-12.00 -13.00)", "cart": "translate(12 12) scale(0.936) translate(-12.00 -12.25)", "tower": "translate(12 12) scale(1.061) translate(-12.00 -12.00)", "sort": "translate(12 12) scale(1.000) translate(-12.00 -12.00)", "layers": "translate(12 12) scale(0.900) translate(-12.00 -13.00)", "shield": "translate(12 12) scale(1.061) translate(-12.00 -12.00)", "package": "translate(12 12) scale(1.000) translate(-12.00 -12.00)", "clipboard": "translate(12 12) scale(1.111) translate(-12.00 -12.00)", "inbox": "translate(12 12) scale(1.061) translate(-12.00 -13.00)", "truck": "translate(12 12) scale(1.000) translate(-12.00 -13.00)", "school": "translate(12 12) scale(1.000) translate(-12.00 -10.75)", "book": "translate(12 12) scale(1.091) translate(-12.00 -12.50)", "test": "translate(12 12) scale(1.111) translate(-12.00 -12.00)", "list": "translate(12 12) scale(1.111) translate(-12.00 -12.25)", "scan": "translate(12 12) scale(1.061) translate(-12.00 -12.00)", "users": "translate(12 12) scale(1.048) translate(-12.01 -12.25)", "file": "translate(12 12) scale(1.111) translate(-12.50 -12.00)"};
const ico = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_FIT[n] ? `<g transform="${ICON_FIT[n]}">${IC[n]}</g>` : (IC[n]||IC.file)}</svg>`;
const FLAG = {
  cs:'<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#d7141a"/><path d="M0 0 15 10 0 20Z" fill="#11457e"/></svg>',
  uk:'<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="10" fill="#0057b7"/><rect y="10" width="30" height="10" fill="#ffd700"/></svg>'
};

/* ===================== Texts (CZ / UA) ===================== */
const T = {
cs:{noConfig:'Aplikace není nastavená: doplňte adresu a klíč Supabase do souboru config.js.',noProfile:'Tento účet nemá v aplikaci profil. Obraťte se na administrátora.',loadFail:'Data se nepodařilo načíst.',offlineLoad:'Nejste připojeni k internetu. Připojte se a zkuste to znovu.',retry:'Zkusit znovu',camera:'Skenovat kamerou',camHint:'Namiřte kameru na čárový kód osobního čísla.',camErr:'Kameru se nepodařilo spustit. Povolte přístup ke kameře v prohlížeči, nebo číslo napište.',camAdded:'Přidáno: {m}. Můžete skenovat dalšího.',close:'Zavřít',clByOther:'Checklist pro {m} už vede jiný instruktor nebo je dokončený.',dupRecord:'Tento záznam už existuje.',noRight:'K této akci nemáte oprávnění.',testOffline:'Bez připojení nelze odeslat. Připojte se a odešlete znovu, odpovědi zůstávají vyplněné.',appName:'Školicí centrum CZDC',appShort:'Školicí centrum',chooseLang:'Vyberte jazyk',czech:'Čeština',ukr:'Українська',login:'Přihlášení',loginName:'Přihlašovací jméno',password:'Heslo',signIn:'Přihlásit',badLogin:'Nesprávné jméno nebo heslo.',inactive:'Účet je deaktivovaný. Obraťte se na svého školitele.',logout:'Odhlásit',
processes:'Procesy',myTrainees:'Moji nováčci',overview:'Přehledy',users:'Uživatelé',instructors:'Instruktoři',audit:'Historie změn',settings:'Nastavení',back:'Zpět',
r_admin:'Administrátor',r_skolitel:'Školitel',r_instruktor:'Instruktor',
ty_skoleni:'Školení nováčků',ty_pdf:'Školicí materiály',ty_test:'Test',ty_checklist:'Checklist',
scanTitle:'Naskenujte osobní číslo z MDT',scanPh:'Naskenujte nebo napište, např. 990123',add:'Přidat',photo:'Vyfotit kód',reading:'Čtu kód z fotky…',
notMdt:'„{v}“ není osobní číslo. Očekávaný tvar: 990 a tři číslice.',dup:'Číslo {m} už v seznamu je.',noCode:'Na fotce se kód nepodařilo přečíst. Vyfoťte ho zblízka a ostře, nebo číslo napište.',
scanned:'Naskenovaní nováčci',remove:'Odebrat',continue:'Pokračovat',emptyList:'Zatím nikdo. Naskenujte první osobní číslo.',trainingSaved:'Zaškolení zapsáno pro {n} nováčků.',
noPdf:'Pro tuto část zatím není nahrané PDF. Nahraje ho školitel nebo administrátor.',noPdfUk:'Ukrajinská verze zatím není k dispozici, zobrazuji českou.',openPdf:'Otevřít PDF v novém okně',loadingPdf:'Načítám dokument…',pdfFail:'Dokument se nepodařilo zobrazit v aplikaci. Otevřete ho v novém okně.',
testAlready:'Test pro {m} už byl vyplněn {d}. Test lze vyplnit jen jednou.',noTraining:'Nováček {m} nemá v tomto procesu záznam o školení.',continueAnyway:'Přesto pokračovat',cancel:'Zrušit',
handTablet:'Předejte tablet nováčkovi',testFor:'Test pro osobní číslo',submitTest:'Odeslat test',answerAll:'Odpovězte prosím na všechny otázky. Zbývá: {n}.',
passed:'Prošel',failed:'Neprošel',score:'Úspěšnost {p} %',backToInstr:'Vrátit tablet instruktorovi',wrongTitle:'Co bylo špatně',correctAns:'Správně',theirAns:'Odpověď',none:'bez odpovědi',
confirmRetrain:'Potvrzuji, že jsem chybné body s nováčkem znovu prošel',note:'Poznámka (nepovinná)',retrainedOk:'Přeškolení zapsáno.',
yes:'Ano',no:'Ne',critical:'Kritická',finish:'Dokončit checklist',finishQ:'Po dokončení už checklist nepůjde změnit.',finishNow:'Ano, dokončit',clDone:'Dokončeno',clOpen:'Rozpracováno {a}/{b}',saved:'Uloženo',
offline:'Jste offline. Odpovědi se uloží, jakmile se připojení obnoví.',selectTrainee:'Vyberte nováčka nahoře, nebo naskenujte dalšího.',openLists:'Rozpracované checklisty',noQuestions:'Tento formulář zatím nemá žádné otázky.',
st_none:'Nezahájeno',st_progress:'Rozpracováno',st_done:'Proškolen',st_done2:'Proškolen po doškolení',st_failed:'Čeká na přeškolení',
mdt:'Osobní číslo',process:'Proces',date:'Datum',instructor:'Instruktor',trainer:'Školitel',result:'Výsledek',action:'Akce',retrain:'Přeškolit',detail:'Detail',
noTrainees:'Zatím jste nikoho neškolil. Začněte v procesu dlaždicí Školení nováčků.',
sinceDate:'Od',untilDate:'Do',all:'Vše',exportCsv:'Export do Excelu (CSV)',kDone:'Proškoleno napoprvé',kDone2:'Proškoleno po doškolení',kFailed:'Čeká na přeškolení',kProgress:'Rozpracováno',
byInstructor:'Podle instruktorů',byTrainer:'Podle školitelů',trainees:'Nováčků',testsN:'Testů',passRate:'Úspěšnost napoprvé',retrainedN:'Přeškoleno',topWrong:'Nejčastěji chybné otázky',noData:'Pro zvolený filtr nejsou žádná data.',
person:'Nováček',records:'Záznamy',training:'Školení',del:'Smazat',reallyDel:'Opravdu smazat',deleted:'Záznam smazán.',
newUser:'Nový uživatel',name:'Jméno a příjmení',role:'Role',assignTrainer:'Přiřazený školitel',create:'Vytvořit',loginTaken:'Toto přihlašovací jméno už existuje.',fillAll:'Vyplňte jméno, přihlašovací jméno a heslo (aspoň 6 znaků).',
active:'Aktivní',deactivated:'Deaktivovaný',deactivate:'Deaktivovat',activate:'Aktivovat',resetPw:'Nové heslo',setPw:'Nastavit',pwSet:'Heslo změněno.',userCreated:'Uživatel vytvořen.',
edit:'Upravit',editContent:'Upravit obsah',save:'Uložit',savedOk:'Uloženo.',tileName:'Název dlaždice',tileType:'Typ dlaždice',icon:'Ikona',pdfCs:'PDF česky',pdfUk:'PDF ukrajinsky',uploadPdf:'Nahrát PDF',replacePdf:'Nahradit PDF',removePdf:'Odebrat PDF',show:'Zobrazit',uploading:'Nahrávám…',uploadFail:'Nahrání se nezdařilo: {e}',onlyPdf:'Vyberte soubor PDF.',
threshold:'Hranice úspěšnosti (%)',questions:'Otázky',addQ:'Přidat otázku',qType:'Typ otázky',q_single:'Jedna správná odpověď',q_multi:'Více správných odpovědí',q_yesno:'Ano / Ne',q_note:'Poznámka (nehodnotí se)',
qTextCs:'Text otázky (CZ)',qTextUk:'Text otázky (UA)',optCs:'Možnost (CZ)',optUk:'Možnost (UA)',addOpt:'Přidat možnost',correct:'Správná',correctIs:'Správná odpověď',missingUk:'Chybí ukrajinský překlad',
addTile:'Přidat dlaždici',delTile:'Smazat dlaždici',addProc:'Přidat proces',procName:'Název procesu',editProcs:'Upravit procesy',delProc:'Smazat proces',
mdtPattern:'Formát osobního čísla (regulární výraz)',setupTitle:'První spuštění',setupText:'V aplikaci zatím není žádný uživatel. Vytvořte účet administrátora.',
proto:'Prototyp: přihlášení je jen ukázkové, nepoužívejte skutečná osobní čísla ani hesla.',noDb:'Aplikace se nepřipojila k datům. Otevřete ji přihlášení na claude.ai a zkuste stránku znovu načíst.',loadingData:'Načítám data…',
noAccess:'K této části nemáte přístup.',auditEmpty:'Zatím žádné změny.',who:'Kdo',what:'Co',
retrainTitle:'Přeškolení',firstTry:'Napoprvé',perTile:'Část',status:'Stav',answers:'Odpovědi',noRecs:'Žádné záznamy.',testDone:'Test odeslán.',
ifinNote:'Ukázková data',docs:'Dokumenty',docsCount:'{n} dokumentů',uploadMany:'Nahrát PDF',uploadManyHint:'Vyberte jeden nebo více souborů najednou. Název dokumentu se vezme z názvu souboru a jde upravit.',docLang:'Jazyk',langAll:'Všechny jazyky',langCs:'Čeština',langUk:'Ukrajinština',newLang:'Jazyk nahrávaných souborů',noDocs:'Zatím tu nejsou žádné dokumenty. Nahraje je školitel nebo administrátor.',noDocsUk:'Ukrajinské dokumenty zatím nejsou, zobrazuji české.',uploadingN:'Nahrávám {a} z {b}…',uploadedN:'Nahráno: {n}. Nezapomeňte uložit.',docName:'Název dokumentu',openNew:'Otevřít v novém okně',recorded:'Zapsáno',checklistFor:'Checklist pro',nextGroup:'Školit další skupinu',ds_skoleni:'Naskenujte nováčky a projděte materiál',ds_pdf:'Dokumenty k procesu',ds_test:'Vyplňuje nováček, jen jeden pokus',ds_checklist:'Vyplňuje instruktor u pracoviště',defIcon:'Podle typu',points:'{a} z {b} bodů',defaultTiles:'Nový proces dostane dlaždice Školení nováčků, Školicí materiály, Test a Checklist.'},
uk:{noConfig:'Застосунок не налаштовано: вкажіть адресу та ключ Supabase у файлі config.js.',noProfile:'Цей обліковий запис не має профілю в застосунку. Зверніться до адміністратора.',loadFail:'Не вдалося завантажити дані.',offlineLoad:'Немає підключення до інтернету. Підключіться та спробуйте ще раз.',retry:'Спробувати ще раз',camera:'Сканувати камерою',camHint:'Наведіть камеру на штрихкод особового номера.',camErr:'Не вдалося запустити камеру. Дозвольте доступ до камери в браузері або введіть номер.',camAdded:'Додано: {m}. Можна сканувати наступного.',close:'Закрити',clByOther:'Чек-лист для {m} вже веде інший інструктор або його завершено.',dupRecord:'Такий запис вже існує.',noRight:'У вас немає дозволу на цю дію.',testOffline:'Без підключення надіслати неможливо. Підключіться та надішліть знову, відповіді залишаються заповненими.',appName:'Навчальний центр CZDC',appShort:'Навчальний центр',chooseLang:'Оберіть мову',czech:'Čeština',ukr:'Українська',login:'Вхід',loginName:'Логін',password:'Пароль',signIn:'Увійти',badLogin:'Неправильний логін або пароль.',inactive:'Обліковий запис деактивовано. Зверніться до свого керівника навчання.',logout:'Вийти',
processes:'Процеси',myTrainees:'Мої новачки',overview:'Огляди',users:'Користувачі',instructors:'Інструктори',audit:'Історія змін',settings:'Налаштування',back:'Назад',
r_admin:'Адміністратор',r_skolitel:'Керівник навчання',r_instruktor:'Інструктор',
ty_skoleni:'Навчання новачків',ty_pdf:'Навчальні матеріали',ty_test:'Тест',ty_checklist:'Чек-лист',
scanTitle:'Відскануйте особовий номер з MDT',scanPh:'Відскануйте або введіть, напр. 990123',add:'Додати',photo:'Сфотографувати код',reading:'Зчитую код з фото…',
notMdt:'«{v}» не є особовим номером. Очікуваний формат: 990 і три цифри.',dup:'Номер {m} вже є у списку.',noCode:'Не вдалося прочитати код на фото. Сфотографуйте його ближче й чіткіше або введіть номер.',
scanned:'Відскановані новачки',remove:'Видалити',continue:'Продовжити',emptyList:'Поки нікого. Відскануйте перший особовий номер.',trainingSaved:'Навчання записано для новачків: {n}.',
noPdf:'Для цього розділу ще не завантажено PDF. Його завантажить керівник навчання або адміністратор.',noPdfUk:'Української версії поки немає, показую чеську.',openPdf:'Відкрити PDF у новому вікні',loadingPdf:'Завантажую документ…',pdfFail:'Не вдалося показати документ у застосунку. Відкрийте його в новому вікні.',
testAlready:'Тест для {m} вже заповнено {d}. Тест можна пройти лише один раз.',noTraining:'Новачок {m} не має в цьому процесі запису про навчання.',continueAnyway:'Все одно продовжити',cancel:'Скасувати',
handTablet:'Передайте планшет новачку',testFor:'Тест для особового номера',submitTest:'Надіслати тест',answerAll:'Будь ласка, дайте відповідь на всі питання. Залишилось: {n}.',
passed:'Склав',failed:'Не склав',score:'Результат {p} %',backToInstr:'Повернути планшет інструктору',wrongTitle:'Що було неправильно',correctAns:'Правильно',theirAns:'Відповідь',none:'без відповіді',
confirmRetrain:'Підтверджую, що повторно пройшов(-ла) з новачком усі помилкові пункти',note:'Примітка (необов’язково)',retrainedOk:'Перенавчання записано.',
yes:'Так',no:'Ні',critical:'Критичне',finish:'Завершити чек-лист',finishQ:'Після завершення чек-лист змінити не можна.',finishNow:'Так, завершити',clDone:'Завершено',clOpen:'У процесі {a}/{b}',saved:'Збережено',
offline:'Ви офлайн. Відповіді збережуться, щойно з’єднання відновиться.',selectTrainee:'Оберіть новачка вгорі або відскануйте наступного.',openLists:'Незавершені чек-листи',noQuestions:'У цій формі поки немає питань.',
st_none:'Не розпочато',st_progress:'У процесі',st_done:'Пройшов навчання',st_done2:'Пройшов після донавчання',st_failed:'Очікує перенавчання',
mdt:'Особовий номер',process:'Процес',date:'Дата',instructor:'Інструктор',trainer:'Керівник навчання',result:'Результат',action:'Дія',retrain:'Перенавчити',detail:'Деталі',
noTrainees:'Ви ще нікого не навчали. Почніть у процесі з розділу «Навчання новачків».',
sinceDate:'Від',untilDate:'До',all:'Усі',exportCsv:'Експорт в Excel (CSV)',kDone:'Пройшли з першого разу',kDone2:'Пройшли після донавчання',kFailed:'Очікують перенавчання',kProgress:'У процесі',
byInstructor:'За інструкторами',byTrainer:'За керівниками навчання',trainees:'Новачків',testsN:'Тестів',passRate:'Успішність з першого разу',retrainedN:'Перенавчено',topWrong:'Найчастіші помилки',noData:'Для вибраного фільтра немає даних.',
person:'Новачок',records:'Записи',training:'Навчання',del:'Видалити',reallyDel:'Точно видалити',deleted:'Запис видалено.',
newUser:'Новий користувач',name:'Ім’я та прізвище',role:'Роль',assignTrainer:'Призначений керівник навчання',create:'Створити',loginTaken:'Такий логін вже існує.',fillAll:'Заповніть ім’я, логін і пароль (щонайменше 6 символів).',
active:'Активний',deactivated:'Деактивований',deactivate:'Деактивувати',activate:'Активувати',resetPw:'Новий пароль',setPw:'Встановити',pwSet:'Пароль змінено.',userCreated:'Користувача створено.',
edit:'Редагувати',editContent:'Редагувати вміст',save:'Зберегти',savedOk:'Збережено.',tileName:'Назва розділу',tileType:'Тип розділу',icon:'Іконка',pdfCs:'PDF чеською',pdfUk:'PDF українською',uploadPdf:'Завантажити PDF',replacePdf:'Замінити PDF',removePdf:'Прибрати PDF',show:'Показати',uploading:'Завантажую…',uploadFail:'Не вдалося завантажити: {e}',onlyPdf:'Оберіть файл PDF.',
threshold:'Поріг успішності (%)',questions:'Питання',addQ:'Додати питання',qType:'Тип питання',q_single:'Одна правильна відповідь',q_multi:'Кілька правильних відповідей',q_yesno:'Так / Ні',q_note:'Примітка (не оцінюється)',
qTextCs:'Текст питання (CZ)',qTextUk:'Текст питання (UA)',optCs:'Варіант (CZ)',optUk:'Варіант (UA)',addOpt:'Додати варіант',correct:'Правильний',correctIs:'Правильна відповідь',missingUk:'Бракує українського перекладу',
addTile:'Додати розділ',delTile:'Видалити розділ',addProc:'Додати процес',procName:'Назва процесу',editProcs:'Редагувати процеси',delProc:'Видалити процес',
mdtPattern:'Формат особового номера (регулярний вираз)',setupTitle:'Перший запуск',setupText:'У застосунку ще немає жодного користувача. Створіть обліковий запис адміністратора.',
proto:'Прототип: вхід лише демонстраційний, не використовуйте справжні особові номери чи паролі.',noDb:'Застосунок не підключився до даних. Увійдіть на claude.ai і перезавантажте сторінку.',loadingData:'Завантажую дані…',
noAccess:'У вас немає доступу до цього розділу.',auditEmpty:'Поки жодних змін.',who:'Хто',what:'Що',
retrainTitle:'Перенавчання',firstTry:'З першого разу',perTile:'Розділ',status:'Стан',answers:'Відповіді',noRecs:'Немає записів.',testDone:'Тест надіслано.',
ifinNote:'Демонстраційні дані',docs:'Документи',docsCount:'{n} документів',uploadMany:'Завантажити PDF',uploadManyHint:'Оберіть один або кілька файлів одночасно. Назва документа береться з назви файлу і її можна змінити.',docLang:'Мова',langAll:'Усі мови',langCs:'Чеська',langUk:'Українська',newLang:'Мова завантажених файлів',noDocs:'Тут поки немає документів. Їх завантажить керівник навчання або адміністратор.',noDocsUk:'Українських документів поки немає, показую чеські.',uploadingN:'Завантажую {a} з {b}…',uploadedN:'Завантажено: {n}. Не забудьте зберегти.',docName:'Назва документа',openNew:'Відкрити в новому вікні',recorded:'Записано',checklistFor:'Чек-лист для',nextGroup:'Навчати наступну групу',ds_skoleni:'Відскануйте новачків і пройдіть матеріал',ds_pdf:'Документи до процесу',ds_test:'Заповнює новачок, лише одна спроба',ds_checklist:'Заповнює інструктор на робочому місці',defIcon:'За типом',points:'{a} з {b} балів',defaultTiles:'Новий процес отримає розділи: Навчання новачків, Навчальні матеріали, Тест і Чек-лист.'}
};

/* ===================== State ===================== */
const CFG = window.SKOLENI_CONFIG || {};
const COLS = ['users','processes','tiles','trainings','tests','checklists','audit','settings'];
const S = {
  lang: null, uid: null, view: 'lang', p: {}, sb: null, dbState: 'auth', dbErr: '',
  data: Object.fromEntries(COLS.map(c => [c, []])),
  tr: null, test: null, cl: null, edit: null, del: null, flt: {from:'', to:'', instr:'', proc:''},
  pendingWrites: [], online: navigator.onLine
};
try { S.lang = localStorage.getItem('skoleni.lang') || null; } catch(e) {}
function persist(){ try { if (S.lang) localStorage.setItem('skoleni.lang', S.lang); } catch(e) {} }

const $app = document.getElementById('app'), $bar = document.getElementById('bar');
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t = (k, v={}) => { let s = (T[S.lang||'cs'][k] ?? T.cs[k] ?? k); for (const [a,b] of Object.entries(v)) s = s.replaceAll('{'+a+'}', b); return s; };
const L = (o) => !o ? '' : typeof o === 'string' ? o : (o[S.lang] || o.cs || '');
const rid = () => (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36));
const now = () => new Date().toISOString();
const fmtD = (iso) => iso ? new Date(iso).toLocaleString(S.lang==='uk'?'uk-UA':'cs-CZ', {day:'numeric', month:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit'}) : '';
const fmtDay = (iso) => iso ? new Date(iso).toLocaleDateString(S.lang==='uk'?'uk-UA':'cs-CZ') : '';

const D = () => S.data;
const me = () => D().users.find(u => u.id === S.uid) || null;
const role = () => me()?.role;
const userName = (id) => D().users.find(u => u.id === id)?.name || '—';
const settings = () => D().settings.find(s => s.id === 'main') || {};
const procs = () => [...D().processes].sort((a,b) => (a.order??0)-(b.order??0));
const tilesOf = (pid) => D().tiles.filter(x => x.processId === pid).sort((a,b) => (a.order??0)-(b.order??0));
const proc = (id) => D().processes.find(p => p.id === id);
const tile = (id) => D().tiles.find(x => x.id === id);

let toastTimer;
function toast(msg){ const el = document.getElementById('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => el.hidden = true, 3600); }

/* ===================== Data layer (Supabase) ===================== */
const TABLE = {users: 'profiles'};
const REC = ['trainings','tests','checklists'];
const INSERT_ONLY = ['trainings','tests','checklists','audit'];
const tb = (c) => S.sb.from(TABLE[c] || c);
function fromRow(c, r){
  if (c === 'users') return {id: r.id, name: r.name, login: r.login, role: r.role, active: r.active, skolitelId: r.skolitel_id || ''};
  if (c === 'audit') return {...(r.data || {}), id: r.id, at: r.at, by: r.by};
  const o = {...(r.data || {}), id: r.id};
  if (c === 'tiles') o.processId = r.process_id;
  if (REC.includes(c)) Object.assign(o, {mdt: r.mdt, tileId: r.tile_id, processId: r.process_id, instruktorId: r.instruktor_id, skolitelId: r.skolitel_id});
  return o;
}
function toRow(c, id, doc){
  const d = {...doc}; delete d.id; const row = {id};
  if (c === 'tiles') { if (d.processId !== undefined) row.process_id = d.processId; delete d.processId; }
  if (REC.includes(c)) {
    for (const [k, cname] of [['mdt','mdt'],['tileId','tile_id'],['processId','process_id']]) { if (d[k] !== undefined) row[cname] = d[k]; delete d[k]; }
    delete d.instruktorId; delete d.skolitelId;
  }
  if (c === 'audit') { delete d.at; delete d.by; delete d.byName; delete d.role; }
  row.data = d; return row;
}
function cacheRow(c, row){ const o = fromRow(c, row), a = S.data[c], i = a.findIndex(x => x.id === o.id); if (i >= 0) a[i] = o; else a.push(o); return o; }
const col = (c) => ({ doc: (id) => ({
  async set(doc){ const row = toRow(c, id, doc); const q = INSERT_ONLY.includes(c) ? tb(c).insert(row) : tb(c).upsert(row);
    const {data, error} = await q.select().single(); if (error) throw error; return cacheRow(c, data); },
  async update(part){ const cur = D()[c].find(x => x.id === id) || {}; const {id: _i, ...rest} = toRow(c, id, {...cur, ...part});
    const {data, error} = await tb(c).update(rest).eq('id', id).select().single(); if (error) throw error; return cacheRow(c, data); },
  async delete(){ const {error} = await tb(c).delete().eq('id', id); if (error) throw error; S.data[c] = S.data[c].filter(x => x.id !== id); }
}) });
const isNetErr = (e) => !navigator.onLine || /fetch|network|Load failed/i.test(e?.message || '');
async function write(fn, label){
  try { await fn(); return true; }
  catch(e){
    if (isNetErr(e)) { S.pendingWrites.push(fn); S.online = false; renderBar(); return true; }
    toast((label ? label + ': ' : '') + errText(e)); return false;
  }
}
function errText(e){ const m = e?.message || e?.code || String(e); if (e?.code === '23505') return t('dupRecord'); if (/row-level security|permission denied/i.test(m)) return t('noRight'); return m; }
async function flush(){ const q = S.pendingWrites.splice(0); for (const fn of q) { try { await fn(); } catch(e) { S.pendingWrites.push(fn); } } S.online = navigator.onLine && !S.pendingWrites.length; renderBar(); }
addEventListener('online', () => { S.online = true; flush(); });
addEventListener('offline', () => { S.online = false; renderBar(); });
setInterval(() => { if (S.pendingWrites.length && navigator.onLine) flush(); }, 15000);
function audit(action, detail){ return write(() => col('audit').doc(rid()).set({action, detail: detail || ''})); }

async function loadTable(c){
  let q = tb(c).select('*');
  q = c === 'audit' ? q.order('at', {ascending: false}).limit(300) : q.limit(10000);
  const {data, error} = await q; if (error) throw error;
  S.data[c] = data.map(r => fromRow(c, r));
}
const refetchT = {};
function refetch(c){ clearTimeout(refetchT[c]); refetchT[c] = setTimeout(async () => { try { await loadTable(c); scheduleRender(); } catch(e) {} }, 300); }
async function loadAll(){
  S.dbState = 'loading'; render();
  try { await Promise.all(COLS.map(loadTable)); S.dbState = 'ready'; }
  catch(e){ S.dbState = isNetErr(e) ? 'offline' : 'none'; S.dbErr = errText(e); }
  render();
}
function subscribe(){
  S.chan?.unsubscribe();
  S.chan = S.sb.channel('skoleni-db');
  for (const c of COLS) S.chan.on('postgres_changes', {event: '*', schema: 'public', table: TABLE[c] || c}, () => refetch(c));
  S.chan.subscribe();
}
async function afterLogin(uid){ S.uid = uid; await loadAll(); subscribe(); }
async function signOut(){ S.chan?.unsubscribe(); S.chan = null; await S.sb.auth.signOut().catch(() => {}); S.uid = null; S.tr = S.test = S.cl = S.edit = null; S.data = Object.fromEntries(COLS.map(c => [c, []])); S.dbState = 'auth'; S.view = 'home'; render(); }
async function initApp(){
  if (!CFG.SUPABASE_URL || !CFG.SUPABASE_ANON_KEY || /VAS-PROJEKT|VLOZTE/.test(CFG.SUPABASE_URL + CFG.SUPABASE_ANON_KEY) || !window.supabase) { S.dbState = 'config'; render(); return; }
  S.sb = supabase.createClient(CFG.SUPABASE_URL, CFG.SUPABASE_ANON_KEY, {auth: {persistSession: true, autoRefreshToken: true}});
  const {data: {session}} = await S.sb.auth.getSession();
  if (session) await afterLogin(session.user.id); else { S.dbState = 'auth'; render(); }
  S.sb.auth.onAuthStateChange((ev) => { if (ev === 'SIGNED_OUT' && S.uid) { S.uid = null; S.dbState = 'auth'; render(); } });
}
async function adminUsers(body){
  const {data, error} = await S.sb.functions.invoke('admin-users', {body});
  if (error) { let msg = error.message; try { const j = await error.context.json(); msg = j.error || msg; } catch(e) {} throw new Error(msg); }
  if (data?.error) throw new Error(data.error);
  await loadTable('users').catch(() => {}); refetch('audit');
  return data;
}
async function mdtStatus(m, tileId){
  try { const {data, error} = await S.sb.rpc('mdt_status', {p_mdt: m, p_tile: tileId}); if (!error && data) return data; } catch(e) {}
  const x = tile(tileId), tr = testRec(tileId, m), cr = clRec(tileId, m);
  return {testAt: tr?.at || null, clDone: cr?.status === 'done', trained: D().trainings.some(r => r.mdt === m && r.processId === x?.processId)};
}

/* Re-render without destroying text the user is typing */
let pending = false;
function scheduleRender(){
  const a = document.activeElement;
  if (a && $app.contains(a) && (a.tagName === 'TEXTAREA' || (a.tagName === 'INPUT' && !['checkbox','radio','file'].includes(a.type)) || a.tagName === 'SELECT')) { pending = true; return; }
  render();
}
document.addEventListener('focusout', () => setTimeout(() => { if (pending) { pending = false; render(); } }, 0));

/* ===================== Status logic ===================== */
function evalForm(questions, answers){
  let total = 0, ok = 0, critFail = false; const wrong = [];
  for (const q of questions) {
    if (q.type === 'note') continue;
    total++;
    const a = answers?.[q.id]; let good = false;
    if (q.type === 'single') good = !!q.options.find(o => o.id === a && o.correct);
    else if (q.type === 'multi') { const c = q.options.filter(o => o.correct).map(o => o.id).sort().join(','); good = Array.isArray(a) && [...a].sort().join(',') === c; }
    else if (q.type === 'yesno') good = (a === 'yes') === !!q.correctYes && (a === 'yes' || a === 'no');
    if (good) ok++; else { wrong.push(q.id); if (q.critical) critFail = true; }
  }
  return {total, ok, pct: total ? Math.round(ok/total*100) : 100, wrong, critFail};
}
function recState(r){ if (!r) return 'none'; if (r.status === 'open') return 'progress'; if (r.passed) return 'passed'; return r.retrained ? 'retrained' : 'failed'; }
const testRec = (tileId, mdt) => D().tests.find(x => x.id === tileId + '__' + mdt);
const clRec = (tileId, mdt) => D().checklists.find(x => x.id === tileId + '__' + mdt);
function statusOf(mdt, pid){
  const tr = D().trainings.some(x => x.mdt === mdt && x.processId === pid);
  const parts = tilesOf(pid).filter(x => x.type === 'test' || x.type === 'checklist').map(x => recState(x.type === 'test' ? testRec(x.id, mdt) : clRec(x.id, mdt)));
  if (parts.includes('failed')) return 'failed';
  if (tr && parts.length && parts.every(s => s === 'passed' || s === 'retrained')) return parts.includes('retrained') ? 'done2' : 'done';
  if (tr || parts.some(s => s !== 'none')) return 'progress';
  return 'none';
}
const pill = (st) => `<span class="pill p-${st}">${t('st_'+st)}</span>`;
function scopeOk(r){ const u = me(); if (!u) return false; if (u.role === 'admin') return true; if (u.role === 'skolitel') return r.skolitelId === u.id || r.instruktorId === u.id; return r.instruktorId === u.id; }
function canDelete(r){ const u = me(); return u && (u.role === 'admin' || (u.role === 'skolitel' && r.skolitelId === u.id)); }

/* ===================== Navigation ===================== */
function go(view, p={}){ S.view = view; S.p = p; S.del = null; render(); scrollTo(0,0); }
const isMgr = () => ['admin','skolitel'].includes(role());

/* ===================== Render: bar ===================== */
function renderBar(){
  const u = me();
  if (!u || !S.lang) { $bar.innerHTML = ''; return; }
  const items = [['home', t('processes')]];
  if (u.role === 'instruktor') items.push(['mine', t('myTrainees')]);
  if (isMgr()) items.push(['overview', t('overview')], ['users', u.role === 'admin' ? t('users') : t('instructors')], ['audit', t('audit')]);
  if (u.role === 'admin') items.push(['settings', t('settings')]);
  const cur = {proc:'home', tile:'home', tileEdit:'home', procEdit:'home', person:'overview', retrain: u.role==='instruktor'?'mine':'overview'}[S.view] || S.view;
  $bar.innerHTML = `<header class="bar"><div class="bar-in">
    <button class="brand" data-act="nav" data-v="home"><span class="mark">${ico('school')}</span>${esc(t('appShort'))}<small>CZDC</small></button>
    <nav class="nav" aria-label="Menu">${items.map(([v,l]) => `<button data-act="nav" data-v="${v}" ${cur===v?'aria-current="page"':''}>${esc(l)}</button>`).join('')}</nav>
    <div class="who">
      <button class="flagbtn" data-act="lang" data-l="cs" aria-pressed="${S.lang==='cs'}" title="Čeština"><span style="width:30px;height:20px;display:block">${FLAG.cs}</span></button>
      <button class="flagbtn" data-act="lang" data-l="uk" aria-pressed="${S.lang==='uk'}" title="Українська"><span style="width:30px;height:20px;display:block">${FLAG.uk}</span></button>
      <span class="name" title="${esc(t('r_'+u.role))}">${esc(u.name)}</span>
      <button class="btn small ghost" data-act="logout" aria-label="${esc(t('logout'))}" title="${esc(t('logout'))}">${ico('logout')}</button>
    </div></div>
  </header>${!S.online || S.pendingWrites.length ? `<div class="bar offline" style="position:static"><div class="bar-in" style="min-height:0"><div class="msg warn" style="width:100%">${ico('warn')}<span class="grow">${esc(t('offline'))}</span></div></div></div>` : ''}`;
}
function brandBar(){ $bar.innerHTML = `<header class="bar"><div class="bar-in"><span class="brand" style="cursor:default"><span class="mark">${ico('school')}</span>${esc(t('appShort'))}<small>CZDC</small></span></div></header>`; }

/* ===================== Render: main ===================== */
function render(){
  renderBar();
  if (!S.lang) return vLang();
  if (S.dbState === 'config') { brandBar(); $app.innerHTML = `<div class="msg bad">${ico('warn')}<span class="grow">${esc(t('noConfig'))}</span></div>`; return; }
  if (S.dbState === 'auth') return vLogin();
  if (S.dbState === 'loading') { $app.innerHTML = `<div class="empty">${esc(t('loadingData'))}</div>`; return; }
  if (S.dbState === 'none' || S.dbState === 'offline') { $app.innerHTML = `<div class="msg bad">${ico('warn')}<span class="grow">${esc(t(S.dbState === 'offline' ? 'offlineLoad' : 'loadFail'))} ${esc(S.dbErr)}</span><button class="btn small" data-act="reload">${esc(t('retry'))}</button><button class="btn small" data-act="logout">${esc(t('logout'))}</button></div>`; return; }
  const u = me();
  if (!u || !u.active) { brandBar(); $app.innerHTML = `<section class="panel login"><div class="msg bad">${ico('warn')}<span class="grow">${esc(t(u ? 'inactive' : 'noProfile'))}</span></div><button class="btn" data-act="logout">${esc(t('logout'))}</button></section>`; return; }
  const V = {home:vHome, proc:vProc, tile:vTile, mine:vMine, overview:vOverview, person:vPerson, users:vUsers, audit:vAudit, settings:vSettings, tileEdit:vTileEdit, procEdit:vProcEdit, retrain:vRetrain};
  (V[S.view] || vHome)();
}

function vLang(){
  brandBar();
  $app.innerHTML = `<section class="lang"><div class="lang-in">
    <h1>Vyberte jazyk · Оберіть мову</h1>
    <div class="lang-choices">
      <button class="langbtn" data-act="lang" data-l="cs">${FLAG.cs}<span>Čeština</span></button>
      <button class="langbtn" data-act="lang" data-l="uk">${FLAG.uk}<span>Українська</span></button>
    </div></div></section>`;
}

function vLogin(){
  brandBar();
  $app.innerHTML = `<section class="panel login">
    <div class="spread"><h1>${esc(t('login'))}</h1>
      <div class="row"><button class="flagbtn" data-act="lang" data-l="cs" aria-pressed="${S.lang==='cs'}"><span style="width:36px;height:24px;display:block">${FLAG.cs}</span></button>
      <button class="flagbtn" data-act="lang" data-l="uk" aria-pressed="${S.lang==='uk'}"><span style="width:36px;height:24px;display:block">${FLAG.uk}</span></button></div></div>
    <form id="fLogin" style="display:grid;gap:14px">
      <label class="f">${esc(t('loginName'))}<input type="text" id="li_login" autocomplete="username" autocapitalize="none" required></label>
      <label class="f">${esc(t('password'))}<input type="password" id="li_pw" autocomplete="current-password" required></label>
      <div id="li_err" role="alert"></div>
      <button class="btn primary big">${esc(t('signIn'))}</button>
    </form></section>`;
  setTimeout(() => document.getElementById('li_login')?.focus(), 50);
}

/* ---------- Home: processes ---------- */
function vHome(){
  const ps = procs(), admin = role() === 'admin';
  $app.innerHTML = `<div class="spread"><h1>${esc(t('processes'))}</h1>
    ${admin ? `<button class="btn" data-act="nav" data-v="procEdit">${ico('pencil')}${esc(t('editProcs'))}</button>` : ''}</div>
    ${ps.length ? `<div class="tiles">${ps.map(p => `<button class="tile" data-act="openProc" data-id="${p.id}">
      <span class="t">${esc(L(p.name))}</span><span class="ic">${ico(p.icon)}</span>
      <span class="s"><span class="go">${ico('next')}</span></span></button>`).join('')}</div>`
    : `<div class="empty">${admin ? esc(t('addProc')) : '—'}</div>`}`;
}

/* ---------- Process: sub tiles ---------- */
const TYPE_ICON = {skoleni:'school', pdf:'book', test:'test', checklist:'list'};
function vProc(){
  const p = proc(S.p.id); if (!p) return go('home');
  const ts = tilesOf(p.id), mgr = isMgr(), admin = role() === 'admin';
  $app.innerHTML = `<div class="crumbs"><button data-act="nav" data-v="home">${esc(t('processes'))}</button><span>/</span><span>${esc(L(p.name))}</span></div>
  <div class="spread"><h1>${esc(L(p.name))}</h1>${admin ? `<button class="btn" data-act="addTile" data-id="${p.id}">${ico('plus')}${esc(t('addTile'))}</button>` : ''}</div>
  ${ts.length ? `<div class="steps">${ts.map((x,i) => `<div class="step">
    <button class="main" data-act="openTile" data-id="${x.id}"><span class="ic">${ico(x.icon || TYPE_ICON[x.type])}</span>
      <span><span class="t">${esc(L(x.name))}</span><span class="s">${esc(t('ds_'+x.type))}</span></span><span class="chev">${ico('next')}</span></button>
    ${mgr ? `<div class="step-tools">
      ${admin && i>0 ? `<button class="iconbtn" aria-label="Posunout dříve" title="Posunout dříve" data-act="moveTile" data-id="${x.id}" data-d="-1">${ico('up')}</button>` : ''}
      ${admin && i<ts.length-1 ? `<button class="iconbtn" aria-label="Posunout později" title="Posunout později" data-act="moveTile" data-id="${x.id}" data-d="1">${ico('down')}</button>` : ''}
      <button class="iconbtn" aria-label="${esc(t('editContent'))}" title="${esc(t('editContent'))}" data-act="editTile" data-id="${x.id}">${ico('pencil')}</button></div>` : ''}
  </div>`).join('')}</div>` : `<div class="empty">—</div>`}`;
}

/* ---------- Tile dispatcher ---------- */
function vTile(){
  const x = tile(S.p.id); if (!x) return go('home');
  const p = proc(x.processId);
  const head = `<div class="crumbs"><button data-act="nav" data-v="home">${esc(t('processes'))}</button><span>/</span>
    <button data-act="openProc" data-id="${p?.id}">${esc(L(p?.name))}</button><span>/</span><span>${esc(L(x.name))}</span></div>`;
  if (x.type === 'pdf') return vMaterials(x, p);
  if (x.type === 'skoleni') return vTraining(x, head);
  if (x.type === 'test') return vTest(x, head);
  if (x.type === 'checklist') return vChecklist(x, head);
}


/* ---------- Materials: several PDFs per tile ---------- */
function filesOf(x){
  if (Array.isArray(x.files)) return x.files;
  const legacy = []; // older tiles stored a single PDF per language
  if (x.pdf?.cs) legacy.push({id: 'cs', ref: x.pdf.cs, name: L(x.name), lang: 'cs'});
  if (x.pdf?.uk) legacy.push({id: 'uk', ref: x.pdf.uk, name: L(x.name), lang: 'uk'});
  return legacy;
}
function visibleFiles(x){
  const all = filesOf(x), mine = all.filter(f => !f.lang || f.lang === 'all' || f.lang === S.lang);
  if (S.lang === 'uk' && !all.some(f => f.lang === 'uk')) return {list: all.filter(f => f.lang !== 'uk'), fallback: all.some(f => f.lang === 'cs')};
  return {list: mine, fallback: false};
}
const nameFromFile = (n) => n.replace(/\.pdf$/i, '').replace(/[_]+/g, ' ').replace(/\s+/g, ' ').trim() || 'Dokument';
function vMaterials(x, p){
  const {list, fallback} = visibleFiles(x), f = S.p.file ? filesOf(x).find(z => z.id === S.p.file) : null;
  const crumbs = (last) => `<div class="crumbs"><button data-act="nav" data-v="home">${esc(t('processes'))}</button><span>/</span>
    <button data-act="openProc" data-id="${p?.id}">${esc(L(p?.name))}</button><span>/</span>${last}</div>`;
  if (f) {
    $app.innerHTML = crumbs(`<button data-act="openTile" data-id="${x.id}">${esc(L(x.name))}</button><span>/</span><span>${esc(f.name)}</span>`)
      + `<div class="spread"><h1>${esc(f.name)}</h1><button class="btn" data-act="pdfOpen" data-path="${esc(f.ref)}">${ico('eye')}${esc(t('openNew'))}</button></div>
      <div class="pdf" id="pdfView"><p class="muted">${esc(t('loadingPdf'))}</p></div>`;
    mountPdf({ref: f.ref}); return;
  }
  $app.innerHTML = crumbs(`<span>${esc(L(x.name))}</span>`) + `<div class="spread"><h1>${esc(L(x.name))}</h1>
    ${isMgr() ? `<button class="btn" data-act="editTile" data-id="${x.id}">${ico('upload')}${esc(t('uploadMany'))}</button>` : ''}</div>
    ${fallback ? `<div class="msg warn">${ico('warn')}<span class="grow">${esc(t('noDocsUk'))}</span></div>` : ''}
    ${list.length ? `<div class="docs">${list.map(d => `<button class="doc" data-act="openDoc" data-id="${x.id}" data-f="${esc(d.id)}">
        <span class="dn">${esc(d.name)}</span><span class="di">${ico('doc')}<span class="badge">PDF</span></span></button>`).join('')}</div>`
      : `<div class="empty">${ico('doc')}<p>${esc(t('noDocs'))}</p></div>`}`;
}

/* ---------- PDF ---------- */
function pdfFor(x){ const cs = x.pdf?.cs, uk = x.pdf?.uk; if (S.lang === 'uk') return uk ? {id:uk} : cs ? {id:cs, fallback:true} : null; return cs ? {id:cs} : null; }
function pdfBlock(x){
  const f = pdfFor(x);
  if (!f) return `<div class="empty">${ico('file')}<p>${esc(t('noPdf'))}</p></div>`;
  return `${f.fallback ? `<div class="msg warn">${esc(t('noPdfUk'))}</div>` : ''}
    <div class="row"><button class="btn small" data-act="pdfOpen" data-path="${esc(f.id)}">${ico('eye')}${esc(t('openPdf'))}</button></div>
    <div class="pdf" id="pdfView"><p class="muted">${esc(t('loadingPdf'))}</p></div>`;
}
let pdfLib = null;
const pdfUrl = (ref) => signedUrl(ref);
async function uploadPdfFile(file, tileId){
  const path = `${tileId}/${rid()}.pdf`;
  const {error} = await S.sb.storage.from('materials').upload(path, file, {contentType: 'application/pdf', upsert: false});
  if (error) throw error; return path;
}

async function signedUrl(path){ const {data, error} = await S.sb.storage.from('materials').createSignedUrl(path, 3600); if (error) throw error; return data.signedUrl; }
async function openPdf(path){ const w = window.open('', '_blank'); try { const u = await signedUrl(path); if (w) w.location = u; else location.href = u; } catch(e) { w?.close(); toast(errText(e)); } }
function loadScript(src){ return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
async function getPdfLib(){
  if (pdfLib) return pdfLib;
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js');
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
  pdfLib = window.pdfjsLib; return pdfLib;
}
async function mountPdf(x){
  const f = x && x.ref ? {id: x.ref} : pdfFor(x), box = document.getElementById('pdfView'); if (!f || !box) return;
  try {
    const lib = await getPdfLib();
    const url = await pdfUrl(f.id);
    const doc = await lib.getDocument({url}).promise;
    if (!document.body.contains(box)) return;
    box.innerHTML = '';
    const w = Math.min(box.clientWidth - 24, 900), dpr = Math.min(devicePixelRatio || 1, 2);
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i), v1 = page.getViewport({scale: 1}), sc = w / v1.width, vp = page.getViewport({scale: sc * dpr});
      const c = document.createElement('canvas'); c.width = vp.width; c.height = vp.height; c.style.width = (vp.width/dpr) + 'px';
      c.setAttribute('aria-label', 'Strana ' + i); box.appendChild(c);
      await page.render({canvasContext: c.getContext('2d'), viewport: vp}).promise;
    }
  } catch(e) { if (box) box.innerHTML = `<div class="msg warn">${esc(t('pdfFail'))}</div>`; }
}

/* ---------- Scanner (shared) ---------- */
function scannerHtml(id){
  return `<div class="scan"><h3>${esc(t('scanTitle'))}</h3>
    <form data-scan="${id}"><input type="text" id="scan_${id}" inputmode="numeric" autocomplete="off" placeholder="${esc(t('scanPh'))}" aria-label="${esc(t('scanTitle'))}">
      <button class="btn primary" type="submit">${ico('plus')}${esc(t('add'))}</button>
      <button class="btn" type="button" data-act="camScan" data-id="${id}">${ico('camera')}${esc(t('camera'))}</button></form>
    <div id="scanmsg_${id}" role="status"></div></div>`;
}
function scanMsg(id, kind, text, extra=''){ const el = document.getElementById('scanmsg_'+id); if (el) el.innerHTML = text ? `<div class="msg ${kind}">${ico(kind==='ok'?'check':'warn')}<span class="grow">${esc(text)}</span>${extra}</div>` : ''; }
function validMdt(v){ let re; try { re = new RegExp(settings().mdtPattern || '^990\\d{3}$'); } catch(e) { re = /^990\d{3}$/; } return re.test(v); }
/* Live camera scanning: native BarcodeDetector where available, ZXing otherwise */
const CAM = {stream: null, timer: null, reader: null, target: null, last: '', lastAt: 0};
async function camStart(target){
  CAM.target = target; const box = document.getElementById('cam'), video = document.getElementById('camVideo'), msg = document.getElementById('camMsg');
  msg.textContent = t('camHint'); box.hidden = false; document.body.style.overflow = 'hidden';
  try {
    let native = false;
    if ('BarcodeDetector' in window) { try { const f = await BarcodeDetector.getSupportedFormats(); native = f.includes('code_128') || f.includes('ean_13'); } catch(e) {} }
    if (native) {
      CAM.stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: {ideal: 'environment'}, width: {ideal: 1280}}, audio: false});
      video.srcObject = CAM.stream; await video.play();
      const det = new BarcodeDetector();
      const tick = async () => { if (!CAM.stream) return; try { const r = await det.detect(video); if (r[0]?.rawValue) camHit(r[0].rawValue); } catch(e) {} CAM.timer = setTimeout(tick, 180); };
      tick();
    } else {
      if (!window.ZXing) await loadScript('https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js');
      CAM.reader = new ZXing.BrowserMultiFormatReader();
      await CAM.reader.decodeFromConstraints({video: {facingMode: {ideal: 'environment'}}}, video, (res) => { if (res) camHit(res.getText()); });
    }
  } catch(e) { msg.textContent = t('camErr'); }
}
function camHit(raw){
  const v = String(raw).trim(), nowMs = Date.now();
  if (v === CAM.last && nowMs - CAM.lastAt < 2500) return;
  CAM.last = v; CAM.lastAt = nowMs; navigator.vibrate?.(60);
  const msg = document.getElementById('camMsg');
  if (!validMdt(v)) { msg.textContent = t('notMdt', {v}); return; }
  if (CAM.target === 'test') { camStop(); handleScan('test', v); return; }
  msg.textContent = t('camAdded', {m: v}); handleScan(CAM.target, v);
}
function camStop(){
  clearTimeout(CAM.timer); CAM.timer = null;
  try { CAM.reader?.reset(); } catch(e) {} CAM.reader = null;
  CAM.stream?.getTracks().forEach(tr => tr.stop()); CAM.stream = null;
  const box = document.getElementById('cam'); if (box) box.hidden = true; document.body.style.overflow = '';
}
const SCAN_HANDLERS = {};
async function handleScan(id, raw){
  const v = String(raw || '').trim().replace(/\s+/g, '');
  if (!v) return;
  if (!validMdt(v)) return scanMsg(id, 'bad', t('notMdt', {v}));
  SCAN_HANDLERS[id]?.(v);
}

/* ---------- Training ---------- */
function vTraining(x, head){
  if (!S.tr || S.tr.tileId !== x.id) S.tr = {tileId: x.id, list: [], step: 'scan'};
  const tr = S.tr;
  if (tr.step === 'pdf') { $app.innerHTML = head + `<div class="msg ok">${ico('check')}<span class="grow">${esc(t('trainingSaved', {n: tr.saved}))}</span><button class="btn small" data-act="trNew">${ico('plus')}${esc(t('nextGroup'))}</button></div><h1>${esc(L(x.name))}</h1>` + pdfBlock(x); mountPdf(x); return; }
  $app.innerHTML = head + `<h1>${esc(L(x.name))}</h1><section class="panel">${scannerHtml('tr')}
    <div class="sep"></div><h3>${esc(t('scanned'))} (${tr.list.length})</h3>
    ${tr.list.length ? `<div class="chips">${tr.list.map(m => `<span class="chip">${esc(m)}<button aria-label="${esc(t('remove'))} ${esc(m)}" data-act="trRemove" data-m="${esc(m)}">${ico('x')}</button></span>`).join('')}</div>` : `<p class="muted">${esc(t('emptyList'))}</p>`}
    <div class="row"><button class="btn primary big" data-act="trContinue" ${tr.list.length?'':'disabled'}>${esc(t('continue'))}</button></div></section>`;
  SCAN_HANDLERS.tr = (m) => { if (tr.list.includes(m)) return scanMsg('tr', 'warn', t('dup', {m})); tr.list.push(m); render(); setTimeout(() => document.getElementById('scan_tr')?.focus(), 30); };
  setTimeout(() => document.getElementById('scan_tr')?.focus(), 30);
}
async function trContinue(){
  const tr = S.tr, x = tile(tr.tileId), u = me(), at = now();
  for (const m of tr.list) await write(() => col('trainings').doc(rid()).set({mdt: m, processId: x.processId, tileId: x.id, at}));
  await audit('Zaškolení', `${L(proc(x.processId)?.name)}: ${tr.list.join(', ')}`);
  tr.saved = tr.list.length; tr.list = []; tr.step = 'pdf'; render();
}

/* ---------- Test ---------- */
function qBlock(q, i, ans, prefix){
  const txt = esc(L(q.text));
  let body = '';
  if (q.type === 'single' || q.type === 'multi') body = `<div class="opts">${q.options.map(o => { const on = q.type === 'single' ? ans === o.id : Array.isArray(ans) && ans.includes(o.id);
    return `<button type="button" class="opt ${q.type==='multi'?'multi':''}" aria-pressed="${on}" data-act="${prefix}Ans" data-q="${q.id}" data-o="${o.id}"><span class="box">${on?ico('check'):''}</span><span>${esc(L(o.text))}</span></button>`; }).join('')}</div>`;
  else if (q.type === 'yesno') body = `<div class="yn"><button type="button" class="opt y" aria-pressed="${ans==='yes'}" data-act="${prefix}Ans" data-q="${q.id}" data-o="yes">${esc(t('yes'))}</button><button type="button" class="opt n" aria-pressed="${ans==='no'}" data-act="${prefix}Ans" data-q="${q.id}" data-o="no">${esc(t('no'))}</button></div>`;
  else body = `<textarea data-note="${prefix}" data-q="${q.id}" aria-label="${txt}">${esc(ans || '')}</textarea>`;
  return `<div class="q"><div class="qt"><span class="num">${i+1}.</span>${txt} ${q.critical ? `<span class="tag crit">${esc(t('critical'))}</span>` : ''}</div>${body}</div>`;
}
function vTest(x, head){
  if (!S.test || S.test.tileId !== x.id) S.test = {tileId: x.id, step: 'scan', mdt: null, answers: {}};
  const st = S.test, qs = x.form?.questions || [];
  if (st.step === 'scan') {
    $app.innerHTML = head + `<h1>${esc(L(x.name))}</h1><section class="panel">${scannerHtml('test')}</section>`;
    SCAN_HANDLERS.test = async (m) => {
      const st = await mdtStatus(m, x.id);
      if (st.testAt) return scanMsg('test', 'bad', t('testAlready', {m, d: fmtD(st.testAt)}));
      if (!st.trained) return scanMsg('test', 'warn', t('noTraining', {m}), `<button class="btn small" data-act="testStart" data-m="${esc(m)}">${esc(t('continueAnyway'))}</button>`);
      startTest(m);
    };
    setTimeout(() => document.getElementById('scan_test')?.focus(), 30); return;
  }
  if (st.step === 'fill') {
    $app.innerHTML = `<section class="panel"><div class="spread"><div><p class="muted">${esc(t('testFor'))}</p><h1 class="mono">${esc(st.mdt)}</h1></div>
      <div class="row"><button class="flagbtn" data-act="lang" data-l="cs" aria-pressed="${S.lang==='cs'}"><span style="width:36px;height:24px;display:block">${FLAG.cs}</span></button>
      <button class="flagbtn" data-act="lang" data-l="uk" aria-pressed="${S.lang==='uk'}"><span style="width:36px;height:24px;display:block">${FLAG.uk}</span></button></div></div>
      <h2>${esc(L(x.name))}</h2></section>
      ${qs.length ? qs.map((q,i) => qBlock(q, i, st.answers[q.id], 'test')).join('') : `<div class="empty">${esc(t('noQuestions'))}</div>`}
      <div id="testErr" role="alert"></div>
      <div class="row"><button class="btn primary big" data-act="testSubmit">${esc(t('submitTest'))}</button><button class="btn ghost" data-act="testCancel">${esc(t('cancel'))}</button></div>`;
    return;
  }
  if (st.step === 'result') {
    const r = testRec(x.id, st.mdt) || st.result;
    $app.innerHTML = `<section class="result ${r.passed?'ok':'bad'}"><span class="mono">${esc(st.mdt)}</span><span class="big">${esc(r.passed ? t('passed') : t('failed'))}</span><span>${esc(t('score', {p: r.score}))}</span></section>
      <div class="row" style="justify-content:center"><button class="btn primary big" data-act="testBack">${esc(t('backToInstr'))}</button></div>`;
  }
}
function startTest(m){ S.test.mdt = m; S.test.answers = {}; S.test.step = 'fill'; render(); }

/* ---------- Checklist ---------- */
function vChecklist(x, head){
  if (!S.cl || S.cl.tileId !== x.id) S.cl = {tileId: x.id, list: [], active: null, confirmFinish: false};
  const cl = S.cl, qs = x.form?.questions || [], u = me();
  // resume: open checklists of this tile created by me
  const mineOpen = D().checklists.filter(r => r.tileId === x.id && r.status === 'open' && r.instruktorId === u.id).map(r => r.mdt);
  for (const m of mineOpen) if (!cl.list.includes(m)) cl.list.push(m);
  const chip = (m) => { const r = clRec(x.id, m); const lab = !r ? '' : r.status === 'done' ? t('clDone') : t('clOpen', {a: Object.keys(r.answers || {}).filter(k => qs.find(q => q.id === k && q.type !== 'note')).length, b: qs.filter(q => q.type !== 'note').length});
    return `<button class="chip pick ${cl.active===m?'sel':''}" data-act="clPick" data-m="${esc(m)}" aria-pressed="${cl.active===m}">${esc(m)} <span class="st">${esc(lab)}</span></button>`; };
  let body = '';
  const r = cl.active ? clRec(x.id, cl.active) : null;
  if (!cl.active) body = `<p class="muted">${esc(t('selectTrainee'))}</p>`;
  else if (r?.status === 'done') {
    body = `<section class="result ${r.passed?'ok':'bad'}"><span class="mono">${esc(r.mdt)}</span><span class="big">${esc(r.passed ? t('passed') : t('failed'))}</span><span>${esc(t('score', {p: r.score}))}</span>
      ${r.retrained ? `<span>${esc(t('st_done2'))}</span>` : ''}</section>
      ${!r.passed && !r.retrained ? `<div class="row"><button class="btn primary" data-act="openRetrain" data-k="checklists" data-id="${r.id}">${esc(t('retrain'))}</button></div>` : ''}`;
  } else {
    const ans = r?.answers || {};
    body = `<h2>${esc(t('checklistFor'))} <span class="mono">${esc(cl.active)}</span></h2>${qs.length ? qs.map((q,i) => qBlock(q, i, ans[q.id], 'cl')).join('') : `<div class="empty">${esc(t('noQuestions'))}</div>`}
      ${cl.confirmFinish ? `<div class="msg warn">${ico('warn')}<span class="grow">${esc(t('finishQ'))}</span><button class="btn small primary" data-act="clFinish">${esc(t('finishNow'))}</button><button class="btn small" data-act="clFinishCancel">${esc(t('cancel'))}</button></div>`
      : `<div id="clErr" role="alert"></div><div class="row"><button class="btn primary big" data-act="clFinishAsk">${esc(t('finish'))}</button></div>`}`;
  }
  $app.innerHTML = head + `<h1>${esc(L(x.name))}</h1><section class="panel">${scannerHtml('cl')}
    ${cl.list.length ? `<div class="sep"></div><h3>${esc(t('scanned'))}</h3><div class="chips">${cl.list.map(chip).join('')}</div>` : ''}</section>
    <section style="display:grid;gap:14px">${body}</section>`;
  SCAN_HANDLERS.cl = async (m) => {
    if (cl.list.includes(m)) { cl.active = m; return render(); }
    const st = await mdtStatus(m, x.id);
    if (st.clDone && !clRec(x.id, m)) return scanMsg('cl', 'warn', t('clByOther', {m}));
    const trained = st.trained;
    if (!trained && !cl.warned?.includes(m)) { cl.warned = [...(cl.warned||[]), m]; return scanMsg('cl', 'warn', t('noTraining', {m}), `<button class="btn small" data-act="clAdd" data-m="${esc(m)}">${esc(t('continueAnyway'))}</button>`); }
    clAdd(m);
  };
}
async function clAdd(m){
  const cl = S.cl, x = tile(cl.tileId), u = me();
  if (!cl.list.includes(m)) cl.list.push(m);
  cl.active = m; cl.confirmFinish = false;
  if (!clRec(x.id, m)) {
    try { await col('checklists').doc(x.id + '__' + m).set({mdt: m, tileId: x.id, processId: x.processId, status: 'open', answers: {}}); }
    catch(e) {
      cl.list = cl.list.filter(z => z !== m); cl.active = null; render();
      return scanMsg('cl', 'bad', e?.code === '23505' ? t('clByOther', {m}) : errText(e));
    }
  }
  render();
}

/* ---------- Retrain view ---------- */
function wrongList(r){
  const qs = r.questions || [];
  return (r.wrong || []).map(qid => { const q = qs.find(z => z.id === qid); if (!q) return '';
    const a = r.answers?.[qid];
    const optTxt = (id) => L(q.options?.find(o => o.id === id)?.text);
    const their = q.type === 'yesno' ? (a ? t(a === 'yes' ? 'yes' : 'no') : t('none')) : q.type === 'multi' ? (Array.isArray(a) && a.length ? a.map(optTxt).join(', ') : t('none')) : (a ? optTxt(a) : t('none'));
    const right = q.type === 'yesno' ? t(q.correctYes ? 'yes' : 'no') : q.options.filter(o => o.correct).map(o => L(o.text)).join(', ');
    return `<div class="wrong"><div class="qt" style="font-weight:600">${esc(L(q.text))} ${q.critical ? `<span class="tag crit">${esc(t('critical'))}</span>` : ''}</div>
      <div class="a" style="color:var(--bad)">${esc(t('theirAns'))}: ${esc(their)}</div><div class="a" style="color:var(--ok)">${esc(t('correctAns'))}: ${esc(right)}</div></div>`; }).join('');
}
function vRetrain(){
  const r = D()[S.p.k]?.find(z => z.id === S.p.id); if (!r) return go(role() === 'instruktor' ? 'mine' : 'overview');
  const x = tile(r.tileId), p = proc(r.processId);
  $app.innerHTML = `<div class="crumbs"><button data-act="${role()==='instruktor'?'nav':'openPerson'}" data-v="mine" data-m="${esc(r.mdt)}">${esc(role()==='instruktor'?t('myTrainees'):r.mdt)}</button><span>/</span><span>${esc(t('retrainTitle'))}</span></div>
    <section class="panel"><div class="spread"><div><p class="muted">${esc(L(p?.name))} · ${esc(L(x?.name))}</p><h1 class="mono">${esc(r.mdt)}</h1></div>
      <span class="pill ${r.retrained?'p-done2':'p-failed'}">${esc(r.retrained ? t('st_done2') : t('failed') + ' · ' + r.score + ' %')}</span></div>
      <h2>${esc(t('wrongTitle'))}</h2>${wrongList(r) || `<p class="muted">—</p>`}
      ${r.retrained ? `<div class="msg ok">${ico('check')}<span class="grow">${esc(t('retrainedOk'))} ${esc(fmtD(r.retrained.at))} · ${esc(userName(r.retrained.by))}${r.retrained.note ? ' · ' + esc(r.retrained.note) : ''}</span></div>`
      : `<label class="f">${esc(t('note'))}<textarea id="rt_note"></textarea></label>
        <div class="row"><button class="btn primary big" data-act="doRetrain">${ico('check')}${esc(t('confirmRetrain'))}</button></div>`}</section>`;
}

/* ---------- Instructor: my trainees ---------- */
function traineeRows(filterFn){
  const recs = [...D().trainings, ...D().tests, ...D().checklists].filter(scopeOk).filter(filterFn || (() => true));
  const map = new Map();
  for (const r of recs) { if (!map.has(r.mdt)) map.set(r.mdt, {mdt: r.mdt, procs: new Set(), last: ''}); const e = map.get(r.mdt); e.procs.add(r.processId); const d = r.at || r.createdAt || ''; if (d > e.last) e.last = d; }
  return [...map.values()].sort((a,b) => b.last.localeCompare(a.last));
}
function vMine(){
  const rows = traineeRows();
  const failedRecs = [...D().tests.map(r => ['tests', r]), ...D().checklists.map(r => ['checklists', r])].filter(([,r]) => scopeOk(r) && recState(r) === 'failed');
  $app.innerHTML = `<h1>${esc(t('myTrainees'))}</h1>
    ${failedRecs.length ? `<section class="panel"><h2>${esc(t('kFailed'))} (${failedRecs.length})</h2><div class="tw"><table class="nw"><thead><tr><th>${esc(t('mdt'))}</th><th>${esc(t('process'))}</th><th>${esc(t('perTile'))}</th><th class="num">${esc(t('result'))}</th><th></th></tr></thead><tbody>
      ${failedRecs.map(([k,r]) => `<tr><td class="mono">${esc(r.mdt)}</td><td>${esc(L(proc(r.processId)?.name))}</td><td>${esc(L(tile(r.tileId)?.name))}</td><td class="num">${r.score} %</td><td><button class="btn small primary" data-act="openRetrain" data-k="${k}" data-id="${r.id}">${esc(t('retrain'))}</button></td></tr>`).join('')}
      </tbody></table></div></section>` : ''}
    <section class="panel">${rows.length ? `<div class="tw"><table class="nw"><thead><tr><th>${esc(t('mdt'))}</th><th>${esc(t('process'))}</th><th>${esc(t('status'))}</th><th>${esc(t('date'))}</th></tr></thead><tbody>
      ${rows.flatMap(e => [...e.procs].map((pid, i) => `<tr><td class="mono">${i===0?esc(e.mdt):''}</td><td>${esc(L(proc(pid)?.name))}</td><td>${pill(statusOf(e.mdt, pid))}</td><td>${i===0?esc(fmtDay(e.last)):''}</td></tr>`)).join('')}
      </tbody></table></div>` : `<div class="empty">${esc(t('noTrainees'))}</div>`}</section>`;
}

/* ---------- Overview ---------- */
function inFilter(r){
  const f = S.flt, d = (r.at || r.createdAt || '').slice(0,10);
  if (f.from && d < f.from) return false; if (f.to && d > f.to) return false;
  if (f.instr && r.instruktorId !== f.instr) return false; if (f.proc && r.processId !== f.proc) return false;
  return true;
}
function vOverview(){
  if (!isMgr()) return vNoAccess();
  const u = me(), f = S.flt;
  const instrs = D().users.filter(x => (x.role === 'instruktor' || x.role === 'skolitel') && (u.role === 'admin' || x.skolitelId === u.id || x.id === u.id));
  const ps = f.proc ? procs().filter(p => p.id === f.proc) : procs();
  const rows = traineeRows(inFilter);
  const statuses = rows.flatMap(e => ps.filter(p => e.procs.has(p.id)).map(p => statusOf(e.mdt, p.id)));
  const cnt = (s) => statuses.filter(x => x === s).length;
  const tests = D().tests.filter(scopeOk).filter(inFilter), cls = D().checklists.filter(scopeOk).filter(inFilter).filter(r => r.status === 'done');
  const per = (ids) => { const tr = D().trainings.filter(scopeOk).filter(inFilter).filter(r => ids.includes(r.instruktorId)); const ts = tests.filter(r => ids.includes(r.instruktorId));
    const rt = [...ts, ...cls.filter(r => ids.includes(r.instruktorId))].filter(r => r.retrained).length;
    return {n: new Set(tr.map(r => r.mdt)).size, t: ts.length, rate: ts.length ? Math.round(ts.filter(r => r.passed).length / ts.length * 100) : null, rt}; };
  // most missed
  const miss = new Map();
  for (const r of [...tests, ...cls]) for (const q of (r.questions || [])) { if (q.type === 'note') continue; const k = L(q.text); const e = miss.get(k) || {k, w: 0, n: 0}; e.n++; if ((r.wrong || []).includes(q.id)) e.w++; miss.set(k, e); }
  const top = [...miss.values()].filter(e => e.w).sort((a,b) => b.w/b.n - a.w/a.n || b.w - a.w).slice(0, 8);
  const skolitele = D().users.filter(x => x.role === 'skolitel');
  $app.innerHTML = `<div class="spread"><h1>${esc(t('overview'))}</h1><button class="btn" data-act="exportCsv">${ico('download')}${esc(t('exportCsv'))}</button></div>
  <section class="panel"><div class="filters">
    <label class="f">${esc(t('sinceDate'))}<input type="date" id="f_from" value="${esc(f.from)}"></label>
    <label class="f">${esc(t('untilDate'))}<input type="date" id="f_to" value="${esc(f.to)}"></label>
    <label class="f">${esc(t('instructor'))}<select id="f_instr"><option value="">${esc(t('all'))}</option>${instrs.map(x => `<option value="${x.id}" ${f.instr===x.id?'selected':''}>${esc(x.name)}</option>`).join('')}</select></label>
    <label class="f">${esc(t('process'))}<select id="f_proc"><option value="">${esc(t('all'))}</option>${procs().map(p => `<option value="${p.id}" ${f.proc===p.id?'selected':''}>${esc(L(p.name))}</option>`).join('')}</select></label>
  </div></section>
  <div class="kpis">
    <div class="kpi"><span class="v">${cnt('done')}</span><span class="l">${esc(t('kDone'))}</span></div>
    <div class="kpi"><span class="v">${cnt('done2')}</span><span class="l">${esc(t('kDone2'))}</span></div>
    <div class="kpi"><span class="v" style="color:var(--bad)">${cnt('failed')}</span><span class="l">${esc(t('kFailed'))}</span></div>
    <div class="kpi"><span class="v">${cnt('progress')}</span><span class="l">${esc(t('kProgress'))}</span></div>
  </div>
  <section class="panel"><h2>${esc(t('person'))} × ${esc(t('process'))}</h2>
  ${rows.length ? `<div class="tw"><table class="nw"><thead><tr><th>${esc(t('mdt'))}</th>${ps.map(p => `<th>${esc(L(p.name))}</th>`).join('')}<th>${esc(t('date'))}</th></tr></thead><tbody>
    ${rows.map(e => `<tr><td><button class="linkbtn mono" data-act="openPerson" data-m="${esc(e.mdt)}">${esc(e.mdt)}</button></td>${ps.map(p => `<td>${e.procs.has(p.id) ? pill(statusOf(e.mdt, p.id)) : '<span class="muted">·</span>'}</td>`).join('')}<td>${esc(fmtDay(e.last))}</td></tr>`).join('')}
  </tbody></table></div>` : `<div class="empty">${esc(t('noData'))}</div>`}</section>
  <div class="grid2" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));align-items:start">
  <section class="panel"><h2>${esc(t('byInstructor'))}</h2><div class="tw"><table class="stat"><thead><tr><th>${esc(t('instructor'))}</th><th class="num">${esc(t('trainees'))}</th><th class="num">${esc(t('testsN'))}</th><th class="num">${esc(t('passRate'))}</th><th class="num">${esc(t('retrainedN'))}</th></tr></thead><tbody>
    ${instrs.map(x => { const s = per([x.id]); return `<tr><td>${esc(x.name)}${x.active?'':' <span class="tag">'+esc(t('deactivated'))+'</span>'}</td><td class="num">${s.n}</td><td class="num">${s.t}</td><td class="num">${s.rate==null?'—':s.rate+' %'}</td><td class="num">${s.rt}</td></tr>`; }).join('')}
  </tbody></table></div>
  ${u.role === 'admin' && skolitele.length ? `<h2>${esc(t('byTrainer'))}</h2><div class="tw"><table class="stat"><thead><tr><th>${esc(t('trainer'))}</th><th class="num">${esc(t('trainees'))}</th><th class="num">${esc(t('testsN'))}</th><th class="num">${esc(t('passRate'))}</th><th class="num">${esc(t('retrainedN'))}</th></tr></thead><tbody>
    ${skolitele.map(sk => { const ids = [sk.id, ...D().users.filter(x => x.skolitelId === sk.id).map(x => x.id)]; const s = per(ids); return `<tr><td>${esc(sk.name)}</td><td class="num">${s.n}</td><td class="num">${s.t}</td><td class="num">${s.rate==null?'—':s.rate+' %'}</td><td class="num">${s.rt}</td></tr>`; }).join('')}
  </tbody></table></div>` : ''}</section>
  <section class="panel"><h2>${esc(t('topWrong'))}</h2>${top.length ? `<div class="bars">${top.map(e => `<div class="bar-row"><span>${esc(e.k)}</span><span class="track"><span class="fill" style="display:block;width:${Math.round(e.w/e.n*100)}%"></span></span><span class="num" style="text-align:right">${Math.round(e.w/e.n*100)} %</span></div>`).join('')}</div>` : `<p class="muted">${esc(t('noData'))}</p>`}</section>
  </div>`;
}
async function exportCsv(){
  const rows = traineeRows(inFilter), ps = S.flt.proc ? procs().filter(p => p.id === S.flt.proc) : procs();
  const q = (s) => '"' + String(s ?? '').replaceAll('"', '""') + '"';
  const lines = [[t('mdt'), t('process'), t('status'), t('training'), t('ty_test')+' %', t('ty_checklist')+' %', t('instructor')].map(q).join(';')];
  for (const e of rows) for (const p of ps) { if (!e.procs.has(p.id)) continue;
    const trs = D().trainings.filter(r => r.mdt === e.mdt && r.processId === p.id).sort((a,b) => a.at.localeCompare(b.at));
    const ts = D().tests.filter(r => r.mdt === e.mdt && r.processId === p.id), cs = D().checklists.filter(r => r.mdt === e.mdt && r.processId === p.id && r.status === 'done');
    lines.push([e.mdt, L(p.name), t('st_' + statusOf(e.mdt, p.id)), trs[0] ? fmtDay(trs[0].at) : '', ts.map(r => r.score).join('/'), cs.map(r => r.score).join('/'), trs[0] ? userName(trs[0].instruktorId) : ''].map(q).join(';')); }
  const blob = new Blob(['\ufeff' + lines.join('\r\n')], {type: 'text/csv;charset=utf-8'});
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `skoleni-prehled-${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

/* ---------- Person detail ---------- */
function vPerson(){
  if (!isMgr()) return vNoAccess();
  const m = S.p.m;
  const recs = [...D().trainings.map(r => ['trainings', r]), ...D().tests.map(r => ['tests', r]), ...D().checklists.map(r => ['checklists', r])].filter(([,r]) => r.mdt === m && scopeOk(r));
  const byProc = new Map(); for (const [k, r] of recs) { if (!byProc.has(r.processId)) byProc.set(r.processId, []); byProc.get(r.processId).push([k, r]); }
  const kindLabel = {trainings: t('training'), tests: t('ty_test'), checklists: t('ty_checklist')};
  const delBtn = (k, r) => !canDelete(r) ? '' : S.del === r.id ? `<button class="btn small danger solid" data-act="doDel" data-k="${k}" data-id="${r.id}">${esc(t('reallyDel'))}</button> <button class="btn small" data-act="delCancel">${esc(t('cancel'))}</button>` : `<button class="btn small danger" data-act="delAsk" data-id="${r.id}">${ico('trash')}${esc(t('del'))}</button>`;
  $app.innerHTML = `<div class="crumbs"><button data-act="nav" data-v="overview">${esc(t('overview'))}</button><span>/</span><span class="mono">${esc(m)}</span></div>
  <div class="spread"><h1><span class="muted" style="font-weight:500">${esc(t('person'))}</span> <span class="mono">${esc(m)}</span></h1></div>
  ${byProc.size ? [...byProc.entries()].map(([pid, list]) => `<section class="panel"><div class="spread"><h2>${esc(L(proc(pid)?.name) || '—')}</h2>${pill(statusOf(m, pid))}</div>
    <div class="tw"><table class="nw"><thead><tr><th>${esc(t('what'))}</th><th>${esc(t('perTile'))}</th><th>${esc(t('date'))}</th><th>${esc(t('instructor'))}</th><th>${esc(t('result'))}</th><th>${esc(t('action'))}</th></tr></thead><tbody>
    ${list.sort((a,b) => (a[1].at||a[1].createdAt||'').localeCompare(b[1].at||b[1].createdAt||'')).map(([k, r]) => `<tr><td>${esc(kindLabel[k])}</td><td>${esc(L(tile(r.tileId)?.name))}</td><td>${esc(fmtD(r.at || r.createdAt))}</td><td>${esc(userName(r.instruktorId))}</td>
      <td>${k === 'trainings' ? `<span class="pill p-done">${esc(t('recorded'))}</span>` : r.status === 'open' ? pill('progress') : `${r.score} % · ${esc(r.passed ? t('passed') : t('failed'))}${r.retrained ? ' · ' + esc(t('st_done2')) : ''}`}</td>
      <td><div class="row">${k !== 'trainings' && r.status !== 'open' && !r.passed ? `<button class="btn small" data-act="openRetrain" data-k="${k}" data-id="${r.id}">${esc(t('detail'))}</button>` : ''}${delBtn(k, r)}</div></td></tr>`).join('')}
    </tbody></table></div></section>`).join('') : `<div class="empty">${esc(t('noRecs'))}</div>`}`;
}

/* ---------- Users ---------- */
function vUsers(){
  if (!isMgr()) return vNoAccess();
  const u = me(), admin = u.role === 'admin';
  const list = D().users.filter(x => admin || (x.role === 'instruktor' && x.skolitelId === u.id)).sort((a,b) => (a.role+a.name).localeCompare(b.role+b.name));
  const sk = D().users.filter(x => x.role === 'skolitel' && x.active);
  $app.innerHTML = `<h1>${esc(admin ? t('users') : t('instructors'))}</h1>
  <section class="panel"><h2>${esc(t('newUser'))}</h2>
    <form id="fUser" class="grid2">
      <label class="f">${esc(t('name'))}<input type="text" id="nu_name"></label>
      <label class="f">${esc(t('loginName'))}<input type="text" id="nu_login" autocapitalize="none" autocomplete="off"></label>
      <label class="f">${esc(t('password'))}<input type="text" id="nu_pw" autocomplete="off"></label>
      ${admin ? `<label class="f">${esc(t('role'))}<select id="nu_role"><option value="instruktor">${esc(t('r_instruktor'))}</option><option value="skolitel">${esc(t('r_skolitel'))}</option><option value="admin">${esc(t('r_admin'))}</option></select></label>
      <label class="f">${esc(t('assignTrainer'))}<select id="nu_sk"><option value="">—</option>${sk.map(x => `<option value="${x.id}">${esc(x.name)}</option>`).join('')}</select></label>` : ''}
      <div style="display:flex;align-items:end"><button class="btn primary" style="width:100%">${ico('plus')}${esc(t('create'))}</button></div>
    </form><div id="nu_err" role="alert"></div></section>
  <section class="panel"><div class="tw"><table><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('loginName'))}</th><th>${esc(t('role'))}</th>${admin?`<th>${esc(t('trainer'))}</th>`:''}<th>${esc(t('status'))}</th><th>${esc(t('action'))}</th></tr></thead><tbody>
  ${list.map(x => `<tr><td>${esc(x.name)}</td><td class="mono">${esc(x.login)}</td><td>${esc(t('r_'+x.role))}</td>${admin?`<td>${x.role==='instruktor'?esc(userName(x.skolitelId)):''}</td>`:''}
    <td>${x.active ? `<span class="pill p-done">${esc(t('active'))}</span>` : `<span class="pill p-none">${esc(t('deactivated'))}</span>`}</td>
    <td><div class="row">${x.id === u.id ? '' : `<button class="btn small" data-act="toggleUser" data-id="${x.id}">${esc(x.active ? t('deactivate') : t('activate'))}</button>`}
      ${S.p.pw === x.id ? `<input type="text" id="pw_${x.id}" placeholder="${esc(t('resetPw'))}" style="width:160px;min-height:36px"><button class="btn small primary" data-act="setPw" data-id="${x.id}">${esc(t('setPw'))}</button>` : `<button class="btn small" data-act="pwAsk" data-id="${x.id}">${esc(t('resetPw'))}</button>`}</div></td></tr>`).join('')}
  </tbody></table></div></section>`;
}

/* ---------- Audit ---------- */
function vAudit(){
  if (!isMgr()) return vNoAccess();
  const u = me();
  const scopeIds = u.role === 'admin' ? null : new Set([u.id, ...D().users.filter(x => x.skolitelId === u.id).map(x => x.id)]);
  const list = [...D().audit].filter(a => !scopeIds || scopeIds.has(a.by)).sort((a,b) => b.at.localeCompare(a.at));
  $app.innerHTML = `<h1>${esc(t('audit'))}</h1><section class="panel">${list.length ? `<div class="tw"><table><thead><tr><th>${esc(t('date'))}</th><th>${esc(t('who'))}</th><th>${esc(t('what'))}</th><th>${esc(t('detail'))}</th></tr></thead><tbody>
    ${list.map(a => `<tr><td style="white-space:nowrap">${esc(fmtD(a.at))}</td><td>${esc(a.byName)}</td><td>${esc(a.action)}</td><td>${esc(a.detail)}</td></tr>`).join('')}</tbody></table></div>` : `<div class="empty">${esc(t('auditEmpty'))}</div>`}</section>`;
}

/* ---------- Settings ---------- */
function vSettings(){
  if (role() !== 'admin') return vNoAccess();
  $app.innerHTML = `<h1>${esc(t('settings'))}</h1><section class="panel"><form id="fSettings" style="display:grid;gap:14px;max-width:520px">
    <label class="f">${esc(t('mdtPattern'))}<input type="text" id="set_pat" class="mono" value="${esc(settings().mdtPattern || '^990\\d{3}$')}"></label>
    <div><button class="btn primary">${esc(t('save'))}</button></div></form></section>`;
}
function vNoAccess(){ $app.innerHTML = `<div class="msg bad">${esc(t('noAccess'))}</div>`; }

/* ---------- Process editor (admin) ---------- */
function vProcEdit(){
  if (role() !== 'admin') return vNoAccess();
  const ps = procs();
  $app.innerHTML = `<div class="crumbs"><button data-act="nav" data-v="home">${esc(t('processes'))}</button><span>/</span><span>${esc(t('editProcs'))}</span></div><h1>${esc(t('editProcs'))}</h1>
  <section class="panel"><h2>${esc(t('addProc'))}</h2><form id="fProc" class="grid2">
    <label class="f">${esc(t('procName'))} (CZ)<input type="text" id="np_cs"></label><label class="f">${esc(t('procName'))} (UA)<input type="text" id="np_uk"></label>
    <label class="f">${esc(t('icon'))}<select id="np_icon">${ICON_CHOICES.map(i => `<option value="${i}">${i}</option>`).join('')}</select></label>
    <div style="display:flex;align-items:end"><button class="btn primary" style="width:100%">${ico('plus')}${esc(t('addProc'))}</button></div></form>
    <p class="muted">${esc(t('defaultTiles'))}</p></section>
  ${ps.map((p, i) => `<section class="panel"><div class="grid2">
    <label class="f">${esc(t('procName'))} (CZ)<input type="text" data-pf="cs" data-id="${p.id}" value="${esc(p.name?.cs)}"></label>
    <label class="f">${esc(t('procName'))} (UA)<input type="text" data-pf="uk" data-id="${p.id}" value="${esc(p.name?.uk)}"></label>
    <label class="f">${esc(t('icon'))}<select data-pf="icon" data-id="${p.id}">${ICON_CHOICES.map(ic => `<option value="${ic}" ${p.icon===ic?'selected':''}>${ic}</option>`).join('')}</select></label></div>
    <div class="row"><span class="ico" style="color:var(--accent)">${ico(p.icon)}</span>
      ${i>0?`<button class="btn small" data-act="moveProc" data-id="${p.id}" data-d="-1">${ico('up')}</button>`:''}${i<ps.length-1?`<button class="btn small" data-act="moveProc" data-id="${p.id}" data-d="1">${ico('down')}</button>`:''}
      <span style="flex:1"></span>
      ${S.del === p.id ? `<button class="btn small danger solid" data-act="doDelProc" data-id="${p.id}">${esc(t('reallyDel'))}</button><button class="btn small" data-act="delCancel">${esc(t('cancel'))}</button>` : `<button class="btn small danger" data-act="delAsk" data-id="${p.id}">${ico('trash')}${esc(t('delProc'))}</button>`}</div></section>`).join('')}`;
}

/* ---------- Tile editor ---------- */
function vTileEdit(){
  if (!isMgr()) return vNoAccess();
  const src = tile(S.p.id); if (!src) return go('home');
  if (!S.edit || S.edit.id !== src.id) S.edit = JSON.parse(JSON.stringify(src));
  const e = S.edit, admin = role() === 'admin', p = proc(e.processId);
  e.form = e.form || {threshold: 80, questions: []};
  const pdfRow = (lang) => { const id = e.pdf?.[lang];
    return `<div class="row" style="justify-content:space-between;border:1px solid var(--line);border-radius:10px;padding:10px 12px">
      <span>${ico('file')} ${esc(t(lang === 'cs' ? 'pdfCs' : 'pdfUk'))}: ${id ? `<button class="linkbtn" data-act="pdfOpen" data-path="${esc(id)}">${esc(t('show'))}</button>` : '<span class="muted">—</span>'}</span>
      <span class="row"><label class="btn small">${ico('upload')}${esc(id ? t('replacePdf') : t('uploadPdf'))}<input type="file" accept="application/pdf" data-upload="${lang}" hidden></label>
      ${id ? `<button class="btn small danger" data-act="pdfRemove" data-l="${lang}">${esc(t('removePdf'))}</button>` : ''}</span></div>`; };
  const qe = (q, i) => {
    const opts = (q.type === 'single' || q.type === 'multi') ? `<div style="display:grid;gap:8px">${q.options.map((o, j) => `<div class="opt-e">
        <label class="check" title="${esc(t('correct'))}"><input type="${q.type==='single'?'radio':'checkbox'}" name="cor_${q.id}" data-ed="correct" data-q="${i}" data-o="${j}" ${o.correct?'checked':''}>${esc(t('correct'))}</label>
        <input type="text" placeholder="${esc(t('optCs'))}" aria-label="${esc(t('optCs'))} ${j+1}" data-ed="ocs" data-q="${i}" data-o="${j}" value="${esc(o.text?.cs)}">
        <input type="text" class="uk" placeholder="${esc(t('optUk'))}" aria-label="${esc(t('optUk'))} ${j+1}" data-ed="ouk" data-q="${i}" data-o="${j}" value="${esc(o.text?.uk)}">
        <button type="button" class="iconbtn" aria-label="${esc(t('remove'))}" data-act="edOptDel" data-q="${i}" data-o="${j}">${ico('x')}</button></div>`).join('')}
        <div><button type="button" class="btn small" data-act="edOptAdd" data-q="${i}">${ico('plus')}${esc(t('addOpt'))}</button></div></div>`
      : q.type === 'yesno' ? `<div class="row"><span class="muted">${esc(t('correctIs'))}:</span><label class="check"><input type="radio" name="yn_${q.id}" data-ed="yn" data-q="${i}" value="yes" ${q.correctYes?'checked':''}>${esc(t('yes'))}</label><label class="check"><input type="radio" name="yn_${q.id}" data-ed="yn" data-q="${i}" value="no" ${!q.correctYes?'checked':''}>${esc(t('no'))}</label></div>` : '';
    const missing = !q.text?.uk || (q.options || []).some(o => !o.text?.uk);
    return `<div class="qe"><div class="spread"><strong>${i+1}.</strong><div class="row">
        ${missing ? `<span class="tag">${esc(t('missingUk'))}</span>` : ''}
        ${i>0?`<button type="button" class="iconbtn" aria-label="↑" data-act="edQMove" data-q="${i}" data-d="-1">${ico('up')}</button>`:''}
        ${i<e.form.questions.length-1?`<button type="button" class="iconbtn" aria-label="↓" data-act="edQMove" data-q="${i}" data-d="1">${ico('down')}</button>`:''}
        <button type="button" class="iconbtn" aria-label="${esc(t('remove'))}" data-act="edQDel" data-q="${i}">${ico('trash')}</button></div></div>
      <div class="grid2"><label class="f">${esc(t('qType'))}<select data-ed="type" data-q="${i}">${['single','multi','yesno','note'].map(ty => `<option value="${ty}" ${q.type===ty?'selected':''}>${esc(t('q_'+ty))}</option>`).join('')}</select></label>
        <label class="check" style="align-self:end;min-height:44px"><input type="checkbox" data-ed="critical" data-q="${i}" ${q.critical?'checked':''}>${esc(t('critical'))}</label></div>
      <label class="f">${esc(t('qTextCs'))}<input type="text" data-ed="tcs" data-q="${i}" value="${esc(q.text?.cs)}"></label>
      <label class="f">${esc(t('qTextUk'))}<input type="text" data-ed="tuk" data-q="${i}" value="${esc(q.text?.uk)}"></label>${opts}</div>`;
  };
  $app.innerHTML = `<div class="crumbs"><button data-act="nav" data-v="home">${esc(t('processes'))}</button><span>/</span><button data-act="openProc" data-id="${p?.id}">${esc(L(p?.name))}</button><span>/</span><span>${esc(t('editContent'))}</span></div>
  <div class="spread"><h1>${esc(L(e.name))}</h1><div class="row"><button class="btn primary" data-act="edSave">${ico('check')}${esc(t('save'))}</button><button class="btn" data-act="openProc" data-id="${p?.id}">${esc(t('cancel'))}</button></div></div>
  ${admin ? `<section class="panel"><div class="grid2">
    <label class="f">${esc(t('tileName'))} (CZ)<input type="text" data-ed="ncs" value="${esc(e.name?.cs)}"></label>
    <label class="f">${esc(t('tileName'))} (UA)<input type="text" data-ed="nuk" value="${esc(e.name?.uk)}"></label>
    <label class="f">${esc(t('tileType'))}<select data-ed="ttype">${['skoleni','pdf','test','checklist'].map(ty => `<option value="${ty}" ${e.type===ty?'selected':''}>${esc(t('ty_'+ty))}</option>`).join('')}</select></label>
    <label class="f">${esc(t('icon'))}<select data-ed="ticon"><option value="">${esc(t('defIcon'))}</option>${ICON_CHOICES.map(ic => `<option value="${ic}" ${e.icon===ic?'selected':''}>${ic}</option>`).join('')}</select></label></div>
    <div class="row">${S.del === e.id ? `<button class="btn small danger solid" data-act="doDelTile" data-id="${e.id}">${esc(t('reallyDel'))}</button><button class="btn small" data-act="delCancel">${esc(t('cancel'))}</button>` : `<button class="btn small danger" data-act="delAsk" data-id="${e.id}">${ico('trash')}${esc(t('delTile'))}</button>`}</div></section>` : ''}
  ${e.type === 'skoleni' ? `<section class="panel"><h2>PDF</h2>${pdfRow('cs')}${pdfRow('uk')}<div id="upMsg" role="status"></div></section>` : ''}
  ${e.type === 'pdf' ? (() => { if (!e._keepFiles) { e.files = filesOf(e).map(f => ({...f})); e._keepFiles = true; } const fl = e.files;
    return `<section class="panel"><div class="spread"><h2>${esc(t('docs'))} (${fl.length})</h2></div>
    <div class="upbar"><label class="f" style="max-width:260px">${esc(t('newLang'))}<select id="upLang"><option value="all">${esc(t('langAll'))}</option><option value="cs">${esc(t('langCs'))}</option><option value="uk">${esc(t('langUk'))}</option></select></label>
      <label class="btn primary">${ico('upload')}${esc(t('uploadMany'))}<input type="file" accept="application/pdf" multiple data-uploadmany hidden></label></div>
    <p class="muted">${esc(t('uploadManyHint'))}</p><div id="upMsg" role="status"></div>
    ${fl.length ? `<div class="doclist">${fl.map((f, i) => `<div class="docrow"><span class="di-s">${ico('doc')}</span>
        <label class="f" style="flex:1 1 240px">${esc(t('docName'))}<input type="text" data-ed="fname" data-f="${i}" value="${esc(f.name)}"></label>
        <label class="f" style="flex:0 1 180px">${esc(t('docLang'))}<select data-ed="flang" data-f="${i}">${[['all','langAll'],['cs','langCs'],['uk','langUk']].map(([v,k]) => `<option value="${v}" ${ (f.lang||'all')===v?'selected':''}>${esc(t(k))}</option>`).join('')}</select></label>
        <span class="row" style="align-self:end">
          <button type="button" class="iconbtn" aria-label="${esc(t('show'))}" title="${esc(t('show'))}" data-act="pdfOpen" data-path="${esc(f.ref)}">${ico('eye')}</button>
          <button type="button" class="iconbtn" aria-label="Posunout dříve" data-act="fMove" data-f="${i}" data-d="-1" ${i>0?'':'style="visibility:hidden" tabindex="-1"'}>${ico('up')}</button>
          <button type="button" class="iconbtn" aria-label="Posunout později" data-act="fMove" data-f="${i}" data-d="1" ${i<fl.length-1?'':'style="visibility:hidden" tabindex="-1"'}>${ico('down')}</button>
          <button type="button" class="iconbtn" aria-label="${esc(t('remove'))}" title="${esc(t('remove'))}" data-act="fDel" data-f="${i}">${ico('trash')}</button></span></div>`).join('')}</div>` : `<div class="empty">${ico('doc')}<p>${esc(t('noDocs'))}</p></div>`}
    </section>`; })() : ''}
  ${e.type === 'test' || e.type === 'checklist' ? `<section class="panel"><div class="spread"><h2>${esc(t('questions'))} (${e.form.questions.length})</h2>
      <label class="f" style="max-width:220px">${esc(t('threshold'))}<input type="number" min="0" max="100" data-ed="thr" value="${esc(e.form.threshold ?? 80)}"></label></div>
    ${e.form.questions.map(qe).join('')}
    <div class="row"><button class="btn" data-act="edQAdd">${ico('plus')}${esc(t('addQ'))}</button></div></section>
    <div class="row"><button class="btn primary big" data-act="edSave">${ico('check')}${esc(t('save'))}</button></div>` : ''}`;
}
function newQ(type){ return {id: rid(), type: type || 'single', text: {cs: '', uk: ''}, critical: false, correctYes: true, options: type === 'yesno' || type === 'note' ? [] : [{id: rid(), text: {cs:'', uk:''}, correct: true}, {id: rid(), text: {cs:'', uk:''}, correct: false}]}; }

/* ===================== Events ===================== */
document.addEventListener('click', async (ev) => {
  const b = ev.target.closest('[data-act]'); if (!b) return;
  const a = b.dataset.act, d = b.dataset;
  if (b.tagName === 'A') return;
  switch (a) {
    case 'lang': S.lang = d.l; persist(); document.documentElement.lang = d.l === 'uk' ? 'uk' : 'cs'; render(); break;
    case 'nav': if (d.v === 'mine' && role() !== 'instruktor' && d.m) return go('person', {m: d.m}); go(d.v); break;
    case 'logout': camStop(); await signOut(); break;
    case 'reload': loadAll(); break;
    case 'pdfOpen': openPdf(d.path); break;
    case 'camScan': camStart(d.id); break;
    case 'camClose': camStop(); setTimeout(() => document.getElementById('scan_' + CAM.target)?.focus(), 30); break;
    case 'openProc': go('proc', {id: d.id}); break;
    case 'openTile': S.tr = S.test = S.cl = null; go('tile', {id: d.id}); break;
    case 'openDoc': go('tile', {id: d.id, file: d.f}); break;
    case 'editTile': S.edit = null; go('tileEdit', {id: d.id}); break;
    case 'openPerson': go('person', {m: d.m}); break;
    case 'openRetrain': go('retrain', {k: d.k, id: d.id}); break;
    case 'trRemove': S.tr.list = S.tr.list.filter(m => m !== d.m); render(); break;
    case 'trContinue': b.disabled = true; await trContinue(); break;
    case 'trNew': S.tr = null; render(); break;
    case 'testStart': startTest(d.m); break;
    case 'testAns': case 'clAns': return answer(a === 'testAns' ? 'test' : 'cl', d.q, d.o);
    case 'testCancel': S.test = null; render(); break;
    case 'testSubmit': return submitTest(b);
    case 'testBack': { const r = testRec(S.test.tileId, S.test.mdt); const x = tile(S.test.tileId); S.test = null;
      if (r && !r.passed) go('retrain', {k: 'tests', id: r.id}); else go('proc', {id: x.processId}); break; }
    case 'clPick': S.cl.active = d.m; S.cl.confirmFinish = false; render(); break;
    case 'clAdd': clAdd(d.m); break;
    case 'clFinishAsk': { const x = tile(S.cl.tileId), r = clRec(x.id, S.cl.active), qs = (x.form?.questions || []).filter(q => q.type !== 'note');
      const miss = qs.filter(q => { const v = r?.answers?.[q.id]; return v == null || (Array.isArray(v) && !v.length); }).length;
      if (miss) { document.getElementById('clErr').innerHTML = `<div class="msg warn">${esc(t('answerAll', {n: miss}))}</div>`; return; }
      S.cl.confirmFinish = true; render(); break; }
    case 'clFinishCancel': S.cl.confirmFinish = false; render(); break;
    case 'clFinish': return finishChecklist();
    case 'doRetrain': { const r = D()[S.p.k].find(z => z.id === S.p.id); const note = document.getElementById('rt_note')?.value.trim() || '';
      const retrained = {at: now(), by: S.uid, note}; r.retrained = retrained;
      await write(() => col(S.p.k).doc(r.id).update({retrained}));
      await audit('Přeškolení', `${r.mdt} · ${L(proc(r.processId)?.name)} · ${L(tile(r.tileId)?.name)}`); toast(t('retrainedOk')); render(); break; }
    case 'delAsk': S.del = d.id; render(); break;
    case 'delCancel': S.del = null; render(); break;
    case 'doDel': { const r = D()[d.k].find(z => z.id === d.id); await write(() => col(d.k).doc(d.id).delete());
      await audit('Smazání záznamu', `${d.k === 'trainings' ? 'Školení' : d.k === 'tests' ? 'Test' : 'Checklist'} · ${r?.mdt} · ${L(proc(r?.processId)?.name)}`); S.del = null; toast(t('deleted')); break; }
    case 'exportCsv': exportCsv(); break;
    case 'toggleUser': { const x = D().users.find(z => z.id === d.id); b.disabled = true;
      try { await adminUsers({action: 'set_active', id: x.id, active: !x.active}); } catch(e) { toast(e.message); } render(); break; }
    case 'pwAsk': S.p = {...S.p, pw: d.id}; render(); break;
    case 'setPw': { const pw = document.getElementById('pw_' + d.id).value;
      if (pw.length < 6) return toast(t('fillAll'));
      b.disabled = true;
      try { await adminUsers({action: 'set_password', id: d.id, password: pw}); S.p = {...S.p, pw: null}; toast(t('pwSet')); } catch(e) { toast(e.message); }
      render(); break; }
    case 'addTile': { const ts = tilesOf(d.id), id = rid(); await write(() => col('tiles').doc(id).set({processId: d.id, type: 'pdf', name: {cs: 'Nová dlaždice', uk: 'Новий розділ'}, order: (ts.at(-1)?.order ?? 0) + 1, pdf: {}, form: {threshold: 80, questions: []}, version: 1}));
      await audit('Přidání dlaždice', L(proc(d.id)?.name)); S.edit = null; go('tileEdit', {id}); break; }
    case 'moveTile': { const ts = tilesOf(tile(d.id).processId), i = ts.findIndex(x => x.id === d.id), j = i + Number(d.d); if (j < 0 || j >= ts.length) return;
      const A = ts[i], B = ts[j]; await write(() => col('tiles').doc(A.id).update({order: B.order ?? j})); await write(() => col('tiles').doc(B.id).update({order: A.order ?? i})); break; }
    case 'moveProc': { const ps = procs(), i = ps.findIndex(x => x.id === d.id), j = i + Number(d.d); if (j < 0 || j >= ps.length) return;
      await write(() => col('processes').doc(ps[i].id).update({order: ps[j].order ?? j})); await write(() => col('processes').doc(ps[j].id).update({order: ps[i].order ?? i})); break; }
    case 'doDelProc': { const p = proc(d.id); for (const x of tilesOf(d.id)) await write(() => col('tiles').doc(x.id).delete()); await write(() => col('processes').doc(d.id).delete()); await audit('Smazání procesu', L(p?.name)); S.del = null; break; }
    case 'doDelTile': { const x = tile(d.id); await write(() => col('tiles').doc(d.id).delete()); await audit('Smazání dlaždice', `${L(proc(x.processId)?.name)} · ${L(x.name)}`); S.del = null; S.edit = null; go('proc', {id: x.processId}); break; }
    case 'pdfRemove': S.edit.pdf = {...(S.edit.pdf || {}), [d.l]: null}; render(); break;
    case 'edQAdd': S.edit.form.questions.push(newQ(tile(S.edit.id)?.type === 'checklist' || S.edit.type === 'checklist' ? 'yesno' : 'single')); render(); break;
    case 'edQDel': S.edit.form.questions.splice(Number(d.q), 1); render(); break;
    case 'edQMove': { const qs = S.edit.form.questions, i = Number(d.q), j = i + Number(d.d); [qs[i], qs[j]] = [qs[j], qs[i]]; render(); break; }
    case 'edOptAdd': S.edit.form.questions[d.q].options.push({id: rid(), text: {cs:'', uk:''}, correct: false}); render(); break;
    case 'edOptDel': S.edit.form.questions[d.q].options.splice(Number(d.o), 1); render(); break;
    case 'fMove': { const fl = S.edit.files, i = Number(d.f), j = i + Number(d.d); [fl[i], fl[j]] = [fl[j], fl[i]]; S.edit._keepFiles = true; render(); break; }
    case 'fDel': S.edit.files.splice(Number(d.f), 1); S.edit._keepFiles = true; render(); break;
    case 'edSave': return saveTile();
  }
});

async function answer(kind, qid, oid){
  if (kind === 'test') {
    const x = tile(S.test.tileId), q = x.form.questions.find(z => z.id === qid), A = S.test.answers;
    if (q.type === 'multi') { const cur = new Set(A[qid] || []); cur.has(oid) ? cur.delete(oid) : cur.add(oid); A[qid] = [...cur]; } else A[qid] = oid;
    const y = scrollY; render(); scrollTo(0, y); return;
  }
  const x = tile(S.cl.tileId), q = x.form.questions.find(z => z.id === qid), r = clRec(x.id, S.cl.active); if (!r) return;
  const A = {...(r.answers || {})};
  if (q.type === 'multi') { const cur = new Set(A[qid] || []); cur.has(oid) ? cur.delete(oid) : cur.add(oid); A[qid] = [...cur]; } else A[qid] = oid;
  r.answers = A; const y = scrollY; render(); scrollTo(0, y);
  await write(() => col('checklists').doc(r.id).update({answers: A}));
}
async function submitTest(btn){
  const st = S.test, x = tile(st.tileId), qs = x.form?.questions || [];
  const miss = qs.filter(q => q.type !== 'note' && (st.answers[q.id] == null || (Array.isArray(st.answers[q.id]) && !st.answers[q.id].length))).length;
  if (miss) { document.getElementById('testErr').innerHTML = `<div class="msg warn">${esc(t('answerAll', {n: miss}))}</div>`; return; }
  btn.disabled = true;
  try {
    // výsledek (body, prošel/neprošel, chybné otázky) počítá databáze, ne prohlížeč
    st.result = await col('tests').doc(x.id + '__' + st.mdt).set({mdt: st.mdt, tileId: x.id, processId: x.processId, lang: S.lang, answers: st.answers});
  } catch(e) {
    btn.disabled = false;
    const msg = e?.code === '23505' ? t('testAlready', {m: st.mdt, d: ''}) : isNetErr(e) ? t('testOffline') : errText(e);
    document.getElementById('testErr').innerHTML = `<div class="msg bad">${esc(msg)}</div>`; return;
  }
  const r = st.result;
  await audit('Test', `${st.mdt} · ${L(proc(x.processId)?.name)} · ${r.score} % · ${r.passed ? 'prošel' : 'neprošel'}`);
  st.step = 'result'; render(); scrollTo(0,0);
}
async function finishChecklist(){
  const x = tile(S.cl.tileId), r = clRec(x.id, S.cl.active);
  S.cl.confirmFinish = false;
  let res;
  try { res = await col('checklists').doc(r.id).update({status: 'done', answers: r.answers}); }
  catch(e) { toast(isNetErr(e) ? t('testOffline') : errText(e)); return render(); }
  await audit('Checklist', `${res.mdt} · ${L(proc(x.processId)?.name)} · ${res.score} % · ${res.passed ? 'splnil' : 'nesplnil'}`);
  if (!res.passed) go('retrain', {k: 'checklists', id: res.id}); else render();
}
async function saveTile(){
  const e = S.edit, orig = tile(e.id);
  for (const q of e.form.questions) { if (q.type === 'yesno' || q.type === 'note') q.options = []; }
  const formChanged = JSON.stringify(orig.form || {}) !== JSON.stringify(e.form);
  const upd = {name: e.name, type: e.type, icon: e.icon || '', pdf: e.pdf || {}, files: (e.files || filesOf(orig)).map(({id, ref, name, lang}) => ({id, ref, name: name.trim() || 'Dokument', lang: lang || 'all'})), form: e.form, version: (orig.version || 1) + (formChanged ? 1 : 0)};
  if (await write(() => col('tiles').doc(e.id).update(upd))) {
    await audit('Úprava obsahu', `${L(proc(e.processId)?.name)} · ${L(e.name)}${formChanged ? ' · formulář v' + upd.version : ''}`);
    toast(t('savedOk')); S.edit = null; go('proc', {id: e.processId});
  }
}

/* inputs (no re-render while typing) */
document.addEventListener('input', (ev) => {
  const el = ev.target;
  if (el.dataset.note) { const q = el.dataset.q;
    if (el.dataset.note === 'test') S.test.answers[q] = el.value;
    else { const r = clRec(S.cl.tileId, S.cl.active); if (r) { r.answers = {...(r.answers||{}), [q]: el.value}; clearTimeout(el._t); el._t = setTimeout(() => write(() => col('checklists').doc(r.id).update({answers: r.answers})), 600); } }
    return; }
  if (el.dataset.ed && S.edit) {
    const e = S.edit, qi = el.dataset.q != null ? Number(el.dataset.q) : null, q = qi != null ? e.form.questions[qi] : null, oi = el.dataset.o != null ? Number(el.dataset.o) : null;
    switch (el.dataset.ed) {
      case 'fname': e.files[Number(el.dataset.f)].name = el.value; break;
      case 'ncs': e.name = {...e.name, cs: el.value}; break; case 'nuk': e.name = {...e.name, uk: el.value}; break;
      case 'thr': e.form.threshold = Math.max(0, Math.min(100, Number(el.value) || 0)); break;
      case 'tcs': q.text = {...q.text, cs: el.value}; break; case 'tuk': q.text = {...q.text, uk: el.value}; break;
      case 'ocs': q.options[oi].text = {...q.options[oi].text, cs: el.value}; break; case 'ouk': q.options[oi].text = {...q.options[oi].text, uk: el.value}; break;
    }
  }
});
document.addEventListener('change', async (ev) => {
  const el = ev.target;
  if (el.dataset.uploadmany !== undefined) {
    const files = [...(el.files || [])]; el.value = ''; if (!files.length) return;
    const msg = document.getElementById('upMsg'), lang = document.getElementById('upLang')?.value || 'all';
    const bad = files.filter(f => f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name));
    if (bad.length) { msg.innerHTML = `<div class="msg bad">${esc(t('onlyPdf'))} (${esc(bad.map(f => f.name).join(', '))})</div>`; return; }
    let done = 0;
    for (const f of files) {
      msg.innerHTML = `<div class="msg info">${esc(t('uploadingN', {a: done + 1, b: files.length}))}</div>`;
      try { const ref = await uploadPdfFile(f, S.edit.id); S.edit.files.push({id: rid(), ref, name: nameFromFile(f.name), lang}); done++; }
      catch(err) { msg.innerHTML = `<div class="msg bad">${esc(t('uploadFail', {e: (err?.message || err?.code || '') + ' · ' + f.name}))}</div>`; render(); return; }
    }
    render(); const m2 = document.getElementById('upMsg'); if (m2) m2.innerHTML = `<div class="msg ok">${esc(t('uploadedN', {n: done}))}</div>`;
    return;
  }
  if (el.dataset.upload) { const f = el.files?.[0]; el.value = ''; if (!f) return; const msg = document.getElementById('upMsg');
    if (f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)) { msg.innerHTML = `<div class="msg bad">${esc(t('onlyPdf'))}</div>`; return; }
    msg.innerHTML = `<div class="msg info">${esc(t('uploading'))}</div>`;
    try { const lang = el.dataset.upload, path = `${S.edit.id}/${lang}-${Date.now()}.pdf`;
      const {error} = await S.sb.storage.from('materials').upload(path, f, {contentType: 'application/pdf', upsert: false});
      if (error) throw error;
      S.edit.pdf = {...(S.edit.pdf || {}), [lang]: path}; render(); }
    catch(e) { msg.innerHTML = `<div class="msg bad">${esc(t('uploadFail', {e: e?.message || e?.code}))}</div>`; } return; }
  if (['f_from','f_to','f_instr','f_proc'].includes(el.id)) { S.flt = {from: f_from.value, to: f_to.value, instr: f_instr.value, proc: f_proc.value}; render(); return; }
  if (el.dataset.pf) { const p = proc(el.dataset.id); const k = el.dataset.pf;
    const upd = k === 'icon' ? {icon: el.value} : {name: {...p.name, [k]: el.value}}; await write(() => col('processes').doc(p.id).update(upd)); return; }
  if (el.dataset.ed && S.edit) {
    const e = S.edit, qi = el.dataset.q != null ? Number(el.dataset.q) : null, q = qi != null ? e.form.questions[qi] : null;
    switch (el.dataset.ed) {
      case 'flang': e.files[Number(el.dataset.f)].lang = el.value; break;
      case 'ttype': e.type = el.value; render(); break; case 'ticon': e.icon = el.value; break;
      case 'type': { const nq = newQ(el.value); q.type = el.value; if ((el.value === 'single' || el.value === 'multi') && !q.options?.length) q.options = nq.options; if (el.value === 'single') { let seen = false; q.options.forEach(o => { if (o.correct && !seen) seen = true; else o.correct = false; }); } render(); break; }
      case 'critical': q.critical = el.checked; break;
      case 'correct': { const oi = Number(el.dataset.o); if (q.type === 'single') q.options.forEach((o, j) => o.correct = j === oi); else q.options[oi].correct = el.checked; break; }
      case 'yn': q.correctYes = el.value === 'yes'; break;
    }
  }
});
document.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const f = ev.target;
  if (f.dataset.scan) { const inp = f.querySelector('input[type=text]'); const v = inp.value; inp.value = ''; return handleScan(f.dataset.scan, v); }
  if (f.id === 'fLogin') {
    const login = li_login.value.trim().toLowerCase(), pw = li_pw.value, btn = f.querySelector('button.primary');
    if (!login || !pw) return;
    btn.disabled = true; li_err.innerHTML = '';
    const email = login.includes('@') ? login : `${login}@${CFG.LOGIN_DOMAIN || 'skoleni.local'}`;
    const {data, error} = await S.sb.auth.signInWithPassword({email, password: pw});
    btn.disabled = false;
    if (error) { li_err.innerHTML = `<div class="msg bad">${esc(/banned/i.test(error.message) ? t('inactive') : isNetErr(error) ? t('offlineLoad') : t('badLogin'))}</div>`; return; }
    S.view = 'home'; await afterLogin(data.user.id); return;
  }
  if (f.id === 'fUser') {
    const u = me(), name = nu_name.value.trim(), login = nu_login.value.trim().toLowerCase(), pw = nu_pw.value;
    const r = u.role === 'admin' ? nu_role.value : 'instruktor', sk = u.role === 'admin' ? (r === 'instruktor' ? nu_sk.value : '') : u.id;
    if (!name || !login || pw.length < 6) { nu_err.innerHTML = `<div class="msg bad">${esc(t('fillAll'))}</div>`; return; }
    if (D().users.some(x => x.login === login)) { nu_err.innerHTML = `<div class="msg bad">${esc(t('loginTaken'))}</div>`; return; }
    const btn = f.querySelector('button.primary'); btn.disabled = true;
    try { await adminUsers({action: 'create', login, name, password: pw, role: r, skolitel_id: sk || null}); toast(t('userCreated')); f.reset(); nu_err.innerHTML = ''; render(); }
    catch(e) { nu_err.innerHTML = `<div class="msg bad">${esc(e.message)}</div>`; }
    btn.disabled = false;
    return;
  }
  if (f.id === 'fProc') {
    const cs = np_cs.value.trim(), uk = np_uk.value.trim() || cs, icon = np_icon.value; if (!cs) return;
    const id = rid(), order = (procs().at(-1)?.order ?? 0) + 1;
    await write(() => col('processes').doc(id).set({name: {cs, uk}, icon, order}));
    const defs = [['skoleni', 'Školení nováčků', 'Навчання новачків'], ['pdf', 'Školicí materiály', 'Навчальні матеріали'], ['test', 'Test', 'Тест'], ['checklist', 'Checklist', 'Чек-лист']];
    let i = 0; for (const [type, ncs, nuk] of defs) { const tid = rid(); i++; await write(() => col('tiles').doc(tid).set({processId: id, type, name: {cs: ncs, uk: nuk}, order: i, pdf: {}, form: {threshold: 80, questions: []}, version: 1})); }
    await audit('Přidání procesu', cs); f.reset(); toast(t('savedOk')); return;
  }
  if (f.id === 'fSettings') { const v = set_pat.value.trim(); try { new RegExp(v); } catch(e) { return toast('Neplatný výraz'); }
    await write(() => col('settings').doc('main').set({...settings(), mdtPattern: v})); await audit('Nastavení', 'Formát osobního čísla: ' + v); toast(t('savedOk')); }
});

/* ===================== Boot ===================== */
if (S.lang) document.documentElement.lang = S.lang === 'uk' ? 'uk' : 'cs';
render();
initApp();
