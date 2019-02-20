function fakeRequest(delay = 2000) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

const NewsList = [
    {
        title: "Звезду «Что? Где? Когда?» обвиняют в подкупе ради выигрыша",
        date: "2019-02-15",
        img: "https://picsum.photos/400/200?000",
        category: 1,
        author: "Автор Авторов"
    },

    {
        title: "В деле Azino 777 появились новые фигуранты",
        date: "2019-02-18",
        img: "https://picsum.photos/400/200?00",
        category: 1,
        author: "Автор Авторов"
    },
    

    {
        "title": "Minga Techade",
        "date": "2019-01-01",
        "img": "https://picsum.photos/400/200?0",
        "category": 5,
        "author": "Clemons Antonia"
    },
    {
        "title": "Dreamia Quiltigen",
        "date": "2019-02-01",
        "img": "https://picsum.photos/400/200?1",
        "category": 2,
        "author": "Sellers Mack"
    },
    {
        "title": "Acium Andershun",
        "date": "2019-02-10",
        "img": "https://picsum.photos/400/200?2",
        "category": 2,
        "author": "Barron Lucy"
    },
    {
        "title": "Snips Zizzle",
        "date": "2019-01-27",
        "img": "https://picsum.photos/400/200?3",
        "category": 4,
        "author": "Combs Turner"
    },
    {
        "title": "Pheast Comverges",
        "date": "2019-01-22",
        "img": "https://picsum.photos/400/200?4",
        "category": 3,
        "author": "Roberson Marguerite"
    },
    {
        "title": "Primordia Animalia",
        "date": "2019-02-05",
        "img": "https://picsum.photos/400/200?5",
        "category": 4,
        "author": "Langley Merrill"
    }


];

const CategoryList = [
    {
        value: 'all',
        title: 'Все',
    },
    {
        value: 2,
        title: 'Россия',
    },
    {
        value: 3,
        title: 'Мир',
    },
    {
        value: 4,
        title: 'Бывший СССР',
    },
    {
        value: 5,
        title: 'Экономика',
    },
    {
        value: 6,
        title: 'Силовые структуры',
    },
    {
        value: 7,
        title: 'Наука и техника',
    }
];

const Api = {

    getInitData(){
        return fakeRequest(100).then( () => { return { list: NewsList, category: CategoryList }} );
    },


    getList(params) {

        console.log('getList:', params);

        let resList = NewsList;

        if(!!params.category){
            resList = resList.filter(function (newsItem) {
                if(params.category === 'all')
                    return true;

                return newsItem.category === params.category;
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
                    console.log('getNewList resList',resList);

                    return resList
                }
            );
    }
};


export default Api;
