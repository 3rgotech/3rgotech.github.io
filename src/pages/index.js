import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ArticleItem from "../components/article_item"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Title from "../components/title"

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
        musk
    }
}) => {
    const Articles = edges
        .map(edge => <ArticleItem key={edge.node.id} post={edge.node} />)

    return (
        <Layout>
            <SEO title="Accueil" />
            <section id="header" className="w-full h-screen pt-64 text-center text-white">
                <div className="w-full md:w-1/2 mx-auto">
                    <div className="w-3/4 mx-auto">
                        <Logo />
                    </div>
                    <h1 className="text-4xl mt-4">
                        Développement Web <span className="font-bold">&</span> Formation
                    </h1>
                    <ul className="actions relative text-center mt-64 pb-3">
                        <li>
                            <ScrollLink
                                to="one"
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="btn btn-white"
                            >
                                En Savoir Plus
                        </ScrollLink>
                        </li>
                    </ul>
                    <div className="absolute left-1/2 bg-white w-px h-20 md:h-64 mt-px">&nbsp;</div>
                </div>
            </section>

            <section id="one" className="w-full h-screen">
                <div className="md:flex p-4 md:p-16">
                    <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2 md:py-8 md:pr-16 text-gray-700">
                        <Title color="gray-700">Présentation</Title>
                        <p className="mt-8 mb-6 text-lg">
                            <blockquote className="relative p-4 text-xl italic border-l-4 bg-gray-100 text-gray-600 border-gray-500 quote">
                                <div className="stylistic-quote-mark" aria-hidden="true">
                                    &ldquo;
                                </div>
                                <p className="mb-4">
                                    People should pursue what they're passionate about. That will make them happier than pretty much anything else.
                                </p>
                                <cite className="flex items-center">
                                    <Img
                                        fixed={musk.childImageSharp.fixed}
                                        alt="Elon Musk"
                                        className="w-12 mr-4 rounded-full bg-gray-500"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="mb-1 text-sm italic font-bold">Elon Musk</span>
                                    </div>
                                </cite>
                            </blockquote>
                        </p>
                        <p className="mt-8 text-lg">
                            Consequat elit cillum nulla id nulla consequat consequat tempor ex. Ea mollit nostrud fugiat est deserunt magna pariatur. Cupidatat tempor est duis Lorem nulla enim magna ex ipsum. Consequat enim sit sunt aliqua officia consequat. Mollit in id occaecat excepteur veniam quis laboris ad excepteur. Irure enim aute voluptate irure ex esse laborum laborum nulla ut eiusmod id magna fugiat.
                        </p>
                        <p className="mt-8 text-lg">
                            Consequat elit cillum nulla id nulla consequat consequat tempor ex. Ea mollit nostrud fugiat est deserunt magna pariatur. Cupidatat tempor est duis Lorem nulla enim magna ex ipsum. Consequat enim sit sunt aliqua officia consequat. Mollit in id occaecat excepteur veniam quis laboris ad excepteur. Irure enim aute voluptate irure ex esse laborum laborum nulla ut eiusmod id magna fugiat.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:flex-shrink-0 md:w-1/2">
                        {/* <StaticQuery
                            query={graphql`
                                query {
                                    placeholderImage: file(relativePath: { eq: "../images/header.jpg" }) {
                                        childImageSharp {
                                            fluid(maxWidth: 300) {
                                            .   ..GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                }
                            `}
                            render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
                        /> */}
                    </div>
                </div>
                <div>
                    <ul className="actions relative text-center pb-3">
                        <li>
                            <ScrollLink
                                to="two"
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="btn btn-gray"
                            >
                                Compétences
                        </ScrollLink>
                        </li>
                    </ul>
                    <div className="absolute left-1/2 bg-gray-700 w-px h-5 md:h-20 b-4 mt-px">&nbsp;</div>
                </div>
            </section>

            <section id="two" className="bg-gray-600 md:flex p-4 md:p-16">
                <div className="mx-auto md:flex-shrink-0 md:w-1/2">
                    <div id="icons" className="md:flex md:flex-wrap md:justify-center md:py-8">
                        <div className="w-full md:w-1/2 my-16">
                            <div className="iconborder border border-white rounded mx-auto">
                                <div className="w-full h-full flex items-center justify-center text-blue-500">
                                    <FontAwesomeIcon fixedWidth size="4x" icon="ruler-combined" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 my-16">
                            <div className="iconborder border border-white rounded mx-auto">
                                <div className="w-full h-full flex items-center justify-center text-blue-600">
                                    <FontAwesomeIcon fixedWidth size="4x" icon="code" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 my-16">
                            <div className="iconborder border border-white rounded mx-auto">
                                <div className="w-full h-full flex items-center justify-center text-blue-700">
                                    <FontAwesomeIcon fixedWidth size="4x" icon="stethoscope" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 my-16">
                            <div className="iconborder border border-white rounded mx-auto">
                                <div className="w-full h-full flex items-center justify-center text-blue-800">
                                    <FontAwesomeIcon fixedWidth size="4x" icon="chalkboard-teacher" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 md:w-1/2 md:py-8 md:pr-16">
                    <Title color="white">Compétences</Title>
                    <p className="mt-8 text-lg">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </section>

            <section id="three" className="bg-white py-8 px-2 text-gray-700">
                <div className="w-1/2 mx-auto">
                    <Title color="gray-700">Clients</Title>
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:justify-center md:items-stretch md:px-16">
                    {Articles}
                </div>
            </section>

            <section id="four" className="bg-gray-600 p-4 md:p-16 text-white">
                <div className="mx-auto">
                    <Title color="white">Contact</Title>
                    <form action="https://formspree.io/romain@3rgo.tech" method="POST" className="w-full md:w-1/2 mx-auto my-8">
                        <input type="hidden" name="_subject" value="Contact via le site 3rgo.tech" />
                        <input type="text" name="_gotcha" className="hidden" />
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="name">
                                Nom
                        </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nom" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="email">
                                E-mail
                        </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="_replyto" type="email" placeholder="E-mail" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="message">
                                Message
                        </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" type="text" placeholder="Message" rows="6"></textarea>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-white" type="submit">
                                Envoyer
                        </button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
                allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___order] }) {
                edges {
                node {
                id
                    frontmatter {
                title
                        excerpt
                        clientImage {
                childImageSharp{
                fixed(height: 250, quality: 75) {
                ...GatsbyImageSharpFixed
            }
            }
        }
    }
}
}
}
        musk: file(relativePath: {eq: "musk.png"}) {
                childImageSharp {
                fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
            }
            }
        }
    }
`