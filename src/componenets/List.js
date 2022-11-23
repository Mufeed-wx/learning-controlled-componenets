import React from 'react'
import ListItems from './ListItems';

const List = (props) => {
    const { items,onAction,onLabelClick } = props;
    return (
        <div>
            {items.map((data, index) => {
                return <ListItems
                    title={data.title}
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

export default List