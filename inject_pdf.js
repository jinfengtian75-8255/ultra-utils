const fs = require('fs');
const content = fs.readFileSync('src/lib/translations.ts', 'utf8');

const plPdfMaster = `    pdfMaster: {
        title: 'PDF Mistrz PRO',
            desc: 'Najlepszy zestaw narz\u0119dzi PDF. \u0141\u0105cz, dziel, konwertuj i zabezpieczaj swoje pliki z \u0142atwo\u015Bci\u0105.',
                merge: 'Po\u0142\u0105cz pliki',
                    split: 'Podziel strony',
                        toImage: 'Konwertuj na obraz',
                            rotate: 'Obr\u00f3\u0107 strony',
                                protect: 'Ustaw has\u0142o',
                                    uploadMsg: 'Przeci\u0105gnij pliki PDF tutaj lub kliknij, aby przegl\u0105da\u0107',
                                        filesSelected: 'wybrane pliki',
                                            mergeNow: 'Utw\u00f3rz po\u0142\u0105czony PDF',
                                                splitNow: 'Podziel wszystkie strony',
                                                    rotateNow: 'Zastosuj obr\u00f3t o 90\u00b0',
                                                        protectNow: 'Szyfruj dokument',
                                                            downloadMerged: 'Pobierz wynik',
                                                                downloadSplit: 'Zapisz wszystko (ZIP)',
                                                                    addMore: 'Dodaj wi\u0119cej',
                                                                        clear: 'Wyczy\u015B\u0107 list\u0119',
                                                                            pageRange: 'Zakres stron (np. 1-5, 10)',
                                                                                password: 'Wprowad\u017A has\u0142o',
                                                                                    options: 'Opcje zaawansowane',
                                                                                        processingMsg: 'Przetwarzanie PDF silnikiem o wysokiej wydajno\u015Bci...',
                                                                                            successMsg: 'Zadanie zako\u0144czone pomy\u015Blnie!',
                                                                                                guide: {
            title: 'Mistrzowski Przewodnik PDF',
                subtitle: 'Zarz\u0105dzaj plikami PDF i edytuj je jak profesjonalista',
                    sections: [
                        {
                            title: '1. Zaawansowane \u0141\u0105czenie i Optymalizacja',
                            content: '\u0141\u0105czenie pofragmentowanych dokument\u00f3w jest kluczowe. UltraUtils pozwala \u0142\u0105czy\u0107 wiele plik\u00f3w przy zachowaniu w\u0142asnej kolejno\u015Bci.'
                        },
                        {
                            title: '2. Precyzyjne Dzielenie i Ekstrakcja',
                            content: 'Potrzebujesz konkretnych rozdzia\u0142\u00f3w? U\u017Cyj funkcji dzielenia, aby oddzieli\u0107 ka\u017Cd\u0105 stron\u0119 lub wybra\u0107 dok\u0142adne zakresy.'
                        },
                        {
                            title: '3. Bezpiecze\u0144stwo: Szyfrowanie i Ochrona',
                            content: 'Chro\u0144 swoje poufne umowy za pomoc\u0105 profesjonalnych hase\u0142. Szyfrowanie odbywa si\u0119 w Twojej przegl\u0105darce, gwarantuj\u0105c prywatno\u015B\u0107.'
                        },
                        {
                            title: '4. Ca\u0142kowita Prywatno\u015B\u0107: 100% Przetwarzanie Lokalne',
                            content: 'Nie wysy\u0142amy Twoich plik\u00f3w na \u017Cadny serwer. Wszystko dzieje si\u0119 lokalnie na Twoim w\u0142asnym urz\u0105dzeniu.'
                        }
                    ],
                        faq: [
                            { q: 'Czy istnieje limit plik\u00f3w do po\u0142\u0105czenia?', a: 'Technicznie nie, ale zalecamy mniej ni\u017C 50 plik\u00f3w lub 100 MB dla najlepszej wydajno\u015Bci.' },
                            { q: 'Czy mog\u0119 wyodr\u0119bni\u0107 konkretne strony?', a: 'Tak! W zak\u0142adce Dzielenie wpisz zakres taki jak "1-5, 10", aby pobra\u0107 tylko te strony.' },
                            { q: 'Czy szyfrowanie has\u0142em jest bezpieczne?', a: 'Tak, u\u017Cywamy standardu 128-bitowego AES. Poniewa\u017C jest to lokalne, nikt inny nie zobaczy Twojego has\u0142a.' },
                            { q: 'Gdzie s\u0105 zapisywane moje pliki?', a: 'Zapisuj\u0105 si\u0119 bezpo\u015Brednio w domy\u015Blnym folderze pobierania po zako\u0144czeniu procesu.' }
                        ]
        }
    },`;

