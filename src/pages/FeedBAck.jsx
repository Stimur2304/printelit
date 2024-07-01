import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Убедитесь, что путь к файлу CSS правильный

const ContactUs = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика отправки данных на сервер или другой обработчик
        console.log({ name, phone, email, comment, file });
    }
    const navigate = useNavigate()

    return (
        <div className="contact-container">
            <h1>Связаться с нами</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Имя и фамилия*</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Номер телефона*</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Электронная почта*</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Файл</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div>
                    <label>Комментарий к заказу</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <div>
                    <a href="/"><button type="button">Заказать</button></a>
                </div>
                <p>
                    Нажимая кнопку «Заказать», я даю согласие на обработку персональных данных в соответствии с правилами сайта.
                </p>
            </form>
        </div>
    );
}

export default ContactUs;
