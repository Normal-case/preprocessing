import Layout from '../components/MyLayout'

export default (props) => (
    <Layout>
        <h1>{props.url}</h1>
        <p>This is the blog post content.</p>
    </Layout>
)