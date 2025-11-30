import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

import './DiaryList.css'
const DiaryList = ({ data }) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedDate = useCallback(() => {
        // toSorted(): 원본 배열을 복사하여 정렬 후 반환
        return data.toSorted((a, b) => {
            if(sortType == 'oldest') {
                return Number(a.createdDate) - Number(b.createdDate);
            } else {
                return Number(b.createdDate) - Number(a.createdDate);
            }
        });
    }, [data, sortType])

    const sortedDate = getSortedDate();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된 순</option>
                </select>
                <Button onClick={() => { nav("/new") }} type={"POSITIVE"} text={"새로운 일기 쓰기"} />
            </div>
            <div className="list_wrapper">
                {sortedDate.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList;