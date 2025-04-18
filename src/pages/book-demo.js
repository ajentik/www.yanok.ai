import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Book a demo with Yanok AI team"
      description=""
    >
      <div dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" src="https://form.jotform.com/jsform/241232267717455"></script>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Book a demo with Yanok AI team</title>
          <meta name="description" content="" />
        </>
      ),
    },
  };
}