const dePdfMaster = `    pdfMaster: {
        title: 'PDF Meister PRO',
            desc: 'Das ultimative PDF-Toolkit. Dateien mit Leichtigkeit zusammenf\u00fchren, teilen, konvertieren und sch\u00fctzen.',
                merge: 'Dateien zusammenf\u00fchren',
                    split: 'Seiten teilen',
                        toImage: 'In Bild konvertieren',
                            rotate: 'Seiten drehen',
                                protect: 'Passwort festlegen',
                                    uploadMsg: 'PDF-Dateien hierher ziehen oder zum Durchsuchen klicken',
                                        filesSelected: 'Dateien ausgew\u00e4hlt',
                                            mergeNow: 'Zusammengef\u00fchrte PDF erstellen',
                                                splitNow: 'Alle Seiten teilen',
                                                    rotateNow: '90\u00b0-Drehung anwenden',
                                                        protectNow: 'Dokument verschl\u00fcsseln',
                                                            downloadMerged: 'Ergebnis herunterladen',
                                                                downloadSplit: 'Alles speichern (ZIP)',
                                                                    addMore: 'Mehr hinzuf\u00fcgen',
                                                                        clear: 'Liste leeren',
                                                                            pageRange: 'Seitenbereich (z.B. 1-5, 10)',
                                                                                password: 'Passwort eingeben',
                                                                                    options: 'Erweiterte Optionen',
                                                                                        processingMsg: 'PDF wird mit Hochleistungsmotor verarbeitet...',
                                                                                            successMsg: 'Aufgabe erfolgreich abgeschlossen!',
                                                                                                guide: {
            title: 'PDF-Meister-Leitfaden',
                subtitle: 'PDF-Dateien verwalten und bearbeiten wie ein Profi',
                    sections: [
                        {
                            title: '1. Fortgeschrittenes Zusammenf\u00fchren',
                            content: 'Das Kombinieren fragmentierter Dokumente ist der Schl\u00fcssel. UltraUtils erm\u00f6glicht das Zusammenf\u00fchren mehrerer Dateien bei Beibehaltung der benutzerdefinierten Reihenfolge.'
                        },
                        {
                            title: '2. Pr\u00e4zises Teilen und Extrahieren',
                            content: 'Ben\u00f6tigen Sie bestimmte Kapitel? Verwenden Sie die Teilungsfunktion, um jede Seite zu trennen oder exakte Bereiche auszuw\u00e4hlen.'
                        },
                        {
                            title: '3. Sicherheit: Verschl\u00fcsselung und Schutz',
                            content: 'Sch\u00fctzen Sie Ihre sensiblen Vertr\u00e4ge mit professionellen Passw\u00f6rtern. Die Verschl\u00fcsselung erfolgt in Ihrem Browser und garantiert Privatsph\u00e4re.'
                        },
                        {
                            title: '4. Vollst\u00e4ndige Privatsph\u00e4re: 100% lokale Verarbeitung',
                            content: 'Wir senden Ihre Dateien an keinen Server. Alles geschieht lokal auf Ihrem eigenen Ger\u00e4t.'
                        }
                    ],
                        faq: [
                            { q: 'Gibt es ein Limit f\u00fcr das Zusammenf\u00fchren?', a: 'Technisch gesehen nein, aber wir empfehlen weniger als 50 Dateien oder 100 MB f\u00fcr die beste Leistung.' },
                            { q: 'Kann ich bestimmte Seiten extrahieren?', a: 'Ja! G\u00fcben Sie im Tab "Teilen" einen Bereich wie "1-5, 10" ein, um nur diese Seiten zu erhalten.' },
                            { q: 'Ist die Passwortverschl\u00fcsselung sicher?', a: 'Ja, wir verwenden den standardm\u00e4\u0177igen 128-Bit-AES. Da es lokal ist, wird niemand sonst Ihr Passwort sehen.' },
                            { q: 'Wo werden meine Dateien gespeichert?', a: 'Sie werden nach dem Vorgang direkt in Ihrem Standard-Download-Ordner gespeichert.' }
                        ]
        }
    },`;

let newContent = content;

// Inject pdfMaster into pl block (at the end)
const plStart = newContent.indexOf('pl: {');
const plEnd = newContent.lastIndexOf('}'); // Very last } in file usually
if (plStart !== -1 && !newContent.includes('pl: {', plStart + 10)) {
    // Inject before houseAds inside pl
    const houseAdsStart = newContent.indexOf('houseAds:', plStart);
    if (houseAdsStart !== -1) {
        newContent = newContent.slice(0, houseAdsStart) + plPdfMaster + '\n' + newContent.slice(houseAdsStart);
    }
}

// Inject pdfMaster into de block
const deStart = newContent.indexOf('de: {');
const plStartUpdated = newContent.indexOf('pl: {');
if (deStart !== -1) {
    const deHouseAdsStart = newContent.indexOf('houseAds:', deStart);
    if (deHouseAdsStart !== -1 && deHouseAdsStart < plStartUpdated) {
        newContent = newContent.slice(0, deHouseAdsStart) + dePdfMaster + '\n' + newContent.slice(deHouseAdsStart);
    }
}

fs.writeFileSync('src/lib/translations.ts', newContent);
console.log('Successfully injected missing pdfMaster blocks');
