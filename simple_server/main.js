const port = 3000,
			http = require("http"),
			httpStatus = require("http-status-codes"),
			app = http.createServer((request, response) => {
				// リクエストを受信したメッセージ
				console.log("リクエストを受け取ったよ！");
				// クライアントに対するレスポンス
				response.writeHead(httpStatus.OK, {
					"Content-Type": "text/html"
				});

				let responseMessage = "<h1>Hello!</h1>";
				response.write(responseMessage);
				response.end();

				// レスポンスを送信したことを示すメッセージ
				console.log(`メッセージを送りました。：${responseMessage}`);
			});

// アプリケーションのサーバーにポート3000を監視させる
app.listen(port);

console.log(`サーバが起動してポート${port}を監視中...`);