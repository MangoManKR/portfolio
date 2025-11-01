import React from "react";

function article_1() {
	return {
		date: "12 Jan 2024",
		title: "디지털 치료제는 어떻게 받아들여져야 하는가",
		description:
			"Consideration of what I learned from hospital clinical observership and the future direction of digital healthcare.",
		keywords: [
			"Healthcare",
			"Hospital",
			"Clinical observership"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
				}

				.randImage {
					align-self: center;
					outline: 2px solid black;
					width: 100%;
					max-height: 80vh;
					margin: 50px;
				}

				.paragraph {
					text-align:  center;
					white-space: pre-wrap;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">{"한양대학교 구리 병원의 재활의학과를 견학하였다. 게임을 이용한 재활치료를 중점적으로 둘러보고 올 수 있었다.\n"}
					</div>
					<img
						src={process.env.PUBLIC_URL + '/article1/action_support.jpg'}
						alt="supporting image"
						className="randImage"
						object-fit="scale-down"
					/>
					<div className="paragraph">{"카메라가 환자의 움직임을 분석하여 게임에 반영되는 시스템이 있는 것은 흥미로웠다. \n하지만 기술이 완벽하지 않아 게임에서 인식이 되지 않는 부분이 많았다. 이에 환자의 흥미도 줄어들고, 효율적인 치료법이 되기는 힘든 듯 보였다."} </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/boxing.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">{"또한, 인지가 좋지 못한 환자들이 많기 때문에 환자 개인이 주체적으로 게임을 진행하는 것이 어려워보였다. \n동영상에서 보이다시피 환자 옆에서 보조자가 계속 치료를 도와야했고, 이가 병원에서도 생각하는 불편한 점 중 하나인 듯 싶다.\n\n 아울러, 영상에서 등장하는 컨트롤러는 그냥 가벼운 플라스틱 병인데, 재활치료에서는 촉감이 굉장히 중요하다고 한다. 그렇기에 햅틱 피드백을 줄 수 있는 컨트롤러와 함께 치료를 할 수 있다면 뇌 재활치료에도 긍정적인 영향을 미칠 수 있을 것으로 기대된다."} </div>
					<img
						src={process.env.PUBLIC_URL + '/article1/card_support.jpg'}
						alt="supporting image"
						className="randImage"
						object-fit="scale-down"
					/>
					<div className="paragraph">{"환자들이 좋아하는 재활치료 중 하나는 카드 짝 맞추기라고 한다. \n 이는 기존의 환자에게 익숙한 대상(화투)를 이용하여 치료를 진행하기 때문에 그런 것으로 유추된다. \n\n 같은 방식으로 지금의 중장년층, 혹은 청년층이 노인이 되고 재활치료가 필요한 시기가 되었을 때 그 세대에게 익숙한 방식을 차용한 재활치료 및 헬스케어 서비스를 제공한다면 사용자들에게서 좋은 반응을 얻을 수 있을 것이라고 생각한다."} </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/juice.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">{"장갑 형식으로 된 컨트롤러가 있었는데 이에 매우 관심이 많이 갔다. \n앞서 서술했다시피 햅틱 피드백이 되는 컨트롤러의 형태로서는 장갑만한 것이 없고, 이를 응용한 게임들도 많이 있었는데 치료에 적극적으로 응용되지 않았던 이유가 의아했다."} </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/socks.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">{"이러한 형태의 치료도구가 잘 이용되지 않는 이유는 첫째로 착용의 불편함에 있었다. \n 본 치료기기는 손에 끼우거나 감아야 하는 고정부가 너무 많았고, 그렇기에 착용하는 데 걸리는 시간이 길어 환자들이 부담감을 느끼는 것이었다. \n 더군다나 형태는 장갑의 형태였지만 인식이 되는 부분은 엄지와 검지 위주였고, 다른 손가락은 인식이 잘 되지 않아 환자들의 흥미가 금세 떨어지는 듯 싶었다. \n그러한 단점들 때문에 주요한 재활치료기기로 사용되지 않고 있었고, 나는 그를 보며 추후 제품 설계에 참여할 때에 사용자의 입장을 고려할 수 있는 단서를 하나 더 추가할 수 있었다."} </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/sushi.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">{"마지막으로, 요즘 애플의 비전프로로 이야기가 많이 나오는 HMD와 이를 이용한 치료기기에 대한 이야기도 나누었다. \n\n HMD를 이용하여 환자가 치료를 할 때에는, 앞선 예시처럼 치료사가 환자를 보조할 방법이 없는 것이 큰 문제라고 한다. \n비장애인 기준으로 만들어진, 컴퓨터를 사용할 줄 아는 사람을 기준으로 만들어진 소프트웨어 및 프로그램이 너무 많다는 것을 느끼게 되었고, 그에 따른 유연한 기준에 대해서 생각해볼 수 있는 계기가 되었던 유익한 시간이었다."} </div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 Jun 2024",
		title: "게임 역기획서 써보기",
		description:
			"Independent Reverse Spec & Concept Study - The Legend of Zelda: BotW",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
				}

				.randImage {
					align-self: center;
					outline: 2px solid black;
					width: 100%;
					max-height: 80vh;
					margin: 50px;
				}

				.paragraph {
					text-align:  center;
					white-space: pre-wrap;
				}
				`,
		keywords: [
			"Reverse Concept Study",
			"BotW",
			"Breath of the Wild"
		],
		body: (
			<React.Fragment>
				<div className="article-content">
          <div className="paragraph">
            {"이번 글에서는 작성해둔 역기획서 pdf를 그대로 첨부해보려 합니다.\n"}
          </div>

          {/* 여기서 pdf 보여줌 */}
          <iframe
            src={process.env.PUBLIC_URL + "/article2/zelda.pdf"}
            title="게임 역기획서"
            className="pdf-viewer"
          />

          {/* 혹시 iframe이 안 보일 때를 대비한 다운로드 링크 */}
          <a
            href={process.env.PUBLIC_URL + "/article2/zelda.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            PDF 새 창에서 열기
          </a>
        </div>
			</React.Fragment>
		),
	};
}
/*
function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}
*/
const myArticles = [article_1, article_2 /*article_2*/];

export default myArticles;
