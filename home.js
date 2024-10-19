.flex-row, .home .specific-container .items .items-content > .swiper-wrapper > .swiper-slide, .home .big-row-container > .swiper-wrapper > .swiper-slide > div button, .home .big-row-container > .swiper-wrapper > .swiper-slide > div > nav {
  display: flex;
  flex-direction: row;
}

.flex-column, .home .channel-guide > .swiper-wrapper > .swiper-slide > div, .home .specific-container .items, .home .specific-container, .home .big-row-container > .swiper-wrapper > .swiper-slide > div, .home .banner > .swiper-wrapper > .swiper-slide > section, .row-container > .swiper-wrapper > .more, .home .channel-guide > .swiper-wrapper > .more, .home .big-row-container > .swiper-wrapper > .more, .row-container > .swiper-wrapper > .swiper-slide > section, .home .channel-guide > .swiper-wrapper > .swiper-slide > section, .home .big-row-container > .swiper-wrapper > .swiper-slide > section, .row-container > .swiper-wrapper > .swiper-slide > .uhd, .home .channel-guide > .swiper-wrapper > .swiper-slide > .uhd, .home .big-row-container > .swiper-wrapper > .swiper-slide > .uhd, .row-container, .home .channel-guide, .home .big-row-container {
  display: flex;
  flex-direction: column;
}

.flex-row, .home .specific-container .items .items-content > .swiper-wrapper > .swiper-slide, .home .big-row-container > .swiper-wrapper > .swiper-slide > div button, .home .big-row-container > .swiper-wrapper > .swiper-slide > div > nav {
  display: flex;
  flex-direction: row;
}

.flex-column, .home .channel-guide > .swiper-wrapper > .swiper-slide > div, .home .specific-container .items, .home .specific-container, .home .big-row-container > .swiper-wrapper > .swiper-slide > div, .home .banner > .swiper-wrapper > .swiper-slide > section, .row-container > .swiper-wrapper > .more, .home .channel-guide > .swiper-wrapper > .more, .home .big-row-container > .swiper-wrapper > .more, .row-container > .swiper-wrapper > .swiper-slide > section, .home .channel-guide > .swiper-wrapper > .swiper-slide > section, .home .big-row-container > .swiper-wrapper > .swiper-slide > section, .row-container > .swiper-wrapper > .swiper-slide > .uhd, .home .channel-guide > .swiper-wrapper > .swiper-slide > .uhd, .home .big-row-container > .swiper-wrapper > .swiper-slide > .uhd, .row-container, .home .channel-guide, .home .big-row-container {
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  color: white;
}

.anchor {
  scroll-behavior: smooth;
}

