const mongoDB = require('mongodb'); // mongoDB호출
const MongoClient = mongoDB.MongoClient // mongoDB호출
const bodyParser= require('body-parser') // 데이터 처리를 위한 라이브러리
const express = require('express')
const app = express()

// css, img와 같은 정적 파일을 불러올 곳 => static 폴더 내
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true})); // 바디파서 사용

// mongoDB 연결
let db;
let port = 3000
let url = 'mongodb+srv://user:user123@puppyduce101.blydixu.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(url)
	.then(client => {
		console.log('mongo connected');
		db = client.db('puppyduce');
			
		// 화면 로드 될 때 보일 것
		app.listen(port, ()=> {
			console.log(`application is listening on port ${port}...`)
		})

	})
	.catch(err => console.log(err));

// url '/'이 서버에 get 요청될 시 index.html 파일 보여주기
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/login.html');
})


// url '/main'으로 post 요청 시 main.html 파일 보여주기
app.post('/main', (req, res) => { 
    res.sendFile(__dirname + '/main.html');
})
app.get('/main', (req, res) => { 
	res.sendFile(__dirname + '/main.html');
})


app.get('/puppy', (req, res) => { 
 	 res.sendFile(__dirname + '/puppy.html');
})

app.get('/calculator', (req, res) => { 
	res.sendFile(__dirname + '/calculator.html');
})

app.get('/d-day', (req, res) => { 
	res.sendFile(__dirname + '/d-day.html');
})

app.get('/vote', (req, res) =>{ 
	res.sendFile(__dirname + '/vote.html');
})


// 투표 값 저장
app.post('/send-vote', (req, res) => { 
	let voteContent = req.body['checked'] ;
	db.collection('lanking').updateOne({name: voteContent}, {$inc: {vote: 1}}, (err, result)=>{
		if(err) return console.log(err)
	})

})

// 데이터베이스의 투표 값 불러오기
app.get('/call-vote', (req, res) => {
	db.collection('lanking').find().toArray()  
	.then(data => {res.json(data)})
	.catch(err => console.log(err));
})


// 로그인 값 저장
app.post('/login', (req, res) => { 
	let loginData = req.body ;
	db.collection('login').insertOne(loginData, (err, result) => {
		if(err) console.log(err)
	})

})