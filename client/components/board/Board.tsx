import * as React from 'react';
import bathroom from '../../assets/ballroom.png';
import billiard from '../../assets/billiard.png';
import conservatory from '../../assets/conservatory.png';
import dining from '../../assets/dining.png';
import hall from '../../assets/hall.png';
import kitchen from '../../assets/kitchen.png';
import library from '../../assets/library.png';
import lounge from '../../assets/lounge.png';
import study from '../../assets/study.png';
import './Board.css';

interface BoardProps {

}

export class Board extends React.Component<BoardProps> {

    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td><img src={bathroom} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={billiard} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={conservatory} /></td>
                    </tr>
                    <tr>
                        <td><div className="vertical-hall"></div></td>
                        <td></td>
                        <td><div className="vertical-hall"></div></td>
                        <td></td>
                        <td><div className="vertical-hall"></div></td>
                    </tr>
                    <tr>
                        <td><img src={dining} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={hall} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={kitchen} /></td>
                    </tr>
                    <tr>
                        <td><div className="vertical-hall"></div></td>
                        <td></td>
                        <td><div className="vertical-hall"></div></td>
                        <td></td>
                        <td><div className="vertical-hall"></div></td>
                    </tr>
                    <tr>
                        <td><img src={library} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={lounge} /></td>
                        <td><div className="horizontal-hall"></div></td>
                        <td><img src={study} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}


export default Board;
