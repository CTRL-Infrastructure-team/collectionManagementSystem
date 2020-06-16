const express = require('express');
const app = express();
// パス指定用モジュール
const path = require('path');

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log('Running at Port 8080...');
});

app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});