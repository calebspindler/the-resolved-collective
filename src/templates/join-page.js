import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query JoinQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const JoinPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="join-page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper site-width">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>

			<div className="join-page-content">
				<div className="join-page-sec1 site-width">
					<div className="join-page-sec1-img">
						<img alt="Cabinet filled with essential oils" src="./assets/yl-home-lifestyle-2019-35.jpg" />
					</div>
					<div className="join-page-sec1-text">
						<p>We have a growing a community. When you join as a MEMBER, you will receive a
						welcome package with resources to start your journey. You will also receive
						exclusive access to our collective resources and be added to our facebook
						group and online community. There is NO PRESSURE to sell. You can join simply
						to enjoy your oils and learn from this beautiful community.</p>
						<p>Starting is simple, just enroll as a MEMBER by clicking on the team member
						that has been sharing about oils with you below this page or just click HERE.</p>
					</div>
				</div>
				<div className="join-page-sec2">
					<div className="join-page-sec-background site-width">
						<div className="join-page-sec2-text">
							<p>We recommend purchasing the Premium Starter Kit ($165) and picking an Essential Rewards Kit. Choose the WHOLESALE option to get the whole prices on your order.</p>
							<p>This does NOT mean you will ever have to sell anything. It just means as a WHOLESALE member you get 24% off prices!</p>
							<p>Nevertheless, we stand behind Young Living’s products, so both options are great.</p>
						</div>
						<div className="join-page-sec2-img">
							<img alt="Essential oils and a diffuser" src="./assets/yl-2019-starter-kit-49.jpg" />
						</div>
					</div>
				</div>
				<div className="join-page-sec3 site-width">
					<h2>Choose What Works Best For You!</h2>
				</div>
				
				<div className="join-page-sec4 site-width">
					<div className="join-page-sec4-text">
						<h3>OPTION ONE | Wholesale Customer (recommended)</h3>
						<ul>
							<li>No renewal fee; simply purchase a minimum of $50pv of product per year and your account stays active.</li>
							<li>No order minimum – order whenever you like, as often as you like at 24% off retail prices.</li>
							<li>There is no pressure to sell oils when you sign up. YL refers to wholesale members as “distributors” but that simply means that you receive distributor prices.</li>
							<li>You’ll also receive a member number to share with friends; if they order using your member number, YL thanks you for sharing by sending you compensation for the referral!</li>
						</ul>
					</div>
					<div className="join-page-sec4-img">
						<img alt="Essential oils and Young Living magazines" src="./assets/yl-2019-starter-kit-3.jpg" />
					</div>
				</div>

				<div className="join-page-sec5">
					<div className="join-page-sec-background site-width">
						<div className="join-page-sec5-img">
							<img alt="Young Living Thieves Cleaning Products" src="./assets/thieves-cleaning-products-2019-18.jpg" />
						</div>
						<div className="join-page-sec5-text">
							<h3>OPTION TWO | Retail Customer</h3>
							<ul>
								<li>There is no starter kit required.</li>
								<li>Order products whenever you would like (but pay 24% more than a wholesale customer).</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="join-page-sec6 site-width">
					<h2>Also, consider choosing an Essential Rewards Kit:</h2>
				</div>


				<div className="join-page-sec7 site-width">
					<div className="join-page-sec7-img">
						<img alt="Melanie and Julia looking at bottles of essential oils" src="./assets/rc-website-16.jpg" />
					</div>
					<div className="join-page-sec7-text">
						<p><strong>Consider Choosing an Essential Rewards Kit:</strong> When checking out with your starter kit, you can select “no thank you” for the ER or choose a package and ship them together for extra savings. This is like any other Rewards Program for frequent buyers. Chances are, you’ll be coming back for more, and you won’t regret taking advantage of savings now. You can also customize your own, which we recommend! For every purchase you get 10-20% back in points each month, which you can redeem to purchase products (shampoo, vitamins, toothpaste, cleaning supplies, oils, makeup and more). <strong>Remember, you can cancel anytime</strong>.</p>
						<h4>To sign up for Essential Rewards:</h4>
						<ul>
							<li>Click, continue to autoship</li>
							<li>Click EDIT</li>
							<li>Click add product</li>
							<li>Click save</li>
						</ul>
					</div>
				</div>
				<div className="join-page-sec8 site-width">
					<h2>Select your team member below, or just click <a target="_blank" href="yl.pe/4htp">here</a>.</h2>
					<div className="join-page-members">
						<div className="join-member-container">
							<a target="_blank" href="https://yl.pe/4htp"><img alt="Melanie Do" src="./assets/melanie-do-2019-08.png" />
								<div class="name-button">
									<div class="name-button-text">Melanie Do</div>
								</div>
							</a>
						</div>
						<div className="join-member-container">
							<a target="_blank" href="https://yl.pe/7tfw"><img alt="Rachel Garcia" src="./assets/rachel-garcia-2019-3.png" />
								<div class="name-button">
									<div class="name-button-text">Rachel Garcia</div>
								</div>
							</a>
						</div>
						<div className="join-member-container">
							<a target="_blank" href="https://www.myyl.com/livelyliving#enroll"><img alt="Luanne Hardin" src="./assets/luanne-headshots-2019-001.png" />
								<div class="name-button">
									<div class="name-button-text">Luanne Hardin</div>
								</div>
							</a>
						</div>
						<div className="join-member-container">
							<a target="_blank" href="https://yl.pe/999x"><img alt="Julia Lee" src="./assets/julia-lee-2019-08.png" />
								<div class="name-button">
									<div class="name-button-text">Julia Lee</div>
								</div>
							</a>
						</div>
						<div className="join-member-container">
							<a target="_blank" href="https://yl.pe/bzp9"><img alt="Kayla Spindler" src="./assets/kayla-2019-07.png" />
								<div class="name-button">
									<div class="name-button-text">Kayla Spindler</div>
								</div>
							</a>
						</div>
						<div className="join-member-container">
							<a target="_blank" href="https://yl.pe/bzpb"><img alt="Leah-Jo Turner" src="./assets/leah-2019-02.png" />
								<div class="name-button">
									<div class="name-button-text">Leah-Jo Turner</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="join-page-sec9">
					<div className="join-page-sec-background site-width">
						<h2>Join and Resolve Today!</h2>
					</div>
				</div>

				<div className="join-page-sec10 site-width">
					<div className="join-page-sec10-text">
						<p>Our community believes in the power behind essential oils, and Young Living Essential Oils provides the greatest quality of essential oils on the planet. Learn more about their Seed to Seal guarantee HERE.</p>
						<p>For questions, email us at hello@theresolvedcollective.com.</p>
				</div>
				<div className="join-page-sec10-img">
					<img alt="Succulent with red flower" src="./assets/yl-home-lifestyle-2019-30.jpg" />
				</div>
				</div>
			</div>
		</Layout>
	)
}

export default JoinPage