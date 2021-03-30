import React from 'react';
import {Button, Col, FlexboxGrid} from "rsuite";

const FilteredNotifications = ({
                                   notifications, openNotification, onNotificationRemove, markAsRead
                               }) => {
    return (
        <div>
            {notifications.map(notification => (
                <FlexboxGrid className="show-grid my-2" justify="center" key={notification.id}>
                    <button onClick={() => markAsRead(notification.id)}
                            className={`text-warning bg-transparent align-self-center`}
                    ><i
                        className="fas fa-star"></i>
                    </button>
                    <Col xs={21} sm={20} md={14} lg={10}
                         className={`bg-${notification.type} p-2 rounded`}
                         value={notification.id}
                         id={notification.id}>
                        <div className="d-flex justify-content-between">
                            <h5>{notification.title}</h5>
                            <button className="bg-transparent"
                                    onClick={() => onNotificationRemove(notification)}>
                                <i className="far fa-trash-alt"></i></button>
                        </div>
                        <Button onClick={() => openNotification(notification)} color="violet">More</Button>
                    </Col>
                </FlexboxGrid>
            ))}

        </div>
    );
};

export default FilteredNotifications;