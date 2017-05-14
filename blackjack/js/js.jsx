import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MainContent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                balance : 2000,
                bet: 0,
                src: '',
                add5: 5,
                add25: 25,
                add100: 100,
                add500: 500,
                add5k: 5000,
                btn1:{
                    display:'none'
                },
                btn2:{
                    display:'none'
                },
                btn3:{
                    display:'none'
                },
                showdecBtns: 'false',
                disabledBtnHit:'disabled',
                disabledBtnDouble:'disabled',
                disabledBtnHold:'disabled',
                disabledChip: '',
                cardStyle:{
                    height:"73px",
                    width:"58px",
                },
                dealerPoints:0,
                playerPoints:0,

                won:{
                    fontSize:'100px',
                    color:'#35FD00',
                    position: 'absolute',
                    marginLeft: '20%',
                    marginTop:'10%',
                    display:'none'
                },
                lost:{
                    fontSize:'100px',
                    position: 'absolute',
                    marginLeft: '20%',
                    marginTop:'10%',
                    display:'none',
                    color:'rgb(163, 0, 4)'
                },
                draw:{
                    fontSize:'100px',
                    position: 'absolute',
                    marginLeft: '20%',
                    marginTop:'10%',
                    display:'none',
                    color:'#FFDA00'
                },

                card2club: "Pictures/cards/2-club.png",
                card2dmd: "Pictures/cards/2-dmd.png",
                card2hrt: "Pictures/cards/2-hrt.png",
                card2spd: "Pictures/cards/2-spd.png",

                card3club: "Pictures/cards/3-club.png",
                card3dmd: "Pictures/cards/3-dmd.png",
                card3hrt: "Pictures/cards/3-hrt.png",
                card3spd: "Pictures/cards/3-spd.png",

                card4club: "Pictures/cards/4-club.png",
                card4dmd: "Pictures/cards/4-dmd.png",
                card4hrt: "Pictures/cards/4-hrt.png",
                card4spd: "Pictures/cards/4-spd.png",

                card5club: "Pictures/cards/5-club.png",
                card5dmd: "Pictures/cards/5-dmd.png",
                card5hrt: "Pictures/cards/5-hrt.png",
                card5spd: "Pictures/cards/5-spd.png",

                card6club: "Pictures/cards/6-club.png",
                card6dmd: "Pictures/cards/6-dmd.png",
                card6hrt: "Pictures/cards/6-hrt.png",
                card6spd: "Pictures/cards/6-spd.png",

                card7club: "Pictures/cards/7-club.png",
                card7dmd: "Pictures/cards/7-dmd.png",
                card7hrt: "Pictures/cards/7-hrt.png",
                card7spd: "Pictures/cards/7-spd.png",

                card8club: "Pictures/cards/8-club.png",
                card8dmd: "Pictures/cards/8-dmd.png",
                card8hrt: "Pictures/cards/8-hrt.png",
                card8spd: "Pictures/cards/8-spd.png",

                card9club: "Pictures/cards/9-club.png",
                card9dmd: "Pictures/cards/9-dmd.png",
                card9hrt: "Pictures/cards/9-hrt.png",
                card9spd: "Pictures/cards/9-spd.png",

                card10club: "Pictures/cards/10-club.png",
                card10dmd: "Pictures/cards/10-dmd.png",
                card10hrt: "Pictures/cards/10-hrt.png",
                card10spd: "Pictures/cards/10-spd.png",

                cardJclub: "Pictures/cards/J-club.png",
                cardJdmd: "Pictures/cards/J-dmd.png",
                cardJhrt: "Pictures/cards/J-hrt.png",
                cardJspd: "Pictures/cards/J-spd.png",

                cardQclub: "Pictures/cards/Q-club.png",
                cardQdmd: "Pictures/cards/Q-dmd.png",
                cardQhrt: "Pictures/cards/Q-hrt.png",
                cardQspd: "Pictures/cards/Q-spd.png",

                cardKclub: "Pictures/cards/K-club.png",
                cardKdmd: "Pictures/cards/K-dmd.png",
                cardKhrt: "Pictures/cards/K-hrt.png",
                cardKspd: "Pictures/cards/K-spd.png",

                cardAclub: "Pictures/cards/A-club.png",
                cardAdmd: "Pictures/cards/A-dmd.png",
                cardAhrt: "Pictures/cards/A-hrt.png",
                cardAspd: "Pictures/cards/A-spd.png"
            };
        }

        restartGameBtn = () => {
            this.setState({
                balance: 2000,
                bet: 0,
                src: '',
                disabledBtnHit:'disabled',
                disabledBtnDouble:'disabled',
                disabledBtnHold:'disabled',
                disabledChip: '',
                cardStyle:{
                    height:"73px",
                    width:"58px",
                },
                dealerPoints:0,
                playerPoints:0,
                btn1:{
                    display:'none'
                },
                btn2:{
                    display:'none'
                },
                btn3:{
                    display:'none'
                },
                won:{
                    fontSize:'100px',
                    position: 'absolute',
                    marginLeft: '20%',
                    marginTop:'10%',
                    display:'none',
                    color:'#35FD00'
                },
                lost:{
                    fontSize:'100px',
                    position: 'absolute',
                    marginLeft: '20%',
                    marginTop:'10%',
                    display:'none',
                    color:'rgb(163, 0, 4)'
                }
            });

            let deletedCards = document.getElementsByClassName("toDelete");

            for(let i = 0; i < deletedCards.length; i++){
                    deletedCards[i].remove();

            }
            console.log(deletedCards);
            for(let i = 0; i < deletedCards.length; i++){
                    deletedCards[i].remove();

            }
            for(let i = 0; i < deletedCards.length; i++){
                    deletedCards[i].remove();
            }
        }

        getRandomNumber = (x, y) => Math.floor(Math.random()*(y-x +1)) + x;

        getCardNumber = () => {

            let type = this.getRandomNumber(0, 1);
            let figureString = '';
            let number = 0;
            if (type == 0) {
                number = this.getRandomNumber(2,10);
            } else {
                number = this.getRandomNumber(0,3);
                switch(number) {
                    case 0:
                        number = "J";
                        break;

                    case 1:
                        number = "Q";
                        break;

                    case 2:
                        number = "K";
                        break;

                    case 3:
                        number = "A";
                        break;
                }
            }
            return number;
        }

        getCard = () => {
            let color = this.getRandomNumber(0,3);
            let stringColor = '';

            switch(color){
                case 0:
                    stringColor = "club.png";
                    break;

                case 1:
                    stringColor = "dmd.png";
                    break;

                case 2:
                    stringColor = "hrt.png";
                    break;

                case 3:
                    stringColor = "spd.png";
                    break;
            };
            let cardNumber = this.getCardNumber();

            let getPoints = function(playerPoints) {
                let points;
                if (this.number === 'J' || this.number === 'Q' || this.number === 'K') {
                    points = 10;
                } else if (this.number === 'A') {
                    if (playerPoints >= 11) {
                            points = 1;
                    } else{
                    points = 11;
                    }
                } else {
                    points = this.number;
                }
                console.log('points', points);
                return points;
            }

            let card = {
                number: cardNumber,
                file: 'Pictures/cards/' + cardNumber + '-' + stringColor,
                getPoints
            };

            return card;
        }

        chipClicked = (chip) => {
            this.setState({
                bet: this.state.bet + chip
            });
        }

        resetBet = () =>{
            this.setState({
                bet: 0,
                styles:{
                    color:'white',
                    transition:'0.8s',
                    fontSize:'20px',
                }
            })
        };

                showCards = () => {
                    if (this.state.bet <= this.state.balance && this.state.bet != 0) {
                        const self = this;

                        this.setState({
                            styles:{
                                color:'green',
                                transition:'0.8s',
                                fontSize:'20px',
                            },
                            disabledBtnHit:'',
                            disabledBtnDouble:'',
                            disabledBtnHold:'',
                            disabledChip:'disabled',
                            src: 'Pictures/cards/back.jpg',
                            btn1:{
                                display:''
                            },
                            btn2:{
                                display:''
                            },
                            btn3:{
                                display:''
                            },
                            won:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'none',
                                color:'#35FD00'
                            },
                            lost:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'none',
                                color:'rgb(163, 0, 4)'
                            },
                            draw:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'none',
                                color:'#FFDA00'
                            }

                        });

                        let showCard1 = setTimeout(() => {
                            let cardData = this.getCard();
                            this.setState({
                                playerPoints: this.state.playerPoints + cardData.getPoints(this.state.playerPoints),
                                playerFirstCard:{
                                    show:true,
                                    file: cardData.file
                                }
                            });
                        }, 1000);

                        let showCard2 = setTimeout(() => {
                            let cardData = this.getCard();
                            this.setState({
                                dealerPoints: this.state.dealerPoints + cardData.getPoints(this.state.dealerPoints),
                                dealerFirstCard:{
                                    show:true,
                                    file: cardData.file
                                }
                            });
                        },1500);

                        let showCard3 = setTimeout(() => {
                            let cardData = this.getCard();
                            this.setState({
                                playerPoints: this.state.playerPoints + cardData.getPoints(this.state.playerPoints),
                                playerSecondCard:{
                                    show:true,
                                    file: cardData.file
                                }
                            });

                            if(this.state.playerPoints == 21){
                                console.log("BLACKJACK");

                                this.setState({
                                    balance: this.state.balance + (this.state.bet * 1.5),
                                    won:{
                                        fontSize:'100px',
                                        position: 'absolute',
                                        marginLeft: '20%',
                                        marginTop:'10%',
                                        display:'',
                                        color:'#35FD00'
                                    },
                                });
                                self.resetGame();
                            };
                        },2000);
                } else {
                    this.setState({
                        styles:{
                            color:'#A30004',
                            transition:'0.8s',
                            fontSize:'30px',
                        }
                    })
                }
            }

            holdBtn = () => {
                let cardData = this.getCard();
                this.state.src = cardData.file;
                this.setState({
                    disabledBtnHit:'disabled',
                    disabledBtnHold:'disabled',
                    disabledBtnDouble:'disabled',

                    btn1:{
                        display:'none'
                    },
                    btn2:{
                        display:'none'
                    },
                    btn3:{
                        display:'none'
                    },
                });

                this.setState({
                    dealerPoints: this.state.dealerPoints + cardData.getPoints(this.state.dealerPoints)
                });
                let addPoints = cardData.getPoints(this.state.dealerPoints)

                if(this.state.dealerPoints + addPoints<17){
                    let cardData = this.getCard();
                    this.setState({
                        dealerPoints: this.state.dealerPoints + addPoints + cardData.getPoints(this.state.dealerPoints),
                        dealerThirdCard:{
                            show:true,
                            file: cardData.file
                        }
                    });
                    this.resetGame();
                }


                if ( (this.state.dealerPoints + addPoints > this.state.playerPoints) && (this.state.dealerPoints + addPoints < 22) ){
                    this.setState ({
                        balance: this.state.balance - this.state.bet,
                        lost:{
                            fontSize:'100px',
                            position: 'absolute',
                            marginLeft: '20%',
                            marginTop:'10%',
                            display:'',
                            color:'rgb(163, 0, 4)'
                        }
                    });
                    this.resetGame();
                } else if (this.state.dealerPoints + addPoints < this.state.playerPoints){
                        this.setState({
                            balance:this.state.balance + this.state.bet,
                            won:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'',
                                color:'#35FD00'
                            }
                        });
                        this.resetGame();
                    }
                    else if(this.state.dealerPoints + addPoints == this.state.playerPoints){
                        this.setState({
                            draw:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'',
                                color:'#FFDA00'
                            }
                        });
                        this.resetGame();
                    }
                }

            doubleBtn = () => {
                if (this.state.balance / 2 >= this.state.bet) {
                    let cardData = this.getCard();
                    this.state.src = cardData.file;
                    let cardPoints = cardData.getPoints(this.state.dealerPoints);
                    this.setState({
                        dealerPoints: this.state.dealerPoints + cardPoints
                    })

                    this.setState({
                        bet: this.state.bet*2,
                    });

                    if (this.state.dealerPoints + cardPoints < 17) {
                        let thirdCardData = this.getCard();
                        let thirdCardPoints = thirdCardData.getPoints(this.state.dealerPoints + cardPoints);
                        this.setState({
                            dealerPoints: this.state.dealerPoints + cardPoints + thirdCardPoints,
                            dealerThirdCard:{
                                show:true,
                                file: cardData.file
                            }
                        });
                    };

                    let thirdPlayerCardData = this.getCard();
                    let thirdPlayerCardPoints = thirdPlayerCardData.getPoints(this.state.playerPoints);
                    this.setState({
                        playerPoints: this.state.playerPoints + thirdPlayerCardPoints,
                        playerThirdCard:{
                            show:true,
                            file: cardData.file
                        }
                    });

                    if (this.state.playerPoints + thirdPlayerCardPoints > 21) {
                        this.setState({
                            balance: this.state.balance - this.state.bet *2,
                            lost:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'',
                                color:'rgb(163, 0, 4)'
                            }
                        });
                        this.resetGame();
                    } else if( (this.state.playerPoints + thirdPlayerCardPoints < 22 ) && (this.state.playerPoints + thirdPlayerCardPoints > this.state.dealerPoints) ){
                        this.setState({
                            balance: this.state.balance + this.state.bet *2,
                            won:{
                                fontSize:'100px',
                                position: 'absolute',
                                marginLeft: '20%',
                                marginTop:'10%',
                                display:'',
                                color:'#35FD00'
                            }
                        });
                        this.resetGame();
                    }
                } else {
                    this.setState({
                        styles:{
                            color:'#A30004',
                            transition:'0.8s',
                            fontSize:'30px',
                        },
                    })
                }
            };

            hitBtn1 = () =>{
                this.setState({
                    disabledBtnDouble: 'disabled',
                })
                let counter = 3;
                let cardData = this.getCard();
                let cardPoints = cardData.getPoints(this.state.playerPoints);
                this.setState({
                    playerPoints: this.state.playerPoints + cardPoints,
                    player3Card:{
                        show:true,
                        file: cardData.file
                    }
                });

                if (this.state.playerPoints + cardPoints > 21) {
                    console.log("przegrywasz");
                    this.setState({
                        disabledBtnHit:'disabled',
                        disabledBtnHold:'disabled',
                        disabledBtnDouble:'disabled',
                        balance: this.state.balance - this.state.bet,
                        lost:{
                            fontSize:'100px',
                            position: 'absolute',
                            marginLeft: '20%',
                            marginTop:'10%',
                            display:'',
                            color:'rgb(163, 0, 4)'
                        },
                    });
                    this.resetGame();
                }

                else if (this.state.playerPoints == 21) {
                    self.setState({
                        balance: this.state.balance + this.state.bet,
                        won:{
                            fontSize:'100px',
                            position: 'absolute',
                            marginLeft: '20%',
                            marginTop:'10%',
                            display:'',
                            color:'#35FD00'
                        }
                    });
                    this.resetGame();
                }

                counter++;
            };

            resetGame() {

                this.setState({
                    bet: 0,
                    showdecBtns: 'false',
                    disabledBtnHit:'disabled',
                    disabledBtnDouble:'disabled',
                    disabledBtnHold:'disabled',
                    disabledChip: '',
                    cardStyle:{
                        height:"73px",
                        width:"58px",
                    },
                    dealerPoints:0,
                    playerPoints:0,
                    btn1:{
                        display:'none'
                    },
                    btn2:{
                        display:'none'
                    },
                    btn3:{
                        display:'none'
                    }
                });
                    setTimeout(() => {
                    let deletedCards = document.getElementsByClassName("toDelete");

                    for(let j = 0; j<3; j++){
                        for(let i = 0; i < deletedCards.length; i++){
                                deletedCards[i].remove();
                        }
                    }
                },3000);
            }

        render(){

            let dealerPoints = <div className="dealerPoints">{this.state.dealerPoints}</div>;
            let playerPoints = <div className="playerPoints">{this.state.playerPoints}</div>;
            let won = <div className="won" style={this.state.won}>You Win!</div>;
            let lost = <div className ="lost" style={this.state.lost}> You Lost</div>;
            let draw = <div className ="draw" style={this.state.draw}> Draw!</div>;

            let playerFirstCard;
            if(this.state.playerFirstCard && this.state.playerFirstCard.show){
                playerFirstCard = <img className="toDelete" src={this.state.playerFirstCard.file} style={{height:"73px", width:"58px"}}/>;
            }
            let dealerFirstCard;
            if(this.state.dealerFirstCard && this.state.dealerFirstCard.show){
                dealerFirstCard = <img className="toDelete" src={this.state.dealerFirstCard.file} style={{height:"73px", width:"58px"}}/>;
            }
            let playerSecondCard;
            if(this.state.playerSecondCard && this.state.playerSecondCard.show){
                playerSecondCard = <img className="toDelete" src={this.state.playerSecondCard.file} style={{height:"73px", width:"58px"}}/>;
            }
            let dealerThirdCard;
            if(this.state.dealerThirdCard && this.state.dealerThirdCard.show){
                dealerThirdCard = <img className="toDelete" src={this.state.dealerThirdCard.file} style={{height:"73px", width:"58px"}}/>;
            }
            let playerThirdCard;
            if(this.state.playerThirdCard && this.state.playerThirdCard.show){
                playerThirdCard = <img className="toDelete" src={this.state.playerThirdCard.file} style={{height:"73px", width:"58px"}}/>;
            }
            let player3Card;
            if(this.state.player3Card && this.state.player3Card.show){
                player3Card = <img className="toDelete" src={this.state.player3Card.file} style={{height:"73px", width:"58px"}}/>;
            }
            let player4Card;
            if(this.state.player4Card && this.state.player4Card.show){
                player4Card = <img className="toDelete" src={this.state.player4Card.file} style={{height:"73px", width:"58px"}}/>;
            }
            let player5Card;
            if(this.state.player5Card && this.state.player5Card.show){
                player5Card = <img className="toDelete" src={this.state.player5Card.file} style={{height:"73px", width:"58px"}}/>;
            }

            const decision = <div>
                    <button className='decBtn1' style={this.state.btn1} onClick={this.holdBtn} disabled={this.state.disabledBtnHold}>HOLD</button>
                    <button className='decBtn2' style={this.state.btn2} onClick={this.doubleBtn} disabled={this.state.disabledBtnDouble}>DOUBLE</button>
                    <button className='decBtn3' style={this.state.btn3} onClick={this.hitBtn1} disabled={this.state.disabledBtnHit}>HIT</button>
                </div>

            return <div className="mainContainer">
                <header>
                    <div className="balance">Balance: {this.state.balance}</div>
                    <div className="bet" style={this.state.styles}>Bet: {this.state.bet}</div>
                    <button className="restart" type='button' onClick={this.restartGameBtn}>Restart</button>
                </header>
                <div className="gameTable">
                    {won}{lost}{draw}
                    <div className="dealerHand">
                        <div className="placedDealerCards">
                            <div className="dealerFirstCard">
                                <img src={this.state.src} style={this.state.cardStyle}/>
                            </div>
                            <div className="dealerSecondCard">{dealerFirstCard}</div>
                            <div className="dealerThirdCard">{dealerThirdCard}</div>
                            <div className="dealerFourthCard"></div>
                            <div className="dealerFifthCard"></div>
                            <div className="dealerSixthCard"></div>
                            <div className="dealerSeventhCard"></div>
                            <div>{dealerPoints}</div>
                        </div>
                    </div>
                    <div className="playerHand">
                        <div className="decisionBtns">
                            {decision}
                        </div>
                        <div className="placedPlayerCards">
                            <div>{playerPoints}</div>
                            <div className="playerFirstCard">{playerFirstCard}</div>
                            <div className="playerSecondCard">{playerSecondCard}</div>
                            <div className="player3Card">{playerThirdCard}{player3Card}</div>
                            <div className="player4Card">{player4Card}</div>
                            <div className="player5Card">{player5Card}</div>
                            <div className="player6Card"></div>
                            <div className="player7Card"></div>
                        </div>
                    </div>
                    <div className="chips">
                        <button className="chip1" onClick={this.chipClicked.bind(null, this.state.add5)} disabled={this.state.disabledChip}></button>
                        <button className="chip2" onClick={this.chipClicked.bind(null, this.state.add25)} disabled={this.state.disabledChip}></button>
                        <button className="chip3" onClick={this.chipClicked.bind(null, this.state.add100)} disabled={this.state.disabledChip}></button>
                        <button className="chip4" onClick={this.chipClicked.bind(null, this.state.add500)} disabled={this.state.disabledChip}></button>
                        <button className="chip5" onClick={this.chipClicked.bind(null, this.state.add5k)} disabled={this.state.disabledChip}></button>
                    </div>
                    <div className="footer_Btns">
                        <button type='button' className="resetBtn" style={this.state.resetBtn} onClick={this.resetBet} disabled={this.state.disabledChip}>Reset</button>
                        <button type='button' className="confirmBtn" style={this.state.confirmBtn} onClick={this.showCards} disabled={this.state.disabledChip}>Confirm</button>
                    </div>
                </div>
            </div>;
        }
    }

    class App extends React.Component{
        render(){
            return <MainContent/>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
