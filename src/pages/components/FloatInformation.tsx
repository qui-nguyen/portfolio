import { useMediaQuery } from "react-responsive";


const FloatInformation = () => {

    const isTabletHorizontal = useMediaQuery({
        query: "(max-width: 1024px)"
    });

    return (
        <div style={{
            position: 'fixed',
            top: '120px',
            right: isTabletHorizontal ? '30px' : '25px',
            padding: '10px 10px',
            zIndex: 200,
            cursor: "pointer",
            backgroundColor: '#FFF',
            borderRadius: '10px',
            visibility: isTabletHorizontal ? 'visible' : 'hidden',
            boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.22)'
        }}>
            <div
                style={{
                    textAlign: 'center', fontSize: '16px', lineHeight: '25px'
                }}>
                <a href="https://quinguyen.vercel.app/" target="_blank" rel="noopener noreferrer" className='animatedGradientText'>
                    Nouvelle version
                </a>
            </div>
        </div >
    )
}

export default FloatInformation;
