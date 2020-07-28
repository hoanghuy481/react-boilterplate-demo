import React from 'react';

import ListPosts from 'containers/ListPosts/Loadable';
import DetailPost from 'containers/DetailPost/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <ListPosts />
    },
    {
        path: "/post-details/:id",
        exact: true,
        main: ({ match }) => <DetailPost match={match} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFoundPage />
    },

];

export default routes;