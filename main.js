// main.js
const electron = require('electron')  // 일렉트론 모듈
const app = electron.app                // 앱 생명주기 조작 모듈
const BrowserWindow = electron.BrowserWindow  // 네이티브 브라우저 창을 만드는 모듈.

// 모든창이 닫혔을때의 이벤트
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// 일렉트론 초기화완료 및 브라우저 생성 준비완료 이벤트
app.on('ready', function() {

  // 새로운 브라우저 창을 생성
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // 그리고 현재 디렉터리의 index.html을 로드합니다.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // 선언한 윈도우창 닫기 이벤트
  mainWindow.on('closed', function() {
    // 윈도우 객체의 참조를 삭제합니다 보통 멀티 윈도우 지원을 위해
    // 윈도우 객체를 배열에 저장하는 경우가 있는데 이 경우
    // 해당하는 모든 윈도우 객체의 참조를 삭제해 주어야 합니다.
    mainWindow = null;
  });

});