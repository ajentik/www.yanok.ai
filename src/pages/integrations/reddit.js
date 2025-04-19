import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Reddit"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/reddit.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Reddit Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(255, 69, 0, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Reddit, stylized as reddit, is a social news and entertainment website where registered users submit content in the form of links or text posts.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Comment by User</div>
  <div>Triggers when a new comment is created by a certain user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Hot Post in Subreddit</div>
  <div>Triggers when there is a new hot post in the top 10 of a subreddit.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Post or Comment Matching Search</div>
  <div>Triggers when there is a new post or comment that matches a search string.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Link Post</div>
  <div>Submit a new link post to a subreddit.</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Reddit</title>
        </>
      ),
    },
  };
}
