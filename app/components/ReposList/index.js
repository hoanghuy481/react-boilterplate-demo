import React from 'react';
import PropTypes from 'prop-types';
import List from '../List/index';
import LoadingIndicator from 'components/LoadingIndicator';

function ReposList({ loading, error }) {
    if (loading) {
        return <List component={LoadingIndicator} />;
    }

    if (error !== false) {
        return <List><h2>Something went wrong, please try again!</h2></List>
    }

    return null;
}
ReposList.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
};

export default ReposList;