import React, { PropTypes } from 'react';

const MatchResult = (props) => 
    <span className={
        (props.result === 'L') ? "loss" : 
        (props.result === 'D') ? "draw" : "win"
        }>
        {props.result}
    </span>


MatchResult.propTypes = {
    result: PropTypes.string.isRequired
};

export default MatchResult;
