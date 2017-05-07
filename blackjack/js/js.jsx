import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class MainContent extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                balance : '2000',
                bet: '0',
                src: '',
                add5: '5',
                add25: '25',
                add100: '100',
                add500: '500',
                add5k: '5000',
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

        // restartGame = (event) => {
        //     116 ASCII = f5
        // }

        getCard = () => {
            let randomNumber = (x, y) => Math.floor(Math.random()*(y-x +1)) + x;
            let type = randomNumber(0, 1);
            let figureString = '';
            let number = 0;
            if (type == 0) {
                number = randomNumber(2,10);
            } else {
                number = randomNumber(0,3);
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
                };
            };

            let color = randomNumber(0,3);
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

            console.log(number);
            return number + '-' + stringColor;
        }

        chipClicked = (chip) =>{
            this.setState({
                bet: parseInt(this.state.bet) + parseInt(chip)
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
        }



                showCards=()=>{if( this.state.bet<=this.state.balance && this.state.bet !=0 ){
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
                        src: 'Pictures/cards/back.jpg'
                    });
//ComponentDidMount

                        setTimeout(function(){
                            let string = 'Pictures/cards/'+self.getCard();
                            let card = document.createElement("img");
                            document.querySelector(".playerFirstCard").append(card);
                            if(string == self.state.card2club || string == self.state.card2dmd || string == self.state.card2hrt || string == self.state.card2spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 2
                                });
                            } else if(string == self.state.card3club || string == self.state.card3dmd || string == self.state.card3hrt || string == self.state.card3spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 3
                                });
                            } else if(string == self.state.card4club || string == self.state.card4dmd || string == self.state.card4hrt || string == self.state.card4spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 4
                                });
                            } else if (string == self.state.card5club || string == self.state.card5dmd || string == self.state.card5hrt || string == self.state.card5spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 5
                                });
                            } else if (string == self.state.card6club || string == self.state.card6dmd || string == self.state.card6hrt || string == self.state.card6spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 6
                                });
                            } else if (string == self.state.card7club || string == self.state.card7dmd || string == self.state.card7hrt || string == self.state.card7spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 7
                                });
                            } else if (string == self.state.card8club || string == self.state.card8dmd || string == self.state.card8hrt || string == self.state.card8spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 8
                                });
                            } else if (string == self.state.card9club || string == self.state.card9dmd || string == self.state.card9hrt || string == self.state.card9spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 9
                                });
                            } else if (string == self.state.card10club || string == self.state.card10dmd || string == self.state.card10hrt || string == self.state.card10spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardJclub || string == self.state.cardJdmd || string == self.state.cardJhrt || string == self.state.cardJspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardQclub || string == self.state.cardQdmd || string == self.state.cardQhrt || string == self.state.cardQspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardKclub || string == self.state.cardKdmd || string == self.state.cardKhrt || string == self.state.cardKspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardAclub || string == self.state.cardAdmd || string == self.state.cardAhrt || string == self.state.cardAspd){
                                if(self.state.playerPoints >=11){
                                    self.setState({
                                        playerPoints: self.state.playerPoints + 1
                                    })
                                }  else{

                                self.setState({
                                    playerPoints: self.state.playerPoints + 11
                                });
                                }
                            };
                            card.setAttribute('src', string);
                            card.setAttribute('style', 'height:73px; width: 58px');
                        },1000);

                        setTimeout(function(){
                            let string = 'Pictures/cards/'+self.getCard();
                            let card = document.createElement("img");
                            document.querySelector(".dealerSecondCard").append(card);

                            if(string == self.state.card2club || string == self.state.card2dmd || string == self.state.card2hrt || string == self.state.card2spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 2
                                });
                            } else if(string == self.state.card3club || string == self.state.card3dmd || string == self.state.card3hrt || string == self.state.card3spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 3
                                });
                            } else if(string == self.state.card4club || string == self.state.card4dmd || string == self.state.card4hrt || string == self.state.card4spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 4
                                });
                            } else if (string == self.state.card5club || string == self.state.card5dmd || string == self.state.card5hrt || string == self.state.card5spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 5
                                });
                            } else if (string == self.state.card6club || string == self.state.card6dmd || string == self.state.card6hrt || string == self.state.card6spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 6
                                });
                            } else if (string == self.state.card7club || string == self.state.card7dmd || string == self.state.card7hrt || string == self.state.card7spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 7
                                });
                            } else if (string == self.state.card8club || string == self.state.card8dmd || string == self.state.card8hrt || string == self.state.card8spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 8
                                });
                            } else if (string == self.state.card9club || string == self.state.card9dmd || string == self.state.card9hrt || string == self.state.card9spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 9
                                });
                            } else if (string == self.state.card10club || string == self.state.card10dmd || string == self.state.card10hrt || string == self.state.card10spd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 10
                                });
                            } else if (string == self.state.cardJclub || string == self.state.cardJdmd || string == self.state.cardJhrt || string == self.state.cardJspd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 10
                                });
                            } else if (string == self.state.cardQclub || string == self.state.cardQdmd || string == self.state.cardQhrt || string == self.state.cardQspd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 10
                                });
                            } else if (string == self.state.cardKclub || string == self.state.cardKdmd || string == self.state.cardKhrt || string == self.state.cardKspd){
                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 10
                                });
                            } else if (string == self.state.cardAclub || string == self.state.cardAdmd || string == self.state.cardAhrt || string == self.state.cardAspd){
                                if(self.state.playerPoints >=11){
                                    self.setState({
                                        dealerPoints: self.state.dealerPoints + 1
                                    })
                                }  else{

                                self.setState({
                                    dealerPoints: self.state.dealerPoints + 11
                                });
                                }
                            };
                            card.setAttribute('src', string);
                            card.setAttribute('style', 'height:73px; width: 58px');
                        },1500);

                        setTimeout(function(){
                            let string = 'Pictures/cards/'+self.getCard();
                            let card = document.createElement("img");
                            document.querySelector(".playerSecondCard").append(card);
                            if(string == self.state.card2club || string == self.state.card2dmd || string == self.state.card2hrt || string == self.state.card2spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 2
                                });
                            } else if(string == self.state.card3club || string == self.state.card3dmd || string == self.state.card3hrt || string == self.state.card3spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 3
                                });
                            } else if(string == self.state.card4club || string == self.state.card4dmd || string == self.state.card4hrt || string == self.state.card4spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 4
                                });
                            } else if (string == self.state.card5club || string == self.state.card5dmd || string == self.state.card5hrt || string == self.state.card5spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 5
                                });
                            } else if (string == self.state.card6club || string == self.state.card6dmd || string == self.state.card6hrt || string == self.state.card6spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 6
                                });
                            } else if (string == self.state.card7club || string == self.state.card7dmd || string == self.state.card7hrt || string == self.state.card7spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 7
                                });
                            } else if (string == self.state.card8club || string == self.state.card8dmd || string == self.state.card8hrt || string == self.state.card8spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 8
                                });
                            } else if (string == self.state.card9club || string == self.state.card9dmd || string == self.state.card9hrt || string == self.state.card9spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 9
                                });
                            } else if (string == self.state.card10club || string == self.state.card10dmd || string == self.state.card10hrt || string == self.state.card10spd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardJclub || string == self.state.cardJdmd || string == self.state.cardJhrt || string == self.state.cardJspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardQclub || string == self.state.cardQdmd || string == self.state.cardQhrt || string == self.state.cardQspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardKclub || string == self.state.cardKdmd || string == self.state.cardKhrt || string == self.state.cardKspd){
                                self.setState({
                                    playerPoints: self.state.playerPoints + 10
                                });
                            } else if (string == self.state.cardAclub || string == self.state.cardAdmd || string == self.state.cardAhrt || string == self.state.cardAspd){
                                if(self.state.playerPoints >=11){
                                    self.setState({
                                        playerPoints: self.state.playerPoints + 1
                                    })
                                }  else{

                                self.setState({
                                    playerPoints: self.state.playerPoints + 11
                                });
                                }
                            };
                            if(self.state.playerPoints == 21){
                                console.log("BLACKJACK");
                                self.setState({
                                    disabledBtnHit:'disabled',
                                    disabledBtnDouble:'disabled',
                                    disabledBtnHold:'disabled',
                                    balance: parseInt(self.state.balance) + parseInt(self.state.bet * 1.5),
                                    btn1:{
                                        opacity:'0.25',
                                        transition:'0.5s',
                                    },
                                    btn2:{
                                        opacity:'0.25',
                                        transition:'0.5s',
                                    },
                                    btn3:{
                                        opacity:'0.25',
                                        transition:'0.5s',
                                    }
                                })

                            };
                            card.setAttribute('src', string);
                            card.setAttribute('style', 'height:73px; width: 58px');
                        },2000);

                        // ComponentDidMount(){
                        //     this.timer1;
                        //     this.timer2;
                        //     this.timer3;
                        //     this.timer4;
                        // }
                        //
                        // ComponentWillUnmount(){
                        //     clearTimeout(this.timer1);
                        //     clearTimeout(this.timer2);
                        //     clearTimeout(this.timer3);
                        //     clearTimeout(this.timer4);
                        // }

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

            holdBtn = () =>{
                if(this.state.src = "Pictures/cards/back.jpg"){
                this.state.src = 'Pictures/cards/'+this.getCard();
                this.setState({
                    disabledBtnHit:'disabled',
                    disabledBtnHold:'disabled',
                    disabledBtnDouble:'disabled',
                    btn1:{
                        opacity:'0.25',
                        transition:'0.5s',
                    },
                    btn2:{
                        opacity:'0.25',
                        transition:'0.5s',
                    },
                    btn3:{
                        opacity:'0.25',
                        transition:'0.5s'
                    }
                });

                // if(string == self.state.card2club || string == self.state.card2dmd || string == self.state.card2hrt || string == self.state.card2spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 2
                //     });
                // } else if(string == self.state.card3club || string == self.state.card3dmd || string == self.state.card3hrt || string == self.state.card3spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 3
                //     });
                // } else if(string == self.state.card4club || string == self.state.card4dmd || string == self.state.card4hrt || string == self.state.card4spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 4
                //     });
                // } else if (string == self.state.card5club || string == self.state.card5dmd || string == self.state.card5hrt || string == self.state.card5spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 5
                //     });
                // } else if (string == self.state.card6club || string == self.state.card6dmd || string == self.state.card6hrt || string == self.state.card6spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 6
                //     });
                // } else if (string == self.state.card7club || string == self.state.card7dmd || string == self.state.card7hrt || string == self.state.card7spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 7
                //     });
                // } else if (string == self.state.card8club || string == self.state.card8dmd || string == self.state.card8hrt || string == self.state.card8spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 8
                //     });
                // } else if (string == self.state.card9club || string == self.state.card9dmd || string == self.state.card9hrt || string == self.state.card9spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 9
                //     });
                // } else if (string == self.state.card10club || string == self.state.card10dmd || string == self.state.card10hrt || string == self.state.card10spd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 10
                //     });
                // } else if (string == self.state.cardJclub || string == self.state.cardJdmd || string == self.state.cardJhrt || string == self.state.cardJspd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 10
                //     });
                // } else if (string == self.state.cardQclub || string == self.state.cardQdmd || string == self.state.cardQhrt || string == self.state.cardQspd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 10
                //     });
                // } else if (string == self.state.cardKclub || string == self.state.cardKdmd || string == self.state.cardKhrt || string == self.state.cardKspd){
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 10
                //     });
                // } else if (string == self.state.cardAclub || string == self.state.cardAdmd || string == self.state.cardAhrt || string == self.state.cardAspd){
                //     if(self.state.playerPoints >=11){
                //         self.setState({
                //             dealerPoints: self.state.dealerPoints + 1
                //         })
                //     }  else{
                //
                //     self.setState({
                //         dealerPoints: self.state.dealerPoints + 11
                //     });
                //     }
                // };

                if(this.state.src == this.state.card2club || this.state.src == this.state.card2dmd || this.state.src == this.state.card2hrt || this.state.src == this.state.card2spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 2
                    });
                    if( (this.state.dealerPoints+2) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);

                        //---------------------------------------------------//

                        this.setState({
                            dealerPoints:this.state.dealerPoints + 2
                        });
                    }
                } else if(this.state.src == this.state.card3club || this.state.src == this.state.card3dmd || this.state.src == this.state.card3hrt || this.state.src == this.state.card3spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 3
                    });
                    if((this.state.dealerPoints+3)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 3
                        });
                    }
                } else if(this.state.src == this.state.card4club || this.state.src == this.state.card4dmd || this.state.src == this.state.card4hrt || this.state.src == this.state.card4spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 4
                    });
                    if((this.state.dealerPoints+4)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 4
                        });
                    }
                } else if (this.state.src == this.state.card5club || this.state.src == this.state.card5dmd || this.state.src == this.state.card5hrt || this.state.src == this.state.card5spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 5
                    });
                    if((this.state.dealerPoints+5)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 5
                        });
                    }
                } else if (this.state.src == this.state.card6club || this.state.src == this.state.card6dmd || this.state.src == this.state.card6hrt || this.state.src == this.state.card6spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 6
                    });
                    if((this.state.dealerPoints+6)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 6
                        });
                    }
                } else if (this.state.src == this.state.card7club || this.state.src == this.state.card7dmd || this.state.src == this.state.card7hrt || this.state.src == this.state.card7spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 7
                    });
                    if((this.state.dealerPoints+7)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 7
                        });
                    }
                } else if (this.state.src == this.state.card8club || this.state.src == this.state.card8dmd || this.state.src == this.state.card8hrt || this.state.src == this.state.card8spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 8
                    });
                    if((this.state.dealerPoints+8)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 8
                        });
                    }
                } else if (this.state.src == this.state.card9club || this.state.src == this.state.card9dmd || this.state.src == this.state.card9hrt || this.state.src == this.state.card9spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 9
                    });
                    if((this.state.dealerPoints+9)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 9
                        });
                    }
                } else if (this.state.src == this.state.card10club || this.state.src == this.state.card10dmd || this.state.src == this.state.card10hrt || this.state.src == this.state.card10spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if((this.state.dealerPoints+10)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 10
                        });
                    }
                } else if (this.state.src == this.state.cardJclub || this.state.src == this.state.cardJdmd || this.state.src == this.state.cardJhrt || this.state.src == this.state.cardJspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if((this.state.dealerPoints+10)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 10
                        });
                    }
                } else if (this.state.src == this.state.cardQclub || this.state.src == this.state.cardQdmd || this.state.src == this.state.cardQhrt || this.state.src == this.state.cardQspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if((this.state.dealerPoints+10)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 10
                        });
                    }
                } else if (this.state.src == this.state.cardKclub || this.state.src == this.state.cardKdmd || this.state.src == this.state.cardKhrt || this.state.src == this.state.cardKspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if((this.state.dealerPoints+10)<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 10
                        });
                    }
                } else if (this.state.src == this.state.cardAclub || this.state.src == this.state.cardAdmd || this.state.src == this.state.cardAhrt || this.state.src == this.state.cardAspd){
                    if((this.state.dealerPoints+11) >=11){
                        this.setState({
                            dealerPoints: this.state.dealerPoints + 1
                        })
                        if((this.state.dealerPoints+1)<17){
                            let string = 'Pictures/cards/'+this.getCard();
                            let card = document.createElement("img");
                            card.setAttribute("src", string);
                            card.setAttribute('style', 'height:73px; width: 58px');
                            document.querySelector(".dealerThirdCard").append(card);
                            this.setState({
                                dealerPoints:this.state.dealerPoints + 1
                            });
                        }
                    }  else{
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 11
                    });
                    if(this.state.dealerPoints<17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                        this.setState({
                            dealerPoints:this.state.dealerPoints + 11
                        });
                    }
                    }
                };
            }
            }


            doubleBtn = () =>{

                if(this.state.balance/2>= this.state.bet){
                this.state.src = 'Pictures/cards/'+this.getCard();
                this.setState({
                    bet: this.state.bet*2,
                    btn1:{
                        opacity:'0.25',
                        transition:'0.5s',
                    },
                    btn2:{
                        opacity:'0.25',
                        transition:'0.5s',
                    },
                    btn3:{
                        opacity:'0.25',
                        transition:'0.5s',
                    },
                    disabledBtnHit:'disabled',
                    disabledBtnHold:'disabled',
                    disabledBtnDouble:'disabled',
                });

                if(this.state.src == this.state.card2club || this.state.src == this.state.card2dmd || this.state.src == this.state.card2hrt || this.state.src == this.state.card2spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 2
                    });
                    if( (this.state.dealerPoints+2) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if(this.state.src == this.state.card3club || this.state.src == this.state.card3dmd || this.state.src == this.state.card3hrt || this.state.src == this.state.card3spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 3
                    });
                    if( (this.state.dealerPoints+3) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if(this.state.src == this.state.card4club || this.state.src == this.state.card4dmd || this.state.src == this.state.card4hrt || this.state.src == this.state.card4spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 4
                    });
                    if( (this.state.dealerPoints+4) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card5club || this.state.src == this.state.card5dmd || this.state.src == this.state.card5hrt || this.state.src == this.state.card5spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 5
                    });
                    if( (this.state.dealerPoints+5) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card6club || this.state.src == this.state.card6dmd || this.state.src == this.state.card6hrt || this.state.src == this.state.card6spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 6
                    });
                    if( (this.state.dealerPoints+6) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card7club || this.state.src == this.state.card7dmd || this.state.src == this.state.card7hrt || this.state.src == this.state.card7spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 7
                    });
                    if( (this.state.dealerPoints+7) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card8club || this.state.src == this.state.card8dmd || this.state.src == this.state.card8hrt || this.state.src == this.state.card8spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 8
                    });
                    if( (this.state.dealerPoints+8) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card9club || this.state.src == this.state.card9dmd || this.state.src == this.state.card9hrt || this.state.src == this.state.card9spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 9
                    });
                    if( (this.state.dealerPoints+9) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.card10club || this.state.src == this.state.card10dmd || this.state.src == this.state.card10hrt || this.state.src == this.state.card10spd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if( (this.state.dealerPoints+10) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.cardJclub || this.state.src == this.state.cardJdmd || this.state.src == this.state.cardJhrt || this.state.src == this.state.cardJspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if( (this.state.dealerPoints+10) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.cardQclub || this.state.src == this.state.cardQdmd || this.state.src == this.state.cardQhrt || this.state.src == this.state.cardQspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if( (this.state.dealerPoints+10) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.cardKclub || this.state.src == this.state.cardKdmd || this.state.src == this.state.cardKhrt || this.state.src == this.state.cardKspd){
                    this.setState({
                        dealerPoints: this.state.dealerPoints + 10
                    });
                    if( (this.state.dealerPoints+10) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                } else if (this.state.src == this.state.cardAclub || this.state.src == this.state.cardAdmd || this.state.src == this.state.cardAhrt || this.state.src == this.state.cardAspd){
                    if(this.state.dealerPoints >=11){
                        this.setState({
                            dealerPoints: this.state.dealerPoints + 1
                        })
                        if( (this.state.dealerPoints+1) <17){
                            let string = 'Pictures/cards/'+this.getCard();
                            let card = document.createElement("img");
                            card.setAttribute("src", string);
                            card.setAttribute('style', 'height:73px; width: 58px');
                            document.querySelector(".dealerThirdCard").append(card);
                        };
                    }  else{

                    this.setState({
                        dealerPoints: this.state.dealerPoints + 11
                    });
                    if( (this.state.dealerPoints+2) <17){
                        let string = 'Pictures/cards/'+this.getCard();
                        let card = document.createElement("img");
                        card.setAttribute("src", string);
                        card.setAttribute('style', 'height:73px; width: 58px');
                        document.querySelector(".dealerThirdCard").append(card);
                    };
                };
            }



                // let string = 'Pictures/cards/'+this.getCard();
                // let card = document.createElement("img");
                // document.querySelector(".dealerFirstCard").append(card);
                // // const imgd = <img src={string} style={height:'73px', width: '58px'};
                // card.setAttribute('src', string);
                // card.setAttribute('style', 'height:73px; width: 58px');

                let string = 'Pictures/cards/'+this.getCard();
                let card = document.createElement("img");
                document.querySelector(".player3Card").append(card);
                if(string == this.state.card2club || string == this.state.card2dmd || string == this.state.card2hrt || string == this.state.card2spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 2
                    });
                    if((this.state.playerPoints + 2)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if(string == this.state.card3club || string == this.state.card3dmd || string == this.state.card3hrt || string == this.state.card3spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 3
                    });
                    if((this.state.playerPoints + 3)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if(string == this.state.card4club || string == this.state.card4dmd || string == this.state.card4hrt || string == this.state.card4spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 4
                    });
                    if((this.state.playerPoints + 4)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card5club || string == this.state.card5dmd || string == this.state.card5hrt || string == this.state.card5spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 5
                    });
                    if((this.state.playerPoints + 5)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card6club || string == this.state.card6dmd || string == this.state.card6hrt || string == this.state.card6spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 6
                    });
                    if((this.state.playerPoints + 6)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card7club || string == this.state.card7dmd || string == this.state.card7hrt || string == this.state.card7spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 7
                    });
                    if((this.state.playerPoints + 7)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card8club || string == this.state.card8dmd || string == this.state.card8hrt || string == this.state.card8spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 8
                    });
                    if((this.state.playerPoints + 8)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card9club || string == this.state.card9dmd || string == this.state.card9hrt || string == this.state.card9spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 9
                    });
                    if((this.state.playerPoints + 9)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.card10club || string == this.state.card10dmd || string == this.state.card10hrt || string == this.state.card10spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.cardJclub || string == this.state.cardJdmd || string == this.state.cardJhrt || string == this.state.cardJspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.cardQclub || string == this.state.cardQdmd || string == this.state.cardQhrt || string == this.state.cardQspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.cardKclub || string == this.state.cardKdmd || string == this.state.cardKhrt || string == this.state.cardKspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - (this.state.bet)*2
                        })
                    }
                } else if (string == this.state.cardAclub || string == this.state.cardAdmd || string == this.state.cardAhrt || string == this.state.cardAspd){
                    if(this.state.playerPoints >=11){
                        this.setState({
                            playerPoints: this.state.playerPoints + 1
                        })
                        if((this.state.playerPoints + 1)>21){
                            console.log("przegrywasz");
                            this.setState({
                                disabledBtnHit:'disabled',
                                disabledBtnHold:'disabled',
                                disabledBtnDouble:'disabled',
                                balance: this.state.balance - (this.state.bet)*2
                            })
                        }
                    }  else{
                        this.setState({
                            playerPoints: this.state.playerPoints + 11
                        });
                        }
                };

                card.setAttribute('src', string);
                card.setAttribute('style', 'height:73px; width: 58px');


            } else{
                this.setState({
                    styles:{
                        color:'#A30004',
                        transition:'0.8s',
                        fontSize:'30px',
                    },
                })
            }
        };

        // class TestComp extends React.Component {
        //     constructor(props){
        //         super(props);
        //         this.state ={
        //                 doubleoff:{
        //                     opacity:'0.25',
        //                     transition:'0.5s',
        //                 }
        //         }
        //     }
        //     render(){
        //         return <button className='decBtn2' style={{this.state.doubleoff}}>DOUBLE</button>;
        //
        //     }
        // };


            hitBtn1 = () =>{
                this.setState({
                    disabledBtnDouble:'disabled',
                })
                //const rand = this.getCard();
                let counter = 3;
                let string = 'Pictures/cards/'+this.getCard();
                let card = document.createElement("img");
                document.querySelector(".player"+counter+"Card").append(card);

                if(string == this.state.card2club || string == this.state.card2dmd || string == this.state.card2hrt || string == this.state.card2spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 2
                    });
                    if((this.state.playerPoints + 2)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if(string == this.state.card3club || string == this.state.card3dmd || string == this.state.card3hrt || string == this.state.card3spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 3
                    });
                    if((this.state.playerPoints + 3)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if(string == this.state.card4club || string == this.state.card4dmd || string == this.state.card4hrt || string == this.state.card4spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 4
                    });
                    if((this.state.playerPoints + 4)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card5club || string == this.state.card5dmd || string == this.state.card5hrt || string == this.state.card5spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 5
                    });
                    if((this.state.playerPoints + 5)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card6club || string == this.state.card6dmd || string == this.state.card6hrt || string == this.state.card6spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 6
                    });
                    if((this.state.playerPoints + 6)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card7club || string == this.state.card7dmd || string == this.state.card7hrt || string == this.state.card7spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 7
                    });
                    if((this.state.playerPoints + 7)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card8club || string == this.state.card8dmd || string == this.state.card8hrt || string == this.state.card8spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 8
                    });
                    if((this.state.playerPoints + 8)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card9club || string == this.state.card9dmd || string == this.state.card9hrt || string == this.state.card9spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 9
                    });
                    if((this.state.playerPoints + 9)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.card10club || string == this.state.card10dmd || string == this.state.card10hrt || string == this.state.card10spd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.cardJclub || string == this.state.cardJdmd || string == this.state.cardJhrt || string == this.state.cardJspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.cardQclub || string == this.state.cardQdmd || string == this.state.cardQhrt || string == this.state.cardQspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.cardKclub || string == this.state.cardKdmd || string == this.state.cardKhrt || string == this.state.cardKspd){
                    this.setState({
                        playerPoints: this.state.playerPoints + 10
                    });
                    if((this.state.playerPoints + 10)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                } else if (string == this.state.cardAclub || string == this.state.cardAdmd || string == this.state.cardAhrt || string == this.state.cardAspd){
                    if(this.state.playerPoints >=11){
                        this.setState({
                            playerPoints: this.state.playerPoints + 1
                        });
                        if((this.state.playerPoints + 1)>21){
                            console.log("przegrywasz");
                            this.setState({
                                disabledBtnHit:'disabled',
                                disabledBtnHold:'disabled',
                                disabledBtnDouble:'disabled',
                                balance: this.state.balance - this.state.bet
                            })
                        }
                    }  else{

                    this.setState({
                        playerPoints: this.state.playerPoints + 11
                    });
                    if((this.state.playerPoints + 11)>21){
                        console.log("przegrywasz");
                        this.setState({
                            disabledBtnHit:'disabled',
                            disabledBtnHold:'disabled',
                            disabledBtnDouble:'disabled',
                            balance: this.state.balance - this.state.bet
                        })
                    }
                    };
                };

                this.setState({

                })
                if(this.state.playerPoints == 21){
                    console.log("Perfect!!");
                    self.setState({
                        disabledBtnHit:'disabled',
                        disabledBtnDouble:'disabled',
                        disabledBtnHold:'disabled',
                        btn1:{
                            opacity:'0.25',
                            transition:'0.5s',
                        },
                        btn2:{
                            opacity:'0.25',
                            transition:'0.5s',
                        },
                        btn3:{
                            opacity:'0.25',
                            transition:'0.5s',
                        }
                    })
                }

                card.setAttribute('src', string);
                card.setAttribute('style', 'height:73px; width: 58px');
                counter++;
            };

        render(){
            let dealerPoints = <div className="dealerPoints">{this.state.dealerPoints}</div>;
            let playerPoints = <div className="playerPoints">{this.state.playerPoints}</div>;

            const decision = <div>
                    <button className='decBtn1' style={this.state.btn1} onClick={this.holdBtn} disabled={this.state.disabledBtnHold}>HOLD</button>
                    <button className='decBtn2' style={this.state.btn2} onClick={this.doubleBtn} disabled={this.state.disabledBtnDouble}>DOUBLE</button>
                    <button className='decBtn3' style={this.state.btn3} onClick={this.hitBtn1} disabled={this.state.disabledBtnHit}>HIT</button>
                </div>

            return <div className="mainContainer">
                <header>
                    <div className="balance">Balance: {this.state.balance}</div>
                    <div className="bet" style={this.state.styles}>Bet: {this.state.bet}</div>
                    <button className ="restart" type='button'>Restart</button>
                </header>
                <div className="gameTable">
                    <div className="dealerHand">
                        <div className="placedDealerCards">
                            <div className="dealerFirstCard">
                                <img src={this.state.src} style={this.state.cardStyle}/>
                            </div>
                            <div className="dealerSecondCard"></div>
                            <div className="dealerThirdCard"></div>
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
                            <div className="playerFirstCard"></div>
                            <div className="playerSecondCard"></div>
                            <div className="player3Card"></div>
                            <div className="player4Card"></div>
                            <div className="player5Card"></div>
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
