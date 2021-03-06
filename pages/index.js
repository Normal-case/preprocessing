import Header from '../components/header'
import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => {
    return (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )

}

export default () => (
    <div>
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title='Hello Next.js' />
                <PostLink title='Learn Next.js is awesome' />
                <PostLink title='Deploy apps with Zeit' />
            </ul>
        </Layout>
    </div>
)