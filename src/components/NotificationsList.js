import React, {useEffect, useState} from 'react';
import {Button, Col, Container, FlexboxGrid, Modal} from "rsuite";
import {notifics} from '../data/data';
import FilteredNotifications from "./FilteredNotifications";
import FilterSortBar from "./FilterSortBar";

const NotificationsList = () => {
    const [notifications, setNotifications] = useState(notifics);
    const [fullNotification, setFullNotification] = useState(false);
    const [selected, setSelected] = useState({});
    const [filteredNotifications, setFilteredNotifications] = useState([]);
    const [selectedType, setSelectedType] = useState('all');
    const [markedRead, setMarkedRead] = useState(false);

    const onNotificationRemove = (notification) => {
        setNotifications(notifications.filter((x) => x !== notification));
    }
    const openNotification = (notification) => {
        setSelected(notification)
        setFullNotification(true);
    }
    const closeNotification = () => {
        setFullNotification(false);
    }

    const settingType = (e) => {
        setSelectedType(e.target.value)
    }
    // console.log(selectedType)

    const filteringByType = () => {
        if (selectedType === 'all') {
            setFilteredNotifications([])
            setNotifications(notifics);
        } else {
            setFilteredNotifications(notifics.filter(x => x.type === selectedType));
            setNotifications([]);
        }
    }
    useEffect(() => {
        filteringByType();
    }, [selectedType])
    // console.log(notifications)
    // console.log(filteredNotifications)

    const markAsRead = (id) => {
        const notId = document.getElementById(id)
        console.log(notId);
        console.log(markedRead)
        if (markedRead === false) {
            setMarkedRead(true);
            notId.style.opacity = "0.5";
        } else {
            setMarkedRead(false);
            notId.style.opacity = "1";
        }
    }

    return (
        <Container>
            <h1 className="align-self-center">My list of notifications!</h1>
            <FilterSortBar notifications={notifications} setFilteredNotifications={setFilteredNotifications}
                           setNotifications={setNotifications}
                           settingType={settingType} selectedType={selectedType}/>
            {filteredNotifications.length ?
                <FilteredNotifications notifications={filteredNotifications} openNotification={openNotification}
                                       onNotificationRemove={onNotificationRemove} closeNotification={closeNotification}
                                       fullNotification={fullNotification} selected={selected}
                                       markAsRead={markAsRead}/> : false}
            {notifications.length ?
                <>
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
                </> : false}
            <Modal show={fullNotification} onHide={closeNotification}>
                <Modal.Header>
                    <Modal.Title>{selected.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{selected.description}</p>
                    <p><strong>Priority:</strong> {selected.priority}</p>
                    <p><strong>Created at:</strong> {selected.created_at}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeNotification} appearance="primary">
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default NotificationsList;