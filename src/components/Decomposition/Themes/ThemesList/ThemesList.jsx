import React from 'react';
import ThemesItem from "../ThemesItem/ThemesItem.jsx";
import Weather from "../../UI/Weather/Weather.jsx";
import UIList from "../../UI/UIList/UIList.jsx";

const ThemesList = () => {

    return (
        <ul>
            <ThemesItem title={'Погода'}>
                <Weather now={'+17'} evening={'+20'} morning={'+17'}
                         image={'https://aliceskill.ru/media/data/98/c8/98c8a179-34cf-4e44-86a8-315c06e2d4b0/podrobnaya-pogoda..256x256_q85_background-%23ffffff.png'}/>
            </ThemesItem>
            <ThemesItem title={'Погода'}>
                <UIList items={
                    [
                        {title: 'Недвижимость - о сталинках', link: 'https://netology.ru'},
                        {title: 'Недвижимость - о сталинках', link: 'https://netology.ru'},
                        {title: 'Недвижимость - о сталинках', link: 'https://netology.ru'},
                    ]}/>
            </ThemesItem>
            <ThemesItem title={'Карта Германии'}>
                <UIList items={
                    [
                        {title: 'Расписание', link: 'https://netology.ru'},
                    ]
                }
                />
            </ThemesItem>
            <ThemesItem title={'Телепрограмма'}>
                <UIList items={
                    [
                        {title: '02:00 ТНТ Best', link: 'https://netology.ru', subtitle: 'THT International'},
                        {title: '02:00 ТНТ Best', link: 'https://netology.ru', subtitle: 'THT International'},
                        {title: '02:00 ТНТ Best', link: 'https://netology.ru', subtitle: 'THT International'},
                    ]
                }
                />
            </ThemesItem>
            <ThemesItem title={'Эфир'}>
                <UIList items={
                    [
                        {
                            logo: 'https://brands.home-assistant.io/_/media_player/logo.png',
                            title: 'Управление как искусство',
                            link: 'https://netology.ru',
                            subtitle: 'Успех'
                        },
                        {
                            logo: 'https://brands.home-assistant.io/_/media_player/logo.png',
                            title: 'Управление как искусство',
                            link: 'https://netology.ru',
                            subtitle: 'Успех'
                        },
                        {
                            logo: 'https://brands.home-assistant.io/_/media_player/logo.png',
                            title: 'Управление как искусство',
                            link: 'https://netology.ru',
                            subtitle: 'Успех'
                        },
                    ]
                }
                />
            </ThemesItem>
        </ul>
    );
};

export default ThemesList;