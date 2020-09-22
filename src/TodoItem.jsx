import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px black dotted',
            textDecoration:this.props.todo.isCompleted?'line-through':'none'
            
        }
    }
    render() {
        const {id , title} =this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                <p>{title}</p>{' '}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    delTodo:PropTypes.func.isRequired,
    markComplete:PropTypes.func.isRequired
}
const btnStyle={
 background:'#ff0000',
 color:'#fff',
 padding:'5px 9px',
 border:'none',
 cursor:'pointer',
 float:'right',
 borderRadius:'50%'
}

export default TodoItem
