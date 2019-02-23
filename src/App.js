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

class NewsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggled: false, //флаг развернут
        };
        this.toggleFullText = this.toggleFullText.bind(this);
    }

    toggleFullText(ev){
        ev.preventDefault();

        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        const {
            img,
            title,
            date,
            author,
            category,
            preview,
            text,
            comments,
        } = this.props.info;

        const { toggled } = this.state;

        return (
            <Card className="b-item">
                {
                    !!img ? <Card.Img variant="top" src={img}/> : null
                }
                <Card.Body>
                    <div className="b-item__meta">
                        <div className="b-item__author">{category} / {date} / {author}</div>
                    </div>
                    <Card.Title onClick={this.toggleFullText} className="b-item__title">{title}</Card.Title>
                    <Card.Text>
                        <span>{preview}</span><span className={"b-item__full-text" + ( toggled ? " toogled" : "" ) }> {text}</span> <a href="#" onClick={this.toggleFullText}>{ !toggled ? "Далее..." : "Свернуть" }</a>
                    </Card.Text>
                </Card.Body>

                {
                    !!comments && comments.length > 0 ? (
                        <NewsComments comments={comments}></NewsComments>
                    ) : null
                }
            </Card>
        )
    }
}


class NewsComments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggled: false, //флаг развернут
        };
        this.toggleComments = this.toggleComments.bind(this);
    }

    toggleComments(ev){
        ev.preventDefault();
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        const {comments} = this.props;
        const {toggled} = this.state;

        const count = 3;

        return (
            <div>
                <hr className="m-0"/>
                <Card.Body>
                    <div className="b-item-comment-list">
                        <div className="b-item-comment-title">Комменатрии:</div>
                        <div>
                            {
                                comments.map((comment, commentIndex) => {

                                    if(!toggled && (commentIndex + 1) > count )
                                        return true;

                                    return <div className="b-item-comment" key={commentIndex}>
                                        <div className="b-item-comment__author">
                                            <span>{comment.author}</span> / <span>{comment.datetime}</span>
                                        </div>
                                        <div className="b-item-comment__text">{comment.text}</div>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            {
                                ( !!comments && comments.length > count ) ?
                                    (
                                        <a href="#" onClick={this.toggleComments} className="b-item-comment-toggler">{ !toggled ? "Показать все" : "Свернуть" }</a>
                                    ) :
                                     null
                            }
                        </div>
                    </div>
                </Card.Body>
            </div>
        )
    }
}




class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true, //флаг "Загрузка"

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
            categoryId: this.state.selectedCategory,
            date: getFormatDate(this.state.selectedDate)
        }).then(
            (list) => {
                this.setState({
                    isLoading: false,
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
                isLoading: true,
                selectedCategory: catValue
            }, () => this.updateList()
        );
    }

    //Обработчик смены даты
    handleDateChange(date) {
        if(date === this.state.selectedDate)
            return true;

        this.setState({
                isLoading: true,
                selectedDate: date
            },() => this.updateList()
        );
    }

    //Сброс даты
    clearDate(ev){
        if(!this.state.selectedDate)
            return true;
        this.setState({
                isLoading: true,
                selectedDate: null
            }, () => this.updateList()
        );
    }

    componentDidMount(){
        //Получаем из API стартовые данные
        Api.getInitData().then(
            (res) => {
                this.setState({
                    isLoading: false,
                    newsList: res.list,
                    categories: res.categories,
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
            <footer className="pt-3 my-md-3 pt-md-3 border-top">
                <Container>
                    <Row>
                        <Col md={4}>
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
            isLoading
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
                                    <div className="b-list">
                                        {
                                            !isLoading ?
                                                (
                                                    <div>
                                                        {
                                                            (newsList.length > 0) ? newsList.map((el,index2) => {
                                                                return <div key={index2} className="b-list-item">
                                                                    <NewsItem info={el}></NewsItem>
                                                                </div>
                                                            }) : <div>Ничего не найдено...</div>
                                                        }
                                                    </div>
                                                )
                                            :
                                                <div>Загрузка...</div>
                                        }
                                    </div>
                                </Col>

                                <Col md="auto" className="mb-3">
                                    <DatePicker
                                        inline
                                        selected={ this.state.selectedDate }
                                        onChange={this.handleDateChange}
                                    />
                                    <div>
                                        <Button variant="secondary" size="sm" onClick={this.clearDate}>Сбросить дату</Button>
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
