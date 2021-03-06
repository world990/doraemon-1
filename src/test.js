const string = `
/* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*::before {
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}
/* 大家好，今天我来画一个蓝胖子 */
/* 首先画一个蓝色的脑袋 */
.head {
  position: relative;
  border: 2px solid rgb(85, 85, 85);
  width: 400px;
  height: 380px;
  left: 50%;
  margin-left: -200px;
  background: rgb(9, 180, 227);
  border-radius: 50%;
  top: 0;
}
/* 继续两颗圆圆的眼睛 */
.head .eye {
  position: absolute;
  border: 2px solid rgb(0, 0, 0);
  width: 76px;
  height: 86px;
  left: 50%;
  margin-left: -38px;
  border-radius: 35px;
  top: 50px;
  background: white;
  z-index: 10;
}
/* 把眼睛放好 */
.head .eye.left {
  transform: translateX(38px);
}
.head .eye.right {
  transform: translateX(-38px);
}
/* 再来画两颗黑色的眼珠 */
.eye.left::before,
.eye.right::before {
  content: "";
  display: block;
  background: black;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 40px;
}
.eye.left::before {
  left: 10px;
}
.eye.right::before {
  left: 50px;
}
/* 接下来轮到一张大白脸 */
.head .face {
  position: relative;
  position: absolute;
  border: 2px solid black;
  width: 340px;
  height: 260px;
  left: 50%;
  margin-left: -170px;
  top: 80px;
  border-radius: 150px;
  background: white;
}
/* 白色的脸上应该有一颗红里透白的鼻子 */
.head .face .nose {
  position: absolute;
  border: 2px solid black;
  width: 34px;
  height: 34px;
  left: 50%;
  margin-left: -17px;
  top: 40px;
  border-radius: 50%;
  background: #c93300;
  z-index: 5;
}
.head .face .nose .nosewing {
  border-radius: 5px;
  box-shadow: 19px 8px 5px #fff;
  height: 10px;
  width: 10px;
}
/* 接下来是胡须*/
.whisker > div {
  position: absolute;
  width: 80px;
  height: 2px;
  border: 1px solid black;
  left: 50%;
}
.head .face .whisker .zuo {
  margin-left: -116px;
  top: 110px;
}
.head .face .whisker .ul {
  margin-left: -113px;
  top: 80px;
  transform: rotate(25deg);
}
.head .face .whisker .ld {
  margin-left: -113px;
  top: 140px;
  transform: rotate(-25deg);
}
.head .face .whisker .right {
  margin-left: 39px;
  top: 110px;
}
.head .face .whisker .ru {
  margin-left: 37px;
  top: 80px;
  transform: rotate(-25deg);
}
.head .face .whisker .rd {
  margin-left: 37px;
  top: 140px;
  transform: rotate(25deg);
}
.noseLine {
  position: absolute;
  width: 2px;
  height: 150px;
  left: 50%;
  margin-left: -1px;
  border: 2px solid black;
  top: 62px;
  background: black;
}
/* 然要要有一张笑起来的嘴巴*/
.mouth {
  position: absolute;
  width: 220px;
  height: 300px;
  border: 1px solid red;
  left: 50%;
  margin-left: -110px;
  border-radius: 100px;
  border-bottom: 3px solid #333;
  border-color: transparent transparent black transparent;
  top: -88px;
}
/* 加上红色的领子 */
.collar {
  position: relative;
  border: 2px solid black;
  width: 270px;
  height: 40px;
  left: 50%;
  margin-left: -135px;
  bottom: 40px;
  background: rgb(170, 39, 0);
  border-radius: 50px/100px;
}
/* 招牌的铃铛 */
.collar .bell {
  position: absolute;
  border: 2px solid black;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  left: 50%;
  margin-left: -21px;
  top: 5px;
  background: rgb(243, 235, 38);
}
.collar .bell .heng {
  border: 2px solid black;
  width: 38px;
  height: 5px;
  transform: translateY(10px);
}
.collar .bell .yuan {
  position: absolute;
  background: black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  left: 50%;
  margin-left: -5px;
  top: 20px;
}
.collar .bell .shu {
  position: absolute;
  background: black;
  width: 2px;
  height: 15px;
  left: 50%;
  margin-left: -1px;
  top: 25px;
}
/* 一个哆啦A梦送给大家 */

`;
let n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);

let time = 100;
const player = {
  run: () => {
    n = n + 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    return setInterval(player.run, time);
  },
  pause: () => {
    window.clearInterval(id);
  },
  man: () => {
    player.pause();
    time = 100;
    id = player.play();
  },
  zhong: () => {
    player.pause();
    time = 50;
    id = player.play();
  },
  kuai: () => {
    player.pause();
    time = 0;
    id = player.play();
  },
};

let id = player.play();

btnPause.onclick = player.pause;
btnPlay.onclick = () => {
  id = player.play();
};
btnMan.onclick = player.man;
btnZhong.onclick = player.zhong;
btnKuai.onclick = player.kuai;
