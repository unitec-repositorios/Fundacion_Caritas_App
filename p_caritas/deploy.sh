#para hacer deploy deben tener firebase-tools(npm install -g firebase-tools)
firebase login --reauth
#logear en la cuenta donde se creo el proyecto en firebase(crearlo desde el navegador)
npm run build
firebase use --add
firebase deploy
