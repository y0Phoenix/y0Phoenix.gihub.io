import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import _loading from '../../images/loading.gif';

const Loading = ({loading}) => 
    loading.loading!== false &&
        <img src={_loading}
        style={{textAlign: 'center'}}
        alt='Loading...'>
        </img>


Loading.propTypes = {
    loading: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    loading: state.loading
})

export default connect(mapStateToProps)(Loading)