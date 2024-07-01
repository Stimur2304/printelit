import React from 'react';
import './Buy.css'
const Buy = () => {
    return (
        <div className='buy_background' >
            <div className="buy_information">
                <h3>Формат</h3>
                <div className="format">

                    <p>A6</p>
                    <p>A5</p>
                    <p>A4</p>
                    <p>A5</p>
                </div>
                <h3>Бумага мелованная</h3>
                <div className="sheets">

                    <p> 115 гр\м2</p>
                    <p> 150 гр\м2</p>
                    <p> 170 гр\м2</p>
                </div>
                <h3>Цветность</h3>
                <div className="colors">

                    <p>4+0</p>
                    <p>4+4</p>
                </div>
                <h3>Тип бумаги</h3>
                <div className="type_paper">

                    <p>Глянцевая</p>
                    <p>Матовая</p>
                </div>
                <h3>Количество</h3>
                <div className="how_much_sheets">

                    <p>20 шт.</p>
                    <p>50 шт.</p>
                    <p>100 шт.</p>
                    <p>120 шт.</p>
                    <p>150 шт.</p>
                </div>
                <div className="final_cost_and_button">
                    <h3 className="final_cost">Итого: Сом</h3>
                    <button className='zakazat'> Заказать</button>
                </div>

            </div>
        </div>
    );
};

export default Buy;