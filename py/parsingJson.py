
bible = [
    ["Genèse", "genesis", "50"],
    ["Exode", "exodus", "40"],
    ["Levitique", "leviticus", "27"],
    ["Nombres", "numbers", "36"],
    ["Deutéronome", "deuteronomy", "34"],
    ["Josué", "joshua", "24"],
    ["Juges", "judges", "21"],
    ["Ruth", "ruth", "4"],
    ["1 Samuel", "1_samuel", "31"],
    ["2 Samuel", "2_samuel", "24"],
    ["1 Rois", "1_kings", "22"],
    ["2 Rois", "2_kings", "25"],
    ["1 Chroniques", "1_chronicles", "29"],
    ["2 Chroniques", "2_chronicles", "36"],
    ["Esdras", "ezra", "10"],
    ["Nehemie", "nehemiah", "13"],
    ["Esther", "esther", "10"],
    ["Job", "job", "42"],
    ["Psaumes", "psalms", "150"],
    ["Proverbes", "proverbs", "31"],
    ["Ecclésiaste", "ecclesiastes", "12"],
    ["Cantiques des cantiques", "songs", "8"],
    ["Esaïe", "isaiah" , "66"],
    ["Jérémie", "jeremiah", "52"],
    ["Lamentations de Jérémie", "lamentations", "5"],
    ["Ezéchiel", "ezekiel", "48"],
    ["Daniel", "daniel", "12"],
    ["Osée", "hosea", "14"],
    ["Joël", "joel", "3"],
    ["Amos", "amos", "9"],
    ["Abdias", "obadiah", "1"],
    ["Jonas", "jonah", "4"],
    ["Michée", "micah", "7"],
    ["Nahum", "nahum", "3"],
    ["Habacuc", "habakkuk", "3"],
    ["Sophonie", "zephaniah", "3"],
    ["Aggée", "haggai", "2"],
    ["Zacharie", "zechariah", "14"],
    ["Malachie", "malachi", "4"],
    ["Matthieu", "matthew", "28"],
    ["Marc", "mark", "16"],
    ["Luc", "luke", "24"],
    ["Jean", "john", "21"],
    ["Actes des apôtres", "acts", "28"],
    ["Romains", "romans", "16"],
    ["1 Corinthiens", "1_corinthians", "16"],
    ["2 Corinthiens", "2_corinthians", "13"],
    ["Galates", "galatians", "6"],
    ["Ephesiens", "ephesians", "6"],
    ["Philippiens", "philippians", "4"],
    ["Colossiens", "colossians", "4"],
    ["1 Thessaloniciens", "1_thessalonicians", "5"],
    ["2 Thessaloniciens", "2_thessalonicians", "3"],
    ["1 Timothée", "1_timothy", "6"],
    ["2 Timothée", "2_timothy", "4"],
    ["Tite", "titus", "3"],
    ["Philémon", "philemon", "1"],
    ["Hébreux", "hebrews", "13"],
    ["Jacques", "james", "5"],
    ["1 Pierre", "1_peter", "5"],
    ["2 Pierre", "2_peter", "3"],
    ["1 Jean", "1_john", "5"],
    ["2 Jean", "2_john", "1"],
    ["3 Jean", "3_john", "1"],
    ["Jude", "jude", "1"],
    ["Apocalypse", "revelation", "22"]
]

directory= "C:\\Users\\UTILISATEUR\\Documents\\Bible_app\\app\\src\\data\\"
json = ""

def parsing(book, filePath, chap_len):
    filePaths = []
    for i in range(chap_len):
        filePaths.append(filePath+"-"+str(i+1)+".txt")
    j = '{"livre": "'+ book +'", "chapitres":'+ str(filePaths) +'},\n'
    return j

for x in range(len(bible)):

    book = bible[x][0]
    filePath = bible[x][1]
    print(book)
    chap_len = bible[x][2]
    json = json + parsing(book, filePath, int(chap_len))
f = open(directory+"bible.json", "w", encoding="utf-8")
json = json.replace("\'", "\"")
f.write("["+json+"]")
f.close()
print("FINI")
