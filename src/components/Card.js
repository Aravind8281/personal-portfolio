import React from 'react'
import styled from 'styled-components'
function Card() {
  return (
    <Container>
        <div id="curve" class="card">
        <div class="footer">
            <div class="connections">
                
                <button class="connection facebook"><div class="icon"><a target="_blank" rel='noreferrer' href='https://github.com/Aravind8281'></a></div></button>
                <div class="connection twitter"><div class="icon"></div></div>
                <div class="connection behance"><div class="icon"></div></div>
            </div>
            <svg id="curve">
                <path id="p" d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
                <rect id="dummyRect" x="0" y="0" height="450" width="400"
              fill="transparent" />
            </svg>
            <div class="info">
                <div class="name">Aravind Venkatachalam</div>
                <div class="job">Developer,Machine Learner, Tester</div>
            </div>
        </div>
        <div class="card-blur"></div>
    </div>
    </Container>
        
  )
}

export default Card
const Container=styled.div`
    
    .card {
            position: absolute;
            float:right;
            background-image: url('/Images/damon.jpg');
            border-radius: 8px;
            height: 450px;
            width: 400px;
            top: 0;
            right: 0;
            left: 50%;
            bottom: 0;
            margin: auto;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            box-shadow: 0 0 80px -10px black;
            overflow: hidden;
        }

        .card-blur {
            position: absolute;
            height: 100%;
            width: calc(100% + 1px);
            background-color: black;
            opacity: 0;
            transition: opacity 0.15s ease-in;
        }

        .card:hover .card-blur {
            opacity: 0.6;
        }

        .footer {
            z-index: 1;
            position: absolute;
            height: 80px;
            width: 100%;
            bottom: 0;
        }

        svg#curve {
            position: absolute;
            fill: white;
            left: 0;
            bottom: 0;
            width: 400px;
            height: 450px;
        }

        .connections {
            height: 80px;
            width: 400px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 100px;
            margin: auto;
        }

        .connection {
            height: 25px;
            width: 25px;
            border-radius: 100%;
            background-color: white;
            display: inline-block;
            padding: 5px;
            margin-right: 25px;
            transform: translateY(200px);
            
            transition: transform 1s cubic-bezier(.46, 1.48, .18, .81);
        }

        .card:hover .connection {
            transform: translateY(0px);
        }

        .info {
            font-family: Inconsolata;
            padding-left: 20px;
            transform: translateY(250px);
            
            transition: transform 1s cubic-bezier(.31,1.21,.64,1.02);
        }

        .card:hover .info {
            transform: translateY(0px);
            color: aliceblue;
        }

        .name {
            font-weight: bolder;
            letter-spacing: 1px;
            font-size: 20px;
            color: azure;
        }

        .job {
            margin-top: 10px;
            font-size:10px;
            color: beige;
        }

        .connection.facebook {
            height: 35px;
            width: 35px;
            margin-left: 20px;
            padding: 0px;
            border-radius: 100%;
            overflow: hidden;
        }

        .connection.twitter {
            transition-delay: 0.06s;
        }

        .connection.behance {
            transition-delay: 0.12s;
        }

        .connection.facebook .icon {
            height: 100%;
            width: 100%;
            background-image: url('/Images/fb.png');
            background-position: center;
            background-size: cover;
            background-color: rgb(247, 241, 241);
        }

        .connection.twitter .icon {
            height: 18px;
            width: 18px;
            background-image: url('/Images/twitter.png');
            margin-top: 4px;
            margin-left: 4px;
            background-position: center;
            background-size: cover;
        }

        .connection.behance .icon {
            height: 18px;
            width: 18px;
            background-image: url('/Images/insta.png');
            margin-top: 3px;
            margin-left: 4px;
            background-position: center;
            background-size: cover;
        }
`