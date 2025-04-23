import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Cakemail"
      description={`Cakemail provides all the tools you need to deliver the emails people want. Engage your audience and grow your business with the tools and ongoing support you need to send marketing emails.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cakemail.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Cakemail Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(105, 0, 110, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Cakemail provides all the tools you need to deliver the emails people want. Engage your audience and grow your business with the tools and ongoing support you need to send marketing emails.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribed Contact</div>
  <div>Triggers when a Contact is unsubscribed.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Contact</div>
  <div>Triggers when a new Contact is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Bounce</div>
  <div>Triggers when an email bounces.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Click</div>
  <div>Triggers when a new Email Click is tracked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Email Open</div>
  <div>Triggers when a new Email Open is tracked.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New List</div>
  <div>Triggers when a List is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Suppressed Email</div>
  <div>Triggers when a new Suppressed Email is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated Contact</div>
  <div>Triggers when a Contact is updated.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add or Update Contact</div>
  <div>Add contact to a list or update an existing contact in a list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add Suppressed Email</div>
  <div>Add an email to the suppressed email list</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Send Transaction Email</div>
  <div>Sends a transactional email.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unsubscribe Contact</div>
  <div>Unsubscribe a Contact from a List.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Find Contact by Email</div>
  <div>Find a Contact by email in a List.</div>
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
          <title>Cakemail</title>
          <meta name="description" content={`Cakemail provides all the tools you need to deliver the emails people want. Engage your audience and grow your business with the tools and ongoing support you need to send marketing emails.`} />
        </>
      ),
    },
  };
}
