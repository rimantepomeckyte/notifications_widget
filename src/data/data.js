export const notifics = [{
    id: 1,
    title: "2:00 PM Tuesday meeting with Norah Jones",
    description: "New product analysis, discuss about it's properties and features",
    priority_level: 2,
    priority: "normal",
    type: 'success',
    created_at: '2021-03-25'
},
    {
        id: 2,
        title: "6:00 PM Friday doctor's visit",
        description: "Annual blood tests and consultation with a family doctor. Plus consultation with a dentist.",
        priority_level: 3,
        priority: "high",
        type: 'warning',
        created_at: '2021-03-25'
    },
    {
        id: 3,
        title: "You got a new email!",
        description: "James Bond write you an email. Subject: 'Greetings from Canada!'",
        priority_level: 1,
        priority: "low",
        type: 'danger',
        created_at: '2020-03-27'
    },
    {
        id: 4,
        title: "You got a new email!",
        description: "Sarah Jones sent you an email. Subject: 'Very important meeting with a client'",
        priority_level: 3,
        priority: "high",
        type: 'info',
        created_at: '2020-03-27'
    },
    {
        id: 5,
        title: "10:00 AM Tuesday Planned meeting with your Boss",
        description: "Discussion about new products, daily routine plans and other stuff",
        priority_level: 2,
        priority: "normal",
        type: 'success',
        created_at: '2020-03-27'
    },
    {
        id: 6,
        title: "You got a new email!",
        description: "James Bond write you an email. Subject: 'Greetings from Canada!'",
        priority_level: 1,
        priority: "low",
        type: 'warning',
        created_at: '2020-03-27'
    },
    {
        id: 7,
        title: "11:30 AM Tuesday coffee time with Judy",
        description: "James Bond write you an email. Subject: 'Greetings from Canada!'",
        priority_level: 3,
        priority: "high",
        type: 'success',
        created_at: '2020-03-27'
    }];

export const types = ['danger', 'warning', 'info', 'success'];

// import React, {useEffect, useState} from 'react';
// import {Button, Checkbox, Col, Container, FlexboxGrid, Grid, Modal, Row, SelectPicker} from "rsuite";
// import {notifics} from '../data/data';
// import {types} from "../data/data";
// import FilteredNotifications from "./FilteredNotifications";
//
// const NotificationsList = () => {
//     const [notifications, setNotifications] = useState([]);
//     const [filteredNotifications, setFilteredNotifications]= useState([]);
//     const [fullNotification, setFullNotification] = useState(false);
//     const [selected, setSelected] = useState({});
//     const [selectedType, setSelectedType] = useState('');
//     // const [selectedRead, setSelectedRead] = useState({});
//     const settingNotifications = () =>{
//         setNotifications(notifics);
//     }
//
//     useEffect(() =>{
//         settingNotifications();
//     },[])
//
//     const onNotificationRemove = (notification) => {
//         setNotifications(notifications.filter((x) => x !== notification));
//     }
//     const openNotification = (notification) => {
//         setSelected(notification)
//         setFullNotification(true);
//     }
//     const closeNotification = () => {
//         setFullNotification(false);
//     }
//     const onCheckMarkAsRead = () => {
//         const check = document.getElementById("check");
//         const notificationCard = document.getElementById("notification-card")
//         if (check.checked === true) {
//             notificationCard.style.opacity = "0.4";
//         } else if (check.checked === false) {
//             notificationCard.style.opacity = "1";
//         }
//     }
//
//     const settingType = (e) => {
//         e.preventDefault();
//         setSelectedType(e.target.value)
//         filteringByType();
//     }
//     console.log(selectedType)
//
//     const filteringByType=()=>{
//
//         setNotifications(notifications.filter(x => x.type === selectedType))
//     }
//     console.log(notifications)
//     return (
//         <Container>
//             <FlexboxGrid justify="center">
//                 <Col xs={8} sm={6} md={4} lg={2} className="bg-warning">
//                     <select value={selectedType} onChange={settingType}>
//                         {types.map(type => (
//                             <option value={type.id}>{type.title}</option>
//                         ))}
//                     </select>
//                 </Col>
//             </FlexboxGrid>
//             {/*{notifications.map((notification) => {*/}
//             {/*        if (notification.type == selectedType) {*/}
//             {/*            console.log(notifications)*/}
//             {/*           return <FilteredNotifications notification={notification} onCheckMarkAsRead={onCheckMarkAsRead}*/}
//             {/*                                         onNotificationRemove={onNotificationRemove} openNotification={openNotification }/>}*/}
//             {/*    }*/}
//             {/*)}*/}
//             {notifications.length ?
//                 <>
//                     {notifications.map(notification => (
//                         <FlexboxGrid className="show-grid mb-2 mt-4" justify="center" key={notification.id}>
//                             <Checkbox id="check" onChange={onCheckMarkAsRead}></Checkbox>
//                             <Col xs={21} sm={20} md={14} lg={10}
//                                  id="notification-card"
//                                  className="bg-danger p-2 rounded"
//                                  value={notification.id}>
//                                 <div className="d-flex justify-content-between">
//                                     <h5>{notification.title}</h5>
//                                     <button className="bg-transparent"
//                                             onClick={() => onNotificationRemove(notification)}>
//                                         <i className="far fa-trash-alt"></i></button>
//                                 </div>
//                                 <Button onClick={() => openNotification(notification)} color="violet">More</Button>
//                             </Col>
//                         </FlexboxGrid>
//                     ))}
//                 </> : false}
//             <Modal show={fullNotification} onHide={closeNotification}>
//                 <Modal.Header>
//                     <Modal.Title>{selected.title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>{selected.description}</p>
//                     <p><strong>Priority:</strong> {selected.priority}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={closeNotification} appearance="primary">
//                         Ok
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// };
//
// export default NotificationsList;