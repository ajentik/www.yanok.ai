import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Mindbaz"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/mindbaz.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Mindbaz Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(197, 172, 146, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Solutions for sending your Marketing Campaigns (email & SMS).</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Updated Trigger</div>
  <div>Triggers when user is updated.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Clicked Link</div>
  <div>Triggers when user click on link in mail.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Creation Trigger</div>
  <div>Triggers when user is added to database.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Open Mail Tracking</div>
  <div>Triggers when a mail is accessed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">User Unsub Trigger</div>
  <div>Triggers when user unsub from newsletter.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Edit a Subscriber (Dynamic Fields)</div>
  <div>Edit a subscriber from the mailing list with all fields (static and custom)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add a Subscriber (Dynamic Fields)</div>
  <div>Add a new subscriber to the mailing list with all fields (static and custom)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Mail (OneShot | Full Options)</div>
  <div>Campaign sending to only one mail. All fields are present here, might be useful if you want to modify mail elements.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send a Mail (OneShot)</div>
  <div>Campaign sending to only one mail with only required parameters.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Subscriber</div>
  <div>Unsubscribe a subscriber (state change from subscribed to unsubscribed</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Subscriber</div>
  <div>Return subscriber with his fields based on his mail.</div>
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
          <title>Mindbaz</title>
        </>
      ),
    },
  };
}
