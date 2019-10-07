import * as React from 'react';
import bathroom from '../../assets/bathroom.png';
import billiard from '../../assets/billiard.png';
import conservatory from '../../assets/conservatory.png';
import dining from '../../assets/dining.png';
import hall from '../../assets/hall.png';
import kitchen from '../../assets/kitchen.png';
import library from '../../assets/library.png';
import lounge from '../../assets/lounge.png';
import study from '../../assets/study.png';

interface BoardProps {

}

export class Board extends React.Component<BoardProps> {

    render() {
        return (
            <div>
                <div className="board-row">
                    <img src={bathroom} />
                    <img src={billiard} />
                    <img src={conservatory} />
                </div>
                <div className="board-row">
                    <img src={dining} />
                    <img src={hall} />
                    <img src={kitchen} />
                </div>
                <div className="board-row">
                    <img src={library} />
                    <img src={lounge} />
                    <img src={study} />
                </div>
            </div>
        );
    }
}

export default Board;
