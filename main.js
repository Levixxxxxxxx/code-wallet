// main.js

// Modules pour la gestion de l'appli et la création de la BrowserWindow native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  // Création de la browser window.
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    minHeight:800,
    minWidth:1100,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

app.isPackaged
  ?mainWindow.loadFile(path.join('index.html'))
  : mainWindow.loadURL("http://localhost:3000");


  mainWindow.webContents.openDevTools()

  
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // Sur macOS il est commun de re-créer une fenêtre  lors 
    // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. Dans ce cas il est courant
// que les applications et barre de menu restents actives jusqu'à ce que l'utilisateur quitte 
// de manière explicite par Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Dans ce fichier vous pouvez inclure le reste du code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.