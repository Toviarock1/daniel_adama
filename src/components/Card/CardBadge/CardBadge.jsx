import React from 'react';
//reactstrap
import { Badge } from 'reactstrap';

const cardBadge = (props) => {
    return (
        <>
            <Badge color="dark" style={{ backgroundColor: 'black', color: '#fff', marginRight: '5px' }}>{props.name}</Badge>
        </>
    )
}

export default cardBadge
