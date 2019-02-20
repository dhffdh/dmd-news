function fakeRequest(delay = 2000) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

const CategoryList = [
    {
        value: 'all',
        title: 'Все',
    },
    {
        value: 1,
        title: 'Россия',
    },
    {
        value: 2,
        title: 'Мир',
    },
    {
        value: 3,
        title: 'Бывший СССР',
    },
    {
        value: 4,
        title: 'Экономика',
    },
    {
        value: 5,
        title: 'Силовые структуры',
    },
    {
        value: 6,
        title: 'Наука и техника',
    }
];

const NewsList = [

    {
        title: "В деле Azino 777 появились новые фигуранты",
        date: "2019-02-18",
        img: "https://picsum.photos/400/200?-1",
        categoryId: 1,
        author: "Автор Авторов",
        text: "Nisi duis sit Lorem et non. Aliquip esse eu dolore et. Velit est aute pariatur adipisicing cupidatat consectetur est. Deserunt nostrud veniam minim nulla pariatur eu incididunt pariatur irure nostrud. Excepteur commodo voluptate do fugiat ipsum.",
        preview: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
        comments: [
            {
                author: "Автор Авторов",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:01",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            },
            {
                author: "Автор Авторов 3",
                text: "Pariatur tur cillum nostrud oc tur cillum nostrud oc  tur cillum nostrud oc cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:03",
            },
            {
                author: "Автор Авторов",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:01",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            },
            {
                author: "Автор Авторов 3",
                text: "Pariatur tur cillum nostrud oc tur cillum nostrud oc  tur cillum nostrud oc cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:03",
            }
        ]

    },

    {
        "title": "Geeky Netur",
        "date": "2019-01-22",
        "img": "https://picsum.photos/400/200?0",
        "categoryId": 5,
        "author": "Frazier Nguyen",
        "text": "Consequat cillum laborum cupidatat reprehenderit fugiat nostrud ut fugiat dolore ipsum nisi ullamco. Culpa fugiat reprehenderit eiusmod Lorem tempor enim excepteur consectetur eiusmod est. Incididunt laborum aliqua anim sit nisi qui irure aliqua sunt amet et magna consequat incididunt. Aute consequat ad quis nisi nulla pariatur aute. Velit reprehenderit adipisicing qui esse eiusmod aliqua officia dolore veniam magna excepteur incididunt Lorem.",
        "preview": "Ad magna mollit eiusmod consequat reprehenderit proident esse velit irure in deserunt incididunt nisi.",
        comments: [
            {
                author: "Автор Авторов",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:01",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            }
        ]
    },
    {
        "title": "Conjurica Suremax",
        "date": "2019-01-27",
        "img": "https://picsum.photos/400/200?1",
        "categoryId": 3,
        "author": "Greene Lara",
        "text": "Officia nulla nisi mollit sit mollit commodo id cillum culpa. Elit ipsum laborum ea id veniam nostrud ipsum aute nisi excepteur. Do exercitation labore minim nulla dolore amet mollit dolor. Ex excepteur commodo adipisicing nostrud. Fugiat eu anim dolor est ut elit adipisicing ut voluptate aute sunt exercitation nostrud.",
        "preview": "Exercitation est laborum minim est officia consectetur aute consectetur culpa incididunt quis.",
        comments: [
            {
                author: "Автор Авторов",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:01",
            },
            {
                author: "Автор Авторов 2",
                text: "Pariatur cillum nostrud occaecat sint pariatur dolore sint nisi et ea.",
                datetime: "2019-02-18 12:02",
            }
        ]
    },
    {
        "title": "Zilladyne Parcoe",
        "date": "2019-01-08",
        "img": "https://picsum.photos/400/200?2",
        "categoryId": 6,
        "author": "Burke Kerr",
        "text": "Est adipisicing incididunt voluptate esse excepteur aute magna ad velit Lorem minim officia. Cillum id elit aliquip minim deserunt mollit veniam eu consectetur cupidatat occaecat ipsum in. Culpa ut ad incididunt in sint veniam. Ut consectetur do aute non occaecat. Est irure culpa deserunt irure anim duis ad dolor commodo.",
        "preview": "Veniam voluptate aute consectetur sunt in anim anim veniam adipisicing do duis duis."
    },
    {
        "title": "Mangelica Snips",
        "date": "2019-01-16",
        "img": "https://picsum.photos/400/200?3",
        "categoryId": 1,
        "author": "Patel Edith",
        "text": "Aute adipisicing reprehenderit laborum excepteur fugiat adipisicing sint nostrud proident. Voluptate commodo excepteur eiusmod anim aute commodo aute laborum. Aute consectetur in et fugiat. Reprehenderit consequat non voluptate nostrud aute adipisicing minim eiusmod magna. Non deserunt duis nisi id nisi aute mollit cillum.",
        "preview": "Incididunt mollit fugiat in nisi laborum velit excepteur Lorem exercitation."
    },
    {
        "title": "Pulze Bytrex",
        "date": "2019-02-15",
        "img": "https://picsum.photos/400/200?4",
        "categoryId": 1,
        "author": "Stephenson Sonja",
        "text": "Aliqua dolor labore nisi commodo eiusmod ut proident dolore. Aliquip in aliquip mollit culpa laborum mollit est ex deserunt consequat aliquip. Proident nostrud anim minim consequat in enim est incididunt do amet velit voluptate. Aliquip occaecat id sunt dolor consectetur aute laboris officia est ipsum. Nulla qui laboris nostrud magna anim officia magna non.",
        "preview": "Sunt veniam laboris qui consequat sunt."
    },
    {
        "title": "Exiand Recritube",
        "date": "2019-01-31",
        "img": "https://picsum.photos/400/200?5",
        "categoryId": 1,
        "author": "Curtis Rosario",
        "text": "Officia pariatur eu amet duis nulla mollit aute ad. Tempor nostrud sint labore magna irure nisi minim culpa nisi cupidatat exercitation labore. Voluptate aliquip cillum deserunt tempor ipsum velit laboris. Reprehenderit consectetur culpa sit et aute veniam consequat nisi. Sint duis quis qui magna laborum.",
        "preview": "Exercitation pariatur cupidatat sint Lorem proident dolor fugiat anim aute laborum."
    },
    {
        "title": "Imageflow Oatfarm",
        "date": "2019-01-29",
        "img": "https://picsum.photos/400/200?6",
        "categoryId": 5,
        "author": "Rice Stevens",
        "text": "Non est officia consequat voluptate mollit velit ipsum nulla eiusmod. Dolore irure Lorem culpa laborum deserunt ex culpa cupidatat eiusmod esse cillum sunt labore. Elit cupidatat veniam anim sunt ad exercitation cillum laboris deserunt voluptate eu tempor laborum. Eu Lorem voluptate enim laborum esse proident esse fugiat aliquip cupidatat deserunt. Duis proident labore reprehenderit proident deserunt irure sint irure dolore reprehenderit aliquip amet incididunt sunt.",
        "preview": "Ut id ea nisi ullamco enim amet."
    },
    {
        "title": "Comtent Lyrichord",
        "date": "2019-01-28",
        "img": "https://picsum.photos/400/200?7",
        "categoryId": 5,
        "author": "Trevino Cobb",
        "text": "Ea consectetur quis aute exercitation. Eiusmod sint ea laboris anim elit nostrud quis quis adipisicing minim ut mollit. Mollit est anim quis ex sint eiusmod dolor aute magna deserunt cillum ut ut. Eiusmod elit nostrud pariatur eu culpa reprehenderit magna ullamco Lorem quis proident id. Id laboris pariatur laboris eiusmod laboris.",
        "preview": "Adipisicing cupidatat laborum sint veniam minim incididunt ex fugiat sit adipisicing proident deserunt."
    },
    {
        "title": "Billmed Lotron",
        "date": "2019-02-03",
        "img": "https://picsum.photos/400/200?8",
        "categoryId": 6,
        "author": "Gomez Sharon",
        "text": "Occaecat in ut sint esse elit aute non commodo ad sunt nulla aliqua irure. Ad voluptate cupidatat veniam ipsum magna. Nostrud sint ad esse voluptate consequat quis sint consequat et. Ea sunt aute amet eu veniam culpa proident tempor incididunt occaecat tempor ullamco. Ullamco tempor eiusmod do fugiat.",
        "preview": "Aute eu dolore dolor adipisicing officia."
    },
    {
        "title": "Orbixtar Gynko",
        "date": "2019-01-23",
        "img": "https://picsum.photos/400/200?9",
        "categoryId": 5,
        "author": "Randall Cathryn",
        "text": "Occaecat et aliqua laborum quis id veniam. Sunt officia do cillum cupidatat officia ad laborum do ipsum ipsum velit. Ea esse consequat irure tempor. Incididunt elit velit in ipsum. Officia dolor aute irure id eiusmod.",
        "preview": "Aliquip tempor amet do dolor consectetur aute tempor."
    },
    {
        "title": "Lunchpod Quizka",
        "date": "2019-01-16",
        "img": "https://picsum.photos/400/200?10",
        "categoryId": 1,
        "author": "Stuart Shawna",
        "text": "Dolor nisi nisi sint do commodo pariatur nulla velit laborum dolor. Magna consectetur incididunt qui consequat mollit excepteur exercitation duis irure incididunt anim ad qui exercitation. Commodo voluptate pariatur Lorem reprehenderit anim incididunt ullamco reprehenderit aute ullamco culpa esse. Laborum deserunt veniam nisi nisi. Dolore magna ex ea duis officia anim.",
        "preview": "Et minim velit et eiusmod proident in labore elit excepteur elit laboris est."
    },
    {
        "title": "Boilcat Daisu",
        "date": "2019-01-08",
        "img": "https://picsum.photos/400/200?11",
        "categoryId": 6,
        "author": "Nunez Terri",
        "text": "Nulla sint commodo ex nulla. Id nisi mollit anim Lorem dolor Lorem nulla eiusmod non ipsum sunt. Officia veniam reprehenderit consectetur do sunt nulla adipisicing eu velit. Labore incididunt enim sit consequat. Excepteur nisi nostrud ex veniam sint velit do pariatur.",
        "preview": "Non esse minim excepteur ut occaecat Lorem et nostrud dolore."
    },
    {
        "title": "Prowaste Aquafire",
        "date": "2019-01-23",
        "img": "https://picsum.photos/400/200?12",
        "categoryId": 5,
        "author": "Watson Lorie",
        "text": "Proident nulla laborum enim fugiat eiusmod reprehenderit pariatur adipisicing ullamco eu culpa. Est fugiat in pariatur deserunt elit sint nulla irure et ea irure eiusmod amet laborum. Esse dolore sit velit ad sit velit elit eu aute culpa. Cupidatat excepteur dolore eu pariatur Lorem magna ut dolore officia veniam labore. Veniam est veniam ea cillum ad minim sit aute velit consectetur consectetur Lorem dolore.",
        "preview": "Incididunt sunt deserunt laborum minim non aute enim sit laborum eiusmod officia anim amet."
    },
    {
        "title": "Maroptic Moltonic",
        "date": "2019-01-03",
        "img": "https://picsum.photos/400/200?13",
        "categoryId": 5,
        "author": "Cantu Mcbride",
        "text": "Qui non quis sunt qui minim proident dolore cupidatat veniam minim incididunt nulla aute velit. Lorem qui elit deserunt aliqua consectetur exercitation occaecat minim. In velit ea occaecat sint aliquip sit sint incididunt. Lorem et laboris anim veniam velit veniam ullamco quis incididunt cillum do cillum. Aliqua minim elit aliqua consectetur aute eu ea.",
        "preview": "Esse ullamco dolore excepteur culpa deserunt."
    },
    {
        "title": "Bedder Flumbo",
        "date": "2019-01-12",
        "img": "https://picsum.photos/400/200?14",
        "categoryId": 5,
        "author": "Carter Langley",
        "text": "Aute ullamco aliquip anim sit. Id duis tempor elit cupidatat reprehenderit exercitation aliqua laboris mollit ullamco velit velit et occaecat. Fugiat laboris occaecat aliquip laborum non. Minim Lorem consectetur dolor incididunt non cupidatat. Proident officia Lorem commodo ad commodo irure deserunt laboris sit elit id nostrud.",
        "preview": "Veniam mollit quis irure ipsum minim velit Lorem sint laborum et occaecat sunt eu incididunt."
    },
    {
        "title": "Enaut Temorak",
        "date": "2019-01-13",
        "img": "https://picsum.photos/400/200?15",
        "categoryId": 2,
        "author": "Livingston Alicia",
        "text": "Consequat deserunt anim adipisicing dolor et laboris est. Ut ipsum anim laboris sit commodo aute incididunt aute eiusmod officia. Occaecat do nulla qui excepteur qui nisi reprehenderit officia reprehenderit qui. Officia dolore nisi labore magna aliqua. Elit elit aliquip proident amet laborum id velit labore velit nostrud excepteur sint.",
        "preview": "Amet ipsum officia veniam et aute ad ad aliqua eu ad consequat aute cupidatat."
    },
    {
        "title": "Schoolio Opticom",
        "date": "2019-02-10",
        "img": "https://picsum.photos/400/200?16",
        "categoryId": 2,
        "author": "Delacruz Pamela",
        "text": "Anim elit aliquip do labore nulla. Dolor officia esse aute dolore eiusmod qui sint. In ipsum laboris esse mollit laborum cupidatat quis aliqua velit deserunt voluptate. Deserunt enim ut ex aliqua incididunt commodo dolor ad do deserunt. Dolore fugiat quis nisi ullamco.",
        "preview": "Ea deserunt deserunt do cupidatat voluptate enim."
    },
    {
        "title": "Slambda Premiant",
        "date": "2019-02-16",
        "img": "https://picsum.photos/400/200?17",
        "categoryId": 5,
        "author": "Ingram Hunter",
        "text": "Mollit voluptate sint et aliquip minim dolor labore. Ex cillum laborum ut esse consectetur et velit. Tempor ex ullamco eiusmod ex cillum pariatur proident magna eu ad est do nisi. Et qui tempor sit esse amet in tempor esse non esse. Dolor ipsum anim laborum dolor laborum amet sit.",
        "preview": "Eiusmod culpa commodo in elit nostrud."
    },
    {
        "title": "Avenetro Greeker",
        "date": "2019-02-05",
        "img": "https://picsum.photos/400/200?18",
        "categoryId": 2,
        "author": "Daniels Madelyn",
        "text": "Aliqua laboris pariatur Lorem proident elit mollit. Nisi culpa culpa culpa qui ipsum laboris aute dolor reprehenderit do. Id ut incididunt in exercitation irure. Minim occaecat quis id adipisicing anim culpa mollit ullamco aliquip est minim fugiat laboris sunt. Ut in cupidatat ut consequat.",
        "preview": "Id tempor dolor consequat Lorem."
    },
    {
        "title": "Cablam Comtours",
        "date": "2019-02-01",
        "img": "https://picsum.photos/400/200?19",
        "categoryId": 4,
        "author": "Mcneil Estes",
        "text": "Consequat incididunt amet laboris ad. Minim culpa ullamco proident do pariatur pariatur excepteur ipsum in laboris. Pariatur aute exercitation ad anim. Non consectetur eu incididunt do cupidatat eiusmod qui sit in est ea. Dolor amet consequat dolore elit voluptate excepteur voluptate.",
        "preview": "Mollit ipsum sunt sint ut aliqua veniam do in."
    }

];


function fullInfoList(NewsList) {
    return NewsList.map((el,index)=>{
        el.category = CategoryList[el.categoryId].title;
        return el;
    });
}


const Api = {

    getInitData(){
        //console.log(fullInfoList(NewsList));
        return fakeRequest(100).then( () => { return { list: fullInfoList(NewsList), categories: CategoryList }} );
    },

    getList(params) {

        //console.log('getList:', params);

        let resList = NewsList;

        if(!!params.categoryId){
            resList = resList.filter(function (newsItem) {
                if(params.categoryId === 'all')
                    return true;

                return newsItem.categoryId === params.categoryId;
            });
        }

        if(!!params.date){
            resList = resList.filter(function (newsItem) {
                if(params.date === '')
                    return true;
                return newsItem.date === params.date;
            });
        }


        return fakeRequest().then(
            () => {

                    return fullInfoList(resList)
                }
            );
    }
};


export default Api;
