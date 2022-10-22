import '../../assets/styles/components/jumbotron.scss';
import urlJumbotronImg from '../../assets/images/jumbotron-black.jpg';

const Jumbotron = () => {

    return (
        <div className="jumbotron">
            
            {/* <div className="jumbotron__img"> */}
                <img src="/jumbotron-img.jpg" alt="" />
                <div className="slogan">Développons l’avenir</div>
            {/* </div> */}
            {/* <div className="jumbotron__text">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={ 2 }><h1>JavaScript</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h2>0 == "0"</h2></td>
                            <td><h2>true</h2></td>
                        </tr>

                        <tr>
                            <td><h2>0 == [ ]</h2></td>
                            <td><h2>true</h2></td>
                        </tr>

                        <tr>
                            <td><h2>"0" == [ ]</h2></td>
                            <td style = {{color: "#E9204F"}}><h2>easy?</h2></td>
                        </tr>
                    </tbody>
                </table>

            </div> */}
        </div>
    )
}

export default Jumbotron;