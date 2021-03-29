import React, {useState} from 'react';
import {Col, FlexboxGrid} from "rsuite";
import {types} from "../data/data";

const FilterSortBar = ({notifications, setFilteredNotifications, setNotifications, selectedType,settingType}) => {

    const [isLow, setIsLow] = useState(true);
    const sort = () => {
        let newNotifications;
        if (isLow) {
            newNotifications = notifications.sort((a, b) => (a.priority_level > b.priority_level) ? 1 : -1)
            // console.log(newNotifications)
        } else {
            newNotifications = notifications.sort((a, b) => (a.priority_level < b.priority_level) ? 1 : -1)
            // console.log(newNotifications)
        }
        setFilteredNotifications([]);
        setNotifications(newNotifications);
    }

    return (
        <div>
            <FlexboxGrid justify="center" className="mt-3">
                <Col xs={10} sm={7} md={5} lg={3}>
                    <label>Sorting by priority:</label>
                    <select value={(e) => setIsLow(e.target.value)} onChange={sort}>
                        <option disabled value='' selected>Sort by..</option>
                        <option value="true">Low to high</option>
                        <option value="false">High to low</option>
                    </select>
                </Col>
                <Col xs={10} sm={7} md={5} lg={3}>
                    <label>Filter by type:</label>
                    <select value={selectedType} onChange={settingType}>
                        <option selected>all</option>
                        {types.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                </Col>
            </FlexboxGrid>
        </div>
    );
};

export default FilterSortBar;