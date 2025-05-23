import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Async Jobs - Yanok Platform"
      description="Manage Asynchronous Jobs and Tasks"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">Async Jobs</h1>
  <p class="text-2xl pt-10">Efficient Management of Asynchronous Tasks</p>
</div>

<div class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <div class="text-xl space-y-8">
      <h2 class="text-3xl font-bold">Job Management</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Queue and prioritize tasks</li>
        <li>Monitor job status and progress</li>
        <li>Automated retry mechanisms</li>
        <li>Resource allocation optimization</li>
      </ul>
    </div>
  </div>
</div>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Async Jobs - Yanok Platform</title>
          <meta name="description" content="Manage Asynchronous Jobs and Tasks" />
        </>
      ),
    },
  };
}
