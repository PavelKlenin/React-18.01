import React, {Component} from 'react';

export default class Post extends Component {

    static defaultProps = {
        author: '',
        date: new Date(),
        title: '',
        text: ''
    };

    static interval(date){
        let quantity,
            measure,
            approximately = false,
            elapsed = Date.now() - date;

        let second = 1000,
            minute = 60 * second,
            hour = minute * 60,
            day = hour * 24,
            month = day * 30,
            year = day * 365;

        switch(true){
            case elapsed < minute:
                quantity = Math.round(elapsed / second);
                measure = 'second';
                break;
            case elapsed < hour:
                quantity = Math.round(elapsed / minute);
                measure = 'minute';
                break;
            case elapsed < day:
                quantity = Math.round(elapsed / hour);
                measure = 'hour';
                break;
            case elapsed < month:
                quantity = Math.round(elapsed / day);
                measure = 'day';
                approximately = true;
                break;
            case elapsed < year:
                quantity = Math.round(elapsed / month);
                measure = 'month';
                approximately = true;
                break;
            default:
                quantity = Math.round(elapsed / year);
                measure = 'year';
                approximately = true;
        }

        return elapsed < minute && quantity === 0 ? 'now' : `${approximately ? 'approximately' : ''} ${quantity} ${measure}${quantity > 1 ? 's' : ''} ago`;
    }

    render(){
        return <>
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.title}</h5>
                <small>{Post.interval(this.props.date)}</small>
            </div>
            <p className="mb-1">{this.props.text}</p>
            <small>{this.props.author}</small>
        </>;
    }

}