import * as React from "react";
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/link'

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;