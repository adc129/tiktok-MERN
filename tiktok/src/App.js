import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video url= "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/37e88d99b64a48ba8c945d5c0fffcd18/?a=1988&br=3104&bt=1552&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1607658168&l=202012102142220101902080471A0F7749&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M2o5Omw3NjhndzMzNjczM0ApaDc6aDRlPDxnNzs7aDQ3OmcuNDI2cy1ecWVfLS1iMTZzc2NhMTViXjRfXmNeLV8uLjU6Yw%3D%3D&signature=27239fa67518dcd2eb5760f3fb367d5d&tk=tt_webid_v2&vl=&vr="
              song= "this is a demo!!"
              channel="tik tok clone"
              description="this was made with ReactJS MongoDB NodeJS ExpressJS"
              likes={132}
              messages={333}
              shares={432}/>
        <Video
              url= "https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/3881f1f29144417e85aca26bea18ab89/?a=1988&br=3446&bt=1723&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1607658069&l=202012102140110101890651373C0F5DCF&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=ajY0Zzk8eHB2eDMzOTczM0ApNTUzNmk1ZGRlNzc2Zzg8PGdqNmtxMnEtMHNfLS0tMTZzczUxXjRgLWNgYDYwLWIxNi46Yw%3D%3D&signature=d65bd6728519cb3ba325f6e57935a7ec&tk=tt_webid_v2&vl=&vr="
              song= "this is a demo!!"
              channel="tik tok clone"
              description="hosted on Heroku and Firebase"
              likes={542}
              messages={633}
              shares={932}/>
      </div>
    </div>
  );
}

export default App;
