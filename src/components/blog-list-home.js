/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, StaticQuery, graphql } from "gatsby"
// import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <div className="home-quote">
      <p>Essential oils are aromatic, concentrated plant extracts that are carefully obtained through steam distillation, cold pressing, or resin tapping. These oils benefit emotions, enhance physical wellness, and purify your home. We choose Young Living Essential Oils because of their unmatched purity and commitment to sustainability. Start your lifestyle journey today.</p>
    </div>
    <div className="home-about site-width">
      <div className="home-about-img">
        <img alt="One image of members of the The Resolved Collective sitting on a couch beside a table with essential oils on top of another image of essential oils and a diffuser." src="https://res.cloudinary.com/khadophoto/image/upload/c_scale,w_800/v1554151757/RC-%20About%20Us/rc-website-about-3.png" data-pagespeed-url-hash="3383114635" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
      </div>
      <div className="home-about-text">
        <h2>About Us</h2>
        <p>We are a community resolved to work together toward creating toxin-free homes, healthy families, and a more natural way of living.</p>
        <Link 
            className="button" 
            to="/about"
            sx={{
              variant: 'links.button'
            }}
          >
            more about us
          </Link>
      </div>
    </div>
    <div className="home-recent-posts">
      <div className="site-width">
        <div className="home-posts-title">
          <h2>Recent Posts</h2>
          <p>A space for connection in the collective—Read stories, recipes, and updates from the community.</p>

          <Link 
            className="button" 
            to="/blog"
            sx={{
              variant: 'links.button'
            }}
          >
            read more
          </Link>
        </div>
        <div className="home-posts-grid grids col-1 sm-2 lg-3">
          {data}
        </div>
      </div>
    </div>
  </section>
)

export default function BlogListHome() {
  return (
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { template: { eq: "blog-post" } } }
            limit: 3
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  slug
                  title
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }`
      }

      render={ data => {
          const posts = data.allMarkdownRemark.edges
            .filter(edge => !!edge.node.frontmatter.date)
            .map(edge =>
              <PostCard key={edge.node.id} data={edge.node} />
          )
          return <PostMaker data={posts} />
        } 
      }
    />
  )
}