import React from 'react'
import List from './List';
const SimpleList = (props) => {
    const { items,onAction,onLabelClick } = props;
    return (
        <div>
            {items.map((data, index) => {
                return <List t
                    itle={data.title}
                    key={index}
                    desc={data.des}
                    IsActive={data.IsActive}
                    onDelete={() => {
                        onAction(data);
                    }}
                    onLabelClick={onLabelClick}
                />
            })}
        </div>
    )
}

export default SimpleList