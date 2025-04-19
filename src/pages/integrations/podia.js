import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Podia"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/podia.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Podia Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(58, 159, 241, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Podia lets anyone sell memberships, online courses and digital downloads online.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Cancel Membership Subscription</div>
  <div>Triggers when a subscriber cancels a membership plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Membership Subscription</div>
  <div>Triggers when a customer subscribes to a membership plan.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email List Subscription</div>
  <div>Triggers when a customer subscribes to an email list on the site or a pre-launch course</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers when a user purchases a free or paid online course or digital download.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe a Customer</div>
  <div>Unsubscribes a customer from a community plan (available on Shaker and Earthquaker plans)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add an Email List Subscription</div>
  <div>Subscribes a customer to an email list (available on Shaker and Earthquaker plans)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Enroll a Customer</div>
  <div>Enrolls a customer in a product (available on Shaker and Earthquaker plans)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscribe a Customer</div>
  <div>Subscribes a customer to a membership plan (available on Shaker and Earthquaker plans)</div>
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
          <title>Podia</title>
        </>
      ),
    },
  };
}
