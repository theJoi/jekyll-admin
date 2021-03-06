import React, { Component, PropTypes } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default class InputTitle extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.title !== this.props.title;
  }

  handleChange(e){
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="input-title">
        <label>Title</label>
        <TextareaAutosize
          onChange={(e) => this.handleChange(e)}
          placeholder="Title"
          defaultValue={title}
          ref="input"
        />
      </div>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
