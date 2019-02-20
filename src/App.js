import React, {Component, PureComponent} from 'react';

import { Card, Button, Row, Col, Container , ListGroup } from 'react-bootstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Api from "./api/fakeapi.js";

import './App.scss';
import moment from 'moment';


function getFormatDate(dateObject){
    if(!dateObject)
        return '';
    return moment(dateObject).format('YYYY-MM-DD')
}

class NewsItem extends PureComponent {

    render() {
        const {
            img,
            title,
            date,
            author,
        } = this.props;

        return (
            <Card>
                <Card.Header>
                    <div className="d-flex justify-content-between">
                        <div className="text-muted">{date}</div>
                        <div className="text-muted">{author}</div>
                    </div>
                </Card.Header>
                {
                    !!img ? <Card.Img variant="center" src={img}/> : null
                }
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <hr/>
                </Card.Body>
            </Card>
        )
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true, //флаг "Загрузка"

            newsList: [], // Список новостей
            categories: [], // Список категорий

            selectedCategory: 'all', // Текущая выбранная категория
            selectedDate: null // Выбраянная дата
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
        this.clearDate = this.clearDate.bind(this);
    }

    //Обновление списка после именений фильтров
    updateList(){
        Api.getList({
            category: this.state.selectedCategory,
            date: getFormatDate(this.state.selectedDate)
        }).then(
            (list) => {
                this.setState({
                    loading: false,
                    newsList: list
                });
            }
        );
    }

    //Обработчик смены категории
    handleCategoryClick(ev, catValue) {
        if(catValue === this.state.selectedCategory)
            return true;
        this.setState({
                loading: true,
                selectedCategory: catValue
            }, () => this.updateList()
        );
    }

    //Обработчик смены даты
    handleDateChange(date) {
        if(date === this.state.selectedDate)
            return true;

        this.setState({
                loading: true,
                selectedDate: date
            },() => this.updateList()
        );
    }

    //Сброс даты
    clearDate(ev){
        if(!this.state.selectedDate)
            return true;
        this.setState({
                loading: true,
                selectedDate: null
            }, () => this.updateList()
        );
    }

    componentDidMount(){
        //Получаем из API стартовые данные
        Api.getInitData().then(
            (res) => {
                this.setState({
                    loading: false,
                    newsList: res.list,
                    categories: res.category,
                });
            }
        );
    }

    renderHeader(){
        return (
            <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-4 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-auto font-weight-normal">Your logo</h5>
            </header>
        )
    }

    renderFooter(){
        return (
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="font-weight-normal">Your logo</h6>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </footer>
        )
    }

    render() {

        const {
            newsList,
            categories,
            loading
        } = this.state;

        return (
            <div className="b-layout">
                <div className="b-layout-main">

                    {
                        this.renderHeader()
                    }

                    <main>
                        <Container>
                            <Row>
                                <Col lg={3} className="mb-3">
                                    <ListGroup defaultActiveKey="#all">
                                        {
                                            categories.map((category,index) => {
                                                return <ListGroup.Item key={index} action onClick={ (e) => this.handleCategoryClick(e, category.value) } href={"#"+category.value}>{ category.title }</ListGroup.Item>
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                                <Col>
                                    {
                                        !loading ?
                                            (
                                                <div className="b-list">
                                                    {
                                                        (newsList.length > 0) ? newsList.map((el,index2) => {
                                                            return <div key={index2} className="b-list-item">
                                                                <NewsItem img={el.img}
                                                                          title={el.title}
                                                                          date={el.date}
                                                                          author={el.author}
                                                                ></NewsItem>
                                                            </div>
                                                        }) : <div>Ничего не найдено...</div>
                                                    }
                                                </div>
                                            )
                                        :
                                            <div>Загрузка...</div>
                                    }
                                </Col>

                                <Col md="auto" className="mb-3">
                                    <div>{ getFormatDate(this.state.selectedDate) }</div>
                                    <DatePicker
                                        inline
                                        selected={ this.state.selectedDate }
                                        onChange={this.handleDateChange}
                                    />
                                    <div>
                                        <Button variant="link" onClick={this.clearDate}>Сбросить дату</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </main>

                </div>

                <div className="b-layout-footer">
                    {
                        this.renderFooter()
                    }
                </div>
            </div>
        );
    }
}

export default App;
