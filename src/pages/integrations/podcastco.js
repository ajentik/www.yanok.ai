import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Podcast.co"
      description="Podcast.co is an all-in-one platform designed to make podcasting as simple as possible for businesses and content creators. Launch, distribute, and grow your podcast with ease."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/podcastco.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Podcast.co Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(236, 101, 77, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Podcast.co is an all-in-one platform designed to make podcasting as simple as possible for businesses and content creators. Launch, distribute, and grow your podcast with ease.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Get New Account Subscriber</div>
  <div>Triggers when someone\'s email is added as a subscriber to your account (This is a Growth and Premium plan feature).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Published Episodes</div>
  <div>Triggers when a podcast episode is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Transcriptions</div>
  <div>Triggers when a new transcription is available for the selected Podcast.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber to an Account</div>
  <div>Using an email address, add a subscriber to your account. (This is a Growth and Premium plan feature).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Episode From a File Url</div>
  <div>This will create an unlisted episode by downloading the file. The episode will be linked to the selected podcast.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber From an Account</div>
  <div>Using an email address, remove a current subscriber from your account. (This is a Growth and Premium plan feature).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Subscriber to Private Podcast</div>
  <div>Using an email address, add a subscriber to your private podcast. (This is a Growth and Premium plan feature).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Subscriber From Private Podcast</div>
  <div>Using an email address, remove a current subscriber from your private podcast. (This is a Growth and Premium plan feature).</div>
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
          <title>Podcast.co</title>
          <meta name="description" content="Podcast.co is an all-in-one platform designed to make podcasting as simple as possible for businesses and content creators. Launch, distribute, and grow your podcast with ease." />
        </>
      ),
    },
  };
}
