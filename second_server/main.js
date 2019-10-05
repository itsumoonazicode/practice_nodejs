const port = 3000,
			http = require("http"),
			httpStatus = require("http-status-codes"),
			app = http.createServer(),
			getJSONString = obj => {
				return JSON.stringify(obj, null, 2);
			};

app.on("request", (req, res) => { // リクエストを監視する

	var body = []; // チャンクを格納する配列を作成

	req.on("data", (bodyData) => {
		body.push(bodyData);
	});
	req.on("end", () => { // データ転送の完了時に実行するコード
		body = Buffer.concat(body).toString(); // body配列を文字列テキストに変換
		console.log(`Request body contents: ${body}`);
	});

	console.log(`Method: ${getJSONString(req.method)}`);
	console.log(`URL: ${getJSONString(req.url)}`);
	console.log(`Headers: ${getJSONString(req.headers)}`);

	// レスポンスを準備
	res.writeHead(httpStatus.OK, {
		"Content-Type": "text/html"
	});

	// このメッセージが画面に現れます。
	let resMessage = "<h1>こんにちはん！！！</h1>";
	// HTMLでレスポンスする
	res.end(resMessage);

});

app.listen(port);
console.log(`監視しているポート番号：${port}`);