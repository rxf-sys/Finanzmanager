# 💰Personal Finance Manager
Ein selbstgehosteter persönlicher Finanzmanager, der deine Konten, Transaktionen und Sparziele organisiert. Die Anwendung läuft lokal auf deinem Rechner oder Raspberry Pi und nutzt Node.js + Express, MongoDB und Bootstrap.

## 🔧 Features
Übersicht über Konten und Salden

Verwaltung von Transaktionen (Einnahmen/Ausgaben)

Sparziele erstellen und Fortschritt tracken

Dashboard mit Statistiken (Einnahmen, Ausgaben, Saldo)

Dark Mode (umschaltbar und speichert im localStorage)

Responsive Design (Mobile & Desktop)

Daten werden lokal gespeichert (optional MongoDB)

## 🚀 Installation & Setup
Hier findest du eine Schritt-für-Schritt-Anleitung, um das Projekt lokal oder auf einem Raspberry Pi auszuführen.

## ✅ Voraussetzungen
Node.js (v18+ empfohlen)

npm (kommt mit Node.js)

MongoDB Community Edition (optional für persistente Speicherung)

Git (optional, wenn du das Projekt klonst)

## Setup

### 1. Repository klonen
```
git clone https://github.com/rxf-sys/Financemanager.git
cd finanzmanager
```
Alternativ kannst du den Code als .zip herunterladen und entpacken.

### 2. Backend installieren (Node.js + Express)
Wechsle ins Backend-Verzeichnis:
```
cd app
```
Abhängigkeiten installieren:
```
npm install
```

### 3. MongoDB installieren (optional, wenn du Mongo nutzen möchtest)

📦 Lokale Installation (PC oder Raspberry Pi)
Ubuntu / Debian / Raspberry Pi OS:
```
sudo apt update
sudo apt install -y mongodb
```
macOS (Homebrew):
```
brew tap mongodb/brew
brew install mongodb-community@6.0
```

➡️ MongoDB starten
```
sudo service mongodb start
```
Prüfe, ob MongoDB läuft:
```
sudo service mongodb status
```
➡️ Alternativ: MongoDB Atlas (Cloud)
https://www.mongodb.com/cloud/atlas

### 4. .env Datei anlegen (Backend)
Lege eine .env Datei im /app Verzeichnis an:
```
touch .env
```
Beispiel-Inhalt für lokale MongoDB:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/finanzmanager
```

### 5. Backend starten
```
npm run dev
```
Der Server läuft jetzt auf:
👉 http://localhost:3001

### 6. Frontend aufrufen
Öffne die index.html im Browser (im /frontend Ordner).

Alternativ kannst du einen lokalen Webserver starten:

Mit Python (ab v3.7)
```
cd public
python3 -m http.server 5500
```
👉 Dann im Browser aufrufen: http://localhost:5500

### ⚙️ Raspberry Pi Setup (Optional)
Falls du das Ganze auf deinem Pi hosten willst:

Node.js installieren:
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```
MongoDB installieren (siehe oben)

Projekt kopieren und starten (siehe Schritte 1-5)

Automatisch starten mit PM2:
```
npm install -g pm2
pm2 start backend/app.js --name finance-backend
pm2 startup
pm2 save
```
### 🔒 Sicherheitshinweis
Wenn du das Projekt öffentlich zugänglich machst, sichere es mit HTTPS, Authentifizierung und Firewalls.

MongoDB sollte nie ohne Authentifizierung online verfügbar sein!

### 🎨 Technologien & Tools
Tool	Beschreibung
Node.js + Express	Backend Server
MongoDB	Datenbank (optional)
Bootstrap 5	Frontend Styling
Chart.js	Diagramme & Visualisierungen
Font Awesome	Icons
📝 ToDos & Ideen
Benutzer-Authentifizierung

Einnahmen- und Ausgaben-Statistiken (nach Kategorie)

Export der Daten als CSV oder JSON

PWA (Progressive Web App) Support

Mobile App mit React Native oder Flutter

### 🤝 Mitmachen
Pull Requests und Ideen sind willkommen!

### 📜 Lizenz
MIT License

### 👨‍💻 Autor
Robin Frank
📧 robinfrank1824@gmail.com

