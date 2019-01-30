import React, {Component} from 'react';

export default class Form extends Component {

    static defaultProps = {
        author: '',
        title: '',
        text: ''
    };

    state = {
        author: '',
        title: '',
        text: ''
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({...this.state, ...{
            date: new Date()
        }});

        this.setState(Form.defaultProps);
    };

    render(){
        return <form className="mt-5" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="author">Name</label>
                <input id="author" name="author" type="text" className="form-control" placeholder="Name" value={this.state.author} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={this.onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <textarea id="text" name="text" className="form-control" rows="4" value={this.state.text} onChange={this.onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>;
    }
}