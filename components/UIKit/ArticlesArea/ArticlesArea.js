import React from 'react';
import ItemsLayout from "../ItemsLayout/ItemsLayout";

const ArticlesArea = ({children}) => {
    return (
        <ItemsLayout>{children}</ItemsLayout>
    );
};

export default ArticlesArea;