.row-container, .home .channel-guide, .home .big-row-container {
  gap: 20px;
  width: 95%;
  padding: 10px 0;
  margin-left: 5%;
  overflow-x: hidden;
}
.row-container .title, .home .channel-guide .title, .home .big-row-container .title {
  font-size: 25px;
}
.row-container > .swiper-wrapper, .home .channel-guide > .swiper-wrapper, .home .big-row-container > .swiper-wrapper {
  height: 80px;
}
.row-container > .swiper-wrapper > .swiper-slide, .home .channel-guide > .swiper-wrapper > .swiper-slide, .home .big-row-container > .swiper-wrapper > .swiper-slide {
  width: 20%;
  border-radius: 10px;
  transition: 300ms;
  position: relative;
}
.row-container > .swiper-wrapper > .swiper-slide > img, .home .channel-guide > .swiper-wrapper > .swiper-slide > img, .home .big-row-container > .swiper-wrapper > .swiper-slide > img {
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.row-container > .swiper-wrapper > .swiper-slide > .vip, .home .channel-guide > .swiper-wrapper > .swiper-slide > .vip, .home .big-row-container > .swiper-wrapper > .swiper-slide > .vip {
  position: absolute;
  top: 0;
  right: 10%;
  font-size: 12px;
  padding: 2px 5px 2px;
  color: #fff;
  background: linear-gradient(0deg, #e6008a, #ff3ab0);
}
.row-container > .swiper-wrapper > .swiper-slide > .vip:after, .home .channel-guide > .swiper-wrapper > .swiper-slide > .vip:after, .home .big-row-container > .swiper-wrapper > .swiper-slide > .vip:after {
  content: "VIP";
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  box-sizing: content-box;
}
.row-container > .swiper-wrapper > .swiper-slide > .uhd, .home .channel-guide > .swiper-wrapper > .swiper-slide > .uhd, .home .big-row-container > .swiper-wrapper > .swiper-slide > .uhd {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px 0 10px 0;
  color: #fff;
  background: linear-gradient(0deg, #e6008a, #ff3ab0);
  padding: 5px 10px;
  align-items: center;
}
.row-container > .swiper-wrapper > .swiper-slide > .uhd > span, .home .channel-guide > .swiper-wrapper > .swiper-slide > .uhd > span, .home .big-row-container > .swiper-wrapper > .swiper-slide > .uhd > span {
  font-size: 8px;
}
.row-container > .swiper-wrapper > .swiper-slide > .uhd > span:first-child, .home .channel-guide > .swiper-wrapper > .swiper-slide > .uhd > span:first-child, .home .big-row-container > .swiper-wrapper > .swiper-slide > .uhd > span:first-child {
  font-size: 15px;
}
.row-container > .swiper-wrapper > .swiper-slide > .tag, .home .channel-guide > .swiper-wrapper > .swiper-slide > .tag, .home .big-row-container > .swiper-wrapper > .swiper-slide > .tag {
  position: absolute;
  top: 10%;
  right: 10%;
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  border-radius: 5px;
  background: linear-gradient(0deg, #e6008a, #ff3ab0);
}
.row-container > .swiper-wrapper > .swiper-slide > section, .home .channel-guide > .swiper-wrapper > .swiper-slide > section, .home .big-row-container > .swiper-wrapper > .swiper-slide > section {
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.2);
  border-radius: 10px;
  justify-content: flex-end;
  padding: 20px;
  gap: 6px;
}
.row-container > .swiper-wrapper > .swiper-slide > section > p, .home .channel-guide > .swiper-wrapper > .swiper-slide > section > p, .home .big-row-container > .swiper-wrapper > .swiper-slide > section > p {
  font-size: 16px;
  color: #80787e;
}
.row-container > .swiper-wrapper > .swiper-slide > section > p span, .home .channel-guide > .swiper-wrapper > .swiper-slide > section > p span, .home .big-row-container > .swiper-wrapper > .swiper-slide > section > p span {
  color: #80787e;
  border: #80787e solid 1px;
  padding: 1px 2px;
  font-size: 11px;
}
.row-container > .swiper-wrapper > .swiper-slide > section > .light, .home .channel-guide > .swiper-wrapper > .swiper-slide > section > .light, .home .big-row-container > .swiper-wrapper > .swiper-slide > section > .light {
  color: #c9990f;
}
.row-container > .swiper-wrapper > .swiper-slide > section.lineGradient, .home .channel-guide > .swiper-wrapper > .swiper-slide > section.lineGradient, .home .big-row-container > .swiper-wrapper > .swiper-slide > section.lineGradient {
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
}
.row-container > .swiper-wrapper > .swiper-slide > section.small h3, .home .channel-guide > .swiper-wrapper > .swiper-slide > section.small h3, .home .big-row-container > .swiper-wrapper > .swiper-slide > section.small h3 {
  font-size: 13px;
}
.row-container > .swiper-wrapper > .swiper-slide > section.small > p, .home .channel-guide > .swiper-wrapper > .swiper-slide > section.small > p, .home .big-row-container > .swiper-wrapper > .swiper-slide > section.small > p {
  font-size: 8px;
}
.row-container > .swiper-wrapper > .swiper-slide > section.small > p span, .home .channel-guide > .swiper-wrapper > .swiper-slide > section.small > p span, .home .big-row-container > .swiper-wrapper > .swiper-slide > section.small > p span {
  font-size: 5px;
}
.row-container > .swiper-wrapper > .more, .home .channel-guide > .swiper-wrapper > .more, .home .big-row-container > .swiper-wrapper > .more {
  width: auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  font-size: 14px;
}
.row-container > .swiper-wrapper > .more .iconfont, .home .channel-guide > .swiper-wrapper > .more .iconfont, .home .big-row-container > .swiper-wrapper > .more .iconfont {
  font-size: 20px;
}
.row-container > .swiper-wrapper > .more span, .home .channel-guide > .swiper-wrapper > .more span, .home .big-row-container > .swiper-wrapper > .more span {
  color: #fff;
}
.row-container > .swiper-wrapper > .active, .home .channel-guide > .swiper-wrapper > .active, .home .big-row-container > .swiper-wrapper > .active {
  border: 0.1vw solid #fff;
  position: relative;
  transform: scale(1, 1.1);
}
.row-container > .swiper-wrapper > .active > section, .home .channel-guide > .swiper-wrapper > .active > section, .home .big-row-container > .swiper-wrapper > .active > section {
  opacity: 1;
}
.row-container > .swiper-wrapper > .active:after, .home .channel-guide > .swiper-wrapper > .active:after, .home .big-row-container > .swiper-wrapper > .active:after {
  content: "";
  position: absolute;
  left: 15%;
  top: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(-50%);
  z-index: 1;
}
.row-container > .swiper-wrapper > .active:before, .home .channel-guide > .swiper-wrapper > .active:before, .home .big-row-container > .swiper-wrapper > .active:before {
  content: "";
  position: absolute;
  right: 15%;
  bottom: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(50%);
  z-index: 1;
}
.row-container > .swiper-wrapper > .more.active, .home .channel-guide > .swiper-wrapper > .more.active, .home .big-row-container > .swiper-wrapper > .more.active {
  color: #fff;
  border: none;
  position: static;
  transform: scale(1);
}
.row-container > .swiper-wrapper > .more.active:after, .home .channel-guide > .swiper-wrapper > .more.active:after, .home .big-row-container > .swiper-wrapper > .more.active:after {
  display: none;
}
.row-container > .swiper-wrapper > .more.active:before, .home .channel-guide > .swiper-wrapper > .more.active:before, .home .big-row-container > .swiper-wrapper > .more.active:before {
  display: none;
}
.row-container .more-height, .home .channel-guide .more-height, .home .big-row-container .more-height {
  /* height: 150px; */
  max-height: 150px;
}

.home {
  margin-top: 110px;
}
.home .banner > .swiper-wrapper {
  height: 450px;
}
.home .banner > .swiper-wrapper > .swiper-slide {
  display: block;
  background: #fff;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  text-align: center;
  transition: 300ms;
  transform: scale(0.82, 0.83);
}
.home .banner > .swiper-wrapper > .swiper-slide > section {
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
  border-radius: 10px;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  gap: 6px;
}
.home .banner > .swiper-wrapper > .swiper-slide > section > h3 {
  font-size: 20px;
  color: #80787e;
}
.home .banner > .swiper-wrapper > .swiper-slide > section > h3 span {
  color: #80787e;
  border: #80787e solid 1px;
  padding: 1px 2px;
  font-size: 11px;
}
.home .banner > .swiper-wrapper > .swiper-slide > section > .light {
  color: #c9990f;
}
.home .banner > .swiper-wrapper > .swiper-slide img {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.home .banner > .swiper-wrapper > .swiper-slide-active {
  transform: scale(0.94);
}
.home .banner > .swiper-wrapper > .active {
  box-sizing: border-box;
  border: 0.1vw solid #fff;
  position: relative;
}
.home .banner > .swiper-wrapper > .active > section {
  opacity: 1;
}
.home .banner > .swiper-wrapper > .active:after {
  content: "";
  position: absolute;
  left: 15%;
  top: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(-50%);
  z-index: 1;
}
.home .banner > .swiper-wrapper > .active:before {
  content: "";
  position: absolute;
  right: 15%;
  bottom: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(50%);
  z-index: 1;
}
.home .big-row-container {
  width: 100%;
}
.home .big-row-container > .swiper-wrapper {
  height: 300px;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide {
  width: 88%;
  position: relative;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  align-items: flex-start;
  gap: 10px;
  padding: 40px 30px;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div > nav {
  align-items: center;
  gap: 10px;
  font-size: 20px;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div > nav .divider {
  height: 2vw;
  width: 0.1vw;
  background: #fff;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div > nav > img {
  height: 40px;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div h1 {
  font-size: 30px;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div h4 {
  color: #80787e;
  font-weight: 500;
}
.home .big-row-container > .swiper-wrapper > .swiper-slide > div button {
  background: rgba(79, 79, 79, 0.7);
  padding: 15px 30px;
  gap: 10px;
  border-radius: 10px;
  font-size: 18px;
}
.home .big-row-container > .swiper-wrapper .active > div button {
  background: #e6008a;
  border: #fff solid 2px;
  position: relative;
}
.home .big-row-container > .swiper-wrapper .active > div button:after {
  content: "";
  position: absolute;
  top: 0;
  left: 20%;
  width: 0.1vw;
  height: 0.1vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 8px 6px;
  transform: scale(3, 1);
}
.home .big-row-container > .swiper-wrapper .active > div button:before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 0.1vw;
  height: 0.1vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 8px 6px;
  transform: scale(3, 1);
}
.home .specific-container {
  position: relative;
  width: 95%;
  margin-left: 5%;
  padding: 10px 0;
  height: auto;
}
.home .specific-container .bg-wall {
  width: 100%;
  object-fit: cover;
  z-index: -1;
}
.home .specific-container .items {
  position: absolute;
  left: 25%;
  top: 0;
  width: 75%;
  height: 100%;
  overflow: hidden;
}
.home .specific-container .items > .title {
  font-size: 40px;
  padding: 50px 0 30px;
  text-shadow: 0 8px 10px #333;
}
.home .specific-container .items .items-content > .swiper-wrapper {
  width: 30%;
  height: 100%;
}
.home .specific-container .items .items-content > .swiper-wrapper > .swiper-slide {
  align-items: center;
  background: red;
  border-radius: 8px;
  overflow: hidden;
  transition: 300ms;
}
.home .specific-container .items .items-content > .swiper-wrapper > .swiper-slide > img {
  width: 100%;
}
.home .specific-container .items .items-content > .swiper-wrapper > .active {
  border: 0.1vw solid #fff;
  transform: scale(1, 1.1);
  position: relative;
}
.home .specific-container .items .items-content > .swiper-wrapper > .active > section {
  opacity: 1;
}
.home .specific-container .items .items-content > .swiper-wrapper > .active:after {
  content: "";
  position: absolute;
  left: 15%;
  top: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(-50%);
  z-index: 1;
}
.home .specific-container .items .items-content > .swiper-wrapper > .active:before {
  content: "";
  position: absolute;
  right: 15%;
  bottom: 0;
  width: 0.3vw;
  height: 0.3vw;
  border-radius: 10vw;
  background: #fff;
  background: radial-gradient(farthest-corner at 50% 50%, #fff);
  box-shadow: #fff 0 0 0.8vw 0.3vw;
  transform: scale(2, 1) translateY(50%);
  z-index: 1;
}
.home .channel-guide > .swiper-wrapper {
  height: 9vw;
}
.home .channel-guide > .swiper-wrapper > .swiper-slide {
  /* width: 10vw; */
  width: 10vw;
  position: relative;
  gap: 5px;
}
.home .channel-guide > .swiper-wrapper > .swiper-slide > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 5px;
  justify-content: center;
  align-items: center;
}
.home .channel-guide > .swiper-wrapper > .swiper-slide > div span {
  font-weight: 600;
}
.home .channel-guide > .swiper-wrapper > .more {
  width: auto;
}

/*# sourceMappingURL=home.css.map */
