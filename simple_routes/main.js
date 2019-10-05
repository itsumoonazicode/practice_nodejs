// 経路とレスポンスの対応を定義するマップ
const routeResponseMap = {
	"/info": "<h1>インフォメーション ページ</h1>",
	"/contact": "<h1>コンタクトを取ってください！</h1>"
};

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

				// リクエストの経路がマップで定義されているかチェック
				if(routeResponseMap[request.url]) {
					response.end(routeResponseMap[request.url]);
				} else {
					// デフォルトのHTMLでレスポンス
					response.end("<h1>Welcome Page</h1>");
				}
	
			});

// アプリケーションのサーバーにポート3000を監視させる
app.listen(port);

console.log(`サーバが起動してポート${port}を監視中...`);