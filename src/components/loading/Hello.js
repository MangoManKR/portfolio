import './styles/Hello.css';

function Hello() {

    const centerStyle = {
        position: 'absolute',
        left: '40%',
        top: '20%',
        transform: 'translate(-50%, -50%)',
        fontSize: '60px',
        animationName: 'pop-up',
        animationDuration: '1500',
        textAlign: 'center',
        backgroundColor: 'lavenderblush',
    };

    return (
        <div className="greeting-container">
            {
                <p style={centerStyle}>
                    안녕하세요!
                </p>
            }
            <p>이것마저 안되면 나는 너무 화가 날 것 같다.</p>
        </div>
        );
}

export default Hello;