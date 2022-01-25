import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import _loading from '../../images/loading.gif';

const Loading = ({loading}) => {
    
    return loading.loading!== false &&
        <div className='loading'>
            <img src={_loading}
            className='loading'
            alt='Loading...'>
            </img>
        </div>
}


Loading.propTypes = {
    loading: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    loading: state.loading
})

export default connect(mapStateToProps)(Loading)