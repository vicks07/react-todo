import React, { Component } from 'react'
import PropTypes from 'prop-types';

// const itemStyle = {
//     backgroundColor:'#f4f4f4'
// }



export class TodoItem extends Component {
    getStyle = ()=>{
        return {
            backgroundColor:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through':'none'
        }
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration:'line-through'
        //     }
        // }
        // else{
        //     return {
        //         textDecoration:'none'
        //     }
        // }
    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {''}
                {title}
                </p>
            </div>
        )
    }
}

TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired
}




export default TodoItem
