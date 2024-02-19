import React from "react";

function article_1() {
	return {
		date: "12 Jan 2024",
		title: "디지털 치료제는 어떻게 받아들여져야 하는가",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
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
					<div className="paragraph">{"Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것.\n"}
					</div>
					<img
						src={process.env.PUBLIC_URL + '/article1/action_support.jpg'}
						alt="supporting image"
						className="randImage"
						object-fit="scale-down"
					/>
					<div className="paragraph">Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것. </div>
					<img
						src={process.env.PUBLIC_URL + '/article1/card_support.jpg'}
						alt="supporting image"
						className="randImage"
						object-fit="scale-down"
					/>
					<div className="paragraph">Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것. </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/boxing.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것. </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/juice.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것. </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/socks.mp4'}
						controls
						className="randImage"
					/>
					<div className="paragraph">Content of article 1와 최대 길이가 얼마인지와 자동 줄바꿈이 되는 지 안 되는 지 알아보기 위한 아무말을 적어보기. 이 글은 렌더링을 해보고 문제가 없을 경우에는 다시 삭제할 것. </div>
					<video
						src={process.env.PUBLIC_URL + '/article1/sushi.mp4'}
						controls
						className="randImage"
					/>
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
const myArticles = [article_1, /*article_2*/];

export default myArticles;
