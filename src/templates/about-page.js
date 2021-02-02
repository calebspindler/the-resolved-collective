import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
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
const AboutPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page about-page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
			<div className="about-us-top site-width">
				<div className="about-us-top-text">
					<h1>Get To Know Us!</h1>
					<p>We are a community resolved in a journey to greater wellness through a lifestyle of nutrition, exercise, and essential oils. We work and act together in creating toxin-free homes, healthy families, and a more natural way of living.</p>
					<p>Our group is comprised of young professionals and stay-at-home moms. We are based in Louisville, Kentucky, but stretch all over the US, sharing our collective stories and encouraging each other to live our best life now.</p>
					<p>This site is home to all the resources dedicated to helping others join the collective and continue the journey. The contributors of these resources range across the spectrum of specialties: fitness professionals, nutritionists, nurses, to all-around information junkies, all committed to the same values.</p>
				</div>
				<div class="about-us-top-img">
					<img alt="Plants and essential oils on shelves" src="./assets/yl-home-lifestyle-2019-40.png" />
				</div>
			</div>
			<div className="about-us-bottom">
				<div className="member member-odd">
					<div className="member-container site-width">
						<div className="member-img">
							<img alt="Melanie Do" src="./assets/melanie-do-2019-08.jpg" />
						</div>
						<div className="member-text">
							<h2>Melanie Do</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/melaniedo.eo/">@melaniedo.eo</a></strong></p>
							<p>I am passionate about helping others awaken to their potential, see their value, and live empowered. I was born and raised in Arizona and currently live in the south-end of Louisville, KY with my husband, Kha, and my son, Ellis.</p>
							<p>I have been using Young Living oils since 2013 when my at-the-time boyfriend (now husband) started rubbing lavender and peppermint on my face to soothe my mind. In 2015 I became fully committed to everything Young Living and started my oils business!</p>
							<p>I have my Masters Degree in Counseling and am currently teaching classes at my local Barre3 studio, where I love to help people become balanced in body and empowered from within. I love using my essential oils to calm my mind and strengthen my body, using oils for anything from immune support to getting my baby to calm down and go to sleep! You will always find me with a Valor essential oil and a grapefruit lip balm in my purse.</p>
						</div>
					</div>
				</div>
				<div className="member">
					<div className="member-container">
						<div className="member-img">
							<img alt="Rachel Garcia" src="./assets/rachel-garcia-2019-3.jpg" />
						</div>
						<div className="member-text">
							<h2>Rachel Garcia</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/workout_withrachel/">@workout_withrachel</a></strong></p>
							<p>I was born and raised in Louisville, Kentucky by a single-mother with rockin’ friends and family that helped uplift me and get me to Lindsey Wilson College on a dual-scholarship for Volleyball and Track and Field. Fitness has been a part of my lifestyle for as long as I can remember, but just recently I realized the harmful effects of all of the “healthy foods” the industry suggested I eat. These foods, along with other unhealthy habits, addictions, and overwhelming chemicals took my mom’s life in December of 2018.</p>
							<p>I have since realized the importance of what goes in and on my body, and that the best brands have the least chemicals, preservatives and other additives that have harmful long-term effects on our bodies-Yikes!</p>
							<p>Although I have a degree in Human Services and Counseling, I am now pursuing Personal Training whilst sharing the goodness of all things Young Living. I always have Lavender, Thieves. and Peppermint on me; but after a long shift at 9round kickboxing I practically bathe in Panaway. Puedes hablar conmigo en español también. I hope you join me on this Journey.</p>
						</div>
					</div>
				</div>
				<div className="member member-odd">
					<div className="member-container">
						<div className="member-img">
							<img alt="Luanne Hardin" src="./assets/luanne-headshots-2019-001.jpg" />
						</div>
						<div className="member-text">
							<h2>Luanne Hardin</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/lively.living.with.luanne/">@lively.living.with.luanne</a></strong></p>
							<p>In 2017, I graduated from the Institute of Integrative Nutrition and became a Certified Health Coach, focusing on lifestyle changes and nutritional theories. I have been able to use my own personal testimony of weight loss (100+ pounds) to become a leader in showing others that weight loss doesn’t come from a lotion, potion or pill, but through quality nutrition, exercise, and chiropractic care at Middletown Family Chiropractic in Louisville, KY.</p>
							<p>My passion is to show others that true health is attainable by simple lifestyle changes. My favorite oil is Abundance! It’s my go-to oil before any public speaking event because it helps promote joy and peace. The other is Thieves Vitality for that immune system boost!</p>
						</div>
					</div>
				</div>
				<div className="member">
					<div className="member-container">
						<div className="member-img">
							<img alt="Julia Lee" src="./assets/julia-lee-2019-08.jpg" />
						</div>
						<div className="member-text">
							<h2>Julia Lee</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/the.living.collective/">@the.living.collective</a></strong></p>
							<p>I am passionate about loving on and supporting mamas in all stages. Through TTC, miscarriage, pregnancy, childbirth, breastfeeding, postpartum, and mom life- I’m here for you.</p>
							<p>I was raised in Norman, Oklahoma and attended Baylor University in Texas. I now live in Louisville, Kentucky with my high school sweetheart husband and our three beautiful, crazy babies- all 18 months apart. I was first interested in essential oils for the skin care benefits but quickly learned that they are good for so much more! Now you won’t find me without Frankincense on my face, stress away in my purse, and Ningxia Red in my fridge.</p>
							<p>I am so thankful for these little bottles and all they do for my family. My kids haven’t been to the doctor aside from well visits (and the occasional injury or asthma attack) since starting to use oils over three years ago and my youngest two have never been on antibiotics or prescriptions of any kind. Sharing this life of wellness that comes from these golden drops brings me great joy and it’s an honor to walk this path with you.</p>
						</div>
					</div>
				</div>
				<div className="member member-odd">
					<div className="member-container">
						<div className="member-img">
							<img alt="Kayla Spindler" src="./assets/kayla-2019-07.jpg" />
						</div>
						<div className="member-text">
							<h2>Kayla Spindler</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/kayla.spindler/">@kayla.spindler</a></strong></p>
							<p>Hello! I am a wife, momma, nurse, and pursuer of holistic wellness! I love caring for others and giving them the tools they need to make themselves and their families healthy!</p>
							<p>I live in San Diego with my husband, Caleb and 3 year old, Theo. Most days you can find me drinking coffee, cooking new recipes, and being outside with my sweet family. I started using Young Living in 2018 and fell in love with the benefits of the products for both body and mind. It has really been the best avenue for getting rid of toxins in our home and replacing them with something natural! My favorite products are Thieves cleaner, Peace and Calming, and mineral foundation.</p>
						</div>
					</div>
				</div>
				<div className="member">
					<div className="member-container">
						<div className="member-img">
							<img alt="Leah-Jo Turner" src="./assets/leah-2019-02.jpg" />
						</div>
						<div className="member-text">
							<h2>Leah-Jo Turner</h2>
							<p><strong><a target="_blank" rel="noreferrer" href="https://www.instagram.com/leahjoturner/">@leahjoturner</a></strong></p>
							<p>My name is Leah-Jo Turner and I believe in simple living. I was born and raised in Tulsa, Oklahoma before moving to Louisville, Kentucky in 2015 with my husband, Jared Turner. In 2016, I was introduced to Young Living essential oils.</p>
							<p>As a yoga instructor, I was familiar with utilizing lavender for a grounding practice—but I never imagined in my wildest dreams how I could use essential oils for my daily healing. I have struggled with severe cystic acne since puberty started; Before using Young Living, I was heavily reliant on medications, topical Rx creams, and harmful chemicals to heal my skin. My journey to healing my acne started with understanding my hormones and that understanding has only been enhanced through utilizing essential oils.</p>
							<p>After witnessing an incredible difference in the overall appearance and quality of my skin—I started using essential oils for recipes, immune support, and mental healing.I always keep Frankincense fully stocked for healthy, glowing skin and Ningxia Red for days that I need a little extra boost!</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage