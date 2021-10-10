import os
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import json

# 0=livre 1=lien 2=nombres de chapitre

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


#j = '{"livre": "'+ book +'", "chapitres":["'+chapters+'"]},'
json = ""

def getChap(title, url, chap_len):
    directory = title
    parent_dir = "C:\\Users\\UTILISATEUR\\Documents\\Bible_app\\livres\\"
    path = os.path.join(parent_dir, directory)
    os.mkdir(path)
    for j in range(int(chap_len)):
        fullText = ""
        driver.get("https://saintebible.com/lsg/"+str(url)+"/"+str(j+1)+".htm")
        c = driver.find_elements_by_class_name("maintext")
        # je recup un chapitre entier (array)
        inc = 1
        for i in c:
            if inc == 1:
                fullText = fullText + str(inc) + " " + i.text
            else:
                fullText = fullText + " " + str(inc) + " " + i.text
            inc = inc + 1
        f = open(path+"/"+str(url)+"-"+str(j+1)+".txt", "a", encoding="utf-8")
        f.write(fullText)
        f.close()

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')

driver = webdriver.Chrome(ChromeDriverManager().install(), chrome_options=options)

#for loop
for x in range( len(bible) ):
    title = str(x+1)+"-"+bible[x][0]
    url = bible[x][1]
    chap_len = bible[x][2]
    try:
        end = getChap(title, url, chap_len)
    except:
        print("Erreur après : " + title)
        
driver.close()
driver.quit()

print("Alléluia! Amen!")