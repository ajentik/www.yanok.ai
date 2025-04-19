import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Short.io"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/short-io.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Short.io Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(51, 214, 162, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Short.io is a white label link shortener, which allows you to create short links on your own domain.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Link Created</div>
  <div>Triggers when new link is created.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Create a Short Link</div>
  <div>Creates new link on your own domain.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete a Link</div>
  <div>Deletes a link by ID.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Domain Statistics</div>
  <div>Returns detailed statistics for domain in given period</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Expire a Link</div>
  <div>Expires a link, users will not be able to follow this link anymore.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Link by Path</div>
  <div>Returns link info by path and Domain ID</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update a Link</div>
  <div>Updates existing short link with new values.</div>
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
          <title>Short.io</title>
        </>
      ),
    },
  };
}
