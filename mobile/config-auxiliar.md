Cria projeto mobile com Expo
$npx create-expo-app my-app

Transformando projeto para TypeScript , muda extenção App.tsx
cria arquivo de configuração do TypeScript "tsconfig.json" e rodar o projeto para configurar este arquivo
$npx expo start

Instala biblioteca Native Base
$npm install native-base

Instalando pacote para utilizar svg no projeto
$npx expo install react-native-svg@12.1.1

Instalando pacote para utilizar svg como component
$npm i react-native-svg-transformer
após instalação criar arquivo "metro.config.js"
https://github.com/kristerkari/react-native-svg-transformer

Instalando pacote para utilizar status bar
$npx expo install react-native-safe-area-context@3.3.2

Instalando pacote de fonts
$npx expo install expo-font @expo-google-fonts/roboto

utilizamos a lib de icons @expo/vector-icons
https://oblador.github.io/react-native-vector-icons/

instalando OAuth para fazer login com o google
instalando 1ª lib expo-auth-session
$npx expo install expo-auth-session expo-random
2ª lib expo-web-browser para cuidar do processo de transição entro o app e o browser para authenticação
$npx expo install expo-web-browser

utilizando phosphor-react-native
https://phosphoricons.com/
https://github.com/duongdev/phosphor-react-native
$npm install --save phosphor-react-native

implementando react-navigation
https://reactnavigation.org/docs/getting-started
$npm install @react-navigation/native
$npx expo install react-native-screens react-native-safe-area-context
$npm install @react-navigation/bottom-tabs

json formater e validator para ajudar na tipagem do TypeScript
https://jsonformatter.curiousconcept.com/

instalando country-list para pegar nome de países através do iso-code
$npm install country-list
utilizamos a biblioteca react-native-country-flag para mostras as flags dos países com base no iso-code de cada país
$npm install --save react-native-country-flag

utilizamos a lib Dary.js para formatar a data do game
$npm install dayjs

instalando uma lib para que o react native possa reconhecer variáveis de ambiente .env
$npm i dotenv babel-plugin-inline-dotenv  
configurando dotenv no arquivo babel.config.js
plugin: ['inline-dotenv']
