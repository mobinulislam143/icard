import React,{Component} from "react";
import mainLogo from '../../assets/image/mainLogo.png'
import User from '../../assets/image/me.jpeg'
import Qrcode from '../../assets/image/qrcode.png'
import JSZip from 'jszip';
import  '../Dashboard/Dashboard.css'
import html2pdf from 'html2pdf.js';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            database: null,
        }
    }
    handleDownload = () => {
        const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>ID Card</title>
            <link rel="stylesheet" type="text/css" href="styles.css">
          </head>
          <body>
          <div class="container">
          <div class="idCard">
              <div class="cards">
                  <div class="headerTop">
                      <div class="headImg">
                          <img src='image.jpeg' alt="" />
                      </div>
                      <div class="headTxt">
                          <h3>cox'sBazar Polytechnic Institute</h3>
                      </div>
                  </div>
                  <div class="middleArea">
                      <div class="mainImg">
                          <img src='image.jpeg' alt="" />
                      </div><br/>
                      <div class="detailArea">
                          <h2>Mobinul Islam Mahi</h2>
                          <h2>Roll: 593314</h2>
                          <div class="pdetai">
      
                              <h4>Father's Name: Md Nurul Alam</h4>
                              <h4>Mother's Name: Ferdous Jahan</h4>
                              <h4>Reg. No: 1502161124</h4>
                              <h4>Shift: 1st</h4>
                              <h4>Blood Group: A+</h4>
                          </div>
                      </div>
                  </div>
                  <div class="footer">
                      <p>Computer Department</p>
                  </div>
              </div>
              
              <div class="backSide">
                 <div class="backcards">
                      <div class="backList">
                          <div class="backheaderTop">
                              <h1>Mobinul Islam Mahi</h1>
                              <h4>593318</h4>
                              <h4>Session: 2020-2021</h4>
                          </div>
                          <div class="backdetails">
                              <div class="qrcodes">
                                      <img src={Qrcode} alt=''/>
                                  </div><br/>
                                  
                                  <p>Phone: 01881565694</p>
                                  <p>Email: sadidrahinnohan0981@gmail.com</p>
                              <div class="backfooter">
                                  <h3>Note</h3>
                                  <p class="note">If the card is received by any well hearted person, please submit it to the register branch of Cox's Bazar Polytechnic Institute, Link Road, Cox's Bazar.</p>
                                  <h5>Thank You.</h5>
                              </div>
                          </div>
                      </div>
                 </div>
              </div>
          </div>
      </div>
          </body>
        </html>
        
        `;
        const cssContent = `
                
            .headerTop {
                padding: 10px;
                display: grid;
                grid-template-columns: repeat(2,auto);
                align-items: center;
                text-transform: uppercase;
            }
            .cards {
                width: 442px;
                background: linear-gradient(58deg, #971363, #180462, #460303);
                color: #fff;
                border-radius: 17px;
                border: 3px solid #444;
            }
            .backcards {
                width: 442px;
                background: linear-gradient(58deg, #971363, #180462, #460303);
                color: #fff;
                border-radius: 17px;
                border: 3px solid #444;
            }
            .headImg {
                width: 66px;
            }
            .headImg img {
                width: 100%;
            }
            .mainImg {
                width: 132px;
                border: 10px solid #970e9b;
                margin: auto;
            }
            .mainImg img {
                width: 100%;
            }
            .pdetail {
                padding-left: 60px;
            }
            .detailArea h2 {
                font-weight: 600;
            }
            .footer {
                text-align: center;
                padding: 8px 0;
                font-size: 21px;
            }
            
            .headTxt h3 {
                font-size: 18px;
                font-weight: 600;
            }
            .detailArea h2 {
                font-size: 29px;
                text-align: center;
            }
            .headTxt h3 {
                font-size: 18px;
                font-weight: 600;
            }
            .detailArea h2 {
                font-size: 29px;
                text-align: center;
            }
            .idCard {
                display: grid;
                grid-template-columns: repeat(2,auto);
                align-items: center;
                justify-items: center;
            }
            .headerTop h1 {
                padding-top: 26px;
                font-size: 28px;
                font-weight: 600;
            }
            
            .backList {
                text-align: center;
            }
            .backheaderTop h1 {
                font-size: 36px;
                font-weight: 600;
                margin-bottom: 5px;
                padding-top: 25px;
            }
            .backheaderTop h4 {
                font-size: 22px;
                font-family: revert-layer;
            }
            .qrcodes {
                width: 181px;
                margin: auto;
            }
            .qrcodes img {
                width: 100%;
            }
            .backdetails p {
                font-size: 20px;
                margin-bottom: 2px;
            }
            .backdetails {
                padding: 0 32px;
            }
            
            .backList {
                text-align: center;
            }
            .backheaderTop h1 {
                font-size: 36px;
                font-weight: 600;
                margin-bottom: 5px;
                padding-top: 25px;
            }
            .backheaderTop h4 {
                font-size: 22px;
                font-family: revert-layer;
            }
            .qrcodes {
                width: 181px;
                margin: auto;
            }
            .qrcodes img {
                width: 100%;
            }
            .backdetails p {
                font-size: 20px;
                margin-bottom: 2px;
            }
            .backdetails {
                padding: 0 32px;
            }
            .note {
                font-size: 10px;
            }
            .backfooter .note {
                font-size: 16px;
                width: 342px;
                margin: auto;
                padding-bottom: 24px;
            }
            .backfooter h3 {
                padding: 10px 0;
                color: red;
                font-size: 35px;
                font-weight: 600;
            }

            .downloadbtn {
            text-align: center;
            padding: 30px 0;
            }
            .downloadbtn button {
            padding: 10px 30px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            background: #007d2b;
            color: #fff;
            font-size: 22px;
            transition: 0.2s;
            }
            .downloadbtn button:hover{
                background: #015c21;
            }
    `;


    
    const element = document.getElementsByClassName('idCard');

    html2pdf()
      .set({ filename: 'generated.pdf' })
      .from(element)
      .save();
      };
    render(){
        return (
            <div style={{padding: '36px 0'}}> 
            <div className="container">
                    <div className="idCard">
                        <div className="cards">
                            <div className="headerTop">
                                <div className="headImg">
                                    <img src={mainLogo} alt="" />
                                </div>
                                <div className="headTxt">
                                    <h3>cox'sBazar Polytechnic Institute</h3>
                                </div>
                            </div>
                            <div className="middleArea">
                                <div className="mainImg">
                                    <img src={User} alt="" />
                                </div><br/>
                                <div className="detailArea">
                                    <h2></h2>
                                    <h2>Roll: 593314</h2>
                                    <div className="pdetail">
    
                                        <h4>Father's Name: Md Nurul Alam</h4>
                                        <h4>Mother's Name: Ferdous Jahan</h4>
                                        <h4>Reg. No: 1502161124</h4>
                                        <h4>Shift: 1st</h4>
                                        <h4>Blood Group: A+</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="footer">
                                <p>Computer Department</p>
                            </div>
                        </div>
                        
                        <div className="backSide">
                           <div className="backcards">
                                <div className="backList">
                                    <div className="backheaderTop">
                                        <h1>Mobinul Islam Mahi</h1>
                                        <h4>593318</h4>
                                        <h4>Session: 2020-2021</h4>
                                    </div>
                                    <div className="backdetails">
                                        <div className="qrcodes">
                                                <img src={Qrcode} alt=''/>
                                            </div><br/>
                                            
                                            <p>Phone: 01881565694</p>
                                            <p>Email: sadidrahinnohan0981@gmail.com</p>
                                        <div className="backfooter">
                                            <h3>Note</h3>
                                            <p className="note">If the card is received by any well hearted person, please submit it to the register branch of Cox's Bazar Polytechnic Institute, Link Road, Cox's Bazar.</p>
                                            <h5>Thank You.</h5>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                
                    <div className="downloadbtn">
                        <button onClick={this.handleDownload}>Download Id Card</button>
                    </div>
                
            </div>
        )}}
export default Dashboard

