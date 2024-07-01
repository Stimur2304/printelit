import React, {useEffect, useState} from 'react';
import './Buy.css'
import {buy} from "../../components/buy";
import {showInfo, showSuccess} from "../../utils/Alert";
import 'react-toastify/dist/ReactToastify.css';

const Buy = () => {

    const [price, setPrice] = useState(0)

    const [priceType, setPriceType] = useState(0)
    const [priceFormat, setPriceFormat] = useState(0)
    const [pricePaper, setPricePaper] = useState(0)
    const [priceColor, setPriceColor] = useState(0)
    const [pricePaperType, setPricePaperType] = useState(0)
    const [priceCount, setPriceCount] = useState(0)

    const [typeActiv, setTypeActiv] = useState(null)
    const [formatActiv, setFormatActiv] = useState(null)
    const [paperActiv, setPaperActiv] = useState(null)
    const [colorActiv, setColorActiv] = useState(null)
    const [paperTypeActiv, setPaperTypeActive] = useState(null)
    const [countActiv, setCountActive] = useState(null)

    useEffect(() => {
        setPrice((priceType + priceFormat + pricePaper + priceColor + pricePaperType) * priceCount )
    }, [priceType, priceFormat, pricePaper, priceColor, pricePaperType, priceCount]);

    return (
        <div className='buy_background' >
            <div className="buy_information">
                <h3>Тип</h3>
                <div className="type">
                    {buy.type.map((item, idx) => {
                        return (
                            <p
                                className={typeActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPriceType(item.price)
                                    setTypeActiv(idx)
                                }}
                            >{item.text}</p>
                        )
                    })}
                </div>
                <h3>Формат</h3>
                <div className="format">
                    {buy.format.map((item, idx) => {
                        return (
                            <p
                                className={formatActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPriceFormat(item.price)
                                    setFormatActiv(idx)
                                }}
                            >{item.text}</p>
                        )
                    })}
                    {/*<p>A6</p>*/}
                    {/*<p>A5</p>*/}
                    {/*<p>A4</p>*/}
                    {/*<p>A5</p>*/}
                </div>
                <h3>Бумага мелованная</h3>
                <div className="sheets">
                    {buy.paper.map((item, idx) => {
                        return (
                            <p
                                className={paperActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPricePaper(item.price)
                                    setPaperActiv(idx)
                                }}
                            >{item.text}</p>
                        )
                    })}
                </div>
                <h3>Цветность</h3>
                <div className="colors">
                    {buy.color.map((item, idx) => {
                        return (
                            <p
                                className={colorActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPriceColor(item.price)
                                    setColorActiv(idx)
                                }}
                            >{item.text}</p>
                        )
                    })}
                </div>
                <h3>Тип бумаги</h3>
                <div className="type_paper">
                    {buy.type_paper.map((item, idx) => {
                        return (
                            <p
                                className={paperTypeActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPricePaperType(item.price)
                                    setPaperTypeActive(idx)
                                }}
                            >{item.text}</p>
                        )
                    })}
                </div>
                <h3>Количество</h3>
                <div className="how_much_sheets">
                    {buy.count.map((item, idx) => {
                        return (
                            <p
                                className={countActiv === idx && 'active'}
                                key={idx}
                                onClick={() => {
                                    setPriceCount(item)
                                    setCountActive(idx)
                                }}
                            >{item} шт.</p>
                        )
                    })}
                </div>
                <div className="final_cost_and_button">
                    <h3 className="final_cost">Итого: {price} Сом</h3>
                    <button onClick={() => {
                        if (priceType && priceFormat && pricePaper && priceColor && pricePaperType && priceCount) {
                            showSuccess('Успешно', 'Ваша заявка оставлена!')
                        } else {
                            showInfo('Отклонено', 'Сначало заполните все данные!')
                        }
                    }} className='zakazat'> Заказать</button>
                </div>

            </div>
        </div>
    );
};

export default Buy;