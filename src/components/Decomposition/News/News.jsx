import React from 'react';
import NewsNav from "./NewsNav/NewsNav.jsx";
import Exchange from "./Exchange/Exchange.jsx";
import UIList from "../UI/UIList/UIList.jsx";

const news = [{
    logo: 'https://kartinkin.net/uploads/posts/2021-04/1617571305_1-p-prosto-chernii-fon-1.png',
    title: 'Какая-то новость'
}, {
    logo: 'https://kartinkin.net/uploads/posts/2021-04/1617571305_1-p-prosto-chernii-fon-1.png',
    title: 'Какая-то новость'
}, {
    logo: 'https://kartinkin.net/uploads/posts/2021-04/1617571305_1-p-prosto-chernii-fon-1.png',
    title: 'Какая-то новость'
}]

const News = () => {
    return (
        <>
            <NewsNav items={['Сейчас в СМИ', 'в Германии', 'Рекомендуем',]}/>
            <UIList items={news}/>
            <Exchange items={
                [
                    {currency: 'USD', value: 63.52, diff: 0.09},
                    {currency: 'USD', value: 63.52, diff: 0.09},
                    {currency: 'USD', value: 63.52, diff: 0.09}
                ]
            }/>
        </>

    );
};

export default News;