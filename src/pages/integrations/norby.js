import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Norby"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/norby.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Norby Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(118, 112, 36, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Build your brand, grow your community, and activate your audience through Norby, your all-in-one marketing tool.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Contact Created</div>
  <div>Triggers when a new contact is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Contact Updated</div>
  <div>Triggers when a new contact is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Signup Published</div>
  <div>Triggers when a signup form is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Signup</div>
  <div>Triggers when a user completes a signup.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Published</div>
  <div>Triggers when an event is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Event Registration</div>
  <div>Triggers when a user registers to an event.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Link Created</div>
  <div>Triggers when a link is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Published</div>
  <div>Triggers when a newsletter is published.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Newsletter Signup</div>
  <div>Triggers when a user subscribes to your newsletters.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      
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
          <title>Norby</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
