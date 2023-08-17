window.addEventListener('load', function () {
    // 강아지 table 생성
    makePuppies();
    // 디저트 table 생성
    makeDeserts();
    // 영화 table 생성
    makeMovies();
});
// 강아지 table 생성
var makePuppies = function () {
    // html요소
    var tbody = document.querySelector('.pupies tbody');
    var datas = [
        { engName: 'arong',
            puppyName: '홍아롱',
            type: '푸들',
            age: 17,
            personality: ['힘을 숨긴 어르신 (힘숨어)',
                '지금은 귀가 안들림 ㅠㅠ',
                '귀가 들리던 시절에는 정말 사람만큼 똑똑했음',
                '귀찮게 하면 사진과 같은 표정을 지음..'],
        },
        { engName: 'inza',
            puppyName: '박인자',
            type: '포메라니안',
            age: 15,
            personality: ['먹보',
                '오직 먹을 때만 움직이는 너구리<',
                '비염이 있는지 항상 꿀꿀거림',
                '사람 이름으로 지어야 오래 산다며 할머니가 작명해줌'],
        },
        { engName: 'nuri',
            puppyName: '강누리',
            type: '말티즈 + 포메라니안',
            age: 17,
            personality: ['우리 집 서열 1위 (사람 포함)',
                '마리 중 성격이 제일 더러움',
                '하지만 귀여운 외모때문에 이쁨을 독차지 함',
                '특히나 할머니의 사랑을 듬뿍 받아 할머니의 8째 딸이 됨'],
        },
    ];
    datas.forEach(function (e) {
        tbody.innerHTML += "<tr>\n                            <td><img src=\"img/puppy/".concat(e['engName'], "1.jpg\" alt=\"").concat(e['puppyName'], " \uC0AC\uC9C4\"></td>\n                            <td>").concat(e['puppyName'], "</td>\n                            <td>").concat(e['type'], "</td>\n                            <td>").concat(e['age'], "\uC138</td>\n                            <td>\n                                <ul>\n                                    <li>").concat(e['personality'][0], "</li>\n                                    <li>").concat(e['personality'][1], "</li>\n                                    <li>").concat(e['personality'][2], "</li>\n                                    <li>").concat(e['personality'][3], "</li>\n                                </ul>\n                            </td>\n                            <td><a href=\"/puppy?name=").concat(e['engName'], "\">\uC0AC\uC9C4 \uB354 \uBCFC\uB798!!</a></td>\n                        </tr>");
    });
};
// 디저트 table 생성
var makeDeserts = function () {
    var tbody = document.querySelector('.deserts tbody');
    var datas = [
        { store: '연남동 더 파이샵',
            foodName: '바닐라 푸딩 파이',
            price: 8500
        },
        { store: '마포구 목화씨라운지',
            foodName: '커스타드 푸딩',
            price: 6500
        },
        { store: '촌 프랑제리 피어',
            foodName: '사과빵',
            price: 3900
        },
        { store: '아현 오르랔 베이커리',
            foodName: '크러핀',
            price: 4600
        },
        { store: '서울숲 서울앵무새',
            foodName: '밀크롤',
            price: 6200
        },
    ];
    datas.forEach(function (e, idx) {
        tbody.innerHTML += "<tr>\n                                <td>".concat(e['store'], "</td>\n                                <td>").concat(e['foodName'], "</td>\n                                <td>\u20A9").concat(e['price'], "</td>\n                                <td><img src=\"img/desert/").concat((idx + 1), ".jpg\" alt=\"").concat(e['store'], "\"></td>\n                            </tr>");
    });
};
// 영화 table 생성
var makeMovies = function () {
    var tbody = document.querySelector('.movies tbody');
    var datas = [
        { title: '이터널 선샤인',
            year: 2005,
            description: '조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진 연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져 갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에 각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이 아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.' },
        { title: '빅 피쉬',
            year: 2004,
            description: '“때로는 초라한 진실보다 환상적인 거짓이 더 나을 수도 있단다. 더구나 그것이 사랑에 의한 것이라면!” 운명을 보는 마녀, 집채만 한 거인, 시간이 멈춘 유령마을까지… 믿을 수 없는 모험으로 가득한 에드워드 블룸의 이야기. 당신도 믿나요? 아버지가 위독하다는 소식에 고향을 찾은 윌. 죽음을 목전에 두고도 다 큰 아들에게 허풍 가득한 무용담을 늘어놓는 아버지. 그의 레퍼토리는 언제나 기상천외한 모험과 단 하나의 로맨스로 이어진다. 이제, 믿기 힘든 이야기 속에 가려진 아버지의 진짜 모습을 마주하는데…' },
        { title: '노트북',
            year: 2004,
            description: '17살, ‘노아’는 밝고 순수한 ‘앨리’를 보고 첫눈에 반한다. 빠른 속도로 서로에게 빠져드는 둘. 그러나 이들 앞에 놓인 장벽에 막혀 이별하게 된다. 24살, ‘앨리’는 우연히 신문에서 ‘노아’의 소식을 접하고 잊을 수 없는 첫사랑 앞에서 다시 한 번 선택의 기로에 서게 되는데… 열일곱의 설렘, 스물넷의 아픈 기억, 그리고 마지막까지… 한 사람을 지극히 사랑했으니 내 인생은 성공한 인생입니다' },
        { title: '엔칸토',
            year: 2021,
            description: '콜롬비아의 깊은 산 속, 놀라운 마법과 활기찬 매력이 넘치는 세계 ‘엔칸토’. 그 곳에는 특별한 능력을 지닌 마드리갈 패밀리가 살고 있다. ‘엔칸토’의 마법 덕분에 초인적 힘, 치유하는 힘 등 저마다 특별한 능력을 가지고 태어난 마드리갈 패밀리. 하지만 ‘미라벨’은 가족 중 유일하게 아무런 능력이 없다. 어느 날, ‘엔칸토’를 둘러싼 마법의 힘이 위험에 처하자 ‘미라벨’은 유일하게 평범한 자신이 특별한 이 가족의 마지막 희망일지 모른다고 생각하는데.. 평범한 ‘미라벨’은 과연 기적을 만들 수 있을까? 전 세대 관객들에게 따뜻한 웃음과 감동을 선사할 마법 같은 영화! 디즈니의 매직이 또 한 번 시작된다' },
    ];
    datas.forEach(function (e, idx) {
        tbody.innerHTML += "<tr>\n                                <td>".concat(e['title'], "</td>\n                                <td><img src=\"img/movie/").concat((idx + 1), ".jpg\" alt=\"").concat(e['title'], "\"></td>\n                                <td>").concat(e['year'], "</td>\n                                <td>\u20A9").concat(e['description'], "</td>\n                            </tr>");
    });
};
